import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import { getUserTimeZoneInBrowser } from "@/lib/utils.ts";

const NowTime = ({timezone}: { timezone?: string }) => {
  const [currentTime, setCurrentTime] = useState<string>('');


  const secondUpdateDuration = 1001; // be naughty


  // get user timezone
  const browserTimezone = getUserTimeZoneInBrowser();

  const usingTimezone = timezone ? timezone : browserTimezone;

  console.log(usingTimezone)

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const theMoment = moment(date)
      const now = theMoment.clone().tz(usingTimezone).format("ddd MMM DD YYYY HH:mm:ss");
      setCurrentTime(now);
    }, secondUpdateDuration);
    return () => clearInterval(interval);
  }, [usingTimezone]);

  const dateStrings = currentTime.split(' ');
  const theDate = dateStrings.slice(0, 4).join(' ');
  const theTime = dateStrings.slice(4).join(' ');


  if (currentTime) {
    return (
      <>
        <div>
          <p>{theDate}</p>
          <p className={"text-2xl my-2"}>{theTime}</p>
          <p className="text-sm text-gray-500">{usingTimezone}</p>
        </div>
        {!timezone && (
          <span className="relative flex h-3 w-3">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
            ></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </span>
        )}
      </>

    )
      ;
  }
};

export default NowTime;
