#!/bin/bash
branch="${1}"
parm_module="${2}"
OAUTH_URL=http://10.252.37.150:32015
OAUTH_URL_TEST=http://10.252.92.4:32015
OAUTH_URL_PRO=http://10.252.40.100:32015

SERVER_PASS=Passw0rd
MODULE_ARR=(
grg-public-data-portal-web
)

if [[ $branch =~ "test" ]];then
  OAUTH_URL=$OAUTH_URL_TEST;
  SERVER_PASS=Grg123456
elif [ $branch == "v1-0" ]; then
  OAUTH_URL=$OAUTH_URL_PRO;
fi

##更新部署###
function updateDeploy(){
  echo updateDeploy $1
  curl -H 'Content-Type:application/x-www-form-urlencoded' -X POST -d "client_id=kubesphere&client_secret=kubesphere&grant_type=password&username=admin&password=${SERVER_PASS}"  $OAUTH_URL/oauth/token >accesstoken.tmp
  access_token=$(cat accesstoken.tmp |grep access_token  | sed 's/:/\n/g' | sed '1d' | sed 's/}//g'| sed 's/"//g' |sed 's/ //g'|sed 's/,//g')
  access_token=$(echo "Authorization:Bearer ${access_token}")
  sdate=$(date -u "+%Y-%m-%dT%H:%M:%SZ")
  post_data="{\"spec\":{\"template\":{\"metadata\":{\"annotations\":{\"kubesphere.io/restartedAt\":\"${sdate}\"}}}}}"
  curl --silent  --output /dev/null 2>&1 "${OAUTH_URL}/apis/apps/v1/namespaces/ds-system/deployments/$1"  \
   -X PATCH -H 'Content-Type:application/merge-patch+json' \
   -H "$access_token"  \
	 -d "$post_data"
}


function main(){
    echo "module name is ${parm_module}:${branch}"
    if [ $branch == "dev" ] || [[ $branch =~ "test" ]] || [ $branch == "v1-0" ];then
         if [[ "${MODULE_ARR[@]}"  =~ "$parm_module" ]]; then
            updateDeploy $parm_module
         else
            echo not deploy module
            exit 0
         fi
    else
        echo "no deploy"
        exit 0
    fi
}

main
