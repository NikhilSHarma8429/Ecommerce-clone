const multer = require('multer')

const storage = multer.diskStorage({
    destination: '../frontend/ecommerce-clone/public/uploads/images',
    filename: (req, file, cb) => {
      const fileName = file.originalname.replace(/\s+/g, '');
      cb(null, fileName);
    },
});

const fileFilter = (req, file, cb) => {
    // Check if the file type is acceptable
    const allowedFileTypes = ['image/jpeg', 'image/png'];
  
    if (allowedFileTypes.includes(file.mimetype)) {
      cb(null, true); // Accept the file
    } else {
    const error = new Error('Invalid file type. Only JPEG, PNG, and PDF files are allowed.'); // Reject the file
    error.statusCode = 415; // Custom status code for bad request
    cb(error, false); 
}
  };
  
  const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { files: 5 }
  });

module.exports = upload