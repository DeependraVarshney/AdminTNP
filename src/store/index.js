import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import studentReducer from './slices/studentSlice';
import companyReducer from './slices/companySlice';
import placementReducer from './slices/placementSlice';
import templateReducer from './slices/templateSlice';
import reportReducer from './slices/reportSlice';
import settingsReducer from './slices/settingsSlice';
import notificationReducer from './slices/notificationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    students: studentReducer,
    companies: companyReducer,
    placements: placementReducer,
    templates: templateReducer,
    reports: reportReducer,
    settings: settingsReducer,
    notifications: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

/** @type {ReturnType<typeof store.getState>} */
export const RootState = null;
/** @type {typeof store.dispatch} */
export const AppDispatch = null; 