"use client";
import { Clock, Award, Star, BookOpen, Users, Building2, ArrowUp } from 'lucide-react';
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { useState, useEffect } from 'react';

const History = () => {
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

  const milestones = [
    {
      year: "1995",
      title: "Foundation",
      description: "It was in the summer of 1995 when the idea of putting up a school for the welfare of poor but deserving students in Siargao and Bucas Grande Islands, Surigao del Norte came about. It was a brainchild of then Department of Education, Culture and Sports (DECS) – Caraga Regional Director Dr. Sol Matugas.",
      image: "/p39.jpg"
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Two thousand five was yet another turning point in the history of the institute when the construction of the new Don Mariano Matugas building was completed. The availability of more classrooms, new equipment, laboratory and other facilities, including an Internet facility, encouraged more students to study at SIIT, which resulted in an increase of enrolment from 500 to almost 700 during the first semester of academic year 2005-2006.",
      image: "/p41.jpg"
    },
    {
      year: "2015",
      title: "Digital Innovation",
      description: "Pioneered modern IT education programs and digital learning platforms.",
      image: "/p43.jpg"
    },
    {
      year: "2025",
      title: "Regional Recognition",
      description: "February 2025, SIIT ranked first among the Regional Top Performing Schools in the Criminologists Licensure Examination under Category V. Additionally, SIIT is listed as a private Higher Education Institution in the Caraga region by the Commission on Higher Education (CHED). The institution's vision emphasizes becoming a leading academic establishment that fosters global competence and high moral values within Siargao Island.",
      image: "/p44.jpg"
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence in Education",
      description: "Multiple awards for academic excellence and innovation"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Alumni Success",
      description: "Over 1,000 successful graduates worldwide"
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Campus Building",
      description: "2 Buildings in one Location"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Industry Recognition",
      description: "Partnerships with leading Regional companies"
    }
  ];

  const founders = [
    {
      name: "Atty. Franciso T. Matugas",
      role: "Founding President",
      image: "/p31.jpg",
      contribution: "Atty. Lalo Matugas helped develop SIIT, notably securing Smart TV donations from the alumni association."
    },
    {
      name: "Sol Forcadilla Matugas, PhD.",
      role: "Founder",
      image: "/p32.jpg",
      contribution: "Dr. Sol Forcadilla Matugas notably contributed to SIIT by establishing the Siargao Farmland and Farm Tourism Center."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Welcome Popup Modal - Now with white background */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
          <Dialog.Title className="text-xl font-bold text-gray-800">
            Welcome to SIIT History
          </Dialog.Title>
          <p className="mt-3 text-gray-600">
            Explore our journey of educational excellence and innovation.
          </p>
          <button
            className="mt-4 bg-green-600 px-4 py-2 rounded-lg text-white hover:bg-green-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Begin Journey
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

      {/* Rest of your component remains the same with dark theme */}
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[500px]"
      >
        <img
          src="/p40.jpg"
          alt="SIIT History"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/75 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  Our Journey of Excellence
                </span>
              </h1>
              <p className="text-xl text-gray-200">
                Since 1983, SIIT has been at the forefront of technical education in the Philippines, 
                shaping generations of industry leaders and innovators.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-green-400"
        >
          Key Milestones
        </motion.h2>
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative h-64 rounded-lg overflow-hidden border border-gray-700">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-green-600 text-white px-4 py-2 rounded-full text-lg font-bold">
                      {milestone.year}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-white">{milestone.title}</h3>
                <p className="text-gray-300 text-lg">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Founders Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-green-400"
          >
            Our Founders
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-700 rounded-lg overflow-hidden shadow-lg border border-gray-600"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{founder.name}</h3>
                    <div className="text-green-400 font-semibold mb-4">{founder.role}</div>
                    <p className="text-gray-300">{founder.contribution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-green-400"
          >
            Notable Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-green-800 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
                <p className="text-green-200">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Legacy Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="bg-green-900 p-4 rounded-full w-16 h-16 flex items-center justify-center text-green-400 mb-6">
                <BookOpen className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Our Continuing Legacy</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
              Siargao Island Institute of Technology (SIIT) continues to uphold its legacy of academic excellence and community service by providing quality education tailored to the needs of Siargao and neighboring islands. Founded with a vision to empower local youth, SIIT has grown into a respected institution known for its commitment to accessible education, regional achievements, and innovative programs like the Siargao Farmland and Farm Tourism Center. Under the leadership of dedicated individuals like Dr. Sol Forcadilla Matugas and Atty. Lalo Matugas, the institution remains steadfast in nurturing globally competent graduates while staying rooted in its mission to serve and uplift the local community.
              </p>
              <div className="flex items-center text-green-400">
                <Clock className="h-5 w-5 mr-2" />
                <span>29 Years of Educational Excellence</span>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/p42.jpg"
                alt="SIIT Legacy"
                className="rounded-lg shadow-md border border-gray-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default History;