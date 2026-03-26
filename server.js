require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes before static files
app.get('/', (req, res) => {
  res.redirect('/swot-full.html');
});

// Static files
app.use(express.static('public'));
app.use(express.static('.'));
function generateStrategicReport(problem, strengths, weaknesses, opportunities, threats) {
  console.log('🎯 Generating strategic recommendations for:', problem);

  // Parse SWOT elements
  const strengthList = strengths.split(',').map(s => s.trim()).filter(s => s);
  const weaknessList = weaknesses.split(',').map(s => s.trim()).filter(s => s);
  const opportunityList = opportunities.split(',').map(s => s.trim()).filter(s => s);
  const threatList = threats.split(',').map(s => s.trim()).filter(s => s);

  // Generate personalized recommendations
  const recommendations = [];

  // Recommendation 1: Leverage strengths to address the problem
  if (strengthList.length > 0) {
    recommendations.push(`Leverage your ${strengthList[0]} to directly address ${problem.toLowerCase()} by developing specialized solutions that capitalize on your competitive advantages.`);
  }

  // Recommendation 2: Address weaknesses while pursuing opportunities
  if (weaknessList.length > 0 && opportunityList.length > 0) {
    recommendations.push(`Address ${weaknessList[0]} through strategic partnerships and training programs, while simultaneously pursuing ${opportunityList[0]} to maintain momentum.`);
  }

  // Recommendation 3: Mitigate threats
  if (threatList.length > 0) {
    recommendations.push(`Mitigate ${threatList[0]} by diversifying your approach and building contingency plans, ensuring long-term sustainability for your ${problem.toLowerCase()} initiative.`);
  }

  // Recommendation 4: Combine strengths with opportunities
  if (strengthList.length > 0 && opportunityList.length > 0) {
    recommendations.push(`Create a comprehensive implementation roadmap that combines your ${strengthList[0]} with ${opportunityList[0]}, while systematically reducing ${weaknessList[0] || 'key challenges'}.`);
  }

  // Recommendation 5: Monitor and adapt
  recommendations.push(`Establish key performance indicators to measure progress on ${problem.toLowerCase()}, with regular reviews to adapt strategies based on changing market conditions and competitive threats.`);

  // Return 3-5 recommendations as bullet points
  const numRecommendations = Math.min(Math.max(recommendations.length, 3), 5);
  return recommendations.slice(0, numRecommendations).map(rec => `• ${rec}`).join('\n\n');
}

// POST route for generating reports
app.post('/generate-report', async (req, res) => {
  try {
    console.log('📨 Incoming request to /generate-report');
    console.log('📋 Request body:', req.body);

    const { problem, strengths, weaknesses, opportunities, threats } = req.body;

    // Validation
    if (!problem || !strengths || !weaknesses || !opportunities || !threats) {
      console.error('❌ Missing required fields');
      return res.status(400).json({
        error: 'All fields are required: problem, strengths, weaknesses, opportunities, threats'
      });
    }

    console.log('✅ All fields validated');
    console.log(`🎯 Problem: ${problem}`);
    console.log(`💪 Strengths: ${strengths}`);
    console.log(`⚠️  Weaknesses: ${weaknesses}`);
    console.log(`🚀 Opportunities: ${opportunities}`);
    console.log(`⚡ Threats: ${threats}`);

    // Generate the report
    console.log('🤖 Generating strategic report...');
    const report = generateStrategicReport(problem, strengths, weaknesses, opportunities, threats);

    console.log('✅ Report generated successfully');
    console.log('📄 Report preview:', report.substring(0, 100) + '...');

    // Return the report
    res.json({ report });

  } catch (error) {
    console.error('❌ Error in /generate-report:', error);
    res.status(500).json({
      error: 'Failed to generate report. Please try again.'
    });
  }
});

// Root route
// app.get('/', (req, res) => {
//   res.redirect('/swot-full.html');
// });

// Start server
app.listen(port, () => {
  console.log(`🚀 SWOT AI Tool server running at http://localhost:${port}`);
  console.log(`📡 POST endpoint: http://localhost:${port}/generate-report`);
  console.log(`🏠 Root redirect: http://localhost:${port}/ -> /swot-full.html`);
  console.log(`🎯 Ready to generate strategic reports!`);
});