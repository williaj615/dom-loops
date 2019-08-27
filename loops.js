//Challenge: loop through the rainbow and print out the colors to the page

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
}

const printRainbow = (colorArr) => {
    for (let i = 0; i < colorArr.length; i++) {
        const color = colorArr[i]
        printToDom(color, 'rainbow')
}
}

printRainbow(colors);


const instructors = [
    {first: "Zoe", last: "Ames"},
    {first: "Callan", last: "Morrison"},
    {first: "Greg", last: "Korte"},
    {first: "Michael", last: "Clarkeeeeeee"},
  ];

const printNames = (group) => {
    for (let i = 0; i < group.length; i++) {
        const person = group[i];
        const element = `<p>${person.first} ${person.last}</p>`;
        printToDom(element, 'people');
    }
}

printNames(instructors);