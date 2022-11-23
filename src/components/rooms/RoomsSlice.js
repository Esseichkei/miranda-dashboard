import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DelayRandomly } from "../../helpers";

export const selectRooms = (state) => {
    return state.rooms;
}

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async (arg, ThunkAPI) => {
    await DelayRandomly();
    // const request = await fetch(endpoint + 'rooms?request="fetchAll");
    // const data = await JSON.parse(request.data);
    const roomsData = [{"room_number":1,"id":"DELUXE-R21936","room_type":4,"facilities":"0-1-0-1-0-1-0","price":315,"availability":0},
    {"room_number":2,"id":"DELUXE-R83271","room_type":2,"facilities":"1-1-1-1-1-0-0","price":202,"availability":0},
    {"room_number":3,"id":"DELUXE-R57784","room_type":3,"facilities":"1-0-1-0-0-0-0","price":329,"availability":1},
    {"room_number":4,"id":"DELUXE-R62975","room_type":4,"facilities":"1-1-0-0-1-1-0","price":292,"availability":1},
    {"room_number":5,"id":"DELUXE-R40499","room_type":3,"facilities":"0-0-1-1-1-0-1","price":302,"availability":0},
    {"room_number":6,"id":"DELUXE-R14009","room_type":4,"facilities":"1-1-1-0-1-0-1","price":339,"availability":1},
    {"room_number":7,"id":"DELUXE-R60288","room_type":1,"facilities":"0-1-1-0-1-1-1","price":274,"availability":1},
    {"room_number":8,"id":"DELUXE-R34881","room_type":3,"facilities":"0-0-0-1-0-1-1","price":264,"availability":1},
    {"room_number":9,"id":"DELUXE-R80414","room_type":4,"facilities":"0-0-1-1-0-1-1","price":360,"availability":0},
    {"room_number":10,"id":"DELUXE-R12879","room_type":3,"facilities":"1-1-0-0-1-0-0","price":223,"availability":0},
    {"room_number":11,"id":"DELUXE-R74655","room_type":3,"facilities":"0-0-0-0-1-0-0","price":276,"availability":0},
    {"room_number":12,"id":"DELUXE-R54537","room_type":1,"facilities":"0-1-0-1-0-1-1","price":382,"availability":0},
    {"room_number":13,"id":"DELUXE-R95653","room_type":1,"facilities":"0-0-1-1-1-0-1","price":393,"availability":0},
    {"room_number":14,"id":"DELUXE-R05500","room_type":4,"facilities":"0-0-1-0-1-0-0","price":324,"availability":0},
    {"room_number":15,"id":"DELUXE-R18635","room_type":4,"facilities":"0-1-0-1-0-0-1","price":309,"availability":0},
    {"room_number":16,"id":"DELUXE-R69018","room_type":4,"facilities":"0-1-0-1-1-1-1","price":243,"availability":0},
    {"room_number":17,"id":"DELUXE-R69251","room_type":4,"facilities":"0-0-0-1-1-1-1","price":327,"availability":1},
    {"room_number":18,"id":"DELUXE-R36825","room_type":3,"facilities":"0-0-1-0-0-0-0","price":354,"availability":1},
    {"room_number":19,"id":"DELUXE-R72606","room_type":3,"facilities":"1-1-1-1-0-1-0","price":280,"availability":0},
    {"room_number":20,"id":"DELUXE-R94084","room_type":1,"facilities":"0-1-0-0-1-0-0","price":256,"availability":0},
    {"room_number":21,"id":"DELUXE-R34317","room_type":2,"facilities":"1-1-1-1-1-1-0","price":212,"availability":1},
    {"room_number":22,"id":"DELUXE-R80563","room_type":2,"facilities":"0-0-1-1-1-0-0","price":361,"availability":0},
    {"room_number":23,"id":"DELUXE-R47226","room_type":3,"facilities":"0-1-0-1-0-1-1","price":236,"availability":1},
    {"room_number":24,"id":"DELUXE-R50458","room_type":4,"facilities":"1-1-0-1-1-1-1","price":305,"availability":0},
    {"room_number":25,"id":"DELUXE-R52456","room_type":4,"facilities":"0-1-1-1-1-1-0","price":338,"availability":0},
    {"room_number":26,"id":"DELUXE-R37295","room_type":1,"facilities":"0-1-1-1-1-0-0","price":362,"availability":1},
    {"room_number":27,"id":"DELUXE-R91259","room_type":3,"facilities":"0-1-1-1-0-1-1","price":305,"availability":1},
    {"room_number":28,"id":"DELUXE-R13202","room_type":1,"facilities":"0-1-0-1-0-1-0","price":364,"availability":0},
    {"room_number":29,"id":"DELUXE-R88189","room_type":1,"facilities":"1-1-0-1-1-1-0","price":383,"availability":1},
    {"room_number":30,"id":"DELUXE-R86112","room_type":3,"facilities":"0-1-0-1-1-1-0","price":214,"availability":1},
    {"room_number":31,"id":"DELUXE-R40980","room_type":2,"facilities":"1-0-1-1-0-1-0","price":202,"availability":1},
    {"room_number":32,"id":"DELUXE-R52400","room_type":2,"facilities":"0-0-0-1-1-1-1","price":333,"availability":0},
    {"room_number":33,"id":"DELUXE-R00276","room_type":2,"facilities":"0-1-0-1-1-1-0","price":201,"availability":1},
    {"room_number":34,"id":"DELUXE-R87620","room_type":2,"facilities":"0-1-1-0-0-1-1","price":304,"availability":1},
    {"room_number":35,"id":"DELUXE-R68883","room_type":3,"facilities":"1-1-0-0-1-1-1","price":201,"availability":0},
    {"room_number":36,"id":"DELUXE-R29378","room_type":3,"facilities":"1-0-0-0-0-0-1","price":341,"availability":0},
    {"room_number":37,"id":"DELUXE-R98148","room_type":3,"facilities":"0-1-1-1-1-0-1","price":383,"availability":0},
    {"room_number":38,"id":"DELUXE-R31729","room_type":2,"facilities":"0-0-1-1-1-1-1","price":252,"availability":0},
    {"room_number":39,"id":"DELUXE-R13069","room_type":3,"facilities":"0-0-0-1-0-0-1","price":226,"availability":1},
    {"room_number":40,"id":"DELUXE-R42053","room_type":3,"facilities":"1-0-1-1-1-1-1","price":348,"availability":1},
    {"room_number":41,"id":"DELUXE-R14870","room_type":4,"facilities":"1-1-1-1-0-0-1","price":379,"availability":1},
    {"room_number":42,"id":"DELUXE-R43131","room_type":2,"facilities":"1-0-1-0-1-1-1","price":324,"availability":1},
    {"room_number":43,"id":"DELUXE-R36392","room_type":1,"facilities":"0-1-0-1-1-0-1","price":353,"availability":0},
    {"room_number":44,"id":"DELUXE-R60040","room_type":4,"facilities":"0-1-1-0-1-0-0","price":275,"availability":0},
    {"room_number":45,"id":"DELUXE-R10061","room_type":1,"facilities":"1-0-1-0-0-1-1","price":282,"availability":1},
    {"room_number":46,"id":"DELUXE-R72852","room_type":4,"facilities":"0-0-1-1-0-0-0","price":327,"availability":1},
    {"room_number":47,"id":"DELUXE-R28443","room_type":2,"facilities":"0-1-1-0-0-1-0","price":363,"availability":1},
    {"room_number":48,"id":"DELUXE-R68915","room_type":4,"facilities":"1-1-0-0-0-1-0","price":383,"availability":1},
    {"room_number":49,"id":"DELUXE-R41601","room_type":1,"facilities":"0-0-1-1-1-0-1","price":384,"availability":0},
    {"room_number":50,"id":"DELUXE-R95477","room_type":2,"facilities":"0-1-0-1-0-1-0","price":395,"availability":0}]
    return roomsData;
});

export const RoomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        fulfilled: false,
        initialized: false,
        hasError: false,
        rooms: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRooms.fulfilled, (state, action) => {
            // Add user to the state array
            state.fulfilled = true;
            state.hasError = false;
            state.rooms.push(action.payload)
        });
        builder.addCase(fetchRooms.pending, (state, payload) => {
            state.initialized = true;
            state.fulfilled = false;
            state.hasError = false;
        });
        builder.addCase(fetchRooms.rejected, (state, payload) => {
            state.fulfilled = false;
            state.hasError = true;
        });
    }
});