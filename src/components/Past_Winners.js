import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ eventDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(eventDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(eventDate));
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [eventDate]);

  // Calculate time left
  function calculateTimeLeft(targetDate) {
    const now = new Date();
    const difference = targetDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  return (
    <div style={styles.timerContainer}>
      <div style={styles.timer}>
        <span style={styles.timeValue}>{timeLeft.days}</span> Days
      </div>
      <div style={styles.timer}>
        <span style={styles.timeValue}>{timeLeft.hours}</span> Hours
      </div>
      <div style={styles.timer}>
        <span style={styles.timeValue}>{timeLeft.minutes}</span> Minutes
      </div>
      <div style={styles.timer}>
        <span style={styles.timeValue}>{timeLeft.seconds}</span> Seconds
      </div>
    </div>
  );
};

const styles = {
  timerContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    fontSize: '1.5rem',
    fontFamily: 'Arial, sans-serif',
  },
  timer: {
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  timeValue: {
    fontSize: '2rem',
    color: '#ff6347',
  },
};

export default CountdownTimer;