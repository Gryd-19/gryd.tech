async function  update(){
    //initialization
    let input=document.getElementById("input").value.split(" ");
    let base=input[0].toLowerCase();
    let query={option:"",value:""};
    let queryLength=0;
    let valid=false;
    //cheking base
    switch(base){
        case "!c": case "crypto":
            base="crypto";
            query.option="coin";
            query.value=input[1];
            valid=true;
            queryLength=1;
            break;
        case "ip":
            base="ip";
            query.option="mode";
            query.value=input[1]||"";
            valid=true;
            queryLength=1;
            break;
    }
    if(valid==true)
    {
        let config="./"+base+"?";
        for(i=1;i<=queryLength;i++)
            config=config+query.option+"="+query.value+"&"; // adding querys
        let  data= await fetch(config).then(res=>res.json()); //data fetch
        let res=""; //output string
        if(data.value!="error"&&data.value!=null){
            switch(base){
                case "crypto":
                    data.value=data.value.toFixed(5);
                    data.coin=data.coin.toUpperCase();
                    res="<span style=\"color:#00e599\">"+data.coin+"</span>"+":"+data.value;
                    break;
                case "ip":
                    if(query.value=='a'){    //all mode
                        res="<span style=\"color:#7EF9FF\">IP</span>:"+data.ip+"\n";
                        if(data.hostname)res+="<br><span style=\"color:#7EF9FF\">Hostname</span>:"+data.hostname;
                        if(data.org)res+="<br><span style=\"color:#7EF9FF\">ISP</span>:"+data.org;
                        if(data.city)res+="<br><span style=\"color:#7EF9FF\">City</span>:"+data.city;
                        if(data.region)res+="<br><span style=\"color:#7EF9FF\">Region</span>:"+data.region;
                        if(data.country)res+="<br><span style=\"color:#7EF9FF\">Country</span>:"+data.country;
                        if(data.loc)res+="<br><span style=\"color:#7EF9FF\">Location</span>:"+data.loc;
                        if(data.postal)res+="<br><span style=\"color:#7EF9FF\">Postal Code</span>:"+data.postal;
                        if(data.timezone)res+="<br><span style=\"color:#7EF9FF\">Timezone</span>:"+data.timezone;
                    }
                    else if(query.value=="h")
                    {
                        res="<span style=\"color:#7EF9FF\">IP</span>:"+data.ip+"\n";
                        if(data.hostname)res+="<br><span style=\"color:#7EF9FF\">Hostname</span>:"+data.hostname;
                        if(data.org)res+="<br><span style=\"color:#7EF9FF\">ISP</span>:"+data.org;
                    }
                    else if(query.value=="l")
                    {
                        res="<span style=\"color:#7EF9FF\">IP</span>:"+data.ip+"\n"; 
                        if(data.city)res+="<br><span style=\"color:#7EF9FF\">City</span>:"+data.city;
                        if(data.region)res+="<br><span style=\"color:#7EF9FF\">Region</span>:"+data.region;
                        if(data.country)res+="<br><span style=\"color:#7EF9FF\">Country</span>:"+data.country;
                        if(data.loc)res+="<br><span style=\"color:#7EF9FF\">Location</span>:"+data.loc;
                        if(data.postal)res+="<br><span style=\"color:#7EF9FF\">Postal Code</span>:"+data.postal;
                    }
                    else
                        res="<span style=\"color:#7EF9FF\">IP</span>:"+data.ip+"\n";
                    break;
            }
            console.log(res);
            output.innerHTML=res;
        }
        else 
            output.innerHTML="<span style=\"color:red\">ERROR</span>";  //invalid command(error while fetching data)
    }
    else
        output.innerHTML="<span style=\"color:red\">INVALID COMMAND</span>";     //invalid base  
    return false;
}