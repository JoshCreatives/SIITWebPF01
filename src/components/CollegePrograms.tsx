import { useState } from 'react';
import { BookOpen, Clock, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const CollegePrograms = () => {
  const [isOpen, setIsOpen] = useState(true); // State for controlling the modal

  const programs = [
    {
      title: "BS in Information Technology",
      description: "Develop expertise in software development, networking, and IT infrastructure management.",
      duration: "4 Years",
      careers: [
        "Software Developer",
        "Network Administrator",
        "Systems Analyst",
        "IT Project Manager",
        "Database Administrator"
      ],
      features: [
        "Industry-aligned curriculum",
        "Hands-on programming labs",
        "Cisco Networking Academy",
        "Microsoft Technology Associate certifications",
        "Industry internship program"
      ]
    },
    {
      title: "BS in Computer Science",
      description: "Master theoretical foundations and practical applications of computing and software engineering.",
      duration: "4 Years",
      careers: [
        "Software Engineer",
        "AI/ML Engineer",
        "Data Scientist",
        "Research Developer",
        "Solutions Architect"
      ],
      features: [
        "Advanced algorithms and data structures",
        "AI and machine learning specialization",
        "Research methodology",
        "Cloud computing technologies",
        "Capstone innovation project"
      ]
    },
    {
      title: "BS in Business Administration",
      description: "Develop comprehensive business management and leadership skills for the modern economy.",
      duration: "4 Years",
      careers: [
        "Business Manager",
        "Marketing Executive",
        "Financial Analyst",
        "HR Manager",
        "Entrepreneur"
      ],
      features: [
        "Business analytics",
        "Strategic management",
        "Financial planning",
        "Marketing strategies",
        "Leadership development"
      ]
    },
    {
      title: "BS in Hospitality Management",
      description: "Excel in the hospitality industry with comprehensive training in service excellence.",
      duration: "4 Years",
      careers: [
        "Hotel Manager",
        "Restaurant Owner",
        "Event Coordinator",
        "Tourism Officer",
        "Cruise Director"
      ],
      features: [
        "Industry internships",
        "Culinary arts training",
        "Hotel operations",
        "Event management",
        "Customer service excellence"
      ]
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
            Welcome to SIIT College Programs!
          </Dialog.Title>
          <p className="mt-3 text-gray-700">
            Explore our industry-aligned programs and start your journey today.
          </p>
          <button
            className="mt-4 bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Got it!
          </button>
        </Dialog.Panel>
      </Dialog>

      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img src="/p16.jpg" alt="Requirements" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">College Programs</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Shape your future with our industry-aligned degree programs
            </p>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
              whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
              transition={{ duration: 0.6, delay: index * 0.2 }} // Delay each program's animation
              viewport={{ once: true }} // Only animate once
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-green-400 mb-4">{program.title}</h2>
                <p className="text-gray-300 mb-6">{program.description}</p>
                
                <div className="flex items-center text-gray-300 mb-6">
                  <Clock className="h-5 w-5 mr-2 text-green-400" />
                  <span>Duration: {program.duration}</span>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center text-green-400">
                    <Award className="h-5 w-5 mr-2 text-green-400" />
                    Career Opportunities
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {program.careers.map((career, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center text-green-400">
                    <BookOpen className="h-5 w-5 mr-2 text-green-400" />
                    Program Features
                  </h3>
                  <ul className="grid grid-cols-1 gap-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href="/admissions/apply"
                    className="inline-flex items-center text-green-400 hover:text-green-500 font-semibold"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.6 }} // Animation duration
          viewport={{ once: true }} // Only animate once
          className="mt-16 bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-green-400">Why Choose SIIT College Programs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-green-400">Expert Faculty</h3>
              <p className="text-gray-300">Learn from industry professionals and academic experts</p>
            </div>
            <div className="text-center">
              <div className="bg-green-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-green-400">Modern Curriculum</h3>
              <p className="text-gray-300">Updated regularly to meet industry demands</p>
            </div>
            <div className="text-center">
              <div className="bg-green-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-green-400">Industry Partners</h3>
              <p className="text-gray-300">Strong connections with leading companies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CollegePrograms;