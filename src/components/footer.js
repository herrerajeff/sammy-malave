import { Link } from 'gatsby'
import React from 'react'
import Container from './container'
import Logo from './logo'

export default function Footer() {
  return (
    <footer className='from-emerald-500/50 bg-gradient-to-t via-white self-end mt-24'>
      <Container className='flex flex-col lg:flex-row justify-between items-center py-12 lg:py-20 mt-0 lg:mt-20'>
        <p className='mb-8 lg:mb-0'>
          All Rights Reserved. &copy; Sammy Malave {new Date().getFullYear()}
        </p>
        <Link to='/'>
          <Logo classes='w-40' />
        </Link>
      </Container>
    </footer>
  )
}
