import React from 'react';
import Link from 'next/link';

const footerLinks = [
  { title: 'FAQ', href: '/faq' },
  { title: 'Help Centre', href: '/help' },
  { title: 'Account', href: '/account' },
  { title: 'Media Centre', href: '/media' },
  { title: 'Investor Relations', href: '/investors' },
  { title: 'Jobs', href: '/jobs' },
  { title: 'Ways to Watch', href: '/ways-to-watch' },
  { title: 'Terms of Use', href: '/terms' },
  { title: 'Privacy', href: '/privacy' },
  { title: 'Cookie Preferences', href: '/cookies' },
  { title: 'Corporate Information', href: '/corporate' },
  { title: 'Contact Us', href: '/contact' },
  { title: 'Speed Test', href: '/speed-test' },
  { title: 'Legal Notices', href: '/legal' },
  { title: 'Only on Netflix', href: '/only-on-netflix' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-stone-300 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <p>Questions? Call <a href="tel:000-800-919-1694" className="hover:underline underline">000-800-919-1694</a></p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
          {footerLinks.map((link, index) => (
            <Link key={index} href={link.href} className="hover:underline text-sm underline " style={{fontFamily:'sans-serif'}}>
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
        
        <div>
          <p>Netflix India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;