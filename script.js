const addCart = document.querySelectorAll('.add-cart');
const balancedPrice = document.querySelector('.balance');
const costNav = document.querySelector('.cost-nav');
const crossIcon = document.querySelector('.fa-xmark');
const costNavBody = document.querySelector('.body');
const block = document.querySelector('.block');
const costPrice = document.querySelector('.cost-price');
const mainPart = document.querySelector('.main-part');
const logo = document.querySelector('.logo')

const increament = document.querySelector('.increament');
const deccreament = document.querySelector('.decreament');
const countNumber = document.querySelector('.count-number');
const checkout = document.querySelector('.checkout');
const removeIcon = document.querySelector('.fa-trash-can');
const itemname = document.querySelector('.itemname');

const arr = []

function yaxlitlash(n) {
    let b=Math.round(n*100);
    let c=b/100;
    return parseFloat(c);
}

balancedPrice.addEventListener('click', () => {
    // costNav.classList.add('appearance-nav')
    costNav.style.right='0'
    costNav.style.transitionDuration='.5s'

})

crossIcon.addEventListener('click', () => {
    // costNav.classList.add('disappearance-nav')
    costNav.style.right='-700px'
    costNav.style.transitionDuration='.5s'
})

function mainPartFunction(itemName, itemPrice) {
    costNav.style.right='0'
    costNav.style.transitionDuration='.5s'
    document.querySelector('.cart-empty').style.display='none'
    block.style.display='flex'
    costPrice.textContent = itemPrice;

    itemname.textContent = itemName;
    
    removeIcon.addEventListener('click', () => {
        removeIcon.parentElement.parentElement.remove()
        costNav.style.right='-700px'
        costNav.style.transitionDuration='.5s'
        balancedPrice.textContent = 0.00
        costPrice.textContent = 0.00
        document.querySelector('.cart-empty').style.display='block'
    })

    let count = 1;
    let num = itemPrice;
    increament.addEventListener('click', () => {
        countNumber.textContent = count += 1
        costPrice.textContent = yaxlitlash(num += itemPrice)
        
    })

    deccreament.addEventListener('click', () => {
        if(count>0){
            countNumber.textContent = count -= 1
            costPrice.textContent = yaxlitlash(num -= itemPrice)
        }
    })

    checkout.addEventListener('click', () => {
        costNav.style.right='-700px'
        costNav.style.transitionDuration='.5s'
        balancedPrice.innerText = costPrice.innerHTML
    })
}
    
logo.addEventListener('click', () => {
    mainPart.style.right = '100px'
    document.querySelector('.flower-window').style.left = '-1500px'
})

function imgContent(item1name, itemprice){
    document.querySelector('.flower-name').textContent = item1name
    document.querySelector('.flower-cost').textContent = itemprice
    document.querySelector('.flower-window').style.left = '0'
    mainPart.style.position = 'absolute'
    mainPart.style.right = '1500px'
}

