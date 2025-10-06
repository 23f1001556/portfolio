import React, { useState, useEffect } from "react";

const words = [
  "Full Stack Web Developer",
  "AI & Data Enthusiast",
  "Tech Learner",
];

const Typewriter = () => {
  const [index, setIndex] = useState(0); // Word index
  const [subIndex, setSubIndex] = useState(0); // Letter index
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [delay, setDelay] = useState(150);

  useEffect(() => {
    if (index === words.length) return;

    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );
    }, deleting ? 50 : delay);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  // Cursor blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
  <span className="text-xl md:text-3xl font-mono">
    {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
  </span>
);

};

export default Typewriter;
