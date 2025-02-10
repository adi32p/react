import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div className="input-container">
        <input
          type="text"
          value={password}
          readOnly
          className="password-input"
          placeholder="Generated password"
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className="copy-button">
          Copy
        </button>
      </div>

      <div className="flex-container">
        {/* Range Slider */}
        <div className="range-container">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>

        {/* Checkbox for Numbers */}
        <div className="checkbox-container">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        {/* Checkbox for Special Characters */}
        <div className="checkbox-container">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
