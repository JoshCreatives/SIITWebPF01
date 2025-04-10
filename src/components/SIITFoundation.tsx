import { Heart, Users, Target, HandHeart, GraduationCap, BookOpen, DollarSign, ArrowUp } from 'lucide-react';
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { useState, useEffect } from 'react';

const SIITFoundation = () => {
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

  const initiatives = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Scholarship Programs",
      description: "Supporting deserving students through comprehensive scholarship packages"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Educational Resources",
      description: "Providing learning materials and technology access to underserved communities"
    },
    {
      icon: <HandHeart className="h-6 w-6" />,
      title: "Community Outreach",
      description: "Engaging in social responsibility projects and community development"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Research Grants",
      description: "Funding innovative research projects and academic initiatives"
    }
  ];

  const achievements = [
    {
      count: "1000+",
      label: "Scholarship Recipients",
      description: "Students supported through our scholarship programs"
    },
    {
      count: "₱50M+",
      label: "Annual Funding",
      description: "Dedicated to educational and community initiatives"
    },
    {
      count: "100+",
      label: "Partner Organizations",
      description: "Collaborating for greater social impact"
    },
    {
      count: "50+",
      label: "Community Projects",
      description: "Active community development initiatives"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Welcome Popup Modal (White Background) */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
          <Dialog.Title className="text-xl font-bold text-green-600">
            Welcome to SIIT Foundation
          </Dialog.Title>
          <p className="mt-3 text-gray-600">
            Discover how we're transforming lives through education and community development.
          </p>
          <button
            className="mt-4 bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Continue
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
          className="fixed bottom-8 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}

      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="/p53.jpg"
          alt="SIIT Foundation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full text-white">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-4"
            >
              SIIT Foundation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-2xl"
            >
              Empowering futures through education, innovation, and community development
            </motion.p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-800 p-8 rounded-lg shadow-md border border-gray-700">
            <div className="bg-green-900 p-3 rounded-full w-12 h-12 flex items-center justify-center text-green-400 mb-6">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
            To achieve this vision, SIIT commits itself to: 
            <br></br>
            - Render excellent educational service to contribute to the socio-economic 
            growth of Siargao Island; 
            <br></br>
            - Develop innovations in education to produce well-rounded, highly 
            competitive and transformative individuals; and 
            <br></br>
            - Uphold SIIT core values in all its undertakings in technology and social 
            change. 
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-md border border-gray-700">
            <div className="bg-green-900 p-3 rounded-full w-12 h-12 flex items-center justify-center text-green-400 mb-6">
              <Heart className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed">
            A leading academic institution trailblazing global competence and high 
            moral values in Siargao Island. 
            </p>
          </div>
        </div>
      </motion.div>

      {/* Key Initiatives */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="bg-gray-800 py-16 border-t border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Key Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700 p-6 rounded-lg border border-gray-600"
              >
                <div className="bg-green-900 p-3 rounded-full w-12 h-12 flex items-center justify-center text-green-400 mb-4">
                  {initiative.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{initiative.title}</h3>
                <p className="text-gray-400">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Impact Numbers */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="bg-green-900/30 py-16 border-t border-b border-green-800"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2 text-white">{achievement.count}</div>
                <div className="text-xl font-semibold mb-2 text-green-400">{achievement.label}</div>
                <p className="text-green-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Support Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Support Our Cause</h2>
              <p className="text-gray-400 mb-8">
                Join us in our mission to transform lives through education. Your support 
                enables us to provide scholarships, fund research, and implement community 
                development programs.
              </p>
              <div className="space-y-4">
                <a
                  href="#donate"
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
                >
                  <DollarSign className="h-5 w-5 mr-2" />
                  Make a Donation
                </a>
                <a
                  href="#volunteer"
                  className="inline-flex items-center bg-gray-700 text-green-400 px-6 py-3 rounded-md border border-green-600 hover:bg-gray-600 transition-colors ml-4"
                >
                  <Users className="h-5 w-5 mr-2" />
                  Volunteer With Us
                </a>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <img
                src="/p52.jpg"
                alt="Support SIIT Foundation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-green-900/20"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SIITFoundation;