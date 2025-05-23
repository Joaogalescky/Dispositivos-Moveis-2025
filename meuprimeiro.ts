// let list : [name : string, age: number, email : string] = ['Breno', 20, 'breno@ifpr.edu.br'];
// console.log(list);
// console.log(list[0]);
// console.log(list[1]);
// console.log(list[2]);

//---------------------------------------------

// export enum DayOfWeek {
//     Sunday = 1,
//     Monday = 2,
//     Tuesday = 3,
//     Wednesday = 4,
//     Thursday = 5,
//     Friday = 6,
//     Saturday = 7,
// }

// let day : DayOfWeek = DayOfWeek.Wednesday;

// console.log(day);
// console.log(DayOfWeek[day]);

// console.log('\n' + DayOfWeek.Sunday);
// console.log(DayOfWeek[DayOfWeek.Sunday])

//-----------------------------------------------

// let exampleV : (string | number);
// exampleV = 123;
// console.log(exampleV);
// exampleV = 'ABC'
// console.log(exampleV)

//-----------------------------------------------

// var arr : (number[] | string[]);
// var i : number;
// arr = [1, 2, 3];

// for ( i =0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr = ["A", "B", "C", "D"];

// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

function deleteTest(user : string | string[]){
    if (typeof user == "string") {
        console.log(user, "deletado")
    } else {
        var i;
        for (i = 0; i < user.length; i++) {
            console.log(user[i], "deletado")
        }
    }
}