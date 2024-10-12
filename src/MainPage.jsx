import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import Header from './components/Header'; // Adjust the path as necessary
import Footer from './components/Footer';

const MainPage = () => {
  return (
    <div>
      <Header />

      {/* Welcome Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60vh',
          bgcolor: '#f5f5f5',
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to LuxeGems
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Discover our exquisite collection of fine jewelry and timepieces.
          </Typography>
        </Container>
      </Box>

      {/* Category Section */}
      <Box
        sx={{
          py: 20, // Increase padding to add more space above and below the cards
          bgcolor: 'white',
        }}
      >
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {/* Watches Card */}
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={3} sx={{ textAlign: 'center' }}>
                <CardContent>
                  <Box
                    sx={{
                      height: 250, // Adjust height and width to make it a square
                      backgroundColor: '#f5f5f5',
                      mb: 2,
                      borderRadius: 1,
                    }}
                  >
                    {/* Placeholder for image */}
                  </Box>
                  <Typography variant="h6">Watches</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Necklaces Card */}
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={3} sx={{ textAlign: 'center' }}>
                <CardContent>
                  <Box
                    sx={{
                      height: 250, // Make it a square
                      backgroundColor: '#f5f5f5',
                      mb: 2,
                      borderRadius: 1,
                    }}
                  >
                    {/* Placeholder for image */}
                  </Box>
                  <Typography variant="h6">Necklaces</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Rings Card */}
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={3} sx={{ textAlign: 'center' }}>
                <CardContent>
                  <Box
                    sx={{
                      height: 250, // Make it a square
                      backgroundColor: '#f5f5f5',
                      mb: 2,
                      borderRadius: 1,
                    }}
                  >
                    {/* Placeholder for image */}
                  </Box>
                  <Typography variant="h6">Rings</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </div>
  );
};

export default MainPage;
