//URL(Uniform Resource Locator)
//It is built-in modules
//It is used to locate resources on the webpage

const url=require('url')
let urlData = 'https://www.flipkart.com/tyy/4io/~cs-tpx2qs30ea/pr?sid=tyy,4io&collection-tab-name=Moto+g45+5G&pageCriteria=default&param=87979&otracker=CLP_BannerX3&fm=organic&ppt=None&ppn=None&ssid=zm4k257nwg0000001735996238458'

let fetchedData=url.parse(urlData,true)
console.log(fetchedData); 
// console.log(fetchedData.query);
// console.log(fetchedData.protocol);
// console.log(fetchedData.hostname);
// console.log(fetchedData.host);
// console.log(fetchedData.search);
// console.log(fetchedData.path);
// console.log(fetchedData.pathname);


// let url1=''
// let fetchedData=url1.parse(url1,true)
// console.log(fetchedData);
// console.log(fetchedData.query.username);
// console.log(fetchedData.protocol);
// console.log(fetchedData.hostname);
// console.log(fetchedData);
// console.log();
// console.log();