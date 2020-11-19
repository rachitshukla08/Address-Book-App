window.addEventListener('DOMContentLoaded',(event)=>{
  createInnerHtml();
});

const createInnerHtml = () => {
    const innerHtml = `<tr>
    <th></th>
    <th>Fullname</th>
    <th>Address</th>
    <th>City</th>
    <th>State</th>
    <th>Zip Code</th>
    <th>Phone Number</th>
    </tr>
    <tr><td></td>
    <td>Rachit</td>
    <td>E-8/123</td>
    <td>Bhopal</td>
    <td>Madhya Pradesh</td>
    <td>432432</td>
    <td>9191919191</td>
    <td>
        <img id="1" onclick="remove(this)" alt="delete"
            src="../assets/icons/delete-black-18dp.svg">
        <img id="1" alt="edit" onclick="update(this)" 
            src="../assets/icons/create-black-18dp.svg">
    </td>
    </tr>
    <tr><td></td>
    <td>Rachit 2</td>
    <td>E-8/123</td>
    <td>Bhopal</td>
    <td>Madhya Pradesh</td>
    <td>432432</td>
    <td>9191919191</td>
    <td>
        <img id="1" onclick="remove(this)" alt="delete"
            src="../assets/icons/delete-black-18dp.svg">
        <img id="1" alt="edit" onclick="update(this)" 
            src="../assets/icons/create-black-18dp.svg">
    </td>
    </tr>`;
    document.querySelector('#table-display').innerHTML = innerHtml;
}