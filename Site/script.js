(function () {

var photoPosts = [
    {
        id:'1',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-19T32:00:00'),
        author:'Pavel Podoprigora',
        photoLink:'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtag:['#ram','#rider'],
        likes:['Nikita Grishin','Andron Butirca'],
        flag:true
    },
    {
        id:'2',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-12T32:23:00'),
        author:'Nikita Grishin',
        photoLink:'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtag:['#smile','#long'],
        likes:['Nikita Grishin','Andron Butirca','Pavel Podoprigora'],
        flag:true
    },
    {
        id:'3',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-9T32:22:00'),
        author:'Andron Butirca',
        photoLink:'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtag:['#linda','#lolo'],
        likes:['Nikita Grishin','Prishep Mac'],
        flag:true
    },
    {
        id:'4',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-8T32:21:00'),
        author:'Prishep Mac',
        photoLink:'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtag:['#luntik','lulu'],
        likes:['Nikita Grishin','Andron Butirca'],
        flag:true
    },
    {
        id:'5',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-7T32:20:00'),
        author:'Dimas Kotus',
        photoLink:'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtag:['#ramzi','#ramzes'],
        likes:['Nikita Grishin','Andron Butirca'],
        flag:true
    },
    {
        id:'6',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-14T32:19:00'),
        author:'Valai San',
        photoLink:'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtag:['#ramires','#raddj'],
        likes:['Nikita Grishin','Andron Butirca'],
        flag:true
    },
    {
        id:'8',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-15T32:18:00'),
        author:'Glush Fil',
        photoLink:'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtag:['#Minsk','#Belarus'],
        likes:['Nikita Grishin','Andron Butirca'],
        flag:true
    },
    {
        id:'9',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-16T32:17:00'),
        author:'Kusmuk San',
        photoLink:'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtag:['#01','#2018'],
        likes:['Nikita Grishin','Andron Butirca'],
        flag:true
    },
    {
        id:'10',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-26T32:16:00'),
        author:'Naum Dan',
        photoLink:'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtag:['#New_year','#2019'],
        likes:['Nikita Grishin','Andron Butirca'],
        flag:true
    },
    {
        id:'11',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T32:15:00'),
        author:'Gusak San',
        photoLink:'',
        hashtag:['#very','#old'],
        likes:['Nikita Grishin','Andron Butirca'],
        flag:true
    },
    {
        id:'12',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-24T32:14:00'),
        author:'Nikifor Nik',
        photoLink:'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtag:['#shersh','#problems'],
        likes:['Nikita Grishin','Andron Butirca'],
        flag:true
    },
    {
        id:'13',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-28T32:13:00'),
        author:'Dimas Gabr',
        photoLink:'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtag:['#gta5','#top_in_theWorld'],
        likes:['Nikita Grishin','Andron Butirca'],
        flag:true
    },
    {
        id:'14',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-03T32:12:00'),
        author:'Djuk Kat',
        photoLink:'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtag:['#true'],
        likes:['Nikita Grishin','Andron Butirca'],
        flag:true
    },
    {
        id:'15',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-01T2:11:00'),
        author:'Ketok Jen',
        photoLink:'',
        hashtag:['#false'],
        likes:['Nikita Grishin','Andron Butirca'],
        flag:true
    },
    {
        id:'16',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-27T32:10:00'),
        author:'Veron belka',
        photoLink:'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtag:['#backend'],
        likes:['Nikita Grishin','Andron Butirca'],
        flag:true
    },
    {
        id:'17',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T32:9:00'),
        author:'San Gush',
        photoLink:'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtag:['#frontend'],
        likes:['Nikita Grishin','Andron Butirca'],
        flag:true
    },
    {
        id:'18',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T32:8:00'),
        author:'Gus San',
        photoLink:'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtag:['#oracle','#fpm'],
        likes:['Nikita Grishin','Andron Butirca']
    },
    {
        id:'19',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T32:7:00'),
        author:'Sis Ila',
        photoLink:'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtag:['#Noon'],
        likes:['Nikita Grishin','Andron Butirca']
    },
    {
        id:'20',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T32:6:00'),
        author:'Lis Jak',
        photoLink:'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtag:['#Son','#moon'],
        likes:['Nikita Grishin','Andron Butirca'],
        flag:true
    },
]


    function getPhotoPosts(skip,top,filterConfig) {
        var newPosts = [];

        if(skip === undefined || skip >= photoPosts.length || skip < 0){
            skip = 0;
        }

        if(typeof top === undefined || top <= 0){
            top = 10;
        }

        if(filterConfig !== undefined){

            if("date" in filterConfig){
                newPosts = filterByData(filterConfig.data);
            }

            if("author" in filterConfig){
                newPosts = filterByAuthor(filterConfig.author);
            }

            newPosts = sortByDate(newPosts).slice(skip,skip + top);
        }
        else {
            newPosts = sortByDate(newPosts).slice(skip, skip + top);
        }

        return newPosts;
    }

    function filterByData(date) {
        var findPosts = [];

        if(date === undefined){
            return findPosts;
        }

        for(var i = 0;i<photoPosts.length;i++){
            if(photoPosts[i].createdAt <= date){
                findPosts.push(photoPosts[i]);
            }
        }

        return findPosts;
    }

    function filterByAuthor(author) {
        var findPosts = [];

        if(author === undefined){
            return findPosts;
        }

        for(var i = 0;i<photoPosts.length;i++){
            if(photoPosts[i].author === author){
                findPosts.push(photoPosts[i]);
            }
        }

        return findPosts;
    }

    function sortByDate(array) {
        var findPosts = array.slice();
        return findPosts.sort(function (a,b) {
            return b.createdAt - a.createdAt
        });
    }

    function getPhotoPost(id) {

        if(id === undefined){
            return null;
        }

        for(var i = 0;i <photoPosts.length;i++){
            if(photoPosts[i].id === id){
                return photoPosts[i];
            }
        }

/*        if(find(photoPosts,id) > 0){
            return photoPosts[id];
        }*/

        return null;
    }

    function validPhotoPost(Post) {
        if(typeof Post.id !== "string" ||
            typeof Post.description !== "string" ||
            typeof Post.createdAt !== "object" ||
            typeof Post.author !== "string" ||
            typeof Post.photoLink !== "string" ||
            typeof Post.hashtag !== "object" ||
            typeof  Post.likes !== "object"){
            return false;
        }

        if(Post.id < 1 || Post.id > photoPosts.length){
            return false;
        }

        if(Post.createdAt == 'Invalid Date'){
            return false;
        }

        if(Post.description.length >= 300){
            return false;
        }

        if(Post.author == ''){
            return false;
        }

        if(Post.photoLink == ""){
            return false;
        }

        for(var i = 0;i < Post.length;i++){
            if(Post !== photoPosts[i]){
                return false;
            }
        }

        for(var i = o;i<Post.likes.length;i++){
            if(Post.likes[i - 1] === Post.likes[i]){
                return false;
            }
        }

        for(var i = 0;i<Post.length;i++){
            if(typeof Post[i] !== 'string' || Post[i].charAt(0) !== '#' || Post[i].includes(' ')){
                return false;
            }
        }
    }

    function addPhotoPost(Post) {
        if(validPhotoPost(Post)){
            photoPosts.push(Post);
            return true;
        }
        else {
            return false;
        }
    }


    function editPfotoPost(id,Post) {
        var getPost = getPhotoPost(id);
        var empty = true;
        if(!validPhotoPost(Post)){
            return false;
        }else{
            if('description' in photoPosts && photoPosts.description.length <= 300 && photoPosts.description.length > 0){
                getPost.description = photoPosts.description;
            }

            if('photoLink' in photoPosts && photoPosts.photoLink.length > 0){
                getPost.photoLink = photoPost.photoLink;
            }

            if('hashtags' in photoPosts && photoPosts.hashtag.length > 0){
                getPost.hashtag = photoPosts.hashtag;
            }
        }

    }

    function removePhotoPost(id){
        if(Number(id) > photoPosts.length || Number(id) < 1 || typeof id !== "string"){
            return false;
        }
        for(var i = 0;i<photoPosts.length();i++){
            if(photoPosts[i].id == id){
                photoPosts.flag == false;
                photoPosts.slice(i,1);
                return true
            }
        }

        return false;
    }

        console.log("Sort by date:");
        console.log(sortByDate(photoPosts));

        console.log(photoPosts);

        console.group("getPhotoPost:");
        console.log(getPhotoPosts());
        console.log("Skip = 8:top = 11");
        console.log(getPhotoPosts(8,11));
        console.log("Skip = 8");
        console.log(getPhotoPosts(8));
        console.log("filterconfig");
        console.log(getPhotoPosts(0,10,{date: new Date('2018-03-02T22:22:00')}));
        console.log("id:");
        console.log(getPhotoPost(5));
        console.log(getPhotoPost(25));
        console.log()
})();


