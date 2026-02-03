'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/context/ThemeContext'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [activeTab, setActiveTab] = useState<'contact' | 'support' | 'collaborate'>('contact')
  
  const { theme } = useTheme()

  const contactOptions = [
    {
      id: 'contact',
      label: 'General Inquiry',
      description: 'Questions, feedback, or general messages',
      icon: ChatBubbleLeftRightIcon
    },
    {
      id: 'support',
      label: 'Technical Support',
      description: 'Help with website issues or technical problems',
      icon: BuildingOfficeIcon
    },
    {
      id: 'collaborate',
      label: 'Collaboration',
      description: 'Guest posts, partnerships, or sponsorship',
      icon: UserCircleIcon
    }
  ]

  const contactInfo = [
    {
      title: 'Email Address',
      content: 'hello@baasheonline.com',
      description: 'For general inquiries and questions',
      icon: EnvelopeIcon,
      action: 'mailto:hello@baasheonline.com',
      color: 'blue'
    },
    {
      title: 'Office Phone',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM PST',
      icon: PhoneIcon,
      action: 'tel:+15551234567',
      color: 'green'
    },
    {
      title: 'Our Location',
      content: 'San Francisco, CA',
      description: 'United States',
      icon: MapPinIcon,
      action: 'https://maps.google.com',
      color: 'purple'
    },
    {
      title: 'Response Time',
      content: 'Within 24 hours',
      description: 'For all email inquiries',
      icon: ClockIcon,
      action: null,
      color: 'amber'
    }
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters'
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters'
    }

    return newErrors
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log('Form submitted:', { ...formData, type: activeTab })
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({})
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setSubmitSuccess(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setErrors({})
  }

  return (
    <div className={`min-h-screen py-20 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                theme === 'dark'
                  ? 'bg-blue-900/30 border border-blue-800/50'
                  : 'bg-blue-50 border border-blue-100'
              }`}>
                <ChatBubbleLeftRightIcon className={`w-6 h-6 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`} />
              </div>
              <span className={`text-sm font-semibold ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                CONTACT US
              </span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Start a{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">
                Conversation
              </span>
            </h1>
            
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Whether you have questions, want to collaborate, or just want to say hello, 
              we're here to help and excited to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-1">
              <div className={`rounded-2xl p-8 sticky top-24 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border border-gray-700'
                  : 'bg-white border border-gray-200'
              }`}>
                <h2 className={`text-2xl font-bold mb-8 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  How Can We Help?
                </h2>

                {/* Contact Type Tabs */}
                <div className="space-y-3 mb-10">
                  {contactOptions.map((option) => {
                    const Icon = option.icon
                    return (
                      <button
                        key={option.id}
                        onClick={() => setActiveTab(option.id as any)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                          activeTab === option.id
                            ? theme === 'dark'
                              ? 'bg-blue-900/30 border border-blue-800/50'
                              : 'bg-blue-50 border border-blue-100'
                            : theme === 'dark'
                              ? 'bg-gray-800/30 border border-gray-700 hover:bg-gray-700/50'
                              : 'bg-gray-50 border border-gray-100 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            activeTab === option.id
                              ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                              : theme === 'dark'
                                ? 'bg-gray-700'
                                : 'bg-gray-100'
                          }`}>
                            <Icon className={`w-5 h-5 ${
                              activeTab === option.id
                                ? 'text-white'
                                : theme === 'dark'
                                  ? 'text-gray-400'
                                  : 'text-gray-600'
                            }`} />
                          </div>
                          <span className={`font-semibold ${
                            activeTab === option.id
                              ? theme === 'dark'
                                ? 'text-white'
                                : 'text-gray-900'
                              : theme === 'dark'
                                ? 'text-gray-300'
                                : 'text-gray-700'
                          }`}>
                            {option.label}
                          </span>
                        </div>
                        <p className={`text-sm ml-13 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {option.description}
                        </p>
                      </button>
                    )
                  })}
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  {contactInfo.map((info) => {
                    const Icon = info.icon
                    const colorClasses = {
                      blue: theme === 'dark' ? 'text-blue-400' : 'text-blue-600',
                      green: theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600',
                      purple: theme === 'dark' ? 'text-purple-400' : 'text-purple-600',
                      amber: theme === 'dark' ? 'text-amber-400' : 'text-amber-600',
                    }

                    return (
                      <div key={info.title} className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          theme === 'dark'
                            ? 'bg-gray-700/50'
                            : 'bg-gray-100'
                        }`}>
                          <Icon className={`w-6 h-6 ${colorClasses[info.color as keyof typeof colorClasses]}`} />
                        </div>
                        <div>
                          <h3 className={`font-semibold mb-1 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            {info.title}
                          </h3>
                          {info.action ? (
                            <a
                              href={info.action}
                              className={`block mb-1 hover:underline ${
                                theme === 'dark'
                                  ? 'text-blue-400 hover:text-blue-300'
                                  : 'text-blue-600 hover:text-blue-700'
                              }`}
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className={`mb-1 ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {info.content}
                            </p>
                          )}
                          <p className={`text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {info.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Social Links */}
                <div className={`mt-10 pt-10 border-t ${
                  theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <h3 className={`text-lg font-semibold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Connect With Us
                  </h3>
                  <div className="flex gap-3">
                    {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                          theme === 'dark'
                            ? 'bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                        }`}
                        aria-label={`Follow on ${social}`}
                      >
                        <GlobeAltIcon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`rounded-2xl p-8 hover-lift transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-800/50 border border-gray-700'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 ${
                        theme === 'dark'
                          ? 'bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-800/50'
                          : 'bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200'
                      }`}
                    >
                      <CheckCircleIcon className="w-10 h-10 text-green-500" />
                    </motion.div>
                    
                    <h3 className={`text-3xl font-bold mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Message Sent Successfully!
                    </h3>
                    
                    <p className={`text-lg mb-8 max-w-md mx-auto ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        onClick={resetForm}
                        className="hover-lift"
                      >
                        <span className="flex items-center gap-2">
                          <PaperAirplaneIcon className="w-5 h-5" />
                          Send Another Message
                        </span>
                      </Button>
                      <Link href="/blogs">
                        <Button variant="secondary" className="hover-lift">
                          Browse Articles
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-10">
                      <div>
                        <h2 className={`text-2xl font-bold mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          Send us a Message
                        </h2>
                        <p className={`${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                      </div>
                      <div className={`px-4 py-2 rounded-lg ${
                        theme === 'dark'
                          ? 'bg-blue-900/30 text-blue-300'
                          : 'bg-blue-50 text-blue-700'
                      }`}>
                        <span className="text-sm font-medium">
                          {contactOptions.find(o => o.id === activeTab)?.label}
                        </span>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className={`block text-sm font-medium mb-3 ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                          >
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                              errors.name
                                ? 'border-red-300 focus:ring-red-500'
                                : theme === 'dark'
                                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-transparent'
                                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-500 focus:border-transparent'
                            } border`}
                            placeholder="John Doe"
                          />
                          {errors.name && (
                            <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className={`block text-sm font-medium mb-3 ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                              errors.email
                                ? 'border-red-300 focus:ring-red-500'
                                : theme === 'dark'
                                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-transparent'
                                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-500 focus:border-transparent'
                            } border`}
                            placeholder="john@example.com"
                          />
                          {errors.email && (
                            <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className={`block text-sm font-medium mb-3 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                            errors.subject
                              ? 'border-red-300 focus:ring-red-500'
                              : theme === 'dark'
                                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-transparent'
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-500 focus:border-transparent'
                          } border`}
                          placeholder="What is this regarding?"
                        />
                        {errors.subject && (
                          <p className="mt-2 text-sm text-red-500">{errors.subject}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className={`block text-sm font-medium mb-3 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={8}
                          className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                            errors.message
                              ? 'border-red-300 focus:ring-red-500'
                              : theme === 'dark'
                                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-transparent'
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-500 focus:border-transparent'
                          } border resize-none`}
                          placeholder="Tell us what's on your mind..."
                        />
                        {errors.message && (
                          <p className="mt-2 text-sm text-red-500">{errors.message}</p>
                        )}
                        <div className={`text-sm mt-2 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {formData.message.length}/1000 characters
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          * Required fields
                        </div>
                        <Button
                          type="submit"
                          size="lg"
                          className="hover-lift group min-w-[180px]"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <span className="flex items-center gap-2">
                              Send Message
                              <PaperAirplaneIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                          )}
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`mt-8 rounded-2xl p-8 ${
                  theme === 'dark'
                    ? 'bg-gray-800/30 border border-gray-700'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className={`text-xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Frequently Asked Questions
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      question: 'How long does it take to get a response?',
                      answer: 'We typically respond within 24 hours during business days. For urgent matters, please use the phone number above.'
                    },
                    {
                      question: 'Do you accept guest posts or collaborations?',
                      answer: 'Yes! We love collaborating with other writers and experts. Please select "Collaboration" above and include details about your proposal.'
                    },
                    {
                      question: 'Can I advertise on your website?',
                      answer: 'We offer limited advertising opportunities. Please contact us with details about your brand and campaign goals.'
                    },
                    {
                      question: 'How can I report a technical issue?',
                      answer: 'For technical issues, please select "Technical Support" above and provide as many details as possible about the problem.'
                    }
                  ].map((faq, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className={`font-semibold ${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {faq.question}
                      </h4>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}