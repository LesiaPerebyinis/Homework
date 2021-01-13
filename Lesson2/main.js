let memory;
let price;
let Message;


while(memory >= 0 || undefined || isNaN(memory)) {
  memory = prompt('Обьем памяти желаемого телефона');
  if (+memory === 128) {
    price = 500;
    break;
  }; if (+memory === 256) {
          price = 1200;
          break;
  }; if (+memory === 512) {
          price = 1400;
          break;
  }; if (memory === null) {
    Message = 'До свидания!'
          break;
 }
}
  

document.write('<div class="container phones">');
if (Message) {
  document.write(`
  <h2 class="message message--error">${Message}</h2>
`); 
}
  
     else document.write(`
     <ul class="params">
       <li class="params__item"><b>Память:</b> ${memory}GB</li>
       <li class="params__item"><b>Цена:</b> ${price}$</li>
     </ul>
   `);
document.write('</div>');