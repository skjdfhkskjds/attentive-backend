const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const User = require('../src/models/User');

const seedUser = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing users (optional, for a clean slate)
    await User.deleteMany({});
    console.log('Cleared existing users');

    // Create a test user
    const user = await User.create({
      email: 'seeduser@example.com',
      password: 'seedpassword123',
      name: 'Seed User'
    });

    console.log('User seeded successfully:', user);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding user:', error);
    process.exit(1);
  }
};

seedUser(); 