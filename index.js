const socials = [
    { name: 'Facebook', icon: './res/facebook.png' },
    { name: 'Instagram', icon: './res/instagram.png' },
    { name: 'Whatsapp', icon: './res/whatsapp.png' },
    { name: 'Message', icon: './res/inbox.png' },
    { name: 'Phone', icon: './res/telephone.png' },
  ];
  
  const footer = document.getElementById('footer');
  
  socials.forEach(social => {
    const div = document.createElement('div');
    div.innerHTML = `<img src="${social.icon}" alt="${social.name} icon"> <span>${social.name}</span>`;
    div.className = 'soc';
    footer.appendChild(div);
  });