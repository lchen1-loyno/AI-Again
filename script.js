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

  // Show loading
  showLoading();

  try {
    const response = await fetch('/generate-strategy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();
    showOutput(result.strategy);
  } catch (error) {
    console.error('Error:', error);
    showError('Failed to generate strategy. Please try again.');
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
  document.getElementById('strategy-content').innerHTML = strategy.replace(/\n/g, '<br>');
  document.getElementById('output').classList.remove('hidden');
}

function showError(message) {
  document.getElementById('error-message').textContent = message;
  document.getElementById('error').classList.remove('hidden');
  document.getElementById('output').classList.add('hidden');
}
