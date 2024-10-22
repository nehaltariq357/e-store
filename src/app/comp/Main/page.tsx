import React from 'react';
import Image from 'next/image';

const Main = () => {
  return (
    <main>
      <div className='bg-customColor text-white grid grid-rows-2 md:grid-cols-2 h-[800px] md:h-[400px] w-full'>
        <div className='flex flex-col items-center md:items-start md:ml-32 mt-28 font-sans'>
          <p className='text-gray-400 font-bold text-2xl'>Pro.Beyond.</p>

          {/* Wrap iPhone 14 and Pro in a flex container to align them side by side */}
          <div className='flex items-center'>
            <p className='text-7xl font-thin w-fit'>IPhone 14</p>
            <span className='text-7xl font-semibold hidden md:flex'>Pro</span>
          </div>

          {/* For small screens */}
          <span className='text-7xl font-semibold md:hidden w-fit'>Pro</span>

          <p className='text-gray-400 md:w-fit mt-4 hidden md:block'>
            Created to change everything for the better. For everyone.
          </p>

          <p className='text-gray-400 md:w-fit mt-4 w-[45%] items-center md:hidden mx-auto text-center'>
            Created to change everything for the better. For everyone.
          </p>

          <button className='px-10 py-2 rounded-md mt-6 border border-slate-200'>
            Buy Now
          </button>
        </div>

        {/* right side gird of first div */}
        <div className='flex justify-center'>
          <Image
            src={'/images/Iphone Image.png'}
            alt='iphone-pic'
            width={250} // mobile w
            height={10}
            className='md:w-[300px] md:h-[400px]'
          />
        </div>
      </div>

 {/* 2nd div */}
{/* //responsive version */}
<div className='grid grid-cols-1 md:grid-cols-2'>
<div className='grid grid-cols-1 md:grid-cols-2'>
<div className='grid grid-cols-1 md:col-span-3'>
  {/* one ********************/}
 <div className=' md:flex md:h-60 h-[600px] w-full'>
 <Image
  src="/images/PlayStation.png"
  alt='pic'
  width={300}
  height={100}
  className='md:w-80 md:h-96 mx-auto p-4 h-[300px]'
  />
  <div className=' md:flex flex flex-col md:justify-center mt-20 md:mt-0'>
    <p className='text-5xl mx-auto'>Playstion 5</p>
    <p className='w-[62%]  mx-auto mt-5 md:mt-0 text-gray-500'>Incredibly powerful CPUs,GPUs,and an SSD with integrated I/O will redefine your PlayStion experience</p>
  </div>
 </div>
  
  </div> 
  {/* two*********************** */}
<div className='bg-offWhite md:flex md:h-60 h-[400px]'>
 <div className='md:flex'>
 <Image
  src="/images/airpod.png"
  alt='pic'
  width={150}
  height={500}
   className='md:w-28 md:h-56 hidden md:block'
  />
  {/* mobile version */}
   <Image
  src="/images/airpodmobile.png"
  alt='pic'
  width={220}
  height={500}
   className='md:w-28 md:h-56 md:hidden mx-auto p-5'
  />
  <div className='flex flex-col justify-center ml-10'>
    <p className='text-5xl md:text-3xl text-center'>Apple AirPods <span className='font-semibold text-5xl'>Max</span></p>
    <p className='text-gray-500 text-center text-2xl mt-3'>Computational audio.Listen,its powerful</p>
  </div>
 </div>
  </div>
<div>
  {/* three************************ */}
<div className='bg-customColor flex md:h-60 text-white h-[400px]'>
    
<Image
  src="/images/applevisionpro.png"
  alt='pic'
  width={150}
  height={500}
   className='md:w-24 md:h-40 md:mt-12 hidden md:block'
  />
  {/* mobile version */}
<div className='w-full'>
<Image
  src="/images/visionpromobile.png"
  alt='pic'
  width={350}
  height={100}
   className='md:w-24 md:h-40 md:mt-12 md:hidden mx-auto'
  />
<div className='md:flex flex-col md:justify-center md:ml-5'>
  <div className='hidden md:block mt-9 '><p className='text-2xl'>Apple</p>
  <p className='text-2xl'>Vision <span className='font-semibold text-2xl'>Pro</span></p>
  <p className='w-44 text-gray-400'>An immersive way to experience entertainment</p></div>
  <div className='md:hidden flex ml-52'><p className='text-4xl'>Apple</p>
  <p className='text-4xl'>Vision <span className='font-semibold text-4xl'>Pro</span></p>
 </div>
 <p className='ml-40 text-gray-400 md:hidden'>An immersive way to experience entertainment</p>
</div>
</div>
</div>
</div>
</div>
{/* right side */}
<div className='bg-offWhite md:flex md:justify-between h-[500px]'>
<Image
          
          src="/images/MacBook Pro 14mobile.png"
          alt='pic'
          width={450}
          height={0}
          className='md:hidden mx-auto'
          />
  <div className='md:flex md:items-center'>
  <div className='md:ml-14 '>  
 <div className='flex justify-center w-full'> <p className='md:text-6xl md:font-thin text-6xl'>Macbook</p>
 <p className='md:text-6xl font-semibold text-6xl'>AIR</p></div>
  <p className='md:w-96 w-96 mx-auto'>The new 15-inch Macbook Air makes room for more of what you love with a spacious liquid Retina display.</p>
  <button className='px-10 py-2 rounded-md mt-6 border border-slate-500 ml-6 w-[90%]'>
           Shop Now
          </button>
          </div>
  </div>
  <Image
          
          src="/images/MacBook Pro 14.png"
          alt='pic'
          width={300}
          height={0}
          className='hidden md:block'
          />

</div>
</div>





    </main>
  );
};

export default Main;
