"use client";

import { useState } from "react";

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [rickRoll, setRickRoll] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [spin, setSpin] = useState(false);

  const yesButtonSize = 50 + noCount * 5;

  const handleNoClick = () => {
    setNoCount(noCount + 1);

    // const maxX = window.innerWidth - 150;
    // const maxY = window.innerHeight - 100;

    // setNoPosition({
    //   x: Math.random() * maxX,
    //   y: Math.random() * maxY,
    // });
  };

  const handleNoHover = () => {
    const maxX = window.innerWidth / 3;
    const maxY = window.innerHeight / 3;

    setNoPosition({
      x: (Math.random() - 0.5) * 2 * maxX,
      y: (Math.random() - 0.5) * 2 * maxY,
    });
  };

  const handleRickRoll = () => {
    setRickRoll(true);
    setNoCount(0);
  };

  if (yesPressed) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-linear-to-br from-pink-200 via-red-200 to-pink-300 overflow-hidden">
        <div className="text-center animate-bounce">
          <h2 className="text-6xl font-bold text-red-600 mb-4">Splendid!</h2>
          <p className="text-3xl text-pink-700">
            This Saturday we can order in, build Eevee, play It Takes Two, and
            watch Singles Inferno.
          </p>
          <p className="text-9xl text-purple-700">
            There shall be no backing out now, Miss Tan
          </p>
        </div>

        <a
          href="https://youtu.be/NMCOMRZ8xW4?list=RDNMCOMRZ8xW4&t=40"
          target="_blank"
        >
          <button
            className={`px-2 cursor-pointer bg-amber-950 transition-all ${
              spin ? "animate-spin" : ""
            }`}
            onMouseEnter={() => setSpin(true)}
            onMouseLeave={() => setSpin(false)}
          >
            Very well, I shall click to accept
          </button>
        </a>
      </div>
    );
  }

  if (noCount === 1) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-linear-to-br from-pink-200 via-red-200 to-pink-300 overflow-hidden">
        <div className="text-center">
          <h2 className="text-6xl font-bold text-red-600 mb-4">My word</h2>
          <p className="text-3xl text-pink-700">
            How proficient you are at clicking no
          </p>
          <p className="text-9xl text-purple-700 mt-7">
            You must be careful, TJF
          </p>
        </div>

        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"
          target="_blank"
          className="cursor-pointer"
        >
          <button
            className="bg-amber-950 px-2 cursor-pointer mt-36"
            onClick={handleRickRoll}
          >
            Click here because Brandon is rather unfortunate
          </button>
        </a>
      </div>
    );
  }

  if (rickRoll) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-linear-to-br from-pink-200 via-red-200 to-pink-300 overflow-hidden">
        <div className="text-center">
          <h2 className="text-6xl font-bold text-red-600 mb-4">
            Oh dear, you have been jinxed!
          </h2>
          <p className="text-9xl text-purple-700 mt-7">
            Please endeavour to try harder
          </p>
        </div>

        <button
          className="bg-amber-950 px-2 cursor-pointer mt-36"
          onClick={() => setRickRoll(false)}
        >
          Click to accept the invitation once more
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-pink-100 via-red-100 to-pink-200 overflow-hidden relative">
      {/* Mobile warning - shown on small screens */}
      <div className="flex md:hidden flex-col items-center justify-center text-center px-8">
        <h1 className="text-4xl font-bold text-red-600 mb-6">📱❌</h1>
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          You cannot view this on a phone
        </h2>
        <p className="text-xl text-pink-700">Please use your laptop 💻</p>
      </div>

      {/* Main content - hidden on small screens */}
      <div className="hidden md:contents">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 text-6xl animate-pulse">
            💕
          </div>
          <div className="absolute top-20 right-20 text-5xl animate-bounce">
            💖
          </div>
          <div className="absolute bottom-20 left-1/4 text-7xl animate-pulse delay-300">
            💗
          </div>
          <div className="absolute bottom-32 right-1/3 text-6xl animate-bounce delay-500">
            💝
          </div>
          <div className="absolute top-1/3 right-10 text-5xl animate-pulse delay-700">
            💘
          </div>
          <div className="absolute top-2/3 left-16 text-6xl animate-bounce delay-1000">
            ❤️
          </div>
        </div>

        <main className="flex flex-col items-center justify-center gap-8 px-8 z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-red-600 text-center drop-shadow-lg">
            Will you be my Valentine?
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold text-red-600 text-center drop-shadow-lg">
            肥猪猪
          </h1>

          <div className="flex items-center gap-6 mt-8">
            <button
              onClick={() => setYesPressed(true)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              style={{
                fontSize: `${yesButtonSize - 10}px`,
              }}
            >
              Yes
            </button>

            <button
              onClick={handleNoClick}
              onMouseEnter={handleNoHover}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 transition-all duration-300 cursor-pointer"
              style={{
                fontSize: `${50 - 10}px`,
                transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
              }}
            >
              No
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
