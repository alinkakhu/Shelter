  const pages = document.querySelector(".slider-cards");
  const children = pages.children;
const friendsOverlay = document.querySelector('.friends-overlay');
  const firstLeftButton = document.querySelector(".friends-arrow.arrow2");
  const secondLefButton = document.querySelector(".friends-arrow.left");
const firstRightfButton = document.querySelector(".friends-arrow.right");
const secondRightButton = document.querySelector(".friends-arrow.arrow3");
const body = document.querySelector('body');
const html = document.querySelector('html');
let gallery = [];
let page = 0;

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');
    const headerMenu = document.querySelector('.header-menu-mobile')
  const containerIsOpen = document.querySelector('.open');
  const overlay = document.querySelector('.overlay');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
headerMenu.classList.toggle('is-open')
    mobileMenuRef.classList.toggle('is-open');
    containerIsOpen.classList.toggle('is-open')
    overlay.classList.toggle('is-open');
    body.classList.toggle('is-open')
html.classList.toggle('is-open')
  });
    overlay.addEventListener('click', () => {
mobileMenuRef.classList.remove('is-open')
    headerMenu.classList.remove('is-open');
     containerIsOpen.classList.remove('is-open')
    overlay.classList.remove('is-open');
    body.classList.remove('is-open')
html.classList.remove('is-open')

    })
})();
const pets =[
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]





    for (let i = 0; i < 48; i++) {
        let randomNumber = Math.floor(Math.random() * 8)
        let card = document.createElement('div');
        card.classList.add('friends-card');
        card.innerHTML = `<a href="#" class="friends-link">
<img src=${pets[randomNumber].img} class="friends-img" alt="${pets[randomNumber].name}">
<h4 class="friends-name">${pets[randomNumber].name}</h4 >
<button class="friends-button">Learn more</button>
</a>

 <div class= 'modal' id = 'modal'>
 <button data-close-button class = 'close'>&times</button>

 <div class='modal-wrapper'>
<img class='modal-img' src=${pets[randomNumber].img} alt=${pets[randomNumber].name}/>

  <div class = 'modal-header'><h3 class = 'modal-name'>${pets[randomNumber].name}</h3><h4 class = 'modal-breed'>${pets[randomNumber].breed}</h4>

   <p class = 'modal-body'>${pets[randomNumber].description}</p>
     <ul class="charac">
     <li class='modal-item'><strong>Age:</strong>${pets[randomNumber].age}</li>
     <li class='modal-item'><strong>Inoculations:</strong>${pets[randomNumber].inoculations}</li>
<li class='modal-item'><strong>Diseases:</strong>${pets[randomNumber].diseases}</li>
<li class='modal-item'><strong>Parasites:</strong>${pets[randomNumber].parasites}</li>
     </ul> </div></div>
   </div> `


      gallery.push(card)


    }


const pageNumber =document.querySelector('.page-number')


    for (let i = 0; i < page + 8; i++) {
      pages.append(gallery[i]);

    }



let pageNum = 1;

firstRightfButton.addEventListener('click', () => {
pageNum++;
    pageNumber.textContent = pageNum;




    if (pageNum == 6) {
       firstRightfButton.setAttribute('disabled','');
        secondRightButton.setAttribute('disabled', '');
        return
    }
    if (pageNum > 1) {
        firstLeftButton.removeAttribute('disabled');
        secondLefButton.removeAttribute('disabled')
    }


    page == gallery.length - 8 ? (page == 0) : (page += 8);
pages.innerHTML=''
    for (let i = page; i < page + 8; i++){
        pages.append(gallery[i]);

    }

})

secondLefButton.addEventListener('click', () => {
    pageNum--;
    pageNumber.textContent = pageNum;


    // if (pageNum = 1) {
    //     firstLeftButton.setAttribute('disabled', '');
    //     secondLefButton.setAttribute('disabled', '');
    //     return
    // }


    if (pageNum < 6)
    {
        firstRightfButton.removeAttribute('disabled');
        secondRightButton.removeAttribute('disabled');
    }


if (pageNum === 1) {
        firstLeftButton.setAttribute('disabled', '');
        secondLefButton.setAttribute('disabled', '');
        return
    }


  page == 0 ? page = gallery.length - 8 : (page -= 8);
pages.innerHTML=''
    for (let i = page; i < page + 8; i++){
        pages.append(gallery[i]);

    }
})



firstLeftButton.addEventListener('click', () => {
  pageNum = 1;
    pageNumber.textContent = 1;

    page == 0;
  pages.innerHTML = '';
  firstLeftButton.setAttribute('disabled', '');
        secondLefButton.setAttribute('disabled', '');

    for (let i = page; i < page + 8; i++){
        pages.append(gallery[i]);

  }


})

secondRightButton.addEventListener('click', () => {
   firstRightfButton.setAttribute('disabled','');
  secondRightButton.setAttribute('disabled', '');
  pageNum = 6;
  page == gallery.length;
    pageNumber.textContent = 6
    pages.innerHTML = '';
    console.log('pressed')
 for (let i = page; i < page + 8; i++){
        pages.append(gallery[i]);

    }


})

// show more

const friendsButton = document.querySelectorAll('.friends-button').forEach(function (btn) {

  btn.addEventListener('click', showMore)
})

function showMore(e) {
  console.log('show more')
  e.preventDefault()
  let modal = e.target.closest('div').querySelector('.modal');
  console.log(modal)
  modal.classList.add('active');

  friendsOverlay.classList.add('is-open');
body.classList.add('is-open')
html.classList.add('is-open')
  const closeBtn = modal.querySelector('.close');
  closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    friendsOverlay.classList.remove('is-open');
     body.classList.remove('is-open')
html.classList.remove('is-open')

  })

   friendsOverlay.addEventListener('click', () => {
        modal.classList.remove('active');
    friendsOverlay.classList.remove('is-open');
    body.classList.remove('is-open')
html.classList.remove('is-open')

    })
}