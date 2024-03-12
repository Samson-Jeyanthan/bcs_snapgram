import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  projectUrl: import.meta.env.VITE_APPWRITE_PROJECT_URL, // the local url is not working
};

export const client = new Client();

client
  .setProject(appwriteConfig.projectId)
  .setEndpoint(appwriteConfig.projectUrl);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatats = new Avatars(client);
