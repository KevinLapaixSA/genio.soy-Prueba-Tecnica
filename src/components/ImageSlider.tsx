"use client";

import React from 'react';
import Slider from 'react-slick';

interface Post {
  id: number;
  featuredMedia: string | null;
  title: { rendered: string };
}

interface Props {
  posts: Post[];
}

const ImageSlider: React.FC<Props> = ({ posts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const images = posts
  .filter(post => post.featuredMedia !== null)
  .map(post => (
    <div key={post.id}>
      <img
        src={post.featuredMedia as string}
        alt={post.title.rendered}
        className="w-full h-64 object-cover"
      />
    </div>
  ));


  return <Slider {...settings}>{images}</Slider>;
};

export default ImageSlider;
