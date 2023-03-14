import { Settings } from "@/config/types";
import { translate, TranslationKey } from "@/modules/i18n";

type Guide = Settings["guide"];

export class AudioManager {
  private steps: Array<HTMLAudioElement | undefined> = [];
  private bell = new Audio("/audio/bell.mp3");

  private lastPlayedAudio = "";

  constructor(guide: Guide) {
    const tracks = this.getTracks(guide);

    const inhale = this.loadAudio(tracks[0]);
    const hold = this.loadAudio(tracks[1]);
    const exhale = this.loadAudio(tracks[2]);

    this.steps = [inhale, hold, exhale, hold];
  }

  private getTracks(guide: Guide) {
    if (guide === "disabled") {
      return ["", "", ""];
    }

    const types = ["inhale", "hold", "exhale"];

    return types.map((type) =>
      translate(`audio.${guide}.${type}` as TranslationKey)
    );
  }

  private loadAudio(path: string) {
    if (path) {
      const url = `/audio/${path}`;
      return new Audio(url);
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
