const homePage = `
    <h2>Welcome to My Travel Guide</h2>

    <img src="./images/home.jpg" alt="Beautiful travel location">

    <p>
        Traveling is a great way to experience new places, cultures,
        and people. There are many amazing places to explore around
        the world.
    </p>

`;


const destinationsPage = `
    <h2>Destinations</h2>

    <img src="./images/destination.jpg" alt="Travel destination">

    <p>
        There are many amazing destinations around the world.
        Every location has its own history, culture, and attractions.
    </p>

`;


const foodPage = `
    <h2>Food Around the World</h2>

    <img src="./images/food.jpg" alt="Food from around the world">

    <p>
        Food is an important part of every culture. Trying local
        food can be one of the best parts of traveling.
    </p>

`;


const aboutPage = `
    <h2>About This Website</h2>

    <img src="./images/about.png" alt="Travel experience">

    <p>
        This website was created for Homework 2 to demonstrate
        MVC.
    </p>

    
`;


const pages = {
    home: homePage,
    destinations: destinationsPage,
    food: foodPage,
    about: aboutPage
};


export function changePage(pageName) {
    document.querySelector("#app").innerHTML = pages[pageName];
}