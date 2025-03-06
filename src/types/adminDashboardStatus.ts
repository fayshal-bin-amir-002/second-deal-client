interface TransactionSummary {
  _id: "Completed" | "Canceled" | "Pending"; // Add more statuses if needed
  total: number;
}

export interface IAdminDashboardStats {
  totalActiveUser: number;
  totalBlockedUser: number;
  totalListingProduct: number;
  totalTransactions: TransactionSummary[];
  totalUser: number;
}
