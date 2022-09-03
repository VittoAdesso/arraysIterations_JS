const items = [ 1,2,3,4,5,6,7,8,9]; 

function iterate(i){
    if(i>= items.length)
    return;
    console.log(items[i]);
    // iterate(i);
}

// return # for position 0 in  the array
iterate(0);