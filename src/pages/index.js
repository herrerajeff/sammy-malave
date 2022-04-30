import React from 'react'
import App from '../components/app'
import { graphql } from 'gatsby'
import Logo from '../components/logo'
import Container from '../components/container'
import { GatsbyImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'

export default function Index({ data: { allPosts } }) {
  const posts = allPosts.nodes

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <App>
      <Container className='grid grid-cols-1 lg:grid-cols-4 gap-y-12 lg:gap-y-20 gap-x-8'>
        <motion.div
          className='lg:col-span-2 grid content-between my-8 lg:my-0'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          key={1}>
          <Logo classes='w-full lg:w-2/3 mx-auto lg:mx-0 relative lg:mt-64' />
          <motion.span
            className='text-5xl text-gray-400 font-extralight hidden lg:block'
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}>
            ↓
          </motion.span>
        </motion.div>
        {posts
          .filter((post) => post.featured)
          .map((post) => {
            const WL50 = post.imageWidth.width.includes('Left - 50%')
            const WL75 = post.imageWidth.width.includes('Left - 75%')
            const W100 = post.imageWidth.width.includes('Full Width - 100%')
            const WR50 = post.imageWidth.width.includes('Right - 50%')
            const WR75 = post.imageWidth.width.includes('Right - 75%')

            return (
              <motion.div
                href={post.slug}
                key={post.slug}
                variants={item}
                className={`
              ${WL50 ? 'lg:col-span-2' : null}
              ${WL75 ? 'lg:col-span-3' : null}
              ${W100 ? 'lg:col-span-4' : null}
              ${WR50 ? 'lg:col-start-3 lg:col-end-5' : null}
              ${WR75 ? 'lg:col-start-2 lg:col-end-5' : null} 
              relative group overflow-hidden
              `}>
                <GatsbyImage
                  image={post.coverImage.large}
                  alt={post.title}
                  className='transform scale-100 lg:group-hover:scale-125 lg:group-hover:cursor-pointer transition-all duration-700 lg:group-hover:blur-sm'
                />
                <p className='lg:absolute z-10 p-2 lg:p-8 w-full text-center lg:text-right text-gray-400 lg:text-white text-xs lg:text-base lg:top-0 lg:opacity-0 lg:translate-y-3 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition duration-500 delay-100 mix-blend-exclusion grayscale pointer-events-none'>
                  {post.title} - {post.date}
                </p>
              </motion.div>
            )
          })}
      </Container>
    </App>
  )
}

export const query = graphql`
  {
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 10) {
      nodes {
        title
        slug
        featured
        date(formatString: "MMMM Do, YYYY")
        coverImage {
          large: gatsbyImageData(width: 1500)
          small: gatsbyImageData(width: 760)
        }
        imageWidth {
          width
        }
      }
    }
  }
`
