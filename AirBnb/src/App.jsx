import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../component/Navbar'
import Body from '../component/Body'
import Card from '../component/Card'
import data from "../component/data"
export default function App() {
            // <Hero />
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })        
    return (
        <div>
            <Navbar />
            <Body/>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
