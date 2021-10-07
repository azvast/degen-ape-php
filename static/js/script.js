const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector('nav');
const menu = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
    this.classList.toggle("close");
    nav.classList.toggle("reveal");
    menu.classList.toggle("reveal-items");
});

async function connectWallet(e) {
    if (typeof window.ethereum == 'undefined') {
        console.log('MetaMask is not installed!');
        return;
    }

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];

    e.target.innerText = account.slice(0, 4) + "..." + account.slice(-4);
    e.target.style.backgroundColor = "#09cf09";
}