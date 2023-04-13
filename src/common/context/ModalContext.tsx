import { createContext, useState } from "react";
import ModalComponent from "../components/ModalComponent";

type IModalContext = {
  isOpen: Boolean,
  openModal: (modalContent: React.ReactElement) => void,
  closeModal: () => void,
}

type IModalProviderProps = {
  children: React.ReactElement,
}

const initialModalContext: IModalContext = {
  isOpen: false,
  openModal: () => { },
  closeModal: () => { },
}

export const ModalContext = createContext(initialModalContext)

export default function ModalProvider({ children }: IModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<React.ReactElement>()

  const openModal = (modalContent: React.ReactElement) => {
    setModalContent(modalContent)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <ModalContext.Provider value={{
      isOpen: isModalOpen,
      openModal: openModal,
      closeModal: closeModal,
    }}>
      {isModalOpen && <ModalComponent modalContent={modalContent} />}
      {children}
    </ModalContext.Provider>
  )
}