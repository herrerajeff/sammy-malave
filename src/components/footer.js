import { Link } from "gatsby";
import React from "react";
import Container from "./container";
import Logo from './logo'

export default function Footer() {
  return (
    <footer className="from-[#D795FF]/50 bg-gradient-to-t via-white">
      <Container className="flex flex-col lg:flex-row justify-between items-center py-12 lg:py-20">
        <p className="mb-8 lg:mb-0">All Rights Reserved. &copy; Sammy Malave {new Date().getFullYear()}</p>
        <Link to="/">
          <Logo classes="w-40" />
        </Link>
      </Container>
    </footer>
  )
}
