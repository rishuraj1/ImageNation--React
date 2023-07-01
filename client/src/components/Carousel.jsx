import React, { useEffect, useState } from 'react'
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

const Carousel = () => {

  const [images, setImages] = useState([])
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const getImages = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/v1/images", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const result = await res.json();
        // console.log(result.data);
        setImages(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  function handlePlay() {
    setIsPaused(!isPaused);
  }

  useEffect(() => {
    getImages();
  }, [])

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPaused, images.length, images]);


  return (
    <div className="mx-5 flex justify-center items-center flex-col object-contain">
      {images.map((image, index) => {
        return (
          <div className='flex flex-col justify-center items-center gap-2'>
            <img
              key={index}
              src={image.images.web.url}
              alt={image.title}

              className={`object-cover w-full h-[500px] flex items-center ${index === activeIndex
                ? "opacity-100 transition duration-1000 ease-in-out transform scale-100"
                : "hidden max-w-full opacity-40 transition duration-1000 ease-in-out transform scale-95"
                }`}
              onClick={handlePlay} />
            <a href={image.url} target='_blank'><h2 className={`flex dark:text-cyan-500 dark:hover:text-white hover:text-[#13046b] items-center font-semibold text-center ${index === activeIndex
              ? "opacity-100 transition duration-500 ease-in-out transform scale-100"
              : "hidden max-w-full opacity-40 transition duration-1000 ease-in-out transform scale-95"
              }`}>{image.title} - {image.creation_date}</h2></a>
          </div>
        )
      })}

      <div className="flex mt-4 justify-center items-center">
        <button className="mx-2" onClick={handlePlay}>
          {" "}
          {isPaused ? (
            <BsFillPlayFill className="text-4xl text-gray-500 dark:hover:text-white hover:text-[#13046b] transition-all duration-200 ease-in-out" />
          ) : (
            <BsFillPauseFill className="text-4xl text-gray-500 hover:text-[#13046b] dark:hover:text-white transition-all duration-200 ease-in-out" />
          )}{" "}
        </button>
      </div>
    </div>
  )
}

export default Carousel
