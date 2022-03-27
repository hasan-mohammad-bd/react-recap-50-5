/*Note

To show data is data storage, object is suitable than array. */

//when the db will get the value from local storage, the value changed, thats why let is declared instead of const.
let db = {};

const addToDb = item => {

    const storedTracker = localStorage.getItem("checka-tracker");
    if(storedTracker){
        db = JSON.parse(storedTracker)
    }
    //if the property is already in the object, the items value will be increased. if the property is new, the property value will be 1.
    if(item in db){
        db[item] = db[item] + 1;
    }

    else{
        db[item] = 1;
    }

    localStorage.setItem("checka-tracker", JSON.stringify(db));
}

//removeItem form dataStorage.
const removeItem = item => {
    const storedTracker = localStorage.getItem("checka-tracker");
    if(storedTracker){
        const storedObject = JSON.parse(storedTracker);
        //to remove specific data
        delete storedObject[item];
        //set the data again.
        localStorage.setItem("checka-tracker",JSON.stringify(storedObject))
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
//# to setting up data, 
localStorage.setItem("Chaka-tracker", JSON.stringify(db))
//# to get the data.
JSON.parse(localStorage.getItem("Chaka-tracker"))

//