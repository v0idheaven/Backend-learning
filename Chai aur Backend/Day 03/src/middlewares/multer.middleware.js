import path from "path";
import multer from "multer";

const imageMimeTypes = new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif"
]);

const videoMimeTypes = new Set([
    "video/mp4",
    "video/webm",
    "video/quicktime",
    "video/x-matroska"
]);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
    },
    filename: function (req, file, cb) {
        const extension = path.extname(file.originalname);
        const baseName = path
            .basename(file.originalname, extension)
            .replace(/[^a-zA-Z0-9-_]/g, "-");

        cb(
            null,
            `${Date.now()}-${Math.round(Math.random() * 1e9)}-${baseName}${extension}`
        );
    }
});

const fileFilter = (_, file, cb) => {
    const imageFields = new Set(["avatar", "coverImage", "thumbnail"]);
    const videoFields = new Set(["videoFile"]);

    if (imageFields.has(file.fieldname) && imageMimeTypes.has(file.mimetype)) {
        return cb(null, true);
    }

    if (videoFields.has(file.fieldname) && videoMimeTypes.has(file.mimetype)) {
        return cb(null, true);
    }

    const error = new Error(`Unsupported file type for ${file.fieldname}`);
    error.statusCode = 400;
    cb(error);
};

export const upload = multer({ 
    storage,
    fileFilter,
});
