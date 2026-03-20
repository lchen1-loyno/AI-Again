require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const port = process.env.PORT || 8000;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// API endpoint for generating strategy
app.post('/generate-strategy', async (req, res) => {
  try {
    const { strengths, weaknesses, opportunities, threats } = req.body;

    if (!strengths || !weaknesses || !opportunities || !threats) {
      return res.status(400).json({ error: 'All SWOT fields are required' });
    }

    const prompt = `Act as a business strategist. Based on the following SWOT analysis, generate clear, actionable strategic recommendations for a company considering AI adoption.

Strengths:
${strengths}

Weaknesses:
${weaknesses}

Opportunities:
${opportunities}

Threats:
${threats}

Provide:
- 3–5 strategic actions
- Keep them concise and practical
- Focus on AI adoption decisions`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'user', content: prompt }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const strategy = completion.choices[0].message.content.trim();

    res.json({ strategy });
  } catch (error) {
    console.error('Error generating strategy:', error);
    res.status(500).json({ error: 'Failed to generate strategy. Please try again.' });
  }
});

app.listen(port, () => {
  console.log(`SWOT AI Tool server running at http://localhost:${port}`);
});