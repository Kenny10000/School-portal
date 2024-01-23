var allStudents = []
function submit() {
    var firstname = document.getElementById('firstname').value
    var lastname = document.getElementById('lastname').value
    var mailphone = document.getElementById('mailphone').value
    var password = document.getElementById('password').value

    if (firstname === '' || lastname === '' || mailphone === '' || password === '') {
        err.innerHTML = "All input filed are required" 
        err.style.display = "block"
        setTimeout(() =>{
            err.style.display = "none"
        },5000
        )
        // var allStudents= JSON.parse(localStorage.getItem('allStudents'))
    } else {    
        var studentObj = {firstname,lastname,mailphone,password}
        allStudents.push(studentObj)
        console.log(allStudents);
        // display.innerHTML = (studentObj);
        displayStudent()
        document.getElementById('firstname').value = ''
        document.getElementById('lastname').value  = ''
        document.getElementById('mailphone').value = ''
        document.getElementById('password').value  = ''
    }
}
function displayStudent(){
    suc.innerHTML = "Student info Submited Successful" 
    suc.style.display = "block"
    setTimeout(() =>{
        suc.style.display = "none"
    },5000
    )
        keep = "";
        for(i=0; i < allStudents.length; i++){
            keep +=`
  <table>
  <tr>
    <td >${i + 1}.</td>
    <td class="w-25"> ${allStudents[i].firstname}</td>
    <td class="w-25"> ${allStudents[i].lastname}</td>
    <td class="w-25"> ${allStudents[i].mailphone}</td>
    <td class="w-25"> 
    <button class="btn btn-danger btn-sm"> <i class="fa-solid fa-trash" style="color: #ffffff;" onclick="deleteItem(${i})"></i></button>
    <button class="btn btn-warning btn-sm"><i class="fa-solid fa-pen-to-square" style="color: #ffffff;"></i></button>
    </td> 
  </tr>
  </table>
            `
            document.getElementById('display').innerHTML = keep
        } 
    }