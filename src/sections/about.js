/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';

import Member1 from 'assets/achieversImg/student1.png';
import Member2 from 'assets/achieversImg/student1.png';


const data = [
    {
        id: 1,
        imgSrc: Member1,
        altText: 'image',
        title: 'demo',
        designation: 'CEO and Founder',
        comment: 'The mission of SS Career Care is to support undergraduate students in achieving their academic goals through a range of both personalized and group discussions that foster self-regulated learning, enhance academic skills, and create opportunities for leadership and continued development.',

    },
    {
        id: 2,
        imgSrc: Member2,
        altText: 'image',
        title: 'demo',
        designation: 'Founder',
        comment: 'The mission of SS Career Care is to support undergraduate students in achieving their academic goals through a range of both personalized and group discussions that foster self-regulated learning, enhance academic skills, and create opportunities for leadership and continued development.',

    },

];

export default function About() {
    return (
        <section id="aboutus">
            <Container>
                <SectionHeader
                    slogan="ABOUT US"
                    title="We believe in quality education"
                />
                <Grid sx={styles.grid}>
                    {
                        data.map((item) => (
                            <TeamCard
                                key={item.id}
                                comment={item.comment}
                                src={item.imgSrc}
                                altText={item.altText}
                                title={item.title}
                                designation={item.designation}

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
        mb: [5, null, -6, null, -4],
        gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
        gridTemplateColumns: [
            'repeat(1,1fr)',
            null,
            'repeat(2,1fr)',
            null,

        ],
    },
};
