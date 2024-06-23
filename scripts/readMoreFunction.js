document.addEventListener('DOMContentLoaded', (event) => {
    const posts = document.querySelectorAll('.blog-post');
    posts.forEach((post) => {
        const button = post.querySelector('.read-more');
        const fullPost = post.querySelector('.full-post');
        if (button && fullPost) {
            fullPost.style.display = 'none';
            button.addEventListener('click', () => {
                if (fullPost.style.display === 'none') {
                    fullPost.style.display = 'block';
                    button.textContent = 'Show Less';
                } else {
                    fullPost.style.display = 'none';
                    button.textContent = 'Read More';
                }
            });
        }
    });
});