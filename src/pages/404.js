import React from 'react'
import App from '../components/app'
import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'

export default function About() {
  return (
    <App>
      <Header />
      <Container>
        <div className='grid place-items-center relative w-full h-full rounded overflow-hidden p-20'>
          <div className='text-white text-center'>
        <h1 className='text-6xl'>404: You're lost.</h1>
        <p className='text-white/70 text-xl'>That link does not exist. Use the navigation to find your way.</p>
          </div>
        <img src={'/weeknd.gif'} alt="The Weeknd Lost" className='absolute w-full h-full object-cover -z-10 filter grayscale brightness-50bgvfdsah' />
        </div>
      </Container>
      <Footer />
    </App>
  )
}
