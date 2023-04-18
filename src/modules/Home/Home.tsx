import Hero from "../../common/components/Hero";
import AboutMe from "../../common/components/AboutMe";
import Section from "../../common/components/layout/Section";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <Section>
        <AboutMe />
      </Section>
    </>
  )
}