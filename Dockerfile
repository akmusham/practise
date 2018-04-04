FROM lomkju/nginx
RUN mkdir /app
WORKDIR /app
RUN apk update && apk upgrade
RUN apk add nodejs
ADD . /app
RUN npm install
RUN BOTMANAGEMENT_URL="https://api.development.techforce.ai/v1/botmanagement" \
    AUTHENTICATION_URL="https://api.development.techforce.ai/v1/authentication" \
    DIALOG_URL="https://dialog.development.techforce.ai" \
    SCOPE_URL="https://api.development.techforce.ai" \
    npm run build
COPY nginx.conf /etc/nginx/nginx.conf
