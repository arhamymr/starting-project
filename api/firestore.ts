import {
  collection, getFirestore,
  doc, getDocs, getDoc,
  limit, query,
} from "firebase/firestore";

export const getCollection = async (collectionName, size = 10) => {
  const db = getFirestore();
  try {
    const postRef = query(collection(db, collectionName), limit(size));
    const querySnapshot = await getDocs(postRef);

    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return {
      status: 'Success',
      message: 'Data has been fetched from ' + collectionName,
      data,
    }
  } catch (error) {
    throw new Error("Error" + error)
  }
}


export const getCollectionDetail = async (collectionName, id) => {
  const db = getFirestore();
  const docRef = doc(db, collectionName, id);

  const docSnap = await getDoc(docRef);

  try {
    if (docSnap.exists()) {
      return {
        status: 'Success',
        message: 'Data has been fetched from ' + collectionName,
        data: docSnap.data(),
      }
    } else {
      throw new Error("No such document!")
    }
  } catch (error) {
    throw new Error("Error: " + error)
  }
}