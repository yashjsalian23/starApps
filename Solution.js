//Yash_Salian

//function to calculate the path
function cal(airports){
    let len,distance,dist,zeroes;

    len = airports.length - 1; //len indicates the index of final value or airport
    distance = 0; // distance covered depending upon the array
    dist;
    zeroes = 0; // keeps a count of airports where there are zero unit of fuel

    let airports_covered = []; // array which stores the path
    airports_covered.push(airports[0]); // pushing the first airport 

    while(distance>=0){ // if somehow distance becomes negative that means we cannot travel hence break out of loop and return -1
        
        if(zeroes === airports[distance] && airports[distance]!=0){ // edge case condition: if the number of zeroes is equal to the fuel available that means we can't travel further
            return -1;
        }
        distance = distance + airports[distance]; // calculates distance depending upon the values
 
        // first condition
        if(distance>=len){ //if this condition is true that means we have reached the destination
            if(dist){ // this condition will be true if we move backwards incase of 0
                airports_covered.push(dist);
            }
            airports_covered.push(airports[len]); // pushing the final airport since we have reached the destination
            return airports_covered;
        }
        //second condition
       
        //third condition
        else if(airports[distance]===0){ 
            zeroes++; // increase the count of zeroes
            dist = distance; // this keeps track of the intermediate value which we could get. This intermediate value will eventually be non-zero (if the second condition is false)
            distance--; // go back to check if there is fuel
            continue; 
        }
        
        else if(distance<0){
            return -1;
        } 

        airports_covered.push(airports[distance]); 
        zeroes = 0; 

    }
}

let airports = [1, 6, 3, 4, 5, 0, 0, 0, 6];
console.log(cal(airports));