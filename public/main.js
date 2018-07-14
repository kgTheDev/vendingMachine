var plus = document.getElementsByClassName("fa-plus");
var cocktail = document.getElementsByClassName("fa-cocktail");
var martini = document.getElementsByClassName("fa-glass-martini");
var coffee = document.getElementsByClassName("fa-coffee");
var beer = document.getElementsByClassName("fa-beer");
var tint = document.getElementsByClassName("fa-tint");

var selection = null

var items = document.getElementsByClassName("item");
var submit = document.getElementById("submit");

Array.from(items).forEach(function(element) {
      element.addEventListener('click', function(){
        selection = this.value
      })
})

if(submit) {
  submit.addEventListener('click', function(){
    console.log(selection)
    fetch('buyDrink', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'drink': selection
      })
    })

  })
}


Array.from(plus).forEach(function(element) {
      element.addEventListener('click', function(){
        const drink = this.parentNode.parentNode.childNodes[1].innerText
        const plus = parseFloat(this.parentNode.parentNode.childNodes[3].innerText)
        fetch('inventory', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'drink': drink,
            'plus':plus
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(cocktail).forEach(function(element) {
      element.addEventListener('click', function(){
        const drink = this.parentNode.parentNode.childNodes[1].innerText
        const cocktail = parseFloat(this.parentNode.parentNode.childNodes[3].innerText)
        fetch('inventoryCocktail', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'drink': drink,
            'cocktail':cocktail
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         fetch('inventory', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });
