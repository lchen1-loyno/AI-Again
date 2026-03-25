require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Redirect base URL to full 3-step SWOT experience
app.get('/', (req, res) => {
  res.redirect('/swot-full.html');
});

app.use(express.static('public')); // Serve from public folder first
app.use(express.static('.')); // Then serve from current directory
function generateMockStrategy(strengths, weaknesses, opportunities, threats) {
  // Create intelligent-sounding strategies based on input
  const strategyTemplates = [
    `Leverage your strengths (${strengths.split(',')[0]?.trim() || 'core capabilities'}) to capitalize on emerging opportunities in ${opportunities.split(',')[0]?.trim() || 'your market'}.`,
    `Develop contingency plans to address weaknesses like ${weaknesses.split(',')[0]?.trim() || 'resource constraints'} before they become liabilities.`,
    `Build strategic partnerships to mitigate threats from ${threats.split(',')[0]?.trim() || 'market competitors'} and strengthen your market position.`,
    `Invest in training and development to turn weaknesses into strengths and better prepare for market threats.`,
    `Create new product lines or services that combine your strengths with identified market opportunities for sustainable growth.`,
    `Establish early warning systems to detect and respond to ${threats.split(',')[0]?.trim() || 'competitive threats'} before they impact operations.`,
    `Explore strategic alliances to overcome ${weaknesses.split(',')[0]?.trim() || 'limitations'} and access new market segments.`,
  ];

  // Return 3-4 strategies
  const numStrategies = Math.floor(Math.random() * 2) + 3; // 3-4 strategies
  const strategies = [];
  
  for (let i = 0; i < numStrategies; i++) {
    strategies.push(strategyTemplates[i % strategyTemplates.length]);
  }

  return strategies.join('\n');
}

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

    console.log('Generating strategy using mock LLM...');
    
    // Generate strategy using mock generator
    const result = generateMockStrategy(strengths, weaknesses, opportunities, threats);
    
    console.log('Strategy generated successfully');

    res.json({ result });
  } catch (error) {
    console.error('Error generating strategy:', error.message);
    console.error('Full error:', error);
    res.status(500).json({ error: 'Failed to generate strategy. Please try again.' });
  }
});

// Redirect base URL to full 3-step SWOT experience
app.get('/', (req, res) => {
  res.redirect('/swot-full.html');
});

app.listen(port, () => {
  console.log(`✓ SWOT AI Tool server running at http://localhost:${port}`);
  console.log(`✓ POST endpoint: http://localhost:${port}/generate`);
  console.log(`✓ Root redirect: http://localhost:${port}/ -> /swot-full.html`);
});