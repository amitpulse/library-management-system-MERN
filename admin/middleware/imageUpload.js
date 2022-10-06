const multer = require('multer')
const uuid = require('uuid')



const storage = multer.diskStorage({
    destination:  (req, file, cb) => {
        cb(null, '..images')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = uuid.v4()  + '-' + Date.now();
        cb(null, file.originalname + '-' + uniqueSuffix)
    }
})

const upload = multer({ imageStorage: storage })

router.post('/userpic', upload.single('photo'));