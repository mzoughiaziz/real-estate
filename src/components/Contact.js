import React from 'react';

const Contact = () => {
  return (
    <div className='flex-1 w-9/12 mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
        {/* <div className='flex items-center gap-x-4 mb-8'>
        <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
            <img src={property.agent.image}></img>
        </div>
      <div>
            <div className='font-bold text-lg'>{property.agent.name}</div>
            <Link to='' className='text-violet-700 text-sm'>
            View listings
            </Link>
        </div>
      </div> */}
      <form className='flex flex-col gap-y-4'>
        <input
            className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
            type='text'
            placeholder='Name*'
        />
        <input
            className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
            type='text'
            placeholder='Email*'
        />
        <input
            className='border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none'
            type='text'
            placeholder='Phone*'
        />
        <textarea
            className='border border-gray-300 focus:border-violet-700 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none'
            type='text'
            placeholder='Message*'
            defaultValue='Hello, I am interested in [Modern apartment]'
        />
        <div className='flex gap-x-2'>
            <button
            className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'
            type='submit'
            >
            Send message
            </button>
            <button className='border border-violet-700 text-violet-700 hover:border-purple-600 hover:text-purple-600 rounded p-4 text-sm w-full transition'>
            Call
            </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
