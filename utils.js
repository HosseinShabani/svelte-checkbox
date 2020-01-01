import { tweened } from "svelte/motion";

const createStyle = ({
  from = 0,
  to = 1,
  reverse = false,
  duration = 300,
  delay = 0,
  css = {},
  onChange = () => false,
  onEnd = () => false,
  easing
}) => {
  const animation = tweened(reverse ? to : from, {
    duration,
    delay,
    easing
  });
  animation.subscribe(t => {
    let newStyle = "";
    for (let item in css) {
      const {
        input,
        output,
        onComplete = () => false,
        beforeStart = () => false
      } = css[item];
      const inRange = input.filter(i => i <= t).reverse()[0];
      const index = input.indexOf(inRange);
      let val;
      if (!inRange && inRange !== 0) {
        val = output[0];
        beforeStart();
      } else {
        if (input.length - 1 === index) {
          val = output[output.length - 1];
          input[input.length - 1] <= t && onComplete();
        } else {
          const endRange = input[index + 1];
          const percent = ((t - inRange) * 100) / (endRange - inRange);
          const firstItem = output[index];
          const lastItem = output[index + 1];
          if (typeof lastItem === "object") {
            val = "";
            lastItem.map(i => {
              val += firstItem + ((i - firstItem) * percent) / 100;
              val += " ";
            });
          } else {
            val = firstItem + ((lastItem - firstItem) * percent) / 100;
          }
        }
      }
      newStyle += `${item}: ${val};`;
    }
    onChange(newStyle);
    if (t === to || t === from) {
      onEnd();
    }
  });
  return {
    play: () => animation.set(to),
    reverse: () => animation.set(from)
  };
};

export { createStyle };
