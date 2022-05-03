
import { getCollection } from 'api/firestore';
import { useState } from 'react';

function useSection() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const response = await getCollection('posts');
    setArticles(response.data)
  }

  return {
    articles,
    getArticles,
  };
}

export default useSection
