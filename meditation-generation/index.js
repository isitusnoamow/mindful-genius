import { createCompletion } from "./gpt/createCompletion.js";
import { generateTextToSpeech } from "./tts/generateTts.js";
import { meditationPrompt } from "./utils/index.js"

import fs from 'fs';

export const generateMeditation = async (meditationTopic, meditationDuration) => {
    const meditationScript = await createCompletion(
        meditationPrompt(
            meditationTopic, 
            meditationDuration
        )
    )

    const meditationNarration = await generateTextToSpeech(meditationScript)

    fs.writeFile(`output.mp3`, meditationNarration, 'binary', err => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('File has been created');
    }); 
}




