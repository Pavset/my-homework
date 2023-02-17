// createElement( tag = ‘input’, properties = [ [‘innerHTML’, ‘Lorem ipsum’], [‘type’, ‘text’], [‘placeholder’, ‘dolor sit amet’] ], styles = [ [‘fontSize’, ‘18px’], [‘color’, ‘red’] ], parentElem = document.querySelector('...'))


function makeElement(tag, styles, properties){

let body = document.querySelector('body');
let element = document.createElement(tag);

body.append(element);

for(let n1 of properties){

    console.log(n1);
    if (n1['0'] == 'innerHTML'){

    element.innerHTML = n1['1'];

    }
    if (n1['0'] == 'type'){

        element.setAttribute(n1['0'], n1['1'])
    
        }
    
    element.setAttribute(n1['0'], n1['1'])

}

for(let n2 of styles){

    console.log(n2);

    if(n2['0'] == 'fontSize'){
    
        element.style.fontSize = n2['1'];
    
    }

    if(n2['0'] == 'color'){

        element.style.color = n2['1'];
    
    }
}
}

makeElement(tag = 'input', styles = [ ['fontSize', '18px'], ['color', 'red'] ], properties = [ ['innerHTML', 'Lorem ipsum'], ['type', 'text'], ['placeholder', 'dolor sit amet']]);
makeElement(tag = 'a', styles = [ ['fontSize', '30px'], ['color', 'white'] ], properties = [ ['innerHTML', 'Lorem ipsum'], ['href', 'https://www.nasa.gov/']]);
