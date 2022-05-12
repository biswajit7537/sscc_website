/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import StudyIcon from 'assets/studyIcon.svg';





const data = [
  {
    id: 1,
    imgSrc: StudyIcon,
    altText: 'Summer Course',
    title: 'Summer Course',
    recent: " (Starts from 16th may 2022)",
    text:
      'Class X Appearing Students',
  },
  {
    id: 2,
    imgSrc: StudyIcon,
    altText: '+2 Science',
    title: '+2 Science Integrated for CHSE',
    text:
      'PCMB , ELE , IT , ENG. , Alt ENG.',
  },
  {
    id: 3,
    imgSrc: StudyIcon,
    altText: 'CBSE - XI & XII',
    title: 'CBSE - XI & XII',
    text:
      'PCMB',
  },
  {
    id: 4,
    imgSrc: StudyIcon,
    altText: 'Crash Course',
    title: 'Crash Course',
    text:
      'JEE ADV. & MAIN, NEET, OUAT',
  },

];

export default function CoursesProvided() {

  return (
    <section sx={{ variant: 'section.keyFeature' }} id="courses">
      <Container>
        <SectionHeader
          title="courses"
        />
        <Grid sx={styles.grid}>
          {
            data.map((item) => (
              <FeatureCardColumn
                key={item.id}
                src={item.imgSrc}
                alt={item.altText}
                title={item.title}
                recent={item.recent}
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
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '25px 0',
      null,
      '30px 30px',
      '40px 40px',
      '20px',
      '40px 30px',
      '45px 80px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
    ],
  },
};
