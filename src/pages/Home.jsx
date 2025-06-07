import React from 'react'
import Hero from '../components/Hero'
import BiodataForm from '../components/BiodataForm'
import FeatureCard from '../components/FeatureCard'

const Home = () => {
    return (
        <div className="  w-full h-max  ">
            <Hero />
            <BiodataForm />
            <FeatureCard />
        </div>
    )
}

export default Home