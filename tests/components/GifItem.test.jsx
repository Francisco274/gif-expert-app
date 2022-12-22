import { render } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Pruebas en <GifItem />', () => { 
    
    const title = 'Goku'
    const url = 'https://goku.com/goku.jpg'

    test('Debe hacer match con el snapshot', () => { 
        const {container} = render(<GifItem title={title} url = {url} />)
        expect(container).toMatchSnapshot();
        
    })
    
});