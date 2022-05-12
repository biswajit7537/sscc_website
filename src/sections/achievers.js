/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';

import Member1 from 'assets/achieversImg/student1.png';
import Member2 from 'assets/achieversImg/student2.png';
import Member3 from 'assets/achieversImg/student3.png';
import Member4 from 'assets/achieversImg/student4.png';
import Member5 from 'assets/achieversImg/student5.png';
import Member6 from 'assets/achieversImg/student6.png';

import Member7 from 'assets/achieversImg/student7.png';
import Member8 from 'assets/achieversImg/student8.png';
import Member9 from 'assets/achieversImg/student9.png';
import Member10 from 'assets/achieversImg/student10.png';
import Member11 from 'assets/achieversImg/student11.png';
import Member12 from 'assets/achieversImg/student12.png';
import Member13 from 'assets/achieversImg/student13.png';
import Member14 from 'assets/achieversImg/student14.png';
import Member15 from 'assets/achieversImg/student15.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'image',
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'image',

  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'image',

  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'image',

  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'image',

  },
  {
    id: 6,
    imgSrc: Member6,
    altText: 'image',

  },
  {
    id: 7,
    imgSrc: Member7,
    altText: 'image',

  },
  {
    id: 8,
    imgSrc: Member8,
    altText: 'image',

  },
  {
    id: 9,
    imgSrc: Member9,
    altText: 'image',

  },
  {
    id: 10,
    imgSrc: Member10,
    altText: 'image',

  },
  {
    id: 11,
    imgSrc: Member11,
    altText: 'image',

  },
  {
    id: 12,
    imgSrc: Member12,
    altText: 'image',

  },
  {
    id: 13,
    imgSrc: Member13,
    altText: 'image',

  },
  {
    id: 14,
    imgSrc: Member14,
    altText: 'image',

  },
  {
    id: 15,
    imgSrc: Member15,
    altText: 'image',

  },
];

export default function Achievers() {
  return (
    <section id="achievements">
      <Container>
        <SectionHeader

          title="MEDICAL ACHIEVERS"
        />
        <Grid sx={styles.grid}>
          {
            data.map((item) => (
              <TeamCard
                key={item.id}
                src={item.imgSrc}
                altText={item.altText}
                title={item.title}
                designation={item.designation}
                rank={item.rank}
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
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
