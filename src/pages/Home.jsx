import React from 'react'
import Hero from '../components/Hero'
import BiodataForm from '../components/BiodataForm'
import FeatureCard from '../components/FeatureCard'
import BiodataMakerCard from '../components/BiodataMakerCard'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import DetailedGuied from '../components/DetailedGuied'

const Home = () => {
    return (
        <div className="w-full h-max overflow-x-hidden bg-[#EFE7FDB0]">
            <Hero />
            <BiodataForm />
            <FeatureCard />
            <DetailedGuied />
            <BiodataMakerCard />
            <FAQ />
            <Footer />


        </div>
    )
}

export default Home