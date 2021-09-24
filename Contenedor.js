const fs = require('fs')

class Contenedor {

    async getById(num) {

        try {

            let buscaID = num;
            const readFile = await fs.promises.readFile('./productos.txt', 'utf-8')
            let objFile = JSON.parse(readFile)

            for (let i = 0; i < objFile.length; i++) {
                const element = objFile[i];
                if (element.id === buscaID) {
                    return element;
                }else{
                    console.log('No existe el ID indicado');
                }
            }
        } catch (error) {
            throw 'Error'
        }
    }

    async getAll() {
        const readFile = await fs.promises.readFile('./productos.txt', 'utf-8')
        let objFile = JSON.parse(readFile)
        return objFile
    }

}

module.exports = Contenedor
