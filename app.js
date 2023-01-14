const wrapper = document.querySelector(".sliderwrapper") ;
const menuItems = document.querySelectorAll(".menuItem") ;
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "lightblue",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "white",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
];

let chooseProduct = products[0]

const currentProdctImg = document.querySelector(".productImg") ;
const currentProdctTitle = document.querySelector(".productTitle") ;
const currentProdctPrice = document.querySelector(".productPrice") ;
const currentProdctColors = document.querySelectorAll(".color") ;
const currentProdctSizes = document.querySelectorAll(".size") ;



menuItems.forEach((item ,index)=>{
    item.addEventListener("click", ()=>{

        // changing the current slide
        wrapper.style.transform =`translateX(${-100*index}vw)` ;

        // change the choosen product
        chooseProduct = products[index] ;
        // change the texts and price
        currentProdctTitle.textContent = chooseProduct.title ;
        currentProdctPrice.textContent = "$"+chooseProduct.price ;
        currentProdctImg.src = chooseProduct.colors[0].img ;
        currentProdctColors.forEach((color,index)=>{
            color.style.backgroundColor = chooseProduct.colors[index].code ;
        })
    }) ;
}) ;

currentProdctColors.forEach((color,index)=>{
    color.addEventListener("click" ,()=>{
        currentProdctImg.src = chooseProduct.colors[index].img ;
    })
})

currentProdctSizes.forEach((size ,index)=>{
    size.addEventListener("click",()=>{
        currentProdctSizes.forEach((size)=>{
            size.style.backgroundColor = "white" ;
            size.style.color = "black" ;
        })
        size.style.backgroundColor = "black" ;
        size.style.color = "white" ;
    })
})

const productButton = document.querySelector(".productButton") ;
const payment = document.querySelector(".payment") ;
const close = document.querySelector(".close") ;

productButton.addEventListener("click",()=>{
  payment.style.display="flex" ;
})

close.addEventListener("click",()=>{
  payment.style.display="none" ;
})

