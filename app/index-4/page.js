import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home4/Banner"
import MedicalClaimsBilling from "@/components/sections/home4/MedicalClaimsBilling"
import About from "@/components/sections/home4/About"
import Services from "@/components/sections/home4/Services"
import Features from "@/components/sections/home4/Features"
import Team from "@/components/sections/home4/Team"
import Testimonial from "@/components/sections/home4/Testimonial"
import Contact from "@/components/sections/home4/Contact"
import Subscribe from "@/components/sections/home4/Subscribe"
import "./page.module.css"

export default function Home4() {
    return (
        <>
            <Layout headerStyle={4} footerStyle={1}>
                <Banner />
                <MedicalClaimsBilling />
                <About />
                <Services />
                <Features />
                <Team />
                <Testimonial />
                <Contact />
                <Subscribe />
            </Layout>
        </>
    )
}
