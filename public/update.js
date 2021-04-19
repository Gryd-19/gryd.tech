async function  update(){
    let input=document.getElementById("input").value;
    let splitInput=input.split(" ");
    let base=splitInput[0].toLowerCase();
    let query={option:"",value:""};
    let ok=false;
    switch(base){
        case "!c": case "crypto":
            base="crypto";
            query.option="coin";
            query.value=splitInput[1];
            ok=true;
            break;
        case "ip":
            base="ip";
            ok=true;
            break;
    }
    if(ok==true)
        {
            let  res= await fetch("./"+base+"?"+query.option+"="+query.value).then(res=>res.json());
        if(res.value!="error"&&res.value!=null){
            switch(base){
                case "crypto":
                    res.value=res.value.toFixed(5);
                    res.coin=res.coin.toUpperCase();
                    res="<span style=\"color:#00e599\">"+res.coin+"</span>"+":"+res.value;
                    break;
                case "ip":
                    res="ip";
                    break;
            }
            console.log(res);
            output.innerHTML=res;
        }
        else 
            output.innerHTML="<span style=\"color:red\">ERROR</span>";
        }        
    return false;
}