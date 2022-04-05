import React, { useState, Fragment } from 'react'
import { StructuredText } from 'react-datocms'
import Container from './container'
import Button from './button'
import { Dialog, Menu, Transition } from '@headlessui/react'
import Logo from './logo'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function Header({ aboutPhoto, ig, tw, email, bio, openState }) {
  let [isOpen, setIsOpen] = useState(openState ? true : false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className='from-[#00D1FF]/50 bg-gradient-to-b via-white py-14 lg:mb-14'>
      <Container className='flex justify-center lg:justify-end items-center py-8 lg:py-14 fixed inset-x-0 top-0 z-40'>
        <nav className='space-x-4 flex items-center'>
          <Button path='/'>Work</Button>

          <button
            type='button'
            onClick={toggle}
            className={`${
              isOpen
                ? 'bg-black text-white pointer-events-none border border-black py-1 px-3 rounded-full hover:bg-black hover:text-white transition-all duration-200 inline-block'
                : 'pointer-events-auto border border-black py-1 px-3 rounded-full hover:bg-black hover:text-white transition-all duration-200 inline-block bg-white'
            }`}>
            About
          </button>

          <Transition.Root show={isOpen} as={Fragment}>
            <Dialog
              onClose={setIsOpen}
              className='fixed inset-0 z-50 overflow-y-auto'>
              <Transition.Child
                enter='duration-500 ease-out'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='duration-200 ease-in'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'>
                <Dialog.Overlay className='fixed inset-0 bg-black/50' />
              </Transition.Child>
              <div className='w-full max-w-screen-xl p-4 lg:p-8 z-10 relative lg:absolute mt-24 lg:mt-0 lg:top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2'>
                <Transition.Child
                  enter='duration-300 ease-out'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='duration-200 ease-in'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'>
                  <div className='bg-black rounded p-8 relative'>
                    <button
                      type='button'
                      onClick={toggle}
                      className='text-white w-10 h-10 lg:w-8 lg:h-8 transition-all duration-300 absolute right-1/2 top-7 transform translate-x-1/2 lg:translate-x-0 lg:right-4 lg:top-4 hover:text-cyan-400 z-30'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 30 30'>
                        <circle
                          cx='15'
                          cy='15'
                          r='14.5'
                          stroke='currentColor'></circle>
                        <path
                          fill='currentColor'
                          d='M17.608 18.364L12 12.756l.756-.756 5.608 5.608-.756.756zm-4.852 0L12 17.608 17.608 12l.756.756-5.608 5.608z'></path>
                      </svg>
                    </button>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-16 mt-16 lg:mt-0'>
                      <Transition.Child
                        enter='duration-[1000ms] delay-100 ease-out'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='duration-200 ease-in'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'>
                        <GatsbyImage
                          image={aboutPhoto}
                          alt='Sammy Malave Portrait'
                          className='w-full h-full object-cover rounded-[32px] overflow-hidden'
                        />
                      </Transition.Child>
                      <div className='text-white py-12 max-w-[56ch]'>
                        <Logo classes='text-cyan-400 lg:w-96 block mb-12' />
                        <div className='space-y-4 text-sm lg:text-base'>
                          <StructuredText data={bio} />
                        </div>
                        <div className='flex gap-4 mt-12'>
                          <a
                            href={`https://www.instagram.com/${ig}`}
                            target='_blank'
                            rel='nofollow noreferrer'
                            className='border border-emerald-500 py-1 px-3 rounded-full text-emerald-500 hover:border-white hover:text-white transition-all duration-200 inline-block'>
                            Instagram&nbsp;&#x2197;&#xFE0F;
                          </a>
                          <a
                            href={`mailto:${email}`}
                            target='_blank'
                            rel='nofollow noreferrer'
                            className='border border-emerald-500 py-1 px-3 rounded-full text-emerald-500 hover:border-white hover:text-white transition-all duration-200 inline-block'>
                            Email&nbsp;&#x2197;&#xFE0F;
                          </a>
                          <a
                            href={`https://www.twitter.com/${tw}`}
                            target='_blank'
                            rel='nofollow noreferrer'
                            className='border border-emerald-500 py-1 px-3 rounded-full text-emerald-500 hover:border-white hover:text-white transition-all duration-200 inline-block'>
                            Twitter&nbsp;&#x2197;&#xFE0F;
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <Menu as='div' className='relative'>
            <Menu.Button className='border border-black py-1 px-3 rounded-full hover:bg-black hover:text-white transition-all duration-200 inline-block bg-white'>
              Contact
            </Menu.Button>
            <Transition
              enter='transition duration-200 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-75 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'>
              <Menu.Items className='bg-black rounded-md flex flex-col absolute top-full mt-2 overflow-hidden shadow-xl border border-black'>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={`https://www.instagram.com/${ig}`}
                      target='_blank'
                      rel='nofollow noreferrer'
                      className={` ${
                        active
                          ? 'p-4 block bg-white text-black'
                          : 'p-4 block bg-black text-white'
                      } `}>
                      Instagram&nbsp;&#x2197;&#xFE0F;
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={`mailto:${email}`}
                      target='_blank'
                      rel='nofollow noreferrer'
                      className={` ${
                        active
                          ? 'p-4 block bg-white text-black'
                          : 'p-4 block bg-black text-white'
                      } `}>
                      Email&nbsp;&#x2197;&#xFE0F;
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={`https://www.twitter.com/${tw}`}
                      target='_blank'
                      rel='nofollow noreferrer'
                      className={` ${
                        active
                          ? 'p-4 block bg-white text-black'
                          : 'p-4 block bg-black text-white'
                      } `}>
                      Twitter&nbsp;&#x2197;&#xFE0F;
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <Button path='/work-grid'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              className='hidden lg:block'
              fill='currentColor'>
              <path d='M10 3H4a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 001-1V4a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1zm1-6h4v4h-4V5zM3 20a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1H4a1 1 0 00-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v6zm2-5h4v4h-4v-4z'></path>
            </svg>
            <p className='block lg:hidden'>All</p>
          </Button>
        </nav>
      </Container>
    </div>
  )
}
