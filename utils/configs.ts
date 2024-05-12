export const configs = {
  backendUrl: process.env.NEXT_STRAPI_URL,
  frontendUrl: process.env.NEXT_APP_URL || process.env.NEXT_PUBLIC_APP_URL,
  mediaUrl: process.env.NEXT_PUBLIC_STRAPI_MEDIA,
};
