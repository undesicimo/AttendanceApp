import React from "react";
import {render,screen, getByTestId } from "@testing-library/react"
import App from "./App";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'

test("test test", () => {
    render(<App />);
    
    const nameInput = screen.getByTestId("submitButton")

    expect(nameInput).toBeInTheDocument();
    //user.keyboard('josh');
    

})
