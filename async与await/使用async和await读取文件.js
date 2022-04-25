import thenFs from "then-fs";

async function getfile(){
    const r1= await thenFs.readFile('./files/1.txt','utf8')
    console.log(r1)
}
getfile()
