const memories = [
  {
    amount: 128,
    price: 500
  },
  {
    amount: 256,
    price: 1200
  },
  {
    amount: 512,
    price: 1400
  },
] 
let selectedMemory;
let inputMemory;
let output;



outer:while(true) {
  inputMemory = prompt('Обьем памяти желаемого телефона');
  if (inputMemory === null) {
     break;
  for (let i = 0; i <memories.length; i++) {
    const memory = memories[i];
    if (+inputMemory === memory.amount) {
      selectedMemory = memory;
      break outer;
    }
  }


if (selectedMemory) {
  output = `
  <div>
  Память: <b>$(selectedMemory.amount)Gb</b>
  Цена: <b>$(selectedMemory.price)$</b>
</div>
  `

} else {
  output = `
     <h2>До свидания!</h2>
 
  `  
}
document.write(output);
