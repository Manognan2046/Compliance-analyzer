import React, { useState } from "react";
import {
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
  Fade,
  Tooltip,
} from "@mui/material";
import { MdUploadFile } from "react-icons/md";
import * as pdfjs from "pdfjs-dist";

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const UploadForm = ({
  onAnalysisStart,
  onAnalysisSuccess,
  onAnalysisError,
}) => {
  const [file, setFile] = useState(null);
  const [country, setCountry] = useState("IN");

  const handleFileChange = (event) => setFile(event.target.files[0]);
  const handleCountryChange = (event) => setCountry(event.target.value);

  const extractTextFromPDF = async (file) => {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
      let fullText = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item) => item.str).join(" ");
        fullText += pageText + "\n";
      }

      return fullText;
    } catch (error) {
      console.error("PDF extraction error:", error);
      throw new Error(
        "Failed to extract text from PDF. Please ensure the file is not corrupted."
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      onAnalysisError("Please select a file to upload.");
      return;
    }

    onAnalysisStart();

    try {
      let fileContent = "";

      // Extract text based on file type
      if (file.type === "application/pdf") {
        fileContent = await extractTextFromPDF(file);
      } else if (file.type === "text/plain") {
        fileContent = await file.text();
      } else if (
        file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        // For DOCX files, we'll read as text for now
        // You might want to use a library like mammoth.js for better extraction
        fileContent = await file.text();
      } else {
        throw new Error(
          "Unsupported file type. Please upload a PDF, TXT, or DOCX file."
        );
      }

      if (!fileContent.trim()) {
        throw new Error(
          "No text content found in the file. Please check if the file contains readable text."
        );
      }

      // Encode the file content as base64
      const base64Content = btoa(unescape(encodeURIComponent(fileContent)));

      // Actual API Gateway URL from deployment
      const apiUrl =
        "https://6p5gwei8hj.execute-api.us-east-2.amazonaws.com/analyze";

      // Call the backend API
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          policy_document: base64Content,
          country: country,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      onAnalysisSuccess(result, country);
    } catch (error) {
      console.error("Analysis error:", error);
      onAnalysisError(
        error.message || "Failed to analyze the document. Please try again."
      );
    }
  };
  return (
    <Card
      sx={{
        minWidth: 340,
        maxWidth: 480,
        mx: "auto",
        mt: 7,
        borderRadius: 5,
        boxShadow: "0 8px 32px 0 rgba(33, 150, 243, 0.18)",
        background: "linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)",
        border: "1.5px solid #bbdefb",
        overflow: "visible",
      }}
    >
      <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Fade in>
            <Box
              sx={{
                background:
                  "linear-gradient(135deg, #1976d2 60%, #42a5f5 100%)",
                borderRadius: "50%",
                width: 64,
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1.5,
                boxShadow: "0 4px 16px 0 rgba(33, 150, 243, 0.16)",
              }}
            >
              <MdUploadFile size={36} color="#fff" />
            </Box>
          </Fade>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{
              fontWeight: 900,
              letterSpacing: 1.5,
              color: "primary.main",
              textAlign: "center",
              textShadow: "0 2px 8px #e3f2fd",
            }}
          >
            Start Your Compliance Check
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, textAlign: "center", maxWidth: 340 }}
          >
            Upload your policy file and select your country/region to begin.
          </Typography>
        </Box>
        <Divider sx={{ mb: 3, borderColor: "#90caf9" }} />
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 2 }}
        >
          <FormControl fullWidth>
            <InputLabel id="country-select-label" sx={{ fontWeight: 600 }}>
              Country/Region
            </InputLabel>
            <Select
              labelId="country-select-label"
              id="country-select"
              value={country}
              label="Country/Region"
              onChange={handleCountryChange}
              sx={{
                borderRadius: 2,
                background: "#f5faff",
                fontWeight: 500,
                boxShadow: "0 2px 8px 0 rgba(33, 150, 243, 0.04)",
              }}
            >
              <MenuItem value="IN">India</MenuItem>
              <MenuItem value="US">United States</MenuItem>
              <MenuItem value="EU">European Union</MenuItem>
              <MenuItem value="UK">United Kingdom</MenuItem>
              <MenuItem value="SG">Singapore</MenuItem>
            </Select>
          </FormControl>
          <Tooltip
            title="Supported: .zip, .pdf, .docx, .txt"
            arrow
            placement="top"
            enterDelay={300}
          >
            <Button
              variant="outlined"
              component="label"
              fullWidth
              startIcon={<MdUploadFile size={26} />}
              sx={{
                border: file ? "2.5px solid #1976d2" : "2px dashed #90caf9",
                color: "primary.main",
                background: file ? "#e3f2fd" : "#f5faff",
                borderRadius: 2,
                p: 2,
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: 0.5,
                transition: "background 0.2s, border 0.2s",
                boxShadow: file ? "0 2px 8px 0 #bbdefb" : "none",
                "&:hover": {
                  background: "#bbdefb",
                  border: "2.5px solid #1976d2",
                },
              }}
            >
              {file
                ? file.name
                : "Drag or Choose Policy File (.zip, .pdf, .docx, .txt)"}
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
          </Tooltip>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={!file}
            sx={{
              p: 1.5,
              fontWeight: "bold",
              fontSize: "1.1rem",
              borderRadius: 2,
              boxShadow: 3,
              background: !file
                ? "linear-gradient(90deg, #e3f2fd 60%, #bbdefb 100%)"
                : "linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)",
              color: !file ? "#90caf9" : "#fff",
              letterSpacing: 1,
              mt: 0.5,
              transition: "background 0.2s, color 0.2s",
            }}
          >
            Analyze Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UploadForm;
