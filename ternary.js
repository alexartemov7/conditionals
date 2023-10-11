let firstName = null

console.log((firstName)? //checks if firstName is true 
firstName : //if true prints firstName
'Who are you?' //asks who are you if false
)
    
//using a template literal 
console.log(`Hello${
    (firstName) ? //If firstname is truthy 
    ', ' + firstName : //print Hello, firstName
    ', stranger.' //otherwise, print Hello, stranger
}`)

function showData(data){
    console.log((data) ? //If we have data
    data : //Console log the data
    'Loading ...' //Otherwise console log loading
    )
}

let ourData = undefined; //Our page loads
showData(ourData)

ourData = ['Apples', 'Oranges'] //Our page finishes loading the data
showData(ourData)

