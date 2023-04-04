import { animated, useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";

export interface CarouselProps<Item> {
  itemWidth: number;
  activeIndex: number;
  onChange: (activeItem: Item) => void;
  items: Item[];
  children: (params: {
    item: Item;
    activeItem: Item;
    index: number;
    isActive: boolean;
  }) => React.ReactNode;
}

export function Carousel<Item>({
  activeIndex,
  onChange,
  itemWidth,
  items,
  children: renderItem,
}: CarouselProps<Item>) {
  const center = Math.ceil(items.length / 2) - 1;
  const threshold = itemWidth / 3;

  const getX = (index: number) => (index - center) * -itemWidth;

  const [trackStyles, trackSpring] = useSpring(() => ({
    x: getX(activeIndex),
  }));

  const selectIndex = (index: number) => {
    if (index >= 0 && index < items.length) {
      const newX = getX(index);

      trackSpring.start({
        x: newX,
      });

      onChange(items[index]);
    } else {
      trackSpring.start({
        x: getX(activeIndex),
      });
    }
  };

  const bind = useGesture(
    {
      onDrag: (state) => {
        const [mx] = state.movement;

        trackSpring.start({
          x: getX(activeIndex) + mx,
        });
      },
      onDragEnd: (state) => {
        const [mx] = state.movement;

        // LEFT
        if (mx > threshold) {
          return selectIndex(activeIndex - 1);
        }

        // RIGHT
        if (mx < -threshold) {
          return selectIndex(activeIndex + 1);
        }

        trackSpring.start({
          x: getX(activeIndex),
        });
      },
    },
    {
      drag: {
        filterTaps: true,
      },
    }
  );

  const extraMargin = items.length % 2 === 0 ? itemWidth / 2 : 0;

  return (
    <div className="relative select-none" style={{ width: "100%" }}>
      <animated.div
        {...bind()}
        className="relative flex w-full cursor-grab touch-none justify-center pb-12 active:cursor-grabbing"
        style={{
          x: trackStyles.x,
          marginLeft: extraMargin,
          marginRight: extraMargin,
        }}
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className={`transition-all duration-200 ${
                isActive ? "" : "scale-90 opacity-50"
              }`}
              onClick={() => selectIndex(index)}
            >
              {renderItem({
                item,
                activeItem: items[activeIndex],
                isActive,
                index,
              })}
            </div>
          );
        })}
      </animated.div>
    </div>
  );
}
