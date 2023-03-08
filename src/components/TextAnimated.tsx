import React, { useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";

export interface TextAnimatedProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: string;
}

export function TextAnimated({ style, ...props }: TextAnimatedProps) {
  const [springs, api] = useSpring(() => ({
    from: { opacity: 0, y: -10 },
  }));

  useEffect(() => {
    api.start({
      from: {
        opacity: 0,
        y: -10,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    });
  }, [props.children]);

  return <animated.p style={{ ...style, ...springs }} {...props} />;
}
