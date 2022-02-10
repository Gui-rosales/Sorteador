let id = 0;

//manipulação da modal de nomes
let modalNames = document.getElementById("modal_names");
let closeNamesModalButton = document.getElementsByClassName("close")[1];
let openModalNameButton = document.getElementById("names").addEventListener("click", ()=>{
    modalNames.style.display = "block";
});
closeNamesModalButton.addEventListener("click", ()=>{
    modalNames.style.display = "none";
});

// manipulação da modal de numeros
let modalNumbers = document.getElementById("modal_numbers");
let closeNumbersModalButton = document.getElementsByClassName("close")[0];
let openModalNumbersButton = document.getElementById("numbers").addEventListener("click", ()=>{
    modalNumbers.style.display = "block";
});
closeNumbersModalButton.addEventListener("click", ()=>{
    modalNumbers.style.display = "none";
});

let draw_number = document.getElementById("draw_btn").addEventListener("click", ()=>{
   let base_range = 10;
   let aux = document.getElementById("number_interval").value;
   
   if(aux === ""){
       alert("Digite o intervalo de números que deseja");
   }else{
       base_range = parseInt(aux);
       let number_drawed = Math.round(Math.random()* base_range);
       document.getElementById("number").innerHTML = number_drawed;
   }
    
});

let add_names = document.getElementById("add_btn").addEventListener("click", ()=>{
    let input_text = document.getElementById("input_names");
    if(input_text === ""){
        alert("Digite algo na caixa de texto pls :)");
    }else{
        
        let listItem = document.createElement("li");
        listItem.setAttribute("id", id);
        listItem.appendChild(document.createTextNode(input_text.value));
        let list = document.getElementById("list");
        list.appendChild(listItem);
        input_text.value = "";
    }
});