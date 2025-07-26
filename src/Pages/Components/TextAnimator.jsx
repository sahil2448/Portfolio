import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function TextAnimator({ sentences, speed, pause }) {
  const [currentSentence, setCurrentSentence] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!sentences.length) return;
    const sentence = sentences[currentSentence];
    let charTimer;

    if (charIndex < sentence.length) {
      charTimer = setTimeout(() => {
        setDisplayText((prev) => prev + sentence[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else {
      // Completed current sentence
      charTimer = setTimeout(() => {
        // move to next sentence
        const next = (currentSentence + 1) % sentences.length;
        setCurrentSentence(next);
        setDisplayText("");
        setCharIndex(0);
      }, pause);
    }

    return () => clearTimeout(charTimer);
  }, [charIndex, currentSentence, sentences, speed, pause]);

  return (
    <div className="px-4">
      <div className="text-2xl font-mono">
        {displayText}
        <span className="animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] font-extrabold ">
          |
        </span>
      </div>
    </div>
  );
}

TextAnimator.propTypes = {
  sentences: PropTypes.arrayOf(PropTypes.string),
  speed: PropTypes.number,
  pause: PropTypes.number,
};

TextAnimator.defaultProps = {
  sentences: [],
  speed: 100,
  pause: 1000,
};
