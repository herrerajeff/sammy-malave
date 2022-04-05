import React from 'react'
import App from '../components/app'
import { graphql } from 'gatsby'
import Container from '../components/container'
import { motion } from 'framer-motion'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function Index({ data: { allPosts } }) {
  const posts = allPosts.nodes

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <App>
      <Container className='grid grid-cols-1 lg:grid-cols-4 gap-x-12 gap-y-20 mt-8 lg:mt-0'>
        {posts.map((post) => {
          return (
            <motion.div
              href={post.slug}
              key={post.slug}
              variants={item}
              className={`relative group lg:h-64`}>
              <GatsbyImage
                image={post.coverImage.small}
                objectFit='contain'
                alt={post.title}
                className='transition-all duration-700 lg:group-hover:opacity-70 lg:h-full'
              />
              <p className='lg:absolute lg:-bottom-16 z-10 p-2 lg:p-8 w-full text-center text-gray-400 lg:text-black text-xs lg:opacity-0 lg:translate-y-3 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition duration-500 delay-100'>
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
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    global: datoCmsGlobal {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      bio {
        value
      }
      emailAddress
      instagramUsername
      twitterUsername
      aboutPhoto {
        large: gatsbyImageData(width: 1500)
        small: gatsbyImageData(width: 800)
      }
    }
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 10) {
      nodes {
        title
        slug
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
