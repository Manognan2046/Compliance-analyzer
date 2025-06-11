import React from 'react';
import { Container, Typography, Box, Paper, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          Have questions about the NGO Compliance Analyzer? We'd love to hear from you.
        </Typography>
        
        <Box component="form" sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Organization"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            margin="normal"
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send Message
          </Button>
        </Box>
        
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Other Ways to Reach Us
          </Typography>
          <Typography variant="body2" paragraph>
            Email: support@ngocompliance.com
          </Typography>
          <Typography variant="body2" paragraph>
            For technical support and general inquiries
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;
