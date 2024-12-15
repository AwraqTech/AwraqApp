"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface PaginationContextProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;
  visiblePages: number[];
  handleDotClick: (direction: 'next' | 'prev') => void;
}

const PaginationContext = createContext<PaginationContextProps | undefined>(undefined);

export const PaginationProvider = ({
  children,
  totalItems,
  itemsPerPage = 25,
}: {
  children: React.ReactNode;
  totalItems: number;
  itemsPerPage?: number;
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMounted, setIsMounted] = useState(false);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const maxVisiblePages = 4;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getVisiblePages = () => {
    const start = Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages;
    const end = Math.min(start + maxVisiblePages - 1, totalPages - 1);
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const handleDotClick = (direction: 'next' | 'prev') => {
    let newPage = direction === 'next' ? currentPage + maxVisiblePages : currentPage - maxVisiblePages;
    newPage = Math.max(1, Math.min(newPage, totalPages));
    setCurrentPage(newPage);
  };

  const visiblePages = getVisiblePages();

  if (!isMounted) return null;

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        totalPages,
        itemsPerPage,
        setCurrentPage,
        visiblePages,
        handleDotClick,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePagination must be used within a PaginationProvider");
  }
  return context;
};
