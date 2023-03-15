export const canVibrate = "vibrate" in navigator;

export function createVibrator({ enabled }: { enabled: boolean }) {
  return {
    vibrate(duration: number) {
      if (enabled && canVibrate) {
        navigator.vibrate(duration);
      }
    },
  };
}
