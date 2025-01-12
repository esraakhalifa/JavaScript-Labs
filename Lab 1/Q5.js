// This code will only run in the browser console

function DisplayNameAndGrades() {
    UserName = prompt("Enter your name: ");
    Grades = prompt("Enter your grades: ");
    GradesArray = Grades.split(',');
    console.log('Welcome ' + UserName);
    console.table(GradesArray);
    return;
    
}
// validations and calculating average
DisplayNameAndGrades();

//console.log(DisplayGradesAsTable('Esraa', '90,50,30,10'));