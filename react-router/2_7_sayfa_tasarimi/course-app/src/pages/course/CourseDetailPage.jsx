import React from 'react';
import { useRouteLoaderData } from "react-router";

export async function courseDetailLoader({ params }) {
  const { courseid } = params;
  const res = await fetch("http://localhost:5000/courses/" + courseid);
  
  // Good practice: check if the request actually worked
  if (!res.ok) throw new Error("Could not fetch course details");
  
  return res.json();
}

export function CourseDetailPage() {
  // Ensure "course-detail" matches the 'id' you gave this route in your router config
  const course = useRouteLoaderData("course-detail");

  // Loading protection: if the loader hasn't finished or data is missing
  if (!course) return <div className="p-10 text-center">Loading...</div>;

  const { title, image, description, id, users, comments, likes } = course;

  return (
    // Wrapper to make it look good on the page
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6">
      
      {/* Breadcrumb / Label */}
      <p className="mb-6 text-sm font-medium tracking-widest text-teal-200 uppercase">
        Course Preview
      </p>

      {/* Main Card */}
      <div className="w-full max-w-sm bg-white border border-white/20 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm transition-transform hover:scale-[1.01]">
        
        {/* Image Section with Overlay */}
        <div className="relative aspect-video bg-gray-200">
          <img 
            className="object-cover w-full h-full" 
            src={`http://localhost:5000/images/${image}` }
            alt={title} 
            onError={(e) => { e.target.src = "https://placehold.co/600x400?text=No+Image"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-4">
            <span className="px-2 py-1 text-[10px] font-mono text-white/80 bg-black/40 rounded backdrop-blur-sm">
              #{id?.split('-')[0]}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h1 className="text-2xl font-extrabold text-gray-900 leading-tight">
            {title}
          </h1>
          
          <p className="mt-3 text-gray-600 leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Interaction Bar */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              {/* Stats Item */}
              <div className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-sm font-bold text-gray-700">{users}</span>
              </div>
              
              <div className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="text-sm font-bold text-gray-700">{comments}</span>
              </div>
            </div>

            {/* Like Button */}
            <button className="flex items-center px-4 py-2 space-x-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors shadow-lg shadow-red-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
              <span className="text-sm font-bold">{likes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}