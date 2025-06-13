import React from 'react';
import { Target, Users, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To provide affordable, high-quality protein-rich foods that support healthy lifestyles and fitness goals for everyone in Pakistan.'
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'We believe in building a strong community of health-conscious individuals who support each other in their fitness journeys.'
  },
  {
    icon: Award,
    title: 'Quality Commitment',
    description: 'Every product is carefully sourced and tested to ensure the highest standards of quality, purity, and nutritional value.'
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'We are passionate about promoting health and wellness through proper nutrition and affordable access to quality protein.'
  }
];

const team = [
  {
    name: 'Ahmad Hassan',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Fitness enthusiast with 10+ years in nutrition industry'
  },
  {
    name: 'Fatima Khan',
    role: 'Head of Quality',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Certified nutritionist ensuring product excellence'
  },
  {
    name: 'Ali Raza',
    role: 'Operations Manager',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Expert in supply chain and customer satisfaction'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-orange-25 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              About <span className="text-orange-600">Thrivo</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We're on a mission to make high-quality, protein-rich nutrition accessible and affordable for everyone in Pakistan.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Thrivo was born from a simple observation: quality protein supplements were either too expensive or not readily available in Pakistan. As fitness enthusiasts ourselves, we understood the struggle of finding affordable, high-quality protein sources.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                In 2023, we decided to change that. We partnered with trusted suppliers and focused on creating a direct-to-consumer model that eliminates unnecessary markups. Our goal is simple: provide the best protein-rich foods at prices that don't break the bank.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Today, we're proud to serve thousands of customers across Pakistan, helping them achieve their fitness goals with our carefully curated selection of protein-rich foods.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 lg:mt-0"
            >
              <img
                className="rounded-2xl shadow-xl"
                src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our team working"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-orange-100 text-orange-600">
                    <value.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">{value.title}</h3>
                <p className="mt-2 text-base text-gray-500">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The passionate people behind Thrivo
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative">
                  <img
                    className="mx-auto h-40 w-40 rounded-full object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">{member.name}</h3>
                <p className="mt-1 text-base text-orange-600">{member.role}</p>
                <p className="mt-2 text-sm text-gray-500">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: '5000+', label: 'Happy Customers' },
              { number: '2', label: 'Premium Products' },
              { number: '50+', label: 'Cities Served' },
              { number: '99%', label: 'Customer Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-extrabold text-white">{stat.number}</div>
                <div className="mt-2 text-lg text-orange-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}