import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";

import { Card, WIDTH as CARD_WIDTH } from "@/components/Card";
import { useTranslation } from "@/hooks/useTranslation";
import { techniques } from "@/config/techniques";

const items = techniques;

export function Cards() {
  const center = Math.ceil(items.length / 2);
  const [active, setActive] = useState(center);
  const [context, setContext] = useState({ x: 0 });

  const { t } = useTranslation();

  const TOTAL_SIZE = CARD_WIDTH * items.length;
  const TRESHOLD = 10;

  const [trackStyles, trackSpring] = useSpring(() => ({
    x: 0,
  }));

  const bind = useGesture({
    onDrag: (state) => {
      const [mx] = state.movement;

      trackSpring.start({
        x: context.x + mx,
      });
    },
    onDragEnd: (state) => {
      const [mx] = state.movement;

      // LEFT
      if (mx > TRESHOLD) {
        if (active > 1) {
          const newX = (active - 1 - center) * -CARD_WIDTH;
          trackSpring.start({
            x: newX,
          });

          setActive(active - 1);

          return setContext({ x: newX });
        }
      }

      // RIGHT
      if (mx < -TRESHOLD) {
        if (active < items.length) {
          const newX = (active + 1 - center) * -CARD_WIDTH;
          trackSpring.start({
            x: newX,
          });

          setActive(active + 1);

          return setContext({ x: newX });
        }
      }

      trackSpring.start({
        x: context.x,
      });
    },
  });

  return (
    <div className="relative mb-10 overflow-hidden" style={{ width: "100%" }}>
      <animated.div
        {...bind()}
        className="relative flex w-full cursor-grab touch-none justify-center active:cursor-grabbing"
        style={{
          x: trackStyles.x,
        }}
      >
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className=""
              style={{
                transform: active === index + 1 ? "scale(1)" : "scale(0.9)",
                opacity: active === index + 1 ? "1" : "0.5",
                transition: "all 0.2s ease",
              }}
            >
              <Card
                title={t(`techniques.${item.name}.title`)}
                description={t(`techniques.${item.name}.description`)}
              />
            </div>
          );
        })}
      </animated.div>
    </div>
  );
}
