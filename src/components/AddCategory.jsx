import { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("One Punch");

  const onInputChange = ({ target }) => {
    console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); //evita el refresh para que se muestre el clg de la sig linea

    if (inputValue.trim().length <= 1) return;
    console.log(inputValue);

    setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
