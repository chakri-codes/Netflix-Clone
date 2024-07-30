import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is Netflix?",
    answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
  },
  { question: "How much does Netflix cost?", answer: "Netflix offers various subscription plans. Please check our website for current pricing." },
  { question: "Where can I watch?", answer: "You can watch Netflix on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles." },
  { question: "How do I cancel?", answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks." },
  { question: "What can I watch on Netflix?", answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." },
  { question: "Is Netflix good for kids?", answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space." },
];

const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [email , setEmail] = useState('')

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-16">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      
      <div className="max-w-6xl mx-auto space-y-2">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-[#2D2D2D] mb-2">
            <button
              className="w-full p-3 text-left flex justify-between items-center hover:bg-neutral-700 duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-xl md:text-2xl ">{item.question}</span>
              <span className="text-6xl font-extralight transition-transform duration-300 transform">
                {expandedIndex === index ? '×' : '+'}
              </span>
            </button>
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="p-5 text-lg">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="mb-4 text-xl">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='flex justify-center'>
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
    </div>
  );
};

export default FAQ;