import React, {useState, useEffect} from 'react';

function App(){
  const [products, setProducts] = useState(false);

  useEffect( ()=>{
    getProduct()
  }, [])

  function getProduct(){
      fetch('http://localhost:3001/')
      .then(response => {
        return response.text()
      })
      .then(data => {
        setProducts(data)
      })
  }

  function createProduct()
  {
    let id = prompt('id do produto:') 
    let name = prompt('Nome do produto:')
     let price = prompt('Preço do produto:')

     fetch('http://localhost:3001/products/',{
       method: 'POST',
       headers: {
        'Content-Type': 'application/json',
       },

       body: JSON.stringify({id, name, price}),
     })
     .then(response => {
       return response.text()
     })
     .then(data => {
       getProduct()
     })
  }

  function deleteProduct(){
    let id = prompt('id do produto:')
    console.log(id)
    console.log(`http://localhost:3001/products/${id}`)
    fetch(`http://localhost:3001/products/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      //console.log(response.text())
      return response.text()
    })
    .then(data => {
      alert('deletado com sucesso: ' + data)
      getProduct()
    })
  }
  return(
    <div>
        {products ? products : 'Nao há produtos'}
        <br/>
        <button onClick={createProduct}>Adicionar Produto</button>
        <br/>
        <button onClick={deleteProduct}>Deletar Produto</button>
    </div>
  )
}

export default App;