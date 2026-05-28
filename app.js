// LOAD NEWS ARTICLES

const newsContainer = document.getElementById('news-container');

function loadNews() {
    newsContainer.innerHTML = '';

    newsData.forEach(news => {
        const card = document.createElement('div');
        card.classList.add('news-card');

        card.innerHTML = `
            <img src="${news.image}" alt="news image">
            <div class="news-content">
                <h3>${news.title}</h3>
                <p>${news.description}</p>
                <a href="${news.link}" target="_blank">Read More</a>
            </div>
        `;

        newsContainer.appendChild(card);
    });
}

loadNews();

// COMMENT SYSTEM CODE SAVER

const showCommentBox = document.getElementById('showCommentBox');
const commentCodeArea = document.getElementById('commentCodeArea');
const saveCodeBtn = document.getElementById('saveCodeBtn');
const customCommentSystem = document.getElementById('customCommentSystem');

showCommentBox.addEventListener('click', () => {
    commentCodeArea.style.display = 'block';
});

saveCodeBtn.addEventListener('click', () => {
    const code = document.querySelector('.comment-section textarea').value;

    customCommentSystem.innerHTML = code;

    localStorage.setItem('commentSystemCode', code);
});

// LOAD SAVED COMMENT CODE
window.addEventListener('load', () => {
    const savedCode = localStorage.getItem('commentSystemCode');

    if(savedCode){
        customCommentSystem.innerHTML = savedCode;
    }
});
