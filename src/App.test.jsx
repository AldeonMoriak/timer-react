import {
  render,
  screen
} from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { expect, test, vi } from "vitest";

function Timer() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let timer = setInterval(() => {
      setCount(v => v + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return <div>{count}</div>
}
test("should render correctly", () => {
    vi.useFakeTimers();
    render(<Timer />);
    vi.advanceTimersByTime(2000);
    screen.debug();
    expect(screen.getByText("2")).toBeDefined();
});