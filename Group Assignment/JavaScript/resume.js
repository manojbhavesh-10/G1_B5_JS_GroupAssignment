import data from '../Data.json' assert { type: 'json' };
console.log(data);

let users = data.resume;
const totalLength = users.length;

users.forEach(user => {
    console.log(user);
    
})

function displayUser(user) {

    // Banner{username, applied for, and inbuild image}
    const {id, basics, skills, work, Internship, projects, education, achievements, interests} = user;
    document.querySelector(".name").innerText = basics.name;
    document.querySelector(".role").innerText = basics.AppliedFor;
    
    document.querySelector(".mobile").innerText = basics.phone;
    document.querySelector(".mail").innerText = basics.email;
    document.querySelector(".linkedin").href = basics.profiles.url;

    // Skills
    let userSkills = document.querySelector(".second");
    let userSkillsData = `<ul style="list-style-type: none;">${skills.keywords.map(data =>
        `<li>${data}</li>`).join(" ")}
        </ul>`;
    userSkills.innerHTML = userSkillsData;    
      


    let userInterest = document.querySelector(".third");
    let userInterestData = `<ul style="list-style-type: none;">${interests.hobbies.map(data =>
                    `<li>${data}</li>`).join(" ")}
                    </ul>`;
    userInterest.innerHTML = userInterestData;                

    //Experience
    document.querySelector(".company-name").innerHTML =  work["Company Name"];
    document.querySelector(".position").innerText = work["Position"];
    document.querySelector(".start").innerText = work["Start Date"];
    document.querySelector(".end").innerText = work["End Date"];
    document.querySelector(".summary").innerText = work["Summary"];


    //Peoject
    document.querySelector(".project-title").innerText = projects.name + " ";
    document.querySelector(".user-project").innerText = projects.description;


    // Education:
    let userUG = education.UG.institute + ", " + education.UG.course + ", " + education.UG["Start Date"] + ", " + education.UG["End Date"] + ", " + education.UG.cgpa;
    let userSSLC = education["Senior Secondary"].institute + ", " + education["Senior Secondary"].cgpa;
    let userHSC = education["High School"].institute + ", " + education["High School"].cgpa;
    let educationData = [userUG, userSSLC, userHSC];

    let userEducation = document.querySelector(".user-education");
    let userEducationDate = `<ul">${educationData.map(data =>
        `<li>${data}</li>`).join(" ")}
        </ul>`;
        userEducation.innerHTML = userEducationDate;


    // Internships
    document.querySelector(".internship .company-name").innerText = Internship["Company Name"];
    document.querySelector(".internship .position").innerText = Internship["Position"];
    document.querySelector(".internship .start").innerText = Internship["Start Date"];
    document.querySelector(".internship .end").innerText = Internship["End Date"];
    document.querySelector(".internship .summary").innerText = Internship["Summary"];

    // Achievements
    let userAchievement = document.querySelector(".user-achievment");
    let userAchievementData = `<ul">${achievements.Summary.map(data =>
            `<li>${data}</li>`).join(" ")}
             </ul>`;
    userAchievement.innerHTML = userAchievementData;
}



let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
var count = 1;

prevBtn.addEventListener("click", () => {
    
    if(totalLength - 1 >= count) {
        nextBtn.style.display = "block";
    }
    if(count == 1) {
        prevBtn.style.display = 'none';
        count = 1;
    }
    --count;
    displayUser(users[count]);
    console.log(users[count]);
    console.log(count);
    
    
})

nextBtn.addEventListener("click", () => {    
    if(count < totalLength) {
        if(count >= 1) {
            console.log(prevBtn);
            prevBtn.style.display = 'block';            
        }
        if(count == totalLength -1) {
            nextBtn.style.display = "none";
            count = totalLength - 1;
        }
        displayUser(users[count]);
        console.log(users[count]);
        console.log(count);
        count++;
     
    }
})

displayUser(users[0]);


// search button

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
    let filterUsers = users.filter((user) => {
    // here we compare the string value without changing lower or upper case. the user entered value should be equal to the user.basics.AppliedFor. Then filter function works otherwise it shows alert() message
        return user.basics.AppliedFor === searchBox.value;
    });
    console.log(filterUsers);
    let totalLength = filterUsers.length;
    let count = 1;

    if(totalLength === 0) {
        window.alert("No such results found :(");    
    }

    if(totalLength === 1) {
        displayUser(filterUsers[0]);
        nextBtn.style.display = "none";
        prevBtn.style.display = "none"; 
    }

    // if we reach begining or end, we need to hit button twice. then only it show the correct details of users. otherwisw hit go back button then search. 
    if(filterUsers.length > 1) {
        displayUser(filterUsers[0]);
        console.log(filterUsers.length);
        nextBtn.style.display = "block";
        prevBtn.style.display = 'none'; 
        nextBtn.addEventListener("click", () => {    
            if(count < totalLength) {
                if(count >= 1) {
                    console.log(prevBtn);
                    prevBtn.style.display = 'block';            
                }
                if(count == totalLength -1) {
                    nextBtn.style.display = "none";
                    count = totalLength - 1;
                }
                displayUser(filterUsers[count]);
                console.log(filterUsers[count]);
                console.log(count);
                count++;       
            }
        })
        prevBtn.addEventListener("click", () => {
            if(totalLength - 1 >= count) {
                nextBtn.style.display = "block";
            }
            if(count == 1) {
                prevBtn.style.display = 'none';
                count = 1;
            }
            --count;
            displayUser(filterUsers[count]);
            console.log(filterUsers[count]);
            console.log(count);
        })
    }
    users = data.resume;    
});

// After searching, is there any situation to see all resumes again then hit the goback button

const refreshBtn = document.querySelector(".refresh-btn");
refreshBtn.addEventListener("click", () => {
    window.location.reload();
})


