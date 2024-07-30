'use client'
import { useState } from 'react';
import Head from 'next/head';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Logo from '@/Images/central.jpg'
import Tv from '@/Images/tv.png'
import MobileLogo from '@/Images/mobile.jpg'
import Stranger from '@/Images/stranger.png'
import Section3 from '@/Images/section3.png'
import SlowTransitionDownloadIcon from './slowDownloadUI';
import Stars from '@/Images/stars.png'
import FAQ from './faq';
import Footer from './Footer';
import { useRouter } from 'next/navigation';

export default function StreamingLandingPage() {
  const [email, setEmail] = useState('');
  const router = useRouter();
   const handleSignIn=()=>{
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-stone-700 text-white">
      <Head>
        <title>Chakri - Stream TV Shows and Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative h-[754px]">
        {/* Background Image */}
        <div 
  className="absolute inset-0 overflow-hidden"
  style={{
    backgroundImage: `
      linear-gradient(to top, 
        rgba(0, 0, 0, 1) 0, 
        rgba(0, 0, 0, 0.5) 60%, 
        rgba(0, 0, 0, 0.8) 80%,
        rgba(0, 0, 0, 1) 100%)
    `,
  }}
>
  <div className="absolute inset-0 scale-125 origin-bottom ">
    <Image 
      src={Logo} 
      alt='logo'       
      className='brightness-75 opacity-50 h-[850px] -mt-24'
    />
  </div>
</div>
        <div className="relative  ">
          <header className="flex justify-around items-center py-6">
            <h1 className="text-red-600 text-4xl font-bold">NETFLIX</h1>
            <div className="flex flex-col sm:flex-row justify-around gap-6">
              <div className="relative ">
                <select className="appearance-none bg-black bg-opacity-50 text-white  h-8 pl-10 pr-4 rounded border border-gray-500">
                  <option>English</option>
                  <option>Hindi</option>
                </select>
                <GlobeAltIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white" />
              </div>
              <button className="bg-red-600 text-white px-4 h-8 rounded text-sm font-semibold hover:bg-red-700" onClick={handleSignIn}>Sign In</button>
            </div>
          </header>
          {/* Hero Section */}
          <div className="flex flex-col justify-center items-center text-center px-4 " style={{minHeight: "calc(100vh - 80px)"}}>
            <h2 className="text-5xl font-bold -mt-60 mb-4">Unlimited movies, TV shows and more</h2>
            <p className="text-2xl mb-8">Watch anywhere. Cancel anytime.</p>
            <p className='text-xl mb-4'>Ready to watch? Enter your email to create or restart your membership.</p>
            <form className="flex flex-col sm:flex-row w-full max-w-xl" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-grow p-4 text-white mb-2 sm:mb-0 sm:mr-2 h-14 w-full sm:w-80 bg-transparent rounded-md border border-stone-500 ring-gray-950"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-red-600 text-white px-8  text-2xl  font-bold rounded-md hover:bg-red-700">
                Get Started &gt;
              </button>
            </form>


          </div>

        </div>

        {/* Content Preview */}
      </div>
      <section >  
        <div className="relative z-10 bg-black ">
        <div className="bg-stone-800 h-2"></div>
        <div className="bg-black text-white py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-evenly px-4 sm:-space-x-40 -space-x-0">
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="text-5xl font-bold mb-4">Enjoy on your TV</h2>
          <p className="text-xl">
            Watch on smart TVs, PlayStation, Xbox, Chromecast,
            <br />
            Apple TV, Blu-ray players and more.
          </p>
        </div>
        <div className="lg:w-2/5 w-full relative ">
          <Image
            src={Tv}
            alt="TV with Netflix"
            width={530}
            height={398}
            layout="responsive"
          />
          <div className="absolute top-[21%] left-[13%] right-[14%] bottom-[24%] overflow-hidden">
            <video
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              autoPlay
              loop
              playsInline
              muted
              className="w-full h-full object-cover"
            ></video>
          </div>
        </div>
      </div>
    </div>
    </div>
      </section>
      <section>
    <div>
    <div className="bg-stone-800 h-2"></div>
    <div className='bg-black text-white py-16'>
  <div className='max-w-7xl mx-auto px-4 flex items-center sm:flex-row flex-col'>
    <div className='w-1/2 relative'>
      <div className='w-11/12 lg:h-[500px] h-96  mx-auto relative'>
        <Image 
          src={MobileLogo} 
          alt='Mobile' 
          layout='fill' 
          objectFit='responsive'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-25'></div>
      </div>
      <div className='absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-[320px] bg-black border-2 border-stone-700 rounded-xl p-3 shadow-lg'>
        <div className='flex items-center'>
          <Image src={Stranger} alt={'stranger'} width={55} height={75} className='rounded' />
          <div className='ml-4 flex-grow'>
            <p className='font-semibold text-base'>Stranger Things</p>
            <p className='text-blue-500 text-sm'>Downloading...</p>
          </div>
          <div className=''>
          <SlowTransitionDownloadIcon />

          </div>
        </div>
      </div>
    </div>
    <div className='lg:w-1/2 w-full pl-16'>
      <h2 className='text-5xl font-bold mb-6'>Download your shows to watch offline</h2>
      <p className='text-2xl text-gray-300'>
        Save your favourites easily and always have something to watch.
      </p>
    </div>
  </div>
</div>
    </div>
      </section>
      <section >  
        <div className="relative z-10 bg-black ">
        <div className="bg-stone-800 h-2"></div>
        <div className="bg-black text-white py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-evenly px-4 sm:-space-x-40 -space-x-0">
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="text-5xl font-bold mb-4">Watch everywhere</h2>
          <p className="text-xl">
          Stream unlimited movies and TV shows on your
            <br />
            phone, tablet, laptop, and TV.
          </p>
        </div>
        <div className="lg:w-2/5 w-full relative ">
          <Image
            src={Section3}
            alt="TV with Netflix"
            width={530}
            height={398}
            layout="responsive"
          />
          <div className="absolute top-[10%] left-[22%] right-[33%] bottom-[40%] overflow-hidden">
            <video
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              autoPlay
              loop
              playsInline
              muted
              className="w-full h-full object-cover"
            ></video>
          </div>
        </div>
      </div>
    </div>
    </div>
      </section>
      <section >  
        <div className="relative z-10 bg-black ">
        <div className="bg-stone-800 h-2"></div>
        <div className="bg-black text-white py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-evenly px-4 sm:-space-x-32 -space-x-0">
        <div className="lg:w-2/5 w-full relative ">
          <Image
            src={Stars}
            alt="TV with Netflix"
            width={530}
            height={398}
            layout="responsive"
          />
    
        </div>
        <div className="lg:w-2/5 mb-8 lg:mb-0">
          <h2 className="text-5xl font-bold mb-4">Create profiles for kids</h2>
          <p className="text-2xl">
          Send children on adventures with their favourite
            <br />
            characters in a space made just for them—free with
            <br />
            your membership
          </p>
        </div>
       
      </div>
    </div>
    </div>
      </section>
      <section>
      <div className="bg-stone-800 h-2"></div>
        <FAQ/>
      </section>
      <section>
      <div className="bg-stone-800 h-2"></div>
        <Footer/>
      </section>
    </div>
  );
}


