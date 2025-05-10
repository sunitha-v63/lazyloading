import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from "axios"

const Task13 = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=5`);
      setImages(prev => [...prev, ...res.data]);
    } catch (err) {
      console.error('Error fetching images:', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage(prev => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <>
    <h6>mini project</h6>
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.download_url}
            alt={img.author}
            className="w-full h-64 object-cover rounded shadow" style={{width:"500px"}}
          />
        ))}
      </div>
      {loading && <p className="text-center mt-4">Loading more images...</p>}
      <div ref={loaderRef} className="h-10"></div>
    </div>
    </>
  );
};

export default Task13;
