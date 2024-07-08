"use client";

import React from 'react';
import Link from 'next/link';

interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  featuredMedia: string | null;
}

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => {
  const firstTwoPosts = posts.slice(0, 2);
  const nextThreePosts = posts.slice(2, 5);
  const remainingPosts = posts.slice(5);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        {firstTwoPosts.map((post, index) => (
          <div key={post.id} className="relative bg-white border p-4 rounded-lg shadow-md h-full">
            {post.featuredMedia && (
              <img
                src={post.featuredMedia}
                alt={post.title.rendered}
                className="w-full h-96 object-cover rounded mb-4"
              />
            )}
            <div>
              <h2 className="text-2xl font-bold">{post.title.rendered}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
              <Link href={`/post/${post.id}`}>
                <span className="inline-block mt-2 px-4 py-2 bg-[#eb0055] text-white rounded hover:bg-[#c8004a] transition-colors duration-300 cursor-pointer">
                  Leer Nota
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        {nextThreePosts.map((post) => (
          <div key={post.id} className="bg-white border p-4 rounded-lg shadow-md">
            {post.featuredMedia && (
              <img src={post.featuredMedia} alt={post.title.rendered} className="w-full h-32 object-cover rounded mb-4" />
            )}
            <h2 className="text-xl font-bold">{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <Link href={`/post/${post.id}`}>
              <span className="inline-block mt-2 px-4 py-2 bg-[#eb0055] text-white rounded hover:bg-[#c8004a] transition-colors duration-300 cursor-pointer">
                Leer Nota
              </span>
            </Link>
          </div>
        ))}
      </div>
      <div className="space-y-8">
        {remainingPosts.map((post) => (
          <div key={post.id} className="flex flex-col lg:flex-row items-start bg-white border p-4 rounded-lg shadow-md">
            {post.featuredMedia && (
              <img
                src={post.featuredMedia}
                alt={post.title.rendered}
                className="w-full lg:w-1/3 h-48 object-cover rounded mb-4 lg:mb-0 lg:mr-4"
              />
            )}
            <div className="flex-1">
              <h2 className="text-2xl font-bold">{post.title.rendered}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
              <Link href={`/post/${post.id}`}>
                <span className="inline-block mt-2 px-4 py-2 bg-[#eb0055] text-white rounded hover:bg-[#c8004a] transition-colors duration-300 cursor-pointer">
                  Leer Nota
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
