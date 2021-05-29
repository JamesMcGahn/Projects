#!/usr/bin/env node
const fs = require('fs');
const { lstat } = fs.promises;
const chalk = require('chalk');
const path = require('path');

const targetDir = process.argv[2] || process.cwd()

fs.readdir(targetDir, async (err, files) => {
    if (err) {
        console.log(err)
    }

    const statPromises = files.map(file => lstat(path.join(targetDir, file)))
    const allStats = await Promise.all(statPromises)
    for (let stats of allStats) {
        const index = allStats.indexOf(stats)
        if (stats.isFile()) console.log(files[index])
        else console.log(chalk.bold(files[index]))
    }


    // for (let filename of files) {
    //     try {
    //         const stats = await lstat(filename)
    //         console.log(filename, stats.isFile())
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
})