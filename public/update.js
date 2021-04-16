async function  update(){
    let input=document.getElementById("input").value;
    let splitInput=input.split(" ");
    let base=splitInput[0].toLowerCase();
    let query={option:"",value:""};
    let ok=false;
    switch(base){
        case "crypto":
            query.option="coin";
            query.value=splitInput[1];
            ok=true;
    }
    if(ok==true)
        {
        let  res= await fetch("./"+base+"?"+query.option+"="+query.value).then(res=>res.json());
        switch(base){
            case "crypto":
                res.value=res.value.toFixed(5);
                res="<span style=\"color:#00e599\">"+res.coin+"</span>"+":"+res.value;
        }
        console.log(res);
        output.innerHTML=res;
        }        
    return false;
}