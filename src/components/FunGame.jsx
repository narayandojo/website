import React, { useState, useEffect } from "react";

function FunGame() {

  const [position, setPosition] = useState({ top: 100, left: 100 });
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(20);
  const [gameOver, setGameOver] = useState(false);

  const moveRobot = () => {
    const top = Math.random() * 240;
    const left = Math.random() * 540;
    setPosition({ top, left });
  };

  const catchRobot = () => {
    if (!gameOver) {
      setScore(score + 1);
      moveRobot();
    }
  };

  useEffect(() => {

    const robotInterval = setInterval(moveRobot, 1200);

    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          setGameOver(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(robotInterval);
      clearInterval(timer);
    };

  }, []);

  const restartGame = () => {
    setScore(0);
    setTime(20);
    setGameOver(false);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 to-white text-center overflow-hidden">

      {/* AI particles */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute top-20 left-20"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping absolute top-40 right-20"></div>
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping absolute bottom-20 left-1/2"></div>

      </div>

      <h2 className="text-4xl font-bold mb-4">
        🤖 Catch the Robot Game
      </h2>

      <p className="text-gray-500 mb-6">
        Click the moving robot before time runs out!
      </p>

      <div className="flex justify-center gap-10 mb-6">

        <h3 className="text-xl font-semibold">
          Score: <span className="text-blue-600">{score}</span>
        </h3>

        <h3 className="text-xl font-semibold">
          Time: <span className="text-orange-500">{time}s</span>
        </h3>

      </div>

      <div
        className="relative mx-auto bg-white border rounded-xl shadow-lg"
        style={{ width: "600px", height: "300px" }}
      >

        {!gameOver && (
          <div
            onClick={catchRobot}
            className="absolute text-5xl cursor-pointer transition-all duration-300 hover:scale-125"
            style={{ top: position.top, left: position.left }}
          >
            🤖
          </div>
        )}

        {gameOver && (
          <div className="absolute inset-0 flex flex-col justify-center items-center">

            <h3 className="text-3xl font-bold mb-4">
              🎉 Game Over!
            </h3>

            <p className="text-lg mb-4">
              Your Score: <span className="font-bold">{score}</span>
            </p>

            <button
              onClick={restartGame}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:scale-105 transition"
            >
              Play Again
            </button>

          </div>
        )}

      </div>

    </section>
  );
}

export default FunGame;