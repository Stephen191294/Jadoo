function myFunction () {
  const topnav = document.querySelector('.topnav')
  topnav.classList.toggle('open')
}

/*new WOW().init()*/

const input = document.getElementById('input')
const sub = document.getElementById('subscribe')



sub.addEventListener('click', function () {
  const inputValue = input.value.trim()

  if (inputValue === '') {
    alert('Please add a valid email address')
  } else {
    alert('Thanks for subscribing!')
  }
})
