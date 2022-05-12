/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import { PhoneOutgoingIcon } from '@heroicons/react/solid'
import LogoDark from 'assets/ssccLogo.png';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

export default function Header({ className }) {
  return (
    <>
      <header sx={styles.header} className={className} id="header">

        <Container sx={styles.container} >
          <Logo src={LogoDark} />
          <h2 sx={styles.logoText}>SSCAREERS CARE</h2>
          <Flex as="nav" sx={styles.nav}>
            {menuItems.map((menuItem, i) => (
              <Link
                activeClass="active"
                to={menuItem.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {menuItem.label}
              </Link>
            ))}
          </Flex>
          <PhoneOutgoingIcon sx={styles.icon} /><h5 sx={styles.phno}>9861075090</h5>
          <MobileDrawer />
        </Container>

      </header>
    </>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  icon: {
    height: "30px",
    color: 'primary',

  },
  headText: {
    color: "#FFFFFF",
    fontSize: '20px',

  },
  logoText: {
    color: '#0E61DA',
    '@media screen and (max-width: 600px)': {
      fontSize: '16px',

    },
    '@media screen and (max-width: 450px)': {
      display: "none",
    }
  },
  phno: {
    color: 'primary',
    padding: 2,
    '@media screen and (max-width: 600px)': {
      fontSize: '16px',
      padding: 0,

    },
    '@media screen and (max-width: 450px)': {
      fontSize: '16px',
      padding: 0,
    }
  },
  header: {
    color: '0E61DA',
    fontWeight: 'body',
    py: 2,
    width: '100%',
    top: 4,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      top: 0,
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
}






