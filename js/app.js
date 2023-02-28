const loadPhone =async(searchText)=>{
   const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
//    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
//     .then(response => response.json())
//     .then(data => console.log(data))
        const response = await fetch(url);
        const data = await response.json();
        displayPhones(data.data);

}

const displayPhones =(phones)=>{
    // console.log(phones[0].brand);
    //step-1:get a container element;
    const phonesContainer = document.getElementById('phones-container');
    phones.forEach(phone =>{
        console.log(phone);
    //step-2:create an element;
    const phoneDiv=document.createElement('div');
    phoneDiv.classList.add('col');//very very important live for understanding;
    //step-3:set up innerHTML/innerText inside created element;
    phoneDiv.innerHTML =`
    <div class="card p-4">
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
    `;
    //step-4:appendChild;
    phonesContainer.appendChild(phoneDiv);
    })
}

document.getElementById('search-btn').addEventListener('click',function(){
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchText.innerText= searchField;
    loadPhone(searchText);

})

loadPhone();