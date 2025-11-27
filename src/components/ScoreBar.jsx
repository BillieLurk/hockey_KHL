import { useState, useEffect } from "react";

const ScoreBar = () => {
  const [leftScore, setLeftScore] = useState(0);
  const [rightScore, setRightScore] = useState(0);

  // Keybindings
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if typing in input
      if (e.target.tagName === "INPUT") return;

      // Left player
      if (e.key === "w") setLeftScore((prev) => prev + 1);
      if (e.key === "q") setLeftScore((prev) => Math.max(prev - 1, 0));

      // Right player
      if (e.key === "p") setRightScore((prev) => prev + 1);
      if (e.key === "o") setRightScore((prev) => Math.max(prev - 1, 0));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="fixed bottom-0 w-full flex justify-center items-center">
      <div className="bg-black h-[100px] w-2/4 flex items-center">
        {/* Left player */}
        <div className="flex-1 flex justify-center items-center">
          <Player score={leftScore} />
        </div>

        {/* Center image */}
        <div className="flex-shrink-0">
          <img src="/khl.png" alt="center" className="h-full" />
        </div>

        {/* Right player */}
        <div className="flex-1 flex justify-center items-center">
          <Player score={rightScore} right />
        </div>
      </div>
    </div>
  );
};

const Player = ({ right = false, score }) => {
  const [name, setName] = useState("");

  return (
    <div
      className={`text-[40px] flex w-full px-8 justify-between text-white ${right && "[&>*]:text-right flex flex-row-reverse"}`}
    >
      <input
        placeholder="Player Name"
        className="bg-transparent min-w-60"
        value={name}
        onChange={(e) => setName(e.target.value)}
        size={Math.max(name.length, 1)} // dynamically fits content
      />
      <span>{score}</span>
    </div>
  );
};

export default ScoreBar;
