const products = [
    {
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F01_332ccf25-8e0f-4b40-be7b-3e322eeeb653.jpg%3Fv%3D1712590471&w=384&q=75",
        title: "Matte Attack Transferproof Lipstick",
        mrp: 749,
        discount: 599,
    },
    {
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F370205924-01_1aef1c2e-8e41-42a2-89c5-70dab3b356ac.jpg%3Fv%3D1698238462&w=384&q=75",
        title: "Matte As Hell Crayon Lipstick Minis Set of 3",
        mrp: 999,
        discount: 799,
    },
    {
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F07_6fa35950-4830-4e97-80ea-d40f2fb42801.jpg%3Fv%3D1680622820&w=384&q=75",
        title: "Ace Of Face Foundation Stick",
        mrp: 999,
        discount: 799,
    },
    {
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FBaseOfGloryPoreMinimizingPrimerPDPimages1copy.jpg%3Fv%3D1682956017&w=384&q=75",
        title: "Base Of Glory Pore Minimizing Primer",
        mrp: 849,
        discount: 679,
    },
    {
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F01_a5b5d418-64e4-4715-9edd-ad1baac7e412.jpg%3Fv%3D1712562985&w=384&q=75",
        title: "Contour De Force Face Palette",
        mrp: 799,
        discount: 639,
    },
    {
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FKohl-Of-Honour-Intense-Kajal-PDP-images-Parent-page.jpg%3Fv%3D1679673305&w=384&q=75",
        title: "Kohl Of Honour Intense Kajal",
        mrp: 249,
        discount: 199,
    },
    {
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent1stcard_1_7aa4b700-2b5f-4212-8b56-86889ab8a390.jpg%3Fv%3D1689262362&w=384&q=75",
        title: "Matte As Hell Crayon Lipstick",
        mrp: 849,
        discount: 679,
    },
    {
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fa_00b52826-78d8-4da0-aba1-fbcbfb39dc33.jpg%3Fv%3D1688228539&w=384&q=75",
        title: " LaLa Love 18HR Liquid Lipstick - Set of 3",
        mrp: 799,
        discount: 639,
    },
    {
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F01_b96a3e62-1405-4133-9334-b1a9c4f1c252.jpg%3Fv%3D1682957226&w=384&q=75",
        title: "All Set To Go Banana Powder",
        mrp: 649,
        discount: 519,
    },
    {
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F521737983-parent-1st-card.jpg%3Fv%3D1690905085&w=384&q=75",
        title: "Maximeyes Drama Magnetic Lashes & Eyeliner",
        mrp: 699,
        discount: 559,
    },
    {
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FWBG2_aed576d3-066c-42e7-b45b-ecdefb75ad5f.jpg%3Fv%3D1708867229&w=384&q=75",
        title: "Smudge Me Not Mini Liquid Lipstick Set of 4 - Power Up Your Pout",
        mrp: 799,
        discount: 639,
    },
    {
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FParent-Page_ac0201bb-8f51-447c-b6e0-4404786076a2.jpg%3Fv%3D1680364145&w=384&q=75",
        title: "Nothing Else Matter Longwear Lipstick",
        mrp: 599,
        discount: 479,
    },
]

const products2 = [
    {
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F522157922-wedding-kit-by-tamannaah-wbg-images_1.jpg%3Fv%3D1706621444&w=384&q=75",
        title: "Wedding Makeup Kit by Tamannaah",
        mrp: 3499,
        discount: 2799,
    },
    {
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F603644671-1st-card.jpg%3Fv%3D1712590773&w=384&q=75",
        title: "Festive Makeup Kit",
        mrp: "1699",
        discount: "1359",
    },
    {
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FNude-Edition-Makeup-Kit---WBG_1.jpg%3Fv%3D1690905055&w=384&q=75",
        title: "Nude Edition Makeup Kit",
        mrp: "1499",
        discount: "1199",
    },
    {
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FDateNightMakeupkit-1.jpg%3Fv%3D1695397255&w=384&q=75",
        title: "Date Night Makeup Kit",
        mrp: "1599",
        discount: "1279",
    },
    {
        img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fcombo-image.jpg%3Fv%3D1636991116&w=384&q=75",
        title: "4-in-1 Makeup Set",
        mrp: "899",
        discount: "719",
    },
]

let productContainer = document.querySelector('.swiper-wrapper')

products.map((product) => {
    console.log(product)

    let div = document.createElement('div')
    // div.setAttribute('class',"swiper-slide")
    div.classList.add("swiper-slide");
    let img = document.createElement('img')
    img.src = product.img
    let title = document.createElement('h3')
    title.innerText = product.title
    let mrp = document.createElement('p')
    mrp.innerText = `MRP:  ${product.mrp}`
    let dp = document.createElement('p')
    dp.innerText = `Discount:- ${product.discount}`

    let button = document.createElement('btn')
    button.innerText = "ADD TO CART"
    div.append(img, title, mrp, dp, button)

    productContainer.append(div)
})
let productContainer2 = document.querySelector('.product-wrapper')

products2.map((product) => {
    console.log(product)

    let div = document.createElement('div')
    // div.setAttribute('class',"swiper-slide")
    div.classList.add("swiper-slide");
    let img = document.createElement('img')
    img.src = product.img
    let title = document.createElement('h3')
    title.innerText = product.title
    let mrp = document.createElement('p')
    mrp.innerText = `MRP:  ${product.mrp}`
    let dp = document.createElement('p')
    dp.innerText = `Discount:- ${product.discount}`

    let button = document.createElement('btn')
    button.innerText = "ADD TO CART"
    div.append(img, title, mrp, dp, button)

    productContainer2.append(div)
})