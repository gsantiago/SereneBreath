import { Settings } from "@/config/types";
import { translate, TranslationKey } from "@/modules/i18n";

const loadedTracks: Record<string, HTMLAudioElement> = {};

let lastPlayedStep = -1;

function loadTrack(file: string) {
  const url = `/audio/${file}`;

  if (!loadedTracks[file]) {
    loadedTracks[file] = new Audio(url);
  }
}

export function loadGuideTracks(guide: Settings["guide"]) {
  if (guide === "disabled") {
    return;
  }

  const types = ["inhale", "hold", "exhale"];

  for (const type of types) {
    const file = translate(`audio.${guide}.${type}` as TranslationKey);
    loadTrack(file);
  }
}

function playTrack(file: string) {
  const track = loadedTracks[file];

  if (track) {
    track.play();
  }
}

export function playStepGuide(guide: Settings["guide"], step: number) {
  const shouldPlay = guide !== "disabled" && lastPlayedStep !== step;

  if (shouldPlay) {
    const types = ["inhale", "hold", "exhale", "hold"];
    const file = translate(`audio.${guide}.${types[step]}` as TranslationKey);

    playTrack(file);

    lastPlayedStep = step;
  }
}

export function playBell() {
  playTrack("bell.mp3");
}

loadTrack("bell.mp3");
