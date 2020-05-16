const $ = (str, ...params) => {
    const all = params.find(el => typeof el === 'boolean')
    const parent = params.find(el => typeof el === 'object') || document

    return all ? [...parent.querySelectorAll(str)] : parent.querySelector(str)
}
const cardModal = ({ title, content, img }) => {
    const element = document.createElement('div')
    element.classList.add('modal-card', 'card')

    element.innerHTML = /* html */ `
        <img src="img/img1.jpg" alt="">
        <h4>${title}</h4>
        <div class="content">

        </div>
    `

    $('h4', element).addEventListener('click', e => {
        
    })

    return element
}
const createModalContainer = () => {
    const element = document.createElement('div')
    element.style.position = 'fixed'
    element.style.width = '100%'
    element.style.height = '100vh'
    element.style.top = 0
    element.style.left = 0
    element.style.background = 'rgba(0,0,0,.2)'
    return element
}

const setModal = card => {
    const cloneCard = card.cloneNode(true)
    cloneCard.style.background = 'rgba(0,0,60,.2)'
    cloneCard.style.position = 'absolute'
    
    cloneCard.style.transform = 'translateX(50%)'

    modalContainer.appendChild(cloneCard)

    const coords = card.getBoundingClientRect()
    
    console.log(coords)
}

const card = cardModal({ title: 'React' })
const modalContainer = createModalContainer()
$('body').appendChild(modalContainer)
$('#root').appendChild(card)
setModal(card)