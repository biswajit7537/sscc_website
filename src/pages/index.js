import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import CoursesProvided from '../sections/coursesProvided';
import CoreFacility from '../sections/coreFacility';
import Facilities from '../sections/facilities2';
import ExamPattern from '../sections/examPattern';
import About from '../sections/about';
import Achievers from '../sections/achievers';
import Gallery from '../sections/gallery';
import VstPattern from 'sections/vstPattern';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="S'S Career Care" />
        <Banner />
        <CoursesProvided />
        <Achievers />
        <CoreFacility />
        <Facilities />
        <ExamPattern />
        <VstPattern />
        <Gallery />
        {/* <About /> */}
      </Layout>
    </ThemeProvider>
  );
}
