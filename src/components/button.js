import { Link } from 'gatsby'
import React from 'react'

export default function Button({path, children}) {
  return (
    <Link to={path} className="border border-black py-1 px-3 rounded-full hover:bg-black hover:text-white transition-all duration-200 inline-block bg-white" activeStyle={{ background: "black", color: "white" }}>
      {children}
    </Link>
  )
}
