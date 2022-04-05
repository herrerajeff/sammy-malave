import React from 'react'
import { graphql } from 'gatsby'
import App from '../components/app'
import Container from '../components/container'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function About({ data }) {
  console.log(data.global.lostImage.large)

  return (
    <App>
      <Container className={'h-full relative'}>
        <div className='grid place-items-center absolute inset-0 rounded overflow-hidden p-20'>
          <div className='text-white text-center'>
            <h1 className='text-6xl'>404: You're lost.</h1>
            <p className='text-white/70 text-xl'>
              That link does not exist. Use the navigation to find your way.
            </p>
          </div>

          <GatsbyImage
            image={data.global.lostImage.large}
            alt='The Weeknd Lost'
            className='absolute w-full h-full object-cover -z-10 filter grayscale brightness-50bgvfdsah'
          />
        </div>
      </Container>
    </App>
  )
}

export const lostquery = graphql`
  {
    global: datoCmsGlobal {
      lostImage {
        large: gatsbyImageData(width: 800)
      }
    }
  }
`
