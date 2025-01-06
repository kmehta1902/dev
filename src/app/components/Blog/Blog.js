import React from 'react';
import './BlogStyles.css';

const BlogCard = ({ date, title, description, link }) => (
    <div className="blog-card">
        <div className="blog-image" />
        <div className="blog-content">
            <p className="blog-date">{date}</p>
            <h3 className="blog-title">{title}</h3>
            <p className="blog-description">{description}</p>
            <a href={link} className="read-more">
                Read More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </a>
        </div>
    </div>
);

const LatestInsights = () => {
    const posts = [
        {
            date: 'January 15, 2024',
            title: 'The Future of AI in Software Development',
            description: 'Exploring how artificial intelligence is revolutionizing the software development lifecycle and improving code quality.',
            link: '#'
        },
        {
            date: 'January 10, 2024',
            title: 'Modern Web Development Trends 2024',
            description: 'Discover the latest frameworks, tools, and methodologies shaping the future of web development.',
            link: '#'
        },
        {
            date: 'January 5, 2024',
            title: 'Machine Learning in Mobile Apps',
            description: 'How machine learning is transforming mobile application development and user experience.',
            link: '#'
        }
    ];

    return (
        <div className="insights-container">
            <div className="insights-header">
                <h2 className="insights-title">Latest Insights & News</h2>
                <p className="insights-subtitle">
                    Stay updated with the latest trends in technology and development
                </p>
            </div>

            <div className="blog-grid">
                {posts.map((post, index) => (
                    <BlogCard key={index} {...post} />
                ))}
            </div>

            <div className="view-all-container">
                <a href="#" className="view-all-button">
                    View All Posts
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default LatestInsights;