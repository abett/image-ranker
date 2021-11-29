import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Image Ranker</h1>
    <p>
      This tool allows you to rank images stored on your device by putting them up for you to choose which one is better, 1-on-1.
    </p>
    <p>No content is uploaded anywhere, it's all happening in your browser.</p>
    
    <p>
      <Link to="/rank-images/">Rank your pictures now!</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
