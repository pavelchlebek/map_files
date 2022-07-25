const fs = require("fs")
const xml2js = require("xml2js")
const util = require("util")

path = require("path")

inputFilePath = path.join(__dirname, "../maps/track_from_map.gpx")
outputFilePath = path.join(__dirname, "../map_outputs/map1.gpx")

const parser = new xml2js.Parser()

try {
  const data = fs.readFileSync(inputFilePath, "utf8")
  parser.parseString(data, (err, result) => {
    fs.writeFileSync(outputFilePath, util.inspect(result, false, null, true))
  })
} catch (err) {
  console.log(err)
}
