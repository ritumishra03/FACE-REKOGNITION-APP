/*
import React, { useState } from 'react';
import './App.css';
import companyLogo from './visitors/logo.jpg'; 
const uuid = require('uuid');

function App() {
  const [image, setImage] = useState(null);
  const [uploadResultMessage, setUploadResultMessage] = useState('Please upload an image to authenticate.');
  const [visitorName, setVisitorName] = useState('placeholder.jpeg');
  const [isAuth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function sendImage(e) {
    e.preventDefault();

    if (!image) {
      setUploadResultMessage('Please select an image before submitting.');
      return;
    }

    const visitorImageName = uuid.v4();
    setVisitorName(image.name);
    setIsLoading(true);

    fetch(`https://1otu3ppqgg.execute-api.us-east-1.amazonaws.com/dev/visit-pics/${visitorImageName}.jpeg`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'image/jpeg'
      },
      body: image
    }).then(async () => {
      const response = await authenticate(visitorImageName);
      setIsLoading(false);

      if (response.Message === 'Success') {
        setAuth(true);
        setUploadResultMessage(`Hi ${response.firstName} ${response.lastName}, welcome to work. Hope you have a productive day!`);
      } else {
        setAuth(false);
        setUploadResultMessage('Authentication Failed: This person is not an employee.');
      }
    }).catch(error => {
      setIsLoading(false);
      setAuth(false);
      setUploadResultMessage('Error during authentication. Please try again.');
      console.error(error);
    });
  }

  async function authenticate(visitorImageName) {
    const requestUrl = 'https://1otu3ppqgg.execute-api.us-east-1.amazonaws.com/dev/employee?' +
      new URLSearchParams({
        objectKey: `${visitorImageName}.jpeg`
      });

    return await fetch(requestUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .catch(error => {
        console.error(error);
        return { Message: 'Error' };
      });
  }

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <div className="header">
        <img src={companyLogo} alt="Company Logo" />
        <h1>FaceEntry</h1>
      </div>

      <div className="toggle-switch">
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          Dark Mode
        </label>
      </div>

      <form onSubmit={sendImage}>
        <input
          type='file'
          name='image'
          accept="image/*"
          onChange={e => {
            const file = e.target.files[0];
            setImage(file);
            setVisitorName(file?.name || 'placeholder.jpeg');
          }}
        />
        <button type='submit'>Authenticate</button>
      </form>

      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className={isAuth ? 'Success' : 'Failure'}>
          {uploadResultMessage}
        </div>
      )}

      <img
        src={image ? URL.createObjectURL(image) : companyLogo}
        alt="Visitor"
        height={250}
        width={250}
      />

      <footer className="footer">
        © 2025 FaceEntry Inc. | Powered by AWS Rekognition
      </footer>
    </div>
  );
}

export default App;
*/
import React, { useState } from 'react';
import './App.css';
import companyLogo from './visitors/logo.jpg';
import placeholderImage from './visitors/placeholder.jpeg'; // <-- IMPORT THIS
const uuid = require('uuid');

function App() {
  const [image, setImage] = useState(null);
  const [uploadResultMessage, setUploadResultMessage] = useState('Please upload an image to authenticate.');
  const [visitorName, setVisitorName] = useState('placeholder.jpeg');
  const [isAuth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function sendImage(e) {
    e.preventDefault();

    if (!image) {
      setUploadResultMessage('Please select an image before submitting.');
      return;
    }

    const visitorImageName = uuid.v4();
    setVisitorName(image.name);
    setIsLoading(true);

    fetch(`https://1otu3ppqgg.execute-api.us-east-1.amazonaws.com/dev/visit-pics/${visitorImageName}.jpeg`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'image/jpeg'
      },
      body: image
    }).then(async () => {
      const response = await authenticate(visitorImageName);
      setIsLoading(false);

      if (response.Message === 'Success') {
        setAuth(true);
        setUploadResultMessage(`Hi ${response.firstName} ${response.lastName}, welcome to work. Hope you have a productive day!`);
      } else {
        setAuth(false);
        setUploadResultMessage('Authentication Failed: This person is not an employee.');
      }
    }).catch(error => {
      setIsLoading(false);
      setAuth(false);
      setUploadResultMessage('Error during authentication. Please try again.');
      console.error(error);
    });
  }

  async function authenticate(visitorImageName) {
    const requestUrl = 'https://1otu3ppqgg.execute-api.us-east-1.amazonaws.com/dev/employee?' +
      new URLSearchParams({
        objectKey: `${visitorImageName}.jpeg`
      });

    return await fetch(requestUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .catch(error => {
        console.error(error);
        return { Message: 'Error' };
      });
  }

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <div className="header">
        <img src={companyLogo} alt="Company Logo" />
        <h1>FaceEntry</h1>
      </div>

      <div className="toggle-switch">
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          Dark Mode
        </label>
      </div>

      <form onSubmit={sendImage}>
        <input
          type='file'
          name='image'
          accept="image/*"
          onChange={e => {
            const file = e.target.files[0];
            setImage(file);
            setVisitorName(file?.name || 'placeholder.jpeg');
          }}
        />
        <button type='submit'>Authenticate</button>
      </form>

      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className={isAuth ? 'Success' : 'Failure'}>
          {uploadResultMessage}
        </div>
      )}

      <img
        src={image ? URL.createObjectURL(image) : placeholderImage} // <-- USE PLACEHOLDER HERE
        alt="Visitor"
        height={250}
        width={250}
      />

      <footer className="footer">
        © 2025 FaceEntry Inc. | Powered by AWS Rekognition
      </footer>
    </div>
  );
}

export default App;

