export default function menuPage() {
    const contentDiv = document.querySelector('#content');

    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    let menuPicture = document.createElement('img');
    menuPicture.src = "https://www.paperpapers.com/news/wp-content/uploads/2018/06/0057dd698f5fcc2.jpg";
    menuPicture.classList.add('menu-pic');
    contentDiv.appendChild(menuPicture);
}