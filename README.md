# sarkar-challenge

How to survive to an impetus Sarkar.


## Running the application with Docker

From the root directory, run the following command to build the Docker image. The -t flag lets you tag your image so it's easier to find later using the docker images command:

  $ docker build -t <your username>/sarkar-challenge .

Your image will now be listed by Docker:

  $ docker images

Running your image with `-d` runs the container in detached mode, leaving the container running in the background. The `-p` flag redirects a public port to a private port inside the container. Run the image you previously built:

$ docker run -p 9292:9292 -d <your username>/sarkar-challenge
