import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Carousel, FormField, Loader } from '../components'
import { preview } from '../assets'

const Home = () => {

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
    api_key: '',
  })
  const [loading, setLoading] = useState(false)
  const [generatingImg, setGeneratingImg] = useState(false)

  const navigate = useNavigate()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSurpriseMe() {
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch('https://imagenation-api.vercel.app/api/v1/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        })

        await response.json();
        navigate('/');
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please fill all the fields');
    }
  }

  const generateImage = async () => {
    if (form.prompt && form.api_key) {
      try {
        setGeneratingImg(true);
        const response = await fetch('https://imagenation-api.vercel.app/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        })
        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        console.log(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please fill all the fields');
    }
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

      <div className='flex items-center gap-[250px]'>
        <form onSubmit={handleSubmit} className='flex flex-col justify-normal items-center gap-5'>
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

          <p className='text-md font-semibold dark:text-cyan-300'>You can get your Open AI API key from <a target='_blank' href="https://platform.openai.com/account/api-keys" className='text-purple-800 hover:text-purple-950 transition-all duration-200 ease-in-out'>here</a></p>

          <FormField
            labelName='API key'
            type='text'
            name='api_key'
            placeholder='Enter your API key'
            value={form.api_key}
            handleChange={handleChange}
          />

          <div className='flex gap-10'>
            <button
              type='button'
              onClick={generateImage}
              className='items-center bg-purple-700 p-2 rounded-lg text-white font-bold hover:bg-purple-900 transition-all duration-300 ease-in-out'>
              Generate Image
            </button>

            <button
              type='submit'
              className='items-center bg-purple-700 p-2 rounded-lg text-white font-bold hover:bg-purple-900 transition-all duration-300 ease-in-out'>
              {loading ? 'Sharing' : 'Share Now'}
            </button>
          </div>
        </form>

        <div className='relative border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
          {form.photo ? (
            <div>
              <img
                src={form.photo}
                alt={form.prompt}
                className='w-full h-full object-contain'
              />
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