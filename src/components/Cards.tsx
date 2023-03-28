import { Carousel } from "@/components/Carousel";
import { Card, WIDTH as CARD_WIDTH } from "@/components/Card";

import { useTranslation } from "@/hooks/useTranslation";
import { useStorage } from "@/hooks/useStorage";

import { RingAnimationCard } from "@/animations/RingAnimation";
import { ClassicAnimationCard } from "@/animations/ClassicAnimation";
import { CircleAnimationCard } from "@/animations/CircleAnimation";
import { SquareAnimationCard } from "@/animations/SquareAnimation";

import { techniques } from "@/config/techniques";
import { Animation, AnimationCardProps, Technique } from "@/config/types";

export function Cards() {
  const { t } = useTranslation();

  const [technique, setTechnique] = useStorage("technique");
  const activeIndex = techniques.findIndex((t) => t.name === technique);

  return (
    <Carousel<Technique>
      activeIndex={activeIndex}
      itemWidth={CARD_WIDTH}
      items={[...techniques]}
      onChange={(item) => setTechnique(item.name)}
    >
      {({ item, isActive }) => (
        <Card
          title={t(`techniques.${item.name}.title`)}
          description={t(`techniques.${item.name}.description`)}
          pattern={item.pattern}
          isActive={isActive}
          animation={animations[item.animation]}
        />
      )}
    </Carousel>
  );
}

const animations: Record<Animation, React.FC<AnimationCardProps>> = {
  circle: CircleAnimationCard,
  classic: ClassicAnimationCard,
  ring: RingAnimationCard,
  square: SquareAnimationCard,
};
