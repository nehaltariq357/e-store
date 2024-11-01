import React from "react";
import Image from "next/image";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";
import { CiHeadphones } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { BiJoystick } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Main = () => {
  return (
    <main className="w-full">
      <div className="bg-customColor text-white grid grid-rows-2 md:grid-cols-2 h-[800px] md:h-[400px] w-full">
        <div className="flex flex-col items-center md:items-start md:ml-32 mt-28 font-sans">
          <p className="text-gray-400 font-bold text-2xl">Pro.Beyond.</p>

          <div className="flex items-center">
            <p className="text-7xl font-thin w-fit">IPhone 14</p>
            <span className="text-7xl font-semibold hidden md:flex">Pro</span>
          </div>

          {/* For small screens */}
          <span className="text-7xl font-semibold md:hidden w-fit">Pro</span>

          <p className="text-gray-400 md:w-fit mt-4 hidden md:block">
            Created to change everything for the better. For everyone.
          </p>

          <p className="text-gray-400 md:w-fit mt-4 w-[45%] items-center md:hidden mx-auto text-center">
            Created to change everything for the better. For everyone.
          </p>

          <button className="px-10 py-2 rounded-md mt-6 border border-slate-200">
            Buy Now
          </button>
        </div>

        {/* right side gird of first div */}
        <div className="flex justify-center">
          <Image
            src={"/images/Iphone Image.png"}
            alt="iphone-pic"
            width={250} // mobile w
            height={10}
            className="md:w-[300px] md:h-[400px]"
          />
        </div>
      </div>

      {/* 2nd div */}
      {/* //responsive version */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="grid grid-cols-1 md:col-span-3">
            {/* one ********************/}
            <div className=" md:flex md:h-60 h-[600px] w-full">
              <Image
                src="/images/PlayStation.png"
                alt="pic"
                width={300}
                height={100}
                className="md:w-80 md:h-96 mx-auto p-4 h-[300px]"
              />
              <div className=" md:flex flex flex-col md:justify-center mt-20 md:mt-0">
                <p className="text-5xl mx-auto">Playstion 5</p>
                <p className="w-[62%]  mx-auto mt-5 md:mt-0 text-gray-500">
                  Incredibly powerful CPUs,GPUs,and an SSD with integrated I/O
                  will redefine your PlayStion experience
                </p>
              </div>
            </div>
          </div>
          {/* two*********************** */}
          <div className="bg-offWhite md:flex md:h-60 h-[400px]">
            <div className="md:flex">
              <Image
                src="/images/airpod.png"
                alt="pic"
                width={150}
                height={500}
                className="md:w-28 md:h-56 hidden md:block"
              />
              {/* mobile version */}
              <Image
                src="/images/airpodmobile.png"
                alt="pic"
                width={220}
                height={500}
                className="md:w-28 md:h-56 md:hidden mx-auto p-5"
              />
              <div className="flex flex-col justify-center ml-10">
                <p className="text-5xl md:text-3xl text-center">
                  Apple AirPods{" "}
                  <span className="font-semibold text-5xl">Max</span>
                </p>
                <p className="text-gray-500 text-center text-2xl mt-3">
                  Computational audio.Listen,its powerful
                </p>
              </div>
            </div>
          </div>
          <div>
            {/* three************************ */}
            <div className="bg-customColor flex md:h-60 text-white h-[400px]">
              <Image
                src="/images/applevisionpro.png"
                alt="pic"
                width={150}
                height={500}
                className="md:w-24 md:h-40 md:mt-12 hidden md:block"
              />
              {/* mobile version */}
              <div className="w-full">
                <Image
                  src="/images/visionpromobile.png"
                  alt="pic"
                  width={350}
                  height={100}
                  className="md:w-24 md:h-40 md:mt-12 md:hidden mx-auto"
                />
               <div className="md:flex flex-col items-center md:justify-center md:ml-5">
  <div className="hidden md:block mt-9 text-center">
    <p className="text-2xl">Apple</p>
    <p className="text-2xl">
      Vision <span className="font-semibold text-2xl">Pro</span>
    </p>
    <p className="w-44 text-gray-400">
      An immersive way to experience entertainment
    </p>
  </div>
  <div className="md:hidden flex justify-center">
    <p className="text-4xl">Apple</p>
    <p className="text-4xl">
      Vision <span className="font-semibold text-4xl">Pro</span>
    </p>
  </div>
  <p className="text-center text-gray-400 md:hidden">
    An immersive way to experience entertainment
  </p>
</div>

              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="bg-offWhite md:flex md:justify-between h-[480px]">
          <Image
            src="/images/MacBook Pro 14mobile.png"
            alt="pic"
            width={450}
            height={0}
            className="md:hidden mx-auto"
          />
          <div className="md:flex md:items-center">
            <div className="md:ml-14 space-y-5">
              <div className="flex justify-center w-full">
                {" "}
                <p className="md:text-6xl md:font-thin text-6xl">Macbook</p>
                <p className="md:text-6xl font-semibold text-6xl">AIR</p>
              </div>
              <p className="md:w-96 w-96 mx-auto">
                The new 15-inch Macbook Air makes room for more of what you love
                with a spacious liquid Retina display.
              </p>
              <button className="px-10 py-2 rounded-md mt-6 border border-slate-500 ml-6 w-[90%]">
                Shop Now
              </button>
            </div>
          </div>
          <Image
            src="/images/MacBook Pro 14.png"
            alt="pic"
            width={300}
            height={0}
            className="hidden md:block"
          />
        </div>
      </div>

      {/* browse by category */}

      <div className="text-4xl ml-[50px] md:mt-16 flex  md:p-10 mt-10 ">
        <p>Browse By Category</p>
      </div>

      <div className="grid md:grid-cols-6 grid-cols-2  md:flex md:justify-evenly md:p-8 p-20 gap-10">
        <div className="flex flex-col items-center text-5xl rounded-lg text-gray-500 bg-offWhite p-10">
          <HiOutlineDevicePhoneMobile className="mb-3" />
          <span className="text-sm">Phones</span>
        </div>

        <div className="flex flex-col items-center text-3xl rounded-lg text-gray-500 bg-offWhite p-8">
          <BsSmartwatch className="mb-3" />
          <span className="text-sm text-center">Smart Watches</span>
        </div>
        <div className="flex flex-col items-center text-5xl rounded-lg text-gray-500 bg-offWhite p-10">
          <FiCamera className="mb-3" />
          <span className="text-sm">Cameras</span>
        </div>
        <div className="flex flex-col items-center text-5xl rounded-lg text-gray-500 bg-offWhite p-10">
          <CiHeadphones className="mb-3" />
          <span className="text-sm">HeadPhones</span>
        </div>
        <div className="flex flex-col items-center text-5xl rounded-lg text-gray-500 bg-offWhite p-10">
          <RiComputerLine className="mb-3" />
          <span className="text-sm">Computers</span>
        </div>
        <div className="flex flex-col items-center text-5xl rounded-lg text-gray-500 bg-offWhite p-10">
          <BiJoystick className="mb-3" />
          <span className="text-sm">Gaming</span>
        </div>
      </div>
      {/* new arrival */}
      <div className="">
        <ul className="flex md:ml-[40px] gap-16 ml-16 font-bold">
          <li className="hover:underline cursor-pointer">New Arrival</li>
          <li className="hover:underline cursor-pointer">Bestselller</li>
          <li className="hover:underline cursor-pointer">Featured Product</li>
        </ul>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 md:p-8 p-20 gap-10">
        <div className="flex flex-col items-center text-5xl rounded-lg text-gray-500 bg-offWhite p-10">
          <Image
            src="/images/Iphone 14 pro 1.png"
            alt="pic"
            width={100}
            height={100}
          />
          <span className="text-sm text-center font-bold text-black">
            Apple iphone 14 pro Max
          </span>
          <span className="text-sm text-center font-bold text-black">
            128GB Deep Purple
          </span>
          <span className="text-3xl font-bold text-black text-center">
            $900
          </span>
          <button className="md:px-10 md:py-3 p-2 rounded-md mt-6 text-sm bg-black text-white ">
            Shop Now
          </button>
        </div>

        <div className="flex flex-col items-center text-3xl rounded-lg text-gray-500 bg-offWhite p-8">
          <Image src="/images/camera.png" alt="pic" width={100} height={100} />
          <span className="text-sm text-center font-bold text-black">
            Apple iphone 14 pro Max
          </span>
          <span className="text-sm text-center font-bold text-black">
            128GB Deep Purple
          </span>
          <span className="text-3xl font-bold text-black text-center">
            $900
          </span>
          <button className="md:px-10 md:py-3 p-2 rounded-md mt-6 text-sm bg-black text-white ">
            Shop Now
          </button>
        </div>

        <div className="flex flex-col items-center text-5xl rounded-lg text-gray-500 bg-offWhite p-10">
          <Image
            src="/images/smartWatch.png"
            alt="pic"
            width={100}
            height={100}
          />
          <span className="text-sm text-center font-bold text-black">
            Apple iphone 14 pro Max
          </span>
          <span className="text-sm text-center font-bold text-black">
            128GB Deep Purple
          </span>
          <span className="text-3xl font-bold text-black text-center">
            $900
          </span>
          <button className="md:px-10 md:py-3 p-2 rounded-md mt-6 text-sm bg-black text-white ">
            Shop Now
          </button>
        </div>

        <div className="flex flex-col items-center text-5xl rounded-lg text-gray-500 bg-offWhite p-10">
          <Image
            src="/images/airpodmobile.png"
            alt="pic"
            width={100}
            height={100}
          />
          <span className="text-sm text-center font-bold text-black">
            Apple iphone 14 pro Max
          </span>
          <span className="text-sm text-center font-bold text-black">
            128GB Deep Purple
          </span>
          <span className="text-3xl font-bold text-black text-center">
            $900
          </span>
          <button className="md:px-10 md:py-3 p-2 rounded-md mt-6 text-sm bg-black text-white ">
            Shop Now
          </button>
        </div>

        <div className="flex flex-col items-center text-5xl rounded-lg text-gray-500 bg-offWhite p-10">
          <Image src="/images/watch6.png" alt="pic" width={100} height={100} />
          <span className="text-sm text-center font-bold text-black">
            Apple iphone 14 pro Max
          </span>
          <span className="text-sm text-center font-bold text-black">
            128GB Deep Purple
          </span>
          <span className="text-3xl font-bold text-black text-center">
            $900
          </span>
          <button className="md:px-10 md:py-3 p-2 rounded-md mt-6 text-sm bg-black text-white ">
            Shop Now
          </button>
        </div>
        <div className="flex flex-col items-center text-5xl rounded-lg text-gray-500 bg-offWhite p-10">
          <Image src="/images/zfold.png" alt="pic" width={100} height={100} />
          <span className="text-sm text-center font-bold text-black">
            Apple iphone 14 pro Max
          </span>
          <span className="text-sm text-center font-bold text-black">
            128GB Deep Purple
          </span>
          <span className="text-3xl font-bold text-black text-center">
            $900
          </span>
          <button className="md:px-10 md:py-3 p-2 rounded-md mt-6 text-sm bg-black text-white ">
            Shop Now
          </button>
        </div>
        <div className="flex flex-col items-center text-5xl rounded-lg text-gray-500 bg-offWhite p-10">
          <Image src="/images/buds.png" alt="pic" width={100} height={100} />
          <span className="text-sm text-center font-bold text-black">
            Apple iphone 14 pro Max
          </span>
          <span className="text-sm text-center font-bold text-black">
            128GB Deep Purple
          </span>
          <span className="text-3xl font-bold text-black text-center">
            $900
          </span>
          <button className="md:px-10 md:py-3 p-2 rounded-md mt-6 text-sm bg-black text-white ">
            Shop Now
          </button>
        </div>

        <div className="flex flex-col items-center text-5xl rounded-lg text-gray-500 bg-offWhite p-10">
          <Image src="/images/ipad9.png" alt="pic" width={100} height={100} />
          <span className="text-sm text-center font-bold text-black">
            Apple iphone 14 pro Max
          </span>
          <span className="text-sm text-center font-bold text-black">
            128GB Deep Purple
          </span>
          <span className="text-3xl font-bold text-black text-center">
            $900
          </span>
          <button className="md:px-10 md:py-3 p-2 rounded-md mt-6 text-sm bg-black text-white ">
            Shop Now
          </button>
        </div>
      </div>

      {/* new div */}
      <div className="grid md:grid-cols-4 grid-cols-1 md:p-8 p-20">
        <div className="flex flex-col items-center text-5xl rounded-lg text-gray-500 p-10">
          <Image src="/images/Group 1.png" alt="pic" width={300} height={100} />
          <span className="text-sm text-center font-bold text-black">
            Apple iphone 14 pro Max
          </span>
          <span className="text-sm text-center font-bold text-black">
            128GB Deep Purple
          </span>
          <span className="text-3xl font-bold text-black text-center">
            $900
          </span>
          <div className="flex-grow"></div>
          <button className="md:px-10 md:py-3 p-2 rounded-md mt-6 text-sm bg-black text-white ">
            Shop Now
          </button>
        </div>

        <div className="flex flex-col items-center text-3xl rounded-lg text-gray-500 bg-stone-100 p-8">
          <Image
            src="/images/image 64.png"
            alt="pic"
            width={300}
            height={100}
          />
          <span className="text-sm text-center font-bold text-black">
            Apple iphone 14 pro Max
          </span>
          <span className="text-sm text-center font-bold text-black">
            128GB Deep Purple
          </span>
          <span className="text-3xl font-bold text-black text-center">
            $900
          </span>
          <div className="flex-grow"></div>
          <button className="md:px-10 md:py-3 p-2 rounded-md mt-6 text-sm bg-black text-white ">
            Shop Now
          </button>
        </div>

        <div className="flex flex-col items-center text-5xl rounded-lg text-gray-500 bg-offWhite p-10">
          <Image
            src="/images/image 41.png"
            alt="pic"
            width={300}
            height={100}
          />
          <span className="text-sm text-center font-bold text-black">
            Apple iphone 14 pro Max
          </span>
          <span className="text-sm text-center font-bold text-black">
            128GB Deep Purple
          </span>
          <span className="text-3xl font-bold text-black text-center">
            $900
          </span>
          <div className="flex-grow"></div>
          <button className="md:px-10 md:py-3 p-2 rounded-md mt-6 text-sm bg-black text-white ">
            Shop Now
          </button>
        </div>

        <div className="flex flex-col items-center text-5xl rounded-lg bg-customColor p-10">
          <Image
            src="/images/MacBook Pro 14mobile.png"
            alt="pic"
            width={300}
            height={100}
          />
          <span className="text-sm text-center font-bold text-white">
            Apple iphone 14 pro Max
          </span>
          <span className="text-sm text-center font-bold text-white">
            128GB Deep Purple
          </span>
          <span className="text-3xl font-bold text-white">$900</span>
          <div className="flex-grow"></div>
          <button className="md:px-10 md:py-3 p-2 rounded-md mt-6 text-sm bg-black text-white ">
            Shop Now
          </button>
        </div>
      </div>

      {/* new div */}
      <div className="text-4xl ml-[50px] md:mt-16 flex  md:p-10 mt-10 ">
        <p>Discounts up to-50%</p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 md:p-8 p-20 gap-10">
        <div className="flex flex-col items-center text-5xl rounded-lg text-gray-500 bg-offWhite p-10">
          <Image
            src="/images/Iphone 14 pro 1.png"
            alt="pic"
            width={100}
            height={100}
          />
          <span className="text-sm text-center font-bold text-black">
            Apple iphone 14 pro Max
          </span>
          <span className="text-sm text-center font-bold text-black">
            128GB Deep Purple
          </span>
          <span className="text-3xl font-bold text-black text-center">
            $900
          </span>
          <button className="md:px-10 md:py-3 p-2 rounded-md mt-6 text-sm bg-black text-white ">
            Shop Now
          </button>
        </div>

        <div className="flex flex-col items-center text-3xl rounded-lg text-gray-500 bg-offWhite p-8">
          <Image src="/images/camera.png" alt="pic" width={100} height={100} />
          <span className="text-sm text-center font-bold text-black">
            Apple iphone 14 pro Max
          </span>
          <span className="text-sm text-center font-bold text-black">
            128GB Deep Purple
          </span>
          <span className="text-3xl font-bold text-black text-center">
            $900
          </span>
          <button className="md:px-10 md:py-3 p-2 rounded-md mt-6 text-sm bg-black text-white ">
            Shop Now
          </button>
        </div>

        <div className="flex flex-col items-center text-5xl rounded-lg text-gray-500 bg-offWhite p-10">
          <Image
            src="/images/smartWatch.png"
            alt="pic"
            width={100}
            height={100}
          />
          <span className="text-sm text-center font-bold text-black">
            Apple iphone 14 pro Max
          </span>
          <span className="text-sm text-center font-bold text-black">
            128GB Deep Purple
          </span>
          <span className="text-3xl font-bold text-black text-center">
            $900
          </span>
          <button className="md:px-10 md:py-3 p-2 rounded-md mt-6 text-sm bg-black text-white ">
            Shop Now
          </button>
        </div>

        <div className="flex flex-col items-center text-5xl rounded-lg text-gray-500 bg-offWhite p-10">
          <Image
            src="/images/airpodmobile.png"
            alt="pic"
            width={100}
            height={100}
          />
          <span className="text-sm text-center font-bold text-black">
            Apple iphone 14 pro Max
          </span>
          <span className="text-sm text-center font-bold text-black">
            128GB Deep Purple
          </span>
          <span className="text-3xl font-bold text-black text-center">
            $900
          </span>
          <button className="md:px-10 md:py-3 p-2 rounded-md mt-6 text-sm bg-black text-white ">
            Shop Now
          </button>
        </div>
      </div>

      {/* new div */}

      <div className="bg-[url('/images/Banner2.jpg')] bg-cover flex flex-col text-white items-center justify-center h-96">
        <h1 className="text-white text-5xl">
          Big Summer <span className="font-semibold">Sale</span>
        </h1>
        <p className="text-gray-400">
          Commodo fames vitea leo muuris in.Eu consequat.
        </p>
        <button className="md:px-10 md:py-3 p-2 rounded-md mt-6 text-sm bg-transparent border border-r-2 text-white px-10">
          Shop Now
        </button>
      </div>

      {/* footer */}
      <footer className="text-white bg-black">
        <div className="grid md:grid-cols-3 grid-cols-1 md:h-[500px] h-[1200px] p-20 justify-items-center md:justify-items-start">
          <div className="space-y-5 text-center md:text-left">
            <p className="font-bold text-2xl">cyber</p>
            <p className="w-[80%] mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              voluptatibus aperiam laudantium doloremque.
            </p>
          </div>
          <div className="space-y-5 text-center md:text-left">
            <p className="font-bold text-2xl">services</p>
            <p>Bonus program</p>
            <p>Gifts card</p>
            <p>Credit and payement</p>
            <p>Service contract</p>
            <p>Non-cash account</p>
            <p>Payement</p>
          </div>
          <div className="space-y-5 text-center md:text-left">
            <p className="font-bold text-2xl">Assistance to the buyer</p>
            <p>Find an order</p>
            <p>Terms of delivery</p>
            <p>Exchange and return of goods</p>
            <p>Gurantee</p>
            <p>Frequently asked questions</p>
            <p>Terms of use of the site</p>
          </div>
          <div className="mt-10">
            <ul className="flex justify-center md:justify-start space-x-10">
              <li>
                <FaTwitter />
              </li>
              <li>
                <RiFacebookFill />
              </li>
              <li>
                <FaTiktok />
              </li>
              <li>
                <AiFillInstagram />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Main;
