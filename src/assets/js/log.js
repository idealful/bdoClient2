const log = (isDebug, which, txt, color = 'skyblue') => {
  if (isDebug) {
    console.log('%c%s', `color: ${color}`, `[${new Date().toISOString()}] ${which} : ${txt}`);
  }
};

export default log;
