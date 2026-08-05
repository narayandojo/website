import React, { useState, useEffect } from "react";

function FunGame() {
  const GAME_WIDTH = 320;
  const GAME_HEIGHT = 320;

  const [position, setPosition] = useState({ top: 100, left: 100 });
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(20);
  const [gameOver, setGameOver] = useState(false);

  // Move robot inside game box
  const moveRobot = () => {
    if (gameOver) return;

    const top = Math.random() * (GAME_HEIGHT - 70);
    const left = Math.random() * (GAME_WIDTH - 70);

    setPosition({ top, left });
  };

  // Catch robot
  const catchRobot = () => {
    if (gameOver) return;

    setScore((prev) => prev + 1);
    moveRobot();
  };

  useEffect(() => {
    if (gameOver) return;

    const robotInterval = setInterval(moveRobot, 1200);

    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(robotInterval);
          clearInterval(timer);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(robotInterval);
      clearInterval(timer);
    };
  }, [gameOver]);

  // Restart
  const restartGame = () => {
    setScore(0);
    setTime(20);
    setGameOver(false);
    moveRobot();
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute top-16 left-6 md:left-20"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping absolute top-32 right-6 md:right-20"></div>
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping absolute bottom-16 left-1/2"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-bold text-center">
          🤖 Catch the Robot Game
        </h2>

        <p className="text-gray-500 text-center mt-4 text-base md:text-lg">
          Click the moving robot before time runs out!
        </p>

        {/* Score */}
        <div className="flex justify-center gap-8 md:gap-16 mt-8 mb-8 flex-wrap">

          <h3 className="text-xl md:text-2xl font-bold">
            Score:
            <span className="text-blue-600 ml-2">{score}</span>
          </h3>

          <h3 className="text-xl md:text-2xl font-bold">
            Time:
            <span className="text-orange-500 ml-2">{time}s</span>
          </h3>

        </div>

        {/* Game Box */}
        <div
          className="relative mx-auto bg-white border-2 rounded-2xl shadow-xl overflow-hidden"
          style={{
            width: "100%",
            maxWidth: `${GAME_WIDTH}px`,
            height: `${GAME_HEIGHT}px`,
          }}
        >

          {!gameOver && (
            <div
              onClick={catchRobot}
              className="absolute text-5xl cursor-pointer transition-all duration-300 hover:scale-125 select-none"
              style={{
                top: position.top,
                left: position.left,
              }}
            >
              🤖
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-white/90">

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                🎉 Game Over!
              </h3>

              <p className="text-lg mb-6">
                Your Score:
                <span className="font-bold text-blue-600 ml-2">
                  {score}
                </span>
              </p>

              <button
                onClick={restartGame}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl hover:scale-105 transition"
              >
                Play Again
              </button>

            </div>
          )}

        </div>

      </div>

    </section>
  );
}

export default FunGame;