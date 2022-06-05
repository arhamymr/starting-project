
import { getCollectionDetail } from 'api/firestore';
import { useState } from 'react';

function useArticle() {
  const [article, setArticle] = useState({});

  const getArticle = async (slug) => {
    const response = await getCollectionDetail('posts', slug);
    setArticle(response.data)
  }

  return {
    article,
    getArticle,
  };
}

export default useArticle
