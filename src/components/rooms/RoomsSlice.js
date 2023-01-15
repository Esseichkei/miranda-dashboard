import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const selectRooms = (state) => {
    return state.rooms;
}

export const fetchRooms = createAsyncThunk('rooms/fetchAll', async (arg, ThunkAPI) => {
    const request = await fetch(process.env.REACT_APP_API_URI + 'rooms', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('APIToken')
        }
    });
    const data = await request.json();
    return data;
});
export const fetchRoomById = createAsyncThunk("rooms/fetchById/", async (id, thunkAPI) => {
    const request = await fetch(process.env.REACT_APP_API_URI + 'rooms/'+ id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('APIToken')
        }
    });
    const data = await request.json();
    return data;
});
export const createRoom = createAsyncThunk("room/create", async (object, thunkAPI) => {
    await fetch(process.env.REACT_APP_API_URI + 'rooms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('APIToken')
        },
        body: JSON.stringify(object)
    });
    //thunkAPI.dispatch(fetchRooms()); TEST IF THIS STILL WORKS
    return object;
});
export const deleteRoom = createAsyncThunk("room/deleteById", async (id, thunkAPI) => {
    await fetch(process.env.REACT_APP_API_URI + 'rooms', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('APIToken')
        },
        body: JSON.stringify({id: id})
    });
    //thunkAPI.dispatch(fetchRooms());
    //thunkAPI.dispatch(fetchRoomById(id))
    return id;
});
export const updateRoom = createAsyncThunk("room/updateById", async (object, thunkAPI) => {
    await fetch(process.env.REACT_APP_API_URI + 'rooms', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('APIToken')
        },
        body: JSON.stringify(object)
    });
    //thunkAPI.dispatch(fetchRooms());
    //thunkAPI.dispatch(fetchRoomById(object.id))
    return object;
});

export const RoomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        fulfilled: false,
        initialized: false,
        hasError: false,
        items: [],
        singleItem: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRooms.fulfilled, (state, action) => {
            // Add user to the state array
            state.fulfilled = true;
            state.hasError = false;
            state.items = action.payload;
        });
        builder.addCase(fetchRooms.pending, (state, action) => {
            state.initialized = true;
            state.fulfilled = false;
            state.hasError = false;
        });
        builder.addCase(fetchRooms.rejected, (state, action) => {
            state.fulfilled = false;
            state.hasError = true;
        });

        builder.addCase(fetchRoomById.fulfilled, (state, action) => {
            state.fulfilled = true;
            state.singleItem = action.payload;
        });
        builder.addCase(fetchRoomById.pending, (state, action) => {
            state.fulfilled = false;
        });
        builder.addCase(fetchRoomById.rejected, (state, action) => {
            state.hasError = true;
        });

        builder.addCase(createRoom.fulfilled, (state, action) => {
            state.items.push(action.payload);
            state.fulfilled = true;
        });
        builder.addCase(createRoom.pending, (state, action) => {
            state.fulfilled = false;
        });

        builder.addCase(deleteRoom.fulfilled, (state, action) => {
            state.fulfilled = true;
            state.singleItem = null;
            state.initialized = null;
        });
        builder.addCase(deleteRoom.pending, (state, action) => {
            state.fulfilled = false;
        });

        builder.addCase(updateRoom.fulfilled, (state, action) => {
            state.fulfilled = true;
        });
        builder.addCase(updateRoom.pending, (state, action) => {
            state.fulfilled = false;
        });
    }
});