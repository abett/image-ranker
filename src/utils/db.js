import Dexie from 'dexie';

export const db = new Dexie('imageRankerDatabase');

db.version(1).stores({
  images: 'filename, relativePath, lastModifiedAt, addedAt', // Primary key and indexed props
});
