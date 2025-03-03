import { IListingItem } from "./listingItem";

interface IUser {
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
}

export interface ITransaction {
  _id: string;
  buyerId: IUser;
  sellerId: IUser;
  itemId: IListingItem;
  status: "Pending" | "Completed" | "Canceled";
  createdAt: string;
}
