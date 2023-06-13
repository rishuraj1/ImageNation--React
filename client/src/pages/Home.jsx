import React, { useEffect } from 'react'
import { Carousel } from '../components'

const Home = () => {

  return (
    <div className='p-5 flex justify-center items-center bg-cyan-400 min-h-screen flex-col gap-4'>
      <div className='flex justify-center items-center'>
        <h1 className='font-bold text-xl text-center'>"No AI can match the human touch in transforming imagination into vibrant life on a canvas, where brushstrokes breathe magic and emotions intertwine."</h1>
      </div>
      <Carousel className="w-full" />
      <div className='bg-transparent p-5 justify-center items-center'>
      </div>
    </div>
  )
}

export default Home