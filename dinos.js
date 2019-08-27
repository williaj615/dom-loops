console.log('🦖');


const dinosaurs = [
    {
      dinoType: 't-rex',
      name: 'wrex',
      emoji: '🦖'
    },
    {
      dinoType: 'stegosaurus',
      name: 'steve',
      emoji: '🦕'
    },
    {
      dinoType: 'velociraptor',
      name: 'Ted',
      emoji: '🦑'
    }
  ];

  const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
}

  const dinoPrinter = (dinoArr) => {
      for (let i = 0; i < dinoArr.length; i++) {
        const dino = dinoArr[i]

        const stringToPrint = `
            <div class="dino-card">
                <h3>${dino.dinoType}</h3>
                <p>${dino.name}</p>
                <h1>${dino.emoji}</h1>
            </div>  
        `
        printToDom(stringToPrint, 'dino-div')
      }
  }

  dinoPrinter(dinosaurs);