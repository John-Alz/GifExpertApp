
import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas para el helper getGifs()', () => {
    test('La funcion getGifs debe recibir una categoria y retornar un array de objetos', async () => {

        const category = 'Cars';

        const gifs = await getGifs(category);

        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })

    })

});
