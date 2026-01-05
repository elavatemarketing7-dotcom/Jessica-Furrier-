
import React, { useState } from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedImg(img)}
            className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer group relative"
          >
            <img 
              src={img} 
              alt={`Resultado ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-premium-dark/0 group-hover:bg-premium-dark/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-premium-dark/95 flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white text-3xl">×</button>
          <img 
            src={selectedImg} 
            alt="Expanded Result" 
            className="max-w-full max-h-full rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
