import { createSlice } from "@reduxjs/toolkit";
import { IListingItem } from "@/types";
import { RootState } from "../store";

const initialState: { wishlist: IListingItem[] } = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      if (state.wishlist.length === 0) {
        state.wishlist.push(action.payload);
      } else {
        const existingItem = state.wishlist.find(
          (item) => item._id === action.payload._id
        );
        if (!existingItem) {
          state.wishlist.push(action.payload);
        }
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload
      );
    },
    clearWishlist: (state) => {
      state.wishlist = [];
    },
  },
});

export const wishlistSelector = (state: RootState) => state.wishlist.wishlist;

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
