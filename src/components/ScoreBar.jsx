const ScoreBar = () => {
  return (
    <div className="fixed bottom-0 w-full flex justify-center items-center">
      <div className="bg-black h-[100px] w-2/4 flex items-center">
        {/* Left player column */}
        <div className="flex-1 flex justify-center items-center">
          <Player />
        </div>

        {/* Center image column */}
        <div className="flex-shrink-0">
          <img src="/khl.png" alt="cheese" className="h-full" />
        </div>

        {/* Right player column */}
        <div className="flex-1 flex justify-center items-center">
          <Player right />
        </div>
      </div>
    </div>
  );
};

const Player = ({ right = false }) => {
  return (
    <div
      className={`text-[40px] text-white ${right && "[&>*]:text-right flex flex-row-reverse"}`}
    >
      <input placeholder="Player Name" className="bg-transparent w-fit" />
      <span>0</span>
    </div>
  );
};

export default ScoreBar;
