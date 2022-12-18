let rangeInput = document.querySelector('.slider'),
  cost = document.querySelector('.main__value')

rangeInput.oninput = function() {
  
  let value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${value}%, hsl(223, 50%, 87%) ${value}%, hsl(223, 50%, 87%) 100%)`

  cost.innerHTML = `$${Number(rangeInput.value).toFixed(2)}`

}