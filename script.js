const likebutton=document.querySelector('.btn-like');
const unlikebutton=document.querySelector(".btn-unlike");

const likecount=document.querySelector('.like-count');

let likes=0;
likebutton.addEventListener('click',()=>){
    console.log('like button clickes');

    likes++;
    likecount.innerHTML='${likes}likes';
});
unlikebutton.addEventListener('click',()=>){
    console.log('unlike button clicked');

    if(likes>0){
        likes--;
    }
});