import Biography from "./Biography";
import Illustration from "./Illustration";

export default function AboutMe() {
  return (
    <section>
      <div className='h-screen'>
        <div className='grid grid-cols-2 h-full'>
          <div className="grid place-content-center">
            <Illustration />
          </div>
          <div className=" grid place-content-center">
            <Biography />
          </div>
        </div>
      </div>
    </section>
  )
}