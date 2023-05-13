import { useEffect, useRef, useState } from "react";
import styles from "./TypingEffect.module.css";

const TypingEffect = ({ text, styler }) => {
  const [displayText, setDisplayText] = useState('');
  text = "  " + text;
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText(prevText => prevText + text[currentIndex]);
      currentIndex++;
      if (currentIndex >= text.length-1) {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [text]);

  return <p className={styler} >{displayText}</p>;
};

export default TypingEffect;
