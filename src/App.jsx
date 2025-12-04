import React from 'react'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Contact from './components/Contact'
import './index.css'

function App() {
    return (
        <Layout>
            <Hero />
            <Features />
            <Stats />
            <Contact />
        </Layout>
    )
}

export default App
