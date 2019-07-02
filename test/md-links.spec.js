const functions = require('../mdLink.js');
const prueba = require('/home/laboratoriad318/Escritorio/SCL009-md-links/readme.md')

// 
test("deberia retornar n link ......", () => {
  expect.assertions(1); 
  return functions.arrayHref(prueba)
  .then(res => {
   expect(res.href).toEqual()
  });
});

