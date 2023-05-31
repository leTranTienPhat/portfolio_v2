import illustration from "../../../../assets/Images/design-01.webp"

export default function DesignOne() {
  return (
    <div className="relative">
      <div className="relative w-[300px] md:w-full ">
        <img src={illustration} alt="illustration" />
      </div>
    </div>
  )
}