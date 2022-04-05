import React from 'react'
import { graphql } from 'gatsby'
import App from '../components/app'
import Container from '../components/container'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function About({ data }) {
  console.log(data.global.lostImage.large)

  return (
    <App>
      <Container className={'h-full'}>
        <div className='w-full h-full relative rounded overflow-hidden p-20'>
          <div className='text-white absolute inset-0 grid place-items-center'>
            <div className='text-center'>
              <h1 className='text-6xl'>404: You're lost.</h1>
              <p className='text-white/70 text-xl'>
                That link does not exist. Use the navigation to find your way.
              </p>
            </div>
          </div>

          <GatsbyImage
            image={data.global.lostImage.large}
            alt='The Weeknd Lost'
            className='relative w-full h-full object-cover -z-10 filter grayscale brightness-50bgvfdsah'
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
