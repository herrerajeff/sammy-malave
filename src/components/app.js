import { AnimatePresence, motion } from 'framer-motion'
import { StaticQuery, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import React from 'react'
import Footer from './footer'
import Header from './header'

export default function App({ children, openState }) {
  return (
    <StaticQuery
      query={graphql`
        query globalQuery {
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
        }
      `}
      render={(data) => (
        <div className='grid grid-rows-[auto_1fr_auto] grid-flow-row-dense h-screen'>
          <HelmetDatoCms seo={data.global.seo} favicon={data.site.favicon} />
          <Header
            aboutPhoto={data.global.aboutPhoto.small}
            ig={data.global.instagramUsername}
            tw={data.global.twitterUsername}
            email={data.global.emailAddress}
            bio={data.global.bio}
            openState={openState}
          />
          <AnimatePresence exitBeforeEnter>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.05 }}>
              {children}
            </motion.div>
          </AnimatePresence>
          <Footer />
        </div>
      )}
    />
  )
}
