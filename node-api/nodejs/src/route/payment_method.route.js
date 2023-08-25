

const ct = require("../controller/payment_method.controller")
const payment_method = (app,base_route) =>{
    app.get(`${base_route}`,ct.getAll)
    app.post(`${base_route}`,ct.create)
    app.delete(`${base_route}`,ct.remove)
}
module.exports = payment_method;