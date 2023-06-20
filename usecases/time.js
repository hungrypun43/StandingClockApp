import dayjs from "dayjs";
import { useState } from "react";

export const useCurrentTime = () => {
  const [now, setNow] = useState(dayjs());
  const [colon, setColon] = useState(":");
  setInterval(() => {
    setNow(dayjs());
    setColon(colon === ":" ? "" : ":");
  }, 1000);
  const date = now.format("DD/MM/YYYY");
  const hour = now.format("HH");
  const minute = now.format("mm");
  const weekDay = now.format("dddd");
  const text = "ping";
  return { date, weekDay, hour, minute, colon };
};
