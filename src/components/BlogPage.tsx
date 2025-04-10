"use client";
import { useLayoutEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Search,
  ChevronRight,
  BookOpen,
  Award,
  Users,
} from "lucide-react";
import supabaseClient from "../services/supabaseClient";
import moment from "moment";

const categories = [
  "All",
  "Academic News",
  "Student Life",
  "Events",
  "Research",
  "Alumni Stories",
  "Campus Updates",
];

// TODO: put this to supabase "blogs" table as "is_featured = true"
// const featuredPosts = [
//   {
//     image: "/p7.jpg",
//     title: "New SIIT Passers",
//     excerpt:
//       "Expanding our reach to provide quality education in the south of Metro Manila with state-of-the-art facilities and modern learning spaces.",
//     author: "Admin",
//     date: "March 15, 2024",
//     category: "Campus Updates",
//     readTime: "5 min read",
//     id: 1,
//   },
// ];

// TODO: put this to supabase "blogs" table as "is_featured = false"
// const blogPosts = [
//   {
//     image: "/p27.jpg",
//     title: "SIIT Students Win National Innovation Competition",
//     excerpt:
//       "Our students showcase excellence in technology and innovation on the national stage, bringing home top honors in software development.",
//     author: "Events Team",
//     date: "March 12, 2024",
//     category: "Student Life",
//     readTime: "4 min read",
//     id: 2,
//   },
//   {
//     image: "/p28.jpg",
//     title: "Industry Partners Join SIIT Career Fair 2024",
//     excerpt:
//       "Leading companies participate in our annual career fair, offering opportunities to our graduates and forming strategic partnerships.",
//     author: "Career Center",
//     date: "March 10, 2024",
//     category: "Events",
//     readTime: "3 min read",
//     id: 3,
//   },
//   {
//     image: "/p4.jpg",
//     title: "Research Breakthrough in AI Education",
//     excerpt:
//       "SIIT researchers develop new AI-powered learning tools to enhance student engagement and personalized learning experiences.",
//     author: "Research Department",
//     date: "March 8, 2024",
//     category: "Research",
//     readTime: "6 min read",
//     id: 4,
//   },
//   {
//     image: "/p29.jpg",
//     title: "Alumni Success Story: Tech Startup Founder",
//     excerpt:
//       "SIIT graduate launches successful tech startup, creating innovative solutions for environmental challenges.",
//     author: "Alumni Office",
//     date: "March 5, 2024",
//     category: "Alumni Stories",
//     readTime: "5 min read",
//     id: 5,
//   },
// ];

const BlogPage = () => {
  const [isOpen, setIsOpen] = useState(true); // State for the welcome modal
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [blogsList, setBlogsList] = useState<any>([]);
  const [featuredBlogPost, setFeaturedBlogPost] = useState<any>([]);

  useLayoutEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const blogsResponse = await supabaseClient.from("blogs").select();
    const featuredBlogResponse = await supabaseClient
      .from("blogs")
      .select()
      .eq("is_featured", true)
      .single();

    setFeaturedBlogPost(featuredBlogResponse.data);
    setBlogsList(blogsResponse?.data);
  };

  const filteredPosts = blogsList.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      // post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const highlights = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Latest Research",
      count: "50+",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Student Achievements",
      count: "200+",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Alumni Stories",
      count: "1000+",
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
            Welcome to the SIIT Blog!
          </Dialog.Title>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest news, events, and stories from our
            vibrant academic community.
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
        <img
          src="/Hero1.jpg"
          alt="SIIT Blog"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/75 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">SIIT Blog</h1>
              <p className="text-xl text-white/90 mb-8">
                Stay updated with the latest news, events, and stories from our
                vibrant academic community.
              </p>
              <div className="relative">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-800 border-b border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="bg-green-900 p-3 rounded-full text-green-400">
                  {item.icon}
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-400">
                    {item.count}
                  </p>
                  <p className="text-gray-300">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {/* {featuredPosts.map((post) => ( */}
        {featuredBlogPost && (
          <motion.div
            key={featuredBlogPost.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src={featuredBlogPost.image_url}
                  alt={featuredBlogPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8">
                <span className="inline-block bg-green-900 text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {featuredBlogPost.category}
                </span>
                <h2 className="text-2xl font-bold mb-4 text-green-400">
                  <a
                    href={`/blog/${featuredBlogPost.id}`}
                    className="hover:text-green-500 transition-colors"
                  >
                    {featuredBlogPost.title}
                  </a>
                </h2>
                <p className="text-gray-300 mb-6">
                  {featuredBlogPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredBlogPost.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>
                      {moment(featuredBlogPost.timestamptz).format(
                        "MMMM Do YYYY"
                      )}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {featuredBlogPost.readTime}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-green-400 hover:text-green-500 transition-colors">
                  <a href={`/blog/${post.id}`}>{post.title}</a>
                </h3>
                <p className="text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {moment(post.timestamptz).format(
                      "MMMM Do YYYY"
                    )}
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <a
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-green-400 hover:text-green-500 font-medium"
                  >
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-green-900 rounded-lg shadow-lg p-8 text-white"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/80 mb-6">
              Get the latest updates from SIIT delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-green-900 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
