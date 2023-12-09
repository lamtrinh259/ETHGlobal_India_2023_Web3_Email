// pages/api/file.js
import multer from "multer";

const upload = multer({
  dest: "./public/uploads/", // Set the destination folder for uploaded files
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Use the `upload` middleware to handle the file upload
      upload.single("file")(req, res, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send(err.message);
        }

        // Access the file details using req.file
        const { filename, path, size } = req.file;

        // Process the uploaded file as needed
        console.log("File details:", { filename, path, size });

        // Send a success response
        res.status(200).json({ message: "File uploaded successfully" });
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
