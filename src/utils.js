export const checkIsIOS = () => {
  const {
    userAgent,
    platform,
    maxTouchPoints,
  } = navigator || window.navigator;

  return (/iPad|iPhone|iPod/.test(userAgent) || (platform === 'MacIntel' && maxTouchPoints > 1)) && !window.MSStream;
};
