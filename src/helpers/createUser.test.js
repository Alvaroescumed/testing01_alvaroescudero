const createUser = (name, age) => ({ name, age })

test('It should return the correct object', () =>{
    const user = createUser("Jane", 24);
    expect(user).toEqual({name:"Jane", age:24}); // usamos to equal porque toBe es extricto y nos da como error
})