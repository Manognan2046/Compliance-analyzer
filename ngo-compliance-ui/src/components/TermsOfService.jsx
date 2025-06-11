import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const TermsOfService = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Terms of Service
        </Typography>
        <Typography variant="body1" paragraph>
          By using the NGO Compliance Analyzer, you agree to these terms of service.
        </Typography>
        <Typography variant="h6" gutterBottom>
          1. Use of Service
        </Typography>
        <Typography variant="body1" paragraph>
          This service is provided for informational purposes only. The compliance analysis 
          should not be considered as legal advice.
        </Typography>
        <Typography variant="h6" gutterBottom>
          2. Data Privacy
        </Typography>
        <Typography variant="body1" paragraph>
          We respect your privacy and handle your documents securely. Uploaded documents 
          are processed temporarily and not stored permanently.
        </Typography>
        <Typography variant="h6" gutterBottom>
          3. Limitation of Liability
        </Typography>
        <Typography variant="body1" paragraph>
          The service is provided "as is" without warranties. Users should consult with 
          legal professionals for official compliance verification.
        </Typography>
      </Paper>
    </Container>
  );
};

export default TermsOfService;
