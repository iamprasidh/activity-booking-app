const Activity = require('../models/Activity');

exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (error) {
    console.error('Error in getActivities:', error); // Add this for debugging
    res.status(500).json({ message: 'Server error' });
  }
};