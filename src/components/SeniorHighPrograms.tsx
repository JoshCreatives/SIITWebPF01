import { useState } from 'react';
import { BookOpen, Clock, Award, Users, CheckCircle2, ArrowRight, GraduationCap } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const SeniorHighPrograms = () => {
  const [isOpen, setIsOpen] = useState(true); // State for controlling the modal

  const tracks = [
    {
      title: "Academic Track",
      strands: [
        {
          name: "Science, Technology, Engineering, and Mathematics (STEM)",
          description: "Focus on advanced concepts in science, mathematics, and engineering.",
          subjects: [
            "Pre-Calculus",
            "Basic Calculus",
            "General Chemistry",
            "Physics",
            "Research in Daily Life"
          ],
          careers: [
            "Engineering",
            "Medicine",
            "Architecture",
            "Information Technology",
            "Research Science"
          ]
        },
        {
          name: "Accountancy, Business and Management (ABM)",
          description: "Develop foundational skills in business, accounting, and economics.",
          subjects: [
            "Business Mathematics",
            "Business Finance",
            "Fundamentals of Accountancy",
            "Organization and Management",
            "Marketing"
          ],
          careers: [
            "Accountancy",
            "Business Administration",
            "Economics",
            "Marketing",
            "Entrepreneurship"
          ]
        }
      ]
    },
    {
      title: "Technical-Vocational-Livelihood Track",
      strands: [
        {
          name: "Information and Communications Technology",
          description: "Master practical skills in computer systems and digital technologies.",
          subjects: [
            "Computer Programming",
            "Computer Systems Servicing",
            "Web Development",
            "Animation",
            "Digital Arts"
          ],
          careers: [
            "Web Developer",
            "IT Support Specialist",
            "Digital Artist",
            "Network Technician",
            "Software Developer"
          ]
        },
        {
          name: "Home Economics",
          description: "Develop skills in hospitality management and culinary arts.",
          subjects: [
            "Culinary Arts",
            "Food and Beverage Services",
            "Tourism Operations",
            "Bread and Pastry Production",
            "Front Office Services"
          ],
          careers: [
            "Chef",
            "Hotel Staff",
            "Restaurant Manager",
            "Events Coordinator",
            "Tourism Officer"
          ]
        }
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
            Welcome to SIIT Senior High Programs!
          </Dialog.Title>
          <p className="mt-3 text-gray-700">
            Explore our specialized tracks and prepare for your future.
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
        <img src="/p21.jpg" alt="Requirements" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">Senior High School</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Prepare for college and career success with our specialized academic tracks
            </p>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {tracks.map((track, trackIndex) => (
          <motion.div
            key={trackIndex}
            initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
            transition={{ duration: 0.6, delay: trackIndex * 0.2 }} // Delay each track's animation
            viewport={{ once: true }} // Only animate once
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-green-400">{track.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {track.strands.map((strand, strandIndex) => (
                <motion.div
                  key={strandIndex}
                  initial={{ opacity: 0, y: 30 }} // Initial state (hidden and slightly below)
                  whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
                  transition={{ duration: 0.6, delay: strandIndex * 0.2 }} // Delay each strand's animation
                  viewport={{ once: true }} // Only animate once
                  className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-green-400 mb-4">{strand.name}</h3>
                    <p className="text-gray-300 mb-6">{strand.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-3 flex items-center text-green-400">
                        <BookOpen className="h-5 w-5 mr-2 text-green-400" />
                        Core Subjects
                      </h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {strand.subjects.map((subject, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-3 flex items-center text-green-400">
                        <GraduationCap className="h-5 w-5 mr-2 text-green-400" />
                        Career Opportunities
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {strand.careers.map((career, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                            {career}
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
          </motion.div>
        ))}

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.6 }} // Animation duration
          viewport={{ once: true }} // Only animate once
          className="mt-16 bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-green-400">Why Choose SIIT Senior High?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-green-400">Experienced Teachers</h3>
              <p className="text-gray-300">Learn from dedicated educators with industry experience</p>
            </div>
            <div className="text-center">
              <div className="bg-green-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-green-400">Flexible Schedule</h3>
              <p className="text-gray-300">Choose from morning or afternoon sessions</p>
            </div>
            <div className="text-center">
              <div className="bg-green-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-green-400">College Preparation</h3>
              <p className="text-gray-300">Comprehensive guidance for tertiary education</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SeniorHighPrograms;