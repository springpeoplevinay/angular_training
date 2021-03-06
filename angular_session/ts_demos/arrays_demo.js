function testArrays() {
    var arr;
    arr = [100, 22, 331, 22, 211, 88, 9090];
    console.log("arr : " + arr);
    var ar1 = ["hey", 123, "hello", 9999];
    console.log("ar1 : " + ar1);
    console.log("traversing using for in loop");
    for (var i in arr) {
        console.log(i + " ");
    }
    console.log("traversing using foreach method");
    arr.forEach(function (x) {
        console.log(x + " ");
    });
    var fruits = [];
    fruits.push("Apple");
    fruits.push("Banana");
    fruits.push("Mango");
    fruits.push("Watermelon");
    console.log("fruits with join " + fruits.join());
    console.log("fruits with join param " + fruits.join("->"));
    fruits.push("Kiwi");
    fruits.push("Jackfruit");
    fruits.push("Pineapple");
    fruits.push("Pomogranate");
    fruits.reverse();
    console.log("fruits after reverse " + fruits);
    fruits.sort();
    console.log("fruits after sorting " + fruits);
    console.log("popped element is " + fruits.pop());
    console.log("fruits after pop() " + fruits);
    var fruitsNew = fruits.map(function (x) { return x.toUpperCase(); });
    console.log("fruitsNew " + fruitsNew);
    console.log("fruits " + fruits);
    console.log("fruitsNew.slice(1,4) : " + fruitsNew.slice(1, 4));
    console.log("after slice " + fruitsNew);
    console.log("fruitsNew.splice(2,0,'Butterfruit') : " + fruitsNew.splice(2, 0, "Butterfruit"));
    console.log("after splice " + fruitsNew);
    console.log("fruitsNew.splice(2,1,'Orange') : " + fruitsNew.splice(2, 1, "Orange"));
    console.log("after splice " + fruitsNew);
    console.log("fruitsNew.splice(2,2) : " + fruitsNew.splice(2, 2));
    console.log("after splice " + fruitsNew);
    var allFruits = fruitsNew.concat(fruits);
    console.log("allFruits " + allFruits);
    console.log("fruits.filter(x=>x.length>=9) : " + fruits.filter(function (x) { return x.length >= 9; }));
    console.log("after filter " + fruits);
    var x;
    x = 100;
    x = "22";
    //x=false;
    x = null;
}
testArrays();
function testUnion(name) {
    if (typeof name == "string") {
        console.log("name " + name);
    }
    else {
        name.sort();
        console.log("names -> " + name.join("--"));
    }
}
testUnion("Vinay");
testUnion(["Sri", "Guru", "Kir", "Tee", "Mix", "Lock", "Albert", "Zack"]);
