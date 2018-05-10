let studentsWhoClapped = ['Sam', 'Sam', 'Meena', 'Meena', 'Meena', 'Meena', 'Meena', 'Meena', 'Meena', 'Taryn', 'Taryn', 'Katrina', 'Vu', 'Monique', 'Monique', 'Sam']
// instances that each student has clapped

const revengeOfBadger = {
  list: [], // setup our array where we will push students who have clapped more than once.
  allStudents: {
    Sam: 0,
    Morgan: 0,
    James: 0,
    Taryn: 0,
    Katrina: 0,
    Vu: 0,
    Meena: 0,
    Monique: 0
  }, // our object to track how much everyone has clapped
  clapCount: function(students){
    const studentObject = Object.entries(revengeOfBadger)[1][1]
    // console.log(studentObject);
    for (let i = 0; i < students.length; i++) {
      for (const key in studentObject) {
        if (students[i] === key ) {
          // console.log(key);
          // console.log(studentObject[key]);
          studentObject[key] +=1
        } // Checking to see if the current studentsWhoClapped[i] is equal to the current key we are iterating over in allStudents and increment by one if yes.
      }
    } 
    this.clapCheck(studentObject)    
  },
  clapCheck: function(studentObject){
    for (const key in studentObject) {
      if (studentObject[key] >= 2) {
        this.list.push(key)
      } // iterating over all our keys in allStudents to check if their value is >= 2. push to list array if yes
    }
    this.randomStudent()
  },
  randomStudent: function(){
    let choosenStudent = Math.floor(Math.random() * this.list.length); // generates random number based on length of .list
    console.log(this.list[choosenStudent]); // passes random number through to .list to randomly choose student
  }
}

revengeOfBadger.clapCount(studentsWhoClapped)

