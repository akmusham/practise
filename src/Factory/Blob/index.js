module.exports = (data, mimeType, fileName) => {
  let blob = new Blob([data], {type: mimeType})
  let fileURL = URL.createObjectURL(blob)
  let el = document.createElement('a')
  el.href = fileURL
  el.download = fileName
  el.click()
  return fileURL
}
