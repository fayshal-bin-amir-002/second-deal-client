declare module "redux-persist/lib/storage/createWebStorage" {
  const createWebStorage: (type: "local" | "session") => {
    getItem: (key: string) => Promise<string | null>;
    setItem: (key: string, value: string) => Promise<void>;
    removeItem: (key: string) => Promise<void>;
  };

  export default createWebStorage;
}
