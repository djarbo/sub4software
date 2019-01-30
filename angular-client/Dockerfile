#  Create a new image from the base nodejs 7 image.
FROM node:11

# Need to get angular cli inside the container to run the development server
RUN npm install -g @angular/cli

# Create the target directory in the imahge
RUN mkdir -p /usr/src/app

# Set the created directory as the working directory
WORKDIR /usr/src/app

# Copy the package.json inside the working directory
COPY package.json /usr/src/app

# Install required dependencies --no-optional flag will suppress beningn "npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents"
# which is only used for Macs (Darwin)
RUN npm install --no-optional

# Copy the client application source files. You can use .dockerignore to exlcude files. Works just as .gitignore does.
COPY . /usr/src/app

# Open port 4200. This is the port that our development server uses
EXPOSE 4200

# Start the application. This is the same as running ng serve.
CMD ["npm", "start"]