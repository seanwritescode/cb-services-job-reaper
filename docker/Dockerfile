DOCKER-VERSION 1.3

FROM ubuntu:14.04
MAINTAINER Sean Lindo <lindo.d.sean@runbox.com>

# make sure apt is up to date
RUN apt-get update

# install dependencies we need to run a nodejs app
RUN apt-get install -y nodejs npm git git-core vim-tiny

# copy config file
ADD default.json /tmp/

EXPOSE 3000

# startup script
ADD start.sh /tmp/
RUN chmod +x /tmp/start.sh
CMD ["/bin/bash", "./tmp/start.sh"]
