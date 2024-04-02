const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId :String(import.meta.env.VITE_APPWRITE_URL),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_URL),
    appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_URL),
    appwriteBucketId: String(import.meta.env.VITE_BUCKET_URL)
}
export default conf
// Often, we will have ketys in non-string values, to deal with such thing, we will have a best practice to make a config file 