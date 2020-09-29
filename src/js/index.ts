let result = <HTMLDivElement>document.getElementById("result");
let select = <HTMLSelectElement>document.getElementById("SelectCase");
let button = <HTMLButtonElement>document.getElementById("BtnDoit");
let input = <HTMLInputElement>document.getElementById("TextInput"); 

button.addEventListener('click', function(){
    switch (select.value) {
        case "Upper Case":
            result.innerHTML = input.value.toUpperCase();
            break;
        case "Lower Case":
            result.innerHTML = input.value.toLowerCase();
            break;
        default:           
            break;
    }
});


