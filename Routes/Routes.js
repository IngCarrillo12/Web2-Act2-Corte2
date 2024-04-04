import express from 'express'
import { CreateRegister, DownloadRegister, SearchRegister} from '../Controllers/formularioController.js'
const router = express.Router()
router.post('/formulario', CreateRegister)
router.get('/download/data/:filename',DownloadRegister)
router.get('/searchRegister', SearchRegister)
export default router;