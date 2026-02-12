"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function FeaturedNewsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("featured-news")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const newsItems = [
    {
      id: 1,
      title: "Forum Dosen Mahasiswa 2025",
      category: "Acara",
      readTime: "4 MIN READ",
      image: "/images/whatsapp-20image-202025-12-02-20at-2019.jpg",
      featured: true,
      description:
        "Forum diskusi dosen dan mahasiswa Teknik Elektro UNDIP untuk penyampaian aspirasi dan komunikasi dua arah.",
    },
    {
      id: 2,
      title: "Kajian Aspirasi Mahasiswa 1",
      category: "Program",
      readTime: "2 MIN READ",
      image: "/kajian-aspirasi-mahasiswa.jpg",
    },
    {
      id: 3,
      title: "Kajian Aspirasi Mahasiswa 2",
      category: "Program",
      readTime: "1 MIN READ",
      image: "/forum-aspirasi-mahasiswa.jpg",
    },
    {
      id: 4,
      title: "HME Elektro Gathering",
      category: "Acara",
      readTime: "3 MIN READ",
      image: "/gathering-mahasiswa-elektro.jpg",
      centerPortrait: true,
    },
  ]

  const featuredNews = newsItems.find((item) => item.featured)
  const centerNews = newsItems.find((item) => item.centerPortrait)
  const rightNews = newsItems.filter((item) => !item.featured && !item.centerPortrait)

  return (
    <section id="featured-news" className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Berita Terkini</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500"></div>
            <span className="text-sm font-semibold text-gray-600">Terbaru Dipublikasikan</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Large Card - Left Side */}
          {featuredNews && (
            <div
              className={`lg:col-span-1 md:col-span-1 group cursor-pointer transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="relative h-96 overflow-hidden shadow-lg">
                <Image
                  src={featuredNews.image || "/placeholder.svg"}
                  alt={featuredNews.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

                {/* Featured Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  {/* Top Badge */}
                  <div className="inline-block w-max">
                    <span className="text-xs font-bold tracking-wider bg-elektro-primary/90 px-3 py-1">
                      {featuredNews.category}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <p className="text-sm text-gray-300 mb-2">{featuredNews.readTime}</p>
                    <h3 className="text-2xl font-bold text-balance leading-tight">{featuredNews.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Center Portrait Card - Middle */}
          {centerNews && (
            <div
              className={`lg:col-span-1 md:col-span-1 group cursor-pointer transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="relative h-96 overflow-hidden shadow-lg">
                <Image
                  src={centerNews.image || "/placeholder.svg"}
                  alt={centerNews.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

                {/* Center Card Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                  <span className="text-xs font-bold tracking-wider bg-elektro-primary/90 px-3 py-1 inline-block w-max">
                    {centerNews.category}
                  </span>
                  <div>
                    <p className="text-sm text-gray-300 mb-2">{centerNews.readTime}</p>
                    
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Recent News Stack - Right Side */}
          <div className="space-y-4 lg:col-span-1 md:col-span-2">
            {rightNews.map((item, idx) => (
              <div
                key={item.id}
                className={`group cursor-pointer transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${(idx + 2) * 100}ms` }}
              >
                <div className={`relative overflow-hidden shadow-md h-48`}>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

                  {/* Card Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-4 text-white leading-7 font-sans border-background">
                    <span className="text-xs font-bold tracking-wider bg-elektro-primary/90 px-2 py-0.5 inline-block w-max">
                      {item.category}
                    </span>
                    <div>
                      <p className="text-xs text-gray-300 mb-1">{item.readTime}</p>
                      <h4 className="text-sm font-bold line-clamp-2">{item.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}
