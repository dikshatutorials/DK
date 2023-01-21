/* const bodyWidth = window.getComputedStyle(document.body, null).width;
const breakoutpoint = "760px"
if(parseInt(bodyWidth) < breakoutpoint) {
    document.getElement
 */
function openNav(){
    /* document.getElementsByClassName("menu").style.display = "block";
    document.getElementsByClassName("menu").style.width = "100%"; */
    document.getElementById("menu").style.display = 'block';
    document.getElementById("menu").style.width = '100%';
}
function closeNav(){
    /* document.getElementsByClassName("menu").style.display = "none"; */
    document.getElementById("menu").style.width = '0%';
    document.getElementById("menu").style.display = 'none';
}