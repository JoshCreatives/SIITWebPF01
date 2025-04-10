import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Award,
  Trophy,
  Users,
  FileText,
  CheckCircle2,
  Calendar,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const FinancialAid = () => {
  const [isOpen, setIsOpen] = useState(true); // State for the welcome modal

  const scholarships = [
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Academic Excellence Scholarship",
      coverage: "100% Tuition Fee",
      requirements: [
        "Maintain a GPA of 1.50 or higher",
        "No grade lower than 2.00",
        "Graduate from high school with honors",
        "Pass the scholarship qualifying exam",
      ],
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Socio-Economic Scholarship",
      coverage: "50-100% Tuition Fee",
      requirements: [
        "Family income below threshold",
        "Maintain a GPA of 2.00 or higher",
        "Active participation in community service",
        "Complete financial assessment",
      ],
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Sports Excellence Scholarship",
      coverage: "75% Tuition Fee",
      requirements: [
        "Represent SIIT in competitions",
        "Maintain a GPA of 2.25 or higher",
        "Proven track record in sports",
        "Pass physical and skills assessment",
      ],
    },
  ];

  const grants = [
    {
      title: "Early Bird Grant",
      discount: "10% off on tuition fee",
      description: "For early enrollment and full payment",
    },
    {
      title: "Sibling Grant",
      discount: "15% off for the younger sibling",
      description: "For families with multiple children enrolled",
    },
    {
      title: "Alumni Grant",
      discount: "20% off on tuition fee",
      description: "For children of SIIT alumni",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-12">
      {/* Welcome Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-4">
          <h2 className="text-xl font-bold text-green-600 mb-4">
            Welcome to SIIT Financial Aid!
          </h2>
          <p className="text-gray-700 mb-4">
            Explore scholarships, grants, and financial aid programs to support your education.
          </p>
          <button
            className="bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition"
            onClick={() => setIsOpen(false)} // Close the modal
          >
            Got it!
          </button>
        </Dialog.Panel>
      </Dialog>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.6 }} // Animation duration
          viewport={{ once: true }} // Only animate once
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-green-400 mb-4">
            Financial Assistance Program
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            SIIT is committed to making quality education accessible through various scholarships, grants, and financial aid programs.
          </p>
        </motion.div>

        {/* Scholarships Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.6 }} // Animation duration
          viewport={{ once: true }} // Only animate once
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-green-400 mb-8">
            Available Scholarships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <motion.div
                key={scholarship.title}
                initial={{ opacity: 0, y: 30 }} // Initial state (hidden and slightly below)
                whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
                transition={{ duration: 0.6, delay: index * 0.2 }} // Delay each scholarship's animation
                viewport={{ once: true }} // Only animate once
                className="bg-gray-800 rounded-lg shadow-md p-8"
              >
                <div className="text-green-400 mb-4">{scholarship.icon}</div>
                <h3 className="text-xl font-bold text-green-400 mb-2">
                  {scholarship.title}
                </h3>
                <div className="bg-green-900 text-green-400 px-3 py-1 rounded-full inline-block text-sm font-medium mb-4">
                  {scholarship.coverage}
                </div>
                <h4 className="font-semibold text-green-400 mb-3">
                  Requirements:
                </h4>
                <ul className="space-y-3">
                  {scholarship.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Grants Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.6 }} // Animation duration
          viewport={{ once: true }} // Only animate once
          className="bg-gray-800 rounded-lg shadow-md p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-green-400 mb-8">
            Educational Grants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {grants.map((grant, index) => (
              <motion.div
                key={grant.title}
                initial={{ opacity: 0, y: 30 }} // Initial state (hidden and slightly below)
                whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
                transition={{ duration: 0.6, delay: index * 0.2 }} // Delay each grant's animation
                viewport={{ once: true }} // Only animate once
                className="border border-gray-700 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-green-400 mb-2">
                  {grant.title}
                </h3>
                <div className="text-green-400 font-semibold mb-3">
                  {grant.discount}
                </div>
                <p className="text-gray-300">{grant.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.6 }} // Animation duration
          viewport={{ once: true }} // Only animate once
          className="bg-gray-800 rounded-lg shadow-md p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-green-400 mb-8">
            Application Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FileText className="h-6 w-6" />,
                title: "Submit Application",
                description:
                  "Complete the online application form and submit required documents",
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Interview",
                description:
                  "Attend the scholarship interview with the committee",
              },
              {
                icon: <Calendar className="h-6 w-6" />,
                title: "Assessment",
                description: "Financial and academic assessment review",
              },
              {
                icon: <CheckCircle2 className="h-6 w-6" />,
                title: "Approval",
                description: "Receive the decision and scholarship agreement",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }} // Initial state (hidden and slightly below)
                whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
                transition={{ duration: 0.6, delay: index * 0.2 }} // Delay each step's animation
                viewport={{ once: true }} // Only animate once
                className="text-center"
              >
                <div className="bg-green-900 p-4 rounded-full inline-block text-green-400 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Dates */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.6 }} // Animation duration
          viewport={{ once: true }} // Only animate once
          className="bg-gray-800 rounded-lg shadow-md p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-green-400 mb-6">
            Important Dates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                period: "First Semester",
                deadline: "April 30, 2024",
                note: "Early application is encouraged",
              },
              {
                period: "Second Semester",
                deadline: "October 30, 2024",
                note: "Limited slots available",
              },
              {
                period: "Summer Term",
                deadline: "February 28, 2024",
                note: "Special programs only",
              },
            ].map((date, index) => (
              <motion.div
                key={date.period}
                initial={{ opacity: 0, y: 30 }} // Initial state (hidden and slightly below)
                whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
                transition={{ duration: 0.6, delay: index * 0.2 }} // Delay each date's animation
                viewport={{ once: true }} // Only animate once
                className="border border-gray-700 rounded-lg p-6"
              >
                <h3 className="font-semibold text-lg text-green-400 mb-2">
                  {date.period}
                </h3>
                <p className="text-green-400 font-medium mb-2">
                  Deadline: {date.deadline}
                </p>
                <p className="text-gray-300 text-sm">{date.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.6 }} // Animation duration
          viewport={{ once: true }} // Only animate once
          className="bg-green-900 border-l-4 border-green-400 p-6 rounded-r-lg mb-16"
        >
          <div className="flex">
            <AlertCircle className="h-6 w-6 text-green-400 mr-3" />
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-2">
                Important Notice
              </h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>All scholarships are subject to availability and qualification</li>
                <li>Renewal of scholarships is based on maintaining required academic performance</li>
                <li>Submit all requirements before the deadline</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.6 }} // Animation duration
          viewport={{ once: true }} // Only animate once
          className="text-center"
        >
          <div className="inline-flex items-center text-green-400">
            <HelpCircle className="h-5 w-5 mr-2" />
            <span className="font-medium">
              For inquiries, contact our Scholarship Office at scholarships@siit.edu or visit our office during business hours
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FinancialAid;