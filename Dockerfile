FROM keymetrics/pm2:latest-alpine

# Install app dependencies
RUN npm install pm2 -g

# Bundle app source
WORKDIR /usr/app
COPY ./ /usr/app/

# Binds to port 9292
EXPOSE  9292

CMD [ "pm2-runtime", "start", "pm2.config.js" ]
