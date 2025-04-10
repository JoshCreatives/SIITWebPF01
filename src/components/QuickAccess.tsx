import { GraduationCap, Users, Building2, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const QuickAccess = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollOffset(-30); // Move down when scrolling down
      } else {
        setScrollOffset(0); // Stay still when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="py-16 overflow-hidden bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Events Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-400 mb-4">Events</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore upcoming events, campus activities, and more at SIIT.
          </p>
        </motion.div>

        {/* Grid Sections */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          animate={{ y: scrollOffset }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Image with Smooth Hover Effect */}
              <motion.div
                className="relative h-64"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-gray-200">
                    <h3 className="text-2xl font-bold mb-2 text-green-400">{section.title}</h3>
                    <p className="text-sm">{section.description}</p>
                  </div>
                </div>
              </motion.div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <section.icon className="h-8 w-8 text-green-400" />
                  <div>
                    <h4 className="font-semibold text-gray-200">{section.subtitle}</h4>
                    <p className="text-sm text-gray-300">{section.subtext}</p>
                  </div>
                </div>
                <a
                  href={section.link}
                  className="text-green-400 hover:text-green-500 font-medium text-sm"
                >
                  {section.linkText} →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Section Data
const sections = [
  {
    title: "Featured Programs",
    description: "Discover our industry-aligned courses",
    image: "./p4.jpg",
    icon: GraduationCap,
    subtitle: "Engineering & Technology",
    subtext: "Leading-edge technical education",
    link: "/programs/college",
    linkText: "Explore Programs",
  },
  {
    title: "Campus Life",
    description: "Experience the SIIT community",
    image: "./p5.jpg",
    icon: Users,
    subtitle: "Student Activities",
    subtext: "Join clubs, events, and more",
    link: "/campus-life",
    linkText: "Learn More",
  },
  {
    title: "Start Your Journey",
    description: "Apply to SIIT today",
    image: "p2.jpg",
    icon: BookOpen,
    subtitle: "Admission Requirements",
    subtext: "Everything you need to know",
    link: "/admissions/requirements",
    linkText: "Learn More",
  },
  {
    title: "Our Campuses",
    description: "Find a campus near you",
    image: "./p1.jpg",
    icon: Building2,
    subtitle: "Multiple Locations",
    subtext: "State-of-the-art facilities",
    link: "/campuses",
    linkText: "View Campuses",
  },
];

export default QuickAccess;