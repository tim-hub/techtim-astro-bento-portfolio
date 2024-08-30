import React, { useState, useEffect } from 'react';

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());
  const [timeZone, setTimeZone] = useState('');

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Fetch the user's timezone
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Current Time</h1>
      <p>{time.toLocaleTimeString()}</p>
      <h2>Time Zone</h2>
      <p>{timeZone}</p>
    </div>
  );
};

export default TimeDisplay;
