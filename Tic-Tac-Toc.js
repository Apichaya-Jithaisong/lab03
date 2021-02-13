let array = ["","","","","","","","",""];
var stopp = 0;
var repeat = 0;

function onClick1(){
    if(stopp === 1)return false;
    A1.src = "https://cdn.discordapp.com/attachments/718002735475064874/809850157830635540/image0.jpg";
    A1.removeEventListener('click', onClick1);
    array[0] = 'x';
    winwin();
    botwalk(); 
}
function onClick2(){
    if(stopp === 1)return false;
    A2.src = "https://cdn.discordapp.com/attachments/718002735475064874/809850157830635540/image0.jpg";
    A2.removeEventListener('click', onClick2);
    array[1] = 'x';
    winwin();
    botwalk(); 
}
function onClick3(){
    if(stopp === 1)return false;
    A3.src = "https://cdn.discordapp.com/attachments/718002735475064874/809850157830635540/image0.jpg";
    A3.removeEventListener('click', onClick3);
    array[2] = 'x';
    winwin();
    botwalk();
}
function onClick4(){
    if(stopp === 1)return false;
    A4.src = "https://cdn.discordapp.com/attachments/718002735475064874/809850157830635540/image0.jpg";
    A4.removeEventListener('click', onClick4);
    array[3] = 'x';
    winwin();
    botwalk();
}
function onClick5(){
    if(stopp === 1)return false;
    A5.src = "https://cdn.discordapp.com/attachments/718002735475064874/809850157830635540/image0.jpg";
    A5.removeEventListener('click', onClick5);
    array[4] = 'x';
    winwin();
    botwalk();
}
function onClick6(){
    if(stopp === 1)return false;
    A6.src = "https://cdn.discordapp.com/attachments/718002735475064874/809850157830635540/image0.jpg";
    A6.removeEventListener('click', onClick6);
    array[5] = 'x';
    winwin();
    botwalk();
}
function onClick7(){
    if(stopp === 1)return false;
    A7.src = "https://cdn.discordapp.com/attachments/718002735475064874/809850157830635540/image0.jpg";
    A7.removeEventListener('click', onClick7);
    array[6] = 'x';
    winwin();
    botwalk();
}
function onClick8(){
    if(stopp === 1)return false;
    A8.src = "https://cdn.discordapp.com/attachments/718002735475064874/809850157830635540/image0.jpg";
    A8.removeEventListener('click', onClick8);
    array[7] = 'x';
    winwin();
    botwalk();
}
function onClick9(){
    if(stopp === 1)return false;
    A9.src = "https://cdn.discordapp.com/attachments/718002735475064874/809850157830635540/image0.jpg";
    A9.removeEventListener('click', onClick9);
    array[8] = 'x';
    winwin();
    botwalk();
}

const A1 = document.getElementById('1');
A1.addEventListener('click', onClick1);
const A2 = document.getElementById('2');
A2.addEventListener('click', onClick2);
const A3 = document.getElementById('3');
A3.addEventListener('click', onClick3);
const A4 = document.getElementById('4');
A4.addEventListener('click', onClick4);
const A5 = document.getElementById('5');
A5.addEventListener('click', onClick5);
const A6 = document.getElementById('6');
A6.addEventListener('click', onClick6);
const A7 = document.getElementById('7');
A7.addEventListener('click', onClick7);
const A8 = document.getElementById('8');
A8.addEventListener('click', onClick8);
const A9 = document.getElementById('9');
A9.addEventListener('click', onClick9);


function botwalk(){
    var walk = 0; 
    do{ 
        walk = Math.floor(Math.random()*9);
        
        if(repeat === 4)return;

    }while( array[walk] != "" )   
    repeat++;
    array[walk] = 'o';
    walk++;
    const Image = document.getElementById(walk);
    Image.src = "https://cdn.discordapp.com/attachments/718002735475064874/810106553625083975/image0.jpg";
    
    if(walk === 1){
        Image.removeEventListener('click', onClick1);
    }
    else if(walk === 2){
        Image.removeEventListener('click', onClick2);
    }
    else if(walk === 3){
        Image.removeEventListener('click', onClick3);
    }
    else if(walk === 4){
        Image.removeEventListener('click', onClick4);
    }
    else if(walk === 5){
        Image.removeEventListener('click', onClick5);
    }
    else if(walk === 6){
        Image.removeEventListener('click', onClick6);
    }
    else if(walk === 7){
        Image.removeEventListener('click', onClick7);
    }
    else if(walk === 8){
        Image.removeEventListener('click', onClick8);
    }
    else if(walk === 9){
        Image.removeEventListener('click', onClick9);
    }
    winwin();
}

/* x win */
function winwin(){ 

    if(array[0] === 'x' && array[1] === 'x' && array[2] === 'x'){
        document.getElementById('iwantwin').innerHTML = 'You Win !';
        stopp =1;
    }
    if(array[3] === 'x' && array[4] === 'x' && array[5] === 'x'){
        document.getElementById('iwantwin').innerHTML = 'You Win !';
        stopp =1;
    }
    if(array[6] === 'x' && array[7] === 'x' && array[8] === 'x'){
        document.getElementById('iwantwin').innerHTML = 'You Win !';
        stopp =1;
    }
    if(array[0] === 'x' && array[3] === 'x' && array[6] === 'x'){
        document.getElementById('iwantwin').innerHTML = 'You Win !';
        stopp =1;
    }
    if(array[1] === 'x' && array[4] === 'x' && array[7] === 'x'){
        document.getElementById('iwantwin').innerHTML = 'You Win !';
        stopp =1;
    }
    if(array[2] === 'x' && array[5] === 'x' && array[8] === 'x'){
        document.getElementById('iwantwin').innerHTML = 'You Win !';
        stopp =1;
    }
    if(array[0] === 'x' && array[4] === 'x' && array[8] === 'x'){
        document.getElementById('iwantwin').innerHTML = 'You Win !';
        stopp =1;
    }
    if(array[2] === 'x' && array[4] === 'x' && array[6] === 'x'){
        document.getElementById('iwantwin').innerHTML = 'You Win !';
        stopp =1;
    }
    /* o win */
    if(array[0] === 'o' && array[1] === 'o' && array[2] === 'o'){
        document.getElementById('iwantwin').innerHTML = 'Computer Win !';
        stopp =1;
    }
    if(array[3] === 'o' && array[4] === 'o' && array[5] === 'o'){
        document.getElementById('iwantwin').innerHTML = 'Computer Win !';
        stopp =1;
    }
    if(array[6] === 'o' && array[7] === 'o' && array[8] === 'o'){
        document.getElementById('iwantwin').innerHTML = 'Computer Win !';
        stopp =1;
    }
    if(array[0] === 'o' && array[3] === 'o' && array[6] === 'o'){
        document.getElementById('iwantwin').innerHTML = 'Computer Win !';
        stopp =1;
    }
    if(array[1] === 'o' && array[4] === 'o' && array[7] === 'o'){
        document.getElementById('iwantwin').innerHTML = 'Computer Win !';
        stopp =1;
    }
    if(array[2] === 'o' && array[5] === 'o' && array[8] === 'o'){
        document.getElementById('iwantwin').innerHTML = 'Computer Win !';
        stopp =1;
    }
    if(array[0] === 'o' && array[4] === 'o' && array[8] === 'o'){
        document.getElementById('iwantwin').innerHTML = 'Computer Win !';
        stopp =1;
    }
    if(array[2] === 'o' && array[4] === 'o' && array[6] === 'o'){
        document.getElementById('iwantwin').innerHTML = 'Computer Win !';
        stopp =1;
    }
}


