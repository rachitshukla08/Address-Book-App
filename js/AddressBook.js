let addressObj ={};

window.addEventListener("DOMContentLoaded",(event)=>{
    const name = document.querySelector('#name');
    const textError = document.querySelector(".text-error");   
    let nameRegex = RegExp("^([A-Z]{1}[A-Za-z]{2,}[ ]?){1,}$");      
    validateEntry(name,nameRegex,textError);

    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector(".phone-error");
    let phoneRegex = RegExp("^[+]?([0-9]{2})?[1-9]{1}[0-9]{9}$");
    validateEntry(phone,phoneRegex,phoneError);

    const address = document.querySelector('#address');
    const addressError = document.querySelector(".address-error");
    let addressRegex = RegExp("^([A-Za-z0-9/,-]{3,}[ ]?)+$");
    validateEntry(address,addressRegex,addressError);

    function validateEntry(entry,regex,errorField){
        entry.addEventListener('input',function(){
            if(regex.test(entry.value)||entry.value.length==0)
                errorField.textContent="";
            else 
                errorField.textContent="Invalid entry";
        });
    }
});
//Address Book Contact
class Contact{
    constructor(...params){
        this.name = params[0];
        this.phone = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
    }
    //getters and setters
    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex = RegExp("^([A-Z]{1}[A-Za-z]{2,}[ ]?){1,}$");
        if(nameRegex.test(name))
            this._name = name;
        else throw "Incorrect Name: "+name;
    }
    get phone(){
        return this._phone;
    }
    set phone(phone){
        let phoneRegex = RegExp("^[+]?([0-9]{2})?[1-9]{1}[0-9]{9}$");
        if(phoneRegex.test(phone))
            this._phone = phone;
        else throw "Invalid Phone: "+phone;
    }
    get address(){
        return this._address;
    }
    set address(address){
        let addressRegex = RegExp("^([A-Za-z0-9/,-]{3,}[ ]?)+$");
        if(addressRegex.test(address))
            this._address = address;
        else throw "Invalid Address: "+address;
    }
    get city(){
        return this._city;
    }
    set city(city){  
        this._city = city;
    }
    get state(){
        return this._state;
    }
    set state(state){      
        this._state = state;  
    }
    get zip(){
        return this._zip;
    }
    set zip(zip){
        this._zip = zip;
    }
    toString(){
        return "\nName: "+this.name + ", Address: "+this.address+", City: "+this.city+", State: "
                +this.state+", Zip: "+this.zip+", Phone: "+this.phone;
    }
}

function save(event){
    try{
        setAddressObject();
    }catch(e){
        console.log(e);
        return;
    }
    alert(addressObj.toString());
    console.log(addressObj.toString());
    if(addressObj.name!=undefined&&addressObj.phone!=undefined&&addressObj.address!=undefined)
        createAndUpdateStorage();
    addressObj= undefined;
}

function setAddressObject() {
    const name = document.querySelector('#name').value;
    const phone = document.querySelector('#phone').value;
    const address = document.querySelector('#address').value;
    const city = document.querySelector('#city').value;
    const state = document.querySelector('#state').value;
    const zip = document.querySelector('#zip').value;
    try{
        addressObj = new Contact(name,phone,address,city,state,zip);
    }catch(e){
        alert("Please enter proper details");
        console.error(e);
    }
}

function createAndUpdateStorage(){
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));

    if(addressBookList!=undefined){
        addressBookList.push(addressObj);
    }
    else{
        addressBookList = [addressObj];
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList",JSON.stringify(addressBookList));
}

function resetForm(){
    document.querySelector("#name").value = "";
    document.querySelector('#phone').value = "";
    document.querySelector('#address').value= "";
    document.querySelector('#city').value = "";
    document.querySelector('#state').value= "";
    document.querySelector('#zip').value= "";
}

function cancel(){
    window.location.replace(site_properties.home_page);
}