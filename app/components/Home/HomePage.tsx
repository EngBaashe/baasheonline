'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Card from '../ui/Card'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/context/ThemeContext'

// Import professional icons
import {
  CpuChipIcon,
  GlobeAltIcon,
  HeartIcon,
  SunIcon,
  RocketLaunchIcon,
  SparklesIcon,
  BookOpenIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

const categories = [
  {
    id: 1,
    name: 'Technology',
    description: 'Latest in AI, Web Development, Cybersecurity & Innovation',
    icon: CpuChipIcon,
    color: 'tech',
    articleCount: 42,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 2,
    name: 'Travel & Tourism',
    description: 'Explore destinations, travel tips & cultural experiences',
    icon: GlobeAltIcon,
    color: 'travel',
    articleCount: 28,
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 3,
    name: 'Health & Wellness',
    description: 'Fitness, nutrition, mental health & wellness tips',
    icon: HeartIcon,
    color: 'health',
    articleCount: 35,
    gradient: 'from-rose-500 to-pink-600'
  },
  {
    id: 4,
    name: 'Lifestyle',
    description: 'Productivity, personal growth & daily inspiration',
    icon: SunIcon,
    color: 'lifestyle',
    articleCount: 31,
    gradient: 'from-violet-500 to-purple-600'
  }
]

const featuredArticles = [
  {
    id: 1,
    title: 'AI Revolution: How ChatGPT is Changing Everything',
    description: 'Exploring the transformative impact of AI chatbots on industries from education to customer service.',
    date: '2024-01-20',
    readTime: '8 min read',
    category: 'Technology',
    views: '2.4k',
    author: 'Alex Johnson',
    authorAvatar: 'AJ',
    trending: true
  },
  {
    id: 2,
    title: 'Bali Digital Nomad Guide 2024',
    description: 'Complete guide to working remotely from Bali - best spots, visas, and cost of living.',
    date: '2024-01-18',
    readTime: '10 min read',
    category: 'Travel & Tourism',
    views: '1.8k',
    author: 'Sarah Chen',
    authorAvatar: 'SC',
    featured: true
  },
  {
    id: 3,
    title: 'Meditation for Developers',
    description: 'How mindfulness practices can boost coding productivity and reduce burnout.',
    date: '2024-01-15',
    readTime: '6 min read',
    category: 'Health & Wellness',
    views: '1.2k',
    author: 'Dr. Michael Wong',
    authorAvatar: 'MW',
    trending: true
  },
  {
    id: 4,
    title: 'Next.js 14 Performance Secrets',
    description: 'Advanced techniques for optimizing your Next.js applications to the maximum.',
    date: '2024-01-12',
    readTime: '12 min read',
    category: 'Technology',
    views: '3.1k',
    author: 'Emma Rodriguez',
    authorAvatar: 'ER'
  },
  {
    id: 5,
    title: 'Japanese Cherry Blossom Season',
    description: 'Best spots and times to experience Sakura season in Japan with photography tips.',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Travel & Tourism',
    views: '1.5k',
    author: 'Kenji Tanaka',
    authorAvatar: 'KT'
  },
  {
    id: 6,
    title: 'Sleep Science for Tech Workers',
    description: 'Optimizing your sleep schedule for maximum productivity and creativity.',
    date: '2024-01-08',
    readTime: '9 min read',
    category: 'Health & Wellness',
    views: '2.1k',
    author: 'Dr. Lisa Park',
    authorAvatar: 'LP',
    featured: true
  }
]

const stats = [
  { label: 'Total Articles', value: '136+', icon: BookOpenIcon },
  { label: 'Monthly Readers', value: '50K+', icon: UserGroupIcon },
  { label: 'Expert Authors', value: '24', icon: ChatBubbleLeftRightIcon },
  { label: 'Years Running', value: '5', icon: CalendarDaysIcon }
]

const popularTags = [
  'AI & Machine Learning',
  'Web Development',
  'Travel Tips',
  'Mental Health',
  'Productivity',
  'Startups',
  'Digital Nomad',
  'Fitness',
  'React',
  'Next.js'
]

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { theme } = useTheme()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % categories.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div 
        className="fixed inset-0 -z-10 opacity-10"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse-slow ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30'
            : 'bg-gradient-to-r from-blue-300 to-purple-300'
        }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow animation-delay-1000 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-emerald-900/30 to-teal-900/30'
            : 'bg-gradient-to-r from-emerald-300 to-teal-300'
        }`} />
        <div className={`absolute top-3/4 left-1/2 w-48 h-48 rounded-full blur-3xl animate-pulse-slow animation-delay-2000 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-rose-900/30 to-pink-900/30'
            : 'bg-gradient-to-r from-rose-300 to-pink-300'
        }`} />
      </div>

      {/* Hero Section */}
      <section className={`relative overflow-hidden pt-24 pb-32 sm:pt-32 sm:pb-40 ${
        theme === 'dark' ? 'bg-gray-900' : ''
      }`}>
        <Container>
          <div className="text-center relative z-10">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`inline-flex items-center gap-2 border rounded-full px-4 py-2 mb-8 animate-float ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-800/50'
                  : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100'
              }`}
            >
              <SparklesIcon className={`w-4 h-4 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
              }`} />
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
              }`}>
                Join 50K+ monthly readers
              </span>
            </motion.div>

            {/* Main heading with gradient */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight">
              <span className={`block ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Baashe
              </span>
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">
                Online
              </span>
            </h1>

            {/* Animated subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-xl sm:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Where <span className={`font-semibold ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>technology</span> meets{' '}
              <span className={`font-semibold ${
                theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
              }`}>adventure</span>,{' '}
              <span className={`font-semibold ${
                theme === 'dark' ? 'text-rose-400' : 'text-rose-600'
              }`}>wellness</span>, and{' '}
              <span className={`font-semibold ${
                theme === 'dark' ? 'text-violet-400' : 'text-violet-600'
              }`}>innovation</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link href="/blogs">
                <Button size="lg" className="group hover-lift glow-hover px-8 py-4">
                  <span className="flex items-center gap-2">
                    Explore Articles
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="secondary" className="hover-lift px-8 py-4">
                  Learn About Us
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className={`text-center p-4 rounded-2xl backdrop-blur-sm border hover-lift ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border-gray-700'
                      : 'bg-white/80 border-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <stat.icon className={`w-5 h-5 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <div className={`text-2xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {stat.value}
                    </div>
                  </div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>

        {/* Floating elements */}
        <div className={`absolute top-20 right-20 w-16 h-16 rounded-full blur-xl opacity-30 animate-float ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-blue-800/30 to-purple-800/30'
            : 'bg-gradient-to-r from-blue-400 to-purple-400'
        }`} />
        <div className={`absolute bottom-20 left-20 w-24 h-24 rounded-full blur-xl opacity-30 animate-float animation-delay-1000 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-emerald-800/30 to-teal-800/30'
            : 'bg-gradient-to-r from-emerald-400 to-teal-400'
        }`} />
      </section>

      {/* Categories Section */}
      <section className={`py-20 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-gray-900 to-gray-950'
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <Container>
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Explore Our Categories
            </h2>
            <p className={`max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Dive into diverse topics curated by experts and enthusiasts alike
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`relative group overflow-hidden rounded-2xl border p-6 hover-lift ${
                  theme === 'dark'
                    ? 'border-gray-700 bg-gray-800/50'
                    : 'border-gray-200 bg-white'
                } ${currentIndex === index ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}
              >
                {/* Category gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} p-3 mb-6 inline-flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.name}
                  </h3>
                  <p className={`mb-4 text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {category.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {category.articleCount} articles
                    </span>
                    <Link
                      href={`/blogs?category=${category.name.toLowerCase()}`}
                      className={`text-sm font-medium flex items-center gap-1 group ${
                        theme === 'dark'
                          ? 'text-blue-400 hover:text-blue-300'
                          : 'text-blue-600 hover:text-blue-700'
                      }`}
                    >
                      Browse
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Articles */}
      <section className={`py-20 ${
        theme === 'dark' ? 'bg-gray-900' : ''
      }`}>
        <Container>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className={`text-4xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Featured Articles
              </h2>
              <p className={`${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Handpicked insights from our expert contributors
              </p>
            </div>
            <Link href="/blogs">
              <Button variant="ghost" className="group">
                View All Articles
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredArticles.slice(0, 3).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={index === 0 ? 'lg:col-span-2' : ''}
              >
                <Card className={`h-full hover-lift overflow-hidden ${
                  theme === 'dark'
                    ? index === 0 ? 'border-blue-800/50' : 'border-gray-700'
                    : index === 0 ? 'border-blue-100' : ''
                }`}>
                  {article.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        <SparklesIcon className="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    {/* Article header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center ${
                        article.category === 'Technology' ? 'from-blue-500 to-purple-500' :
                        article.category === 'Travel & Tourism' ? 'from-emerald-500 to-teal-500' :
                        article.category === 'Health & Wellness' ? 'from-rose-500 to-pink-500' :
                        'from-violet-500 to-purple-500'
                      }`}>
                        <span className="text-white font-bold text-sm">{article.authorAvatar}</span>
                      </div>
                      <div>
                        <div className={`font-medium ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {article.author}
                        </div>
                        <div className={`flex items-center gap-4 text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          <time>{article.date}</time>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <ClockIcon className="w-4 h-4" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Article content */}
                    <h3 className={`text-2xl font-bold mb-4 leading-tight ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {article.title}
                    </h3>
                    <p className={`mb-6 leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {article.description}
                    </p>

                    {/* Article footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                        article.category === 'Technology' 
                          ? theme === 'dark' 
                            ? 'bg-blue-900/50 text-blue-300' 
                            : 'bg-blue-50 text-blue-700'
                          : article.category === 'Travel & Tourism'
                            ? theme === 'dark'
                              ? 'bg-emerald-900/50 text-emerald-300'
                              : 'bg-emerald-50 text-emerald-700'
                            : article.category === 'Health & Wellness'
                              ? theme === 'dark'
                                ? 'bg-rose-900/50 text-rose-300'
                                : 'bg-rose-50 text-rose-700'
                              : theme === 'dark'
                                ? 'bg-violet-900/50 text-violet-300'
                                : 'bg-violet-50 text-violet-700'
                      }`}>
                        {article.category}
                      </span>
                      <Link
                        href={`/blogs/${article.id}`}
                        className={`inline-flex items-center font-medium transition-colors group ${
                          theme === 'dark'
                            ? 'text-blue-400 hover:text-blue-300'
                            : 'text-blue-600 hover:text-blue-700'
                        }`}
                      >
                        Read Full Article
                        <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* More articles grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {featuredArticles.slice(3).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Card className="h-full hover-lift">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        article.category === 'Technology'
                          ? theme === 'dark'
                            ? 'bg-blue-900/50 text-blue-300'
                            : 'bg-blue-50 text-blue-700'
                          : theme === 'dark'
                            ? 'bg-gray-800 text-gray-300'
                            : 'bg-gray-50 text-gray-700'
                      }`}>
                        {article.category}
                      </span>
                      {article.trending && (
                        <span className="inline-flex items-center gap-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-semibold px-2 py-1 rounded">
                          <RocketLaunchIcon className="w-3 h-3" />
                          Trending
                        </span>
                      )}
                    </div>
                    
                    <h4 className={`text-lg font-semibold mb-3 line-clamp-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {article.title}
                    </h4>
                    <p className={`text-sm mb-4 line-clamp-2 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {article.description}
                    </p>
                    
                    <div className={`flex items-center justify-between text-sm ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      <span>{article.readTime}</span>
                      <span>{article.views} views</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Popular Tags */}
      <section className={`py-20 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900 to-gray-950'
          : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
        <Container>
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Popular Topics
            </h2>
            <p className={`max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Explore trending topics loved by our community
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {popularTags.map((tag, index) => (
              <motion.button
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 border rounded-full transition-all duration-200 hover-lift ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600'
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                }`}
              >
                #{tag}
              </motion.button>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className={`absolute inset-0 opacity-5 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30'
            : 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'
        }`} />
        <Container>
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`inline-flex items-center gap-2 backdrop-blur-sm border rounded-full px-4 py-2 mb-8 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700'
                  : 'bg-white/80 border-gray-200'
              }`}
            >
              <RocketLaunchIcon className={`w-5 h-5 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
              }`} />
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Ready to level up your knowledge?
              </span>
            </motion.div>

            <h2 className={`text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Join Our Community of{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">
                Curious Minds
              </span>
            </h2>
            
            <p className={`text-xl mb-10 max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Get weekly insights, exclusive content, and connect with like-minded individuals
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blogs">
                <Button size="lg" className="group hover-lift glow-hover px-8 py-4">
                  <span className="flex items-center gap-2">
                    Start Reading Now
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="hover-lift px-8 py-4">
                  Write for Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}