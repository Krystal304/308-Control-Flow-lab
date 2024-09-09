
// const PI = 3.1415
let pi = 3.1415;

// const radius = 5 meters
let radius = 5;

// minimum space
let space = 0.8;

// const area = PI * radius * radious
let area = 3.1415 * 5 * 5;

// starting with 20 plants
let plant = 20;

//  starting area ( plants * 0.8)
let start = 20 * 0.8; 

// week 1 
let week1 = 20 * 2 * 0.8

// week 2
let week2 = 20 * 4 * 0.8

// week 3
let week3 = 20 * 8 * 0.8


// week 1
if (week1 > area * 0.8) {
    console.log ( 'pruned');

} else if (week1 > area * 0.50 && week1 < area * 0.80) {
    console.log (' monitored');

    } else {
        console.log ('planted');
    }

// week 2
    if (week2 > area * 0.8) {
        console.log ( 'pruned');
    
    } else if (week2 > area * 0.50 && week2 < area * 0.80) {
        console.log (' monitored');
    
        } else {
            console.log ('planted');
        }
        
// week 3
        if (week3 > area * 0.8) {
            console.log ( 'pruned');
        
        } else if (week3 > area * 0.50 && week3 < area * 0.80) {
            console.log (' monitored');
        
            } else {
                console.log ('planted');
            }
