import { configureStore, createSlice } from '@reduxjs/toolkit'

//useState랑 비슷한 역할
let clipList = createSlice({
    name : 'clipId',
    initialState : [],
    reducers : {
      addId(state, action){
        state.push(action.payload)
      }
    }
})

export let {addId} = clipList.actions

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