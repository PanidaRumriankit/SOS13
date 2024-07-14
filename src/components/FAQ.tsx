import React, { useState } from 'react';
import './FAQ.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Navbars from './Navbars';
import Footer from './Footer';
import Box from '@mui/material/Box';
import starburst from '../assets/star_burst.mp4';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

interface FAQItem {
  section: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    section: 'About SKE',
    question: 'What is SKE?',
    answer: 'Software and Knowledge Engineering or SKE (pronounce "ski") for short, is a branch in a Computer Engineering, Kasetsart University. Our branch is also a part of the international Undergraduate Program (IUP).'
  },
  {
    section: 'About SKE',
    question: 'What are the required courses for this branch?',
    answer: 'For freshmen it is required to learn the general engineering courses such as "Engineering Mathematics I", "General Physics I" and "Physics Lab I". You will also need to apply for essential Computer Engineering courses such as, "Computer Programming I" and "Discrete Mathematics and Algebra". For Computer Programming I, you will get to learn the fundamentals of programming with Python. For Discrete Mathematics and Algebra, you will learn about the basic of discrete mathematics and algebra, which is essential for programming.'
  },
  {
    section: 'About SKE',
    question: 'Are the courses difficult?',
    answer: 'The difficulty of each course varies on each learner, it depends on whether you have basics or not. You might need to adjust and may have to work harder than others, also try to learn by yourself and practice doing exercises.'
  },
  {
    section: 'About SKE',
    question: 'Is a computer required? What about specifications?',
    answer: 'A computer is required though it is REALLY recommended to have a laptop. Portable computers will make your life easier and should always be taken to university. For Windows, you should pick a laptop with medium specs such as, Core i5 or Ryzen 5 CPU, 8GB RAM, 512 HDD. Make sure to get the latest generation of CPU to have faster performance. For Mac, it is recommended to get at least M1 CPU.'
  },
  {
    section: 'About SKE',
    question: 'When does the course start and what to prepare?',
    answer: 'The first semester\'s start date is 5th August. Though there will be events before that day like SKE tutorial camp'
  },
  {
    section: 'About SOS Camp',
    question: 'What is SOS Camp?',
    answer: 'SOS Camp is a preparation camp for freshmen to gain knowledge about programming. It is also a camp to help you prepare for the first semester. The camp will be held on 18th-21th July.'
  },
  {
    section: 'About SOS Camp',
    question: 'What programming languages will be covered in the camp?',
    answer: 'This camp will cover Python.'
  },
  {
    section: 'About SOS Camp',
    question: 'Do I need prior programming experience to attend the camp?',
    answer: 'No, you do not need any prior programming experience to attend the camp. The camp will start from the very basics of programming.'
  },
  {
    section: 'Programming',
    question: 'Will the camp cover both theoretical and practical aspects of programming?',
    answer: 'Yes, the camp will cover both theoretical and practical aspects of programming. The camp will start with a lecture and then you will be given exercises to practice what you have learned.'
  },
  {
    section: 'Programming',
    question: 'Can I bring my own laptop or do I need to use university computers?',
    answer: 'You can bring your own laptop. However, if you do not have a laptop, you can use the university computers.'
  },
  {
    section: 'Programming',
    question: 'What software do I need to install on my laptop?',
    answer: 'You will need to install Python 3.9.6 and PyCharm Community Edition 2021.1.3.'
  },
  {
    section: 'Ichi',
    question: 'Ichi?',
    answer: 'Ichi.'
  }
];

const FAQ: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const current_page = "/FAQ";

  const groupedFAQs = faqItems.reduce((groups: Record<string, FAQItem[]>, item) => {
    (groups[item.section] = groups[item.section] || []).push(item);
    return groups;
  }, {});

  return (
    <Box id="FAQ" className="pt-16">
      <video autoPlay loop muted className="background-video">
        <source src={starburst} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbars page={current_page} />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: 4, sm: 8 },
          pb: { xs: 4, sm: 8 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="wrapper">
          <h1>Frequently Asked Questions</h1>
          {Object.keys(groupedFAQs).map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2>{section}</h2>
              {groupedFAQs[section].map((item, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === `${section}-${index}`}
                  onChange={handleChange(`${section}-${index}`)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${section}-${index}-content`}
                    id={`${section}-${index}-header`}
                  >
                    <Typography>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </Box>
  );
};

export default FAQ;
