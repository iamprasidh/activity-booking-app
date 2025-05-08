const Booking = require('../models/Booking');
const Activity = require('../models/Activity');
const { validateBooking } = require('../utils/validate');

exports.bookActivity = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const { activityId } = req.body;

  try {
    const activity = await Activity.findById(activityId);
    if (!activity) return res.status(404).json({ message: 'Activity not found' });

    const booking = new Booking({
      user: req.user.id,
      activity: activityId,
    });

    await booking.save();
    res.status(201).json({ message: 'Activity booked successfully', booking });
  } catch (error) {
    console.error('Error in bookActivity:', error); 
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('activity');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};