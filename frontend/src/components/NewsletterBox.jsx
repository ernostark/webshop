import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Iratkozzon fel a hírlevelünkre!</p>
      <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero obcaecati culpa quod molestias. Voluptas enim recusandae eius libero assumenda odio ratione nesciunt, repellat, natus fuga error ullam cupiditate officiis iste!
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Kérjük, írja be az Email címét.' required />
        <button className='bg-black text-white text-xs px-10 py-4' type='submit'>FELIRATKOZÁS</button>
      </form>
    </div>
  )
}

export default NewsletterBox
