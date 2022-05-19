const Users = require('../application/users_service');
const Utils = require('../utils/utils');

const route = '/users';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Users.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.put(`${route}/update`, async (req, res) => {
        const response = await Users.update(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.delete(`${route}/delete`, async (req, res) => {
        const response = await Users.delete(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/list`, async (req, res) => {
        const response = await Users.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.patch(`${route}/listUser`, async (req, res) => {
        const response = await Users.listByEmail(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};