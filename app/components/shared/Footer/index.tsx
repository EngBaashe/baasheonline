'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/context/ThemeContext'
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  HeartIcon,
  ArrowUpIcon,
  ChatBubbleLeftRightIcon,
  NewspaperIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'
import {
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Youtube
} from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Articles', href: '/blogs' },
  { name: 'Technology', href: '/blogs?category=technology' },
  { name: 'Travel', href: '/blogs?category=travel' },
  { name: 'Health', href: '/blogs?category=health' },
  { name: 'Lifestyle', href: '/blogs?category=lifestyle' },
]

const resources = [
  { name: 'About Us', href: '/about' },
  { name: 'Contributors', href: '/contributors' },
  { name: 'Write for Us', href: '/write-for-us' },
  { name: 'Newsletter', href: '/newsletter' },
  { name: 'Podcast', href: '/podcast' },
  { name: 'Webinars', href: '/webinars' },
]

const legal = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
  { name: 'Cookie Policy', href: '/cookie-policy' },
  { name: 'GDPR Compliance', href: '/gdpr' },
  { name: 'Code of Conduct', href: '/code-of-conduct' },
  { name: 'Contact Us', href: '/contact' },
]

const socialLinks = [
  { 
    name: 'Twitter', 
    icon: Twitter, 
    href: 'https://twitter.com/baasheonline', 
    lightColor: 'hover:text-blue-500',
    darkColor: 'dark:hover:text-blue-400'
  },
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    href: 'https://linkedin.com/company/baasheonline', 
    lightColor: 'hover:text-blue-700',
    darkColor: 'dark:hover:text-blue-500'
  },
  { 
    name: 'GitHub', 
    icon: Github, 
    href: 'https://github.com/baasheonline', 
    lightColor: 'hover:text-gray-800',
    darkColor: 'dark:hover:text-gray-300'
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    href: 'https://instagram.com/baasheonline', 
    lightColor: 'hover:text-pink-600',
    darkColor: 'dark:hover:text-pink-400'
  },
  { 
    name: 'YouTube', 
    icon: Youtube, 
    href: 'https://youtube.com/@baasheonline', 
    lightColor: 'hover:text-red-600',
    darkColor: 'dark:hover:text-red-400'
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { theme } = useTheme()

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubscribed(true)
    setEmail('')
    setIsSubmitting(false)
    
    // Reset subscription message after 5 seconds
    setTimeout(() => setIsSubscribed(false), 5000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={`relative transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gray-900 text-gray-300 border-gray-800' 
        : 'bg-gray-50 text-gray-600 border-gray-200'
    } border-t`}>
      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center group"
        aria-label="Back to top"
      >
        <ArrowUpIcon className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform" />
      </motion.button>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
              >
                <AcademicCapIcon className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <h3 className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Baashe<span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">Online</span>
                </h3>
                <p className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Empowering Minds Since 2019
                </p>
              </div>
            </div>
            
            <p className={`mb-6 leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Your premier destination for technology insights, travel adventures, health tips, 
              and lifestyle inspiration. Join our community of curious minds.
            </p>
            
            <div className="flex items-center gap-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-md ${
                    theme === 'dark'
                      ? 'bg-gray-800 text-gray-400 border-gray-700 ' + social.darkColor
                      : 'bg-white text-gray-600 border-gray-200 ' + social.lightColor
                  } border`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            
            <div className={`flex items-center gap-2 text-sm ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              <ShieldCheckIcon className="w-4 h-4" />
              <span>Trusted by 50K+ monthly readers</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 flex items-center gap-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <GlobeAltIcon className="w-5 h-5" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2 group transition-colors ${
                      theme === 'dark'
                        ? 'text-gray-400 hover:text-blue-400'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
                    } opacity-0 group-hover:opacity-100 transition-opacity`} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 flex items-center gap-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <UserGroupIcon className="w-5 h-5" />
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className={`flex items-center gap-2 group transition-colors ${
                      theme === 'dark'
                        ? 'text-gray-400 hover:text-purple-400'
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      theme === 'dark' ? 'bg-purple-400' : 'bg-purple-500'
                    } opacity-0 group-hover:opacity-100 transition-opacity`} />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 flex items-center gap-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <NewspaperIcon className="w-5 h-5" />
              Stay Updated
            </h4>
            
            <p className={`mb-6 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Get weekly insights, exclusive content, and early access to new articles.
            </p>

            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-green-900/20 border-green-800'
                    : 'bg-green-50 border-green-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'
                  }`}>
                    <HeartIcon className={`w-5 h-5 ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    }`} />
                  </div>
                  <div>
                    <p className={`font-medium ${
                      theme === 'dark' ? 'text-green-300' : 'text-green-700'
                    }`}>
                      Welcome aboard!
                    </p>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    }`}>
                      Check your inbox for confirmation.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <EnvelopeIcon className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                  }`} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className={`w-full pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 border ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                </motion.button>
              </form>
            )}

            {/* Contact Info */}
            <div className={`mt-8 pt-8 border-t space-y-4 ${
              theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className={`flex items-center gap-3 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <EnvelopeIcon className="w-5 h-5 flex-shrink-0" />
                <span>hello@baasheonline.com</span>
              </div>
              <div className={`flex items-center gap-3 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={`flex items-start gap-3 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>San Francisco, CA<br />United States</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Bottom Bar */}
        <div className={`mt-12 pt-8 border-t ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    theme === 'dark'
                      ? 'text-gray-500 hover:text-blue-400'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Copyright & Stats */}
            <div className="flex items-center gap-6">
              <div className={`text-sm ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
              }`}>
                © {new Date().getFullYear()} BaasheOnline. All rights reserved.
              </div>
              <div className="hidden md:flex items-center gap-4 text-sm">
                <span className={`flex items-center gap-1 ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  <ChatBubbleLeftRightIcon className="w-4 h-4" />
                  1.2K Discussions
                </span>
                <span className={`flex items-center gap-1 ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  <HeartIcon className="w-4 h-4" />
                  5K+ Likes
                </span>
              </div>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'MongoDB'].map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1.5 text-xs font-medium rounded-full border ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 border-gray-700'
                    : 'bg-gray-100 text-gray-700 border-gray-200'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Made with love */}
          <div className="mt-8 text-center">
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              Made with <HeartIcon className="w-4 h-4 inline text-red-500" /> by the BaasheOnline team
              • Proudly open source
            </p>
          </div>
        </div>
      </div>

      {/* Gradient Ornaments */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
      <div className={`absolute top-0 left-1/4 w-48 h-48 rounded-full blur-3xl opacity-20 ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20'
          : 'bg-gradient-to-r from-blue-200 to-purple-200'
      }`} />
      <div className={`absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-emerald-900/20 to-teal-900/20'
          : 'bg-gradient-to-r from-emerald-200 to-teal-200'
      }`} />
    </footer>
  )
}