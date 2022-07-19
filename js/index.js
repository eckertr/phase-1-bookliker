document.addEventListener("DOMContentLoaded", function() {  fetch(`http://localhost:3000/books`)
.then(r => r.json())
.then( booksArray => {
    renderSideList( booksArray )
})
});

const renderSideList = booksArray => {
    const sideContainer = document.querySelector( '#list')

    booksArray.forEach( bookObj => {
        const titleElement = document.createElement( 'li' )

        titleElement.addEventListener( 'click', () => renderMain( bookObj ))

        titleElement.textContent = bookObj.title
        sideContainer.appendChild( titleElement )
    })
}

const renderMain = bookObj => {
    const mainContainer = document.querySelector( '#show-panel' )
    mainContainer.innerHTML = ""
    const image = document.createElement( 'img' )
    image.src = bookObj.img_url
    const title = document.createElement ( 'h1' )
    const subtitle = document.createElement( 'h2' )
    subtitle.textContent = bookObj.subtitle
    const author = document.createElement( 'h3' )
    author.textContent = bookObj.author
    const description = document.createElement( 'p' )
    description.textContent = bookObj.description
    mainContainer.append( image, title, subtitle, author, description )
}
