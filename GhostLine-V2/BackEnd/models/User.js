const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  interests: { type: [String], default: [] },
  friends: { type: [String], default: [] },
  blockedUsers: { type: [String], default: [] },
  allowFriendRequests: { type: Boolean, default: true },
  allowMediaSharing: { type: Boolean, default: true },
  allowVoiceNotes: { type: Boolean, default: true },
  storeChatHistory: { type: Boolean, default: true },
  socketId: { type: String },
  location: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);