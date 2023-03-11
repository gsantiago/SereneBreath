export class AudioManager {
  private steps: Array<HTMLAudioElement | undefined> = [];
  private bell = new Audio("/audio/bell.mp3");

  private lastPlayedAudio = "";

  constructor(tracks: [string, string, string]) {
    const inhale = this.loadAudio(tracks[0]);
    const hold = this.loadAudio(tracks[1]);
    const exhale = this.loadAudio(tracks[2]);

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
