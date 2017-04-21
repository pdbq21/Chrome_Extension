/**
 * Created by ruslan on 09.04.17.
 */
const icon = document.getElementById('icon');
const context = icon.getContext('2d');
context.beginPath();
context.moveTo(25, 25);
context.lineTo(105, 25);
context.lineTo(25, 105);
context.fill();
console.log(icon);