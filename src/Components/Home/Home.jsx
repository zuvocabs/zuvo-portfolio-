import About from "./About";
import ContactSection from "./ContactSection";
import CTA from "./CTA";
import DownloadApp from "./DownloadApp";
import Hero from "./Hero";
import Services from "./Services";

export default function Home() {
    return (

        <>

            <Hero />
            <DownloadApp />
            <Services />
            <About />
            <CTA/>
            <ContactSection/>

        </>

    )
}