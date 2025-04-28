Звісно! Ось готовий **текст у форматі Markdown** для документації твого проєкту:

---

# 📚 University Students API

Створення RESTful API для управління студентами університету за допомогою **Node.js**, **Express** та **PostgreSQL**.

---

## 📦 Структура проєкту

```
university-api/
├── sql/
│   └── setup.sql
├── .env
├── .gitignore
├── db.js
├── server.js
├── package.json
└── node_modules/
```

---

## ⚙️ Використані технології

- Node.js
- Express.js
- PostgreSQL
- dotenv
- pg
- Postman для тестування API

---

## 🛠 Налаштування проекту

1. Ініціалізація проекту:

    ```bash
    npm init -y
    npm install express pg dotenv
    ```

2. Створення бази даних:

    Виконайте `sql/setup.sql` у вашій базі даних PostgreSQL:
    ```bash
    psql -U postgres -d university -f sql/setup.sql
    ```

3. Створення файлу `.env`:

    ```dotenv
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=postgres
    DB_PASSWORD=your_password
    DB_NAME=university
    ```

4. Створення файлу `.gitignore`:

    ```plaintext
    node_modules/
    .env
    logs/
    *.log
    dist/
    build/
    .DS_Store
    Thumbs.db
    ```

---

## 🚀 Запуск сервера

```bash
node server.js
```
або для автоматичного перезапуску при зміні файлів:
```bash
npx nodemon server.js
```

---

## 📋 Доступні маршрути API

| Метод | Endpoint | Опис |
|:------|:---------|:-----|
| GET | `/api/students` | Отримати список всіх студентів |
| GET | `/api/students/:id` | Отримати студента за id |
| POST | `/api/students` | Додати нового студента |
| PUT | `/api/students/:id` | Оновити дані студента |
| DELETE | `/api/students/:id` | Видалити студента |

---

## 📝 Приклад запиту POST

**URL**: `POST http://localhost:3000/api/students`  
**Body (JSON, raw)**:

```json
{
  "name": "Milana Bilych",
  "age": 19,
  "major": "Cybersecurity"
}
```

---

🧪 Тестування API
Рекомендується використовувати Postman або Insomnia для перевірки роботи всіх маршрутів.

📸 Скріншот прикладу тестування API:
![image](https://github.com/user-attachments/assets/1662b974-2360-435f-9f30-9fa226a5edb8)
![image](https://github.com/user-attachments/assets/795d05b8-0374-4f4e-9cf5-0c3e2f32fce4)
![image](https://github.com/user-attachments/assets/2d4f79b4-eb9e-40c2-877c-f64ab4f4e0ea)
![image](https://github.com/user-attachments/assets/860eb07f-dbaa-492d-b99e-ca25bfe5439e)
![image](https://github.com/user-attachments/assets/577a7c94-7fbb-45d1-9bac-b4fb2519c913)

---

## 🛡️ Обробка помилок

- **400 Bad Request** — якщо не заповнені обов'язкові поля (`name`, `age`, `major`).
![image](https://github.com/user-attachments/assets/8e88d2ef-25c5-430e-af07-798480b68c8d)

- **404 Not Found** — якщо студент з заданим `id` не знайдений.
![image](https://github.com/user-attachments/assets/2ad136e1-5d52-4f28-a6ae-c91a50335af5)

- **500 Internal Server Error** — якщо сталася помилка на сервері або у базі даних.
![image](https://github.com/user-attachments/assets/4585d99c-63c2-4c31-a453-3290415a1b1b)

---

## 📋 Тестування API

Рекомендується використовувати **Postman** або **Insomnia** для перевірки роботи всіх маршрутів.
