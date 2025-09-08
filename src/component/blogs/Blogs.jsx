import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error loading blogs:", err));
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Our Blogs</h1>
        <p className="text-lg md:text-xl">
          Read the latest articles, tips, and updates
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-6xl mx-auto p-6 flex justify-center -mt-10">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-64 md:w-96 rounded-full pl-4 pr-4 py-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Blogs Carousel */}
      <div className="max-w-6xl mx-auto p-6">
        {blogs.length === 0 ? (
          <p className="text-center text-gray-500">Loading blogs...</p>
        ) : filteredBlogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs found!</p>
        ) : (
          <Slider {...settings}>
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="px-3 py-4">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition group">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 p-5 text-white">
                    <h2 className="text-lg md:text-xl font-bold mb-1">{blog.title}</h2>
                    <p className="text-sm mb-3 line-clamp-2">{blog.description}</p>
                    <button className="bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-600 transition">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default Blogs;
