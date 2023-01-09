import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DelayRandomly } from "../../helpers";

export const selectRooms = (state) => {
    return state.rooms;
}

export const fetchRooms = createAsyncThunk('rooms/fetchAll', async (arg, ThunkAPI) => {
    await DelayRandomly();
    const request = await fetch(process.env.REACT_APP_API_URI + 'rooms', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlenconded',
            'Authorization': 'Bearer ' + localStorage.getItem('APIToken')
        }
    });
    const data = await request.json();
    return data;
});
export const fetchRoomById = createAsyncThunk("rooms/fetchById", async (id, thunkAPI) => {
    await DelayRandomly();
    return {"room_number":id,"id":"DELUXE-R28443","room_type":2,"facilities":"0-1-1-0-0-1-0","price":363,"availability":1};
});
export const createRoom = createAsyncThunk("room/create", async (arg, thunkAPI) => {
    await DelayRandomly();
    return;
});
export const deleteRoom = createAsyncThunk("room/deleteById", async (id, thunkAPI) => {
    await DelayRandomly();
    return id;
});
export const updateRoom = createAsyncThunk("room/updateById", async (object, thunkAPI) => {
    await DelayRandomly();
    return object;
});

export const RoomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        fulfilled: false,
        initialized: false,
        hasError: false,
        items: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRooms.fulfilled, (state, action) => {
            // Add user to the state array
            state.fulfilled = true;
            state.hasError = false;
            state.items.push(...action.payload);
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
            state.items.push(action.payload);
        });
        builder.addCase(fetchRoomById.rejected, (state, action) => {
            state.hasError = true;
        });

        builder.addCase(createRoom.fulfilled, (state, action) => {
            state.items.push(action.payload);
        });

        builder.addCase(deleteRoom.fulfilled, (state, action) => {
            state.items = state.items.filter(room => room.id !== action.payload);
        });

        builder.addCase(updateRoom.fulfilled, (state, action) => {
            state.items = state.rooms.map(room => room.id === action.payload.id ? action.payload : room);
        });
    }
});