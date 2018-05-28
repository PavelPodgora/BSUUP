let user = "Pavel";

let dom = (function () {
    
    let showPhotoPosts = function (arrayPosts) {
        arrayPosts.reverse();
        arrayPosts.forEach(function (value) {
            addPhotoPost(value);
        });
    };
    
    let addPhotoPost = function (photoPost) {
        const templatePhotoPost =
            `<div class="rectangleBox" id="${photoPost.id}">` +
            `<div class="foto"><img src="${photoPost.photoLink}"></div>` +
            `<div class="post">` +
            `<div class="description"><p1>${photoPost.description}</p1></div>`+
            `<div class="hashtag"><p1>${photoPost.hashTags}</p1></div>` +
            `<div class="author">${photoPost.author}</div>` +
            `<div class="date"><p1>${formatDate(photoPost.createdAt)}</p1></div>` +
            `<i class="fas fa-heart"></i>` +
            `</div>`;

        let hed = document.getElementsByClassName('FotoBox');
        let newPost = document.createElement('template');
        newPost.innerHTML = templatePhotoPost;
        hed[0].appendChild(newPost.content);
    };

    let deletePhotoPost = function (id) {
        let photoPost = document.getElementById(id);
        if(modul.removePhotoPost(id)){
            photoPost.remove();
            photoPost.flag = false;
        }
    }

    let editPhotoPost = function (id, photoPost) {
        let post = document.getElementById(id);
        if(modul.editPhotoPost(id,photoPost)){
            if('description' in photoPost){
                let descrip_mas = post.getElementsByClassName('description');
                let desctip = descrip_mas[0].firstChild;
                desctip.textContent = photoPost.description;
            }
            if('photoLink' in photoPost){
                let photoLink_mas = post.getElementsByClassName('foto');
                let photoLink = photoLink_mas[0].firstChild;
                photoLink.src = photoPost.photoLink;
            }
        }
    }

    let authUser = function ( ) {
        if(user){
            let hed = document.getElementsByClassName('header');
            let pageSettings = document.createElement('nav');
            let menu = document.createElement('ul');
            menu.className = 'menu';
            hed[0].appendChild(pageSettings);
            pageSettings.appendChild(menu);

            let liAuthor = document.createElement('li');
            let singInLink = document.createElement('a');
            singInLink.href='#';
            singInLink.textContent = user;
            liAuthor.appendChild(singInLink);
            menu.appendChild(liAuthor);

            let liAdd = document.createElement('li');
            let fotoAdd = document.createElement('i');
            fotoAdd.className = 'fas fa-plus-circle';
            liAdd.appendChild(fotoAdd);
            menu.appendChild(liAdd);

            let liOut = document.createElement('li');
            let buttonOut = document.createElement('i');
            buttonOut.className = 'fas fa-sign-out-alt';
            liOut.appendChild(buttonOut);
            menu.appendChild(liOut);


            let posts = document.getElementsByClassName('column');
            let postsArray = Array.prototype.slice.call(posts);
            postsArray.forEach(function (item) {

                let author = item.getElementsByClassName('author');
                if(author[0].textContent === user ) {
                    let block = item.getElementsByClassName('post');
                    let edit = document.createElement('i');
                    edit.className = 'fas fa-edit';
                    block[0].appendChild(edit);
                    let deleteElement = document.createElement('i');
                    deleteElement.className = 'fas fa-trash';
                    block[0].appendChild(deleteElement);
                }

            })

        }else{
            let hed = document.getElementsByClassName('container1');
            let pageSettings = document.createElement('nav');
            let menu = document.createElement('ul');
            menu.className = 'menu';
            hed[0].appendChild(pageSettings);
            pageSettings.appendChild(menu);

            let liIn = document.createElement('li');
            let buttonIn = document.createElement('i');
            buttonLogout.className = 'fas fa-sign-in-alt';
            liOut.appendChild(buttonIn);
            menu.appendChild(liIn);
        }
    }

    let filterUsers = function () {
        let dataUsers = document.getElementById('name');
        photoPosts.forEach(function (item) {
            let userName = document.createElement('option');
            userName.value = item.author;
            dataUsers.appendChild(userName);
        })
    };

    let likePhoto = function(id) {
        let post = document.getElementById(id);
        if(post != null){
            let like = post.getElementsByClassName('fas fa-heart');
            like[0].style.color = '#ff0000';
        }
    }

    let unLikePhoto = function (id) {
        let post = document.getElementById(id);
        if(post != null) {
            let unLike = post.getElementsByClassName('fas fa-heart');
            unLike[0].style.color = '#000000';
        }
    }


    let filterHashtags = function () {
        let dataUsers = document.getElementById('hashtags');
        let setHashtags = new Set();
        photoPosts.forEach(function (item) {
            item.hashtags.forEach(function (hashtags) {
                setHashtags.add(hashtag);
            });
        });
        setHashtags.forEach(function (item) {
            let hashtag = document.createElement('option');
            hashtag.value = item;
            dataUsers.appendChild(hashtag);
        })
    };

    function formatDate(date) {
        let dd = date.getDate();
        if(dd < 10) dd = '0' + dd;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    };

    return {
        filterUsers,
        filterHashtags,
        unLikePhoto,
        likePhoto,
        authUser,
        editPhotoPost,
        deletePhotoPost,
        showPhotoPosts,
        addPhotoPost
    }

})();

function showPhotoPosts(skip, top, filterConfig) {
    let postsArray = modul.getPhotoPosts(skip, top, filterConfig);
    if (typeof postsArray === 'object') {
        dom.showPhotoPosts(postsArray);
        return true;
    }
    return false;
}

function editPhotoPost(id,photoPost) {
    dom.editPhotoPost(id,photoPost);
}

function deletePhotoPost(id) {
    dom.deletePhotoPost(id);
}

function authUser() {
    dom.authUser();
}

function like(id) {
    dom.likePhoto(id);
}

function addPhotoPosts() {
    if (modul.addPhotoPost(PhotoPost)) {
        dom.addPhotoPost(PhotoPost);
        return true;
    }
    return false;
}


showPhotoPosts(0,10);
deletePhotoPost('1');

editPhotoPost('17', {author: '1234567777'});





authUser();
like('19');
//dom.filterHashtags();
dom.filterUsers();
console.log(photoPosts);