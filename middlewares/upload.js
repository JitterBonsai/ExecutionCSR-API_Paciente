const multer = require('multer');

const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {
            cb(null, './uploads');
        },
        filename: (req, file, cb) => {
            cb(null, Date.now().toString() + '_' + file.originalname);
        }
    }
);

const fileFilter = (req, file, cb) => {
    if (['image/jpeg', 'image/png'].includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    };
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    //regra de filter
    fileFilter: fileFilter

});

module.exports = upload;