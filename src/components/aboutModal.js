import { Dialog } from '@headlessui/react'
import React, { useState, Fragment } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Transition } from "@headlessui/react";
import Logo from './logo'

export default function AboutModal({aboutPhoto, bio, ig, tw, email, openState}) {
  let [isOpen, setIsOpen] = useState(openState ? true : false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        onClose={setIsOpen}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <Transition.Child
        enter="duration-500 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-200 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        </Transition.Child>
        <div className="w-full max-w-screen-xl p-4 lg:p-8 z-10 relative lg:absolute mt-24 lg:mt-0 lg:top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2">
        <Transition.Child
        enter="duration-300 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-200 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
          <div className="bg-black rounded p-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 mt-16 lg:mt-0">
            <Transition.Child
            enter="duration-[1000ms] delay-100 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
              <GatsbyImage image={aboutPhoto} alt="Sammy Malave Portrait" className="w-full h-full object-cover rounded-[32px] overflow-hidden" />
            </Transition.Child>  
            <div className="text-white py-12 max-w-[56ch]"><Logo classes="text-cyan-400 w-full lg:w-96 block mb-12" />
            <div className="space-y-4 text-sm lg:text-base">
            {bio}
            </div>
          <div className="block space-x-4 mt-12">
            <a href={`https://www.instagram.com/${ig}`} target="_blank" rel="nofollow noreferrer" className="border border-emerald-500 py-1 px-3 rounded-full text-emerald-500 hover:border-white hover:text-white transition-all duration-200 inline-block">Instagram&nbsp;↗️</a>
            <a href={`mailto:${email}`} target="_blank" rel="nofollow noreferrer" className="border border-emerald-500 py-1 px-3 rounded-full text-emerald-500 hover:border-white hover:text-white transition-all duration-200 inline-block">Email&nbsp;↗️</a>
            <a href={`https://www.twitter.com/${tw}`} target="_blank" rel="nofollow noreferrer" className="border border-emerald-500 py-1 px-3 rounded-full text-emerald-500 hover:border-white hover:text-white transition-all duration-200 inline-block">Twitter&nbsp;↗️</a>
          </div>
            </div>
            
            </div>
        <button type="button" onClick={toggle} className="text-white w-10 h-10 lg:w-8 lg:h-8 transition-all duration-300 absolute right-1/2 top-9 transform translate-x-1/2 lg:translate-x-0 lg:right-4 lg:top-4 hover:text-cyan-400 z-30">
            <svg
        xmlns="http://www.w3.org/2000/svg"
        width="w-full"
        height="h-full"
        fill="none"
        viewBox="0 0 30 30"
      >
        <circle cx="15" cy="15" r="14.5" stroke="currentColor"></circle>
        <path
          fill="currentColor"
          d="M17.608 18.364L12 12.756l.756-.756 5.608 5.608-.756.756zm-4.852 0L12 17.608 17.608 12l.756.756-5.608 5.608z"
        ></path>
      </svg>
          </button>
          </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
