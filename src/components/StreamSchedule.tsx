import { useState } from 'react';

interface ScheduleDay {
  day: string;
  streams: {
    time: string;
    game: string;
    type: string;
  }[];
}

const scheduleData: ScheduleDay[] = [
  {
    day: 'Monday',
    streams: [
      { time: '7:00 PM - 10:00 PM EST', game: 'Valorant', type: 'Ranked Grind' }
    ]
  },
  {
    day: 'Tuesday',
    streams: [
      { time: '8:00 PM - 11:00 PM EST', game: 'Variety', type: 'Community Night' }
    ]
  },
  {
    day: 'Wednesday',
    streams: [
      { time: '7:00 PM - 10:00 PM EST', game: 'Speedruns', type: 'Challenge Stream' }
    ]
  },
  {
    day: 'Thursday',
    streams: []
  },
  {
    day: 'Friday',
    streams: [
      { time: '9:00 PM - 1:00 AM EST', game: 'Horror Games', type: 'Late Night Stream' }
    ]
  },
  {
    day: 'Saturday',
    streams: [
      { time: '2:00 PM - 6:00 PM EST', game: 'Viewer Games', type: 'Subscriber Saturday' }
    ]
  },
  {
    day: 'Sunday',
    streams: [
      { time: '1:00 PM - 5:00 PM EST', game: 'Chill Games', type: 'Cozy Sunday' }
    ]
  }
];

export default function StreamSchedule() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const getCurrentDay = (): string => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const currentDay = getCurrentDay();

  const handleSetReminder = (day: string, streamInfo: { time: string; game: string }) => {
    alert(`Reminder feature coming soon!\n\nStream: ${day} - ${streamInfo.game}\nTime: ${streamInfo.time}`);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Weekly Stream Schedule</h3>
        <p className="text-gray-400">All times are in EST. Schedule subject to change.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
        {scheduleData.map((daySchedule) => {
          const isToday = daySchedule.day === currentDay;
          const isSelected = selectedDay === daySchedule.day;
          const hasStreams = daySchedule.streams.length > 0;

          return (
            <div
              key={daySchedule.day}
              className={`
                relative rounded-lg border-2 overflow-hidden transition-all duration-300 cursor-pointer
                ${isToday
                  ? 'border-purple-500 bg-purple-500/10'
                  : hasStreams
                  ? 'border-gray-700 bg-gray-800/50 hover:border-purple-500/50'
                  : 'border-gray-800 bg-gray-900/50 opacity-60'
                }
                ${isSelected ? 'ring-2 ring-purple-400 scale-105' : ''}
              `}
              onClick={() => setSelectedDay(isSelected ? null : daySchedule.day)}
            >
              {isToday && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold text-center py-1">
                  TODAY
                </div>
              )}

              <div className={`p-4 ${isToday ? 'pt-8' : ''}`}>
                <h4 className={`font-bold text-center mb-3 ${isToday ? 'text-purple-400' : 'text-white'}`}>
                  {daySchedule.day}
                </h4>

                {hasStreams ? (
                  <div className="space-y-3">
                    {daySchedule.streams.map((stream, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="bg-gray-900/50 rounded p-2 text-center">
                          <div className="text-xs text-purple-400 font-semibold mb-1">
                            {stream.type}
                          </div>
                          <div className="text-sm font-bold text-white mb-1">
                            {stream.game}
                          </div>
                          <div className="text-xs text-gray-400">
                            {stream.time}
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSetReminder(daySchedule.day, stream);
                          }}
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold py-1.5 px-2 rounded transition-colors"
                        >
                          Set Reminder
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 text-sm py-4">
                    No streams scheduled
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="bg-purple-600 rounded-full p-2 mt-1">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-white font-bold mb-2">Never Miss a Stream!</h4>
            <p className="text-gray-300 text-sm mb-3">
              Click "Set Reminder" on any scheduled stream and we'll notify you when it's about to start.
              Follow on Twitch and YouTube for instant notifications!
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitch.tv/trickyp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                </svg>
                Follow on Twitch
              </a>
              <a
                href="https://youtube.com/@trickyp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
