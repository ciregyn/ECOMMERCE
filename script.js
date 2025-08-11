let produtos = [
  {
    id: 1,
    nome: "iPhone 15 Pro",
    categoria: "smartphones",
    preco: 7999,
    precoOriginal: 8999,
    desconto: 11,
    imagem:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
    descricao: "Smartphone Apple com câmera avançada",
  },
  {
    id: 2,
    nome: "MacBook Air M2",
    categoria: "laptops",
    preco: 8999,
    precoOriginal: 10999,
    desconto: 18,
    imagem:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    descricao: "Notebook Apple ultrafino e potente",
  },
  {
    id: 3,
    nome: "AirPods Pro",
    categoria: "headphones",
    preco: 1899,
    precoOriginal: 2299,
    desconto: 17,
    imagem:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
    descricao: "Fones sem fio com cancelamento de ruído",
  },
  {
    id: 4,
    nome: "Samsung Galaxy S24",
    categoria: "smartphones",
    preco: 5499,
    precoOriginal: 6299,
    desconto: 13,
    imagem:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
    descricao: "Smartphone Samsung com tela AMOLED",
  },
  {
    id: 5,
    nome: "Apple Watch Series 9",
    categoria: "smartwatch",
    preco: 3299,
    precoOriginal: 3799,
    desconto: 13,
    imagem:
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
    descricao: "Relógio inteligente com monitoramento",
  },
  {
    id: 6,
    nome: "Teclado Mecânico",
    categoria: "accessories",
    preco: 499,
    precoOriginal: 600,
    desconto: 17,
    imagem:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    descricao: "Teclado mecânico RGB para gamers",
  },
  {
    id: 7,
    nome: "Sony WH-1000XM5",
    categoria: "headphones",
    preco: 2499,
    precoOriginal: 2999,
    desconto: 17,
    imagem:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
    descricao: "Fone com cancelamento de ruído",
  },
  {
    id: 8,
    nome: "Dell XPS 13",
    categoria: "laptops",
    preco: 7999,
    precoOriginal: 10000,
    desconto: 20,
    imagem:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400",
    descricao: "Notebook Windows premium",
  },
];

let conteinerProdutos = document.querySelector(".products-container");
let input = document.querySelector(".search-input");
let todosBotoes = document.querySelectorAll(".category-btn");
let categoriaAtual = "all";

function mostrarProduto() {
  produtos.forEach((produto) => {
    let produtoDiv = document.createElement("div");
    produtoDiv.classList.add("product");

    produtoDiv.innerHTML = `
           <div class="product-card">
           <img src="${produto.imagem}" class="product-img" alt="${
      produto.nome
    }">
          
            
           <div class="product-info">
           
           <h3 class="product-name">${produto.nome}</h3>
            <p class="product-description">${produto.descricao}</p>
             ${
               produto.precoOriginal
                 ? `<p class="product-price">De R$ ${produto.precoOriginal.toFixed(
                     2
                   )}</p>`
                 : ""
             }
            <p class="price">R$ ${produto.preco.toFixed(2)}</p>
            ${
              produto.desconto
                ? `<p class="discount">-${produto.desconto}%</p>`
                : ""
            }
            <button class="add-to-cart">Adicionar ao Carrinho</button>
           
            </div>
           </div>
       
            
        `;

    conteinerProdutos.appendChild(produtoDiv);
  });
}

