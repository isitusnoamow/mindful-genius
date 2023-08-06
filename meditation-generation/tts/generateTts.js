import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config();

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { config } from 'dotenv';  

const __filename = fileURLToPath(import.meta.url); 
const __dirname = dirname(__filename);

config({ path: `${__dirname}/../.env` });

export const generateTextToSpeech = async (inputText) => {
  const API_KEY = process.env.ELEVENLABS_API_KEY;
  const VOICE_ID = 'AZnzlk1XvdvUeBnXmlld';

  const options = { 
    method: 'POST',
    url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
    headers: {
      accept: 'audio/mpeg', 
      'content-type': 'application/json', 
      'xi-api-key': `${API_KEY}`,
    },
    data: {
      text: inputText, 
    },
    responseType: 'arraybuffer', 
  };

  const speechDetails = await axios.request(options);

  return speechDetails.data;
};