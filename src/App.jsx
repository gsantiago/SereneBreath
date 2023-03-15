import React, { useState } from "react";
import { useSpring } from "@react-spring/web";

import { Layout } from "./components/Layout";
import { Countdown } from "./components/Countdown";
import { Practice } from "./components/Practice";
import { Start } from "./components/Start";

import { useStorage } from "./hooks/useStorage";
import { useThemeSupport } from "./hooks/useThemeSupport";

import { techniques } from "./config/techniques";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [showHeaderAndFooter, setShowHeaderAndFooter] = useState(true);

  const [technique] = useStorage("technique");
  const [time] = useStorage("time");
  const [guide] = useStorage("guide");
  const [vibration] = useStorage("vibration");

  const [startStyle, startSpring] = useSpring(() => ({
    from: {
      opacity: 1,
      scale: 1,
    },
  }));

  useThemeSupport();

  return (
    <Layout showHeaderAndFooter={showHeaderAndFooter}>
      {isActive && (
        <Countdown>
          {() => (
            <Practice
              guide={guide}
              seconds={time * 60}
              vibrateOnStepChange={vibration}
              pattern={techniques.find((p) => p.name === technique).pattern}
              onClose={() => {
                setShowHeaderAndFooter(true);
                setIsActive(false);

                startSpring.start({
                  to: {
                    opacity: 1,
                    scale: 1,
                  },
                });
              }}
            />
          )}
        </Countdown>
      )}

      {!isActive && (
        <Start
          onClick={() => {
            setShowHeaderAndFooter(false);

            startSpring.start({
              to: {
                opacity: 0,
                scale: 0.3,
              },
              onResolve: () => setIsActive(true),
            });
          }}
          style={startStyle}
        />
      )}
    </Layout>
  );
}

export default App;
