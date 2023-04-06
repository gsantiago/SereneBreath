import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

import { Layout } from "@/components/Layout";
import { Countdown } from "@/components/Countdown";
import { Practice } from "@/components/Practice";
import { Start } from "@/components/Start";
import { Cards } from "@/components/Cards";

import { useStorage } from "@/hooks/useStorage";
import { useThemeSupport } from "@/hooks/useThemeSupport";

import { loadGuideTracks, loadTrack } from "@/modules/sounds";

import { techniques } from "@/config/techniques";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const [technique] = useStorage("technique");
  const [time] = useStorage("time");
  const [guide] = useStorage("guide");
  const [vibration] = useStorage("vibration");
  const [customPattern] = useStorage("customPattern");

  const [startStyle, startSpring] = useSpring(() => ({
    from: {
      opacity: 1,
      scale: 1,
    },
  }));

  useThemeSupport();

  const selectedTechnique =
    techniques.find((p) => p.name === technique) ?? techniques[0];

  const pattern =
    technique === "custom" ? customPattern : selectedTechnique.pattern;

  return (
    <Layout showHeader={showHeader}>
      {isActive && (
        <Countdown>
          {() => (
            <Practice
              animation={selectedTechnique.animation}
              guide={guide}
              seconds={time * 60}
              vibrateOnStepChange={vibration}
              pattern={pattern}
              onClose={() => {
                setShowHeader(true);
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
        <animated.div
          className="relative mb-5 flex w-full justify-center pt-20"
          style={startStyle}
        >
          <Cards />

          <div className="absolute bottom-0">
            <Start
              onClick={() => {
                setShowHeader(false);

                loadTrack("bell.mp3");
                loadGuideTracks(guide);

                startSpring.start({
                  to: {
                    opacity: 0,
                    scale: 0.9,
                  },
                  onResolve: () => setIsActive(true),
                });
              }}
            />
          </div>
        </animated.div>
      )}
    </Layout>
  );
}

export default App;
