import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("should change the value of the text box", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    /* screen.debug(); */
    const input = screen.getByRole('textbox')

    fireEvent.input( input, {target: {value: 'Saitama'}} );

    expect (input.value).toBe('Saitama');

  });
  test("should call OnNewCategory if the input has a value", () => {

    const inputValue = "Saitama";

    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit( form );
    //screen.debug();
    expect( input.value ).toBe('');

  });
});
