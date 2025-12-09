let trigger =1;
for(let i =0; i<5; i++){
    let row = "";
    for(let j=0; j<i+1; j++){
        row = row + trigger;
        if(trigger === 1){
            trigger = 0;
        }
        else {
            trigger =1;
        }
    }
    console.log(row);
}