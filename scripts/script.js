// Script.js
var arrLength;
var cartNum;
var wrapper;


window.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem('product0title') == null) {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      i = 0;
      arrLength = data.length;
      for (i = 0; i < data.length; i++) {
        s1 = 'product';
        s1 = s1.concat(i.toString());
        a = JSON.stringify(data[i].title);
        localStorage.setItem(s1.concat('title'), a);
        b = JSON.stringify(data[i].price);
        localStorage.setItem(s1.concat('price'), b);
        c = JSON.stringify(data[i].image);
        localStorage.setItem(s1.concat('image'), c);
        newProduct = new ProductItem(c, a, a, b, i);
        textContainer = document.getElementById('product-list');
        textContainer.appendChild(newProduct);
        
      }
      cartNum = 0;
      localStorage.setItem("cartNum", 0);
    });
  } else {
    i = 0;
    for (i = 0; i < 20; i++) {
      s1 = 'product';
      s1 = s1.concat(i.toString());
      a = localStorage.getItem(s1.concat('title'));
      b = localStorage.getItem(s1.concat('price'));
      c = localStorage.getItem(s1.concat('image'));
      newProduct = new ProductItem(c, a, a, b, i);
      textContainer = document.getElementById('product-list');
      textContainer.appendChild(newProduct);
      
    }
    document.getElementById("cart-count").textContent = localStorage.getItem("cartNum");
  }
});

function handleClick(button) {
  console.log(button.textContent);
  if(button.textContent == "Add to Cart") {
    document.getElementById("cart-count").textContent = parseInt(document.getElementById("cart-count").textContent) + 1;
    button.textContent = "Remove from Cart";
    s1 = button.id;
    localStorage.setItem(s1, "true");
    localStorage.setItem("cartNum", parseInt(document.getElementById("cart-count").textContent));
  } else {
    document.getElementById("cart-count").textContent = parseInt(document.getElementById("cart-count").textContent) - 1;
    button.textContent = "Add to Cart";
    s1 = button.id;
    localStorage.setItem(s1, "false");
    localStorage.setItem("cartNum", parseInt(document.getElementById("cart-count").textContent));
  }
}