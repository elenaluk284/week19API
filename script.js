// Функция для создания HTML-разметки поста
function createPostHTML(post) {
    return `
        <div class="post">
            <div class="post-title">${post.title}</div>
            <div class="post-body">${post.body}</div>
        </div>
    `;
}

// Функция для добавления постов в контейнер
function addPostsToContainer(posts) {
    const container = document.getElementById('postsContainer');
    posts.forEach(post => {
        const postHTML = createPostHTML(post);
        container.innerHTML += postHTML; // Добавляем новый HTML в контейнер
    });
}

// Функция для получения постов с сервера
function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Сетевая ошибка, попробуйте снова!');
            }
            return response.json();
        })
        .then(posts => {
            addPostsToContainer(posts); // Добавляем полученные посты
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
}

// Запускаем получение постов при загрузке страницы
fetchPosts();
