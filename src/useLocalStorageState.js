import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const StoredValue = localStorage.getItem(key);
    return StoredValue ? JSON.parse(StoredValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value]
  );
  return [value, setValue];
}
