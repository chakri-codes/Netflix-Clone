'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/Images/central.jpg'

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
  };
  const footerData =
   [{title:'FAQ' , href:'/faq'},
    {title:'HelpCentre', href:'/helpcentre'},
    {title:'Terms of Use', href:'/terms'},
    {title:'Privacy' , href:'/privacy'},
    {title: 'Cooke Preferences' , href:'/cookie'},
    {title: 'Corporate Information' , href:'/coporate'}

  ]

  return (
    <>
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Hero}
          layout="fill"
          objectFit="cover"
          alt="Netflix background"
          className="opacity-50"
        />
      </div>

      {/* Netflix Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-4 left-4 z-10"
      >
        {/* <Image src="/netflix-logo.png" width={167} height={45} alt="Netflix" /> */}
        <h1 className='text-red-500 text-4xl'>NETFLIX</h1>
      </motion.div>

      {/* Sign In Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-black bg-opacity-75 p-16 rounded-md w-full max-w-md z-10"
      >
        <h1 className="text-white text-3xl mb-8">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Email or mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-transparent  border border-stone-600 text-white rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-transparent border border-stone-600 text-white rounded"
            />
            <button
              type="submit"
              className="w-full p-4 bg-red-600 text-white rounded font-bold"
            >
              Sign In
            </button>
          </div>
          <div className="flex justify-between items-center mt-4 text-gray-400">
            <label className="flex items-center" >
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2 bg-transparent"
              />
              Remember me
            </label>
            <Link href="/help" className="text-gray-400 hover:underline">
              Need help?
            </Link>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-400">Or</p>
          <button className="mt-2 p-4 bg-transparent  border border-stone-600 text-white rounded w-full">
            Use a sign-in code
          </button>
        </div>
        <div className="mt-4">
          <Link href="/forgot-password" className="text-gray-400 hover:underline">
            Forgot password?
          </Link>
        </div>
        <div className="mt-4 text-gray-400">
          <p>
            New to Netflix?{' '}
            <Link href="/signup" className="text-white hover:underline">
              Sign up now
            </Link>
            .
          </p>
        </div>
        <div className="mt-4 text-xs text-gray-500">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
          <Link href="/learn-more" className="text-blue-500 hover:underline">
            Learn more
          </Link>
          .
        </div>
      </motion.div>
    </div>
    <footer className="bg-black text-stone-300 py-8 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">
        <h1 className='mb-6'>Questions? Call 000-800-919-1694</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
          {footerData.map((link, index) => (
            <Link key={index} href={link.href} className="hover:underline text-sm underline text-stone-300" style={{fontFamily:'sans-serif'}}>
              {link.title}
            </Link>
          ))}
        </div>
        <div className="mb-6">
          <select className="bg-transparent border border-gray-700  py-1 px-2 rounded">
            <option value="en" className='text-white font-semibold'>English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </div>


    </div>
    </footer>
    </>
  );
};

export default SignInPage;