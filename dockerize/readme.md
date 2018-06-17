# RUN
docker build -t ubuntu:eth .
#$ Successfully built <badb854ae5bf>
## Successfully tagged ubuntu:eth

TODO

docker network create ETH

docker run --rm -it -p 8545:8545 --net=ETH node_one

docker run --rm -it -p 8546:8546 --net=ETH node_two

https://gist.github.com/fishbullet/04fcc4f7af90ee9fa6f9de0b0aa325ab



docker run --rm -it --net=ETH --name Node_one -v data:/data -p 8545:8545 ubuntu:eth
