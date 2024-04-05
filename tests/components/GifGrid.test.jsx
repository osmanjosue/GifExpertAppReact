import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe("Pruebas en <GifGrid/>", () => {
  const category = "One Punch";

  test("should show the loading at the beginning", () => {
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test('should show items while the images are loading useFetchGifs', () => { 
    
    

   })

});
