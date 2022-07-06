/**
 * @jest-environment jsdom
 *
 * @define sldkfjlsdkjf
 * @ToDo slkdfjsldkfj
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@pages/index"; // 위에서 path alias를 미리 설정해 두어서 편리하게 사용!

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
