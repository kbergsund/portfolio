const getElementPosition = (element) => element.offsetTop;

export const scrollTo = (id, duration = 2000) => {
  const initialPosition = window.scrollY;
  const element = document.getElementById(id);
  animateScroll({
    targetPosition: getElementPosition(element),
    initialPosition,
    duration
  })
}

const easeOutQuart = (x) => {
  return 1 - Math.pow(1 - x, 4);
}

const animateScroll = ({ targetPosition, initialPosition, duration }) => {
  let start;
  let position;
  let animationFrame;
  const requestAnimationFrame = window.requestAnimationFrame;
  const cancelAnimationFrame = window.cancelAnimationFrame;
  const maxAvailableScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const amountOfPixelsToScroll = initialPosition - targetPosition;
  const step = (timestamp) => {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;
    const relativeProgress = elapsed / duration;
    const easedProgress = easeOutQuart(relativeProgress)
    position = initialPosition - amountOfPixelsToScroll * Math.min(easedProgress, 1);
    window.scrollTo(0, position);
    if (
      initialPosition !== maxAvailableScroll &&
      window.scrollY === maxAvailableScroll
    ) {
      cancelAnimationFrame(animationFrame);
      return;
    }
    if (elapsed < duration) {
      animationFrame = requestAnimationFrame(step);
    }
  }

  animationFrame = requestAnimationFrame(step);
}