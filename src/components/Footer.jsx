import React from 'react';
import { Container, Grid, Typography, Box, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'black',
        color: 'white',
        p: 3,
        width: '100%',
        marginLeft: -5, // if needed for design alignment, else you can remove it
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* LuxeGems Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="white" gutterBottom>
              LuxeGems
            </Typography>
          </Grid>

          {/* About Us Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="white" gutterBottom>
              About us
            </Typography>
            <Typography variant="body2" color="white">
              Lorem ipsum
            </Typography>
          </Grid>

          {/* Explore Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Explore
            </Typography>
            <Box>
              <Box mb={1}>
                <Link href="#" variant="body2" sx={{ color: 'white' }}>
                  Watches
                </Link>
              </Box>
              <Box mb={1}>
                <Link href="#" variant="body2" sx={{ color: 'white' }}>
                  Necklaces
                </Link>
              </Box>
              <Box mb={1}>
                <Link href="#" variant="body2" sx={{ color: 'white' }}>
                  Rings
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Contact
            </Typography>
            <Box>
              <Box mb={1}>
                <Typography variant="body2" color="white">
                  Address
                </Typography>
              </Box>
              <Box mb={1}>
                <Typography variant="body2" color="white">
                  Phone number
                </Typography>
              </Box>
              <Box mb={1}>
                <Typography variant="body2" color="white">
                  Email
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
