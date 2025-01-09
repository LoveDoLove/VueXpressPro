const fs = require('fs')
const path = require('path')
const stringHelper = require('./stringHelper')

const dir = __dirname + '/../uploads'

class FileHelper {
  generateRandomFileName() {
    return stringHelper.generateRandomString(10) + '.so'
  }

  saveFile(fileBuffer, originalName) {
    const inputPath = path.join(dir, originalName)
    fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(inputPath, fileBuffer)
    return inputPath
  }

  generateFilePaths(originalName, fileName) {
    const inputPath = path.join(dir, originalName)
    const outputPath = path.join(dir, fileName)
    return { inputPath, outputPath }
  }

  sendFileAsResponse(res, fileName, outputPath) {
    res.set('Content-Type', 'application/octet-stream')
    res.set('Content-Disposition', `attachment; filename=${fileName}`)
    res.send(fs.readFileSync(outputPath))
    fs.unlinkSync(outputPath)
  }

  async handleFileGeneration(req) {
    const requestFile = req.file
    const fileName = this.generateRandomFileName()
    const inputPath = this.saveFile(
      requestFile.buffer,
      requestFile.originalname
    )
    const { outputPath } = this.generateFilePaths(
      requestFile.originalname,
      fileName
    )
    return { fileName, inputPath, outputPath }
  }

  async handleFileDownload(req, res, content) {
    try {
      const { fileName, outputPath } = content
      this.sendFileAsResponse(res, fileName, outputPath)
    } catch (err) {
      res.status(500).send('Error during download')
    }
  }
}

module.exports = new FileHelper()
