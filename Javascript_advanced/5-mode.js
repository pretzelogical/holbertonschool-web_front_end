function changeMode(size, weight, transform, background, color) {
    return function() {
        document.documentElement.style.fontSize = size;
        document.documentElement.style.fontWeight = weight;
        document.documentElement.style.textTransform = transform;
        document.documentElement.style.backgroundColor = background;
        document.documentElement.style.color = color;
    }
}

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green')
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white')
    const screamMode = changeMode(12, 'bold', 'lowercase', 'white', 'black')
    const body = document.documentElement;
    const para = document.createElement('p');
    const spookyBtn = document.createElement('button');
    const darkBtn = document.createElement('button');
    const screamBtn = document.createElement('button');
    spookyBtn.addEventListener('click', spooky);
    darkBtn.addEventListener('click', darkMode);
    screamBtn.addEventListener('click', screamMode);
    para.innerText = 'Welcome Holberton!';
    spookyBtn.innerText = 'Spooky';
    darkBtn.innerText = 'Dark mode';
    screamBtn.innerText = 'Scream mode';
    body.append(para, spookyBtn, darkBtn, screamBtn);
}

main();
