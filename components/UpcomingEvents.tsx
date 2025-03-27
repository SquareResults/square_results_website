import React from 'react';
import { motion } from 'framer-motion';
import styles from './UpcomingEvents.module.css';

const events = [
  {
    title: "Tech Conference 2025",
    date: "2025-11-01",
    time: "10:00 AM",
    type: "Remote",
    description: "Join us for a day of insightful talks and networking with industry leaders in technology.",
  },
  {
    title: "HR Summit 2025",
    date: "2025-12-15",
    time: "2:00 PM",
    type: "In-person",
    description: "A comprehensive summit focusing on the latest trends and challenges in human resources.",
  },
  {
    title: "AI & Machine Learning Workshop",
    date: "2025-01-20",
    time: "11:00 AM",
    type: "Remote",
    description: "An interactive workshop on the latest advancements in AI and machine learning.",
  },
  {
    title: "Startup Pitch Night",
    date: "2025-02-10",
    time: "6:00 PM",
    type: "In-person",
    description: "Watch startups pitch their ideas to a panel of investors and industry experts.",
  },
  {
    title: "Cybersecurity Conference",
    date: "2025-03-05",
    time: "9:00 AM",
    type: "Remote",
    description: "Learn about the latest trends and best practices in cybersecurity from top experts.",
  },
  {
    title: "Marketing Strategies 2024",
    date: "2025-04-15",
    time: "1:00 PM",
    type: "In-person",
    description: "A deep dive into the most effective marketing strategies for the upcoming year.",
  },
];

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const UpcomingEvents = () => {
  return (
    <section className="py-24 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 font-antonio"
        >
          Upcoming Events
        </motion.h2>

        <div className={`scroll-container ${styles['scroll-container']}`}>
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 min-w-[300px] flex flex-col justify-between" // Adjust min-width as needed
            >
              <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
              <p className="text-gray-600 mb-2">{formatDate(event.date)}</p>
              <p className="text-gray-600 mb-2">{event.time}</p>
              <p className="text-gray-600 mb-4">{event.type}</p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <a href="#" className="text-blue-500 hover:underline">+EventDetails</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;