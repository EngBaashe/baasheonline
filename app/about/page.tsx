'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/app/context/ThemeContext'
import Container from '../components/ui/Container'
import {
  RocketLaunchIcon,
  AcademicCapIcon,
  LightBulbIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  SparklesIcon,
  BookOpenIcon,
  HeartIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export default function AboutPage() {
  const { theme } = useTheme()

  const values = [
    {
      title: 'Learning',
      description: 'Continuous learning is at the heart of everything we do. We believe in sharing knowledge that helps others grow.',
      icon: AcademicCapIcon,
      color: 'blue'
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and methodologies, always looking for better ways to solve problems.',
      icon: LightBulbIcon,
      color: 'amber'
    },
    {
      title: 'Community',
      description: 'Building a supportive community where tech enthusiasts can connect, collaborate, and grow together.',
      icon: UserGroupIcon,
      color: 'purple'
    },
    {
      title: 'Excellence',
      description: 'Striving for excellence in every piece of content, tool, and service we provide to our community.',
      icon: SparklesIcon,
      color: 'pink'
    },
    {
      title: 'Transparency',
      description: 'Being open, honest, and transparent in our processes, decisions, and communications.',
      icon: ShieldCheckIcon,
      color: 'green'
    },
    {
      title: 'Impact',
      description: 'Creating meaningful impact through technology that improves lives and drives positive change.',
      icon: HeartIcon,
      color: 'red'
    }
  ]

  const milestones = [
    { year: '2020', title: 'Founded', description: 'Started as a small tech blog sharing web development tips' },
    { year: '2021', title: 'Community Growth', description: 'Reached 10,000 monthly readers and launched our forum' },
    { year: '2022', title: 'Platform Launch', description: 'Launched the complete BaasheOnline platform with multiple categories' },
    { year: '2023', title: 'Global Reach', description: 'Expanded to international audience with multilingual content' },
    { year: '2024', title: 'Innovation Lab', description: 'Launched our innovation lab for experimental tech content' }
  ]

  const team = [
    { name: 'Sarah Chen', role: 'Lead Developer', expertise: 'AI & Machine Learning', avatar: '👩‍💻' },
    { name: 'Marcus Johnson', role: 'Content Director', expertise: 'Web Development', avatar: '👨‍💼' },
    { name: 'Elena Rodriguez', role: 'Community Manager', expertise: 'DevOps & Cloud', avatar: '👩‍🎨' },
    { name: 'David Kim', role: 'Tech Writer', expertise: 'Cybersecurity', avatar: '👨‍🔬' }
  ]

  return (
    <div className={`min-h-screen py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                theme === 'dark'
                  ? 'bg-blue-900/30 border border-blue-800/50'
                  : 'bg-blue-50 border border-blue-100'
              }`}>
                <RocketLaunchIcon className={`w-7 h-7 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <span className={`text-sm font-semibold uppercase tracking-wider ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                Our Story
              </span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              About{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">
                BaasheOnline
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Empowering developers and tech enthusiasts worldwide through cutting-edge content, 
              innovative tools, and a vibrant community.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`rounded-2xl p-8 md:p-10 hover-lift ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30'
                  : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4 ${
                  theme === 'dark' ? 'bg-blue-900/40' : 'bg-white'
                }`}>
                  <RocketLaunchIcon className={`w-8 h-8 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <div>
                  <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Our Mission
                  </h2>
                  <p className={`text-sm ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`}>
                    What drives us forward
                  </p>
                </div>
              </div>
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                To democratize technology education and empower developers of all levels with accessible, 
                high-quality resources. We're committed to breaking down complex tech concepts and making 
                cutting-edge knowledge available to everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`rounded-2xl p-8 md:p-10 hover-lift ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-800/30'
                  : 'bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4 ${
                  theme === 'dark' ? 'bg-purple-900/40' : 'bg-white'
                }`}>
                  <GlobeAltIcon className={`w-8 h-8 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
                </div>
                <div>
                  <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Our Vision
                  </h2>
                  <p className={`text-sm ${theme === 'dark' ? 'text-purple-300' : 'text-purple-600'}`}>
                    Where we're heading
                  </p>
                </div>
              </div>
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                To become the world's most comprehensive and trusted platform for technology learning 
                and innovation, where millions of developers come together to learn, share, and build 
                the future of technology.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Our Core Values
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                const colorClasses = {
                  blue: theme === 'dark' ? 'text-blue-400' : 'text-blue-600',
                  amber: theme === 'dark' ? 'text-amber-400' : 'text-amber-600',
                  purple: theme === 'dark' ? 'text-purple-400' : 'text-purple-600',
                  pink: theme === 'dark' ? 'text-pink-400' : 'text-pink-600',
                  green: theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600',
                  red: theme === 'dark' ? 'text-red-400' : 'text-red-600',
                }

                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`rounded-xl p-6 hover-lift ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border border-gray-700'
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                      theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-8 h-8 ${colorClasses[value.color as keyof typeof colorClasses]}`} />
                    </div>
                    <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {value.title}
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {value.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`rounded-2xl p-8 md:p-12 mb-20 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700'
                : 'bg-gradient-to-br from-gray-50 to-white border border-gray-200'
            }`}
          >
            <div className="flex items-center mb-10">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <BookOpenIcon className={`w-8 h-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
              </div>
              <div>
                <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Our Journey
                </h2>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  From humble beginnings to tech community leader
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Founded in 2020 with a passion for technology and education, BaasheOnline started as a small blog 
                sharing web development tips. What began as a personal project to document learning quickly evolved 
                into a mission to make technology education accessible to all.
              </p>
              
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Today, we've grown into a comprehensive platform covering everything from artificial intelligence 
                and machine learning to web development best practices and emerging technologies. Our content 
                reaches millions of developers worldwide, and our community continues to grow every day.
              </p>
              
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                We believe that technology should be accessible to everyone. Whether you're a seasoned developer 
                or just starting your tech journey, we're here to provide valuable insights and resources to 
                help you succeed in the ever-evolving digital landscape.
              </p>
            </div>

            {/* Milestones */}
            <div className={`mt-12 pt-12 border-t ${
              theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <h3 className={`text-2xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Milestones
              </h3>
              <div className="relative">
                <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
                  theme === 'dark' ? 'bg-gradient-to-b from-blue-500/50 to-purple-500/50' : 'bg-gradient-to-b from-blue-200 to-purple-200'
                }`} />
                <div className="space-y-10">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className="relative flex items-start gap-8">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 z-10 ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-800/50'
                          : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100'
                      }`}>
                        <span className={`text-xl font-bold ${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {milestone.year}
                        </span>
                      </div>
                      <div>
                        <h4 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {milestone.title}
                        </h4>
                        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Meet the Team */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Meet Our Team
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Passionate individuals dedicated to advancing technology education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className={`rounded-xl p-6 text-center hover-lift ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border border-gray-700'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    {member.avatar}
                  </div>
                  <h3 className={`text-xl font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {member.name}
                  </h3>
                  <p className={`font-medium mb-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    {member.role}
                  </p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {member.expertise}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className={`rounded-2xl p-8 md:p-12 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30'
                : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100'
            }`}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Monthly Readers', value: '500K+', icon: '👥' },
                { label: 'Articles Published', value: '2K+', icon: '📝' },
                { label: 'Countries Reached', value: '150+', icon: '🌍' },
                { label: 'Community Members', value: '50K+', icon: '💬' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 ${
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-white'
                  }`}>
                    {stat.icon}
                  </div>
                  <div className={`text-4xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.value}
                  </div>
                  <p className={`font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-20"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Join Our Growing Community
            </h2>
            <p className={`text-lg mb-8 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Be part of the conversation and help shape the future of technology education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/blogs"
                className={`px-8 py-4 rounded-xl font-semibold transition-all hover-lift ${
                  theme === 'dark'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                }`}
              >
                Explore Articles
              </a>
              <a
                href="/contact"
                className={`px-8 py-4 rounded-xl font-semibold transition-all hover-lift ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700'
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}