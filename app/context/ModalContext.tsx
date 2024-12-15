"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalState {
  [key: string]: boolean;
}

interface ModalContextType {
  isModalOpen: (id: string) => boolean;
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modals, setModals] = useState<ModalState>({});

  const isModalOpen = (id: string) => modals[id] || false;

  const openModal = (id: string) => {
    setModals((prev) => ({ ...prev, [id]: true }));
  };

  const closeModal = (id: string) => {
    setModals((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
