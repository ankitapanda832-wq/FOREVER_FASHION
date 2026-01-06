import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border'>
           <Title text1={'ABOUT'} text2={'US'} />
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
           <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
           <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>A "Forever shopping app" generally refers to the mobile platform for Forever Living Products, allowing members and customers to order aloe-based wellness, skincare, and personal care items, register, track orders, and access exclusive discounts, acting as a digital storefront for their global Aloe Vera and nutrition business. </p>
              <p> A digital hub for fashion shopping, trend discovery, and exclusive discounts.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>The mission of Forever Living Products, the company behind the "Forever" shopping apps, is to create a profitable environment where anyone can become whatever they desire to be, with dignity, guided by integrity, empathy, and joy. </p>
           </div>
        </div>
        <div className='text-4xl py-4'>
           <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Quality Assurance:</b>
             <p className='text-gray-600'>Amazing app! The navigation is smooth and the 2026 collection is stunning. Highly recommend.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Convenience:</b>
             <p className='text-gray-600'> Order your favorite products in seconds using our streamlined checkout.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Exceptional Customer Service:</b>
             <p className='text-gray-600'>We sincerely apologize for the inconvenience. As we strive to provide exceptional service, we have issued a discount code for your next purchase while we resolve your order issue.</p>
          </div>
        </div>
        <NewsletterBox/>
    </div>
  )
}

export default About