// Load environment variables
require('dotenv').config();

// Export variables
module.exports = {
    apiKey: process.env.CAT_API_KEY
};