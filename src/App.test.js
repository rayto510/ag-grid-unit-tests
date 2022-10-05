import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the grid', () => {
    render(<App />);

    expect(screen.getByText("Make")).toBeInTheDocument();
    expect(screen.getByText("Model")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();

    expect(screen.getByText("Toyota")).toBeInTheDocument();
    expect(screen.getByText("Ford")).toBeInTheDocument();
    expect(screen.getByText("Porsche")).toBeInTheDocument();

    expect(screen.getByText("Celica")).toBeInTheDocument();
    expect(screen.getByText("Mondeo")).toBeInTheDocument();
    expect(screen.getByText("Boxster")).toBeInTheDocument();

    expect(screen.getByText("35000")).toBeInTheDocument();
    expect(screen.getByText("32000")).toBeInTheDocument();
    expect(screen.getByText("72000")).toBeInTheDocument();
});
