import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../src/App';
import userEvent from '@testing-library/user-event';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

describe('App component', () => {
  it('renders correct snapshot', () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();

  });

  it('renders count increase after button click', async () => {

    const user = userEvent.setup();
    render(<App />);
    const button = screen.getByRole("button", { name: "count is 0" });

    await user.click(button);

    expect(screen.getByRole("button").textContent).toBe("count is 1")

  });
});