function encript(){
 let word=document.getElementById("input").value
   let key=parseInt(document.getElementById("key").value)
   if(isNaN(key)){
    return(
        alert("Error, please enter a number for the key")
    )
   }
   if(String(key).split('').length>4)
    return alert("password should be only 4 digits")
   
    let sum=0;
    
    while(key!=0){
        
        sum+=key%10

        key=Math.floor(key/10)
    }
    
    
    let encript_word=""
    for(let i in word){
        
        if(word[i]===" "){
            encript_word+=word[i]
            continue
        }
        let en_char=word.charCodeAt(i)-sum
        
        encript_word+=String.fromCharCode(en_char);

    }
    document.getElementById("message").value=encript_word
}

function decript(){
    let word=document.getElementById("input").value
    let key=parseInt(document.getElementById("key").value)
    let sum=0
    if(isNaN(key)){
        return(
            alert("Error, please enter a number for the key")
        )
       }
       if(String(key).split('').length>4)
    return alert("password should be only 4 digits")
    while(key!=0){
        sum+=key%10
        key=Math.floor(key/10)
    }
    
    let decript_word=""
    for(let i in word){
        
        if(word[i]===" "){
            decript_word+=word[i]
            continue
        }
        let dec_char=word.charCodeAt(i)+sum
       
        decript_word+=String.fromCharCode(dec_char);

    }
    document.getElementById("message").value=decript_word
}

