require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const port = process.env.PORT || 3000;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// API endpoint for generating strategy
app.post('/generate', async (req, res) => {
  try {
    const { strengths, weaknesses, opportunities, threats } = req.body;

    // Validation
    if (!strengths || !weaknesses || !opportunities || !threats) {
      console.error('Missing SWOT fields in request');
      return res.status(400).json({ error: 'All SWOT fields are required' });
    }

    console.log('Received SWOT input:');
    console.log('- Strengths:', strengths.substring(0, 50) + '...');
    console.log('- Weaknesses:', weaknesses.substring(0, 50) + '...');
    console.log('- Opportunities:', opportunities.substring(0, 50) + '...');
    console.log('- Threats:', threats.substring(0, 50) + '...');

    const prompt = `You are a business strategy expert.

Based on the SWOT analysis below, generate 3-5 actionable strategies for AI adoption.

Strengths: ${strengths}
Weaknesses: ${weaknesses}
Opportunities: ${opportunities}
Threats: ${threats}

Requirements:
- Bullet points
- Clear and specific
- Focus on real implementation steps`;

    console.log('Calling OpenAI API with gpt-4-mini model...');
    
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-mini',
      messages: [
        { role: 'user', content: prompt }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const result = completion.choices[0].message.content.trim();
    console.log('OpenAI response received successfully');

    res.json({ result });
  } catch (error) {
    console.error('Error generating strategy:', error.message);
    console.error('Full error:', error);
    res.status(500).json({ error: 'Failed to generate strategy. Please try again.' });
  }
});

app.listen(port, () => {
  console.log(`✓ SWOT AI Tool server running at http://localhost:${port}`);
  console.log(`✓ POST endpoint: http://localhost:${port}/generate`);
});