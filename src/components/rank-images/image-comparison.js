import * as React from "react"

import { db } from 'utils/db';

import './image-comparison.css'

const ImageComparison = ({ dirFiles, setDirFiles }) => {
  const [selectedImg, setSelectedImg] = React.useState(null);

  let [leftImg, setleftImg] = React.useState(null),
    [rightImg, setrightImg] = React.useState(null);

  const loadRandomImages = () => {
    if (!dirFiles?.length >= 2) return;
    console.debug('loading 2 new images');

    const leftImgIndex = 0,
      rightImgIndex = 1;

    // TODO: get two random images
    const leftImgBlob = dirFiles[leftImgIndex],
      rightImgBlob = dirFiles[rightImgIndex];

    setleftImg(leftImgBlob);
    setrightImg(rightImgBlob);
  };


  React.useEffect(() => {
    if (!dirFiles?.length >= 2) return;
    if (!leftImg || !rightImg) loadRandomImages();
  }, [dirFiles, leftImg, rightImg])

  if (!dirFiles?.length >= 2) return <>
    Please load a directory with 2 or more images.
  </>

  if (!leftImg || !rightImg) return <>
    Loading...
  </>

  const leftImgUrl = URL.createObjectURL(leftImg);
  const rightImgUrl = URL.createObjectURL(rightImg);

  return <>
    <div style={{display: 'flex'}}>
      <div id="left-image-wrapper" className={`image-wrapper ${selectedImg === leftImg ? 'selected' : ''}`} onClick={() => setSelectedImg(leftImg)}>
        {
          leftImgUrl && <img src={leftImgUrl} onError={() => URL.revokeObjectURL(leftImgUrl)} />
        }
      </div>
      <div id="right-image-wrapper" className={`image-wrapper ${selectedImg === rightImg ? 'selected' : ''}`} onClick={() => setSelectedImg(rightImg)}>
        {
          rightImgUrl && <img src={rightImgUrl} onError={() => URL.revokeObjectURL(rightImgUrl)} />
        }
      </div>
    </div>
    <div>
        {
          selectedImg && selectedImg === leftImg && <>You have selected Img {leftImg.name} (left).</>
        }
        {
          selectedImg && selectedImg === rightImg && <>You have selected Img {rightImg.name} (right).</>
        }
    </div>
  </>
}

export default ImageComparison;
