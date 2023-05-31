const newPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post_text = document.querySelector('textarea[name="post-text"]').value.trim();

    await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, post_text }),
        headers: { 'Content-Type': 'application/json' },
    });
};

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newPostFormHandler);