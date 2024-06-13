// models/CompanyProfile.js

const mongoose = require('mongoose');

const companyProfileSchema = new mongoose.Schema({
  companyLogo: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  companyId: {
    type: String,
    required: true,
    unique: true,
  }
});

const CompanyProfile = mongoose.model('CompanyProfile', companyProfileSchema);

module.exports = CompanyProfile;
