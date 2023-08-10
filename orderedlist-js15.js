let itemList = [{
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    }
];
let ulcontainerele = document.getElementById("ulcontainer");
ulcontainerele.style.listStyle = "none";

function createorder(item) {
    let listitem = document.createElement("li");
    ulcontainerele.appendChild(listitem);
    listitem.textContent = item.itemName;
    listitem.setAttribute("id", "item" + item.uniqueNo);
    let listitemId = "item" + item.uniqueNo;
    listitem.classList.add("item", "p-2");
    ulcontainerele.appendChild(listitem);


    let cancelbutton = document.createElement("button");
    cancelbutton.classList.add("btn", "btn-danger", "ml-2");
    cancelbutton.textContent = "Cancel";
    listitem.appendChild(cancelbutton);
    cancelbutton.setAttribute("id", "button" + item.uniqueNo);
    let cancelbuttonId = "button" + item.uniqueNo;
    cancelbutton.setAttribute("for", "item" + item.uniqueNo);
    cancelbutton.onclick = function() {
        ulcontainerele.removeChild(listitem);
    }
}
for (let item of itemList) {
    createorder(item);
}