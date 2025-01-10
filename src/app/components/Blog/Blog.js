// import React, { useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import './BlogStyles.css';

// const BlogCard = ({ date, title, description, link }) => (
//     <div className="blog-card">
//         <div className="blog-image" />
//         <div className="blog-content">
//             <p className="blog-date">{date}</p>
//             <h3 className="blog-title">{title}</h3>
//             <p className="blog-description">{description}</p>
//             <a href={link} className="read-more">
//                 Read More
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//             </a>
//         </div>
//     </div>
// );

// const LatestInsights = () => {
//     const scrollRef = useRef(null);

//     const scroll = (direction) => {
//         if (scrollRef.current) {
//             const scrollAmount = direction === 'left' ? -300 : 300;
//             scrollRef.current.scrollBy({
//                 left: scrollAmount,
//                 behavior: 'smooth'
//             });
//         }
//     };

//     const posts = [
//         {
//             date: 'January 15, 2024',
//             title: 'The Future of AI in Software Development',
//             description: 'Exploring how artificial intelligence is revolutionizing the software development lifecycle and improving code quality.',
//             link: '#'
//         },
//         {
//             date: 'January 10, 2024',
//             title: 'Modern Web Development Trends 2024',
//             description: 'Discover the latest frameworks, tools, and methodologies shaping the future of web development.',
//             link: '#'
//         },
//         {
//             date: 'January 5, 2024',
//             title: 'Machine Learning in Mobile Apps',
//             description: 'How machine learning is transforming mobile application development and user experience.',
//             link: '#'
//         },
//         {
//             date: 'January 15, 2024',
//             title: 'The Future of AI in Software Development',
//             description: 'Exploring how artificial intelligence is revolutionizing the software development lifecycle and improving code quality.',
//             link: '#'
//         },
//         {
//             date: 'January 10, 2024',
//             title: 'Modern Web Development Trends 2024',
//             description: 'Discover the latest frameworks, tools, and methodologies shaping the future of web development.',
//             link: '#'
//         },
//         {
//             date: 'January 5, 2024',
//             title: 'Machine Learning in Mobile Apps',
//             description: 'How machine learning is transforming mobile application development and user experience.',
//             link: '#'
//         },
//     ];

//     return (
//         <div className="insights-container">
//             <div className="insights-header">
//                 <h2 className="insights-title">Latest Insights & News</h2>
//                 <p className="insights-subtitle">
//                     Stay updated with the latest trends in technology and development
//                 </p>
//             </div>

//             <div className="blog-section">
//                 <button 
//                     className="scroll-button left"
//                     onClick={() => scroll('left')}
//                     aria-label="Scroll left"
//                 >
//                     <ChevronLeft className="w-6 h-6" />
//                 </button>
                
//                 <div className="blog-grid" ref={scrollRef}>
//                     {posts.map((post, index) => (
//                         <BlogCard key={index} {...post} />
//                     ))}
//                 </div>

//                 <button 
//                     className="scroll-button right"
//                     onClick={() => scroll('right')}
//                     aria-label="Scroll right"
//                 >
//                     <ChevronRight className="w-6 h-6" />
//                 </button>
//             </div>

//             <div className="view-all-container">
//                 <a href="#" className="view-all-button">
//                     View All Posts
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default LatestInsights;

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import './BlogStyles.css';
// Blog data with numeric IDs
const posts = [
    {
        id: 1,
        date: 'January 15, 2024',
        title: 'The Future of AI in Software Development',
        description: 'Exploring how artificial intelligence is revolutionizing the software development lifecycle and improving code quality.',
        content: `In this fast-paced digital age, artificial intelligence is transforming how we approach software development. 
                 This article explores the latest trends and practical applications of AI in modern software engineering.`
    },
    {
        id: 2,
        date: 'January 10, 2024',
        title: 'Modern Web Development Trends 2024',
        description: 'Discover the latest frameworks, tools, and methodologies shaping the future of web development.',
        content: `Stay ahead of the curve with our comprehensive guide to web development trends. 
                 Learn about the newest frameworks and tools that are revolutionizing how we build for the web.`
    },
    {
        id: 3,
        date: 'January 5, 2024',
        title: 'Machine Learning in Mobile Apps',
        description: 'How machine learning is transforming mobile application development and user experience.',
        content: `Mobile applications are becoming smarter with machine learning integration. 
                 Discover how ML is enhancing user experiences and enabling new possibilities in mobile development.`
    },
    {
        id: 4,
        date: 'January 15, 2024',
        title: 'The Future of AI in Software Development',
        description: 'Exploring how artificial intelligence is revolutionizing the software development lifecycle and improving code quality.',
        content: `In this fast-paced digital age, artificial intelligence is transforming how we approach software development. 
                 This article explores the latest trends and practical applications of AI in modern software engineering.`
    },
    {
        id: 5,
        date: 'January 10, 2024',
        title: 'Modern Web Development Trends 2024',
        description: 'Discover the latest frameworks, tools, and methodologies shaping the future of web development.',
        content: `Stay ahead of the curve with our comprehensive guide to web development trends. 
                 Learn about the newest frameworks and tools that are revolutionizing how we build for the web.`
    },
    {
        id: 6,
        date: 'January 5, 2024',
        title: 'Machine Learning in Mobile Apps',
        description: 'How machine learning is transforming mobile application development and user experience.',
        content: `Mobile applications are becoming smarter with machine learning integration. 
                 Discover how ML is enhancing user experiences and enabling new possibilities in mobile development.`
    }
];

const BlogCard = ({ id, date, title, description }) => (
    <div className="blog-card">
        <div className="blog-image" />
        <div className="blog-content">
            <p className="blog-date">{date}</p>
            <h3 className="blog-title">{title}</h3>
            <p className="blog-description">{description}</p>
            <Link href={`/blog/${id}`} className="read-more">
    Read More
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
</Link>
        </div>
    </div>
);

const LatestInsights = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="insights-container">
            <div className="insights-header">
                <h2 className="insights-title">Latest Insights & News</h2>
                <p className="insights-subtitle">
                    Stay updated with the latest trends in technology and development
                </p>
            </div>

            <div className="blog-section">
                <button 
                    className="scroll-button left"
                    onClick={() => scroll('left')}
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="blog-grid" ref={scrollRef}>
                    {posts.map((post) => (
                        <BlogCard key={post.id} {...post} />
                    ))}
                </div>

                <button 
                    className="scroll-button right"
                    onClick={() => scroll('right')}
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            <div className="view-all-container">
                <Link href="/blog" className="view-all-button">
                    View All Posts
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default LatestInsights;