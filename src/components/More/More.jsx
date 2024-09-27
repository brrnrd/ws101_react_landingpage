import React, { useEffect, useState } from 'react';
import './More.css';

const More = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="more">
            <div className="more-text">
                <h1>Importance of Web Development</h1>
                <div className={`importance-box ${isVisible ? 'show' : ''}`}>
                    <h4>Online Presence</h4>
                    <p>It enables businesses, organizations, and individuals to have a presence on the internet, reaching a global audience.</p>
                </div>
                <div className={`importance-box ${isVisible ? 'show' : ''}`}>
                    <h4>Accessibility</h4>
                    <p>Websites make information and services accessible 24/7, providing convenience for users and potential customers.</p>
                </div>
                <div className={`importance-box ${isVisible ? 'show' : ''}`}>
                    <h4>Branding and Marketing</h4>
                    <p>A well-designed website helps in branding and marketing efforts, creating a professional image and attracting customers.</p>
                </div>
                <div className={`importance-box ${isVisible ? 'show' : ''}`}>
                    <h4>User Experience</h4>
                    <p>Good web development focuses on user experience, making websites easy to navigate and interact with, which enhances user satisfaction.</p>
                </div>
                <div className={`importance-box ${isVisible ? 'show' : ''}`}>
                    <h4>Business Growth</h4>
                    <p>It supports business growth by offering tools for e-commerce, customer engagement, and data collection.</p>
                </div>
                <div className={`importance-box ${isVisible ? 'show' : ''}`}>
                    <h4>Adaptability</h4>
                    <p>Web development allows for updates and changes to be made quickly, adapting to new trends, technologies, and user needs.</p>
                </div>
                <div className={`importance-box ${isVisible ? 'show' : ''}`}>
                    <h4>Innovation</h4>
                    <p>It drives innovation by enabling new features, applications, and functionalities that can lead to new opportunities and solutions.</p>
                </div>
            </div>
        </section>
    );
};

export default More;
