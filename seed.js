// seed.js
const mongoose = require('mongoose');
const Activity = require('./models/Activity');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

const seedActivities = async () => {
  await connectDB();

  const activities = [
    {
      title: 'Cricket Match',
      description: 'Friendly cricket match with friends',
      location: 'City Stadium',
      dateTime: new Date('2025-05-10T15:00:00'),
    },
    {
      title: 'Movie Night',
      description: 'Watch the latest blockbuster',
      location: 'Downtown Cinema',
      dateTime: new Date('2025-05-12T19:00:00'),
    },
    {
      title: 'Football Match',
      description: 'Competitive football game',
      location: 'Sports Complex',
      dateTime: new Date('2025-05-15T17:00:00'),
    },
  ];

  await Activity.deleteMany({});
  await Activity.insertMany(activities);
  console.log('Activities seeded');
  process.exit();
};

seedActivities();