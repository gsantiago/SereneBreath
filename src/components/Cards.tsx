import { animated, useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";

import { Card, WIDTH as CARD_WIDTH } from "@/components/Card";

import { useTranslation } from "@/hooks/useTranslation";
import { useStorage } from "@/hooks/useStorage";

import { techniques } from "@/config/techniques";

const items = techniques;
const center = Math.ceil(items.length / 2) - 1;

const getX = (index: number) => (index - center) * -CARD_WIDTH;

export function Cards() {
  const [technique, setTechnique] = useStorage("technique");
  const active = techniques.findIndex((t) => t.name === technique);

  const { t } = useTranslation();

  const TOTAL_SIZE = CARD_WIDTH * items.length;
  const TRESHOLD = 10;

  const [trackStyles, trackSpring] = useSpring(() => ({
    x: getX(active),
  }));

  const selectIndex = (index: number) => {
    if (index >= 0 && index < items.length) {
      const newX = getX(index);

      trackSpring.start({
        x: newX,
      });

      setTechnique(techniques[index].name);
    } else {
      trackSpring.start({
        x: getX(active),
      });
    }
  };

  const bind = useGesture({
    onDrag: (state) => {
      const [mx] = state.movement;

      trackSpring.start({
        x: getX(active) + mx,
      });
    },
    onDragEnd: (state) => {
      const [mx] = state.movement;

      // LEFT
      if (mx > TRESHOLD) {
        return selectIndex(active - 1);
      }

      // RIGHT
      if (mx < -TRESHOLD) {
        return selectIndex(active + 1);
      }

      trackSpring.start({
        x: getX(active),
      });
    },
  });

  return (
    <div
      className="relative select-none overflow-hidden"
      style={{ width: "100%" }}
    >
      <animated.div
        {...bind()}
        className="relative flex w-full cursor-grab touch-none justify-center pb-12 active:cursor-grabbing"
        style={{
          x: trackStyles.x,
        }}
      >
        {items.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                transform: active === index ? "scale(1)" : "scale(0.9)",
                opacity: active === index ? "1" : "0.5",
                transition: "all 0.2s ease",
              }}
            >
              <Card
                title={t(`techniques.${item.name}.title`)}
                description={t(`techniques.${item.name}.description`)}
                pattern={item.pattern}
              />
            </div>
          );
        })}
      </animated.div>
    </div>
  );
}
