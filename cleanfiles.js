const fs = require('fs')

// 24372
for (let id = 0; id < 24372; id++) {
  try {
    if (fs.existsSync(`./HexaMap/${id}.png`)) {
      fs.rename(`./HexaMap/${id}.png`, `./HexaMap/clean/${id}.png`, function (err) {
        if (err) throw err
        // console.log('Successfully renamed - AKA moved!')
      })
      //file exists
      // console.log(`===> ${id} exist !`)
    } else {
      console.log(`===> ${id} doesnt exist !`)
    }
  } catch (err) {
    console.error(err)
  }
}
