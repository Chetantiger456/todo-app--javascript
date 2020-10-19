// login funtion
function login(){
    login={}
    
  let    username=document.getElementById("username")
let password=document.getElementById("password")
login.username=username.value
login.password=password.value
localStorage.setItem ("username",JSON.stringify(login))

 console.log("user",login)

}

// autofill function 
 setdata=()=>{

let user=JSON.parse(localStorage.getItem("username"))
document.getElementById("username").value=user.username
document.getElementById("password").value=user.password

}
    
    
let list=[]
// add the item to the array
    add=()=>{
     
      let str=document.getElementById(1).value
      if( str=="")
      {
        document.getElementById("error").innerText="invalid input"
      }
      else if(str.length<10)
      {
        document.getElementById("error").innerText="minimum 8 charater"
      
      }
      else
      {
          list.unshift({task:document.getElementById(1).value,date:JSON.stringify(new Date().toDateString().slice(3,10))})
          document.getElementById(1).value=""
          showlist()
      }
    }
   
    // display the list of items 
    function showlist(){
      
      
        let ul=document.getElementById("task")
        let html="";
      
        list.map((ele,i)=>html+=` 
<li ondblclick="handledelete(${i})" style="border: grey solid 1px;width:220px">   <pre class="tab">${i+1}    ${ele.task}      ${ele.date.replace(/"/g,"")} <pre></li> `)
ul.innerHTML=html
        
    }

// delete particular item in arry
handledelete=(a)=>{
    let list1=list
    list1.splice(a,1) 
    list1.map(ele=>list.concat(ele))
     showlist()

  }
 

            

 





 
 


