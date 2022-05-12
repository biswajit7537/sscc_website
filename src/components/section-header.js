import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, slogan, isWhite }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1,
        }}
        data-aos="flip-up" data-aos-duration="500" data-aos-offset="400" data-aos-delay="30" data-aos-easing="ease-in-out-sine"
      >
        {slogan}

      </Text>
      <Heading
        as="h2"
        sx={{
          variant: 'sectionHeader.title',
          color: isWhite ? 'white' : 'heading',
        }}
        data-aos="zoom-in" data-aos-duration="500" data-aos-offset="100" data-aos-delay="30" data-aos-easing="ease-in-out-sine"
      >
        {title}
      </Heading>

    </Box>
  );
}
