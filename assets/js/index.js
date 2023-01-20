const cardWrapper = document.querySelectorAll('.product-card')
for(let i = 0; i < cardWrapper.length; i += 1) {
  cardWrapper[i].addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('disabled')) {
      return
    }
    if (e.currentTarget.classList.contains('selected')) {
      e.currentTarget.classList.remove('selected');
      const description = e.currentTarget.closest('.card-wrapper').querySelector('.description')
      const descriptionNone = e.currentTarget.closest('.card-wrapper').querySelector('.description.hidden')
      console.log(descriptionNone)
      descriptionNone.classList.remove('hidden');
      description.classList.add('hidden')
    }
    else {
      e.currentTarget.classList.add('selected');
      const description = e.currentTarget.closest('.card-wrapper').querySelector('.description')
      const descriptionNone = e.currentTarget.closest('.card-wrapper').querySelector('.description.hidden')
      console.log(descriptionNone)
      descriptionNone.classList.remove('hidden');
      description.classList.add('hidden')
    }
  })
}

const buy = document.querySelectorAll('.buy')
for(let i = 0; i < buy.length; i += 1) {
  buy[i].addEventListener('click', (e) => {
    console.log(e.currentTarget)
    const card = e.currentTarget.closest('.card-wrapper').querySelector('.product-card')
    console.log(card)
    if (card.classList.contains('hidden')) {
      return
    }
    if (card.classList.contains('selected')) {
      card.classList.remove('selected');
    }
    else {
      card.classList.add('selected');
    }
  })
}
