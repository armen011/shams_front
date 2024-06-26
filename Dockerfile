FROM node:lts-alpine


# Set the working directory to /app
WORKDIR /app

# Copy the entire repository into the container
COPY . .

# Install dependencies for all applications
RUN yarn install


ARG NEXT_STRAPI_URL
ARG NEXT_PUBLIC_STRAPI_MEDIA
ARG NEXT_APP_URL
ARG NODEMAILER_EMAIL
ARG NODEMAILER_PW
ARG NEXT_PUBLIC_APP_URL


ENV NEXT_STRAPI_URL = NEXT_STRAPI_URL
ENV NEXT_PUBLIC_STRAPI_MEDIA = NEXT_PUBLIC_STRAPI_MEDIA
ENV NEXT_APP_URL = NEXT_APP_URL
ENV NODEMAILER_EMAIL = NODEMAILER_EMAIL
ENV NODEMAILER_PW = NODEMAILER_PW
ENV NEXT_PUBLIC_APP_URL = NEXT_PUBLIC_APP_URL

# Build next application
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]

