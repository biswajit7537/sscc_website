/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import FooterLogo from 'assets/ssccLogo_footer.jpg';

export default function Footer() {
  return (
    <>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.8337667832366!2d85.81526141537776!3d20.26572781876205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a771d0f96acf%3A0xb51371165fc8c47b!2sSS%20Career%20Care!5e0!3m2!1sen!2sin!4v1649841039990!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" sx={styles.mapStyle} data-aos="slide-up" data-aos-duration="1000" data-aos-offset="180" data-aos-delay="50" data-aos-easing="ease-in-out-sine"></iframe>


      <footer sx={styles.footer}>
        <Container>
          <Box sx={styles.footer.footerBottomArea}>
            <Link path="/">
              <Image src={FooterLogo} alt="logo" sx={styles.imgSize} />
            </Link>
            <Box sx={styles.footer.menus}>
              <nav>
                {
                  data.menuItem.map((item, i) => (
                    <Link
                      path={item.path}
                      key={i}
                      label={item.label}
                      sx={styles.footer.link}
                    />
                  ))
                }
              </nav>
            </Box>
          </Box>
          <Text sx={styles.footer.footerAddress}>
            Plot Number A17/13, Near LIC Colony, Surya Nagar,<br /> Unit VII, Bhubaneswar, 751003
          </Text>
          <Text sx={styles.footer.footerBottomArea}>
            Ⓒ SSCAREERS CARE PVT. LTD.
          </Text>
        </Container>

      </footer>
    </>
  );
}

const styles = {
  mapStyle: {
    border: 0,
    mt: 3,
    pt: 5
  },
  imgSize: {
    height: "80px",
    '@media screen and (max-width: 600px)': {
      height: '60px',
    },
    '@media screen and (max-width: 300px)': {
      height: '70px',
    }
  },
  footer: {
    backgroundColor: '#0E61DA',
    footerBottomArea: {
      color: "#fff",
      // borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [3, null, 4],
      pb: ['10px', null, '50px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    footerAddress: {
      color: "#28FFBF",
      // borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [3, null, 4],
      pb: ['10px', null, '50px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: '#fff',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },
};
