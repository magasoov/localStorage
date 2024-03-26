// Функция для регистрации пользователя
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    
    // Получаем текущих пользователей из локального хранилища
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Проверяем, есть ли пользователь с таким именем
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        alert('Пользователь с таким именем пользователя уже существует');
        return;
    }
    
    // Добавляем нового пользователя
    users.push({ username, password });
    
    // Обновляем данные в локальном хранилище
    localStorage.setItem('users', JSON.stringify(users));
    alert('Пользователь успешно зарегистрировался');
}

// Функция для аутентификации пользователя
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Получаем текущих пользователей из локального хранилища
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Проверяем, существует ли пользователь с таким именем и паролем
    const authenticatedUser = users.find(user => user.username === username && user.password === password);
    if (authenticatedUser) {
        alert('Вход в систему успешен');
        window.location.href = "perehod.html";
        return false
    } else {
        alert('Неверное имя пользователя или пароль');
    }
}
