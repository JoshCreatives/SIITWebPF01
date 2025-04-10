import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { CreditCard, Building2, CalendarClock, AlertCircle, CheckCircle2, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const AlternativePayment = () => {
  const [isOpen, setIsOpen] = useState(true); // State for the welcome modal

  const paymentOptions = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Credit Card Installment",
      description: "Split your tuition into 3-12 monthly payments with partner banks",
      details: [
        "0% interest for 3 months",
        "Available for all major credit cards",
        "Minimum transaction amount: ₱10,000"
      ]
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Bank Financing",
      description: "Educational loans through our partner banks",
      details: [
        "Competitive interest rates",
        "Flexible payment terms up to 36 months",
        "Quick approval process"
      ]
    },
    {
      icon: <CalendarClock className="h-6 w-6" />,
      title: "Deferred Payment Plan",
      description: "Pay your tuition in installments directly with SIIT",
      details: [
        "Initial down payment of 30%",
        "Remaining balance spread across the semester",
        "Minimal processing fee"
      ]
    }
  ];

  const partnerBanks = [
    "BDO",
    "BPI",
    "Metrobank",
    "Security Bank",
    "UnionBank",
    "RCBC"
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 text-gray-200">
      {/* Welcome Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
          <Dialog.Title className="text-xl font-bold text-green-600">
            Welcome to Alternative Payment Services!
          </Dialog.Title>
          <p className="mt-3 text-gray-700">
            Explore flexible payment options to make your education more affordable.
          </p>
          <button
            className="mt-4 bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition"
            onClick={() => setIsOpen(false)}
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
          <h1 className="text-4xl font-bold text-green-400 mb-4">Alternative Payment Service</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We understand that financing education is a significant investment. Explore our flexible payment options designed to make quality education more accessible.
          </p>
        </motion.div>

        {/* Payment Options */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.6 }} // Animation duration
          viewport={{ once: true }} // Only animate once
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {paymentOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }} // Initial state (hidden and slightly below)
              whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
              transition={{ duration: 0.6, delay: index * 0.2 }} // Delay each option's animation
              viewport={{ once: true }} // Only animate once
              className="bg-gray-800 rounded-lg shadow-md p-8"
            >
              <div className="text-green-400 mb-4">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-400">{option.title}</h3>
              <p className="text-gray-300 mb-6">{option.description}</p>
              <ul className="space-y-3">
                {option.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                    <span className="text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Banks */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.6 }} // Animation duration
          viewport={{ once: true }} // Only animate once
          className="bg-gray-800 rounded-lg shadow-md p-8 mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-green-400">Partner Banks</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnerBanks.map((bank) => (
              <div key={bank} className="flex items-center justify-center p-6 border border-gray-700 rounded-lg bg-gray-700">
                <span className="text-lg font-semibold text-gray-200">{bank}</span>
              </div>
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
          <h2 className="text-2xl font-bold mb-6 text-green-400">How to Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Choose Payment Plan",
                description: "Select the payment option that best suits your needs"
              },
              {
                step: 2,
                title: "Submit Requirements",
                description: "Provide necessary documents for processing"
              },
              {
                step: 3,
                title: "Application Review",
                description: "Wait for approval from the finance department"
              },
              {
                step: 4,
                title: "Payment Setup",
                description: "Complete the payment arrangement process"
              }
            ].map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-center mb-4">
                  <div className="bg-green-900 text-green-400 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-green-400">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.6 }} // Animation duration
          viewport={{ once: true }} // Only animate once
          className="bg-green-900 border-l-4 border-green-400 p-6 rounded-r-lg"
        >
          <div className="flex">
            <AlertCircle className="h-6 w-6 text-green-400 mr-3" />
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-2">Important Notes</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>All payment plans are subject to approval</li>
                <li>Processing time may vary depending on the chosen payment option</li>
                <li>Additional documents may be required for verification</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
          transition={{ duration: 0.6 }} // Animation duration
          viewport={{ once: true }} // Only animate once
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center text-green-400">
            <HelpCircle className="h-5 w-5 mr-2" />
            <span className="font-medium">Need help? Contact our Finance Department at finance@siit.edu or call (123) 456-7890</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AlternativePayment;