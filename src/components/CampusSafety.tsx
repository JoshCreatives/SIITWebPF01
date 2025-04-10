"use client";
import { Shield, Bell, Phone, ChevronFirst as FirstAid, Camera, Users, Lock, AlertTriangle, ArrowUp } from 'lucide-react';
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { useState, useEffect } from 'react';

const CampusSafety = () => {
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

  const safetyMeasures = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: "24/7 Surveillance",
      description: "Advanced CCTV system covering all campus areas"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Security Personnel",
      description: "Trained security staff on duty round the clock"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Access Control",
      description: "Electronic access system for buildings and facilities"
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Emergency Response",
      description: "Quick response protocols for various emergencies"
    }
  ];

  const emergencyContacts = [
    {
      title: "Campus Security",
      number: "0984767372",
      available: "24/7"
    },
    {
      title: "Medical Services",
      number: "09488757632",
      available: "7:00 AM - 9:00 PM"
    },
    {
      title: "Fire Emergency",
      number: "09984772548",
      available: "24/7"
    },
    {
      title: "Student Affairs",
      number: "093656283756",
      available: "8:00 AM - 5:00 PM"
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
            Welcome to Campus Safety
          </Dialog.Title>
          <p className="mt-3 text-gray-600">
            Learn about our comprehensive safety measures and emergency protocols.
          </p>
          <button
            className="mt-4 bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Got it!
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
          src="/p57.jpg"
          alt="Campus Safety"
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
              Campus Safety
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl max-w-2xl"
            >
              Your security is our priority. Learn about our comprehensive safety measures 
              and emergency protocols.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Safety Measures */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Safety Measures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {safetyMeasures.map((measure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
            >
              <div className="bg-green-900 p-3 rounded-full w-12 h-12 flex items-center justify-center text-green-400 mb-4">
                {measure.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{measure.title}</h3>
              <p className="text-gray-400">{measure.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Emergency Response */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="bg-green-900/30 py-16 border-t border-b border-green-800"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <AlertTriangle className="h-12 w-12 mr-4 text-green-400" />
            <h2 className="text-3xl font-bold text-white">Emergency Contacts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-green-800/30 backdrop-blur-sm rounded-lg p-6 border border-green-700"
              >
                <h3 className="text-xl font-bold mb-2 text-white">{contact.title}</h3>
                <div className="flex items-center mb-2">
                  <Phone className="h-5 w-5 mr-2 text-green-400" />
                  <span className="text-lg text-white">{contact.number}</span>
                </div>
                <p className="text-sm text-green-300">Available: {contact.available}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Safety Guidelines */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-green-400">Safety Guidelines</h2>
            <div className="space-y-6">
              {[
                {
                  title: "ID Policy",
                  description: "Always wear your ID while on campus premises"
                },
                {
                  title: "Visitor Registration",
                  description: "All visitors must register at the security desk"
                },
                {
                  title: "After-Hours Access",
                  description: "Special permits required for after-hours facility access"
                },
                {
                  title: "Emergency Evacuation",
                  description: "Familiarize yourself with evacuation routes and assembly points"
                }
              ].map((guideline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <Shield className="h-6 w-6 text-green-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-1 text-white">{guideline.title}</h3>
                    <p className="text-gray-400">{guideline.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8 text-green-400">Health & Safety</h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <FirstAid className="h-8 w-8 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-white">Medical Services</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "On-site clinic with licensed medical professionals",
                  "First aid stations in every building",
                  "Mental health counseling services",
                  "Regular health and safety workshops",
                  "COVID-19 protocols and screening"
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start text-gray-400"
                  >
                    <Shield className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <span>{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Emergency Alert System */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="bg-gray-800 py-16 border-t border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-700 rounded-lg shadow-xl overflow-hidden border border-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-green-400">Emergency Alert System</h2>
                <p className="text-gray-400 mb-8">
                  Stay informed about campus emergencies through our multi-channel alert system. 
                  Receive instant notifications via:
                </p>
                <ul className="space-y-4">
                  {[
                    "SMS alerts",
                    "Email notifications",
                    "Campus PA system",
                    "Digital signage",
                    "SIIT mobile app alerts"
                  ].map((alert, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-300"
                    >
                      <Bell className="h-5 w-5 text-green-500 mr-3" />
                      <span>{alert}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src="/p55.jpg"
                  alt="Emergency Alert System"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 "></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CampusSafety;