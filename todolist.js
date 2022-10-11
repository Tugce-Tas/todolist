
let formDOM = document.querySelector("#form")
formDOM.addEventListener('submit', formHandler)

let ALERT= `<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>EKSİK BİLGİ!!</strong>  Lütfen İlgili Alanı Doldurun...
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`


let alertDOM=document.querySelector("#alert")

function formHandler(event) {
    event.preventDefault()
    let inputDOM = document.querySelector("#to_do")
    if (inputDOM.value) {
        addItem(inputDOM.value) 
    } else {
        alertDOM.innerHTML= ALERT
    }
}

function addItem() {
    let ulDOM = document.querySelector("#list")
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `
    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"> 
    <label class="form-check-label" for="flexCheckIndeterminate"> ${to_do.value} </label> `
    liDOM.classList.add("form-check", "list-group-item")
    ulDOM.append(liDOM)
}


{/* <div class="form-check list-group-item"> */}
        //   <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">

        //   <label class="form-check-label" for="flexCheckIndeterminate"> 3 Litre Su İç </label>
        // </div>





/* <div class="form-check list-group-item">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
          <label class="form-check-label" for="flexCheckIndeterminate"> 3 Litre Su İç </label>
        </div> */




