import axios from 'axios';

const API_URL = 'https://fernandafamiliar.soy/wp-json/wp/v2';

export const getPosts = async () => {
  const res = await fetch('https://fernandafamiliar.soy/wp-json/wp/v2/posts?_embed');
  const data = await res.json();
  return data.map((post: any) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    featuredMedia: post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : null,
  }));
};

export const getPostById = async (id: number) => {
  const response = await axios.get(`${API_URL}/posts/${id}?_embed`);
  const post = response.data;
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    featuredMedia: post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : null,
  };
};

