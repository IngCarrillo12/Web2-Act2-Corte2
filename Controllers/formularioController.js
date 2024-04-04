import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

// Obtener el directorio base del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectDir = path.join(__dirname, '..');
export const SuccessRegister = (req, res)=>{
        const { filename } = req.params;
        
        const filePath = path.join(projectDir, 'data', filename);
        console.log(filePath)
    if (fs.existsSync(filePath)) {
        // Configurar el encabezado de respuesta para la descarga
        res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
        
        // Crear un stream de lectura del archivo y enviarlo como respuesta
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    } else {
        // Si el archivo no existe, enviar una respuesta de error
        res.status(404).send('Archivo no encontrado');
    }
}

export const CreateRegister= (req, res)=>{
        try {   
                const id = uuidv4()
                const {name, lastName, title, autor, editorial, year} = req.body
                if(id!== '' && name !== '' && lastName!== '' && title!== '' && autor!== '' && editorial!== '' && year!== '' ){
                        const data = JSON.stringify(req.body)
                        const fileName = `data/${lastName}_${id}.txt`
                        fs.writeFile(fileName, data, (error)=>{
                                if(error){
                                        console.log(`Error: ${error}`)
                                }else{
                                        res.redirect(`/download/${fileName}`);
                                }
                        })
                }else {
                        res.redirect('/error.html')
                    }
                   
        } catch (error) {
                res.status(400).send(error.message)
        }
   
}