
const school = {
    name : "Code Academy",
    address : "Lundgatan",
    city : "Lund",
    teachers : [],
    students : [],
    courses : [],

    addTeacher : function (teacher){
        this.teachers.push(teacher);
    },

    addStudent : function (student){
        this.students.push(student);
    },

    addCourse : function(course){
        this.courses.push(course);

    },
    fireTechers : function(teacher){
        let teacherIndex = this.teachers.indexOf(teacher);
        if(teacherIndex > -1){
            this.teachers.splice(teacherIndex, 1);
            teacher.subjects.forEach(subject => {
                subject.removeteacher();
                
            });
        }
    }

}



// Ämnesobjekt

let math = {
    name: "Math",
    students: [],
    teacher: null,
    addStudent : function (student){
        this.students.push(student);
    },
    addTeacher: function(teacher) {
        this.teacher = teacher;  // Lägg till läraren i ämnet
        teacher.addSubjects(this);  // Lägg till ämnet till lärarens ämneslista
    },
    removeteacher : function(teacher){
        if(this.teacher){
            let teacherIndex = this.teacher.subjects.indexOf(this);
            if(teacherIndex > -1){
                this.teacher.subjects.splice(teacherIndex, 1);
            }
            this.teacher = null;

        }
            
    
    },
    removeStudent: function (student) {
        let studentIndex = this.students.indexOf(student);
        if (studentIndex > -1) {
            this.students.splice(studentIndex, 1); // Ta bort studenten från ämnets lista
        }
    }
};

let programmering = {
    name: "programmering",
    students: [],
    teacher: null, // använda null för att lägga ett värde senare
    addStudent : function (student){
        this.students.push(student);
    },
    addTeacher: function(teacher) {
        this.teacher = teacher;  // Lägg till läraren i ämnet
        teacher.addSubjects(this);  // Lägg till ämnet till lärarens ämneslista
    },
    removeteacher : function(teacher){
        if(this.teacher){
            let teacherIndex = this.teacher.subjects.indexOf(this);
            if(teacherIndex > -1){
                this.teacher.subjects.splice(teacherIndex, 1);
            }
            this.teacher = null;

        }
            
    
    },
    removeStudent: function (student) {
        let studentIndex = this.students.indexOf(student);
        if (studentIndex > -1) {
            this.students.splice(studentIndex, 1); // Ta bort studenten från ämnets lista
        }
    }
};

let history = {
    name: "History",
    students: [],
    teacher: null,
    addTeacher: function(teacher) {
        this.teacher = teacher;  // Lägg till läraren i ämnet
        teacher.addSubjects(this);  // Lägg till ämnet till lärarens ämneslista
    },
    addStudent : function (student){
        this.students.push(student);
    },
    removeteacher : function(teacher){
        if(this.teacher){
            let teacherIndex = this.teacher.subjects.indexOf(this);
            if(teacherIndex > -1){
                this.teacher.subjects.splice(teacherIndex, 1);
            }
            this.teacher = null;

        }
            
    },
    removeStudent: function (student) {
        let studentIndex = this.students.indexOf(student);
        if (studentIndex > -1) {
            this.students.splice(studentIndex, 1); // Ta bort studenten från ämnets lista
        }
    }
};



// Studentobjekt

let studentAlice = {
    name: "Alice",
    age: 20,
    gender: "Female",
    subjects: [],
    addSubject: function(subject){
        this.subjects.push(subject);

    },
    quitSubject: function (subject) {
        let subjectIndex = this.subjects.indexOf(subject);
        if (subjectIndex > -1) {
            this.subjects.splice(subjectIndex, 1); // Ta bort ämnet från studentens lista
            subject.removeStudent(this); // Ta bort studenten från ämnets lista
        }
    }
};

let studentBob = {
    name: "Bob",
    age: 22,
    gender: "Male",
    subjects: [],
    addSubject: function(subject){
        this.subjects.push(subject);
    },
    quitSubject: function (subject) {
        let subjectIndex = this.subjects.indexOf(subject);
        if (subjectIndex > -1) {
            this.subjects.splice(subjectIndex, 1); // Ta bort ämnet från studentens lista
            subject.removeStudent(this); // Ta bort studenten från ämnets lista
        }
    }
};

let studentCharlie = {
    name: "Charlie",
    age: 19,
    gender: "Male",
    subjects: [],
    addSubject: function(subject){
        this.subjects.push(subject);
        let studentSubject = this.subjects
    },
    quitSubject: function (subject) {
        let subjectIndex = this.subjects.indexOf(subject);
        if (subjectIndex > -1) {
            this.subjects.splice(subjectIndex, 1); // Ta bort ämnet från studentens lista
            subject.removeStudent(this); // Ta bort studenten från ämnets lista
        }
    }
};

