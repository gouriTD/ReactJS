import { Client, ID, Storage } from "appwrite";
import config from "../config/config";

export class FileStorageServices {
    constructor(){
        this.client = new Client()
                        .setEndpoint(config.appwrite_endpoint_url)
                        .setProject(config.appwrite_Prj_ID)

        this.storage = new Storage(this.client)                
    }

    /**
     * uploadFile
     */

    async uploadFile(file){
        try {
            return await this.storage.createFile(config.appwrite_Bucket_ID,ID.unique(),file)
        } catch (error) {
            throw error
        }
    }

    /**
     * deleteFile
     */

    async deleteFile(fileId){
        try {
          const res = await this.storage.deleteFile(config.appwrite_Bucket_ID,fileId)  
          if(res){
            return true
          }
        } catch (error) {
            throw error
        }
    }

    /**
     * getFilePreview
     */
    async getFilePreview(fileId){
        try {
            return this.storage.getFilePreview(config.appwrite_Bucket_ID,fileId)
        } catch (error) {
            throw error
        }
    }
}

export const fileStorageServices = new FileStorageServices();