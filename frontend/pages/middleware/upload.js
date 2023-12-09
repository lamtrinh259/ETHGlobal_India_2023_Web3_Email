import multer from "multer";
import nc from "next-connect";

const upload = multer({ dest: "./public/uploads/" });

const middleware = nc().use(upload.single("file"));

export default middleware;
