export interface IListingItem {
  _id: string;
  title: string;
  description: string;
  price: number;
  condition: "New" | "Used";
  images: string[];
  userId: {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    location: string;
  };
  status: "Available" | "Sold";
  category: {
    _id: string;
    name: string;
    image: string;
    __v: number;
  };
  location: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProduct {
  category: string;
  condition: "New" | "Used";
  description: string;
  images: string[];
  price: number;
  title: string;
}
