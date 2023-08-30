const menu = [
    {
      id: 1,
      title: 'Cram Pockets',
      category: 'meals',
      price: 1,
      img: './images/item-1.png',
      desc: `Cram sliced rolled in instamash and fried`,
    },
    {
      id: 2,
      title: 'Mirelurk Mac n Cheese',
      category: 'meals',
      price: 2,
      img: './images/item-2.png',
      desc: `Classic mac n cheese with a bit of bloodleaf`,
    },
    {
      id: 3,
      title: 'Tato and Carrot Salad',
      category: 'meals',
      price: 3,
      img: './images/item-3.png',
      desc: `Sliced rotten tomatoes and carrots`,
    },
    {
      id: 4,
      title: 'Roasted Crunchy Mutfruit',
      category: 'sweets',
      price: 3,
      img: './images/item-4.png',
      desc: `With razor grain granola and ant nectar`,
    },
    {
      id: 5,
      title: 'Razor Biscuits',
      category: 'snacks',
      price: 1,
      img: './images/item-5.png',
      desc: `An unleavened hard tack`,
    },
    {
      id: 6,
      title: 'Brahmin Cheese',
      category: 'snacks',
      price: 4,
      img: './images/item-6.png',
      desc: `Hard and salty designed to last`,
    },
    {
      id: 7,
      title: 'Dried Banana Yucca Fruit',
      category: 'sweets',
      price: 1,
      img: './images/item-7.png',
      desc: `Imported from out west!`,
    },
    {
      id: 8,
      title: 'Pickled Iguana',
      category: 'snacks',
      price: 3,
      img: './images/item-8.png',
      desc: `Lizard meat pickled`,
    },
    {
      id: 9,
      title: 'YumYum Deviled Eggs',
      category: 'snacks',
      price: 1,
      img: './images/item-9.png',
      desc: `YumYum brand pure dried whole deviled eggs`,
    },
    {
      id: 10,
      title: 'Roasted Razorgrain Coffee',
      category: 'drinks',
      price: 1,
      img: './images/item-10.png',
      desc: `Coffee made from the replacement of wheat grain`,
    },
    {
        id: 11,
        title: 'Wasteland Caviar',
        category: 'snacks',
        price: 9,
        img: './images/item-11.png',
        desc: `With extra potato chips`,
      },
      {
        id: 12,
        title: 'Corn Cakes',
        category: 'meals',
        price: 3,
        img: './images/item-12.png',
        desc: `With browned and crumbled salisbury steak and jalapeno`,
      },
      {
        id: 13,
        title: 'Fungus Skewers',
        category: 'meals',
        price: 2,
        img: './images/item-13.png',
        desc: `Glazed with stingwing honey and dusted with chili powder`,
      },
      {
        id: 14,
        title: 'Yao Guai and Gourd Stirfy',
        category: 'meals',
        price: 2,
        img: './images/item-14.png',
        desc: `The meat of the descendands of the black bear`,
      },
      {
        id: 15,
        title: 'Apple and Tarberry Pie',
        category: 'sweets',
        price: 3,
        img: './images/item-15.png',
        desc: `Spiced with honey mesquite pod`,
      },
  ];
  function starter(){
    console.log("yoyoyo")
    list.innerHTML = '';
    for (let i=0; i<menu.length; i++){
        list.innerHTML+=`
        <div id="cards" class="food">
            <img class="foodimg" src="${menu[i].img}">
            <div class="infos">
                <div class="top">
                    <p class="name">${menu[i].title}</p>
                    <div class="price">
                        <p class="numbers">${menu[i].price}</p>
                        <img class="currency" width="50px" height="50px" src="./images/coin.png" >
                    </div>
                </div>
            <p class="desc">${menu[i].desc}</p>
            </div>
        </div>`
    }}

function meals(){
list.innerHTML =''
for (let i=0; i<menu.length; i++){
    if (menu[i].category=='meals'){
        list.innerHTML+=`
        <div id="cards" class="food">
            <img class="foodimg" src="${menu[i].img}">
            <div class="infos">
                <div class="top">
                    <p class="name">${menu[i].title}</p>
                    <div class="price">
                        <p class="numbers">${menu[i].price}</p>
                        <img class="currency" width="50px" height="50px" src="./images/coin.png" >
                    </div>
                </div>
            <p class="desc">${menu[i].desc}</p>
            </div>
        </div>`
}}}

function sweets(){
    list.innerHTML =''
    for (let i=0; i<menu.length; i++){
        if (menu[i].category=='sweets'){
            list.innerHTML+=`
            <div id="cards" class="food">
                <img class="foodimg" src="${menu[i].img}">
                <div class="infos">
                    <div class="top">
                        <p class="name">${menu[i].title}</p>
                        <div class="price">
                            <p class="numbers">${menu[i].price}</p>
                            <img class="currency" width="50px" height="50px" src="./images/coin.png" >
                        </div>
                    </div>
                <p class="desc">${menu[i].desc}</p>
                </div>
            </div>`
}}}
function snacks(){
    list.innerHTML =''
        for (let i=0; i<menu.length; i++){
            if (menu[i].category=='snacks'){
                list.innerHTML+=`
                <div id="cards" class="food">
                    <img class="foodimg" src="${menu[i].img}">
                    <div class="infos">
                        <div class="top">
                            <p class="name">${menu[i].title}</p>
                            <div class="price">
                                <p class="numbers">${menu[i].price}</p>
                                <img class="currency" width="50px" height="50px" src="./images/coin.png" >
                            </div>
                        </div>
                    <p class="desc">${menu[i].desc}</p>
                    </div>
                </div>`
        }}}
        function drinks(){
            list.innerHTML =''
            for (let i=0; i<menu.length; i++){
                if (menu[i].category=='drinks'){
                    list.innerHTML+=`
                    <div id="cards" class="food">
                        <img class="foodimg" src="${menu[i].img}">
                        <div class="infos">
                            <div class="top">
                                <p class="name">${menu[i].title}</p>
                                <div class="price">
                                    <p class="numbers">${menu[i].price}</p>
                                    <img class="currency" width="50px" height="50px" src="./images/coin.png" >
                                </div>
                            </div>
                        <p class="desc">${menu[i].desc}</p>
                        </div>
                    </div>`
            }}}

var list = document.getElementById("foods")
for (let i=0; i<menu.length; i++){
    list.innerHTML+=`
    <div id="cards" class="food">
        <img class="foodimg" src="${menu[i].img}">
        <div class="infos">
            <div class="top">
                <p class="name">${menu[i].title}</p>
                <div class="price">
                    <p class="numbers">${menu[i].price}</p>
                    <img class="currency" width="50px" height="50px" src="./images/coin.png" >
                </div>
            </div>
        <p class="desc">${menu[i].desc}</p>
        </div>
    </div>`
}
window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
  });