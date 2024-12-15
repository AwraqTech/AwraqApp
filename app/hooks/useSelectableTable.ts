"use client"

import { useState } from 'react';

interface UseSelectableTableProps<T> {
  data: T[];
  getId: (item: T) => string; // Function to get a unique ID for each item
}

export const useSelectableTable = <T,>({ data, getId }: UseSelectableTableProps<T>) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const toggleSelectAll = () => {
    if (selected.length === data.length) {
      setSelected([]); // Deselect all
    } else {
      setSelected(data.map((item) => getId(item))); // Select all
    }
  };

  const isSelected = (id: string) => selected.includes(id);
  const isAllSelected = selected.length === data.length && data.length > 0;

  return {
    selected,
    toggleSelect,
    toggleSelectAll,
    isSelected,
    isAllSelected,
  };
};
