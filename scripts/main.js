//TODO: First grab where am I in the store
let top_left_result;
let single_top_left;
let top_left_accumulate_counter;
let top_right_element;
let show_top_right;
let blink_counter;
let should_accumulate_left;
let fuck_array;
let yes_counter;
let no_counter;
let position;

function blink() {
    let top_left_element  = document.getElementById("left_words").innerHTML;
    if (top_left_element === ""){
        document.getElementById("left_words").innerHTML = top_left_result;
    }
    else{
        document.getElementById("left_words").innerHTML = "";
    }
    if (show_top_right)  {
        document.getElementById("left_words").innerHTML = top_left_result;
        let current_top_right_element = document.getElementById("topright").getElementsByClassName("words")[0].innerHTML;
        if (current_top_right_element === ""){
            document.getElementById("topright").getElementsByClassName("words")[0].innerHTML = top_right_element;
        }
        else{
            document.getElementById("topright").getElementsByClassName("words")[0].innerHTML = "";
        }
        blink_counter += 1;
    }
    if (blink_counter > 3){
        let index = blink_counter - 4;
        document.getElementById("topright").getElementsByClassName("words")[0].innerHTML = top_right_element;
        if (index < fuck_array.length){
            document.getElementById("bottomwords").innerHTML += fuck_array[index] + "</br>";
        }
        else {
            // Let's just reset all the code
            if (index === fuck_array.length){
                document.getElementById("yes_div").getElementsByClassName("words")[0].innerHTML = "YES " + yes_counter;
                document.getElementById("no_div").getElementsByClassName("words")[0].innerHTML = "NO " + no_counter;
            }
            if (index > 10){
                blink_counter = 0;
                top_left_accumulate_counter = 0;
                top_left_result = "LOOK AT THE TREES " + position;
                single_top_left = "LOOK AT THE TREES " + position;
                top_right_element = "YES PLEASE, JUST LOOK AT THEM";
                show_top_right = false;
                should_accumulate_left = true;
                document.getElementById("left_words").innerHTML = top_left_result;
                fuck_array = ["DO", "THEY", "GIVE", "A", "FUCK", "?"];
                document.getElementById("bottomwords").innerHTML = "";
                document.getElementById("yes_div").getElementsByClassName("words")[0].innerHTML = "";
                document.getElementById("no_div").getElementsByClassName("words")[0].innerHTML = "";
            }
        }
    }
}

function accumulate_left(){
    if (should_accumulate_left){
        if (top_left_accumulate_counter === 6){
            should_accumulate_left = false;
            top_left_accumulate_counter = 0;
            if (!show_top_right){
                document.getElementById("topright").getElementsByClassName("words")[0].innerHTML = "YES PLEASE, JUST LOOK AT THEM";
                show_top_right = true;
            }
        }
        else{
            top_left_result = top_left_result + "</br>" + single_top_left;
            top_left_accumulate_counter += 1;
        }
    }
}


window.onload = function() {
    yes_counter = 0;
    no_counter = 0;
    blink_counter = 0;
    top_left_accumulate_counter = 0;
    position = prompt("Where are those trees", "ON YOUR RIGHT");
    top_left_result = "LOOK AT THE TREES " + position;
    single_top_left = "LOOK AT THE TREES " + position;
    top_right_element = "YES PLEASE, JUST LOOK AT THEM";
    show_top_right = false;
    should_accumulate_left = true;
    document.getElementById("left_words").innerHTML = single_top_left;
    fuck_array = ["DO", "THEY", "GIVE", "A", "FUCK", "?"];
    setInterval(blink, 400);
    setInterval(accumulate_left,  400);

    document.getElementById("yes_div").getElementsByClassName("words")[0].addEventListener('mouseover', function (event) {
        event.target.style.background = "white";
        document.getElementById("yes_div").style.background = "white";
    });
    document.getElementById("yes_div").getElementsByClassName("words")[0].addEventListener('mouseout', function (event) {
        event.target.style.background = "#aeaeb2";
        document.getElementById("yes_div").style.background = "#aeaeb2";
    });
    document.getElementById("yes_div").addEventListener('mouseover', function (event) {
        event.target.style.background = "white";
        document.getElementById("yes_div").getElementsByClassName("words")[0].style.background = "white";
    });
    document.getElementById("yes_div").addEventListener('mouseout', function (event) {
        event.target.style.background = "#aeaeb2";
        document.getElementById("yes_div").getElementsByClassName("words")[0].style.background = "#aeaeb2";
    });


    document.getElementById("no_div").getElementsByClassName("words")[0].addEventListener('mouseover', function (event) {
        event.target.style.background = "grey";
        document.getElementById("no_div").style.background = "grey";
    });
    document.getElementById("no_div").getElementsByClassName("words")[0].addEventListener('mouseout', function (event) {
        event.target.style.background = "gainsboro";
        document.getElementById("no_div").style.background = "gainsboro";
    });
    document.getElementById("no_div").addEventListener('mouseover', function (event) {
        event.target.style.background = "grey";
        document.getElementById("no_div").getElementsByClassName("words")[0].style.background = "grey";
    });
    document.getElementById("no_div").addEventListener('mouseout', function (event) {
        event.target.style.background = "gainsboro";
        document.getElementById("no_div").getElementsByClassName("words")[0].style.background = "gainsboro";
    });


    document.getElementById("yes_div").addEventListener("click", function(event){
        yes_counter += 1;
        document.getElementById("yes_div").getElementsByClassName("words")[0].innerHTML = "YES " + yes_counter;
    });
    document.getElementById("no_div").addEventListener("click", function(event){
        no_counter += 1;
        document.getElementById("no_div").getElementsByClassName("words")[0].innerHTML = "NO " + no_counter;
    });



















};
