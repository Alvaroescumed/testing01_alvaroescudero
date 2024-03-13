import { fireEvent, getByLabelText, getByText, render } from "@testing-library/react";
import Component01 from "./Component01";

describe('Component01 shoul render a select with a different options and handle an onChange event ', () => {

    const initialValue = 'option1';
    const items = ['option1', 'option2', 'option3'];
    const onChangeMock = jest.fn();


    it('Should render correctly', () => {
        const select = render(<Component01 items={items} value={initialValue} onChange={onChangeMock}/>);
    })

})