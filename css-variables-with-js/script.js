let inputs =document.querySelectorAll("input");

function update(){
    let prefix =(this.dataset.postfix ||'')
    document.documentElement.style.setProperty(`--${this.name}`,this.value+prefix);
}

inputs.forEach(inp => {
    inp.addEventListener("change",update)
});