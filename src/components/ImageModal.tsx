import React from 'react';

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative">
        <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4 text-white">
          &times;
        </button>
        <img src={src} alt={alt} className="rounded-lg max-w-full max-h-full" />
      </div>
    </div>
  );
};

export default ImageModal;
