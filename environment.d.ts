/* eslint-disable no-unused-vars */
namespace NodeJS {
  interface ProcessEnv {
    // DATABASE
    DATABASE_URL: string;
    // SECRETS
    SECRET_KEY: string;
    // ADMIN CREDS
    ADMIN_USERNAME: string;
    ADMIN_PASSWORD: string;
    // CLOUDINARY
    CLOUDINARY_CLOUD_NAME: string;
    CLOUDINARY_API_KEY: string;
    CLOUDINARY_API_SECRET: string;
    // SENTRY CREDS
    SENTRY_DSN: string;
    // PUBLICs
    NEXT_PUBLIC_APP_URL: string;
  }
}
