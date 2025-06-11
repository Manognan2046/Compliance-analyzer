# NGO Compliance Analyzer

A comprehensive web application that analyzes NGO policy documents for regulatory compliance across different countries and regions. The system uses AI-powered analysis to evaluate documents against specific compliance frameworks and provides detailed insights and recommendations.

![Compliance Analyzer](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![Python](https://img.shields.io/badge/Python-3.9+-yellow?logo=python)
![AWS](https://img.shields.io/badge/AWS-Serverless-orange?logo=amazon-aws)

## 🚀 Features

- **Multi-format Document Support**: Analyze PDF, DOCX, TXT, and ZIP files
- **Multi-region Compliance**: Support for India, US, EU, UK, and Singapore regulations
- **Real-time Analysis**: Powered by AWS Lambda for fast, scalable processing
- **Interactive Dashboard**: Beautiful Material-UI interface with compliance visualizations
- **Detailed Recommendations**: Actionable insights for improving compliance
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🏗️ Architecture

### Frontend

- **React 18** with Vite for fast development
- **Material-UI (MUI)** for modern, responsive design
- **PDF.js** for client-side PDF text extraction
- **React Router** for navigation
- **React Icons** for beautiful iconography

### Backend

- **AWS Lambda** serverless function
- **Python 3.9+** with compliance analysis logic
- **API Gateway** for RESTful API endpoints
- **Serverless Framework** for deployment

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ and npm
- Python 3.9+
- AWS CLI configured (for backend deployment)
- Serverless Framework CLI

### Frontend Setup

```bash
# Navigate to frontend directory
cd ngo-compliance-ui

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5174`

### Backend Setup

```bash
# Install Python dependencies
pip install -r requirements.txt

# Install Serverless Framework
npm install -g serverless

# Deploy to AWS (configure AWS credentials first)
serverless deploy

# The API will be available at the provided AWS API Gateway endpoint
```

## 📋 Usage

1. **Upload Document**: Choose a policy document (PDF, DOCX, TXT, or ZIP)
2. **Select Region**: Pick the target compliance region/country
3. **Analyze**: Click "Analyze Now" to process the document
4. **Review Results**: View compliance score, detailed breakdown, and recommendations

### Supported File Types

- **PDF**: Automatically extracts text using PDF.js
- **DOCX**: Microsoft Word documents
- **TXT**: Plain text files
- **ZIP**: Archive files containing multiple documents

### Supported Regions

- 🇮🇳 India
- 🇺🇸 United States
- 🇪🇺 European Union
- 🇬🇧 United Kingdom
- 🇸🇬 Singapore

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# AWS Configuration
AWS_REGION=us-east-2
AWS_LAMBDA_FUNCTION_NAME=compliance-analyzer

# API Configuration
API_GATEWAY_URL=https://your-api-gateway-url/analyze
```

### Backend Configuration

Update `serverless.yml` for your AWS configuration:

```yaml
service: ngo-compliance-analyzer
provider:
  name: aws
  runtime: python3.9
  region: us-east-2
```

## 📊 API Reference

### POST /analyze

Analyzes a policy document for compliance.

**Request Body:**

```json
{
  "policy_document": "base64_encoded_content",
  "country": "IN"
}
```

**Response:**

```json
{
  "compliance_score": 85,
  "detailed_analysis": {
    "Covered": 70,
    "Missing": 15,
    "Partially Covered": 15
  },
  "recommendations": [
    "Add data protection clauses",
    "Include financial transparency requirements"
  ],
  "analysis_summary": "Document shows good compliance..."
}
```

## 🧪 Testing

### Frontend Testing

```bash
cd ngo-compliance-ui
npm run test
```

### Backend Testing

```bash
# Test with sample documents
python -m pytest tests/
```

### Manual Testing

Use the provided test files:

- `test-policy-compliant.txt` - High compliance score
- `test-policy-non-compliant.txt` - Low compliance score

## 🚀 Deployment

### Frontend Deployment (Netlify/Vercel)

```bash
cd ngo-compliance-ui
npm run build
# Deploy the dist/ folder to your hosting service
```

### Backend Deployment (AWS)

```bash
serverless deploy --stage production
```

## 🔒 Security

- All document processing happens server-side
- No documents are stored permanently
- API uses HTTPS encryption
- CORS properly configured for frontend domains

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🛠️ Tech Stack

**Frontend:**

- React 18.3.1
- Material-UI (MUI)
- Vite
- PDF.js
- React Router

**Backend:**

- Python 3.9+
- AWS Lambda
- API Gateway
- Serverless Framework

**Tools:**

- Git & GitHub
- AWS CLI
- npm/yarn
- ESLint

## 📞 Support

For support, please open an issue on GitHub or contact the development team.

## 🎯 Roadmap

- [ ] Add more compliance frameworks
- [ ] Implement user authentication
- [ ] Add document comparison features
- [ ] Create compliance templates
- [ ] Add export functionality for reports
- [ ] Implement batch document processing

---

**Built with ❤️ for NGO compliance and transparency**
