import Slider from "react-slick";

type Props = {
  projectSlide: string[]
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  adaptiveHeight: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true,
        dots: false
      }
    },
  ]
};

export default function ProjectSlide({ projectSlide }: Props) {
  return (
    <div className="w-full overflow-hidden cursor-grab p-10 min-h-[300px]">
      <Slider {...settings} >
        {projectSlide.map((image, index) => {
          return (
            <div key={index} className=" p-4">
              <img src={image} alt={image} className="" />
            </div>
          )
        })}
      </Slider>
    </div >
  )
}