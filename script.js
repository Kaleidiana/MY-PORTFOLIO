document.addEventListener("DOMContentLoaded", function() {
    const navItems = [
        { href: 'home.html', text: 'Home' },
        { href: 'about.html', text: 'About' },
        { href: 'services.html', text: 'Services' },
        { href: 'contact.html', text: 'Contact' }
    ];

    const nav = document.createElement('div');
    nav.className = 'nav';

    navItems.forEach(item => {
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        nav.appendChild(a);
    });

    document.getElementById('navbar').appendChild(nav);
});
