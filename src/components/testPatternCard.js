

import { Box, Heading, Text } from 'theme-ui';
import ArrowOdd from 'assets/arrowOdd.svg';
import ArrowEven from 'assets/arrowEven.svg';
import ExamIcon from 'assets/examIcon.svg';

export default function TestPatternCard({ item }) {
    return (
        <Box sx={styles.card} data-aos="flip-left" data-aos-duration="1000" data-aos-offset="300" data-aos-delay="70" data-aos-easing="ease-in-out-sine">
            <Box sx={styles.iconBox}>
                <img src={ExamIcon} />
            </Box>
            <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
            </Box>
        </Box>

    );
}


const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        textAlign: ['center', null, 'left'],
        width: ['100%', '80%', '100%'],
        mx: ['auto'],
        px: [4, null, null, 0],
        '&::before': {
            position: 'absolute',
            content: '""',
            top: 0,
            left: [0, null, null, null, null, 72, null, 90],
            backgroundRepeat: `no-repeat`,
            backgroundPosition: 'center center',
            width: 215,
            height: 60,
            '@media screen and (max-width:1220px)': {
                display: 'none',
            },
        },

    },

    iconBox: {
        width: ['60px', null, '70px', null, null, '80px'],
        height: ['60px', null, '70px', null, null, '80px'],
        flexShrink: 0,
        borderRadius: [15, null, 23, null, null, 30],
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        mb: [5, null, null, null, null, 6],
        mx: ['auto', null, 0],
        fontSize: [6, null, 7, null, null, '30px'],
        fontWeight: 700,
        justifyContent: 'center',
        color: '#234582',
        padding: 2,
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        mt: '-5px',
        title: {
            fontSize: [3, null, 4, null, null, 5],
            color: '#FFE61B',
            fontFamily: 'Rubik',
            fontWeight: 800,
            lineHeight: [1.6, null, null, null, null, 1.55],
            pr: [0, null, null, null, null, 2],
            mb: [1, 2],
            letterSpacing: 2,
        },

        subTitle: {
            fontSize: 1,
            fontWeight: 400,
            lineHeight: [1.85, null, null, 1.9, 2],
            color: 'white',
            opacity: 0.75,
            pr: [0, null, null, null, null, 5],
        },
    },
};
