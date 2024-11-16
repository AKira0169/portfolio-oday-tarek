import { useState, useEffect } from "react";

import styled from "styled-components";

// Styled component for the typing effect
const TypingText = styled.span`
  border-right: 3px solid #f5f5f5;
  display: inline-block;
  animation: blink 0.75s step-end infinite;

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;
const phrases: string[] = [
  "Full Stack Developer",
  "Front End Developer",
  "Back End Developer",
];

function TypingAnimation() {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingSpeed] = useState(150); // Adjust typing speed
  const [deletingSpeed] = useState(100); // Faster deletion speed

  useEffect(() => {
    const handleTyping = () => {
      const fullText = phrases[currentIndex];
      if (isDeleting) {
        setCurrentPhrase((prev) => prev.slice(0, -1)); // Remove characters
      } else {
        setCurrentPhrase((prev) => fullText.slice(0, prev.length + 1)); // Add characters
      }

      // Once the phrase is fully typed, start deleting after a pause
      if (!isDeleting && currentPhrase === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentPhrase === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % phrases.length); // Loop through phrases
      }
    };

    const typingInterval = setInterval(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearInterval(typingInterval); // Cleanup the interval
  }, [currentPhrase, isDeleting, typingSpeed, deletingSpeed, currentIndex]);
  return (
    <div className="flex flex-col items-center">
      <div className="w-[350px] text-center">
        <h1 className="flex items-center justify-center gap-2 text-3xl font-bold">
          I'm a <TypingText>{currentPhrase}</TypingText>
        </h1>
        <p className="text-stone-500">
          Over 3 years of experience in building exceptional websites and
          digital products.
        </p>
      </div>
    </div>
  );
}

export default TypingAnimation;
