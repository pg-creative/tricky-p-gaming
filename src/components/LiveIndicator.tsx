import { useState, useEffect } from 'react';

interface LiveIndicatorProps {
  isLive?: boolean;
  viewerCount?: number;
  streamUrl?: string;
  streamTitle?: string;
  game?: string;
}

export default function LiveIndicator({
  isLive = false,
  viewerCount = 0,
  streamUrl = 'https://twitch.tv/trickyp',
  streamTitle = 'Live Stream',
  game = 'Playing Games'
}: LiveIndicatorProps) {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setPulse(p => !p);
    }, 1000);

    return () => clearInterval(interval);
  }, [isLive]);

  if (!isLive) {
    return (
      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
          <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-400 mb-2">Currently Offline</h3>
        <p className="text-gray-500 text-sm mb-4">Check the schedule below for upcoming streams!</p>
        <a
          href={streamUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
          </svg>
          Follow on Twitch
        </a>
      </div>
    );
  }

  return (
    <a
      href={streamUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gradient-to-r from-purple-900/40 to-pink-900/40 border-2 border-purple-500 rounded-lg p-6 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group"
    >
      <div className="flex items-start gap-6">
        {/* Live Indicator */}
        <div className="relative flex-shrink-0">
          <div className={`absolute inset-0 bg-red-500 rounded-full ${pulse ? 'animate-ping' : ''}`}></div>
          <div className="relative bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            LIVE
          </div>
        </div>

        {/* Stream Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {streamTitle}
          </h3>
          <p className="text-purple-400 font-semibold mb-3">{game}</p>

          <div className="flex items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
              <span className="font-semibold">{viewerCount.toLocaleString()} viewers</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span>Streaming now</span>
            </div>
          </div>
        </div>

        {/* Watch Now Button */}
        <div className="flex-shrink-0 hidden sm:flex items-center">
          <div className="bg-purple-600 group-hover:bg-purple-500 text-white font-bold px-8 py-3 rounded-lg transition-colors flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
            </svg>
            Watch Now
          </div>
        </div>
      </div>

      {/* Mobile Watch Button */}
      <div className="sm:hidden mt-4">
        <div className="w-full bg-purple-600 group-hover:bg-purple-500 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
          </svg>
          Watch Now
        </div>
      </div>

      {/* Animated Border Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
           style={{ animation: 'gradient 3s linear infinite' }}>
      </div>
    </a>
  );
}
