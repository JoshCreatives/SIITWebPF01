import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import {
  Users,
  Trophy,
  Palette,
  Heart,
  Globe,
  BookOpen,
  Music,
  Coffee,
  MapPin,
  Calendar,
} from "lucide-react";

const CampusLife = () => {
  const [isOpen, setIsOpen] = useState(true); // State for the welcome modal

  const activities = [
    {
      category: "Student Organizations",
      items: [
        {
          title: "Student Council",
          description: "Lead and represent the student body",
          image: "./p22.jpg",
        },
        {
          title: "Sports Club",
          description: "Unleash your talent",
          image: "./p24.jpg",
        },
      ],
    },
    {
      category: "Others",
      items: [
        {
          title: "SUYO Dancers",
          description: "Dance with passion",
          image: "./p23.jpg",
        },
        {
          title: "Esports Team",
          description: "Climb to the top",
          image: "./p25.jpg",
        },
      ],
    },
  ];

  const facilities = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      name: "Modern Library",
      description: "Extensive collection of books and digital resources",
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      name: "Student Lounge",
      description: "Comfortable spaces for relaxation and group study",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      name: "Computer Labs",
      description: "High-speed internet and latest software",
    },
    {
      icon: <Music className="h-6 w-6" />,
      name: "Performance Hall",
      description: "Venue for cultural shows and events",
    },
  ];

  const events = [
    {
      title: "Cultural Festival",
      date: "March 15-17, 2024",
      image: "./p10.jpg",
    },
    {
      title: "Tech Summit",
      date: "April 5-6, 2024",
      image: "./p12.jpg",
    },
    {
      title: "Sports Week",
      date: "May 1-7, 2024",
      image: "./p11.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Welcome Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
          <Dialog.Title className="text-xl font-bold text-green-600">
            Welcome to SIIT Campus Life!
          </Dialog.Title>
          <p className="mt-3 text-gray-700">
            Discover a vibrant campus community with endless opportunities for growth and fun.
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
      <div className="relative h-[500px]">
        <img src="/Hero.jpg" alt="Requirements" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/75 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">Life at SIIT</h1>
              <p className="text-xl text-white/90 mb-8">
                Experience a vibrant campus community where learning meets life, and friendships last forever.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#organizations"
                  className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                >
                  Join Organizations
                </a>
                <a
                  href="#events"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  Upcoming Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Life Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">
            Student Life Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users className="h-8 w-8" />, title: "40+ Student Organizations" },
              { icon: <Trophy className="h-8 w-8" />, title: "Competitive Sports Teams" },
              { icon: <Palette className="h-8 w-8" />, title: "Arts & Culture" },
              { icon: <Heart className="h-8 w-8" />, title: "Community Service" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-green-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-green-400">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-green-400">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Student Organizations */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="organizations"
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4">
          {activities.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-green-400">{section.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden rounded-lg shadow-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end">
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-white/90">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Campus Facilities */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">
            Campus Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-700 p-6 rounded-lg backdrop-blur-sm"
              >
                <div className="bg-green-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-green-400">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-400">{facility.name}</h3>
                <p className="text-gray-300">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Upcoming Events */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="events"
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-green-400">{event.title}</h3>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-5 w-5 mr-2 text-green-400" />
                    {event.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Campus Map */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-700 rounded-lg shadow-lg p-8">
            <div className="flex items-start mb-6">
              <MapPin className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-2 text-green-400">Visit Our Campus</h2>
                <p className="text-gray-300">
                  Siargao Island Institute of Technology, Brgy. 12, Dapa
                </p>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.0617841326753!2d126.04455407583148!3d9.76083427710273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3303f9a6c347883f%3A0x74507dc57a892747!2sSiargao%20Island%20Institute%20of%20Technology!5e0!3m2!1sen!2sph!4v1741682246576!5m2!1sen!2sph"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CampusLife;