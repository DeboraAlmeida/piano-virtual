const pianoKeys = document.querySelectorAll('.piano-keys .key');
const mappedKeys = []

const volumeSlider = document.querySelector('#volume')
const keysCheck = document.querySelector('#keysCheck')

pianoKeys.forEach(key => {
  key.addEventListener('click', () => playTune(key.dataset.key));
  mappedKeys.push(key.dataset.key)
});

let audio = new Audio("src/tunes/a.wav")

const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`
  audio.play()

  const clickedKey = document.querySelector(`[data-key="${key}"]`)
  clickedKey.classList.add('active')
  setTimeout(() => clickedKey.classList.remove('active'), 150)
}

document.addEventListener('keydown', (e) => {
  if (mappedKeys.includes(e.key)) playTune(e.key)
})

const handleVolume = (e) => {
  audio.volume= e.target.value
}

volumeSlider.addEventListener('input', handleVolume)

const showKeys = () => {
  pianoKeys.forEach(key => key.classList.toggle('hide'))
}

keysCheck.addEventListener('input', showKeys)