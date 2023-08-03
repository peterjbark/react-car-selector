import {configureStore} from '@reduxjs/toolkit'
import darkModeRecuer from '../features/darkModeSlice';

export const store = configureStore({

    reducer:{
        darkMode: darkModeRecuer
    }

});