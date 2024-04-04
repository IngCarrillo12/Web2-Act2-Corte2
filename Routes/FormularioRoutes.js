import express from 'express'
import { CreateRegister, SuccessRegister} from '../Controllers/formularioController.js'
const router = express.Router()
router.post('/formulario', CreateRegister)
router.get('/download/data/:filename',SuccessRegister)

export default router;