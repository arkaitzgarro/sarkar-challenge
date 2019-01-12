FROM node:8.15.0-slim

# Bundle app source
WORKDIR /usr/app
COPY ./ /usr/app/

# Binds to port 9292
EXPOSE  9292

CMD ["node", "src/index.js"]
