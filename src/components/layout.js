import * as React from "react"

import "./bootstrap.min.css"
import "./layout.css"
import Footer from './Footer'
import Navbar from './navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
