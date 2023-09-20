import { createSlice } from '@reduxjs/toolkit';

// Initial state for the datareducer
const initialState = {
    news: [],
    data: {},
};

// Create a datareducer slice using createSlice from Redux Toolkit
const datareducer = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        addtonews: (state, action) => {
            const data = action.payload;
            state.news = data;
        },
        addtodata: (state, action) => {
            const data = action.payload;
            state.data= data;
            // Filter news articles based on the provided category
            // state.news = state.news.filter((article) => article.category === category);
        },
    },
});

export const { addtonews, addtodata } = datareducer.actions;
export default datareducer.reducer;
