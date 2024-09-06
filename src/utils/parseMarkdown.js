const parseSection = (section) => {
  const topicMatches = section.match(/#(.*)/g) || [];
  
  return topicMatches
    .map(topic => {
      const topicTitle = topic.replace(/#/g, '').trim();
      
      // Regex pattern to capture the topic's speaker and content
      const regexPattern = `#${topicTitle}.*?\\[speaker\\](.*?)\\[content\\]([\\s\\S]*?)\\[endofcontent\\]`;
      const regex = new RegExp(regexPattern, 's');
      
      const topicFlattend = section.replace(/\n/, '');
      const topicValue = topicFlattend.match(regex);

      // Return only if topicValue is valid (not null or undefined)
      if (topicValue) {
        return {
          title: topicTitle,
          speaker: topicValue[1]?.trim() || 'Unknown Speaker',
          content: topicValue[2]?.trim() || 'No Content'
        };
      }

      return null;  // Explicitly return null for invalid topics
    })
    .filter(Boolean);  // Filter out null and undefined
};

export async function parseMarkdown(markdown) {
  const result = {};

  const daySections = markdown.split(/\[Day\]/).filter(Boolean);

  daySections.forEach(daySection => {
    // Extract the day name, e.g., "Day 1"
    const dayNameMatch = daySection.match(/(Day \d+)/);
    const dayName = dayNameMatch ? dayNameMatch[1].trim() : null;

    // Extract the calendar date
    const calendarMatch = daySection.match(/\[Calendar\](.*)/);
    const calendar = calendarMatch ? calendarMatch[1].trim() : null;

    // Parse the topics in the current day section
    const topics = parseSection(daySection);

    // Add day to result only if dayName and calendar are valid and topics exist
    if (dayName && calendar && topics.length > 0) {
      result[dayName] = {
        date: calendar,
        topics
      };
    }
  });

  return result;
}