// src/pages/admin/BlogManagementPanel.tsx (or BlogAdminPanel.tsx)
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Blog = {
  id: string;
  title: string;
  content: string;
  image_url?: string;
  created_at: string;
};

const BlogManagementPanel = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data, error } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
    if (error) {
      console.error(error);
    } else {
      setBlogs(data);
    }
  };

  const handleAddBlog = async () => {
    const { data, error } = await supabase.from('blogs').insert([{ title, content }]);
    if (error) {
      alert('Failed to add blog');
      console.error(error);
    } else {
      alert('Blog added!');
      setTitle('');
      setContent('');
      fetchBlogs();
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4">Blog Management</h1>

      <div className="mb-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog title"
          className="w-full p-2 mb-2 rounded text-black"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Blog content"
          className="w-full p-2 mb-2 rounded text-black"
        ></textarea>
        <button
          onClick={handleAddBlog}
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
        >
          Add Blog
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Existing Posts:</h2>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id} className="mb-4 border-b border-gray-600 pb-2">
              <h3 className="text-lg font-medium">{blog.title}</h3>
              <p>{blog.content}</p>
              <small className="text-gray-400">{new Date(blog.created_at).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogManagementPanel;
