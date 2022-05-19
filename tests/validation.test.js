const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

test('Caso válido', () => {
    const result = Validation.create({
        nome: "Rafaela",
        email: "rafaela.papale@gec.inatel.br",
        senha: "123456789"
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido - Retirando nome', () => {
    const result = Validation.create({
        email: "rafaela.papale@gec.inatel.br",
        senha: "123456789"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
