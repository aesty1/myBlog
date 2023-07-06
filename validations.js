import { body } from "express-validator";

export const registerValidation = [
    body("email", "Неверено написали почту").isEmail(),
    body("password", "Пароль должен быть больше 5 символов").isLength({ min: 5 }),
    body("fullName", "Имя должно быть больше 5 символов").isLength({ min: 3 }),
    body("avatarUrl", "Неверная ссылка").optional().isURL()
]

export const loginValidation = [
    body("email", "Неверено написали почту").isEmail(),
    body("password", "Пароль должен быть больше 5 символов").isLength({ min: 5 })
]

export const postCreateValidation = [
    body("title", "Введите заголовок статьи").isLength({ min: 5 }).isString(),
    body("text", "Введите текст статьи").isLength({ min: 20 }).isString(),
    body("tags", "Неверный формат тэгов").optional().isArray(),
    body("imageUrl", "Неверная ссылка на изображение").optional().isString()
]