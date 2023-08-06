let person = {
    name: 'beaver',
    age: 23
};

let selectedColors = ['red', 'blue'];

//name at line 9 below is a PARAMETER
function greet(name, lastname) {
    console.log('Hello ' + name + lastname);
}


//name at line 15 below is an ARGUMENT
greet('Mosh') 
//default value for js is undefined
// look at greet function below where we did not set an argument for lastname
console.log(selectedColors[1]);

function squarer(number){
    return number*number
}

//output is 4
console.log(squarer(2))
let x = squarer(2)
console.log(x)


const contacts = [
    {
        id: 1,
        fullName: 'Pedro Penduko',
        isSaved: 'Phone'
    },

    {
        id: 2,
        fullName: 'Pedro Penduko Sr',
        isSaved: 'Phone'
    },

    {
        id: 3,
        fullName: 'Nenang Penduko',
        isSaved: 'SD'
    }
]

console.log(contacts[1].fullName);
//output is pedro penduko SR.

for(let i = 0; i<=10; i++){
    console.log(i);
}

let i = 0;
while(i<=10) {
    console.log(i);
    i++;
}

for (let contact of contacts) {
    console.log(contact.fullName);
}

//Factory function for creating objects
function createCircle(radius) {
    return {
        radius, // SAME AS radius: radius
        
        //inside an object, a fxn called draw
        draw() {
            console.log('draw');
        }
    }; //remember semicolon here
}

// creates a circle object w radius of 1
const circle1 = createCircle(1);
console.log(circle1.draw()) //executes the draw fxn in the circle object

//Constructor Fxn
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
}

const circle = new Circle(1);
//constructor and factory essentially the same daw?
//pero ang constructor parang java syntax kasi eh
//maybe get used to constructor na lang din

//----NOTE-----
//camel kapag factory fxn, pascal notation naman kapag constructor


//console.log('${firstname} ${lastname}');
//pwede ganitong printing para di ka na plus ng plus tsaka add ng space string

const person1 = {
    firstName: 'Mosh',
    lastName: 'Programmer',
    
    get fullName() {
        return '${person.firstName} ${person.lastName}';
    },

    //pwede kaya ang pangalan ng parameter sa set is fullName din???
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0]; 
        this.lastName = parts[1];
    }
};

person1.fullName = 'Joshua Abellera';
console.log(person1);

//-------------------------Cloning an Object

//use Object.assign to clone properties of MULTIPLE OBJECTS in another object 
const anotherObj = Object.assign({}, Circle);

//can also add another property to the cloned object
const anotherObj2 = Object.assign({
    color: 'yellow'
}, Circle);

//spread operator yung three dots. parang copy yung properties ng object into the curly braces?
const anotherObj3 = { ...Circle};
//---------------------------------------------


//this keyword
//https://www.youtube.com/watch?v=gvicrj31JOM&list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax&index=16

//----------------------Literals
//object {}
//boolean true, false
//string '',""
//tempplate ``

//good for email kasi kaya nya new line and apostrophes and etc.
const literalMessage = 
`2 added to 3 is ${2+3}`;
console.log(literalMessage)