const Images = [
    {
        imgID: '0001',
        imageName: "Image 1",
        imageUrl: "Images\/zahra-amiri-rLwpWYhxZZQ-unsplash.jpg"
    },
    {imgID: '0002',
        imageName: "Image 2",
        imageUrl: "Images/signature-june-v5jTUTeuc1c-unsplash.jpg"
    },
    {imgID: '0003',
        imageName: "Image 3",
        imageUrl: "Images/signature-june-LbPKZfzkQ7o-unsplash.jpg"
    },
    {imgID: '0004',
        imageName: "Image 4",
        imageUrl: "Images/signature-june-K4t4HLjpYzg-unsplash.jpg"
    },
    {
        imgID: '0005',
        imageName: "Image 5",
        imageUrl: "Images/signature-june--iKnGdW24yM-unsplash.jpg"
    },
    {
        imgID: '0006',
        imageName: "Image 6",
        imageUrl: "Images/kadyn-pierce-KH47km4x_cg-unsplash.jpg"
    },
    {
        imgID: '0007',
        imageName: "Image 7",
        imageUrl: "Images/balesphotography-EdjNw_eIv68-unsplash.jpg"
    },
    {
        imgID: '0008',
        imageName: "Image 8",
        imageUrl: "Images/alexander-grey-KUK-Z5aHjbg-unsplash.jpg"
    }
]



// Loops through Images
let imagesHTML = "";
let images = document.getElementById("container");


for(let i = 0; i < Images.length; i++){
    
    imagesHTML += `
        <div class="image-card">
        <img src='${Images[i].imageUrl}' class="images"/>
        <p>Image ID: ${Images[i].imgID}</p>
        <p>Image Name: ${Images[i].imageName}</p>
        </div>
    `;

    images.innerHTML = imagesHTML
}