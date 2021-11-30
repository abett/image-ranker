import * as React from "react"
import { Link } from "gatsby"


import Layout from "components/layout"
import Seo from "components/seo"

import DirectoryLoader from 'components/rank-images/directory-loader'
import ImageComparison from 'components/rank-images/image-comparison'

const RankImages = () => {
  const [dirFiles, setDirFiles] = React.useState();



  return (
    <Layout>
      <Seo title="Rank Images" />
      <h1>Rank Images</h1>
      <p>Let's see if this works :)</p>

      {
        dirFiles?.length >= 2 ?
          <ImageComparison dirFiles={dirFiles} /> :
          <DirectoryLoader dirFiles={dirFiles} setDirFiles={setDirFiles} />
      }

      

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default RankImages
