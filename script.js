

// Part 1 growing pains
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
let week1 = 20 * 2 * 0.8;

// week 2
let week2 = 20 * 4 * 0.8;

// week 3
let week3 = 20 * 8 * 0.8;


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

// Part 2 Thinking bigger
// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists 
// were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?

let garden = 100;

// week10 = plants * space * 2 ** 10

let week10 = 100 * 0.8 * 2 ** 10;

let exp = week10 / area;
console.log (exp)

// Part 3 errors in judgement

try {
    if (week1 > area) {
        console.log (' Stop ');
    } else {
        throw "Error - I don't know what I'm doing.";
    }
}catch (err) {
    console.log (err);


}finally {
	console.log(week1);
}
