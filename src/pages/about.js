import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Herosection from "../components/heroSection"
import Infoblock from "../components/infoblock"
import Dualinfoblock from '../components/dualinfoblock'

const AboutPage = ({data}) => (
  <Layout>
   <Herosection
      img={data.img.childImageSharp.fluid}
      title="About Us"
      subtitle=""
      heroClass="about-backg"
   />
   <Dualinfoblock heading="A Message from CEO"/>
   {/* <Infoblock  heading="Vision" desc="TO BE A BENCHMARK IN THE MARKET, WITH BRANDS THAT ARE ADMIRED AND FAVORED IN OUR SECTORS."/> */}
  </Layout>
)

export const Head = () => <Seo title="Home" />

export const query = graphql`
{
  img: file(relativePath: {eq: "air-jordan-1-low-mystic-navy-wallpaper-preview.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
