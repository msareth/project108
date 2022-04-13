function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true })
  classifier = ml5.soundClassifier(
    'https://teachablemachine.withgoogle.com/models/VQxXE9kul/model.json',
    modelReady,
  )
}

function modelReady() {
  classifier.classify(gotResults)
}

function gotResults(error, results) {
  if (error) {
    console.error(error)
  } else {
    console.log(results)
    random_number_r = Math.floor(Math.random() * 255) + 1
    random_number_g = Math.floor(Math.random() * 255) + 1
    random_number_b = Math.floor(Math.random() * 255) + 1

    document.getElementById('results_label').innerHTML =
      'I can hear - ' + results[0].label
    document.getElementById('results_confidence').innerHTML =
      'Accuracy - ' + (results[0].confience * 100).toFixed(2) + ' %'
    document.getElementById('results_label').style.color =
      'rgb(' +
      random_number_r +
      ',' +
      random_number_g +
      ',' +
      random_number_b +
      ')'
    document.getElementById('results_confidence').style.color =
      'rgb(' +
      random_number_r +
      ',' +
      random_number_g +
      ',' +
      random_number_b +
      ')'

    img = document.getElementById('animal1')
    img1 = document.getElementById('animal2')
    img2 = document.getElementById('animal3')
    img3 = document.getElementById('animal4')

    if (results[0].label == 'Cat') {
      img.src = 'animal-01.gif'
      img1.src = 'animal-2.png'
      img2.src = 'animal-3.png'
      img3.src = 'animal-4.png'
    } else if (results[0].label == 'Owl') {
      img.src = 'animal-1.png'
      img1.src = 'animal-02.gif'
      img2.src = 'animal-3.png'
      img3.src = 'animal-4.png'
    } else if (results[0].label == 'Dog') {
      img.src = 'animal-1.png'
      img1.src = 'animal-2.png'
      img2.src = 'animal-03.gif'
      img3.src = 'animal-4.png'
    } else {
      img.src = 'animal-1.png'
      img1.src = 'animal-2.png'
      img2.src = 'animal-3.png'
      img3.src = 'animal-04.gif'
    }
  }
}
