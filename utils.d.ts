export const createStyle: (arg: {
  from: number;
  to: number;
  reverse: boolean;
  duration: number;
  delay: number;
  css: Record<string, string>;
  onChange: () => boolean;
  onEnd: () => boolean;
  easing: (t: number) => number;
}) => {
  play: () => void;
  reverse: () => void;
};
