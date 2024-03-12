import { render } from "@testing-library/react";
import Component01 from "./Component01";

test('Component01 shoul render correctly and update values on change', () => {
    const initialValue = 'option 1';
    const items = ['option1', 'option2', 'option3'];
    const onChangeMock = jest.fn();//creamos un mock para asegurarnos de que la devolucion llamada se invoque como se esperaba

    const {getByLabelText, getByText} = render(
        <Component01 value={initialValue} items={items} onChange={onChangeMock} />
    )
        // Assert initial rendered value
    expect(getByLabelText('Select something')).toHaveValue(initialValue); // Assuming a label is present

    // Simulate user interaction
    fireEvent.change(getByLabelText('Select something'), { target: { value: 'option2' } });

    // Assert value update after change
    expect(getByText('option2')).toBeSelected();
    expect(onChangeMock).toHaveBeenCalledTimes(1); // Check if onChange handler is called
    expect(onChangeMock).toHaveBeenCalledWith('option2'); // Verify passed value
})