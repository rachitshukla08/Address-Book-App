window.addEventListener('DOMContentLoaded',(event)=>{
  createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Fullname</th><th>Address</th><th>City</th>"
                        +"<th>State</th><th>Zip Code</th><th>Phone Number</th>";
    let innerHtml = `${headerHtml}`;
    let addressBookList = createContactsJSON();
    for(const contact of addressBookList){
      innerHtml = `${innerHtml}
    <tr><td></td>
    <td>${contact._name}</td>
    <td>${contact._address}</td>
    <td>${contact._city}</td>
    <td>${contact._state}</td>
    <td>${contact._zip}</td>
    <td>${contact._phone}</td>
    <td>
        <img id="1" onclick="remove(this)" alt="delete"
            src="../assets/icons/delete-black-18dp.svg">
        <img id="1" alt="edit" onclick="update(this)" 
            src="../assets/icons/create-black-18dp.svg">
    </td>
    </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}
const createContactsJSON = () => {
  let addressBookListLocal = [
      {
          _name: "Rachit",
          _address: "E-8/123",
          _city: "Bhopal",
          _state: "Madhya Pradesh",
          _zip: "432432",
          _phone: "9191919191"
      },
      {
        _name: "Rachit 2",
        _address: "E-8/123 2",
        _city: "Bhopal 2",
        _state: "Madhya Pradesh 2",
        _zip: "432439",
        _phone: "9191919199"
    },
  ];
  return addressBookListLocal;
}