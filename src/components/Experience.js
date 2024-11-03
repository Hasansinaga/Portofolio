import React from 'react';

const experienceData = [
  {
    position: 'Studi Independen Web Dev',
    company: 'Infinite Learning',
    period: 'June - Present',
    description: [
      'Developed and maintained web applications using React.js and Node.js.',
      'Collaborated with a team to enhance the company’s online presence.',
      'Gained experience in agile development and problem-solving skills.',
    ],
  },
  {
    position: 'Teaching Assistant in English 1',
    company: 'Institut Teknologi Del',
    period: 'September - Present',
    description: [
      'Conducted tutorial sessions to reinforce course material and assist students with difficult concepts',
      'Reviewed and provided detailed feedback on student assignments to enhance their understanding and performance',
      'Facilitated discussions and answered student inquiries during office hours',
    ],
  },
  {
    position: 'Teaching Assistant in Probability and Statistics',
    company: 'Institut Teknologi Del',
    period: 'September - Present',
    description: [
      'Guided students in discrete mathematics and lab sessions',
    ],
  },
  {
    position: 'Bussiness and System Analyst',
    company: 'Wesclic Indonesia',
    period: 'September - Oktober 2024',
    description: [
      'Create system design',
    ],
  },
  {
    position: 'Assistant Community Service Program, Institute Technology Del',
    company: 'Institut Teknologi Del',
    period: 'Mei, 2024 - Aug, 2024',
    description: [
      'Part of creating learning modules',
      'Learning facilitator for Microsoft Word, Excel and Power Point',
    ],
  },
  {
    position: 'Teaching Assistant in Descrete Mathematics',
    company: 'Institut Teknologi Del',
    period: 'Agust 2023 - December 2023',
    description: [
      'Guided students in discrete mathematics and lab sessions.',
      'Helped students improve their understanding of fundamental concepts.',
      'Provided assistance with assignments and projects.',
    ],
  },
  // Add more experiences as needed
];

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2>My Experience</h2>
      <div className="timeline">
        {experienceData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-date">{item.period}</div>
            <div className="timeline-content">
              <h3>{item.position}</h3>
              <h4>{item.company}</h4>
              <ul>
                {item.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
