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