function pesquisar() {
  let termoPesquisa = input.value.toLowerCase();
  let produtosFiltrados = produtos.filter((produto) => {
    return (
      produto.nome.toLowerCase().includes(termoPesquisa) ||
      produto.descricao.toLowerCase().includes(termoPesquisa)
    );
  });

  conteinerProdutos.innerHTML = ""; // Limpa os produtos exibidos

  if (produtosFiltrados.length > 0) {
    produtosFiltrados.forEach((produto) => {
      let produtoDiv = document.createElement("div");
      produtoDiv.classList.add("product");

      produtoDiv.innerHTML = `
                <div class="product-card">
                    <img src="${produto.imagem}" class="product-img" alt="${
        produto.nome
      }">
                    <div class="product-info">
                        <h3 class="product-name">${produto.nome}</h3>
                        <p class="product-description">${produto.descricao}</p>
                        ${
                          produto.precoOriginal
                            ? `<p class="product-price">De R$ ${produto.precoOriginal.toFixed(
                                2
                              )}</p>`
                            : ""
                        }
                        <p class="price">R$ ${produto.preco.toFixed(2)}</p>
                        ${
                          produto.desconto
                            ? `<p class="discount">-${produto.desconto}%</p>`
                            : ""
                        }
                        <button class="add-to-cart">Adicionar ao Carrinho</button>
                    </div>
                </div>
            `;

      conteinerProdutos.appendChild(produtoDiv);
    });
  } else {
    conteinerProdutos.innerHTML = "<p>Nenhum produto encontrado.</p>";
  }
}

function trocarCategoria(categoria) {
  categoriaAtual = categoria;
  conteinerProdutos.innerHTML = "";

  let produtosFiltrados =
    categoria === "all"
      ? produtos
      : produtos.filter((produto) => produto.categoria === categoria);

  if (produtosFiltrados.length > 0) {
    produtosFiltrados.forEach((produto) => {
      let produtoDiv = document.createElement("div");
      produtoDiv.classList.add("product");

      produtoDiv.innerHTML = `
                <div class="product-card">
                    <img src="${produto.imagem}" class="product-img" alt="${
        produto.nome
      }">
                    <div class="product-info">
                        <h3 class="product-name">${produto.nome}</h3>
                        <p class="product-description">${produto.descricao}</p>
                        ${
                          produto.precoOriginal
                            ? `<p class="product-price">De R$ ${produto.precoOriginal.toFixed(
                                2
                              )}</p>`
                            : ""
                        }
                        <p class="price">R$ ${produto.preco.toFixed(2)}</p>
                        ${
                          produto.desconto
                            ? `<p class="discount">-${produto.desconto}%</p>`
                            : ""
                        }
                        <button class="add-to-cart">Adicionar ao Carrinho</button>
                    </div>
                </div>
            `;

      conteinerProdutos.appendChild(produtoDiv);
    });
  } else {
    conteinerProdutos.innerHTML =
      "<p>Nenhum produto encontrado nesta categoria.</p>";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  mostrarProduto();
  input.addEventListener("input", pesquisar);

  todosBotoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      let categoria = botao.getAttribute("data-category");
      trocarCategoria(categoria);

      botao.classList.add("active");
      todosBotoes.forEach((b) => {
        if (b !== botao) {
          b.classList.remove("active");
        }
      });
    });
  });
});




// Pegando o container do Swiper
const sliderContainer = document.getElementById("product-slider");

// Inserindo os slides dinamicamente
produtos.forEach(produto => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");

  const img = document.createElement("img");
  img.src = produto.imagem;
  img.alt = produto.nome;

  slide.appendChild(img);
  sliderContainer.appendChild(slide);
});

// Inicializando o Swiper
new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  effect: "slide",
  speed: 800
});

// Botão voltar ao Topo
const btnTopo = document.getElementById("btn-topo");
window.addEventListener("scroll", () => {
  btnTopo.style.display = window.scrollY > 100 ? "block" : "none";
});
btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Input de busca ao clicak enter ou na Lupa
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.fa-magnifying-glass');

function buscarProduto() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const products = document.querySelectorAll('.product');

    let found = false;

    products.forEach(product => {
        const productName = product.textContent.toLowerCase();

        if (productName.includes(searchTerm) && !found) {
            product.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            found = true;
        }
    });

    if (!found) {
        alert('Produto não encontrado.');
    }
}

// Enter no input
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        buscarProduto();
    }
});

// Clique na lupa
searchIcon.addEventListener('click', buscarProduto);

