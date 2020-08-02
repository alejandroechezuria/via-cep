
const cep = document.querySelector('#cep')
   
const Newdata = (result)=>{
    for( const campo in result){
        if (document.querySelector("#"+campo)) {
            document.querySelector("#"+ campo).value =result[campo]
            document.querySelector("#"+ campo).value =result[campo]
            document.querySelector("#"+ campo).value =result[campo]
            document.querySelector("#"+ campo).value =result[campo]
            document.querySelector("#"+ campo).value =result[campo] 
        }
        
    } 
    
}



cep.addEventListener('blur',(e)=> {

    let search = cep.value.replace("-" , "")
   const options = {
            method: 'GET', ///metodo de aceso 
            mode:'cors',   /// modo quiere decir que voy a usar otro servidor
            cache:'default'
            
   }


    fetch(` https://viacep.com.br/ws/${search}/json/`, options)

    .then(response=>{response.json()
        .then (data => Newdata(data))
    })
    .catch(e => console.log('Deu erro:'+ e,message))



  
})