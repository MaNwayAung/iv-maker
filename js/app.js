//Selectors

let items = document.querySelector("#items");
let addBtn = document.querySelector("#addBtn");
let quantity = document.querySelector("#quantity");
let inputForm = document.querySelector('#inputForm');
let rows = document.querySelector("#rows");
let total = document.querySelector("#total");

function calculateTotal(){
    let costs = document.querySelectorAll('.cost');
    let costTotal = [...costs].reduce((pv,cv)=>pv+Number(cv.innerText),0);

    total.innerText = costTotal;
}

function del(event){
    if(confirm("Are you sure to delete?")){
        event.target.parentElement.parentElement.remove();
        calculateTotal();
    }
   
}

// function print(){
//     windows.print();
// }



products.forEach(function(product){
    let newOption = new Option(product.name, product.id)
    items.append(newOption)
    // console.log(product)
})

inputForm.addEventListener('submit',function(e){
    e.preventDefault();
    let currentProduct = products.find(product=>product.id == items.value);
    let cost = currentProduct.price * quantity.valueAsNumber;
    let newTr = document.createElement("tr");
    newTr.innerHTML = `
                        
                        <td>${currentProduct.name}
                        <br>
                        <p class="small text-danger mb-0 del-btn" onclick="del(event)">
                        Delete
                        </p>
                        </td>
                        <td class="text-end">${currentProduct.price}</td>
                        <td class="text-end">${quantity.valueAsNumber}</td>
                        <td class="text-end cost">${cost}</td>`;
                        

    rows.append(newTr);
    inputForm.reset();

    calculateTotal();
    // console.log(costs);

    // console.log(items.value, quantity.value, currentProduct);
});

