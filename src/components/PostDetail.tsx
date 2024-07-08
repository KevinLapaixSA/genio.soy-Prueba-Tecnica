import React, { useEffect, useState } from 'react';
import Header from './Header';
import ImageModal from './ImageModal';

interface PostDetailProps {
  post: {
    title: { rendered: string };
    content: { rendered: string };
    featuredMedia: string | null;
  };
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const contentElement = document.getElementById('post-content');
    if (contentElement) {
      const images = contentElement.getElementsByTagName('img');
      for (let i = 1; i < images.length; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'image-wrapper';
        images[i].parentNode?.insertBefore(wrapper, images[i]);
        wrapper.appendChild(images[i]);
      }
    }
  }, []);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <div className="mt-16 bg-black text-white p-4 flex justify-between items-center rounded-lg">
        <h1 className="text-3xl font-bold">{post.title.rendered}</h1>
        {post.featuredMedia && (
          <img
            src={post.featuredMedia}
            alt={post.title.rendered}
            className="w-1/3 h-auto object-cover ml-4 cursor-pointer"
            onClick={handleImageClick}
          />
        )}
      </div>
      <div className="mt-4 bg-white p-6 rounded-lg shadow-lg">
        <div
          id="post-content"
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
      <ImageModal
        src={post.featuredMedia || ''}
        alt={post.title.rendered}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default PostDetail;
