import React from 'react'
import { motion } from 'framer-motion'

export default function Container({ children, className }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  }
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 1 }}
      className={`container mx-auto px-5 ${className}`}>
      {children}
    </motion.div>
  )
}
