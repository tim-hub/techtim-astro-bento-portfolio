import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone'

const Timezone = ({timezone}: any) => {
  const [dateTime, setDateTime] = useState<Date>(new Date())
  const updateDuration = 1001; // be naughty

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().tz(timezone)
      setDateTime(now.toDate())
    }, updateDuration)
    return () => clearInterval(interval)
  }, [timezone])

  if (dateTime) {
    return (
      <div>
        <p>{dateTime.toDateString()}</p>
        <p className={'text-2xl my-2'}>{dateTime.toLocaleTimeString()}</p>
        <p className="text-sm text-gray-500">{timezone}</p>
      </div>
    )
  }
}

export default Timezone
