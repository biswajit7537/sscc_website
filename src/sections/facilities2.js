/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import FeatureCard from 'components/feature-card.js';

import assignmentIcon from 'assets/assignmentIcon.svg';

import syllabusIcon from 'assets/syllabusIcon.svg';
import classRoomIcon from 'assets/classRoomIcon.svg';
import transportIcon from 'assets/transportIcon.svg';


const data = [
  {
    id: 1,
    imgSrc: assignmentIcon,
    altText: 'assignments',
    title: 'Topic wise discussion with assignment materials for each subject',
  },
  {
    id: 2,
    imgSrc: classRoomIcon,
    altText: 'ac class room',
    title: 'Well furnished AC classroom with web camera and computer lab',

  },
  {
    id: 3,
    imgSrc: syllabusIcon,
    altText: 'Syllabus completion',
    title: 'We complete all the syllabus of each subject on time',

  },
  {
    id: 4,
    imgSrc: transportIcon,
    altText: 'Transport',
    title: 'Transport facility available',

  },

];

export default function Facilities() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <Grid sx={styles.grid}>
          {
            data.map((item) => (
              <FeatureCard
                key={item.id}
                src={item.imgSrc}
                alt={item.altText}
                title={item.title}
                text={item.text}
              />
            ))
          }
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
