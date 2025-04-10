  import { useState } from "react";
  import { motion } from "framer-motion";
  import { Dialog } from "@headlessui/react";
  import { Mail, Phone, Award, BookOpen, Users, Star, Building2, GraduationCap} from 'lucide-react';

  const Administration = () => {
    const [isOpen, setIsOpen] = useState(true); // State for Welcome Modal

    const executiveTeam = [
      {
        image: "/p32.jpg",
        name: "Sol Forcadilla Matugas, PhD",
        role: "Founder, Chair Emeritus",
      },
      {
        image: "/p31.jpg",
        name: "Atty. Francisco T. Matugas",
        role: "President",
      },
      {
        image: "/p18.jpg",
        name: "Dr. Tampus",
        role: "Vice President",
      },
      {
        image: "/p45.jpg", 
        name: "Andresito Solloso", 
        role: "Vice President",
      }
    ];

    const deans = [
      {
        image: "/p68.jpg", 
        name: "Junry Valenzuela, MIT",
        role: "Dean, College of Information Technology",
        education: "Siargao Island Institute of Technology",
        expertise: "Artificial Intelligence and Robotics"
      },
      {
        image: "/p48.jpg",  
        name: "Juvi Buo, MBA", 
        role: "Dean, Tourism Management",
        education: "Siargao Island Institute of Technology",
        expertise: "Strategic Management and Innovation"
      },
      {
        image: "/p49.jpg", 
        name: "Chivas G. Dulguime, RC, MSCJ", 
        role: "Dean, College of Criminal Justice",
        education: "Siargao Island Institute of Technology", 
        expertise: "Comparative Literature and Cultural Studies"
      },
      {
        image: "/p50.jpg",  
        name: "Dr. Nelia S. Lomosco",  
        role: "Dean, College of Education", 
        education: "Siargao Island Institute of Technology", 
        expertise: "Education Policy and Strategic Frameworks" 
      },
      {
        image: "/p47.png", 
        name: "Carol Sajol Villamor",   
        role: "Dean, College of Office Administration",  
        education: "Siargao Island Institute of Technology", 
        expertise: "Education Policy and Strategic Frameworks" 
      }
    ];

    const stats = [
      {
        icon: <Users className="h-6 w-6" />,
        count: "70+",
        label: "Faculty Members"
      },
      {
        icon: <GraduationCap className="h-6 w-6" />,
        count: "5,000+",
        label: "Students"
      },
      {
        icon: <Award className="h-6 w-6" />,
        count: "4",
        label: "Academic Programs"
      },
      {
        icon: <Building2 className="h-6 w-6" />,
        count: "1",
        label: "Campus Location"
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
          <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
            <Dialog.Title className="text-xl font-bold text-green-600">
              Welcome to SIIT Administration!
            </Dialog.Title>
            <p className="mt-3 text-gray-700">
              Meet the leaders shaping the future of education at SIIT.
            </p>
            <button
              className="mt-4 bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Got it!
            </button>
          </Dialog.Panel>
        </Dialog>

        {/* Hero Section (No Animation) */}
        <div className="relative h-[400px]">
        <img src="/Hero.jpg" alt="Admin" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full text-white">
              <h1 className="text-5xl font-bold mb-4 text-green-400">Administration</h1>
              <p className="text-xl max-w-2xl">
                Meet the dedicated leaders shaping the future of education at SIIT
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-gray-800 border-b border-gray-700"
        >
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-green-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-200 mb-1">{stat.count}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Executive Team Section - Mobile Scrollable, Desktop Centered */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-7xl mx-auto px-4 py-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Executive Leadership</h2>
          
          {/* Mobile scrollable container */}
          <div className="md:hidden relative pb-4">
            <div className="flex overflow-x-auto gap-6 pb-4 px-1">
              {executiveTeam.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-[260px] flex-shrink-0"
                >
                  <div className="h-64 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-200">{member.name}</h3>
                    <div className="text-green-400 font-semibold mb-2">{member.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop centered container */}
          <div className="hidden md:flex justify-center gap-6">
            {executiveTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.5 }}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-72"
              >
                <div className="h-64 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-200">{member.name}</h3>
                  <div className="text-green-400 font-semibold mb-2">{member.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        
        {/* Academic Deans Section with Scroll Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-gray-800 py-16"
        >
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 text-green-400"
            >
              Academic Deans
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {deans.map((dean, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="bg-gray-700 rounded-lg shadow-md overflow-hidden"
                >
                  {/* Square image container (1:1 aspect ratio) */}
                  <div className="relative pb-[100%]">
                    <img
                      src={dean.image}
                      alt={dean.name}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-200">{dean.name}</h3>
                    <div className="text-green-400 font-semibold mb-2">{dean.role}</div>
                    <div className="flex items-center text-gray-400 mb-2">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      {dean.education}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Star className="h-4 w-4 mr-2" />
                      {dean.expertise}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission and Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-7xl mx-auto px-4 py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="bg-green-900 p-3 rounded-full w-12 h-12 flex items-center justify-center text-green-400 mb-6">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-200">Our Mission</h3>
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
            <div className="bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="bg-green-900 p-3 rounded-full w-12 h-12 flex items-center justify-center text-green-400 mb-6">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-200">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
              A leading academic institution trailblazing global competence and high 
              moral values in Siargao Island. 
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section (No Animation) */}
        <div className="bg-green-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Contact the Administration</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-2" />
                <span>admin@siit.edu</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-2" />
                <span>+63 2 8812 1784</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Administration;