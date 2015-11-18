#!/bin/bash



echo "Install recent version of Erlang"

sudo apt-get install erlang

echo "Download the"

wget https://www.rabbitmq.com/releases/rabbitmq-server/v3.5.6/rabbitmq-server_3.5.6-1_all.deb

sudo dpkg -i rabbitmq-server_3.5.6-1_all.deb
if [ $? -ne 0 ]
then
echo "Fail"
else
echo "OK"
fi


