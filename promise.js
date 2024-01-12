const posts = [];
let lastUserActivityTime = null;

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            post.createdAt = new Date().getTime();
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastUserActivityTime = new Date().getTime();
            resolve(lastUserActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const poppedElement = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY");
            }
        }, 1000);
    });
}


Promise.all([createPost({ title: 'Post One' }), updateLastUserActivityTime()])
    .then(([_, updatedLastActivityTime]) => {
        console.log('Posts:', posts);
        console.log('Last User Activity Time:', updatedLastActivityTime);

        
        return deletePost();
    })
    .then((deletedPost) => {
        console.log('Deleted Post:', deletedPost);
        console.log('Remaining Posts:', posts);
    })
    .catch((error) => console.log(error));
