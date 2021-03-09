export default function frontPage() {
    const contentDiv = document.querySelector('#content');

    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    let restaurantHeading = document.createElement('h1');
    restaurantHeading.textContent = "CARTESIAN CUISINE";
    restaurantHeading.classList.add('restaurant-name');
    contentDiv.appendChild(restaurantHeading);

    let frontPicture = document.createElement('img');
    frontPicture.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxAJcSQRs2u2vkyS5GoKLm66Op0CqWt0rjg&usqp=CAU";
    frontPicture.classList.add('restaurant-pic');
    contentDiv.appendChild(frontPicture);

    let frontSubHead = document.createElement('h2');
    frontSubHead.textContent = "We made this delicious food for you.";
    frontSubHead.classList.add('restaurant-subheading');
    contentDiv.appendChild(frontSubHead);

    let frontParagraph = document.createElement('p');
    frontParagraph.textContent = "At this restuarant, we really care about you having a nice time.  If you pay us enough money, we'll really show you a good time.  Really.  It's the best restaurant ever.  We hope you come eat here, and we're trying really hard to get you to drive here and spend your money.";
    frontParagraph.classList.add('restaurant-description');
    contentDiv.appendChild(frontParagraph);
}

