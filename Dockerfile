FROM 10.1.7.220/aicore/nginx:$TARGETARCH

WORKDIR /usr/share/nginx/html/gateway
COPY nginx.conf /etc/nginx/nginx.conf.template
COPY ./public/config.js ./config.tmp.js
COPY dist/ ./

EXPOSE 443
EXPOSE 80

# 实时开发web
ENV REALTIME_WEB="http://grg-realtime-web"
# 数据清洗加工
ENV HOPSCHEDULER_WEB='http://hopscheduler-web.hopscheduler'
# 数据可视化
ENV DVPLATFORM_WEB='http://dvplatform-web.dvplatform'
# 数据管控
ENV STANDARD_WEB='http://ds-data-standard-web'
# 元数据管理
ENV METADATA_WEB='http://ds-server-metadata-web'
# exchange
ENV EXCHANGE_WEB='http://grg-data-exchange-web'
# 数据汇聚
ENV COLLECT_WEB='http://grg-data-collect-web'
# 数据开发
ENV STUDIO_WEB='http://grg-studio-web'
# 门户
ENV PORTAL_WEB='http://grg-data-exchange-portal-web'
ENV SHARE_WEB='http://grg-data-share-portal-web'

# 数据库管理工具
ENV MAGILE_CUBE_WEB='http://magilecube.magiledb/'
# 数据迁移
ENV MIGRATE_WEB='http://migrate-web.magiledb'
# 数据迁移后端
ENV MIGRATE_API='http://migrate-api.magiledb:8080/'
# 默认的图标名
ENV FAVICON='favicon.ico'

CMD \
    envsubst '\
    # 后端服务
    $GRG_STUDIO_URL,\
    $ETL_URL,\ 
    $DVPLATFORM_URL,\
    # 前端服务
    $REALTIME_WEB,\
    $HOPSCHEDULER_WEB,\
    $DVPLATFORM_WEB,\
    $STANDARD_WEB,\
    $METADATA_WEB,\
    $EXCHANGE_WEB,\
    $COLLECT_WEB,\
    $STUDIO_WEB,\
    $PORTAL_WEB,\
    $SHARE_WEB,\
    $MAGILE_CUBE_WEB,\
    $MIGRATE_WEB,\
    $MIGRATE_API'\
    </etc/nginx/nginx.conf.template >/etc/nginx/conf.d/default.conf \
    && \
    envsubst \
    '$REMOTE_LOGIN_URL, \
    $FAVICON' \
    < ./config.tmp.js \
    > ./config.js \
    && nginx -g 'daemon off;'
