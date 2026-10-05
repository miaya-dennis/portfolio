function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Fortune() {
  let fortunes = ["Ship it.", "Read the error.", "Commit early."]
  let index = randomNumber(0, fortunes.length - 1)
  return <p>{fortunes[index]}</p>
}

export default Fortune
