import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShadowBlockState {
  isOpen: boolean
}

const initialState: ShadowBlockState = {
  isOpen: false,
}

export const shadowBlockSlice = createSlice({
  name: 'shadowBlock',
  initialState,
  reducers: {
    setIsOpen(state: ShadowBlockState, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
})

export const {setIsOpen} = shadowBlockSlice.actions;
export default shadowBlockSlice.reducer;
