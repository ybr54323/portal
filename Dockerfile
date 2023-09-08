FROM 10.1.7.220/aicore/nginx:$TARGETARCH

WORKDIR /usr/share/nginx/html/dataPortal
COPY nginx.conf /etc/nginx/nginx.conf.template
COPY ./out/ ./

EXPOSE 443
EXPOSE 80

CMD nginx -g 'daemon off;'
