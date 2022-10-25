function color(){
    const x = 0;
    const cars =[];
    const randomNumber =Math.floor(Math.random()*1677215);
    let code= "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = code;
    document.getElementById('color-code').innerText = code;
    
}
