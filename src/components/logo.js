/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={
        {
          variant: 'links.logo',
          display: 'flex',
          cursor: 'pointer',
          mr:15,
        }
      }
      {...rest}
    >
      <Image src={src} alt="S'S Career Care" sx={styles.imgSize} />
      
    </Link>
  );
}


const styles = {
  imgSize: {
    height: "80px",
       '@media screen and (max-width: 600px)': {
      height: '60px',
    },
          '@media screen and (max-width: 300px)': {
      height: '70px',
    }
  },
  
}
