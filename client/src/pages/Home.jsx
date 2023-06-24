import React, { useState } from 'react'
import { Carousel, FormField, Loader } from '../components'
import { preview } from '../assets'

const Home = () => {

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  })

  const [generatingImg, setGeneratingImg] = useState(false)

  function handleChange(e) {
  }

  function handleSurpriseMe() {
  }

  return (
    <section className='p-5 flex justify-center dark:bg-slate-900 items-center bg-cyan-400 min-h-screen flex-col gap-4'>
      <div className='flex justify-center items-center'>
        <h1 className='font-bold text-xl text-center dark:text-cyan-500'>"No AI can match the human touch in transforming imagination into vibrant life on a canvas, where brushstrokes breathe magic and emotions intertwine."</h1>
      </div>
      <Carousel className="w-full" />
      <div className='bg-transparent p-5 justify-center items-center'>
      </div>

      <div>
        <h1 className='font-bold text-4xl dark:text-cyan-300'>Generate your own art</h1>
      </div>

      <div className='flex justify-between items-center'>
        <form action="submit" className='flex flex-col justify-normal items-center gap-5'>
          <FormField
            labelName='Name'
            type='text'
            name='name'
            placeholder='Enter your name'
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            labelName='Prompt'
            type='text'
            name='prompt'
            placeholder='Enter your prompt'
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <button className='items-center bg-purple-700 p-2 rounded-lg text-white font-bold hover:bg-purple-900 transition-all duration-300 ease-in-out'>
            Generate Image
          </button>
        </form>
        <div className='relative border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
          {form.photo ? (
            <div>
              <img
                src={form.photo}
                alt={form.prompt}
                className='w-full h-full object-contain'
              />
              <button className='absolute top-2 right-2 bg-red-500 p-2 rounded-lg text-white font-bold hover:bg-red-700 transition-all duration-300 ease-in-out'> Share </button>
            </div>
          ) : (
            <img
              src={preview}
              alt='preview'
              className='w-12/13 h-12/13 opacity-40 object-contain'
            />
          )}
          {generatingImg && (
            <div className='absolute inset-0 z-0 flex justify-center items-center  rounded-lg'>
              <Loader />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Home