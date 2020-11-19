export let name:string='vinay';
function demoString(){
    console.log("name : "+name);
    console.log("name.length : "+name.length);
    console.log("name.toUpperCase() : "+name.toUpperCase());
    console.log("name.substring(2,3)) : "+name.substring(2,3));//substring(from,to);
    console.log("name.substr(2,3)) : "+name.substr(2,3)); //substr(startindex,no of chars from that index)
}

demoString();