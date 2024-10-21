const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}
async function walk(files, rootDir){
    for(let i of files){
        const fileFullPath = path.resolve(rootDir, i)
        const stats = await fs.stat(fileFullPath);
        
        if(/node_modules/g.test(fileFullPath)) continue;
        if(stats.isDirectory()) {readdir(fileFullPath);continue;}

        console.log(i, stats.isDirectory());
    }
}
readdir('C:/Users/joao.maciel/Downloads/cursojs/node');