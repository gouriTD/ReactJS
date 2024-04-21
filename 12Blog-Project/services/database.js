import config from "../config/config";
import { Client, ID, Databases, Query } from "appwrite";

export class DatabaseServices {
    constructor(){
        this.client = new Client()
                        .setEndpoint(config.appwrite_endpoint_url)
                        .setProject(config.appwrite_Prj_ID)
        this.database = new Databases(this.client)                
    }

    /**
     * Creates a new document, here slug is used as a unique identifier.
     * @returns response , from the server
     */
    async createPost({title,content,slug,image,status,userId}){
        try {
            const response = await this.database.createDocument(
                config.appwrite_DB_ID,
                config.appwrite_Collection_ID,
                slug,
                {title,content,slug,image,status,userId}
            )
            if(response){
                return response
            }
            
        } catch (error) {
            throw error
        }
        return null;
    }

    /**
     * Update post.
     */
    async updatePost(slug,{title,content,image,status}){
        try {
            const res = await this.database.updateDocument(config.appwrite_DB_ID,config.appwrite_Collection_ID,slug,{title,content,image,status})
            if(res){
                return true
            }
        } catch (error) {
            throw error
        }
    }

    /**
     * Delete a given post, a post is identified by its slug value.
     * @param {*} slug 
     * @returns 
     */
    async deletePost(slug){
        try {
            const res = await this.database.deleteDocument(config.appwrite_DB_ID,config.appwrite_Collection_ID,slug)
            if(res)
            {
                return true
            }
        } catch (error) {
            throw error
        }
    }

   /**
    * get a particular post
    */
    async getAPost(slug){
        try {
            const res = await this.database.getDocument(config.appwrite_DB_ID,config.appwrite_Collection_ID,slug)
            if(res){
                return res
            }
        } catch (error) {
            throw error
        }
    }

    /**
     * get all the active posts
     */
    async getAllActivePosts(){
        try {
            return await this.databases.listDocuments(
                config.appwrite_DB_ID,
                config.appwrite_Collection_ID,
                [
                    Query.equal('status_key', true)
                ]
            )
        } catch (error) {
            throw error;
        }
    }
}

export const databaseService = new DatabaseServices();