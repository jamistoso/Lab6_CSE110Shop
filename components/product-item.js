// product-item.js

class ProductItem extends HTMLElement {
  constructor(url, urlAlt, p1Text, p2Text, num) {
    super();

    const number = num.toString();

    let shadow = this.attachShadow({mode: 'open'});
    const wrapper = document.createElement('li');
    wrapper.setAttribute('class', "product");

    const picture = document.createElement('img');
    picture.src = new URL(url.substring(1,url.length-1)).href;
    picture.setAttribute('alt', urlAlt);
    picture.setAttribute('max-height', "100%");
    
    const p1 = document.createElement('p');
    p1.setAttribute('class', "title");
    p1.textContent = p1Text.substring(1,urlAlt.length-1);

    const p2 = document.createElement('p');
    p2.setAttribute('class', "price");
    const p2dollar = '$';
    p2.textContent = p2dollar.concat(p2Text);

    let butStr = 'button';
    butStr = butStr.concat(num.toString());
    const button = document.createElement('button');
    button.setAttribute('class', 'checkout');
    button.setAttribute("tagName", 'checkout');
    if(localStorage.getItem(butStr) == "false" || localStorage.getItem(butStr) == null) {
      button.textContent = "Add to Cart";
    } else {
      button.textContent = "Remove from Cart";
    }
    button.setAttribute('id', butStr);
    button.addEventListener("click", function() {
      {handleClick (button)}
    });

    // Apply external styles to the shadow dom
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'styles/styles.css');

    // Attach the created element to the shadow dom
    shadow.appendChild(linkElem);
    shadow.appendChild(wrapper);
    wrapper.appendChild(picture);
    wrapper.appendChild(p1);
    wrapper.appendChild(p2);
    wrapper.appendChild(button);
  }
}

customElements.define('product-item', ProductItem);