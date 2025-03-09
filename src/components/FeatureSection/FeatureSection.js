/* FeaturesSection.js */
import React from "react";
import "./FeatureSection.css";

const FeaturesSection = () => {const features = [
  { 
    icon: "fas fa-cogs", 
    title: "Create a media", 
    desc: "Easily create media assets, including images, videos, audio files, and documents, with our intuitive media creation tools.",
    color: "#f39c12"
  },
  { 
    icon: "fas fa-cogs", 
    title: "Modify Media", 
    desc: "Quickly edit media assets, add metadata, and customize settings to ensure your media is always up to date.",
    color: "#1abc9c"
  },
  { 
    icon: "fa-solid fa-sitemap", 
    title: "Download Media", 
    desc: "Download media assets in various formats, resolutions, and sizes to suit your specific needs.",
    color: "#e74c3c"
  },
  { 
    icon: "fas fa-store", 
    title: "View Media", 
    desc: "view data of a media assets directly within the MediaX platform, ensuring seamless media management",
    color: "#3498db"
  }
];
  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="section-title">Our Features</h2>
          <p className="section-subtitle">
          A unique solution to manage media efficiently.
          </p>
        </div>
        <div className="feature-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{borderTopColor: feature.color}}>
              <div className="feature-icon" style={{backgroundColor: feature.color}}>
                <i className={feature.icon}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.desc}</p>
              <a href="#" className="feature-link">Discover →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;