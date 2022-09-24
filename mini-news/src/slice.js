import { combineReducers, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// const initialStateVal = { "jaeBalDolAgara" }

export const clipList = createSlice({
  name: "clip",
  initialState: { clipData : [] },
  reducers: {
    addId(state, action) {
      const data = action.payload
      state.clipData.push(data);
    },
    removeId(state, action) {
      let remove = state.clipData.filter((item) => item.id !== action.payload);
      return remove;
    },
  },
});


const persistConfig = {
  key : 'clipStore',
  storage //store 사용
}

export const rootReducer = combineReducers({
  search : clipList.reducer // Slice 안에 있는 reducer 추가
})

export const {addId,removeId} = clipList.actions;

export default persistReducer(persistConfig, clipList.reducer)  /// 퍼시스트 리듀서 합치기?