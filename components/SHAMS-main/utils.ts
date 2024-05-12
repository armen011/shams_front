import { Variants } from 'framer-motion';

const aspectRatio = 0.8;
const delayChildren = 0.15;

const getStyleProperties = (
  degree: number,
  centerX: number,
  centerY: number,
  balloonRadius: number,
  distance: number
) => {
  const angleInRadians = (degree * Math.PI) / 180; // Convert degrees to radians

  const x = centerX + distance * Math.cos(angleInRadians) - balloonRadius;
  const y = centerY + distance * Math.sin(angleInRadians) - balloonRadius;
  return {
    left: `${x}px`,
    bottom: `${y}px`,
    width: `${balloonRadius * 2}px`,
    height: `${balloonRadius * 2}px`,
  };
};

type InputNavLink<T> = T & {
  degre: number;
  variants?: Variants;
};
export const wrapLinks = <T>(
  links: InputNavLink<T>[],
  width: number | undefined = 1024,
  height: number | undefined = 1080
) => {
  let balloonRadius = 88;
  let iconSize = 54;
  let isMobile = false;

  const distance = width / 3 + 80;

  const heightOnContainerHeight = height - 64;
  const heightAccordingToWidth = (width / 1.77 - width / 6) / aspectRatio;

  const centerX = width / 2;
  const centerY = height / 2;
  const iconHeight =
    heightAccordingToWidth > heightOnContainerHeight
      ? heightOnContainerHeight
      : heightAccordingToWidth;
  const iconWidth = iconHeight * aspectRatio;

  switch (true) {
    case width > 1280:
      balloonRadius = 88;
      iconSize = 54;
      break;
    case width > 1024:
      balloonRadius = 68;
      iconSize = 48;
      break;
    case width > 820:
      balloonRadius = 48;
      iconSize = 36;
      break;
    case width > 733:
      balloonRadius = 48;
      iconSize = 36;
      break;
    default:
      balloonRadius = 98;
      iconSize = 32;
      isMobile = true;
  }

  const mobileActionBarHeight = height / 2 - 16;
  const mobileBallonSize = mobileActionBarHeight / 3 - 8;

  return {
    balloons: links.map((link, idx) => ({
      ...link,
      style: isMobile
        ? {
            width: '48%',
            height: `${mobileBallonSize}px`,
            left: idx % 2 !== 1 ? 0 : '50%',
            top: `${
              Math.floor(idx / 2) * (mobileBallonSize + 16) +
              mobileActionBarHeight -
              108
            }px`,
          }
        : getStyleProperties(
            link.degre,
            centerX,
            centerY,
            balloonRadius,
            distance
          ),
      variants: {
        hidden: {
          opacity: 0,
          scale: 0,
        },
        visible: {
          opacity: 1,
          scale: 1,

          transition: {
            type: 'spring',
            stiffness: 100,
            duration: 0.5,
            delay: delayChildren * idx + 1,
          },
        },
      },
    })),
    iconHeight: isMobile ? mobileActionBarHeight - 128 : iconHeight,
    iconWidth: isMobile
      ? (mobileActionBarHeight - 128) * aspectRatio
      : iconWidth,
    iconSize,
  };
};
