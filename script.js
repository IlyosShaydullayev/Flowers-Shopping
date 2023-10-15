const addCart = document.querySelectorAll('.add-cart');
const balancedPrice = document.querySelector('.balance');
const costNav = document.querySelector('.cost-nav');
const crossIcon = document.querySelector('.fa-xmark');
const costNavBody = document.querySelector('.body');
const block = document.querySelector('.block');
const costPrice = document.querySelector('.cost-price');

const arr = []

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
    
    const increament = document.querySelector('.increament');
    const deccreament = document.querySelector('.decreament');
    const countNumber = document.querySelector('.count-number');
    const checkout = document.querySelector('.checkout');
    const removeIcon = document.querySelector('.fa-trash-can');
    const itemname = document.querySelector('.itemname');

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
        costPrice.textContent = num += itemPrice
        
    })
    deccreament.addEventListener('click', () => {
        countNumber.textContent = count -= 1
        costPrice.textContent = num -= itemPrice
    })
    checkout.addEventListener('click', () => {
        costNav.style.right='-700px'
        costNav.style.transitionDuration='.5s'
        balancedPrice.innerText = costPrice.innerHTML
    })
}
    