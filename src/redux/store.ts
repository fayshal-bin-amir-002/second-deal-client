import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./features/wishlistSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "./storage";

const persistConfig = {
  key: "wishlist",
  storage,
};

const persistedWishList = persistReducer(persistConfig, wishlistReducer);

export const makeStore = () => {
  return configureStore({
    reducer: {
      wishlist: persistedWishList,
    },
    middleware: (getDefaultMiddlewares) =>
      getDefaultMiddlewares({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
