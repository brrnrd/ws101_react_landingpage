import React from 'react';
import './About.css';
import img4 from '../../images/img4.png';
import img5 from '../../images/img5.png';
import img6 from '../../images/img6.png';


const About = () => {
  return (
    <section id="about">
      <h2 className="about-title">Web Development Technologies</h2>
      <div className="box">
        <div className="image">
          <img
            src={img4}
            alt="HTML Logo"
          />
        </div>
        <div className="inner-box">
          <p>Standard language used to create and design webpages. HTML structures the content on the web by using elements like headings, paragraphs, links, images, and more. It defines the structure of a webpage with tags and attributes.</p>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img
            src={img5}
            alt="CSS Logo"
          />
        </div>
        <div className="inner-box">
          <p>Used to control the presentation and layout of HTML elements. It allows you to apply styles such as colors, fonts, spacing, and positioning, making your website look visually appealing and consistent.</p>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img
            src={img6}
            alt="JS Logo"
          />
        </div>
        <div className="inner-box">
          <p>A programming language that adds interactivity and dynamic behavior to websites. It allows you to create features like animations, form validations, and interactive elements, making the website more engaging and functional.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
