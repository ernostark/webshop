import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'Rólunk'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta aspernatur officiis magni! Fugit animi in perspiciatis maiores veritatis corporis quibusdam accusantium laudantium voluptatibus minima amet fugiat provident, non consequatur?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dignissimos, molestiae quis voluptatem at doloremque ducimus voluptatibus obcaecati, nesciunt accusamus eos quam tempore nulla illum odit harum ad beatae similique.</p>
          <b className='text-gray-800'>Küldetésünk</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis ullam voluptate repudiandae culpa incidunt ad voluptas? Fuga aliquid laudantium impedit, asperiores eaque, possimus qui consequuntur tenetur quod, quae voluptas.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'Miért válasszon'} text2={'minket'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Megbízható minőség:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sapiente quibusdam iusto deleniti. Optio fugit iste omnis asperiores voluptatum eos, aperiam iusto ex possimus, sit quibusdam, ipsa quis repudiandae harum.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Kényelem:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sapiente quibusdam iusto deleniti. Optio fugit iste omnis asperiores voluptatum eos, aperiam iusto ex possimus, sit quibusdam, ipsa quis repudiandae harum.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Kiemelkedő ügyfélszolgálat:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sapiente quibusdam iusto deleniti. Optio fugit iste omnis asperiores voluptatum eos, aperiam iusto ex possimus, sit quibusdam, ipsa quis repudiandae harum.</p>
        </div>
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About
