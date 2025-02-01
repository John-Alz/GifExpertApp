import { render, screen, fireEvent } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe('Pruebas para <GifExpertApp/>', () => {

    test('Hacer match con el snapshot ', () => {

        const { container } = render(<GifExpertApp />);
        // screen.debug();

        expect(container).toMatchSnapshot();
    });

    test('Debe poderse escribir en el input', () => {

        const inputValue = 'Cars';

        render(<GifExpertApp />);

        // screen.debug();

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: inputValue } });

        expect(input.value).toBe(inputValue);
    });


    test('Debe verificar que no se agregue una categoria existente', () => {

        const category = "Dragon ball"

        render(<GifExpertApp />);

        const foundCategory = screen.getAllByText(category);

        expect(foundCategory).toHaveLength(1);
        expect(foundCategory.length).toBeLessThan(2);

    })

});
