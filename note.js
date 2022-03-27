/*Note
50_5-1 When to use Array and when to use Object


To show data is data storage, object is suitable than array. */

const db = {};

const addToDb = item => {
    db[item] = 1;
}


addToDb("hasan")
addToDb("Shoaib")

addToDb("hasan2")
console.log(db);
