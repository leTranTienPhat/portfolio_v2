import Marquee from "../../common/components/Marquee";
import Hero from "../../common/components/Hero";
import AboutMe from "../../common/components/AboutMe";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-blue dark:bg-gradient-black w-screen overflow-hidden">
        <Marquee />
        <Hero />
      </section>
      <AboutMe />
    </>
  )
}