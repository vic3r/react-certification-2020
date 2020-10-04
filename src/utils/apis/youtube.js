import axios from 'axios';

const KEY = process.env.REACT_APP_YT_API_KEY;

const searchVideos = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 26,
    key: KEY,
  },
});

export { searchVideos };
