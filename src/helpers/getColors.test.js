const getColors = () => {
    return ['yellow', 'red', 'blue']
   }

test('the array should have blue ', () =>{
    const colors = getColors(); // creamos una constante que sea el array de la funcion
    expect(colors).toContain('blue'); //comprobamos que contenga blue
} )