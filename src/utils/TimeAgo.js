const epochs = [
    ['year', 31536000],
    ['month', 2592000],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
    ['second', 1],
    ['second', -1]
  ];
  
  // Get duration
  function getDuration (timeAgoInSeconds) {
    for (let [name, seconds] of epochs) {
      const interval = Math.floor(timeAgoInSeconds / seconds);
      if (interval >= 1) {
        return {
          interval: interval,
          epoch: name
        };
      }
    }
  }
  
  // Calculate
  const timeAgo = (date) => {
    const timeAgoInSeconds = Math.floor((new Date() - new Date(date)) / 1000);
    var pos = timeAgoInSeconds;
    if (pos < 1) {
      if (pos === 0) {
        pos++;
      } else {
        pos = -pos;
      }
    }
    const { interval, epoch } = getDuration(pos);
    const suffix = interval === 1 ? '' : 's';
    return `${interval} ${epoch}${suffix} ago`;
  };

  export default timeAgo