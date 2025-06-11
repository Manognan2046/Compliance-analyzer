import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          Your privacy is important to us. This privacy policy explains how we handle your data.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We temporarily process uploaded documents for compliance analysis. No personal 
          information is permanently stored.
        </Typography>
        <Typography variant="h6" gutterBottom>
          How We Use Information
        </Typography>
        <Typography variant="body1" paragraph>
          Uploaded documents are used solely for generating compliance analysis reports. 
          Documents are processed securely and deleted after analysis.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Data Security
        </Typography>
        <Typography variant="body1" paragraph>
          We implement appropriate security measures to protect your data during processing. 
          All communications are encrypted and documents are handled securely.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have questions about this privacy policy, please contact us through our 
          contact page.
        </Typography>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;
