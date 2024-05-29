import { useEffect, useState } from 'react';

const Countdown: React.FC = () => {
  const launchDate = new Date('2024-06-11T00:00:00'); // Set your launch date and time here
  const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = launchDate.getTime() - new Date().getTime();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className="flex justify-center items-center space-x-4">
      {timeLeft.days > 0 && <div className="text-xl font-semibold"><span className="text-red-500">{timeLeft.days}</span> days</div>}
      {timeLeft.hours > 0 && <div className="text-xl font-semibold"><span className="text-red-500">{timeLeft.hours}</span> hours</div>}
      {timeLeft.minutes > 0 && <div className="text-xl font-semibold"><span className="text-red-500">{timeLeft.minutes}</span> minutes</div>}
      {timeLeft.seconds > 0 && <div className="text-xl font-semibold"><span className="text-red-500">{timeLeft.seconds}</span> seconds</div>}
    </div>
  );
};

export default Countdown;
