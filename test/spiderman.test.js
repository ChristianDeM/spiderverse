const Spiderman = require('../app/Spiderman')
describe("Probando clase spyderman", () => {
    test('Caso 1: crando un objeto', () => {
      const Andrew = new Spiderman("spyderman sony",31,"Andrew Garfield","sony")
        expect(andrew.name).toBe("spyderman sony")
    });
  })