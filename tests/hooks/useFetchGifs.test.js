import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs'


describe('', () => {
    test('Debe de regresar el estado incial', () => {

        const { result } = renderHook(() => useFetchGifs('Cars'));

        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy;

    });

    test('Debe de tetornar un arreglo de iamgenes y el isLoading en false', async () => {
        const { result } = renderHook(() => useFetchGifs('Cars'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy;

        //Evaluamos el comportamiento del hooks basado en su return

    })


});
