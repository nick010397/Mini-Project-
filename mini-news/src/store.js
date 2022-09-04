import { configureStore, createSlice } from '@reduxjs/toolkit'
import clipList from "./components/reducers/clipList"

// //useState랑 비슷한 역할
// let clipList = createSlice({
//     name : 'clipId',
//     initialState : [],
//     reducers : {
//       addId(state, action){
//         state.push(action.payload)
//         console.log(state);
//       }
//       removeId(state,action){
//         state.filter((item)=> item.id !== action.payload) ? 
//       }
//     }
// })



export const {addId} = clipList.actions

// let newlist = createSlice({
//     name : 'listid',
//     initialState : [10, 11, 12]
// })

export default configureStore({
  reducer: { 
    clipList : clipList.reducer,
    // newlist : newlist.reducer
  }
})