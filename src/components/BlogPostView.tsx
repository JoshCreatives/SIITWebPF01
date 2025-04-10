import React, { useState } from 'react';
import { Calendar, User, ArrowLeft, MapPin, Users, Building2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';

// Define content type interfaces
interface TextContent {
  type: "text";
  content: string;
}

interface StatsContent {
  type: "stats";
  items: {
    icon: React.ReactNode;
    label: string;
    value: string;
  }[];
}

interface SubheadingContent {
  type: "subheading";
  content: string;
}

interface ListContent {
  type: "list";
  items: string[];
}

interface QuoteContent {
  type: "quote";
  content: string;
  author: string;
  role: string;
}

interface LocationContent {
  type: "location";
  address: string;
  coordinates: string;
}

type ContentSection = 
  | TextContent
  | StatsContent
  | SubheadingContent
  | ListContent
  | QuoteContent
  | LocationContent;

interface BlogPost {
  title: string;
  author: string;
  date: string;
  category: string;
  image_url: string;
  content: ContentSection[];
}

const BlogPostView = () => {
  const [isOpen, setIsOpen] = useState(true); // State for Welcome Modal

  // Sample blog post data with proper typing
  const posts: Record<string, BlogPost> = {
    "1": {
      title: "New SIIT Passers",
      author: "Admin",
      date: "March 15, 2024",
      category: "Institutional News",
      image_url: "/p7.jpg",
      content: [
        {
          type: "text",
          content: "SIIT Passers marked another milestone in its commitment to providing quality education with the groundbreaking ceremony of its newest campus in Alabang, Muntinlupa City. The state-of-the-art facility, set to open its doors in Academic Year 2025-2026, represents a significant expansion of STI's educational footprint in the southern region of Metro Manila."
        },
        {
          type: "stats",
          items: [
            { icon: <Building2 className="h-6 w-6" />, label: "Campus Size", value: "12,000 sqm" },
            { icon: <Users className="h-6 w-6" />, label: "Student Capacity", value: "5,000+" },
            { icon: <Clock className="h-6 w-6" />, label: "Construction Timeline", value: "18 months" }
          ]
        },
        {
          type: "subheading",
          content: "State-of-the-Art Facilities"
        },
        {
          type: "text",
          content: "The new campus will feature modern learning facilities including:"
        },
        {
          type: "list",
          items: [
            "Advanced Computer Laboratories",
            "Industry-Grade Engineering Workshops",
            "Innovation Hub and Research Center",
            "Modern Library and Learning Resource Center",
            "Student Activity Center",
            "Sports Facilities"
          ]
        },
        {
          type: "subheading",
          content: "Strategic Location"
        },
        {
          type: "text",
          content: "Located in the heart of Alabang's business district, the new campus will provide students with unprecedented access to industry partners and potential employers. The strategic location also offers excellent transportation connectivity, making quality education more accessible to students from surrounding areas."
        },
        {
          type: "quote",
          content: "This new campus represents our commitment to providing world-class educational facilities that prepare our students for the demands of the future workforce.",
          author: "Atty. Francisco Matugas",
          role: "SIIT President"
        },
        {
          type: "subheading",
          content: "Environmental Sustainability"
        },
        {
          type: "text",
          content: "The campus design incorporates sustainable architecture principles, including energy-efficient systems, rainwater harvesting, and green spaces. These features not only reduce environmental impact but also create a more conducive learning environment for students."
        },
        {
          type: "location",
          address: "Siargao Island Institute of Technology",
          coordinates: "14.4234° N, 121.0271° E"
        }
      ]
    },
    "2": {
      title: "SIIT Students Win National Innovation Competition",
      author: "Admin",
      date: "April 1, 2024",
      category: "Achievements",
      image_url: "/p8.jpg",
      content: [
        {
          type: "text",
          content: "A team of SIIT students has won first place in the National Innovation Competition with their groundbreaking project on sustainable energy solutions."
        },
        {
          type: "stats",
          items: [
            { icon: <Users className="h-6 w-6" />, label: "Team Members", value: "5 students" },
            { icon: <Clock className="h-6 w-6" />, label: "Project Duration", value: "8 months" },
            { icon: <Building2 className="h-6 w-6" />, label: "Competitors", value: "50+ teams" }
          ]
        },
        {
          type: "subheading",
          content: "Project Details"
        },
        {
          type: "text",
          content: "The winning project focuses on:"
        },
        {
          type: "list",
          items: [
            "Renewable energy generation from ocean waves",
            "Low-cost implementation for coastal communities",
            "Scalable solutions for industrial applications"
          ]
        },
        {
          type: "quote",
          content: "This victory demonstrates the quality of education at SIIT and our students' ability to compete at the national level.",
          author: "Dr. Maria Santos",
          role: "Faculty Advisor"
        }
      ]
    },
    "3": {
      title: "Industry Partners Join SIIT Career Fair 2024",
      author: "Admin",
      date: "April 5, 2024",
      category: "Events",
      image_url: "/p9.jpg",
      content: [
        {
          type: "text",
          content: "SIIT successfully hosted its annual Career Fair 2024, attracting over 50 industry partners from various sectors."
        },
        {
          type: "stats",
          items: [
            { icon: <Building2 className="h-6 w-6" />, label: "Companies", value: "50+" },
            { icon: <Users className="h-6 w-6" />, label: "Job Offers", value: "200+" },
            { icon: <Clock className="h-6 w-6" />, label: "Participants", value: "1,000+ students" }
          ]
        },
        {
          type: "subheading",
          content: "Featured Industries"
        },
        {
          type: "list",
          items: [
            "Information Technology",
            "Engineering",
            "Business and Finance",
            "Healthcare",
            "Education"
          ]
        },
        {
          type: "quote",
          content: "The SIIT Career Fair provides an excellent platform for companies to connect with highly skilled graduates ready to contribute to the workforce.",
          author: "Mr. Juan Dela Cruz",
          role: "HR Manager, Tech Solutions Inc."
        },
        {
          type: "subheading",
          content: "Student Success Stories"
        },
        {
          type: "text",
          content: "Many students received on-the-spot job offers, with several securing internships at top companies in their respective fields."
        }
      ]
    },
    "4": {
      title: "Research Breakthrough in AI Education",
      author: "Admin",
      date: "March 8, 2024",
      category: "Research",
      image_url: "/p4.jpg",
      content: [
        {
          type: "text",
          content: "SIIT researchers have developed a groundbreaking AI-powered learning platform that adapts to individual student needs."
        },
        {
          type: "stats",
          items: [
            { icon: <Users className="h-6 w-6" />, label: "Research Team", value: "8 members" },
            { icon: <Clock className="h-6 w-6" />, label: "Duration", value: "2 years" },
            { icon: <Building2 className="h-6 w-6" />, label: "Institutions", value: "3 partnered" }
          ]
        },
        {
          type: "subheading",
          content: "Key Features"
        },
        {
          type: "list",
          items: [
            "Real-time learning adaptation",
            "Personalized learning paths",
            "Automated assessment system",
            "Multilingual support"
          ]
        },
        {
          type: "quote",
          content: "This AI platform represents a paradigm shift in how we approach personalized education, making quality learning accessible to all students regardless of their background.",
          author: "Dr. Elena Rodriguez",
          role: "Lead Researcher"
        }
      ]
    }
  };
  
  // Get post ID from URL safely
  const postId = typeof window !== 'undefined' ? window.location.pathname.split('/').pop() || '1' : '1';
  const post = posts[postId];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-xl text-gray-200">Post not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Welcome Popup Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-4 z-10">
          <Dialog.Title className="text-xl font-bold text-green-600">
            Welcome to SIIT Blog!
          </Dialog.Title>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest news and announcements from SIIT.
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[500px]"
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end z-20">
          <div className="max-w-7xl mx-auto px-4 w-full pb-16">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex items-center text-white/80 gap-6">
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.a
            href="/blog"
            className="inline-flex items-center text-green-400 hover:text-green-300 mb-8"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </motion.a>

          <div className="space-y-8">
            {post.content.map((section, index) => {
              switch (section.type) {
                case "text":
                  return (
                    <motion.p 
                      key={index} 
                      className="text-gray-300 leading-relaxed"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {section.content}
                    </motion.p>
                  );

                case "stats":
                  return (
                    <motion.div 
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-800 p-6 rounded-lg shadow-md"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {section.items.map((item, i) => (
                        <div key={i} className="text-center">
                          <div className="bg-green-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-green-400">
                            {item.icon}
                          </div>
                          <div className="text-2xl font-bold text-gray-100 mb-1">{item.value}</div>
                          <div className="text-gray-400">{item.label}</div>
                        </div>
                      ))}
                    </motion.div>
                  );

                case "subheading":
                  return (
                    <motion.h2 
                      key={index} 
                      className="text-2xl font-bold text-green-400 mt-12 mb-6"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {section.content}
                    </motion.h2>
                  );

                case "list":
                  return (
                    <motion.ul 
                      key={index} 
                      className="list-disc list-inside space-y-2 text-gray-300 ml-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </motion.ul>
                  );

                case "quote":
                  return (
                    <motion.blockquote 
                      key={index} 
                      className="border-l-4 border-green-600 pl-6 my-8"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-xl text-gray-300 italic mb-4">"{section.content}"</p>
                      <footer className="text-gray-400">
                        <strong>{section.author}</strong>
                        <span className="mx-2">•</span>
                        <span>{section.role}</span>
                      </footer>
                    </motion.blockquote>
                  );

                case "location":
                  return (
                    <motion.div 
                      key={index} 
                      className="bg-gray-800 p-6 rounded-lg mt-8"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-green-400 mt-1 mr-3" />
                        <div>
                          <h3 className="font-semibold text-gray-100 mb-1">Location</h3>
                          <p className="text-gray-300">{section.address}</p>
                          <p className="text-gray-400 text-sm">{section.coordinates}</p>
                        </div>
                      </div>
                    </motion.div>
                  );

                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostView;