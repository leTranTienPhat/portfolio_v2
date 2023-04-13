import { useModal } from "../../hooks/Modal/useModal"

export default function ModalComponent({ modalContent }: any) {
  const { closeModal } = useModal()

  const handleCloseModal = () => {
    closeModal()
  }

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <div className="bg-white w-[600px] h-[400px]">
        {modalContent}
        <button onClick={handleCloseModal}>Close The Modal</button>
      </div>
    </div>
  )
}