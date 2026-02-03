'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/app/context/ThemeContext'
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  BookOpenIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline'

const categories = [
  { name: 'Technology', href: '/blogs?category=technology' },
  { name: 'Travel & Tourism', href: '/blogs?category=travel' },
  { name: 'Health & Wellness', href: '/blogs?category=health' },
  { name: 'Lifestyle', href: '/blogs?category=lifestyle' },
]

const navItems = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/blogs', label: 'Articles', icon: BookOpenIcon },
  { href: '/about', label: 'About', icon: UserCircleIcon },
  { href: '/contact', label: 'Contact', icon: ChatBubbleLeftRightIcon },
]

function HomeIcon(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )
}

function ChatBubbleLeftRightIcon(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  )
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()
  const router = useRouter()
  const searchRef = useRef<HTMLInputElement>(null)
  
  // Use the theme context
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus()
    }
  }, [isSearchOpen])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/blogs?search=${encodeURIComponent(searchQuery)}`)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsSearchOpen(false)
      setIsCategoriesOpen(false)
    }
  }

  // Animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
      }
    }
  }

  const searchVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      }
    }
  }

  // Helper function to get theme-based classes
  const getThemeClasses = (baseClasses: string, isDark?: boolean) => {
    const currentTheme = isDark !== undefined ? isDark : theme === 'dark'
    return currentTheme 
      ? baseClasses.replace(/\s?dark:[^\s]+/g, '').trim() + ' ' + baseClasses.match(/dark:[^\s]+/g)?.join(' ') || ''
      : baseClasses.replace(/\s?dark:[^\s]+/g, '').trim()
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? theme === 'dark'
              ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-black/5'
              : 'bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5'
            : theme === 'dark'
              ? 'bg-gray-900'
              : 'bg-white'
        }`}
        onKeyDown={handleKeyDown}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
              >
                <BookOpenIcon className="w-6 h-6 text-white" />
              </motion.div>
              <div className="flex flex-col">
                <span className={`text-2xl font-bold transition-colors group-hover:text-blue-600 ${
                  theme === 'dark' 
                    ? 'text-white group-hover:text-blue-400' 
                    : 'text-gray-900'
                }`}>
                  Baashe<span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">Online</span>
                </span>
                <span className={`text-xs font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Knowledge • Innovation • Community
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    pathname === item.href
                      ? theme === 'dark'
                        ? 'text-blue-400 bg-blue-900/30'
                        : 'text-blue-600 bg-blue-50'
                      : theme === 'dark'
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-4 h-4 inline-block mr-2" />
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}

              {/* Categories Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isCategoriesOpen
                      ? theme === 'dark'
                        ? 'text-blue-400 bg-blue-900/30'
                        : 'text-blue-600 bg-blue-50'
                      : theme === 'dark'
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  Categories
                  <motion.div
                    animate={{ rotate: isCategoriesOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isCategoriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full left-0 mt-2 w-64 rounded-xl shadow-2xl border overflow-hidden ${
                        theme === 'dark'
                          ? 'bg-gray-800 border-gray-700'
                          : 'bg-white border-gray-200'
                      }`}
                      onMouseLeave={() => setIsCategoriesOpen(false)}
                    >
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className={`block px-4 py-3 text-sm transition-colors border-b last:border-b-0 ${
                            theme === 'dark'
                              ? 'text-gray-300 hover:bg-gray-700/50 hover:text-blue-400 border-gray-700'
                              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-gray-100'
                          }`}
                          onClick={() => setIsCategoriesOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 lg:gap-4">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-800'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                }`}
                aria-label="Search"
              >
                <MagnifyingGlassIcon className="w-5 h-5" />
              </motion.button>

              {/* Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-800'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </motion.button>

              {/* Newsletter CTA */}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden lg:inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-800'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                }`}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className={`lg:hidden overflow-hidden border-t ${
                theme === 'dark'
                  ? 'bg-gray-900 border-gray-800'
                  : 'bg-white border-gray-200'
              }`}
            >
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        pathname === item.href
                          ? theme === 'dark'
                            ? 'text-blue-400 bg-blue-900/30'
                            : 'text-blue-600 bg-blue-50'
                          : theme === 'dark'
                            ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  ))}
                  
                  {/* Mobile Categories */}
                  <div className="px-4 py-3">
                    <div className={`text-sm font-semibold mb-2 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      CATEGORIES
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                            theme === 'dark'
                              ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className={`mt-6 pt-6 border-t ${
                  theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
                }`}>
                  <Link href="/contact">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Subscribe to Newsletter
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
              onClick={() => setIsSearchOpen(false)}
            />
            <motion.div
              variants={searchVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className={`fixed top-0 left-0 right-0 z-[70] shadow-2xl ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <div className="container mx-auto px-4 py-6">
                <form onSubmit={handleSearch} className="relative">
                  <div className="relative">
                    <MagnifyingGlassIcon className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                    }`} />
                    <input
                      ref={searchRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search articles, topics, or authors..."
                      className={`w-full pl-12 pr-24 py-4 text-lg rounded-xl focus:outline-none focus:ring-2 border ${
                        theme === 'dark'
                          ? 'bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500 focus:ring-blue-400'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-blue-500'
                      }`}
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsSearchOpen(false)}
                        className={`px-3 py-1 text-sm ${
                          theme === 'dark'
                            ? 'text-gray-400 hover:text-gray-200'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        ESC
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                  
                  {/* Quick Search Suggestions */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      Try:
                    </span>
                    {['AI', 'Travel Tips', 'React', 'Meditation', 'Next.js'].map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => {
                          setSearchQuery(term)
                          searchRef.current?.focus()
                        }}
                        className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                          theme === 'dark'
                            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}