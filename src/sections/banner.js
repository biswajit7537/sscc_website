/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import BannerImg from 'assets/sscc_result_pic.jpg';
import SsccGateImg from 'assets/ssccGateImg.jpg'

const data = {
  subTitle: 'Transport',
  title: 'Trust Worthy Institute to Care the Career',
  description:
    'SSCAREERS CARE PVT. LTD. is a premier coaching institute in Bhubaneswar near College of Basic Science and Humanities. Highly experienced professional faculties having Innovative teaching style to boost up the students',
  btnName: 'Since 21 year',
  btnURL: '#',
};

export default function Banner() {
  return (
    <section sx={styles.section}>
      <marquee direction="left" height="40" width="100%" bgcolor="#070c46" sx={styles.headText}>Summer Course for class x appearing students starts from 16th may 2022 (Monday) along with Hostel and Transport facility, Hurry Up !!, Contact us at 9861075090, 9937873828 or send us an email at sscareercarebbsr12 @gmail.com   &nbsp; &nbsp; | |  &nbsp; &nbsp;  Vision Talent Search Exam ( <b>VTSE SSCC 2022</b>) was conducted on 3rd April 2022 . &nbsp; Special FEE benifits to VTSE SSCC - 2022 appeared students in class room courses 2022-23, 1st prize worth ₹4000, 2nd prize worth ₹2000, 3rd prize worth ₹1000, next 10 ranked ₹500 each students, participant certificate to all students.  </marquee>

      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" sx={styles.carasoul}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={BannerImg} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={SsccGateImg} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={BannerImg} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </Container>
      <a href="https://api.whatsapp.com/send?phone=919861075090&text=hello+i+am+interested+in+ss+career+care" sx={styles.float} target="_blank">
        <i className="fa fa-whatsapp" sx={styles.myfloat}></i>
      </a>
    </section>
  );
}

const styles = {
  headText: {
    color: "#fff44f",
    fontSize: '20px',

  },
  section: {
    pt: 4,
    pb: 4,
    backgroundColor: '#0E61DA',

  },
  carasoul: {
    pb: 5,
  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '>img': {
      position: 'relative',
      zIndex: 1,
      height: [110, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -170,
    right: -120,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },

  float: {
    position: 'fixed',
    width: '60px',
    height: '60px',
    bottom: '40px',
    right: '40px',
    backgroundColor: '#25d366',
    color: '#FFF',
    borderRadius: '50px',
    textAlign: 'center',
    fontSize: 30,
    boxShadow: '2px 2px 3px #999',
    zIndex: 100,
  },

  myfloat: {
    my: '16px',
  },

};
