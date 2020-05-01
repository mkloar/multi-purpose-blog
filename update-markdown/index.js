const path = require('path')
const fs = require('fs').promises
const SCRIPT_ROOT = path.resolve(__dirname)

const processMDFiles = async(rootPath) => {
    const files = await fs.readdir(rootPath);
    for (const i in files) {
        const name = path.join(rootPath,'/',files[i])
        const stat = await fs.stat(name)
        if (stat.isDirectory()){
            await processMDFiles(name)
        } else {
            console.log(`Updating ${name}`)
            await updateMarkdownContent(name)
        }
    }
}

const updateMarkdownContent = async(file) => {
    let fileContent = await fs.readFile(file, 'utf-8')

    // replace Header and youtube link with youtube thumbnail image and link to the video
    fileContent = fileContent.replace(/^#\s{1,}(.*[\s\S])[\s\S][\r\n]{1,}^((https|http):\/\/www\.youtube\.com\/(watch|embed)\?v=(.*))/gm, 
    `[![$1](http://img.youtube.com/vi/$5/0.jpg)]($2 "$1")`)

    await fs.writeFile(file, fileContent)
}

// Main
(async function() {
    const contentPath = path.resolve(`${SCRIPT_ROOT}/../content/`)

    try {
        console.group()
        console.log("Processing MD files")
        await processMDFiles(contentPath)
        console.groupEnd()
    } catch(e) {
        console.error("Exception catched: ")
        console.log(e)
        process.exit(1)
    }
})()