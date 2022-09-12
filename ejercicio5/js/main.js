
 let lis = document.getElementById('lista').getElementsByTagName('li');
 let num = lis.length
function addElement(){
    const ul = document.getElementById("lista");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode("Element "+num));
    ul.appendChild(li);
    num = num +1;
}

