/** @jsx jsx */
import { jsx, Image, Box, Text } from 'theme-ui';
import StarIcon from "../assets/studyIcon.svg";

export default function FeatureCardColumn({
  src,
  altText = 'default alt text',
  title,
  recent,
  text,
}) {
  return (
    <Box sx={styles.borders} data-aos="slide-up" data-aos-duration="500" data-aos-offset="120" data-aos-delay="30" data-aos-easing="ease-in-out-sine">
      <Box sx={styles.card}>
        {/* <Image src={src} altText={altText} sx={styles.img} /> */}
        <Image src={StarIcon} altText={altText} sx={styles.img} />

        <Box sx={styles.wrapper}>
          <h1 sx={styles.wrapper.title}>{title}<span sx={styles.recent}>{recent}</span></h1>
          <Text sx={styles.wrapper.subTitle}>{text}</Text>
        </Box>

      </Box>
    </Box>
  );
}

const styles = {
  recent: {
    color: '#E74C3C'
  },
  borders: {
    borderRadius: '15px 40px 15px 40px',
    background: 'linear-gradient(to right, red, purple)',
    padding: 1,
  },
  card: {
    display: 'flex',
    alignItems: ['center', 'center'],
    flexDirection: 'column',
    mb: -1,
    textAlign: ['center', null, 'center'],
    px: [4, null, 0],
    boxShadow: '1px 1px 7px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '15px 40px 15px 40px',
    background: "#fff"

  },
  img: {
    height: "70px",
    mx: ['auto', null, 0],
    ml: ['auto', null, '-13px'],
    mb: -2,
    width: ['40px', null, null, '40px', null, 'auto'],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    padding: 5,
    flexDirection: 'column',
    title: {
      fontSize: 6,
      color: '#332FD0',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    subTitle: {
      fontSize: 2,
      color: '#4D77FF',
      fontWeight: 450,
      lineHeight: '1.7',
    },
  },
};







