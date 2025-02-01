import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Pruebas para el componente <GifItem/>', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe hacer match con el Snapshot del componente', () => {

        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    });

    test('Debe mostar la iamgen con el URL y ALT indicado', () => {

        render(<GifItem title={title} url={url} />); // Sujeto de pruebas
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });


    test('Debe de mostar el titulo en el componente', () => {

        render(<GifItem title={title} url={url} />); //Sujeto de pruebas
        expect(screen.getByText(title)).toBeTruthy();

    })




});