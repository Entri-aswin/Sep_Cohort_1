import { cloudinaryInstance } from "../config/cloudinaryConfig.js";

export const handleImageUpload = async (path) => {
    try {
        const uploadResult = await cloudinaryInstance.uploader.upload(path);
        return uploadResult.url;
    } catch (error) {
        next(error);
    }
};
