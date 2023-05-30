//destructuring với mảng
const users=["huy","tú","hoàng"];
const users2=["tuấn","phong","vũ"]
const all =[...users,...users2];
console.log(all);

const number=[1,2,3]
function show(...a){
    console.log(a)
}

show(...number)