let studentDiana = {
    name: "Diana",
    age: 21,
    gender: "Female",
    subjects: [],
    addSubject: function(subject){
        this.subjects.push(subject);
    },
    quitSubject: function (subject) {
        let subjectIndex = this.subjects.indexOf(subject);
        if (subjectIndex > -1) {
            this.subjects.splice(subjectIndex, 1); // Ta bort ämnet från studentens lista
            subject.removeStudent(this); // Ta bort studenten från ämnets lista
        }
    }
};

let studentEdward = {
    name: "Edward",
    age: 23,
    gender: "Male",
    subjects: [],
    addSubject: function(subject){
        this.subjects.push(subject);
    },
    quitSubject: function (subject) {
        let subjectIndex = this.subjects.indexOf(subject);
        if (subjectIndex > -1) {
            this.subjects.splice(subjectIndex, 1); // Ta bort ämnet från studentens lista
            subject.removeStudent(this); // Ta bort studenten från ämnets lista
        }
    }
};

studentAlice.addSubject(math);
studentBob.addSubject(programmering);
studentEdward.addSubject(history);


// Lärare objekt

let teacherAnna = {
    name: "Anna",
    subjects: [],
    addSubjects: function(subject){
        this.subjects.push(subject);
    }
};

let teacherBjorn = {
    name: "Bjorn",
    subjects: [],
    addSubjects: function(subject){
        this.subjects.push(subject);
    }
};


let teacherNiklas = {
    name: "Niklas",
    subjects: [],
    addSubjects: function(subject){
        this.subjects.push(subject);
    }
};


// add teachers
school.addTeacher(teacherAnna);
school.addTeacher(teacherBjorn);
school.addTeacher(teacherNiklas);

//add students
school.addStudent(studentAlice);
school.addStudent(studentBob);
school.addStudent(studentCharlie);
school.addStudent(studentDiana);
school.addStudent(studentEdward);

//add courses
school.addCourse(math);
school.addCourse(programmering);
school.addCourse(history);

//console.log(school);


//exampel på remove teacher 
// school.fireTechers(teacherAnna);
// console.log(school);





//  console.log(teacherNiklas);
//  console.log("Ämne med koppling till lärare:", math);

// //lägga till ett student i studentens lista
math.addStudent(studentAlice);
math.addStudent(studentCharlie);
history.addStudent(studentEdward);
programmering.addStudent(studentBob);
programmering.addStudent(studentDiana);

// console.log(programmering);
// console.log(school);


//add teachers
// math.addTeacher(teacherAnna);
// history.addTeacher(teacherBjorn);
// programmering.addTeacher(teacherNiklas);
// console.log(programmering);

//remove teacher
// math.removeteacher();
// console.log(math);



// exampel usage

// studentDiana.addSubject(math);
// math.addStudent(studentDiana);
// console.log(studentDiana);
// studentDiana.quitSubject(math);
// console.log(math);
// console.log(studentDiana);


//exampel usage 
// school.fireTechers(teacherAnna);



 function displayAllStudents() {
    console.log("List of all students in the school:");
    for (let index in school.students) {
        let student = school.students[index];
        console.log(`Name: ${student.name}, Age: ${student.age}, Gender: ${student.gender}`);
    }
}

// Anropa funktionen för att visa alla studenter
displayAllStudents();


// Funktion som visar alla ämnen för en specifik student
function displayAllSubjectsOfStudent(student) {
    let subjects = student.subjects.map(subject => subject.name);
    console.log(`Subjects for ${student.name}: ${subjects.join(", ")}`);
    return subjects;
}

// Funktion som visar alla studenter registrerade i ett visst ämne
function displayAllStudentsEnlistedToSubject(subject) {
    let students = subject.students.map(student => student.name);
    console.log(`Students enrolled in ${subject.name}: ${students.join(", ")}`);
    return students;
}

// Funktion som visar alla lärare på skolan
function displayAllTeachers() {
    let teacherNames = school.teachers.map(teacher => teacher.name);
    console.log("All teachers in the school: " + teacherNames.join(", "));
    return teacherNames;
}

//exampel usage
displayAllSubjectsOfStudent(studentAlice); // "Subjects for students
displayAllStudentsEnlistedToSubject(math);
displayAllTeachers();


let Grade = {
    subject: null,
    student: null,
    grade: null,
    
    setGrade: function(grade) {
        this.grade = grade;
    },
    
    getGrade: function() {
        return {
            subject: this.subject.name,
            student: this.student.name,
            grade: this.grade,
        };
    },
    
    displayGrade: function() {
        console.log(`Grade for ${this.student.name} in ${this.subject.name}: ${this.grade}`);
    }
};
