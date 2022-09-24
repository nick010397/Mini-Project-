import { configureStore, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import clipListReducer from './slice'

//useState랑 비슷한 역할


// let searchValue = createSlice({
// name : 'search',
// initialState : [],
// reducers : {
//   searchInput(state, action){
//     state = action.payload
//     console.log(state)
//   }
// }
// })

// export let {searchInput} = searchValue.actions

export default configureStore({
  reducer: {
    clipList: clipListReducer
    // searchValue : searchValue.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
