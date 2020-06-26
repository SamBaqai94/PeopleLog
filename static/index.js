'use strict';
/*
    Name:Sameed Baqai
    Description:Playing aroudn object.prototypes
*/
var peopleLog=[
    {
        "id":0,
        "name":"Sameed Baqai",
        "age":"25",
        "BirthDate":"12-27-1994",
        "sex":"Male",
    },
    {
        "id":1,
        "name":"Selina",
        'age':"24",
        "BirthDate":"09-14-1995",
        "sex":"Female",
    },
];

var counter=0;
//empty Person object constructor
function People(){

}
//Person Constructor
function People(id, name, age, dob, sex){
    this.id=id;
    this.name=name;
    this.age=age;
    this.dob=dob;
    this.sex=sex;
}

//Listing People method add to prototype
People.prototype.listPeople=function(){
    let list=document.getElementById('list');
    let tr=document.getElementsByClassName('row');
    /*
    removes tr element with with class 'row' when new person 
    is add to personlog and when window object refreshes
    */
    if(tr.length > 0){
        //loops depending hwo many class 'rows' are there
        for(let i=0;i<=tr.length;i++){
            i=0;
            list.removeChild(tr[i]);
        }
    }
    /*
    Dynamically creates tr,td elements by looping over array object 
    peopleLog
    */
    peopleLog.forEach(people=>{
        let tr=document.createElement('tr');
        tr.classList.add('row');
        //gets assigned to latest id in peopleLog
        counter=people['id'];
        for(let obj in people){
            let td=document.createElement('td');
            td.textContent=people[obj];
            td.classList.add('list-row');
            tr.appendChild(td);
        }
        list.appendChild(tr);
    });
}
//prototype method to add new people to array object
People.prototype.addPeople=function(){
    peopleLog.push({
        "id":this.id,
        "name":this.name,
        "age":this.age,
        "BirthDate":this.dob,
        "sex":this.sex,
    },);
}

//calls upon listPeople prototype function to list people
window.onload=function(){
    let people1=new People();
    people1.listPeople();
}
//open event function for open up form
function opens(event){
    let form=document.getElementById('myForm');
    form.style.display="block";
}
//submission of new person
function submit(){
    let form=document.getElementById('myForm');
    let name=document.getElementById('name').value;
    let age=document.getElementById('age').value;
    let dob=document.getElementById('dob').value;
    let sex=document.getElementById('sex').value;
    //object instance for new person
    let people2=new People(counter+1,name,age,dob,sex);
    //calls upon addPeople prototype function
    people2.addPeople();
    people2.listPeople();
    //hides pop up form
    form.style.display="none";
}