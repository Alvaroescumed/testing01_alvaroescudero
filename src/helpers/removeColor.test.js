const getColors = () => {
    return ['yellow', 'red', 'blue']
   }
const removeColorFromArray = (array, color) => {
    return array.filter(element => element !== color)
   }

const result = removeColorFromArray(getColors(), 'blue')

describe('the array should have 2 elemts and blue should exist', () =>{
    it('should only have two elements ', () =>{
        expect(result.length).toBe(2); //comprobamos longitud del array
    })
    it('should not contain blue', () =>{
        expect(result).not.toContain('blue'); //comprobamos que blue no se encuentre en el array
    })
})
