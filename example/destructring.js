//destructuring với mảng
const users=["huy","tú","hoàng"];
const [a,b]=users;
console.log(a,b)

//destructuring với object
const product={
    id:1,
    name:"product 1",
    price:100,
    sub:{
        name:'main content'
    }
}

const {id,name,sub:{name:name2}}=product
console.log(id,name,name2)
