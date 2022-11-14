export const formatTime = (time) => {
  const getSeconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const getMinutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const getHours = ("0" + Math.floor((time / 3600000) % 60)).slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
