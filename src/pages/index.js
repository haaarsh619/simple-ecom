import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Herosection from "../components/heroSection"
import Infoblock from "../components/infoblock"
import Dualinfoblock from '../components/dualinfoblock'
import Shoescart from "../components/cart/shoescart"

const IndexPage = ({data}) => (
  <Layout>
   <Herosection 
      img={data.img.childImageSharp.fluid}
      title="sneaker's Den"
      subtitle="Best Place For sneakers"
      heroClass="hero-backg"
   />
    <Infoblock heading="About Us" />
    <Shoescart shoes={ data.shoes } />
   <Dualinfoblock heading="Our Team"/>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export const query = graphql`
{
  img: file(relativePath: {eq: "wallpaperflare.com_wallpaper.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  shoes: allContentfulShoes{
    edges{
      node{
        id
        title
        price
        category
        description
        image{
          url
        }
      }
    }
  }
}
`

export default IndexPage
