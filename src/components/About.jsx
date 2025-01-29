import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import chef1 from '/assets/chef1.jpg';
import chefheader from '/assets/chefonly.jpg';
import chef2 from '/assets/chef2.jpg';
import chef3 from '/assets/chef4.jpg';
function About() {
  const teamChefs = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Master Chef',
      image : chef1
    },
    {
      id: 2,
      name: 'Alain Ducasse',
      role: 'Master Chef',
      image : chef2
    },
    {
      id: 1,
      name: 'Alen Smith',
      role: 'Master Chef',
      image : chef3
    },
  ]
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="px-4 md:px-8 lg:px-20 mt-10 lg:mt-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Discover the Joy of Cooking</h1>
          <p className="text-gray-600 text-base md:text-lg mb-10">
            Welcome to Foodieland, where we bring delicious recipes and culinary inspiration right to your kitchen.
          </p>
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-20 py-16 bg-[#E7F9FD]">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Foodieland, we believe that everyone can be a chef in their own kitchen. Our mission is to make cooking accessible, enjoyable, and delicious for home cooks of all skill levels.
            </p>
            <p className="text-gray-600">
              We curate and create recipes that are both simple to follow and guaranteed to impress, helping you bring restaurant-quality meals to your dining table.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src={chefheader} 
              alt="Cooking passion" 
              className="rounded-full shadow-lg w-full h-96"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-4 md:px-8 lg:px-20 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our passionate team of food enthusiasts, professional chefs, and content creators work together to bring you the best culinary experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 max-w-6xl mx-auto">
          {teamChefs.map((member) => (
            <div key={member.id} className="text-center">
              <img 
                src={member.image} 
                alt={`Team member ${member?.name}`}
                className="object-cover rounded-full  w-72 h-72 mx-auto mb-4"
              />
              <h3 className="font-bold text-xl mb-2">{member?.name}</h3>
              <p className="text-gray-600">{member?.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-20 py-16 bg-[#E7F9FD]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-gray-600">hello@foodieland.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <img src="/assets/fb.png" alt="Facebook" className=" " />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <img src="/assets/twitter.png" alt="Twitter" className=" " />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <img src="/assets/insta.png" alt="Instagram" className=" " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;