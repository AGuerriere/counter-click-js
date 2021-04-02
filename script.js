let counter = 0;

function decrease(){
    counter--;
    console.log(counter)
    document.getElementById("counter").innerHTML = String(counter);
    return counter;
};

function zero(){
    counter = 0;
    console.log(counter);
    document.getElementById("counter").innerHTML = String(counter);
    return counter;
};


function increase(){
    counter ++;
    console.log(counter)
    document.getElementById("counter").innerHTML = String(counter);
    return counter;
};
