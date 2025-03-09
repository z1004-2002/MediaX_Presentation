import React from 'react';
import './about.css';

const About = () => {
  const aboutSections = [
    {
      title: "Our Mission",
      icon: "fa-bullseye",
      paragraphs: [
        "MediaX was created with the vision that media management tools should be intuitive, flexible, and powerful. Our mission is to transform how teams handle, store, and share media, driving efficiency and creativity.",
        "We understand that every media asset, every upload, and every update is an opportunity to enhance your content strategy. That's why we built a platform that empowers teams to organize, access, and manage media seamlessly, improving collaboration and productivity.",
        "Our goal is to make media management a smooth and transparent process, where every asset is easy to find, and every action aligns with your team's creative vision, enabling the delivery of high-quality media faster and more efficiently."
      ]  
    },
    {
      title: "Our Technological Vision",
      icon: "fa-eye",
      paragraphs: [
        "We envision a future where media management is fully integrated, intelligent, and creative-driven. MediaX is not just a service; it's a platform that anticipates and adapts to the evolving needs of modern media teams.",
        "Our vision is built on three core pillars: cutting-edge technology, seamless integration, and universal accessibility. We believe that media management should empower, not complicate, your creative workflow.",
        "We are dedicated to continuous investment in research and development, ensuring that MediaX remains at the forefront of innovation in media management solutions."
      ]
    },    
    {
      title: "Our Unique Advantages",
      icon: "fa-rocket",
      paragraphs: [
        "MediaX stands out for its ability to provide a truly integrated media management solution. Whether it's organizing media assets, streamlining workflows, or enabling team collaboration, we ensure seamless integration and an exceptional user experience.",
        "Unlike traditional solutions, we offer deep customization. Our intelligent algorithms allow every media process to be tailored to the specific needs and preferences of each team or project.",
        "With ultra-fast upload and retrieval times, top-tier security, and unbeatable reliability, MediaX becomes the essential technological partner for any business looking to optimize their media management and deliver high-quality content."
      ]
    }
    
  ];

  return (
    <div className="about-section">
      <div className="about-header">
        <h2 className="section-title">
          About <span className="title-highlight">MediaX</span>
        </h2>
        <p className="section-subtitle">
          Manage your product very easily, with MediaX
        </p>
      </div>
      
      <div className="about-grid">
        {aboutSections.map((section, index) => (
          <div key={index} className="about-card">
            <div className="about-icon-container">
              <i className={`fas ${section.icon}`}></i>
            </div>
            <div className="about-content">
              <h3 className="about-title">{section.title}</h3>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="about-paragraph">{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;