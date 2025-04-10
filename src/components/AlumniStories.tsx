"use client";
import { Award, Briefcase, MapPin, Quote, ChevronRight, Search, ArrowUp } from 'lucide-react';
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { useState, useEffect } from 'react';

const AlumniStories = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show scroll button when user scrolls down
  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  const featuredAlumni = [
    {
      name: "Jhunrey Obligado",
      batch: "2015",
      role: "CEO",
      company: "TechVision Solutions",
      image: "/p38.jpg",
      quote: "SIIT gave me the foundation I needed to succeed in the tech industry. The practical skills and industry connections I gained were invaluable.",
      achievements: [
        "FullStack Dev at 30",
        "Tech Innovation Award 2022",
        "Man in Tech Leader"
      ]
    },
    {
      name: "Nessie Navarro",
      batch: "2012",
      role: "Chief Innovation Officer",
      company: "Global Systems Inc.",
      image: "/p37.jpg",
      quote: "The entrepreneurial spirit fostered at SIIT inspired me to push boundaries and innovate in the global tech space.",
      achievements: [
        "Patent Holder",
        "Industry Leadership Award",
        "Tech Innovator of the Year"
      ]
    }
  ];

  const successStories = [
    {
      name: "Relvin",
      batch: "2018",
      role: "Software Engineer",
      company: "Techlab Unite",
      image: "/p35.jpg",
      location: "Siargao Island"
    },
    {
      name: "Rowel Casa",
      batch: "2019",
      role: "OSAS HEAD",
      company: "Microsoft",
      image: "/p67.jpg",
      location: "SiarGao Island"
    },
    {
      name: "Junry Valenzuela",
      batch: "2017",
      role: "Innovation Expert",
      company: "Techlab Unite",
      image: "/p68.jpg",
      location: "Siargao Island"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Welcome Popup Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <Dialog.Panel className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm border border-green-500">
          <Dialog.Title className="text-xl font-bold text-green-400">
            Welcome to SIIT Alumni Stories!
          </Dialog.Title>
          <p className="mt-3 text-gray-300">
            Discover inspiring stories from our successful graduates.
          </p>
          <button
            className="mt-4 bg-green-600 px-4 py-2 rounded-lg text-white hover:bg-green-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Explore Stories
          </button>
        </Dialog.Panel>
      </Dialog>

      {/* Scroll to Top Button */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors z-40"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[500px]"
      >
        <img
          src="/p58.jpg"
          alt="Alumni Stories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/75 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-white mb-6">Alumni Success Stories</h1>
              <p className="text-xl text-gray-200 mb-8">
                Discover how our graduates are making their mark across the globe and 
                shaping the future of technology and innovation.
              </p>
              <div className="relative">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search alumni stories..."
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-800/70 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Featured Alumni */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-green-400"
        >
          Featured Alumni
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredAlumni.map((alumni, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">
                      Class of {alumni.batch}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">{alumni.name}</h3>
                  <div className="flex items-center text-gray-300 mb-4">
                    <Briefcase className="h-5 w-5 mr-2 text-green-400" />
                    <span>{alumni.role} at {alumni.company}</span>
                  </div>
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-green-500 mb-2" />
                    <p className="text-gray-300 italic">{alumni.quote}</p>
                  </div>
                  <div className="space-y-2">
                    {alumni.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center">
                        <Award className="h-5 w-5 text-yellow-400 mr-2" />
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-green-400"
          >
            Global Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-700 rounded-lg overflow-hidden group shadow-md hover:shadow-lg transition-shadow border border-gray-600"
              >
                <div className="relative h-64">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">
                      Class of {story.batch}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{story.name}</h3>
                  <div className="flex items-center text-gray-300 mb-2">
                    <Briefcase className="h-5 w-5 mr-2 text-green-400" />
                    <span>{story.role} at {story.company}</span>
                  </div>
                  <div className="flex items-center text-gray-300 mb-4">
                    <MapPin className="h-5 w-5 mr-2 text-green-400" />
                    <span>{story.location}</span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center text-green-400 hover:text-green-300 font-medium"
                  >
                    Read Full Story
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Share Your Story */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-green-900 rounded-lg shadow-xl text-white p-8 text-center border border-green-700"
        >
          <h2 className="text-3xl font-bold mb-4 text-green-400">Share Your Success Story</h2>
          <p className="text-lg text-green-200 mb-8 max-w-2xl mx-auto">
            Inspire the next generation of SIIT students by sharing your journey and achievements. 
            Your story could be featured on our platform!
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
            Submit Your Story
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AlumniStories;