'use strict';

const fs = require('fs');
const stream = require('stream');

class FileUtils{

    constructor(){}

    read(src){
        return new Promise((resolve, reject) => {
            if (typeof src === 'string') {
                 fs.readFile(src, 'utf8', (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                })

            }else if(src instanceof stream.Readable) {

                let value = '';
                src.on('data', chunk => {
                    value += chunk;
                })

                src.on('error', err => {
                    reject(err);
                })
    
                src.on('end', () => {
                    resolve(value);
                })

            }else{
                reject(`Not support this ${src} input type.`);
            }
        }).catch(err => console.log(err));
    }

    write(outputSrc, message){
        return new Promise((resolve, reject) => {
            if (typeof outputSrc === 'string') {
                fs.writeFile(outputSrc, message, 'utf8', err => {
                    if (err) {
                        reject(err);
                    }
                    resolve(true);
                })

            }else if(outputSrc instanceof stream.Writable) {
                outputSrc.write(message);
                resolve(true);

            }else if(outputSrc instanceof console.Console) {
                console.log(message);
                resolve(true);
                
            }else{
                reject(`Not support this ${outputSrc} output type.`);
            }
        }).catch(err => console.log(err))

    }
}

module.exports = FileUtils;