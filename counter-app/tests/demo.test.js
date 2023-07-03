
describe('Pruebas en <DemoComponent/>', () => {

test('prueba que no debe fallar', () => {
   // 1.- inicializacion
    const message1 = 'Hola mundo';
   // 2. estimulo 
    const message2 = message1.trim();
   // 3. observar el comportamiento... esperado
   expect( message1 ).toBe(message2);
})
})