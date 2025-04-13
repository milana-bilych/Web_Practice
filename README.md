#### Web_Practice

### 🧰 Як працювати з Postman (покроково)

## 📥 1. Встановлення

Завантажити Postman:
- https://www.postman.com/downloads/

Встановити та відкрити.
---

## 🧪 2. Надсилання запитів до твого сервера

Перед тестуванням переконайтесь, що сервер **запущено**:
```bash
node server.js
```

# 🔹 POST — створення книги

1. В Postman: натисність **"New" → "HTTP Request"**
2. Оберіть метод **POST**
3. Введіть URL:
   ```
   http://localhost:3000/books
   ```
4. Перейдіть на вкладку **Body**
5. Оберіть **raw** і тип **JSON**
6. Введіть дані, наприклад:
   ```json
   {
     "title": "1984",
     "author": "George Orwell",
     "published_year": 1949
   }
   ```
7. Натисніть **Send**

✅ Має повернутись об'єкт нової книги.

![image](https://github.com/user-attachments/assets/3c0c6d4a-a7d4-4185-87d8-849ab85e24c2)

---

# 🔹 GET — отримати всі книги

1. Оберіть метод **GET**
2. URL:
   ```
   http://localhost:3000/books
   ```
3. Натисніть **Send**

✅ Поверне масив усіх книг.

![image](https://github.com/user-attachments/assets/e5c0e6c6-aa4d-490a-8d7e-9b3b6db76865)
![image](https://github.com/user-attachments/assets/ae52d553-2495-4aa9-aac7-01d26772a941)

---

# 🔹 GET — отримати книгу по ID

1. Метод **GET**
2. URL (наприклад, `id = 1`):
   ```
   http://localhost:3000/books/1
   ```
3. Натисніть **Send**

✅ Поверне конкретну книгу.

![image](https://github.com/user-attachments/assets/4dfeb0ea-eff5-4ddc-98c7-111c9077555d)
![image](https://github.com/user-attachments/assets/83b4a853-97a3-4dba-9815-3b31b62ec0c0)

---

# 🔹 PUT — оновлення книги

1. Метод **PUT**
2. URL:
   ```
   http://localhost:3000/books/1
   ```
3. Body → raw → JSON:
   ```json
   {
     "title": "Новий Заголовок",
     "author": "Новий Автор",
     "published_year": 2022
   }
   ```
4. Натисніть **Send**

✅ Книга оновиться.

![image](https://github.com/user-attachments/assets/0f198c2e-ebca-4274-8f91-48c8291425c6)
![image](https://github.com/user-attachments/assets/77c81828-ad46-405e-9271-b91aec47ace3)

---

## 🔹 DELETE — видалити книгу

1. Метод **DELETE**
2. URL:
   ```
   http://localhost:3000/books/1
   ```
3. Натисніть **Send**

✅ Повернеться повідомлення, що книга видалена.

![image](https://github.com/user-attachments/assets/640b1c85-9da7-4596-808a-b934db07763a)
![image](https://github.com/user-attachments/assets/85b3931e-e905-477d-b136-0daf3ccd7ace)

