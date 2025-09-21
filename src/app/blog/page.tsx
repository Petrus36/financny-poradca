"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ContactFormModal from "../../components/ContactFormModal";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  createdAt: string;
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch('/api/blog');
      if (response.ok) {
        const posts = await response.json();
        setBlogPosts(posts);
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Contact Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Banner Section */}
      <section className="relative min-h-[750px] md:min-h-[700px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Banner background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner.svg"
            alt="Banner background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Advisor photo positioned on the right */}
        <div className="absolute right-4 sm:right-20 md:-right-30 lg:right-60 -bottom-12 sm:-bottom-16 md:-bottom-16 lg:-bottom-24 z-20 w-[320px] h-[420px] sm:w-[400px] sm:h-[520px] md:w-[520px] md:h-[650px] lg:w-[600px] lg:h-[750px] xl:w-[650px] xl:h-[850px]">
          <Image
            src="/advisor-photo.png"
            alt="Financial Advisor"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Text Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center min-h-[500px] md:min-h-[700px] lg:min-h-[700px]">
            {/* Left side - Text content */}
            <div className="flex-1 text-center md:text-left lg:text-left mb-8 md:mb-0 lg:mb-0 lg:pr-4 lg:-ml-8 md:pl-12 lg:pl-16 md:max-w-[55%] md:mr-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 drop-shadow-lg" style={{fontFamily: 'Monda, sans-serif'}}>
                BLOG
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 max-w-2xl md:max-w-3xl lg:max-w-2xl mx-auto lg:mx-0 font-light drop-shadow-md">
                Najnovšie články a poznatky zo sveta financií
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#5ECAD5] hover:bg-[#4BB8C4] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-lg text-base md:text-lg w-full sm:w-auto"
              >
                Kontaktujte ma
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#202325] mb-4">
              Finančné články a tipy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sledujte naše najnovšie články a získajte cenné poznatky o financiách, investovaní a finančnom plánovaní.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5ECAD5]"></div>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">Zatiaľ nie sú k dispozícii žiadne články.</p>
              <p className="text-gray-500">Čoskoro pridáme nový obsah!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group"
                  onClick={() => window.open(post.url, '_blank')}
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#202325] mb-3 group-hover:text-[#5ECAD5] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString('sk-SK')}
                      </span>
                      <span className="text-[#5ECAD5] text-sm font-medium group-hover:underline">
                        Čítať viac →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
} 