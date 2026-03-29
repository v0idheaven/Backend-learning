import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const removeLocalFile = (localFilePath) => {
    if (localFilePath && fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath);
    }
};

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        removeLocalFile(localFilePath);
        return response;
    } catch (error) {
        removeLocalFile(localFilePath);
        return null;
    }
};

const deleteOnCloudinary = async (publicId, resourceType = "image") => {
    if (!publicId) {
        return null;
    }

    return cloudinary.uploader.destroy(publicId, {
        resource_type: resourceType
    });
};

const extractPublicIdFromCloudinaryUrl = (fileUrl) => {
    if (!fileUrl) {
        return null;
    }

    const [urlWithoutQuery] = fileUrl.split("?");
    const uploadMarker = "/upload/";
    const uploadIndex = urlWithoutQuery.indexOf(uploadMarker);

    if (uploadIndex === -1) {
        return null;
    }

    const pathParts = urlWithoutQuery
        .slice(uploadIndex + uploadMarker.length)
        .split("/")
        .filter(Boolean);

    const versionIndex = pathParts.findIndex((part) => /^v\d+$/.test(part));
    const assetParts = versionIndex >= 0 ? pathParts.slice(versionIndex + 1) : pathParts;
    const filename = assetParts.pop();

    if (!filename) {
        return null;
    }

    const basename = filename.replace(/\.[^.]+$/, "");

    return [...assetParts, basename].join("/");
};

export { uploadOnCloudinary, deleteOnCloudinary, extractPublicIdFromCloudinaryUrl }
