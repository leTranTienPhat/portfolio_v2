import "./styles.css"

type Props = {
  image: string
  position: "front" | "back"
}
export default function CardDecorate({ image, position }: Props) {
  return (
    <div className="canvas">
      <img src={image} alt="image" className={`canvas ${position} shadow-2xl p-2`} />
    </div>
  )
}