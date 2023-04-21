import Slider from "react-slick";

type Props = {
  projectSlide: string[]
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2
};

const ProjectSlide = ({ projectSlide }: Props) => {
  return (
    <div className="w-full overflow-hidden cursor-grab p-10 h-auto">
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

export default ProjectSlide