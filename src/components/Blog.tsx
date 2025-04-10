import { Calendar, User, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BlogPost {
  id: number;
  images: string[];
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
}

interface BlogCardProps {
  post: BlogPost;
  isActive: boolean;
}

const BlogCard = ({ post, isActive }: BlogCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % post.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [post.images.length]);

  return (
    <div
      className={`bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-500 ease-in-out ${
        isActive ? 'opacity-100 scale-100 scroll-up-animation' : 'opacity-0 scale-90'
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative h-48">
        <img 
          src={post.images[currentImage]} 
          alt={post.title} 
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">{post.category}</span>
        </div>

        {hover && (
          <div className="absolute inset-0 flex justify-between items-center px-3">
            <button 
              onClick={() => setCurrentImage((prev) => (prev - 1 + post.images.length) % post.images.length)}
              className="p-2 bg-black bg-opacity-50 text-white rounded-full"
            >
              {"<"}
            </button>
            <button 
              onClick={() => setCurrentImage((prev) => (prev + 1) % post.images.length)}
              className="p-2 bg-black bg-opacity-50 text-white rounded-full"
            >
              {">"}
            </button>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-200 hover:text-green-400 transition-colors">
          <a href={`/blog/${post.id}`}>
            {post.title}
          </a>
        </h3>
        <p className="text-gray-300 mb-4">{post.excerpt}</p>
        <div className="flex items-center text-sm text-gray-400">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </div>
          <div className="mx-2">•</div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {post.date}
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      images: [
        "./p9.jpg",
        "./p10.jpg"
      ],
      title: "New SIIT Passers",
      excerpt: "Expanding our reach to provide quality education in the south of Metro Manila.",
      author: "Admin",
      date: "March 15, 2024",
      category: "Institutional News"
    },
    {
      id: 2,
      images: [
        "./p11.jpg",
        "./p12.jpg"
      ],
      title: "SIIT Students Win National Innovation Competition",
      excerpt: "Our students showcase excellence in technology and innovation on the national stage.",
      author: "Events Team",
      date: "March 12, 2024",
      category: "Student Achievement"
    },
    {
      id: 3,
      images: [
        "./p13.jpg",
        "./p14.jpg"
      ],
      title: "Industry Partners Join SIIT Career Fair 2024",
      excerpt: "Leading companies participate in our annual career fair, offering opportunities to our graduates.",
      author: "Career Center",
      date: "March 10, 2024",
      category: "Events"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % blogPosts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [blogPosts.length]);

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-white">Latest News & Updates</h2>
          <a
            href="/blog"
            className="flex items-center text-white hover:text-green-400 transition-colors"
          >
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        
        <div className="relative h-96 flex justify-center items-center">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`absolute transition-all duration-500 ease-in-out ${
                index === activeIndex
                  ? 'opacity-100 translate-x-0'
                  : index < activeIndex
                  ? '-translate-x-full opacity-0'
                  : 'translate-x-full opacity-0'
              }`}
            >
              <BlogCard post={post} isActive={index === activeIndex} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
