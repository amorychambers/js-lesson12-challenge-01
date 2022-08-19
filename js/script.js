const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch('https://picsum.photos/v2/list?limit=100');
    const images = await res.json()
    imageObject = randomImage(images);
    displayImage(imageObject);

    };

    button.addEventListener("click", function(){
        getImage();
    });


function randomImage (images){
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
    
};

function displayImage (randomImage){
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};
