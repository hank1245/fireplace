import React from "react";
import { useGameStore } from "../store/gameStore";
import "./UI.css";

export const UI: React.FC = () => {
  const {
    showPortfolio,
    showCharacterDialog,
    characterDialog,
    togglePortfolio,
    closeCharacterDialog,
  } = useGameStore();

  return (
    <div className="ui-overlay">
      {/* Portfolio Board */}
      {showPortfolio && (
        <div className="portfolio-modal">
          <div className="portfolio-content">
            <h2>My Portfolio</h2>
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <h3>🔥 3D Fireplace Site</h3>
                <p>
                  Interactive 3D camping scene built with React Three Fiber.
                  Features animated fire, ambient audio, and character
                  interactions.
                </p>
                <div className="tech-stack">
                  React • Three.js • TypeScript • Zustand
                </div>
                <button className="portfolio-link">Current Project</button>
              </div>
              <div className="portfolio-item">
                <h3>🎮 Interactive Web Apps</h3>
                <p>
                  Collection of interactive web applications with modern UI/UX
                  design and engaging user experiences.
                </p>
                <div className="tech-stack">
                  React • JavaScript • CSS3 • WebGL
                </div>
                <button className="portfolio-link">View Portfolio</button>
              </div>
              <div className="portfolio-item">
                <h3>📱 Mobile-First Design</h3>
                <p>
                  Responsive web applications optimized for mobile devices with
                  seamless user experiences.
                </p>
                <div className="tech-stack">
                  React Native • PWA • Tailwind CSS
                </div>
                <button className="portfolio-link">View Projects</button>
              </div>
              <div className="portfolio-item">
                <h3>🎨 Creative Coding</h3>
                <p>
                  Experimental projects exploring the intersection of art,
                  technology, and interactive media.
                </p>
                <div className="tech-stack">
                  p5.js • WebGL • Canvas API • GLSL
                </div>
                <button className="portfolio-link">Explore Art</button>
              </div>
            </div>
            <button onClick={togglePortfolio}>Close</button>
          </div>
        </div>
      )}

      {/* Character Dialog */}
      {showCharacterDialog && (
        <div className="dialog-modal">
          <div className="dialog-content">
            <p>{characterDialog.text}</p>
            <div className="dialog-options">
              {characterDialog.options.map((option, index) => (
                <button key={index} onClick={option.action}>
                  {option.text}
                </button>
              ))}
            </div>
            <button onClick={closeCharacterDialog}>Close</button>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="instructions">
        <p>
          WASD로 이동 • 통나무를 클릭해서 앉기 • 캐릭터와 대화 • 포트폴리오
          게시판 확인
        </p>
      </div>
    </div>
  );
};
