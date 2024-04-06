import React, { useState } from 'react';

// Function to send prompt to Gemini API
async function sendPromptToGemini(promptText) {
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  const projectId = 'YOUR_PROJECT_ID'; // Replace with your actual project ID
  const modelName = 'gemini-pro'; // Replace with your preferred model

  // Construct API request URL
  const url = 'https://language.googleapis.com/v1alpha1/projects/${projectId}/locations/global/models/${modelName}:generateContent';

  // Data for the request (prompt text)
  const data = { input: { text: promptText } };

  // Options for the fetch request (authentication, content type)
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}`},
    body: JSON.stringify(data),
  };

  // Send request and get response
  const response = await fetch(url, options);
  const responseJson = await response.json();

  // Return parsed response containing generated text
  return responseJson;
}

function MyComponent() {
  // State variables for prompt and response
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState(null);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const promptText = event.target.elements.prompt.value;

    // Send prompt and update response state
    const responseJson = await sendPromptToGemini(promptText);
    setResponse(responseJson);
  }

  // Render the component
  return (
    <div>
      <h1>Send Prompt to Gemini</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="prompt">Enter your prompt:</label>
        <textarea id="prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        <button type="submit">Send Prompt</button>
      </form>
      {response && (
        <div>
          <h3>Gemini Response:</h3>
          <p>{response.candidates[0].content.parts[0].text}</p>
        </div>
      )}
    </div>
  );
}

export default MyComponent;