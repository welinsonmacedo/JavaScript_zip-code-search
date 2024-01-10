
async  function  buscar() {
  const cepElements = document.getElementsByClassName("cep");
  const result = document.getElementById("result")
  for (let i = 0; i < cepElements.length; i++) {
    let cepValue = cepElements[i].value;
    console.log(cepValue);

  

    const apiUrl = `https://viacep.com.br/ws/${cepValue}/json/`;

  
    fetch(apiUrl)
      .then((response) => {
       
        if (!response.ok) {
          throw new Error("Erro ao consumir a API");
        }
        
        return response.json();
      })
      .then((data) => {
        (logradouro = data.logradouro),
          (complemento = data.complemento),
          (bairro = data.bairro),
          (localidade = data.localidade),
          (uf = data.uf);
        const enderecoHTML = `
            <p>Logradouro: ${logradouro}</p>
            <p>Complemento: ${complemento}</p>
            <p>Bairro: ${bairro}</p>
            <p>Localidade: ${localidade}</p>
            <p>UF: ${uf}</p>
`;          
if(logradouro===undefined){
  alert("Cep não existe")
}
        result.innerHTML=enderecoHTML
        console.log(logradouro, complemento, bairro, localidade, uf);
        
      })
      .catch((error) => {
     
        console.error("Erro:", error);
      });
  }
}
