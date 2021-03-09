export default function contactPage() {
    const contentDiv = document.querySelector('#content');

    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    const contactInfo = document.createElement('p');
    contactInfo.innerHTML = 'Email: <a href="http://www.pizza.com">cartesian_cuisine@abc.def</a>';
    contactInfo.classList.add('contact-info');
    contentDiv.appendChild(contactInfo);
}