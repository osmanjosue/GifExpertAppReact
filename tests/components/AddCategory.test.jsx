import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("should change the value of the text box", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    /* screen.debug(); */
    const input = screen.getByRole('textbox')

    fireEvent.input( input, {target: {value: 'Saitama'}} );

    expect (input.value).toBe('Saitama');

    screen.debug();

  });
});
