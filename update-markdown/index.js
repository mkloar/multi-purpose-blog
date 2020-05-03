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
    const imgContent = '[![$1](http://img.youtube.com/vi/$7/maxresdefault.jpg)]($4 "$1")'
    const headerContent = '## $1'

    // replace Header and youtube link with youtube thumbnail image and link to the video
    fileContent = fileContent.replace(/^#\s{1,}(.*[\s\S])[\s\S][\r\n]{1,}^\[(.*)\](\(((http|https):\/\/www\.youtube\.com\/(watch|embed)\?v=(.*))\))/gm, 
    `${headerContent}\n\n${imgContent}`)

    await fs.writeFile(file, fileContent)
}

// Main
(async function() {
    const contentPath = path.resolve(`${SCRIPT_ROOT}/../content/`)

    try {
        console.log("Processing MD files")
        console.group()
        await processMDFiles(contentPath)
        console.groupEnd()
    } catch(e) {
        console.error("Exception catched: ")
        console.log(e)
        process.exit(1)
    }
})()