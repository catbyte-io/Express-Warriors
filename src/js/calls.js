import axios from 'axios';

import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.CAT_API_KEY;

// Define URL parts
axios.defaults.baseURL = "https://api.thecatapi.com/v1/"
axios.defaults.headers.common['x-api-key'] = apiKey;


// Warrior cats character data
const characters = [
  { name: 'Fireheart', link: '/fireheart', breed: 'Abyssinian'},
  { name: 'Bluestar', link: '/bluestar', breed: 'Russian_Blue'},
  { name: 'Graystripe', link: '/graystripe', breed: 'Maine_Coon'}
];

async function getBreed(breed) {
    try {
        const response = await axios.get(
            '/breeds',
            { params: {
                breed: breed,
                limit: 10,
            }}
        )
        return response.data;
    } catch (error) {
        console.error('There was an error fetching breed data');
    }
};

async function searchImagesByBreed(breed) {
    try {
        const response = await axios.get(
            'images/',
            { params: {
                breed: breed,
                limit: 10,
            }}
        );
        return response.data;
    } catch (error) {
        console.error('There was an error fetching cat images');
    }
};

export { characters };
export { getBreed };
export { searchImagesByBreed };
