import React, { useState, useEffect } from 'react';

const phrases = [
  "Fix What’s Broken.",
  "Empower Communities.",
  "Make Your City Better."
];

const TypingText = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[index];

    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentPhrase.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setCharIndex(0);
        setIndex((index + 1) % phrases.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  return (
    <span className="text-emerald-500">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingText;
