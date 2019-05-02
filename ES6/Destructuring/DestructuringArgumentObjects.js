var savedFile={
    extension :'.jpg',
    name:'repost',
    size:14040
}

//ES5
function fileSummary(file){
    return `The file ${file.name}.${file.extension} is of size ${file.size}`
}



//ES6
// function fileSummary({name,extension,size}){
//     return `The file ${name}.${extension} is of size ${size}`
// }

// console.log(fileSummary(savedFile));

//out put The file repost..jpg is of size 14040


//ES6(Enhancement)
function fileSummary({name,extension,size},{color}){
    return `${color} The file ${name}.${extension} is of size ${size}`
}


console.log(fileSummary(savedFile,{color:'red'}));

//red The file repost..jpg is of size 14040