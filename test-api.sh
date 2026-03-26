#!/bin/bash

# SWOT AI Tool - Quick Test Script
# Run this to verify the backend is working correctly

echo "🧪 Testing SWOT AI Tool Backend..."
echo ""

# Check if server is running
echo "1️⃣  Checking if server is running on port 3000..."
if curl -s http://localhost:3000/ > /dev/null; then
  echo "✅ Server is running!"
else
  echo "❌ Server is NOT running. Please start it with: node server.js"
  exit 1
fi

echo ""
echo "2️⃣  Testing API endpoint..."
echo ""

# Test the API with sample SWOT data
echo "Sending test SWOT data to /generate-report endpoint..."
echo ""

RESPONSE=$(curl -s -X POST http://localhost:3000/generate-report \
  -H "Content-Type: application/json" \
  -d '{
    "problem": "How to expand our software development business into enterprise clients",
    "strengths": "Strong development team, Innovative technology, Good market reputation",
    "weaknesses": "Limited budget, Small sales team, Lack of enterprise experience",
    "opportunities": "Growing AI market demand, Partnerships with major companies, Emerging markets",
    "threats": "Intense competition, Rapid tech changes, Economic downturn, Data privacy regulations"
  }')

echo "Response:"
echo "$RESPONSE" | jq '.' 2>/dev/null || echo "$RESPONSE"

echo ""
echo "3️⃣  Checking response format..."

if echo "$RESPONSE" | grep -q '"report"'; then
  echo "✅ Response contains 'report' field!"
  echo ""
  echo "Sample report generated:"
  echo "$RESPONSE" | jq -r '.report' | head -20
else
  echo "❌ Response does not contain 'report' field"
  echo "Make sure you have set your OPENAI_API_KEY in .env file"
  exit 1
fi

echo ""
echo "✅ All tests passed! Backend is working correctly."
echo ""
echo "Next steps:"
echo "1. Open http://localhost:3000/swot-tool.html in your browser"
echo "2. Fill in the SWOT fields"
echo "3. Click 'Generate Strategy'"
echo "4. Check browser console (F12) for detailed logs"