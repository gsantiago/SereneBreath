let sentinel: null | WakeLockSentinel = null;

export async function lock() {
  try {
    if ("wakeLock" in navigator) {
      sentinel = await navigator.wakeLock.request("screen");
    }
  } catch (error) {
    console.error(error);
    sentinel = null;
  }
}

export async function release() {
  if (sentinel) {
    await sentinel.release();
    sentinel = null;
  }
}
