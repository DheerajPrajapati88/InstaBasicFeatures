var photo = document.querySelector(".photo");
var heart = document.querySelector(".photo i");
photo.addEventListener("dblclick",function(){

    heart.style.transform="translate(-50%,-50%) scale(1.2)";
    heart.style.opacity=0.7;
    setTimeout(function(){
    heart.style.opacity=0;

    },1000)
    setTimeout(function(){
        heart.style.transform="translate(-50%,-50%) scale(0)";
    
    },2000)
});

var arr=[
    {
        dp:"https://images.unsplash.com/photo-1598379930661-b0c5701f8eb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        story:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1542996966-2e31c00bae31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        story:"https://images.unsplash.com/photo-1617251137884-f135eccf6942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1553484771-898ed465e931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        story:"https://images.unsplash.com/photo-1586078248672-e31a213cecec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1582&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        story:"https://images.unsplash.com/photo-1584633646238-e71a77ad05a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
        story:"https://images.unsplash.com/photo-1463674349210-38e4fa154dda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdHNob290JTIwYm95fGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },


]

var storiyan=document.querySelector(".storiyan")
var clutter = " ";
arr.forEach(function(elm,idx){

    clutter+=`<div class="story">
    <div class="p1"><img id="${idx}" src="${elm.dp}" alt=""></div>    
</div>`
})
storiyan.innerHTML=clutter;

storiyan.addEventListener("click",function(dets){

//   arr[dets.target.id].story;
document.querySelector(".full_screen").style.display="block";
document.querySelector(".full_screen").style.backgroundPosition="center";
document.querySelector(".full_screen").style.backgroundSize="cover";

document.querySelector(".full_screen").style.backgroundImage=`url(${ arr[dets.target.id].story})`
setTimeout(function(){
    document.querySelector(".full_screen").style.display="none";

},2000)

})




