  let buttonBurguer = document.querySelector('.button-burguer')
  let minus = document.querySelector('.minus')
  let plus = document.querySelector('.plus')
  let quantidade = document.querySelector('.quantidade')
  let productQuantidade = 1
  let productValor = document.querySelector('.valor-product')
  let cartIcon = document.querySelector('.cart-icon')
  let quantidadeCarts = document.querySelector('.length-cart')
  let addCarrinho = document.querySelector('.carrinho')
  let productImg = document.querySelectorAll('.products-imgs img')
  let contCarrinho = 0

  // Pega o valor total do produto e passa para outra função
  plus.onclick = () => aumentarProduto()
  .then(produtoAumentado)

  minus.onclick = () => diminuirProduto()
  .then(produtoDiminuido)
 

  function diminuirProduto(){
    
    return new Promise((resolve, reject) =>{
      productQuantidade--

      if(productQuantidade == 0){
        productQuantidade = 1
      }

      quantidade.innerText = `${productQuantidade}`

    
      productValor.innerHTML = `<h2 class="valor-product">$${productQuantidade * 125}.00 <span>50%</span></h2>`

      resolve(productQuantidade*125)
    })

  }


  function aumentarProduto(){
  
    return new Promise((resolve, reject) =>{
      productQuantidade++

      quantidade.innerText = `${productQuantidade}`
    
      productValor.innerHTML = `<h2 class="valor-product">$${productQuantidade * 125}.00 <span>50%</span></h2>`

      resolve(productQuantidade*125)

    })
 }

 //Mostrar o carrinho
 cartIcon.onclick = () =>{
  let show = document.querySelector('.cart-compras')

  show.classList.toggle('noshow')
 }

  //Recebe o valor para adiconar ao carrinho
  function produtoAumentado(produtoPlus){
    
    addCarrinho.onclick = () =>{
      let lista = document.querySelector('.listCarts')
      let li = document.createElement('li')
      let tamanhoCarinho = document.querySelector('.length-cart')
      let buttonExclui = document.createElement('button')

      buttonExclui.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
      li.innerHTML = `<img src="images/image-product-1-thumbnail.jpg" alt="" class="product-purchase">
      <h4>
      <span> Fall limited Edition Sneakers</span><br>
      <strong> $125.00 x ${productQuantidade} = ${produtoPlus}</strong>
      </h4>
      `

      lista.appendChild(li)
      li.appendChild(buttonExclui)

      //conta quantos itens tem no carrinho
      contCarrinho++
      tamanhoCarinho.style.display = 'block'
      tamanhoCarinho.innerHTML = `${contCarrinho}`
      
    //Remove o item do carrinho
     buttonExclui.onclick = () =>{
        lista.removeChild(li)
        contCarrinho--
        tamanhoCarinho.innerHTML = `${contCarrinho}`
          
          if(contCarrinho == 0){
            tamanhoCarinho.style.display = 'none'
          }

      }
    }

  }

  //Recebe o valor para adiconar ao carrinho
 function produtoDiminuido(produtoMinus){
  
  addCarrinho.onclick = () =>{
    let lista = document.querySelector('.listCarts')
    let li = document.createElement('li')
    let tamanhoCarinho = document.querySelector('.length-cart')
    let buttonExclui = document.createElement('button')
  
  

    buttonExclui.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    li.innerHTML = `<img src="images/image-product-1-thumbnail.jpg" alt="" class="product-purchase">
    <h4>
    <span> Fall limited Edition Sneakers</span><br>
    <strong> $125.00 x ${productQuantidade} = ${produtoMinus}</strong>
    </h4>
    `

    lista.appendChild(li)
    li.appendChild(buttonExclui)

    //conta quantos itens tem no carrinho
    contCarrinho++
    tamanhoCarinho.style.display = 'block'
    tamanhoCarinho.innerHTML = `${contCarrinho}`

    //Remove o item do carrinho
    buttonExclui.onclick = () =>{
      lista.removeChild(li)
      contCarrinho--
      tamanhoCarinho.innerHTML = `${contCarrinho}`
      
  
      if(contCarrinho == 0){
        tamanhoCarinho.style.display = 'none'
      }

     }
  }

}

// Adicona ao carrinho o valor sem escolher a quantidade do produto
addCarrinho.onclick = () =>{
  let lista = document.querySelector('.listCarts')
  let li = document.createElement('li')
  let tamanhoCarinho = document.querySelector('.length-cart')
  let buttonExclui = document.createElement('button')
  
  

  buttonExclui.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
  li.innerHTML = `<img src="images/image-product-1-thumbnail.jpg" alt="" class="product-purchase">
  <h4>
  <span> Fall limited Edition Sneakers</span><br>
  <strong> $125.00 x ${productQuantidade} = ${125}</strong>
  </h4>
 `

  lista.appendChild(li)
  li.appendChild(buttonExclui)
 
  //conta quantos itens tem no carrinho
  contCarrinho++
  tamanhoCarinho.style.display = 'block'
  tamanhoCarinho.innerHTML = `${contCarrinho}`
 
  //Remove o item do carrinho
  buttonExclui.onclick = () =>{
    lista.removeChild(li)
    contCarrinho--
    tamanhoCarinho.innerHTML = `${contCarrinho}`
    

    if(contCarrinho == 0){
      tamanhoCarinho.style.display = 'none'
    }

   }

 }
   //funçao de mudar a imagem
  productImg.forEach(function(itemImg){
    let imgPrincipal = document.querySelector('.product-img')
        itemImg.onclick = () =>{
          imgPrincipal.setAttribute(`src`, itemImg.src)
        }
  })

 buttonBurguer.onclick = () =>{
 
 }