import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, ChevronRight, Send } from 'lucide-react'

export default function LandingPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className={`min-h-screen font-sans ${isDarkMode ? 'dark' : ''}`}>
      <header className="sticky top-0 z-50 bg-white dark:bg-black text-black dark:text-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-yellow-400">Logo</a>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#features" className="hover:text-yellow-400 transition-colors">Features</a>
            <a href="#download" className="hover:text-yellow-400 transition-colors">Download</a>
            <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button onClick={toggleMenu} className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-black"
            >
              <a href="#home" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800">Home</a>
              <a href="#features" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800">Features</a>
              <a href="#download" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800">Download</a>
              <a href="#about" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-800">About</a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="bg-white dark:bg-black text-black dark:text-white">
        <HeroSection />
        <FeaturesSection />
        <DownloadSection />
        <AboutSection />
      </main>

      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <section id="home" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover Our Amazing App
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience the future of mobile applications with our innovative features and sleek design.
          </motion.p>
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#download" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold flex items-center hover:bg-yellow-500 transition-colors">
              <span className="mr-2">Download Now</span>
              <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#features" className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors">Learn More</a>
          </motion.div>
        </div>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img src="/placeholder.svg" alt="App Screenshot" className="rounded-lg shadow-xl" />
        </motion.div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    { title: "Easy to Use", description: "Intuitive interface for seamless navigation", image: "/placeholder.svg" },
    { title: "Powerful Features", description: "Advanced tools to boost your productivity", image: "/placeholder.svg" },
    { title: "Secure & Private", description: "Your data is protected with top-notch security", image: "/placeholder.svg" },
    { title: "24/7 Support", description: "Our team is always here to help you", image: "/placeholder.svg" }
  ]

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-400">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={feature.image} alt={feature.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-yellow-400 text-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Download Our App</h2>
        <p className="text-xl mb-12">Available for Android and iOS devices</p>
        <div className="flex justify-center space-x-6">
          <motion.a 
            href="#" 
            className="bg-black text-white px-8 py-3 rounded-full font-semibold flex items-center hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">Android</span>
            <svg className="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M17.523 15.34l.003-.006a1.167 1.167 0 0 1 1.564-.53l.025.013 2.835 1.606a1.165 1.165 0 0 1 .486 1.554l-.009.019a1.168 1.168 0 0 1-1.564.53l-.025-.013-2.834-1.606a1.165 1.165 0 0 1-.481-1.567zm-9.523-8.867l.691-1.431a.583.583 0 0 1 1.043.505l-.691 1.431a.583.583 0 0 1-1.043-.505zm8.034 0a.583.583 0 0 1-1.043.505l-.691-1.431a.583.583 0 0 1 1.043-.505l.691 1.431zm-8.393 2.239h8.76c.86 0 1.56.697 1.56 1.556v6.982c0 .858-.7 1.556-1.56 1.556H7.641c-.86 0-1.56-.698-1.56-1.556V9.268c0-.859.7-1.556 1.56-1.556zm4.38-4.906a.39.39 0 0 1 .391.389v1.167a.39.39 0 0 1-.391.389.39.39 0 0 1-.391-.389V4.195a.39.39 0 0 1 .39-.389zM12 21h-.002a1.166 1.166 0 0 1-1.166-1.164v-3.087a1.166 1.166 0 1 1 2.332 0v3.087A1.166 1.166 0 0 1 12 21z"/></svg>
          </motion.a>
          <motion.a 
            href="#" 
            className="bg-black text-white px-8 py-3 rounded-full font-semibold flex items-center hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">iOS</span>
            <svg className="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-400">About Us</h2>
        <motion.p 
          className="text-xl text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          We are passionate about creating innovative mobile solutions that enhance people's lives. Our team of experts is dedicated to delivering top-notch apps with cutting-edge technology and user-friendly designs.
        </motion.p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Company Name</h3>
            <p>Innovating the future, one app at a time.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-yellow-400 transition-colors">Features</a></li>
              <li><a href="#download" className="hover:text-yellow-400 transition-colors">Download</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">About</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 Company Name. All rights reserved.</p>
        </div>
      </div>
      <a href="https://t.me/yourcompany" className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>
      </a>
    </footer>
  )
}