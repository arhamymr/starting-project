import {
  collection, getFirestore,
  getDocs,
  limit, query, orderBy
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

    console.log(data, 'tesdfd t')

    return {
      status: 'Success',
      message: 'Data has been fetched from ' + collectionName,
      data,
    }
  } catch (error) {
    throw new Error("Error" + error)
  }
}
