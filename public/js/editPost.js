const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('input[name="content"]').value.trim();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ 
            postId: id
        }),
        headers: { 
            'Content-Type': 'application/json' 
        }
    });

        if(response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
};

document
.querySelector('.delete-post-btn')
.addEventListener('click', deleteFormHandler);