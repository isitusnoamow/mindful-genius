export const meditationPrompt = (
    meditationTopic, 
    meditationDuration
) => {
    return (
        `Generate a script for a ${meditationDuration} minute meditation about ${meditationTopic}`
    )
}