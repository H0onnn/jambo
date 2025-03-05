export const formatCount = (count: number): string => {
  if (count < 1000) {
    return count.toString();
  } else if (count < 1000000) {
    // K 단위 (천 단위)
    return (count / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  } else {
    // M 단위 (백만 단위)
    return (count / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
};

export const formatTime = (timestamp: number): string => {
  const now = new Date();
  const date = new Date(timestamp);
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  // 1분 미만: Now
  if (diffInSeconds < 60) {
    return "Now";
  }

  // 1분 이상 1시간 미만: Xmin ago
  if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes}min ago`;
  }

  // 1시간 이상 24시간 미만: Xh ago
  if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours}h ago`;
  }

  // 1일 이상 1년 미만: MM.dd
  const oneYearInSeconds = 365 * 24 * 60 * 60;
  if (diffInSeconds < oneYearInSeconds) {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${month}.${day}`;
  }

  // 1년 이상: yyyy.MM.dd
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
};
