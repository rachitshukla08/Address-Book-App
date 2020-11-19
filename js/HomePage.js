let addressBookList;
window.addEventListener('DOMContentLoaded',(event)=>{
    addressBookList = getContactDataFromStorage();
    document.querySelector(".add-count").textContent = addressBookList.length;
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Fullname</th><th>Address</th><th>City</th>"
                        +"<th>State</th><th>Zip Code</th><th>Phone Number</th>";
    let innerHtml = `${headerHtml}`;
    for(const contact of addressBookList){
      console.log(contact);
      innerHtml = `${innerHtml}
      <tr><td></td>
      <td>${contact._name}</td>
      <td>${contact._address}</td>
      <td>${contact._city}</td>
      <td>${contact._state}</td>
      <td>${contact._zip}</td>
      <td>${contact._phone}</td>
      <td>
          <img id="${contact._id}" onclick="remove(this)" alt="delete"
              src="../assets/icons/delete-black-18dp.svg">
          <img id="${contact._id}" alt="edit" onclick="update(this)" 
              src="../assets/icons/create-black-18dp.svg">
      </td>
      </tr>
      `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const getContactDataFromStorage = () => {
  return localStorage.getItem('AddressBookList')?
                              JSON.parse(localStorage.getItem('AddressBookList')):[];
}

const remove = (node) => {
  let contactData = addressBookList.find(contact => contact._id == node.id);
  if(!contactData) 
      return;
  const index = addressBookList.map(contact=>contact._id)
                              .indexOf(contactData._id);
  console.log(index);
  addressBookList.splice(index,1);
  localStorage.setItem('AddressBookList',JSON.stringify(addressBookList));
  document.querySelector('.add-count').textContent = addressBookList.length;
  createInnerHtml();
}