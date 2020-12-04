const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
   destination(req, file, _cb){
      _cb(null, "uploads/");
   },
   filename(req, file, _cb){
      const date = moment().format("DDMMYYYY-HHmmss_SSS");
      _cb(null, `${date}-${file.originalname}`);
   }
})
const fileFilter = (req, file, _cb) => {
   if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
      _cb(null, true);
   }else{
      _cb(null, false);
   }
}
const limits = {
   fileSize: 1024 * 1024 * 10
}

module.exports = multer({
   storage, fileFilter, limits
})