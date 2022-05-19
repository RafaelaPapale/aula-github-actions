const Users = require('../src/application/users_service');
const Constants = require('../src/utils/constants');
const Utils = require('../src/utils/utils');
const UsersRepository = require('../src/port/users_repository');

jest.mock('../src/port/users_repository');

test('CREATE - Dado válido', async () => {
    const data = {
        nome: "João",
        email: "joao@inatel.br",
        senha: "123456789"
    }

    const id = Utils.generateUuid();

    UsersRepository.create.mockResolvedValue({ ...data, id });

    const result = await Users.create(data);
    expect(result).toEqual({ ...data, id });
})

test('CREATE - Dado duplicado', async () => {
    const data = {
        nome: "João",
        email: "joao@inatel.br",
        senha: "123456789"
    }

    const id = Utils.generateUuid();

    UsersRepository.create.mockResolvedValue({ code: 11000 });

    const result = await Users.create(data);
    expect(result).toEqual(Constants.ErrorDuplicate);
})
