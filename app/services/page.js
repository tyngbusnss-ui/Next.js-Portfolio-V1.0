import React from 'react';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'Web Development',
    description: 'Creating responsive and efficient web applications.'
  },
  {
    title: 'Graphic Design',
    description: 'Crafting stunning visuals for your brand.'
  },
  {
    title: 'SEO Optimization',
    description: 'Improving your website visibility on search engines.'
  },
  {
    title: 'Content Creation',
    description: 'Producing high-quality content for your target audience.'
  }
];

const ServicesPage = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map(({ title, description }) => (
          <ServiceCard key={title} title={title} description={description} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;