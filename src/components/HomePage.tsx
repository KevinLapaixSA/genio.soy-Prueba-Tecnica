"use client";

import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api/wordpress';
import PostList from './PostList';
import ImageSlider from './ImageSlider';
import Image from 'next/image';
import Layout from '@/app/layout';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <Layout>
    <div>
      <header className="bg-white text-black fixed top-0 w-full py-4 z-50 shadow-md">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="mr-4" />
            <h1 className="text-3xl font-bold font-old-london">The Genio.soy Post</h1>
          </div>
          <p className="text-gray-500 text-sm italic">&quot;Si no está en Internet, no existe.&quot;</p>
        </div>
      </header>
      <main className="pt-24 container mx-auto p-4">
        <div className="w-full mb-8">
          <Image
            src="/images/banner.jpg"
            alt="Banner"
            width={1920}
            height={300}
            className="w-full object-cover"
          />
        </div>
        {posts.length > 0 && (
          <div className="w-full mb-8">
            <ImageSlider posts={posts} />
          </div>
        )}
        <h2 className="text-2xl font-bold mb-4">Últimas Publicaciones</h2>
        <PostList posts={posts} />
      </main>
    </div>
    </Layout>
  );
};

export default HomePage;
