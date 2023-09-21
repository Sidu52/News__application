import { createSlice } from '@reduxjs/toolkit';

// Initial state for the datareducer
const initialState = {
    news: [],
    data: {},
    saved: [],
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
            state.data = data;
            // Filter news articles based on the provided category
            // state.news = state.news.filter((article) => article.category === category);
        },
        cartNews: (state, action) => {
            const data = action.payload;
            state.saved = data;
        },
        removeNews: (state, action) => {
            const dataToRemove = action.payload;
            state.saved = state.saved.filter(item => item.title !== dataToRemove.title);
        }
    },
});

export const { addtonews, addtodata, cartNews, removeNews } = datareducer.actions;
export default datareducer.reducer;
