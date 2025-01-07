function CalculateAgeFromDOB(dob)
{
    var age = new Date() - new Date(dob);
    return Math.round(age / (1000*60*60*24*365.25));
}


var users = [
    {
        "id": 1,
        "name": "Ahmed",
        "email": "ahmed@gmail.com",
        "dob": "1990-05-15",
        "skills": ["Java", "React", "NodeJS"]
    },
    {
        "id": 2,
        "name": "mohamed",
        "email": "mohamed@test.com",
        "dob": "1999-10-15",
        "skills": ["HTML", "CSS","Javascript", "React", "NodeJS"]
    },
    {
        "id": 3,
        "name": "rahma",
        "email": "rahma@example.com",
        "dob": "2001-02-05",
        "skills": ["python", "Java","Django", "Data analysis"]
    },
]

var usersWithAge = users.map(
    function(user)
    {
        user.age = CalculateAgeFromDOB(user.dob);
        return user;
    }
)

console.log(usersWithAge);