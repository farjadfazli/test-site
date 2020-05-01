import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const perfData = window.performance.timing;
  console.log(perfData)
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  const pageRenderTime = perfData.domComplete - perfData.domLoading
  console.log('Page Load Time: ' + pageLoadTime + '\nPage Render Time: ' + pageRenderTime)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Farjad's Example Site!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
