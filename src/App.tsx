import { useState } from "react";
import { useSpring } from "@react-spring/web";

import { Layout } from "@/components/Layout";
import { Countdown } from "@/components/Countdown";
import { Practice } from "@/components/Practice";
import { Start } from "@/components/Start";
import { Cards } from "@/components/Cards";

import { useStorage } from "@/hooks/useStorage";
import { useThemeSupport } from "@/hooks/useThemeSupport";

import { techniques } from "@/config/techniques";

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

  const selectedTechnique =
    techniques.find((p) => p.name === technique) ?? techniques[0];

  return (
    <Layout showHeaderAndFooter={showHeaderAndFooter}>
      {isActive && (
        <Countdown>
          {() => (
            <Practice
              animation={selectedTechnique.animation}
              guide={guide}
              seconds={time * 60}
              vibrateOnStepChange={vibration}
              pattern={selectedTechnique.pattern}
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

      <div className="relative flex w-full justify-center">
        <Cards />

        {!isActive && (
          <div className="absolute text-center" style={{ bottom: -84 }}>
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
          </div>
        )}
      </div>
    </Layout>
  );
}

export default App;
