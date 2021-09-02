var mouseEvent="empty";
var canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var radius
var color
var width_of_the_line
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    radius=document.getElementById("rad").value;
    color=document.getElementById("col").value;
    width_of_the_line=document.getElementById("wotl").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_the_line;
        ctx.arc(current_position_of_mouse_x , current_position_of_mouse_y , radius , 0 , 2 * Math.PI);
        ctx.stroke();
    }
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}