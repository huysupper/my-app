/*
viết 1 hàm đặt tên là bai1() thực hiện chức năng sau
  nhập vào 1 số bất kỳ từ bàn phím
  tính tổng các số chia hết cho 2 tính từ 0 tới số nhập vào và hiển thị ra   kết quả
 
viết 1 hàm đặt tên là bai2() thực hiện chức năng sau
  nhập vào 1 số bất kỳ từ bàn phím
  đếm xem có bao nhiêu số chia hết cho 2 tính từ 0 tới số nhập vào và hiển   thị ra  kết quả
*/

const button=document.querySelector('button');
const bai1=()=>{
    const input=document.getElementById('input').value;
    const all=document.querySelector('#all');
    let s=0;
    for(let i=0;i<=input;i++){
        if(i % 2 == 0){
            s+=i
        }

    }
    all.innerHTML=`tổng các số chia hết cho 2 là ${s}`
}
button.onclick=function(){
    bai1()
}
//bài2
// const button=document.querySelector('button');
// const bai2=()=>{
//     const input=document.getElementById('input').value;
//     const all=document.querySelector('#all');
//     let s=0;
//     for(let i=0;i<=input;i++){
//         if(i % 2 == 0){
//             s++
//         }

//     }
//     all.innerHTML=`co ${s} số chia hết cho 2`
// }
// button.onclick=function(){
//     bai2()
// }
