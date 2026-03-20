# 🎯 SWOT AI Tool - Complete Setup Guide

A modern web application that uses OpenAI's GPT-4 Mini to generate actionable business strategies based on SWOT analysis.

## ✨ Features

- **Modern UI Design**: Clean, centered card layout with responsive design
- **2x2 SWOT Grid**: Easy-to-use input form for Strengths, Weaknesses, Opportunities, Threats
- **AI-Powered Strategy Generation**: Uses OpenAI API to generate 3-5 actionable strategies
- **Real-time Loading State**: Visual feedback while generating strategies
- **Error Handling**: Meaningful error messages for debugging
- **Bullet-Point Output**: Results displayed as easy-to-read bullet points
- **Console Logging**: Full debugging logs in both frontend and backend

---

## 🚀 Quick Start

### Step 1: Set Up OpenAI API Key

1. Go to [OpenAI API Keys](https://platform.openai.com/api-keys)
2. Create a new API key
3. Copy your API key
4. Open `.env` file in your project
5. Replace `your_api_key_here` with your actual API key:

```
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx
```

### Step 2: Install Dependencies

```bash
cd /workspaces/AI-Again
npm install
```

### Step 3: Start the Server

```bash
node server.js
```

**Expected Output:**
```
✓ SWOT AI Tool server running at http://localhost:3000
✓ POST endpoint: http://localhost:3000/generate
```

### Step 4: Open the Web App

In your browser, go to:
```
http://localhost:3000/swot-tool.html
```

---

## 📋 How to Use the Tool

1. **Enter SWOT Information**: Fill in each field with relevant information:
   - **💪 Strengths**: Internal advantages (resources, team, market position)
   - **⚠️ Weaknesses**: Internal challenges (limitations, gaps, constraints)
   - **🚀 Opportunities**: External possibilities (market gaps, trends, partnerships)
   - **🔴 Threats**: External risks (competition, regulations, market changes)

2. **Click Generate Strategy**: Click the "✨ Generate Strategy" button

3. **View Results**: The AI will generate 3-5 actionable strategies based on your SWOT

4. **View Logs**: Check browser console (F12) and terminal output for debugging

---

## 🔧 Backend API Details

### Endpoint
```
POST http://localhost:3000/generate
```

### Request Format
```json
{
  "strengths": "Your strengths here",
  "weaknesses": "Your weaknesses here",
  "opportunities": "Your opportunities here",
  "threats": "Your threats here"
}
```

### Response Format
```json
{
  "result": "1. Strategy one\n2. Strategy two\n..."
}
```

### Example CURL Request
```bash
curl -X POST http://localhost:3000/generate \
  -H "Content-Type: application/json" \
  -d '{
    "strengths": "Strong team, Good market position",
    "weaknesses": "Limited budget, Small team",
    "opportunities": "Growing market demand, New partnerships",
    "threats": "Strong competition, Market changes"
  }'
```

---

## 🎨 UI Overview

### Layout
- **Header**: Gradient background with title and subtitle
- **Instructions Card**: Quick help text with blue left border
- **Form Container**: White card with 2x2 SWOT inputs grid
- **Generate Button**: Centered, large button with gradient
- **Loading State**: Spinner animation with "Generating..." message
- **Output Section**: Blue gradient background with bullet-point results
- **Error Box**: Red warning box for error messages
- **Footer**: Dark background with attribution

### Color Coding
- 💪 **Strengths**: Green (#10b981)
- ⚠️ **Weaknesses**: Red (#ef4444)
- 🚀 **Opportunities**: Blue (#4f46e5)
- 🔴 **Threats**: Orange (#f59e0b)

---

## 🐛 Debugging Tips

### Check Backend Logs
Look at the terminal where `node server.js` is running:
```
Received SWOT input:
- Strengths: ...
- Weaknesses: ...
- Opportunities: ...
- Threats: ...
Calling OpenAI API with gpt-4-mini model...
OpenAI response received successfully
```

### Check Frontend Logs
Open browser console (F12) and look for:
```
Sending SWOT data to backend...
Endpoint: http://localhost:3000/generate
Response status: 200
Response received: {...}
```

### Common Issues

**Issue**: "Failed to connect to localhost:3000"
- **Solution**: Make sure backend server is running (`node server.js`)

**Issue**: "Invalid API key"
- **Solution**: Check OPENAI_API_KEY in `.env` file is correct

**Issue**: "All SWOT fields are required"
- **Solution**: Fill in all 4 SWOT input fields before clicking Generate

**Issue**: OpenAI errors
- **Solution**: Check your API key has sufficient credits and correct permissions

---

## 📁 Project Structure

```
AI-Again/
├── swot-tool.html          # Main UI (modern, clean design)
├── swot-tool-modern.css    # Styling (gradient, shadows, responsive)
├── script.js               # Frontend logic (fetch, DOM updates)
├── server.js               # Backend API (Express, OpenAI)
├── package.json            # Dependencies
├── .env                    # API configuration
├── .gitignore             # Git ignore rules
└── README.md              # Setup guide
```

---

## 🔑 Key Technologies

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **AI**: OpenAI API (GPT-4 Mini)
- **Development**: npm, dotenv

---

## 📝 Notes

- The tool uses **gpt-4-mini** for cost-effective, fast responses
- All requests are logged for debugging purposes
- The frontend uses async/await for clean asynchronous code
- CSS includes responsive design for mobile devices
- Error handling is implemented on both frontend and backend

---

## 🎯 Next Steps

1. ✅ Set up your OpenAI API key
2. ✅ Start the server (`node server.js`)
3. ✅ Open the tool in your browser
4. ✅ Test with sample SWOT data
5. ✅ Check browser console (F12) and terminal for debugging
6. ✅ Deploy to production (configure environment variables)

---

## 💡 Tips for Better Strategies

- Be specific in your SWOT analysis
- Include measurable details where possible
- Consider both short-term and long-term factors
- Include relevant context (industry, market, team size)
- The more detailed your SWOT input, the better the AI recommendations

---

## 🆘 Support

If you encounter issues:

1. **Check the logs**: Frontend (console) and Backend (terminal)
2. **Verify API key**: Make sure it's correct in `.env`
3. **Test the endpoint**: Use CURL to test the backend directly
4. **Check server status**: Confirm `node server.js` is running
5. **Review error messages**: Both frontend and backend provide detailed errors

---

**Happy strategizing! 🚀**