p1_name = localStorage.getItem("p1_name");
p2_name = localStorage.getItem("p2_name");

p1_score = 0;
p2_score = 0;

document.getElementById("p1_name").innerHTML = p1_name + " : ";
document.getElementById("p2_name").innerHTML = p2_name + " : ";

document.getElementById("p1_score").innerHTML = p1_score;
document.getElementById("p2_score").innerHTML = p2_score;

document.getElementById("p_question").innerHTML = "Question turn: " + p1_name;
document.getElementById("p_answer").innerHTML = "Answer turn:" + p2_name;