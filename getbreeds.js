import axios from 'axios';

const config = require('./config');

const apiKey = config.apiKey;

// Define URL parts
axios.defaults.baseURL = "https://api.thecatapi.com/v1/"
axios.defaults.headers.common['x-api-key'] = apiKey;

// Map characters to breed
const characterToBreed = {
  'fireheart': 'Abyssinian'
};

async function getBreed(breed) {
    try {
        const response = await axios.get(
            '/breeds',
            { params: {
                breed: breed,
            }}
        )
        return response.data;
    } catch (error) {
        console.error('There was an error fetching breed data');
    }
};

const searchImagesByBreed = async (breed)
    try {
        const response = await axios.get();
        return response.data;
    } catch (error) {
        console.error('There was an error fetching cat images');
    };
