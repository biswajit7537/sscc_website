/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';

export default function FeatureCard({
  src,
  altText = 'default alt text',
  title,
  text,
}) {
  return (
    <Box sx={styles.card} data-aos="flip-up" data-aos-duration="1000" data-aos-offset="300" data-aos-delay="70" data-aos-easing="ease-in-out-sine">
      <Image src={src} altText={altText} sx={styles.img} />
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>

    </Box>

  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    mb: -1,
    padding: 5,
    boxShadow: 'rgba(240, 46, 170, 0.4)-5px 5px, rgba(240, 46, 170, 0.3)-10px 10px, rgba(240, 46, 170, 0.2)-15px 15px, rgba(240, 46, 170, 0.1)-20px 20px, rgba(240, 46, 170, 0.05)-25px 25px',
    transition: 'all 0.3s',
    borderRadius: '15px',
    background: '#fff',
  },

  img: {
    width: ['70px', null, null, '80px', '90px', '50px'],
    height: 'auto',
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: -2,
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [2, 4],
      color: '#503BFF',
      lineHeight: 1.5,
      fontWeight: 800,
      fontFamily: "Josefin Sans, sans-serif",
      mb: ['10px', null, '15px'],
    },

    subTitle: {
      fontSize: [1, '15px'],
      fontWeight: 400,
      lineHeight: '1.9',
    },
  },
};
