# Бекенд для сайту медичного застосунку

                                            КОРОТКИЙ ОПИС ЕНДПОІНТІВ

- POST /api/user/login (механізм авторизації користувачів)
- GET /api/user/logout (механізм виходу з застосунку)
- GET /api/user/user-info (отримання інформації про користувача)
- GET /api/dashboard (отримання відомостей про користувача, статистики останніх 30 днів, списку останніх клієнтів, списку доходів та витрат)
- GET /api/customers/:customerId (отримання докладної інформації про клієнта)
- GET /api/orders (отримання списку замовлень)
- GET /api/orders? (сортування та фільтрація)
- GET /api/products (отримання списку продуктів та доступних категорій)
- GET /api/products? (сортування та фільтрація продуктів)
- POST /api/products (додавання нового продукту)
- PUT /api/products/:productId (редагування даних продукту)
- DEL /api/products/:productId (видалення продукту)
- GET /api/suppliers (отримання списку постачальників)
- POST /api/suppliers (додавання нового постачальника)
- PUT /api/suppliers/:supplierId (редагування даних постачальника)
- GET /api/customers (отримання списку всіх клієнтів)

                                              ВИКОРИСТАНІ ТЕХНОЛОГІЇ

- HTML
- JavaScript
- Node.js
- MongoDB

                                            ТЕХНІЧНЕ ЗАВДАННЯ

● Необхідно створити API ендпоінти для обробки різних запитів від фронтенду, таких як вхід в систему, отримання та збереження даних
● Аутентифікація та авторизація: Забезпечити механізми аутентифікації та авторизації користувачів.
● Зберігання даних: Розробити структуру бази даних та моделі для зберігання інформації про дошки, колонки та картки. Забезпечити механізми для зчитування, оновлення та видалення цих даних.
● Валідація та обробка даних: Здійснити валідацію вхідних даних, щоб переконатись у їхній правильності та цілісності перед збереженням у базу даних. Обробляти помилки та повідомлення про невдалий ввід.
● Обробка запитів фронтенду: Реалізувати обробку запитів, які надсилаються з фронтенду, і виконувати відповідні дії на основі цих запитів. Наприклад, створення нових дошок, додавання колонок, оновлення карток тощо.
● Інтеграція з базою даних: Забезпечити з'єднання з базою даних та виконувати запити для отримання, збереження та оновлення даних.