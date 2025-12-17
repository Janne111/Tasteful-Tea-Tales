const brobase = document.getElementById('brobase')
const brotired = document.getElementById('brotired')
const brohappy = document.getElementById('brohappy')
const broconfused = document.getElementById('broconfused')
const broshocked = document.getElementById('broshocked')

// opening and closing the shelf //
const shelf = document.getElementById('butt')
const dooropen = document.getElementById('shelfopen')
const doorclosed = document.getElementById('shelfclosed')

shelf.addEventListener("click", function (a) {
  console.log('hi'); 
  dooropen.classList.toggle('hidden')
  doorclosed.classList.toggle('hidden')
  document.getElementById('text').innerHTML = 'See anything you like?';
  brobase.classList.toggle('hidden')
  brohappy.classList.toggle('hidden')

  setTimeout(() => {
  brobase.classList.toggle('hidden')
  brohappy.classList.toggle('hidden')
  }, 1000);
});

// changing the background //
const clock = document.getElementById('clock')
const backgroundday = document.getElementById('bgday')
const backgroundnight = document.getElementById('bg')

clock.addEventListener("click", function (b) {
  console.log('gr');
  console.log(backgroundday); 
  console.log(backgroundnight); 
  backgroundday.classList.toggle('hidden')
  backgroundnight.classList.toggle('hidden')
  document.getElementById('text').innerHTML = 'Gosh...  Look at the time!'
  brobase.classList.toggle('hidden')
  brotired.classList.toggle('hidden')
  
  setTimeout(() => {
  brobase.classList.toggle('hidden')
  brotired.classList.toggle('hidden')
  }, 3000);
});

// cat animation //
const cat = document.getElementById('butt3')
const cattail1 = document.querySelectorAll('.imagestack.cat img')[0];
const cattail2 = document.querySelectorAll('.imagestack.cat img')[1];
const eyesclosed = document.querySelectorAll('.imagestack.cat img')[3];
const eyesopen = document.querySelectorAll('.imagestack.cat img')[4];

cat.addEventListener("click", function (c) {
  console.log('meow'); 
  cattail1.classList.toggle('hidden')
  cattail2.classList.toggle('hidden')
  brobase.classList.toggle('hidden')
  brohappy.classList.toggle('hidden')

  setTimeout(() => {
  brobase.classList.toggle('hidden')
  brohappy.classList.toggle('hidden')
  }, 1000);
  });
cat.addEventListener("mouseenter", function (d) {
  console.log('purr'); 
  eyesopen.classList.toggle('hidden')
  eyesclosed.classList.toggle('hidden')
  document.getElementById('text').innerHTML = 'You want to pet the cat?';
  });
  cat.addEventListener("mouseleave", function (e) {
  eyesopen.classList.toggle('hidden')
  eyesclosed.classList.toggle('hidden')
  document.getElementById('text').innerHTML = 'Her name is Linda.';
  });

  // Sam //
const sam = document.getElementById('butt4')
const snes = document.getElementById('snes')

sam.addEventListener("click", function (f) {
  console.log('got him'); 
  snes.classList.toggle('moved')
  document.getElementById('text').innerHTML = '!!';
  brobase.classList.toggle('hidden')
  broshocked.classList.toggle('hidden')
  
  setTimeout(() => {
    snes.classList.toggle('moved')
  }, 1000);

  setTimeout(() => {
  brobase.classList.toggle('hidden')
  broshocked.classList.toggle('hidden')
  }, 2000);
});
sam.addEventListener("mouseover", function (g) {
  document.getElementById('text').innerHTML = '...';
});

  // steam video //
const pot = document.getElementById('butt5')
const steam = document.getElementById('steam')

pot.addEventListener("mouseenter", function (h) {
  console.log('swishhhhh'); 
  steam.classList.toggle('hidden')
  document.getElementById('text').innerHTML = 'Oh, is the tea ready yet?';
  });
pot.addEventListener("mouseleave", function (i) {
  console.log('...'); 
  steam.classList.toggle('hidden')
  document.getElementById('text').innerHTML = 'One cup coming right up.';
});

// pictures //
const fog = document.getElementById('butt6')
const wave = document.getElementById('butt7')  
const monalisa = document.getElementById('butt8')
const random = document.getElementById('butt9')

const picfog = document.getElementById('fog');
const picwave = document.getElementById('wave');
const picmona = document.getElementById('mona');
const picrandom = document.getElementById('rand');

fog.addEventListener("mouseenter", function (j) {
  picfog.classList.toggle('hidden');
});
fog.addEventListener("mouseleave", function (j) {
  picfog.classList.toggle('hidden');
});

wave.addEventListener("mouseenter", function (k) {
  picwave.classList.toggle('hidden');
});
wave.addEventListener("mouseleave", function (k) {
  picwave.classList.toggle('hidden');
});

monalisa.addEventListener("mouseenter", function (l) {
  picmona.classList.toggle('hidden');
});
monalisa.addEventListener("mouseleave", function (l) {
  picmona.classList.toggle('hidden');
});

random.addEventListener("mouseenter", function (m) {
  picrandom.classList.toggle('hidden');
});
random.addEventListener("mouseleave", function (m) {
  picrandom.classList.toggle('hidden');
});

// sound toggle //
const backgroundmusic = document.getElementById('bgmusic')
const soundbtn = document.getElementById('sound')
const on = document.getElementById('soundon')
const off = document.getElementById('soundoff')

soundbtn.addEventListener("click", function (n) {
  on.classList.toggle('hidden')
  off.classList.toggle('hidden')

  if (bgmusic.paused) {
    bgmusic.play().catch(()=>{});
    bgmusic.muted = false;
  } else {
    bgmusic.pause();
  }
  });