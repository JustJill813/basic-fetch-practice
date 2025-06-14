import { fetchUsers } from "./js/fetchData.js";

const userCardsContainer = document.getElementById("user-cards-container");
const fetchAllButton = document.getElementById("fetch-all");
const fetchFilteredButton = document.getElementById("fetch-filtered");
const clearCardsButton = document.getElementById("clear-cards");

function createUserCard(user) {
    const card = document.createElement("div");
    card.classList.add("user-card");
    card.innerHTML = `
        <h2>${user.firstName} ${user.lastName}</h2>
        <p>Company: ${user.companyName}</p>
        <p>Years Employed: ${user.yearsEmployed}</p>
    `;
    userCardsContainer.appendChild(card);
}

fetchAllButton.addEventListener("click", async () => {
    const users = await fetchUsers();
    console.log(users);
    userCardsContainer.innerHTML = "";
    users.forEach(createUserCard);
});

fetchFilteredButton.addEventListener("click", async () => {
    const users = await fetchUsers();
    userCardsContainer.innerHTML = "";
    users.filter(user => user.yearsEmployed < 10).forEach(createUserCard);
});

clearCardsButton.addEventListener("click", () => {
    userCardsContainer.innerHTML = "";
});
