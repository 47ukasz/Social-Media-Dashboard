const switchBtn = document.querySelector('[data-dark="btn"]')
const circleBtn = document.querySelector('[data-dark="circle"]')
const header = document.querySelector('[data-dark="header"]')
const allCards = document.querySelectorAll('[data-dark="card"]')
const allText = document.querySelectorAll('[data-dark="text"]')
const allWhiteText = document.querySelectorAll('[data-dark="textWhite"]')
const body = document.querySelector('body')

const enableDarkMode = () => {
    switchBtn.classList.toggle('switchToggled')
    circleBtn.classList.toggle('circleToggled')
    header.classList.toggle('headerToggled')
    body.classList.toggle('bodyToggled')

    for (const card of allCards) {
        card.classList.toggle('cardToggled')
    }

    for (const text of allText) {
        text.classList.toggle('textToggled')

        if (text.classList.contains('textToggled') && text.classList.contains('header__line')) {
            text.style.backgroundColor = 'hsl(228, 28%, 20%)'
            text.style.transition = 'background-color .5s'
        } else if (text.classList.contains('textToggled')) {
            text.style.transition = 'color .5s'
        } else {
            text.removeAttribute('style', '')
        }
    }

    for (const text of allWhiteText) {
        text.classList.toggle('textWhiteToggled')
    }
}

switchBtn.addEventListener('click', enableDarkMode)