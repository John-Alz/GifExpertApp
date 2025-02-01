import { render, screen, fireEvent } from "@testing-library/react";
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas para <GifGrid/>', () => {

    const category = 'Cars';

    test('Debe de mostarar el loading inicailmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} onDeleteCategory={() => { }} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });


    test('Debe de mostrar items cuandos se cargan las imagenes mediante el useFetchGif', () => {

        const gifs = [
            {
                id: 'abc',
                title: 'Cars',
                url: 'https://cars.com',
            },
            {
                id: 'def',
                title: 'Dragon Ball',
                url: 'https://dragonball.com/goku',
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} onDeleteCategory={() => { }} />);

        expect(screen.getAllByRole('img').length).toBe(2);
    });

    test('Debe llamar onDeleteCategoy al hacer click en btn eliminar', () => {

        const onDeleteCategory = jest.fn();

        render(<GifGrid category={category} onDeleteCategory={onDeleteCategory} />);

        const btn = screen.getByRole('button');

        fireEvent.click(btn);

        expect(onDeleteCategory).toHaveBeenCalledTimes(1);

    });


});
