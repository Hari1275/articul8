import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
});

export const fetchArticles = async () => {
  const response = await api.get('/api/blogs');
  console.log(response.data);
  return response.data;
};

export const fetchArticleBySlug = async (slug: string) => {
  const response = await api.get(`/api/blogs?slug=${slug}`);
  return response.data[0];
};
