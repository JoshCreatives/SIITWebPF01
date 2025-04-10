"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import {
  BookOpen,
  GraduationCap,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const AdmissionRequirements = () => {
  const [isOpen, setIsOpen] = useState(true);

  const requirements = [
    {
      program: "Senior High School",
      items: [
        "Form 137 / Report Card from previous school",
        "Certificate of Good Moral Character",
        "PSA Birth Certificate",
        "2x2 ID Pictures (4 pieces)",
        "Certificate of Completion/Junior High School Diploma",
      ],
    },
    {
      program: "College (First Year)",
      items: [
        "Form 137 / Report Card from Senior High School",
        "Certificate of Good Moral Character",
        "PSA Birth Certificate",
        "2x2 ID Pictures (4 pieces)",
        "Senior High School Diploma",
        "SIIT Entrance Exam Results",
      ],
    },
    {
      program: "College (Transferee)",
      items: [
        "Transcript of Records (TOR)",
        "Certificate of Good Moral Character",
        "PSA Birth Certificate",
        "2x2 ID Pictures (4 pieces)",
        "Honorable Dismissal",
        "Course Description",
      ],
    },
  ];

  const admissionSteps = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Submit Requirements",
      description: "Prepare and submit all necessary documents",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Entrance Examination",
      description: "Take and pass the SIIT entrance exam",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Interview",
      description: "Undergo interview with program coordinator",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Enrollment",
      description: "Complete enrollment and payment process",
    },
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
            Welcome to SIIT Admissions!
          </Dialog.Title>
          <p className="mt-3 text-gray-700">
            Ensure you have all the necessary documents before proceeding.
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
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[400px]"
      >
        <img src="/Hero1.jpg" alt="Requirements" className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4 text-green-400">
              Admission Requirements
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Start your journey at SIIT by ensuring you meet our admission
              requirements.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Admission Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-green-400 mb-8 text-center">
            Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-green-900 p-3 rounded-full text-green-400 mr-4">
                    {step.icon}
                  </div>
                  <span className="text-green-400 font-semibold">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Requirements by Program Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-green-400 mb-8 text-center">
            Requirements by Program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((program, index) => (
              <motion.div
                key={program.program}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-green-900 p-3 rounded-full text-green-400 mr-4">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{program.program}</h3>
                </div>
                <ul className="space-y-3">
                  {program.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Notice Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-green-900 border-l-4 border-green-400 p-6 rounded-r-lg">
            <div className="flex">
              <AlertCircle className="h-6 w-6 text-green-400 mr-3" />
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">
                  Important Notice
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>All documents must be submitted in their original form.</li>
                  <li>Incomplete requirements may delay your application.</li>
                  <li>Ensure all documents are valid and up-to-date.</li>
                  <li>Contact the admissions office for further assistance.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdmissionRequirements;