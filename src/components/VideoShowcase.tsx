import { Play, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoShowcase = () => {
  const videos = [
    {
      thumbnail: "./p34.jpg",
      title: "Keep looking up and moving forward",
      category: "Videos"
    },
    {
      thumbnail: "./p17.jpg",
      title: "Made to Be More in Senior High",
      category: "Videos"
    },
    {
      thumbnail: "./p19.jpg",
      title: "Be More in College",
      category: "Videos"
    },
    {
      thumbnail: "./p20.jpg",
      title: "Behind a Mother's Hard Work",
      category: "Videos"
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
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
    <div className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="flex justify-between items-center mb-8"
        >
          <div className="flex items-center gap-2">
            <Play className="h-6 w-6" />
            <h2 className="text-2xl font-bold">SIIT in Motion</h2>
          </div>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            <Youtube className="h-5 w-5" />
            Follow us on YouTube
          </a>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="relative mb-8 group cursor-pointer"
        >
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <img
              src="./p16.jpg"
              alt="Be Future-ready in STI"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-blue-600 p-4 rounded-full transform group-hover:scale-110 transition-transform">
                <Play className="h-8 w-8" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black">
            <span className="inline-block bg-yellow-400 text-black px-2 py-1 rounded text-sm font-medium mb-2">
              Videos
            </span>
            <h3 className="text-2xl font-bold">Be Future-ready in SIIT</h3>
          </div>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {videos.map((video, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group cursor-pointer"
            >
              <div className="aspect-video relative rounded-lg overflow-hidden mb-3">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Play className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <span className="inline-block bg-yellow-400 text-black px-2 py-1 rounded text-xs font-medium mb-2">
                {video.category}
              </span>
              <h4 className="font-medium group-hover:text-blue-400 transition-colors">
                {video.title}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default VideoShowcase;