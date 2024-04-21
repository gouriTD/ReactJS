const config = {
    appwrite_endpoint_url: String(import.meta.env.VITE_APPWRITE_PROJECT_ENDPOINT_URL),
    appwrite_Prj_ID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwrite_DB_ID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwrite_Collection_ID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID ),
    appwrite_Bucket_ID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default config