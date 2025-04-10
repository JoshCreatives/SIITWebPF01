"use client";
import { Award, BookOpen, GraduationCap, Briefcase, Calendar, MapPin, ArrowUp } from 'lucide-react';
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { useState, useEffect } from 'react';

const PresidentProfile = () => {
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

  const achievements = [
    {
      year: "2020",
      title: "Appointed as SIIT President",
      description: "Led institutional transformation and modernization initiatives"
    },
    {
      year: "2015",
      title: "Harvard Law School Distinguished Alumni Award",
      description: "Recognized for contributions to education law and policy"
    },
    {
      year: "2010",
      title: "Philippine Bar Top Notcher",
      description: "Ranked among the top performers in the Philippine Bar Examinations"
    }
  ];

  const initiatives = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Curriculum Innovation",
      description: "Spearheaded the modernization of academic programs to meet industry demands"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Student Success",
      description: "Implemented comprehensive student support and career development programs"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Industry Partnerships",
      description: "Established strategic partnerships with leading companies and organizations"
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
          <Dialog.Title className="text-xl font-bold text-gray-800">
            Welcome to President's Profile
          </Dialog.Title>
          <p className="mt-3 text-gray-600">
            Learn about our President's vision and leadership at SIIT.
          </p>
          <button
            className="mt-4 bg-green-600 px-4 py-2 rounded-lg text-white hover:bg-green-700 transition"
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
          className="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors z-40"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}

      {/* Split Header Section - Horizontal Layout */}
      <div className="relative flex flex-col md:flex-row">
        {/* Image Section - Left Side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full md:w-1/2 h-[400px] md:h-[500px]"
        >
          <img
            src="/p51.jpg"
            alt="Atty. Francisco Matugas"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* White Background Section for Name - Right Side */}
        <div className="w-full md:w-1/2 bg-white text-gray-900 py-12 px-4 md:px-8 lg:px-16 flex items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Atty. Francisco 'Lalo' Matugas
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-2">President, SIIT</p>
              <p className="text-lg text-gray-600 max-w-2xl">
                Leading SIIT's vision of academic excellence and innovation since 2020
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
            >
              <h2 className="text-xl font-bold mb-4 text-white">Education</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold text-white">J.D., Harvard Law School</p>
                    <p className="text-gray-400">Class of 1995</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold text-white">B.A. Political Science</p>
                    <p className="text-gray-400">University of the Philippines</p>
                    <p className="text-gray-400">Magna Cum Laude, 1991</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
            >
              <h2 className="text-xl font-bold mb-4 text-white">Previous Positions</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Briefcase className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold text-white">Dean, College of Law</p>
                    <p className="text-gray-400">University of San Carlos</p>
                    <p className="text-gray-400">2015-2020</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Briefcase className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold text-white">Senior Partner</p>
                    <p className="text-gray-400">Matugas & Associates Law Firm</p>
                    <p className="text-gray-400">2000-2015</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Center Column - Main Content */}
          <div className="md:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-lg shadow-md border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Vision for SIIT</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Under my leadership, SIIT is committed to becoming a leading institution 
                in technical education, fostering innovation, and preparing students for 
                the challenges of the modern workforce. We focus on three key pillars: 
                academic excellence, industry relevance, and student success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {initiatives.map((initiative, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-green-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-green-400">
                      {initiative.icon}
                    </div>
                    <h3 className="font-semibold mb-2 text-white">{initiative.title}</h3>
                    <p className="text-gray-400 text-sm">{initiative.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-lg shadow-md border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Key Achievements</h2>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="bg-green-900 p-2 rounded-full text-green-400 mr-4">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-gray-500">{achievement.year}</span>
                      </div>
                      <h3 className="font-semibold mb-1 text-white">{achievement.title}</h3>
                      <p className="text-gray-400">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-green-900/30 p-8 rounded-lg shadow-md border border-green-800"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Connect with the President</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-green-400 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold text-white">Office Location</p>
                    <p className="text-gray-400">President's Office, 5th Floor</p>
                    <p className="text-gray-400">SIIT Main Building</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300">
                    For appointments and inquiries, please contact the Office of the President 
                    through your respective department heads or the Executive Secretary.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresidentProfile;