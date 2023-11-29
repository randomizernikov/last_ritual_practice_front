// селект блоков

slct_main = document.querySelector(".main_content")
slct_img_prod = document.querySelector(".img")
fltr_crc = document.querySelector(".filter_circle")

// вывод всех товаров из бд
async function all_products() {

  const response = await fetch("http://127.0.0.1:8000/products", {
    method: "GET",
    mode: "cors", 
  });
   res = await response.json();
  for (i of res){
    create_div = slct_main.appendChild(document.createElement('div'))
    image = create_div.appendChild(document.createElement('img')).src = i.img
    create_div2 = create_div.appendChild(document.createElement('dasdiv'))
    names = create_div2.appendChild(document.createElement('h2')).innerHTML = i.product
    desc = create_div2.appendChild(document.createElement('p')).innerHTML = i.description
  }
}

// фильтрация
async function all_filtres() {

  const response = await fetch("http://127.0.0.1:8000/product_types", {
    method: "GET",
    mode: "cors", 
  });
   res = await response.json();

  // вывод названий типов
  for (i of res){
    create_a = fltr_crc.appendChild(document.createElement('p'))
    create_a.innerHTML = i.product_type
    typesel = document.querySelector
    let id = i.id

    // функция клика на название
    create_a.addEventListener('click', async function(){
      const response = await fetch(`http://127.0.0.1:8000/products/{id}?type=${id}`, {
        method: "GET",
      });
      res = await response.json();
      slct_main.innerHTML= ''
      
      // вывод отфильтрованного
      for (i of res){
        create_div = slct_main.appendChild(document.createElement('div'))
        image = create_div.appendChild(document.createElement('img')).src = i.img
        create_div2 = create_div.appendChild(document.createElement('dasdiv'))
        names = create_div2.appendChild(document.createElement('h2')).innerHTML = i.product
        desc = create_div2.appendChild(document.createElement('p')).innerHTML = i.description
      }
    });
  }
}


all_products()
all_filtres()