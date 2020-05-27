const paragraphs = document.getElementById('paragraphs');
const inputField = document.getElementById('inputField').value;
const button = document.getElementById("firstButton");
const p = paragraphs.addEventListener("click", (event) => {
    
    console.log(event.target);
});

function getInputValue() {
    const inputValue = document.getElementById('inputField').value;
    paragraphs.innerHTML += '<p>' + inputValue + '</p>';
}

button.addEventListener("click", () => {
    getInputValue();
    console.log("button Clicked")
});

function setup(){
    document.getElementById('mainHeader').innerText = 'A heading!';

    let paragraphs = document.getElementById('paragraphs');

    // paragraphs += document.createElement('p').innerText(`I'm paragraph number ${i}`)
    
    for(let i = 1; i < 6; i++) {
        var p = document.createElement("p");
        const text = document.createTextNode(`I'm paragraph number ${i}.`);
        p.appendChild(text);
        paragraphs.appendChild(p);
        // paragraphs.innerHTML += '<p>I\'m paragraph number ' + i + '</p>';        
    }
    
    console.log(paragraphs)
}
setup();
