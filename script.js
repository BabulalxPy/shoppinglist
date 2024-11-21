const ul = document.querySelector("ul");
const ip = document.querySelector("input");
const btn = document.querySelector("button");

function btnclick(){

    const inputValue = ip.value;
    ip.value = '';
    console.log(inputValue);

    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.textContent = inputValue;
    button.textContent = "delete" ;
    
    li.appendChild(span);
    li.appendChild(button);

    ul.appendChild(li);

    button.addEventListener("click", () => {
        li.remove();
    });

    ip.focus();
    
}

btn.addEventListener("click", btnclick);
