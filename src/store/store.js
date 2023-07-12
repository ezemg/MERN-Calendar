import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './ui/uiSlice.js';
import { calendarSlice } from './calendar/calendarSlice.js';

export const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
    ui: uiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
