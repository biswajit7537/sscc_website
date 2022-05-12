/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Text, Image, Box } from 'theme-ui';

export default function TeamCard({ src, altText, comment }) {
  return (
    <Box sx={styles.card} data-aos="flip-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="70" data-aos-easing="ease-in-out-sine">
      <Text className="info__designation" sx={styles.infoWrapper.designation}>{comment}</Text>
      <Image src={src} alt={altText} sx={styles.memberThumb} />
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    py: [0, null, 4, 5, 6],
    px: [2, null, 6, 7],
    transition: 'ease-in-out 0.4s',
    borderRadius: '8px',
    position: 'relative',

  },

  memberThumb: {
    width: ['140px', '150px', '170px', null, null, '200px'],
    height: ['170px', '180px', '200px', null, null, '230px'],
    flexShrink: 0,


  },
  infoWrapper: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: "#16A085",
    borderRadius: "30px",
    padding: 2,
    mt: [1, null, 2],
    name: {
      fontSize: [1, 2, 3, null, null, 4],
      fontWeight: 'bold',
      lineHeight: [1.75, 1.34],
      color: "#ffffff",
      mb: 1,
    },
    rank: {
      fontSize: [1, 2, 3, null, null, 4],
      fontWeight: 'bold',
      lineHeight: [0.7, 0.85],
      color: "#F1C40F",
      mb: 1,
    },
    designation: {
      fontSize: ['12px', null, null, 2],
      fontWeight: 500,
      lineHeight: 'heading',
      color: '#FDEBD0',
      mb: 1,
    },
  },
  socialShare: {
    position: ['relative', null, 'absolute'],
    right: [0, null, 6, null, 4, 6],
    bottom: [0, null, '18px', 5],
    width: ['100%', null, 'auto'],
    display: 'flex',
    flexDirection: ['row', null, 'column'],
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.25s',
    opacity: [1, null, 0],
    pt: 2,
    a: {
      fontSize: [0, 1, null, 2],
      color: ['text', null, 'primary'],
      lineHeight: '1em',
      my: [0, null, '-2px'],
      px: 1,
      transition: 'all 0.25s',

    },
  },
};
