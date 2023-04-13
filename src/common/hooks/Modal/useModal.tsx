import { useContext } from "react"
import { ModalContext } from "../../context/ModalContext"

export function useModal() {
  const { isOpen, openModal, closeModal } = useContext(ModalContext)

  return { isOpen, openModal, closeModal }
}