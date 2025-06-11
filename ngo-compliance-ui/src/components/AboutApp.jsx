import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const AboutApp = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          How It Works
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
          Our AI-powered compliance analyzer uses advanced document processing to compare your NGO policies 
          against regulatory requirements across different jurisdictions. Simply upload your documents, 
          select your region, and get detailed compliance insights in minutes.
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4, mt: 4 }}>
          <Box sx={{ textAlign: 'center', maxWidth: 200 }}>
            <Typography variant="h6" gutterBottom>📤 Upload</Typography>
            <Typography variant="body2" color="text.secondary">
              Upload your policy documents in PDF, DOC, or TXT format
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', maxWidth: 200 }}>
            <Typography variant="h6" gutterBottom>🤖 Analyze</Typography>
            <Typography variant="body2" color="text.secondary">
              AI analyzes your documents against regulatory requirements
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', maxWidth: 200 }}>
            <Typography variant="h6" gutterBottom>📊 Report</Typography>
            <Typography variant="body2" color="text.secondary">
              Get detailed compliance reports with actionable recommendations
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutApp;
