import firebase from './firebase'

export const uploadFromBlobAsync = async ({ blobUrl, name }) => {
  if (!blobUrl || !name) return null

  try {
    const blob = await fetch(blobUrl).then((r) => r.blob())
    const snapshot = await firebase.storage().ref().child(name).put(blob)
    return await snapshot.ref.getDownloadURL()
  } catch (error) {
    throw error
  }
}
