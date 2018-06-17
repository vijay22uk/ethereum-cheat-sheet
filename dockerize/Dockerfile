FROM ubuntu:16.04
LABEL version="1.0"
LABEL maintainer="vijay22uk@hotmail.com"
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install --yes software-properties-common
RUN add-apt-repository ppa:ethereum/ethereum
RUN apt-get update && apt-get install --yes geth

RUN adduser --disabled-login --gecos "" vj_user

COPY eth_data /home/vj_user/eth_common
RUN chown -R vj_user:vj_user /home/vj_user/eth_common

USER vj_user

WORKDIR /home/vj_user
# comment this file for second node // or add ne genesis
RUN geth init eth_common/genesis.json

ENTRYPOINT bash