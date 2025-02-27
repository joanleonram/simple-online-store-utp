import { useState } from "react";
import { StorageType } from "../../types/types";

const useBrowserStorage = <T>(
  key: string,
  initialValue: T,
  storageType: StorageType = "localStorage"
) => {
  const storage =
    storageType === "localStorage" ? localStorage : sessionStorage;

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
};

export default useBrowserStorage;
