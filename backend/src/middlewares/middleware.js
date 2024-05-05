
import {check} from"express-validator"

export const validator_register=[
    check('nombres', 'se necesita el nombre') .notEmpty() .isString(),
    check('direccion','ingrese la direccion').notEmpty() .isString(),
    check('telefono','se necesita el numero').notEmpty() .isString(),
    check('correo','ingrese un emal valido').notEmpty() .isEmail(),
    check('password','ingrese la clave') .notEmpty().isString(),
];