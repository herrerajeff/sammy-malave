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
          className='py-3 px-4 w-full bg-black text-white rounded hover:bg-cyan-400 hover:text-black transition-all duration-200 flex items-center'>
          Instagram&nbsp;
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M7 17l9.2-9.2M17 17V7H7' />
          </svg>
        </a>
        <a
          href={`mailto:${email}`}
          target='_blank'
          rel='nofollow noreferrer'
          className='py-3 px-4 w-full bg-black text-white rounded hover:bg-cyan-400 hover:text-black transition-all duration-200 flex items-center'>
          Email&nbsp;
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M7 17l9.2-9.2M17 17V7H7' />
          </svg>
        </a>
        <a
          href={`https://www.twitter.com/${tw}`}
          target='_blank'
          rel='nofollow noreferrer'
          className='py-3 px-4 w-full bg-black text-white rounded hover:bg-cyan-400 hover:text-black transition-all duration-200 flex items-center'>
          Twitter&nbsp;
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M7 17l9.2-9.2M17 17V7H7' />
          </svg>
        </a>
        {profileLinks.map((link) => {
          return (
            <a
              href={link.url}
              key={link.id}
              target='_blank'
              rel='nofollow noreferrer'
              className='py-3 px-4 w-full bg-black text-white rounded hover:bg-cyan-400 hover:text-black transition-all duration-200 flex items-center'>
              {link.name}&nbsp;
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <path d='M7 17l9.2-9.2M17 17V7H7' />
              </svg>
            </a>
          )
        })}
      </div>

      <div className='max-w-md mx-auto bg-black space-y-4 text-center rounded-b-md overflow-hidden'>
        <Logo classes={'text-white mb-4 py-8 px-12'} />
        <Link
          to='/'
          className='bg-cyan-400 py-8 hover:bg-cyan-200 text-xl transition-all duration-200 flex items-center justify-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M19 12H6M12 5l-7 7 7 7' />
          </svg>{' '}
          View Full Site
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
