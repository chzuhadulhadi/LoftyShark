import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const posts = [
  {
    id: 1,
    title: "Top Trends in IT and Tech You Need to Know in 2024",
    href: "https://example.com/it-trends-2024/",
    category: ["IT & Tech"],
    image:
      "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?crop=entropy&cs=tinysrgb&fit=crop&w=768&h=403&q=80",
  },
  {
    id: 2,
    title: "How Marketing Strategies Are Shaping 2024",
    href: "https://example.com/marketing-strategies-2024/",
    category: ["Marketing"],
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=crop&w=768&h=403&q=80",
  },
  {
    id: 3,
    title: "Engineering Innovations That Will Define the Future",
    href: "https://example.com/engineering-innovations/",
    category: ["Engineering"],
    image: "/EngeShark.png", // Correct image reference
  },
];

const RelatedPosts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-black py-16 text-white px-4 md:px-20">
      <div className="container mx-auto">
        <h2
          className="lg:text-6xl text-4xl font-bold text-center mb-12"
          data-aos="fade-in"
        >
          Related Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="blog-index--col" data-aos="zoom-in">
              <article className="blog-card shadow-xl rounded-md overflow-hidden hover:scale-105 transition-transform duration-300">
                <a href={post.href} className="block">
                  <div className="blog-card--image-wrap">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 sm:h-60 object-cover"
                      loading="lazy"
                    />
                  </div>
                </a>
                <div className="p-4">
                  <div className="text-lg text-gray-400 mb-2">
                    {post.category.map((cat, index) => (
                      <a
                        key={index}
                        href={`https://example.com/category/${cat
                          .toLowerCase()
                          .replace(" ", "-")}/`}
                        className="mr-2"
                        rel="tag"
                      >
                        {cat}
                      </a>
                    ))}
                  </div>
                  <a href={post.href} className="block">
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
