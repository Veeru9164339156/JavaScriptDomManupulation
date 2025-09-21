function personal_info() {
    let personal = document.getElementsByClassName("personal_info");
    personal[0].style.display = "none";
    document.getElementsByClassName("personal_info_disp")[0].style.display = "";

    document.getElementsByClassName("res")[0].innerHTML = "Personal Details :";
    let fname = document.getElementById("fn").value;
    document.getElementsByClassName("res")[1].innerHTML = "First_Name : " + fname;
    let lname = document.getElementById("ln").value;
    document.getElementsByClassName("res")[2].innerHTML = "Last_Name : " + lname;
    let con = document.getElementById("cn").value;
    document.getElementsByClassName("res")[3].innerHTML = "Contact : " + con;
    let loc = document.getElementById("loc").value;
    document.getElementsByClassName("res")[4].innerHTML = "Location : " + loc;
    let radios = document.getElementsByClassName("radiooption");
    let selectedValue = "";
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedValue = radios[i].value;
            break;
        }
    }
    document.getElementsByClassName("res")[5].innerHTML = "Your Entered gender is : " + selectedValue;
    document.getElementsByClassName("res")[6].innerHTML;
}

function callparentform() {
    document.getElementsByClassName("personal_info_disp")[0].style.display = "none";
    let parent = document.getElementsByClassName("parent_info");
    parent[0].style.display = "";
}

function parent_info() {
    document.getElementsByClassName("parent_info")[0].style.display = "none";

    document.getElementsByClassName("parent_info_disp")[0].style.display = "";
    document.getElementsByClassName("pdisp")[0].innerHTML = "Parent Details :";
    let fname = document.getElementById("fatherName").value;
    document.getElementsByClassName("pdisp")[1].innerHTML = "Father_Name : " + fname;
    let lname = document.getElementById("motherName").value;
    document.getElementsByClassName("pdisp")[2].innerHTML = "Mother_Name : " + lname;
    let con = document.getElementById("parentContact").value;
    document.getElementsByClassName("pdisp")[3].innerHTML = "Contact : " + con;
    let loc = document.getElementById("parentLoc").value;
    document.getElementsByClassName("pdisp")[4].innerHTML = "Location : " + loc;
    let ocp = document.getElementById("parentOcc").value;
    document.getElementsByClassName("pdisp")[5].innerHTML = "Occupation : " + ocp;
}

function callEducationform() {
    document.getElementsByClassName("parent_info_disp")[0].style.display = "none";
    document.getElementsByClassName("education_info")[0].style.display = "";
}

function education_info() {
    
    document.getElementsByClassName("education_info")[0].style.display = "none";

    let eduDisplay = document.getElementsByClassName("education_info_disp")[0];
    eduDisplay.style.display = "";

    let edisp = document.getElementsByClassName("edisp");
    edisp[0].innerHTML = "Education Details :";
    edisp[1].innerHTML = "Highest Qualification : " + document.getElementById("qualification").value;
    edisp[2].innerHTML = "School / College Name : " + document.getElementById("schoolCollege").value;
    edisp[3].innerHTML = "Year of Passing : " + document.getElementById("passingYear").value +
        " | Percentage / GPA : " + document.getElementById("percentage").value;
    edisp[4].innerHTML = "THANK YOU";

}

