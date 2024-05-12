import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "encrypted-tbn0.gstatic.com"
            },
            {
                protocol: "http",
                hostname: "prinplay.com.br"
            },
            {
                protocol: "http",
                hostname: "s2.glbimg.com"
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org"
            },
            {
                protocol: "https",
                hostname: "i.postimg.cc"
            },
            {
                protocol: "https",
                hostname: "logodownload.org"
            },
            {
                protocol: "https",
                hostname: "s.jpimg.com.br"
            },
            {
                protocol: "https",
                hostname: "pbs.twimg.com"
            },
            {
                protocol: "https",
                hostname: "blog.tvnsports.com.br"
            },
            {
                protocol: "http",
                hostname: "gamov.com.br"
            },
            {
                protocol: "https",
                hostname: "static.wixstatic.com"
            },
            {
                protocol: "https",
                hostname: "lnfoficial.com.br"
            },
            {
                protocol: "https",
                hostname: "canalgoat.com.br"
            },
            {
                protocol: "https",
                hostname: "ogol.com.br"
            },
            {
                protocol: "https",
                hostname: "cdn.vox-cdn.com"
            },
            {
                protocol: "https",
                hostname: "logospng.org"
            },
            {
                protocol: "https",
                hostname: "forounivers.com"
            },
            {
                protocol: "https",
                hostname: "themoviedb.org"
            },
            {
                protocol: "https",
                hostname: "image.tmdb.org"
            },
            {
                protocol: "https",
                hostname: "imgur.com"
            },
            {
                protocol: "https",
                hostname: "cdn.pixabay.com"
            },
            {
                protocol: "https",
                hostname: "1000logos.net"
            },
            {
                protocol: "https",
                hostname: "media.fstatic.com"
            },
            {
                protocol: "http",
                hostname: "d3ugyf2ht6aenh.cloudfront.net"
            },
            {
                protocol: "https",
                hostname: "static.tvtropes.org"
            },
            {
                protocol: "https",
                hostname: "meiosepublicidade.pt"
            },
            {
                protocol: "https",
                hostname: "iconape.com"
            },
            {
                protocol: "http",
                hostname: "dns.acaidopara.net:8080"
            },
            {
                protocol: "https",
                hostname: "1.bp.blogspot.com"
            },
            {
                protocol: "http",
                hostname: "dns.clientetv.xyz:8000"
            },
            {
                protocol: "https",
                hostname: "filmes-online.pt"
            },
            {
                protocol: "https",
                hostname: "revistainfoco.com.br"
            },
            {
                protocol: "https",
                hostname: "97fm.com.br"
            },
            {
                protocol: "https",
                hostname: "portalpopline.com.br"
            },
            {
                protocol: "https",
                hostname: "novelasflix.biz"
            },
            {
                protocol: "https",
                hostname: "i.classificadoscb.com.br"
            },
            {
                protocol: "https",
                hostname: "tvtv.us"
            },
            {
                protocol: "https",
                hostname: "cdn.imgbin.com"
            },
            {
                protocol: "https",
                hostname: "satlogo.com"
            },
            {
                protocol: "https",
                hostname: "blogdoadonis.com.br"
            },
            {
                protocol: "https",
                hostname: "i.imgur.com"
            },
            {
                protocol: "https",
                hostname: "ogimg.infoglobo.com.br"
            },
            {
                protocol: "https",
                hostname: "br.web.img2.acsta.net"
            },
            {
                protocol: "https",
                hostname: "i.bj-share.info"
            },
            {
                protocol: "https",
                hostname: "images-na.ssl-images-amazon.com"
            }
            
        ]
    }
};

export default withNextVideo(nextConfig);