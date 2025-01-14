async function fecthData(){
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await res.json();
    console.log(data);
}
fecthData()