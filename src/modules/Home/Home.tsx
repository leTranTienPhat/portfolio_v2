import Hero from "../../common/components/Hero";
import AboutMe from "../../common/components/AboutMe";
import Section from "../../common/components/layout/Section";
import ProjectShowcase from "../../common/components/ProjectShowcase";
import ContactMe from "../../common/components/ContactMe";


export default function Home() {
  return (
    <>
      <section className="w-screen h-screen">
        <Hero />
      </section>
      <Section>
        <AboutMe />
      </Section>
      <ProjectShowcase />
      <Section>
        <ContactMe />
      </Section>
    </>
  )
}