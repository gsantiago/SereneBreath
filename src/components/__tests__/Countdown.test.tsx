import { render, screen, axe, act } from "@/test-utils";
import { Countdown } from "@/components/Countdown";

const setup = () => render(<Countdown>{() => <h1>hello world</h1>}</Countdown>);

test("show component after the countdown", async () => {
  vi.useFakeTimers();

  setup();

  expect(screen.queryByText("hello world")).not.toBeInTheDocument();

  expect(screen.getByText("3")).toBeInTheDocument();

  await act(async () => await vi.advanceTimersByTimeAsync(1000));

  expect(screen.getByText("2")).toBeInTheDocument();

  await act(async () => await vi.advanceTimersByTimeAsync(1000));

  expect(screen.getByText("1")).toBeInTheDocument();

  await act(async () => await vi.advanceTimersByTimeAsync(1000));

  expect(screen.getByText("hello world")).toBeInTheDocument();

  vi.useRealTimers();
});

test("accessibility", async () => {
  const { container } = setup();
  expect(await axe(container)).toHaveNoViolations();
});
