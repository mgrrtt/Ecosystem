// import inViewport from 'in-viewport';

// import { DEBOUNCE_VISIBLE_TIME } from './consts';

export const checkIsIOS = () => {
  const {
    userAgent,
    platform,
    maxTouchPoints,
  } = navigator || window.navigator;

  return (/iPad|iPhone|iPod/.test(userAgent) || (platform === 'MacIntel' && maxTouchPoints > 1)) && !window.MSStream;
}

// export function whenVisible(node, callback) {
//   return inViewport(node, { debounce: DEBOUNCE_VISIBLE_TIME }, callback);
// }
