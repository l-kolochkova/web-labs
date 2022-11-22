test('renders the login page', () => {
    render(<App />);
    
    expect(screen.getByRole("h1")).toHaveDisplayValue("Log In");
    expect(screen.getByRole("button", { name: "Log in" })).toBeDisabled();
    expect(screen.getByRole("input")).toBeInTheDocument();
  });