interface Ilogin{
    username:string,
    password:string
} 

// login function
const login=():void=>{
   
    let username:HTMLElement=document.getElementById("username")
let password:HTMLElement=document.getElementById("password")
console.log("type",typeof(password))

 var  user1=(username as any).value
 var pass=(password as any).value
 
    const login:Ilogin={
        username:user1,
        password:pass
         
    }
    localStorage.setItem("login",JSON.stringify(login))
//  console.log(login)
    
 
     
}
// auto fill funtion
var localData=localStorage.getItem("login")
var LoginInfo=JSON.parse(localData)
var username=LoginInfo.username
var password=LoginInfo.password
const autofill=()=>{ 
(<HTMLElement>document.getElementById("username") as any).value=username,
(<HTMLElement>document.getElementById("password")as any).value=password
}
interface Ilist{
    item:string,
    date:string|Date
}
var ListItems:Ilist[]=[]

const AddItems=():void=>{
    let value:HTMLElement=document.getElementById("item")
    let InputValue=(value as any).value
     if(InputValue=="")
     {
         document.getElementById("error").innerText="invalid input"
     }
     else if(InputValue.length<10)
     {
        document.getElementById("error").innerText="minmum charater 8"
     }
     else
     {
         ListItems.unshift({item:InputValue,date:new Date()})
         console.log("list",ListItems)
         showlist()
     }


}
//show the items
const showlist=():void=>{
    let ul=document.getElementById("display")
    let html="";
  
    ListItems.map((ele,i)=>html+=` 
<li ondblclick="handleDelete(${i})">   <pre class="tab">${i+1}    ${ele.item}      ${ele.date} <pre></li> `)
ul.innerHTML=html
}

// delete the items
 const handleDelete=(a):void=>{
    let list1=ListItems
    list1.splice(a,1) 
    list1.map(ele=>ListItems.concat(ele))
     showlist()
 }

