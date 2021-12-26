import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTasks as fetch } from '@Api'
import { Task } from 'Api/Tasks'

export const getTasks = createAsyncThunk('root/getTasks', async () => {
  return (await fetch()) as Task[] | null
})

const TaskSlice = createSlice({
  name: 'Tasks',
  initialState: {
    data: [] as Task[] | null,
    loading: true,
    success: null as boolean | null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTasks.pending, state => {
      state.loading = true
    })
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
      state.success = true
    })
    builder.addCase(getTasks.rejected, state => {
      state.loading = false
      state.success = false
    })
  },
})

export default TaskSlice.reducer
