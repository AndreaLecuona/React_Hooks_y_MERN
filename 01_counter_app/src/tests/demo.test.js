// test('mensaje propio, qué debería ser (true/false) lo qie probamos ', () => {
//     const ejemplo = true;    
// })

test('debería ser true ', () => {
    //Arrange
    const mensaje = 'Hola Mundo!';
    
    //Act
    const mensaje2 = `Hola Mundo!`;

    //Assert
    expect(mensaje).toBe(mensaje2);
    //toBe ->  mensaje === mensaje2
});
