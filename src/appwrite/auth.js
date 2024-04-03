import conf from '../conf/config.js'
import { Client, Account, ID } from 'appwrite'
// making serice
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setEndpoint(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            // check if the userAccount created succcessfully
            if (userAccount) {
                // call another method 
                // such as login after successfully account creation
                return this.login({ email, password });
            }
            else {
                return userAccount;
            }
        }
        catch (error) {
            throw error;
        }
    }

    // Method to create login -- read appwrite documentation
    async login({ email, password }) {
        try {
            await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
        return null;
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        }
        catch (error) {
            console.log("Appwrite Serice :: getCurrentUser :: error", error);
        }
    }
    // To logout from the account
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: Logout :: error", error);
        }
    }

}



const authService = new AuthService();
export default authService;

