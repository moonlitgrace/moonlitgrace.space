/* eslint-disable no-unused-vars */
namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    SECRET_KEY: string;
    ADMIN_USERNAME: string;
    ADMIN_PASSWORD: string;
    CLOUDINARY_CLOUD_NAME: string;
    CLOUDINARY_API_KEY: string;
    CLOUDINARY_API_SECRET: string;
    NEXT_PUBLIC_SENTRY_DSN: string;
  }
}
