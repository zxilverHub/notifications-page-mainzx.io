const mark = document.querySelector('.mark'),
      articles = document.querySelectorAll('main section article'),
      notifs = document.querySelector('.notifs');
let no_of_notifs = 3;
     

mark.addEventListener('click', () => {
    mark.setAttribute('style', 'color: var(--grayish-blue)');
    removeNotifCpunt();
    articles.forEach(article => {
        removeRedDots(article)
        article.setAttribute('style', 'background-color: var(--white-neutral);')
    })
})

articles.forEach(ar => {
    ar.addEventListener('click', () => {
        no_of_notifs--;
        no_of_notifs === 0 ? removeNotifCpunt() :  notifs.innerText = `${no_of_notifs}`;
        removeRedDots(ar)
        ar.setAttribute('style', 'background-color: var(--white-neutral)');
    })
})

function removeNotifCpunt() {
    notifs.setAttribute('style', 'display: none;')
}

function removeRedDots(ar) {
    if(!ar.hasAttribute('id', 'read')) {
        let a = ar.children[1].children[0].children[2];
        if(a.hasAttribute('id', 'unread')){
            a.removeAttribute('id', 'unread');
            a.setAttribute('id', 'read')
        }
    }
}