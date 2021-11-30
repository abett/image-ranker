import * as React from "react"

import { directoryOpen } from 'browser-fs-access';

import { db } from 'utils/db';


const DirectoryLoader = ({ dirFiles, setDirFiles }) => {

  const openDir = async () => {

    // Options are optional.
    const options = {
      recursive: true,
      startIn: 'downloads',
      id: 'rank-images',
    };

    const fileBlobs = await directoryOpen(options).catch(e => console.warn(e));
    if (!fileBlobs.length > 0) return;

    window.dirFiles = fileBlobs;
    await db.images
    .bulkPut(
      fileBlobs?.map(fb => ({ filename: fb.name, relativePath: fb.webkitRelativePath, lastModifiedAt: fb.lastModified, addedAt: Date.now() })),
      null,
      {allKeys: true}
    )
    .then(result => console.debug(result))
    .catch(e => console.warn(e));

    setDirFiles(fileBlobs);
  }

  if (dirFiles?.length > 0) return <>
    Files Loaded.
  </>

  return <div>
    <button onClick={openDir}>Load Directory</button>
  </div>
}

export default DirectoryLoader;
