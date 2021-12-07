const app = require('../src/App');
const math = require('../src/math');

//Aca se pone el nombre de la prueba
test("calls math.add", () => {
    // Almacenamos la funcion add
    const originalAdd = math.add;
  
    /* Ahora generamos el mock sobre la funcion original para que pueda 
    ser utilizando en la pruebas con implementaciones de Mock*/
    math.add = jest.fn(originalAdd);
  
    /* realizamos una prueba donde llamamos al metodo doAdd que tiene app y le decimos que
    se espera como resultado un valor igual a 3*/
    expect(app.doAdd(1, 2)).toEqual(3);
    //en esta linea preguntamos si la math.add fue llamada con 1 y 2, este math.add fue mockeada
    expect(math.add).toHaveBeenCalledWith(1, 2);
  
    // utilizando el mockImplementation podemos cambiar el resultado de la funcion
    //Diendo que ahora la respuesta sera "mock"
    math.add.mockImplementation(() => "mock");
    expect(app.doAdd(1, 2)).toEqual("mock");
    expect(math.add).toHaveBeenCalledWith(1, 2);
  
    // En esta linea se vuelve a asignar la funcion original por lo que ya no se puede
    //utilizar el mockImplementation
    math.add = originalAdd;
    expect(app.doAdd(1, 2)).toEqual(3);
  });