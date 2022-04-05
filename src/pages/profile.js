import React from 'react'
import { graphql, Link } from 'gatsby'
import App from '../components/app'
import Logo from '../components/logo'

export default function Profile({ ig, tw, email, data: { links } }) {
  const profileLinks = links.nodes

  return (
    <App>
      <div className='max-w-md mx-auto bg-gray-100 p-12 space-y-4 rounded-t-md overflow-hidden'>
        <h1 className='mb-8'>Links</h1>
        <a
          href={`https://www.instagram.com/${ig}`}
          target='_blank'
          rel='nofollow noreferrer'
          className='py-3 px-4 w-full block bg-black text-white rounded hover:bg-cyan-400 hover:text-black transition-all duration-200'>
          Instagram&nbsp;&#x2197;&#xFE0E;
        </a>
        <a
          href={`mailto:${email}`}
          target='_blank'
          rel='nofollow noreferrer'
          className='py-3 px-4 w-full block bg-black text-white rounded hover:bg-cyan-400 hover:text-black transition-all duration-200'>
          Email&nbsp;&#x2197;&#xFE0E;
        </a>
        <a
          href={`https://www.twitter.com/${tw}`}
          target='_blank'
          rel='nofollow noreferrer'
          className='py-3 px-4 w-full block bg-black text-white rounded hover:bg-cyan-400 hover:text-black transition-all duration-200'>
          Twitter&nbsp;&#x2197;&#xFE0E;
        </a>
        {profileLinks.map((link) => {
          return (
            <a
              href={link.url}
              key={link.id}
              target='_blank'
              rel='nofollow noreferrer'
              className='py-3 px-4 w-full block bg-black text-white rounded hover:bg-cyan-400 hover:text-black transition-all duration-200'>
              {link.name}&nbsp;&#x2197;&#xFE0E;
            </a>
          )
        })}
      </div>

      <div className='max-w-md mx-auto bg-black space-y-4 text-center rounded-b-md overflow-hidden'>
        <Logo classes={'text-white mb-4 py-8 px-12'} />
        <Link
          to='/'
          className='block bg-cyan-400 py-8 hover:bg-cyan-200 text-xl transition-all duration-200'>
          &larr; View Full Site
        </Link>
      </div>
    </App>
  )
}

export const profilequery = graphql`
  {
    links: allDatoCmsProfileLink {
      nodes {
        url
        name
        id
      }
    }
  }
`
