import { fireEvent, getByRole, render } from "@testing-library/react";
import Component01 from "./Component01";

describe('Component01 shoul render a select with a different options and handle an onChange event ', () => {

    test('renders correctly', () => {

        const initialValue = 'option1';
        const items = ['option1', 'option2', 'option3'];
        const onChangeMock = jest.fn();

        const { getByRole, getByDisplayValue, getByText} = render(<Component01 items={items} value={initialValue} onChange={onChangeMock}/>);

        // comprobamos que se renderiza bien el componente
            const element = getByRole('combobox'); //combobox es el elemento select
            expect(element).toBeInTheDocument();

        // comprobamo que las opciones se rendericen tambien bien

        items.forEach(item => {
            expect(getByText(item)).toBeInTheDocument();
        })

        // opcion inicial esta seleccionada

        expect(getByDisplayValue(initialValue)).toBeInTheDocument();
    })
})