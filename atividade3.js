//FUNÇÃO PARA ADICIONAR UM ITEM À LISTA  
function addItemToList() { 
    const node = document.createElement("li");
 
    const itemText = document.getElementById("itemText").value;
    const cor = document.querySelector('input[name="cores"]:checked').value;
    
    const textnode = document.createTextNode(itemText);
 
    node.appendChild(textnode);
    node.style.color = cor;
 
    document.getElementById("myList").appendChild(node);
 }
 
 document.getElementById("appendButton").addEventListener("click", addItemToList);
 