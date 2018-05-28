/*
let logical = (function() {
*/

    var photoPosts = [
        {
            id: '1',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-19T23:00:00'),
            author: 'Pavel Podoprigora',
            photoLink: '1.jpg',
            hashTags: ['#ram', '#rider'],
            likes: ['Nikita Grishin', 'Andron Butirca'],
            flag: true
        },
        {
            id: '2',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-12T23:23:00'),
            author: 'Nikita Grishin',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['#smile', '#long'],
            likes: ['Nikita Grishin', 'Andron Butirca', 'Pavel Podoprigora'],
            flag: true
        },
        {
            id: '3',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-9T23:22:00'),
            author: 'Andron Butirca',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['#linda', '#lolo'],
            likes: ['Nikita Grishin', 'Prishep Mac'],
            flag: true
        },
        {
            id: '4',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-8T23:21:00'),
            author: 'Prishep Mac',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['#luntik', 'lulu'],
            likes: ['Nikita Grishin', 'Andron Butirca'],
            flag: true
        },
        {
            id: '5',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-7T23:20:00'),
            author: 'Dimas Kotus',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['#ramzi', '#ramzes'],
            likes: ['Nikita Grishin', 'Andron Butirca'],
            flag: true
        },
        {
            id: '6',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-14T23:19:00'),
            author: 'Valai San',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['#ramires', '#raddj'],
            likes: ['Nikita Grishin', 'Andron Butirca'],
            flag: true
        },
        {
            id: '8',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-15T23:18:00'),
            author: 'Glush Fil',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['#Minsk', '#Belarus'],
            likes: ['Nikita Grishin', 'Andron Butirca'],
            flag: true
        },
        {
            id: '9',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-16T23:17:00'),
            author: 'Kusmuk San',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['#01', '#2018'],
            likes: ['Nikita Grishin', 'Andron Butirca'],
            flag: true
        },
        {
            id: '10',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-26T23:16:00'),
            author: 'Naum Dan',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['#New_year', '#2019'],
            likes: ['Nikita Grishin', 'Andron Butirca'],
            flag: true
        },
        {
            id: '11',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:15:00'),
            author: 'Gusak San',
            photoLink: '',
            hashTags: ['#very', '#old'],
            likes: ['Nikita Grishin', 'Andron Butirca'],
            flag: true
        },
        {
            id: '12',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-24T23:14:00'),
            author: 'Nikifor Nik',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['#shersh', '#problems'],
            likes: ['Nikita Grishin', 'Andron Butirca'],
            flag: true
        },
        {
            id: '13',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-28T23:13:00'),
            author: 'Dimas Gabr',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['#gta5', '#top_in_theWorld'],
            likes: ['Nikita Grishin', 'Andron Butirca'],
            flag: true
        },
        {
            id: '14',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-03T23:12:00'),
            author: 'Djuk Kat',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['#true'],
            likes: ['Nikita Grishin', 'Andron Butirca'],
            flag: true
        },
        {
            id: '15',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-01T23:11:00'),
            author: 'Ketok Jen',
            photoLink: '',
            hashTags: ['#false'],
            likes: ['Nikita Grishin', 'Andron Butirca'],
            flag: true
        },
        {
            id: '16',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-27T23:10:00'),
            author: 'Veron belka',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['#backend'],
            likes: ['Nikita Grishin', 'Andron Butirca'],
            flag: true
        },
        {
            id: '17',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:9:00'),
            author: 'San Gush',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['#frontend'],
            likes: ['Nikita Grishin', 'Andron Butirca'],
            flag: true
        },
        {
            id: '18',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:8:00'),
            author: 'Gus San',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['#oracle', '#fpm'],
            likes: ['Nikita Grishin', 'Andron Butirca'],
            flag: true
        },
        {
            id: '19',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:7:00'),
            author: 'Sis Ila',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['#Noon'],
            likes: ['Nikita Grishin', 'Andron Butirca'],
            flag: true
        },
        {
            id: '20',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:6:00'),
            author: 'Lis Jak',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['#Son', '#moon'],
            likes: ['Nikita Grishin', 'Andron Butirca'],
            flag: true
        },
    ];

    let modul = (function() {
        let removePhotoPost = function (id) {
            for (let i = 0; i < photoPosts.length; i++) {
                if (photoPosts[i].id === id) {
                    photoPosts.splice(i, 1);
                    photoPosts.flag = false;
                    return true;
                }
            }
            return false;
        }

        let getPhotoPost = function (id) {
            for(i = 0;i<photoPosts.length;i++){
                if(photoPosts[i].id == id && photoPosts[i].flag == true){
                    return photoPostsp[i];
                }
            }

        }

        var validationPost ={
            id: '1',
            description: 'Description',
            createdAt: new Date('2018-02-01T23:00:00'),
            author: 'Pavel',
            photoLink: '1.jpg',
            hashTags: ['#tag1', '#tag2', '#tag3'],
            likes: ['Author1', 'Author2', 'Author3'],
            flag: true
        }


        let validatePhotoPost = function (post) {
            for (key in validationPost) {
                if (typeof post[key] != typeof validationPost[key]) {
                    return false;
                }
            }
            if (Object.keys(post).length != Object.keys(validationPost).length)
                return false;
            if (post['description'].length >= 200)
                return false;
            if (post['createdAt'] == 'Invalid Date')
                return false;
            if (post['author'] == '')
                return false;
            if (validateHashtags(post.hashTags) === false)
                return fasle;
            if (validateLikes(post.likes) === false)
                return false;
            return true;

            function checkHashtags(photoPosts) {
                return photoPosts.hashtags.every(function (item) {
                    return item.charAt(0) === "#";
                });
            }

            return true;
        }


        let addPhotoPost = function (post) {
            if (validatePhotoPost(post)) {
                photoPosts.push(post);
                return post;
            }
            return null;
        }

        let editPhotoPost = function (id, PhotoPosts) {
            let index = photoPosts.findIndex(item => item.id === id);
            if (validatePhotoPost(photoPosts[index])) {
                for (let key in PhotoPosts) {
                    if (key !== "author" && key !== "id" && key !== "createdAt" && key !== "likes" && key !== "hashtags") {
                        photoPosts[index][key] = PhotoPosts[key];
                    } else {
                        return false;
                    }
                }
                return true;
            } else {
                return false;
            }
        }

        let compareDate = function (a,b) {
            return a.createdAt - b.createdAt;
        }
        let getPhotoPosts = function (skip = 0, top = 10, filterConfig) {

            let newMass_posts = photoPosts.concat();
            if (filterConfig === undefined) {
                photoPosts.sort(compareDate);
                return newMass_posts.slice(skip, skip + top);
            }
            else {
                if (filterConfig.author) {
                    newMass_posts = newMass_posts.filter(function (item) {
                        return item.author === filterConfig.author;
                    });
                }
                if (filterConfig.createdAt) {
                    newMass_posts = newMass_posts.filter((function (item) {
                        return Date.parse(item.createdAt) > Date.parse(filterConfig.createdAt);
                    }));
                }
                if (filterConfig.hashtags) {
                    newMass_posts = newMass_posts.filter(function (item) {
                        return item.hashtags.some(function (itemm) {
                            return itemm === filterConfig.hashtags;
                        });

                    })
                }
                return newMass_posts.slice(skip, skip + top);
            }

        }
        return {
            getPhotoPost,
            getPhotoPosts,
            addPhotoPost,
            editPhotoPost,
            removePhotoPost
        }

    })();

  /*  var hashTagsSet = new Set();
    var authorSet = new Set();

    function setHashInit() {
        for (i = 0; i < photoPosts.length; i++) {
            for (j = 0; j < photoPosts[i].hashTags.length; j++) {
                hashTagsSet.add(photoPosts[i].hashTags[j]);
            }
        }
        var options = '';
        for (let item of hashTagsSet) {
            options += '<option value=' + item + '>';
        }
        return options;
    }

    function setAuthorInit() {
        for (i = 0; i < photoPosts.length; i++) {
            authorSet.add(photoPosts[i].author);
        }
        var options = '';
        for (let item of authorSet) {
            options += '<option value="' + item + '">';
        }
        return options;
    }

    var validationPost = {
        id: '1',
        description: 'Description 1',
        createdAt: new Date('2018-01-01T23:00:00'),
        author: 'Author 1',
        photoLink: 'http://bipbap.ru/wp-content/uploads/2017/04/187604chan1309313071950.jpg',
        hashTags: ['#tag1', '#tag2', '#tag3'],
        likes: ['Author1', 'Author2', 'Author3'],
        flag: true
    }

    function getPhotoPosts(skip = 0, top = 10, filterConfig) {
        var result = [];

        if (filterConfig == undefined) {
            photoPosts.sort(compareDates);
            result = photoPosts.slice(skip, skip + top);
        }
        else {
            for (key in filterConfig) {
                if (key == 'author' && result.length == 0) {
                    for (i = 0; i < photoPosts.length; i++) {
                        if (photoPosts[i].author == filterConfig['author'] && photoPosts[i].flag == true)
                            result.push(photoPosts[i]);
                    }
                }
                if (key == 'author' && result.length != 0) {
                    for (i = 0; i < result.length; i++) {
                        if (result[i]['author'] != filterConfig['author']) {
                            result.splice(i, 1);
                            i--;
                        }
                    }
                }
                if (key == 'hashTags' && result.length == 0) {
                    for (i = 0; i < photoPosts.length; i++) {
                        if (photoPosts[i].flag == true) {
                            var ind = true;
                            for (j = 0; j < filterConfig['hashTags'].length; j++) {
                                if ((photoPosts[i].hashTags).indexOf(filterConfig.hashTags[j]) == -1) {
                                    ind = false;
                                    break;
                                }
                            }
                            if (ind == true)
                                result.push(photoPosts[i]);
                        }
                    }
                }
                if (key == 'hashTags' && result.length != 0) {
                    for (i = 0; i < result.length; i++) {
                        for (j = 0; j < filterConfig['hashTags'].length; j++) {
                            if ((result[i]['hashTags']).indexOf(filterConfig.hashTags[j]) == -1) {
                                result.splice(i, 1);
                                i--;
                            }
                        }
                    }
                }
            }
            result = (result.sort(compareDates)).slice(skip, skip + top);
        }
        return result;
    }

    function compareDates(a, b) {
        return a.createdAt - b.createdAt;
    }

    function getPhotoPost(id) {
        for (i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id == id && photoPosts[i].flag == true) {
                return photoPosts[i];
            }
        }

        console.log('There is no element with id ' + id);
        return null;
    }

    function validatePhotoPost(post) {
        for (key in validationPost) {
            if (typeof post[key] != typeof validationPost[key]) {
                return false;
            }
        }
        if (Object.keys(post).length != Object.keys(validationPost).length)
            return false;
        if (post['description'].length >= 200)
            return false;
        if (post['createdAt'] == 'Invalid Date')
            return false;
        if (post['author'] == '')
            return false;
        if (validateHashtags(post.hashTags) === false)
            return fasle;
        if (validateLikes(post.likes) === false)
            return false;
        return true;
    }

    function addPhotoPost(post) {
        if (validatePhotoPost(post)) {
            photoPosts.push(post);
            return post;
        }
        return null;
    }

    function validateHashtags(arr) {
        for (i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'string') return false;
            if (arr[i].charAt(0) !== '#') return false;
        }
        return true;
    }

    function validateLikes(likes) {
        for (i = 0; i < likes.length; i++) {
            if (typeof likes[i] != 'string')
                return false;
        }
        return true;

    }


    function editPhotoPost(id, obj) {
        for (i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id == id) {
                var changes = {
                    id: photoPosts[i].id,
                    description: photoPosts[i].description,
                    createdAt: photoPosts[i].createdAt,
                    author: photoPosts[i].author,
                    photoLink: photoPosts[i].photoLink,
                    hashTags: photoPosts[i].hashTags,
                    likes: photoPosts[i].likes,
                    flag: true
                };
                for (key in obj) {
                    if (key in photoPosts[i] && key == 'description')
                        changes.description = obj[key];
                    else if (key in photoPosts[i] && key == 'photoLink' && obj.key != '')
                        changes.photoLink = obj[key];
                    else if (key in photoPosts[i] && key == 'hashTags') {
                        if (validateHashtags(obj[key])) {
                            changes.hashTags = obj['hashTags'];
                        }
                    }
                    else if (key in photoPosts[i] && key == 'likes') {
                        changes.likes = validateUniqueLikes(changes.likes, obj.likes);
                    }
                    else
                        return false;
                }
                if (validatePhotoPost(changes)) {
                    photoPosts[i] = changes;
                    return changes;
                }
            }
        }

        return false;
    }

let modul = (function () {
    let removePhotoPost = function(value) {
        for (let i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id == value) {
                photoPosts[i].flag = false;
                photoPosts.slice(i,1);
                return true;
            }
        }
        return false;
    }
}

    return {
        addPhotoPost,
        getPhotoPosts,
        photoPosts,
        editPhotoPost,
        validateHashtags,
        removePhotoPost
    }

}());*/


