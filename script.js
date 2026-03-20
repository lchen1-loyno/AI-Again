// Handle form submission and API call
document.getElementById('swot-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {
    strengths: formData.get('strengths').trim(),
    weaknesses: formData.get('weaknesses').trim(),
    opportunities: formData.get('opportunities').trim(),
    threats: formData.get('threats').trim(),
  };

  // Basic validation
  if (!data.strengths || !data.weaknesses || !data.opportunities || !data.threats) {
    showError('Please fill in all SWOT fields.');
    return;
  }

  // Show loading state
  showLoading();

  try {
    console.log('Sending SWOT data to backend...');
    console.log('Endpoint: http://localhost:3000/generate');
    
    const response = await fetch('http://localhost:3000/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Server error: ${response.status}`);
    }

    const result = await response.json();
    console.log('Response received:', result);
    
    if (!result.result) {
      throw new Error('Invalid response format from server');
    }

    showOutput(result.result);
  } catch (error) {
    console.error('Error:', error.message);
    showError(error.message || 'Failed to generate strategy. Please try again.');
  } finally {
    hideLoading();
  }
});

function showLoading() {
  document.getElementById('loading').classList.remove('hidden');
  document.getElementById('output').classList.add('hidden');
  document.getElementById('error').classList.add('hidden');
}

function hideLoading() {
  document.getElementById('loading').classList.add('hidden');
}

function showOutput(strategy) {
  // Parse the strategy text into bullet points
  const lines = strategy.split('\n').filter(line => line.trim());
  
  let html = '<ul class="strategy-list">';
  lines.forEach(line => {
    // Remove common bullet point characters
    let cleanLine = line.replace(/^[-•*]\s*/, '').trim();
    if (cleanLine) {
      html += `<li>${cleanLine}</li>`;
    }
  });
  html += '</ul>';
  
  document.getElementById('strategy-content').innerHTML = html;
  document.getElementById('output').classList.remove('hidden');
  document.getElementById('error').classList.add('hidden');
}

function showError(message) {
  document.getElementById('error-message').textContent = message;
  document.getElementById('error').classList.remove('hidden');
  document.getElementById('output').classList.add('hidden');
}
