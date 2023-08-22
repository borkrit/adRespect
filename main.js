const searchBlock = document.querySelector('.search-element img');
const searchInput = document.querySelector('.search-element input')

searchBlock.addEventListener('click', () => {
    searchInput.classList.toggle('hidden')
    searchInput.classList.toggle('block')
})


var swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
});

const btnSlider = [...document.querySelector('.swiper-buttons').children]

btnSlider.forEach(el => {

    el.classList.remove('opacity-50')
    if (el.ariaDisabled == 'true') {
        el.classList.add('opacity-50')
    }

    el.addEventListener('click', () => {
        el.classList.remove('opacity-50')
        if (el.ariaDisabled == 'true') {
            el.classList.add('opacity-50')
        }
    })
})


//galary
const imgArray = [
    {
        title: 'project',
        src: 'assets/1.png'
    },
    {
        title: 'project',
        src: 'assets/2.png'
    },
    {
        title: 'project',
        src: 'assets/3.png'
    },
    {
        title: 'project',
        src: 'assets/5.png'
    },
    {
        title: 'project',
        src: 'assets/6.png'
    }, {
        title: 'project',
        src: 'assets/4.png'
    },
    {
        title: 'project',
        src: 'assets/8.png'
    }, {
        title: 'project',
        src: 'assets/7.png'
    },
    {
        title: 'project',
        src: 'assets/9.png'
    },
    {
        title: 'project',
        src: 'assets/9.png'
    },{
        title: 'project',
        src: 'assets/2.png'
    },
    {
        title: 'project',
        src: 'assets/3.png'
    },
    {
        title: 'project',
        src: 'assets/5.png'
    },
    {
        title: 'project',
        src: 'assets/6.png'
    }, {
        title: 'project',
        src: 'assets/4.png'
    },
    {
        title: 'project',
        src: 'assets/8.png'
    }, {
        title: 'project',
        src: 'assets/7.png'
    },
    {
        title: 'project',
        src: 'assets/9.png'
    },
    {
        title: 'project',
        src: 'assets/4.png'
    },
    {
        title: 'project',
        src: 'assets/8.png'
    }, {
        title: 'project',
        src: 'assets/7.png'
    },
    {
        title: 'project',
        src: 'assets/9.png'
    },{
        title: 'project',
        src: 'assets/4.png'
    },
    {
        title: 'project',
        src: 'assets/8.png'
    }, {
        title: 'project',
        src: 'assets/7.png'
    },
    {
        title: 'project',
        src: 'assets/9.png'
    },{
        title: 'project',
        src: 'assets/4.png'
    },
    {
        title: 'project',
        src: 'assets/8.png'
    }, {
        title: 'project',
        src: 'assets/7.png'
    },
    {
        title: 'project',
        src: 'assets/9.png'
    },{
        title: 'project',
        src: 'assets/4.png'
    },
    {
        title: 'project',
        src: 'assets/8.png'
    }, {
        title: 'project',
        src: 'assets/7.png'
    },
    {
        title: 'project',
        src: 'assets/9.png'
    },
];

const limitPage = 9;
let currentPage = 1
const viewImg=[]
const galleryContainer = document.querySelector('#gallery')
const btnMore = document.querySelector('.load-more');
const overlay = document.querySelector('.overlay')
for(let i =0; i < imgArray.length;i += limitPage){
    viewImg.push( imgArray.slice(i, i+limitPage))
}


btnMore.addEventListener('click',()=>{

    viewImg[currentPage-1].forEach((item)=>{
        const img = document.createElement("img")
        img.setAttribute('src',item.src)
        galleryContainer.append(img);

    })


    macy.recalculate();
    currentPage++
    galleryContainer.style.maxHeight = 'max-content'
    if(viewImg.length < currentPage){
        overlay.style.display='none'
    }

})



var macy = Macy({
    container: '#gallery',
    trueOrder: false,
    waitForImages: false,
    margin: 43,
    columns: 3,
    breakAt: {

        520: 2,
        400: 1
    }
});
