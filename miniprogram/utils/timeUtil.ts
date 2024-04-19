function convertUTCtoTokyoTime(utcDateString: string) {
  // 创建一个日期对象，指定 UTC 时间
  const utcDate = new Date(utcDateString);

  // 创建一个日期格式化对象，指定时区为东京
  const tokyoDateFormatter = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  // 格式化日期为东京时间字符串
  const tokyoTimeString = tokyoDateFormatter.format(utcDate);

  return tokyoTimeString;
}
