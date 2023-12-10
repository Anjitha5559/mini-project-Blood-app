// JavaScript
const socials = [
  { name: 'Facebook',  icon: './res/facebook.png', url: 'https://www.facebook.com' },
  { name: 'Instagram', icon: './res/instagram.png', url: 'https://www.instagram.com' },
  { name: 'Whatsapp', icon: './res/whatsapp.png', url: 'https://www.whatsapp.com' },
  { name: 'Message', icon: './res/inbox.png', url: 'https://www.example.com/message' },
  { name: 'Phone', icon: './res/telephone.png', url: 'tel:+1234567890' },
];

const footer = document.getElementById('iconrow');

socials.forEach(social => {
  const div = document.createElement('div');
  div.innerHTML = `<a class="socialbtn" href="${social.url}" target="_blank"><img src="${social.icon}" alt="${social.name} icon"> <span class="iconname">${social.name}</span></a>`;
  div.className = 'soc';
  footer.appendChild(div);
});


const quotesAndFacts = [
  "Blood donation is the best donation",
  "Every two seconds someone in the U.S. needs blood",
  "A single donation can potentially help more than one patient",
  "One donation can save up to three lives",
  "Blood is the most precious gift that anyone can give to another person",
];

const quotesDiv = document.getElementById("quotes");
let currentQuoteIndex = 0;

function updateQuote() {
  quotesDiv.classList.add('fade-out');setTimeout(() => {
    quotesDiv.textContent = quotesAndFacts[currentQuoteIndex];
    quotesDiv.classList.remove('fade-out');
    quotesDiv.classList.add('fade-in'); setTimeout(() => {
      quotesDiv.classList.remove('fade-in');
    }, 1000);

    currentQuoteIndex = (currentQuoteIndex + 1) % quotesAndFacts.length;
  }, 1000);
}

updateQuote();
setInterval(updateQuote, 4000);