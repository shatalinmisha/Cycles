// цикл for

for (let i = 0; i < 3; i++) {
    console.log('Hello for');
}

const contentEl = document.querySelector('.content');
for (let i = 1; i <= 3; i++) {
    const h2El = document.createElement('h2');
    h2El.textContent = `${i} Hello for in html`;
    contentEl.append(h2El);
}

const products = ['шкаф', 'стул', 'диван', 'кресло'];

for (let i = 0; i < products.length; i++) {
    const element = products[i];
    console.log(element);
}



for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}





for (let i = 0; i < products.length; i++) {
    const h3El = document.createElement('h3');
    h3El.textContent = `Товар номер ${i + 1}`;

    const nameProduct = document.createElement('p');
    nameProduct.textContent = products[i];

    contentEl.append(h3El);
    contentEl.append(nameProduct);

}

// цикл for in



 for (const key in products) {
    console.log(products [key]); // перечесление значений массива
    console.log(key); // колличество массива [key]- ключи string формата
    // console.log(typeof key); проверка типа string или number
    if (key == 1) {
        console.log(products [key]);
    }
 }

// цикл for of

    for (const element of products) {
        console.log(element);
    }

    for (const element of products) {
        const h3El = document.createElement('h3');
        h3El.textContent = element;
        contentEl.append(h3El);
    }