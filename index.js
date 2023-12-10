// JavaScript
const socials = [
  { name: 'Facebook',  icon: './res/facebook.png', url: 'https://www.facebook.com' },
  { name: 'Instagram', icon: './res/instagram.png', url: 'https://www.instagram.com' },
  { name: 'Whatsapp', icon: './res/whatsapp.png', url: 'https://www.whatsapp.com' },
  { name: 'Message', icon: './res/inbox.png', url: 'https://www.example.com/message' },
  { name: 'Phone', icon: './res/telephone.png', url: 'tel:+1234567890' },
];

const footer = document.getElementById('footer');

socials.forEach(social => {
  const div = document.createElement('div');
  div.innerHTML = `<a class="socialbtn" href="${social.url}" target="_blank"><img src="${social.icon}" alt="${social.name} icon"> <span class="iconname">${social.name}</span></a>`;
  div.className = 'soc';
  footer.appendChild(div);
});