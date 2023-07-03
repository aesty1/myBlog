import { body } from "express-validator";

export const registerValidation = [
    body("email", "Неверено написали почту").isEmail(),
    body("password", "Пароль должен быть больше 5 символов").isLength({ min: 5 }),
    body("fullName", "Имя должно быть больше 5 символов").isLength({ min: 3 }),
    body("avatarUrl", "Неверная ссылка").optional().isURL()
]