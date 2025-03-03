import { IListingItem } from "./listingItem";

interface IUser {
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
}

export interface ITransaction {
  buyerId: IUser;
  sellerId: IUser;
  itemId: IListingItem;
  status: "Pending" | "Completed" | "Canceled";
}
