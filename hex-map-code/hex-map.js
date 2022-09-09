const opts = {
  // Colors
  dark_water: '#0ea5e9',
  light_water: '#7dd3fc',
  sand: '#fed7aa',
  grass: '#bef264',
  forest: '#84cc16',
  rocks: '#94a3b8',
  snow: '#64748b',
  // attributes
  reserved: '#e2e8f0',
  premium: '#FFE148',
  outline_width: 1,
  outline_color: '#ffffff', // '#918585',
  outline: true,
}

async function setup() {
  var canvas = createCanvas(600, 600)
  canvas.parent('sketchdiv')

  pixelDensity(2)
  strokeWeight(1)
  stroke(0)
  scale(2)

  // background('#0ea5e9')
  // displayLand(21025)

  for (let id = 0; id <= 24372; id++) {
    background('#0ea5e9')
    displayLand(id)
    save(`${id}.png`)
    await sleep(50)
    clear()
  }
}

function displayLand(landId) {
  const land = Map.find((land) => land.id === landId)
  console.log('landCenter', land)

  for (let i = 0; i < Map.length; i++) {
    // console.log(Map[i])
    drawHexagon(
      Map[i].posX - land.posX + 150,
      Map[i].posY - land.posY + 150,
      10,
      Map[i].type,
      Map[i].reserved,
      Map[i].premium
    )
  }

  drawHexagon(150, 150, 10, 7)
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function getHexColor(type) {
  switch (type) {
    case 1:
      return opts.light_water
    case 2:
      return opts.sand
    case 3:
      return opts.grass
    case 4:
      return opts.forest
    case 5:
      return opts.rocks
    case 6:
      return opts.snow
    case 7:
      return '#FF33E7'
    case 8:
      return '#FFE148'
    default:
      return opts.dark_water
  }
}

function drawHexagon(x, y, side, type, reserved, premium) {
  if (reserved) {
    fill(opts.reserved)
  } else if (premium) {
    fill(opts.premium)
  } else {
    fill(getHexColor(type))
  }

  strokeWeight(opts.outline_width)
  if (opts.outline) {
    stroke(opts.outline_color)
  } else {
    stroke(getHexColor(type))
  }

  beginShape()
  vertex(x + side * sin(PI / 2), y + side * cos(PI / 2))
  vertex(x + side * sin(PI / 6), y + side * cos(PI / 6))
  vertex(x + side * sin((11 * PI) / 6), y + side * cos((11 * PI) / 6))
  vertex(x + side * sin((3 * PI) / 2), y + side * cos((3 * PI) / 2))
  vertex(x + side * sin((7 * PI) / 6), y + side * cos((7 * PI) / 6))
  vertex(x + side * sin((5 * PI) / 6), y + side * cos((5 * PI) / 6))
  endShape(CLOSE)
}
