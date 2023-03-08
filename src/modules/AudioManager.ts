import { Settings } from "../config/types";

export class AudioManager {
  private steps: Array<HTMLAudioElement | undefined> = [];
  private bell = new Audio("/audio/bell.mp3");

  private lastPlayedAudio = "";

  constructor(guide: Settings["guide"]) {
    const tracks = guides[guide];

    const inhale = this.loadAudio(tracks.inhale);
    const hold = this.loadAudio(tracks.hold);
    const exhale = this.loadAudio(tracks.exhale);

    this.steps = [inhale, hold, exhale, hold];
  }

  private loadAudio(path: string) {
    if (path) {
      return new Audio(`/audio/${path}`);
    }
  }

  private playSound(audio?: HTMLAudioElement) {
    if (audio && this.lastPlayedAudio !== audio.src) {
      audio.play();
      this.lastPlayedAudio = audio.src;
    }
  }

  playStep(step: number) {
    this.playSound(this.steps[step]);
  }

  playBell() {
    this.playSound(this.bell);
  }
}

const guides: Record<
  Settings["guide"],
  Record<"inhale" | "hold" | "exhale", string>
> = {
  female: {
    inhale: "female_inhale.mp3",
    hold: "female_hold.mp3",
    exhale: "female_exhale.mp3",
  },
  male: {
    inhale: "male_inhale.mp3",
    hold: "male_hold.mp3",
    exhale: "male_exhale.mp3",
  },
  bell: {
    inhale: "bell_1.mp3",
    hold: "bell_2.mp3",
    exhale: "bell_1.mp3",
  },
  disabled: {
    inhale: "",
    hold: "",
    exhale: "",
  },
};
