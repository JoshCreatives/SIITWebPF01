import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  GraduationCap,
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  FileText,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

const OnlineApplication = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true); // State for the welcome modal
  const [isValidationError, setIsValidationError] = useState(false); // State for the validation error modal
  const [isSubmissionSuccess, setIsSubmissionSuccess] = useState(false); // State for the submission success modal
  const [formData, setFormData] = useState({
    program: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthdate: '',
    address: '',
  });

  const programs = [
    'Bachelor of Science in Information Technology',
    'Bachelor of Science in Computer Science',
    'Bachelor of Science in Business Administration',
    'Bachelor of Science in Accountancy',
    'Bachelor of Arts in Communication',
  ];

  const steps = [
    { number: 1, title: 'Program Selection' },
    { number: 2, title: 'Personal Information' },
    { number: 3, title: 'Review & Submit' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        if (!formData.program) {
          setIsValidationError(true); // Show validation error modal
          return false;
        }
        break;
      case 2:
        if (
          !formData.firstName ||
          !formData.lastName ||
          !formData.email ||
          !formData.phone ||
          !formData.birthdate ||
          !formData.address
        ) {
          setIsValidationError(true); // Show validation error modal
          return false;
        }
        break;
      default:
        return true;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      // Handle form submission here
      setIsSubmissionSuccess(true); // Show submission success modal
      console.log('Form Data:', formData); // Log form data for debugging
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-8 px-4">
      {/* Welcome Popup Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-4">
            <h2 className="text-xl font-bold text-green-600 mb-4">Welcome to SIIT Online Application!</h2>
            <p className="text-gray-700 mb-4">
              Ensure you have all the necessary documents before proceeding.
            </p>
            <button
              className="bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition"
              onClick={() => setIsOpen(false)} // Close the modal
            >
              Got it!
            </button>
          </div>
        </motion.div>
      )}

      {/* Validation Error Modal */}
      {isValidationError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-4">
            <div className="flex justify-center mb-4">
              <AlertCircle className="h-8 w-8 text-red-600" /> {/* Error icon */}
            </div>
            <h2 className="text-xl font-bold text-red-600 mb-4">Validation Error</h2>
            <p className="text-gray-700 mb-4">
              Please fill out all personal information fields before proceeding.
            </p>
            <button
              className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition"
              onClick={() => setIsValidationError(false)} // Close the modal
            >
              Close
            </button>
          </div>
        </motion.div>
      )}

      {/* Submission Success Modal */}
      {isSubmissionSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-4">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" /> {/* Success icon */}
            </div>
            <h2 className="text-xl font-bold text-green-600 mb-4">Submission Successful!</h2>
            <p className="text-gray-700 mb-4">
              Your application has been submitted successfully.
            </p>
            <button
              className="bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition"
              onClick={() => setIsSubmissionSuccess(false)} // Close the modal
            >
              Close
            </button>
          </div>
        </motion.div>
      )}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-green-400 mb-2">Online Application</h1>
        <p className="text-gray-400">
          Take the first step towards your future with SIIT
        </p>
      </motion.div>

      {/* Progress Steps */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="mb-8"
      >
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-x-4 md:space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="flex items-center"
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step.number ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-400'
                }`}
              >
                {currentStep > step.number ? (
                  <CheckCircle className="h-6 w-6" />
                ) : (
                  step.number
                )}
              </div>
              <span
                className={`ml-2 text-sm font-medium ${
                  currentStep >= step.number ? 'text-green-400' : 'text-gray-500'
                }`}
              >
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div
                  className={`hidden md:block w-12 h-1 mx-4 ${
                    currentStep > step.number ? 'bg-green-600' : 'bg-gray-700'
                  }`}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-800 rounded-lg shadow-md p-6"
      >
        <form onSubmit={handleSubmit}>
          {/* Step 1: Program Selection */}
          {currentStep === 1 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <label htmlFor="program" className="block text-sm font-medium text-gray-300 mb-2">
                  Select Your Preferred Program
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-gray-200 focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Choose a program</option>
                  {programs.map((program) => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Step 2: Personal Information */}
          {currentStep === 2 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-gray-200 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-gray-200 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-gray-200 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-gray-200 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="birthdate" className="block text-sm font-medium text-gray-300 mb-2">
                    Date of Birth
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      id="birthdate"
                      name="birthdate"
                      value={formData.birthdate}
                      onChange={handleInputChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-gray-200 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">
                    Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-gray-200 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-2 border border-gray-700 rounded-md bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Step 3: Review & Submit */}
          {currentStep === 3 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="space-y-6"
            >
              <motion.h3 variants={fadeInUp} className="text-lg font-medium text-green-400 mb-4">
                Review Your Application
              </motion.h3>
              <motion.div variants={fadeInUp} className="bg-gray-700 p-6 rounded-lg space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Selected Program</p>
                    <p className="font-medium text-gray-200">{formData.program}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Full Name</p>
                    <p className="font-medium text-gray-200">{`${formData.firstName} ${formData.lastName}`}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Address</p>
                    <p className="font-medium text-gray-200">{formData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone Number</p>
                    <p className="font-medium text-gray-200">{formData.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Date of Birth</p>
                    <p className="font-medium text-gray-200">{formData.birthdate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="font-medium text-gray-200">{formData.address}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-2 border border-gray-700 rounded-md bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex items-center px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Submit Application
                  <CheckCircle className="ml-2 h-4 w-4" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </form>
      </motion.div>

      {/* Important Notice Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-12 bg-gray-800 rounded-lg shadow-md p-6"
      >
        <div className="bg-green-900 border-l-4 border-green-400 p-6 rounded-r-lg">
          <div className="flex">
            <AlertCircle className="h-6 w-6 text-green-400 mr-3" />
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-2">Important Notice</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Ensure all documents are valid and up-to-date.</li>
                <li>Incomplete applications may delay processing.</li>
                <li>Contact admissions for assistance at admissions@siit.edu.</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-12 bg-gray-800 rounded-lg shadow-md p-6"
      >
        <h3 className="text-xl font-bold text-green-400 mb-4">What Happens Next?</h3>
        <div className="grid grid-cols-1 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-start"
          >
            <div className="bg-green-900 p-3 rounded-full text-green-400 mr-4">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Application Review</h4>
              <p className="text-gray-400 text-sm">We'll review your application within 3-5 business days</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-start"
          >
            <div className="bg-green-900 p-3 rounded-full text-green-400 mr-4">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Entrance Exam</h4>
              <p className="text-gray-400 text-sm">Schedule your entrance examination</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-start"
          >
            <div className="bg-green-900 p-3 rounded-full text-green-400 mr-4">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Enrollment</h4>
              <p className="text-gray-400 text-sm">Complete enrollment upon passing the entrance exam</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default OnlineApplication;