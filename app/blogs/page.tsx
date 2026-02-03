import Container from '../components/ui/Container'
import Card from '../components/ui/Card'

const blogs = [
  {
    id: 1,
    title: 'Mastering TypeScript Generics',
    description: 'A comprehensive guide to understanding and implementing generics in TypeScript for scalable applications.',
    date: '2024-01-20',
    category: 'TypeScript',
    readTime: '7 min read',
  },
  {
    id: 2,
    title: 'React Server Components Deep Dive',
    description: 'Understanding the new paradigm of server components in React and their impact on performance.',
    date: '2024-01-18',
    category: 'React',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'CSS Grid vs Flexbox',
    description: 'When to use Grid and when to use Flexbox - a practical comparison with real-world examples.',
    date: '2024-01-15',
    category: 'CSS',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Building APIs with Next.js 14',
    description: 'Step-by-step guide to creating robust APIs using Next.js 14 App Router and server actions.',
    date: '2024-01-12',
    category: 'Next.js',
    readTime: '9 min read',
  },
  {
    id: 5,
    title: 'State Management in 2024',
    description: 'Comparing modern state management solutions for React applications.',
    date: '2024-01-10',
    category: 'React',
    readTime: '10 min read',
  },
  {
    id: 6,
    title: 'Web Performance Optimization',
    description: 'Advanced techniques for optimizing web application performance and Core Web Vitals.',
    date: '2024-01-08',
    category: 'Performance',
    readTime: '8 min read',
  },
]

export default function BlogsPage() {
  return (
    <div className="min-h-screen py-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tech Articles & Insights
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of articles covering the latest in web development, 
            software engineering, and technology trends.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full hover-lift transition-all duration-300">
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
                      {blog.category}
                    </span>
                    <time className="text-sm text-gray-500">{blog.date}</time>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{blog.readTime}</span>
                    <a
                      href={`/Blogs/${blog.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Read more
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover-lift transition-all duration-300">
            Load More Articles
          </button>
        </div>
      </Container>
    </div>
  )
}