import React from 'react';
import './developpers.css';

const Developpers = () => {
  const developerSections = [
    {
      title: "Seamless Media API Integration",
      icon: "fa-code",
      paragraphs: [
        "MediaX provides a powerful and easy-to-use API that integrates smoothly into any media ecosystem. Our comprehensive documentation and SDKs support multiple programming languages, including JavaScript, Python, Java, and more.",
        "With just a few lines of code, developers can leverage advanced media management features, reducing development time and complexity. Our RESTful API ensures seamless media handling and minimal overhead.",
        "We offer extensive code samples, interactive documentation, and dedicated support to help developers integrate MediaX quickly and efficiently."
      ]
    },
    {
      title: "Global Media Management & Localization",
      icon: "fa-globe",
      paragraphs: [
        "Break down media barriers with MediaX's advanced localization features. Our platform supports over 50 languages and offers automatic translation services for media-related content.",
        "Customize media-related notifications, settings, and content based on user language preferences, regional settings, and cultural nuances. Our intelligent localization engine ensures your media assets connect with a global audience.",
        "Effortlessly manage multilingual media assets without additional development complexity. MediaX handles the nuances of international content management."
      ]
    },
    {
      title: "Media Engagement Analytics",
      icon: "fa-chart-line",
      paragraphs: [
        "Gain in-depth insights into the performance of your media assets with our comprehensive engagement analytics. Track views, interactions, downloads, and user engagement in real-time.",
        "Our advanced metrics dashboard provides detailed data on how users interact with your media, helping you optimize your content strategy. Understand which media resonates, at what times, and with which user segments.",
        "Leverage machine learning-powered recommendations to enhance the effectiveness of your media content and boost user engagement across your platform."
      ]
    }
]

  return (
    <div className="developpers-section">
      <div className="developpers-header">
        <h2 className="section-title">
          For <span className="title-highlight">Developers</span>
        </h2>
        <p className="section-subtitle">
          Powerful Tools, Seamless Integration, Global Reach
        </p>
      </div>
      
      <div className="developpers-grid">
        {developerSections.map((section, index) => (
          <div key={index} className="developpers-card">
            <div className="developpers-icon-container">
              <i className={`fas ${section.icon}`}></i>
            </div>
            <div className="developpers-content">
              <h3 className="developpers-title">{section.title}</h3>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="developpers-paragraph">{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developpers;