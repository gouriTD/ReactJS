// This service file, will help user to signup and login.
/**
 * Class to provide authentication services like signup, login, logout.
 * Since we will be working with method calls which will be returning a promise, so we need to work with async/await.
 */
import {Client,Account,ID} from 'appwrite'
import config from '../config/config'
export class AuthService {
    constructor(){
        this.client = new Client()
                        .setEndpoint(config.appwrite_endpoint_url)
                        .setProject(config.appwrite_Prj_ID)
        this.account = new Account(this.client)
                            
    }

    async signUp(email,username,password){
        try {
            const userId = ID.unique();
            const response = await this.account.create(userId,email,password,username)
            if(response && response.status === true){
                console.log(response)
                // return response
                // Login user.
                return this.login(email,password)
            }
        } catch (error) {
            throw error
        }
        return null
    }

    async login(email,password){
        try {
            const response = await this.account.createEmailSession(email,password)
            if(response){
                console.log(response)
                return response
            }
        } catch (error) {
            throw error
        }
    }

    async logOut(){
        try {
            const res = await this.account.deleteSession('current');
            if(res){
                return res
            }
        } catch (error) {
            throw error;
        }
    }

    async isUserLoggedIn(){
        try {
            const res = await this.account.get()
            if(res && res.$id ){
                console.log(`${res.$id}: logged in`)
                return res;
            }
        } catch (error) {
            throw error
        }
        return false;
    }
    
}

export const authService = new AuthService();