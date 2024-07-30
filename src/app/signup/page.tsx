// src/app/page.tsx
'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DeviceIcons from '@/components/DeviceIcons';
import Link from 'next/link';
import sendEmail from '@/database/emails/sendemail';

const steps = ['Account Setup', 'Personal Info', 'Preferences', 'Confirmation'];

const footerData = [
  {title: 'FAQ', href: '/faq'},
  {title: 'Help Centre', href: '/helpcentre'},
  {title: 'Netflix Shop', href: '/shop'},
  {title: 'Terms of Use', href: '/terms'},
  {title: 'Privacy', href: '/privacy'},
  {title: 'Cookie Preferences', href: '/cookie'},
  {title: 'Corporate Information', href: '/corporate'}
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [emailStatus, setEmailStatus] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 0) {
      setCurrentStep(1);
    } else if (currentStep === 1) {
      // Send verification email
      setEmailStatus('Sending...');
      try {
        const response = await sendEmail(email);

        if (response) {
          setEmailStatus('Verification email sent successfully!');
          console.log(response.data , 'email sent')
          // Move to next step or handle accordingly
          setCurrentStep(2);
        } else {
          setEmailStatus(`Failed to send email: ${response}`);
          console.log('failed')
        }
      } catch (error) {
        setEmailStatus('An error occurred while sending the email.');
      }
    } else {
      console.log({ email, password });
      // Handle final form submission
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="py-4 px-8 border-b border-gray-200 flex justify-between">
        <h1 className="text-3xl font-bold text-red-600">CHAKRI</h1>
        <button className='hover:underline text-sm font-semibold'>Sign In</button>
      </header>

      <main className="flex-grow flex items-center justify-center px-4">
        <form onSubmit={handleSubmit} className="max-w-md w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 0 && (
                <div className="text-center">
                  <DeviceIcons />
                  <p className="text-xs text-gray-500 mt-5" style={{fontSize:'10px'}}>STEP {currentStep + 1} OF {steps.length}</p>
                  <h2 className="mt-2 text-3xl font-semibold px-14">Finish setting up your account</h2>
                  <p className="mt-4 text-base text-gray-900 px-20">
                    Netflix is personalised for you. Create a password to watch on any device at any time.
                  </p>

                  <div className='flex justify-center'>
                    <motion.button
                      type="submit"
                      className="mt-8 w-72 items-center bg-red-600 text-white py-6 rounded-sm hover:bg-red-500 transition duration-300"
                      whileTap={{ scale: 0.95 }}
                    >
                      {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </motion.button>
                  </div>
                </div>
              )}
              {currentStep === 1 && (
                <div className="text-center">
                  <p className="text-xs text-gray-500 mt-5 text-start">STEP 1 OF 4</p>
                  <h2 className="mt-2 text-2xl font-semibold text-start">Create a password to start your membership</h2>
                  <p className="mt-4 text-sm text-gray-600 text-start">
                    Just a few more steps and you're done!<br />We hate paperwork, too.
                  </p>
                  <div className="mt-6 space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded"
                      required
                    />
                    <input
                      type="password"
                      placeholder="Add a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  {emailStatus && <p className="mt-2 text-sm text-blue-600">{emailStatus}</p>}
                  <div className='flex justify-center'>
                    <motion.button
                      type="submit"
                      className="mt-8 w-full items-center bg-red-600 text-white py-5 rounded-sm hover:bg-red-500 transition duration-300"
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className='font-semibold text-white text-xl'>
                        {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </span> 
                    </motion.button>
                  </div>
                </div>
              )}
              {
                currentStep ===2 && (
                  <div>
                    Skip the procedure
                  </div>
                )
              }
            </motion.div>
          </AnimatePresence>
        </form>
      </main>

      <footer className="w-full bg-gray-50 text-gray-500 text-sm px-4 md:px-8">
        <div className="max-w-6xl mr-auto p-10">
          <p className="mb-6">Questions? Call 000-800-919-1694</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {footerData.map((link, index) => (
              <Link key={index} href={link.href}>
                <span className="hover:underline cursor-pointer">{link.title}</span>
              </Link>
            ))}
          </div>
          <div className="mb-1 mt-3">
            <select className="bg-transparent border border-gray-400 rounded py-1 px-2 appearance-none">
              <option value="en" className="text-gray-800">🌐 English</option>
              <option value="hi" className="text-gray-800">🌐 हिन्दी</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
}