FROM alpine:3.5
MAINTAINER Imam Susanto <abc.imams@gmail.com>

LABEL caddy_version="0.10.0" hugo_version="0.20.2" architecture="amd64"

ENV HUGO_VERSION 0.20.2
ENV HUGO_BINARY hugo_${HUGO_VERSION}_linux-64bit

ARG plugins=http.cors,http.filemanager,http.hugo,http.minify,tls.dns.cloudflare

RUN apk add --no-cache openssh-client git tar curl
RUN apk update && apk add py-pygments && apk add bash && rm -rf /var/cache/apk/*

RUN mkdir /usr/local/hugo
ADD https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/${HUGO_BINARY}.tar.gz /usr/local/hugo/
RUN tar xzf /usr/local/hugo/${HUGO_BINARY}.tar.gz -C /usr/local/hugo/ \
	&& ln -s /usr/local/hugo/hugo_${HUGO_VERSION}_linux_amd64/hugo_${HUGO_VERSION}_linux_amd64 /usr/local/bin/hugo \
	&& rm /usr/local/hugo/${HUGO_BINARY}.tar.gz

RUN curl --silent --show-error --fail --location \
      --header "Accept: application/tar+gzip, application/x-gzip, application/octet-stream" -o - \
      "https://caddyserver.com/download/linux/amd64?plugins=${plugins}" \
    | tar --no-same-owner -C /usr/bin/ -xz caddy \
 && chmod 0755 /usr/bin/caddy \
 && /usr/bin/caddy -version

EXPOSE 80 443 2015
VOLUME /root/.caddy
WORKDIR /srv

COPY Caddyfile /etc/Caddyfile
COPY / /srv

ENTRYPOINT ["/usr/bin/caddy"]
CMD ["--conf", "/etc/Caddyfile", "--log", "stdout"]
