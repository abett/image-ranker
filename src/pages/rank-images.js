import * as React from "react"
import { Link } from "gatsby"

import {
  fileOpen,
  directoryOpen,
  fileSave,
  supported,
} from 'browser-fs-access'

import Layout from "../components/layout"
import Seo from "../components/seo"


const SecondPage = () => {
  const [blobs, setBlobs] = React.useState();

  const openDir = async () => {

    console.debug('what');

    // Options are optional.
    const options = {
      recursive: true,
      startIn: 'downloads',
      id: 'rank-images',
    };

    const blobs = await directoryOpen(options);

    window.dirBlobs = blobs;

    setBlobs(blobs);
  }

  const loadRandomImages = () => {
    if (!blobs?.length >= 2) return;

    // TODO: get two random images
    const leftImageIndex = 0,
      rightImageIndex = 1;

    const leftImgBlob = blobs[leftImageIndex],
      rightImgBlob = blobs[rightImageIndex];

    const leftImgWrapper = document.getElementById('left-image'),
      rightImgWrapper = document.getElementById('right-image');

      leftImgWrapper.innerHTML = '';
      const leftImg = document.createElement('img');
      leftImg.src = URL.createObjectURL(leftImgBlob);
      leftImgWrapper.append(leftImg);
      leftImg.onload = leftImg.onerror = () => URL.revokeObjectURL(leftImg.src);

      rightImgWrapper.innerHTML = '';
      const rightImg = document.createElement('img');
      rightImg.src = URL.createObjectURL(rightImgBlob);
      rightImgWrapper.append(rightImg);
      rightImg.onload = rightImg.onerror = () => URL.revokeObjectURL(rightImg.src);
  }

  return (
    <Layout>
      <Seo title="Rank Images" />
      <h1>Rank Images</h1>
      <p>Let's see if this works :)</p>

      <button onClick={openDir}>Open Directory</button><br/>

      <button onClick={loadRandomImages}>Load images</button>

      <div>
        <div id="left-image">
        </div>
        <div id="right-image">
        </div>
      </div>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
