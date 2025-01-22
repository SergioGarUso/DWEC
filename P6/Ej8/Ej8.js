let er_num = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
let str = "juan.perez@example.com";
console.log(er_num.test(str));