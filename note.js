/*Note
50_5-1 When to use Array and when to use Object


To show data is data storage, object is suitable than array. */

const db = {};

const addToDb = item => {

    //if the property is already in the object, the items value will be increased. if the property is new, the property value will be 1.
    if(item in db){
        db[item] = db[item] + 1;
    }

    else{
        db[item] = 1;
    }
}


addToDb("hasan")
addToDb("Shoaib")
addToDb("hasan")
console.log(db);

//local storage
//use localStorage function to add, get, remove data.
//to store object or array, you have to stringify the data.
//to get the data data must be convert through JSON.parse(the localStorage("chaka-tracker"))
//===========================
/* 
#there will be key, value pair setting up the localStorage.
#key value must be permeative type. (string, number)

*/

//only workable in browser
localStorage.setItem("Chaka-tracker", JSON.stringify(db))

