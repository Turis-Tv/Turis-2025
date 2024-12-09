// canales de lista m3u https://jsfiddle.net/onigetoc/f26zuLtw/
function m3utojson(m3u) {
    return m3u
        .replace('#EXTM3U', '')
        .split('#EXTINF:-1 ')
        .slice(1)
        .map(function(str, index) {
            let channel = str.split('\n').slice(0,-1);
			if(channel[1].indexOf('m3u8') >= 0){
            /* 
                    channel[0].split('"')[0]
                        | channel[0].split('"')[1]
                        |    |   channel[0].split('"')[2]
                        |    |      |    channel[0].split('"')[3]   
                        |    |      |        |     channel[0].split('"')[4]  
                        |    |      |        |         |      channel[0].split('"')[5]          
                        |    |      |        |         |             |        channel[0].split(',')[1]    
                        __|__  |  ____|___   __|__   ____|___   _______|______    ___|__
                    |     | | |        | |     | |        | |              |  |      |
            #EXTINF:-1 tvg-id="1" tvg-name="nombre1" tvg-logo="https://foto.png", nombre1
            https://enlace.m3u8
            -------|-----------
                channel[1]

            */
                return {
                 "id": index + 1,
                 "tvg-id": channel[0].split('"')[1],
                 "title": channel[0].split('"')[3],
                 "name": channel[0].split(',')[1],
                 "m3u8_url": channel[1].replace('http://', 'https://')                        
                }
			}
        });
}



// https://www.m3u.cl/iptv-chile.php
let m3u = `
#EXTM3U





#EXTINF:-1 tvg-id="4" tvg-name="Atv" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", Atv* | CL
https://tgn.bozztv.com/trn03/gt-atv-tv/tracks-v1a1/mono.m3u8

#EXTINF:-1 tvg-id="1436" tvg-name="Atv | c" group-title="Ulusal",Atv | a * | CL
https://tgn.bozztv.com/trn03/gt-atv-tv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="1437" tvg-name="Atv | f" group-title="Ulusal",Atv | b
https://yayin2.canlitv.fun/livetv/atv.stream/master.m3u8
#EXTINF:-1 tvg-id="1438" tvg-name="Atv | g" group-title="Ulusal",Atv | c
https://c.fulltvizle.com/aytv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Atv" tvg-logo="https://seeklogo.com/images/A/atv-logo-35C825BDBB-seeklogo.com.png" group-title="GinikoTv",Atv| d
https://tgn.bozztv.com/trn03/gt-atv-tv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Atv eu" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUk0AdkpKqBSM6b7cfk05DZo4evBHDjjBbQ&s" group-title="GinikoTv",Atv eu
https://tgn.bozztv.com/dvrfl05/gin-atvavrupa/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Atv" group-title="FullTv",Atv| e
https://c.fulltvizle.com/aytv/index.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Tv8" group-title="Karışık kaynaklar",Tv8
https://tv8-live.daioncdn.net/tv8/tv8.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv8 int" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyn_0Vpa5fLt_Ctq6KwTxkUaohGSIjfDf4tQ&suto=format&dpr=1&w=1000" group-title="GinikoTv",Tv8 int
https://tgn.bozztv.com/dvrfl05/gin-tv8int/tracks-v1a1/mono.m3u8



#EXTINF:-1 tvg-id="4" tvg-name="Trt 1" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", Trt 1* | CL
https://tv-trt1.medya.trt.com.tr/master_720.m3u8
#EXTINF:-1 tvg-id="1471" tvg-name="Trt1 | c" group-title="Ulusal",Trt1 | c
https://tgn.bozztv.com/dvrfl05/gin-trt1eu/tracks-v1a1/mono.m3u8

#EXTINF:-1 tvg-id="1474" tvg-name="Trt1 | f" group-title="Ulusal",Trt1 | f
https://yayin2.canlitv.fun/livetv/trt1.stream/master.m3u8
#EXTINF:-1 tvg-id="1475" tvg-name="Trt1 | g" group-title="Ulusal",Trt1 | g
https://c.fulltvizle.com/trt1/index.m3u8
#EXTINF:-1 tvg-id="1476" tvg-name="Trt1 | h" group-title="Ulusal",Trt1 | h
https://helga.iptv2022.com/trt_1/index.m3u8
#EXTINF:-1 tvg-id="1477" tvg-name="Trt1 | i" group-title="Ulusal",Trt1 | i
https://tv-trt1.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="771" tvg-name="Trt Turk" tvg-logo="https://i2.paste.pics/a66f18725932decfa4fcf7f634060922.png", Trt Turk* | CL
https://tv-trtturk.medya.trt.com.tr/master_720.m3u8
#EXTINF:-1 tvg-id="13" tvg-name="Trt Haber" tvg-logo="https://i2.paste.pics/004835d0c1a19dd14fa643dd18897d4d.png", Trt Haber * | CL
https://tv-trthaber.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt 1" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrU5IkSf2tzU4Zu_8_CfZ6wXxf3to6Tvy8Q&s" group-title="GinikoTv",Trt 1
https://tgn.bozztv.com/dvrfl05/gin-trt1eu/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt 4k" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1u4_CmorMFW8qDzOznFisy7JknFMr0dBkYg&s" group-title="GinikoTv",Trt 4k
https://trn03.tulix.tv/gt-trt4k/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt arapça" tvg-logo="https://play-lh.googleusercontent.com/c1R5fTWwQYs-ojv5yL301sh46B6srULQ0TlpGkKHeOKpA_997NG4vAVrGSF1xftGd-E7" group-title="GinikoTv",Trt arapça
https://tgn.bozztv.com/dvrfl05/gin-trtarapca/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt belgesel" tvg-logo="https://isbh.tmgrup.com.tr/sbh/2015/03/31/GenelBuyuk/1427785267498.jpg" group-title="GinikoTv",Trt belgesel
https://tgn.bozztv.com/dvrfl05/gin-trtbelgesel/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt haber" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6P6-9HOe5uHR9ZiNvxlgDfn28M2bXAJjPg&s" group-title="GinikoTv",Trt haber
https://tgn.bozztv.com/dvrfl05/gin-trthaber/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt spor" tvg-logo="https://i.pinimg.com/474x/5e/25/f7/5e25f7166d15e40f73df3dde9af37fb9.jpg" group-title="GinikoTv",Trt spor
https://tgn.bozztv.com/dvrfl05/gin-trtspor/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt spor 2" tvg-logo="https://i.pinimg.com/474x/5e/25/f7/5e25f7166d15e40f73df3dde9af37fb9.jpg" group-title="GinikoTv",Trt spor 2
https://tgn.bozztv.com/dvrfl05/gin-trtspor2/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt spor 3" tvg-logo="https://i.pinimg.com/474x/5e/25/f7/5e25f7166d15e40f73df3dde9af37fb9.jpg" group-title="GinikoTv",Trt spor 3
https://tgn.bozztv.com/dvrfl05/gin-trtspor3/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt türk" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0DtM9-81qr2eu61T_Ec_YJB1SkoqdRbczrQ&s" group-title="GinikoTv",Trt türk
https://tgn.bozztv.com/dvrfl05/gin-trtturk/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt 1" group-title="FullTv",Trt 1
https://c.fulltvizle.com/trt1/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt 1" group-title="HelgaIpTv",Trt 1
https://helga.iptv2022.com/trt_1/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt belgesel" group-title="HelgaIpTv",Trt belgesel
https://helga.iptv2022.com/trt_belgesel/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt çocuk" group-title="HelgaIpTv",Trt çocuk
https://helga.iptv2022.com/trt_cocuk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt haber" group-title="HelgaIpTv",Trt haber
https://helga.iptv2022.com/trt_haber/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt müzik" group-title="HelgaIpTv",Trt müzik
https://helga.iptv2022.com/trt_muzik/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt spor" group-title="HelgaIpTv",Trt spor
https://helga.iptv2022.com/trt_spor/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt 1" group-title="Karışık kaynaklar",Trt 1
https://tv-trt1.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt arabia" group-title="Karışık kaynaklar",Trt arabia
https://tv-trtarabi.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt avaz" group-title="Karışık kaynaklar",Trt avaz
https://tv-trtavaz.medya.trt.com.tr/master_720.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt belgesel" group-title="Karışık kaynaklar",Trt belgesel
https://tv-trtbelgesel.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt çocuk" group-title="Karışık kaynaklar",Trt çocuk
https://tv-trtcocuk.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="trt eba 1" group-title="Karışık kaynaklar",trt eba 1
https://tv-e-okul01.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt eba 4" group-title="Karışık kaynaklar",Trt eba 4
https://tv-e-okul04.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt haber" group-title="Karışık kaynaklar",Trt haber
https://tv-trthaber.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt müzik" group-title="Karışık kaynaklar",Trt müzik
https://tv-trtmuzik.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt türk" group-title="Karışık kaynaklar",Trt türk
https://tv-trtturk.medya.trt.com.tr/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Trt world" group-title="Karışık kaynaklar",Trt world
https://tv-trtworld.medya.trt.com.tr/master.m3u8



#EXTINF:-1 tvg-id="465" tvg-name="Star Tv" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png",Star Tv* | CL
https://dogus-live.daioncdn.net/startv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Star" group-title="Karışık kaynaklar",Star
https://dogus-live.daioncdn.net/startv/startv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Star" group-title="FullTv",Star
https://c.fulltvizle.com/star/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Euro Star" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68Cmp7VbjledIRHpyA3haRpvrCOcE-_AlJQ&usqp=CAU" group-title="GinikoTv",Euro Star
https://tgn.bozztv.com/trn03/gt-eurostar/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="1459" tvg-name="Star | f" group-title="Ulusal",Star | f
https://c.fulltvizle.com/star/index.m3u8
#EXTINF:-1 tvg-id="1460" tvg-name="Star | g" group-title="Ulusal",Star | g
https://dogus-live.daioncdn.net/startv/startv.m3u8



#EXTINF:-1 tvg-id="1160" tvg-name="Show Tv" tvg-logo="https://i2.paste.pics/99cc893c37784a17aac9a95ac3c7e5c8.png", Show Tv * | CL
https://ciner-live.daioncdn.net/showtv/showtv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Show plus" group-title="Azerbaycan",Show plus
http://str.yodacdn.net/showplus/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Show plus | 2" group-title="Azerbaycan",Show plus | 2
https://ssh101.bozztv.com/ssh101/showplus/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Showtv" group-title="Karışık kaynaklar",Showtv
https://ciner-live.daioncdn.net/showtv/showtv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Show türk" group-title="HelgaIpTv",Show türk
https://helga.iptv2022.com/show_turk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Show türk" tvg-logo="https://tutusmedia.com/wp-content/uploads/2019/02/show_turk.png" group-title="GinikoTv",Show türk
https://tgn.bozztv.com/dvrfl05/gin-showtvturk/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Showtv" tvg-logo="https://i.ytimg.com/vi/rPpOXVk2tQs/sddefault.jpg" group-title="GinikoTv",Showtv
https://tgn.bozztv.com/trn03/gt-show-tv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="1448" tvg-name="Showtv | c" group-title="Ulusal",Showtv | c
https://tgn.bozztv.com/trn03/gt-show-tv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="1451" tvg-name="Showtv | f" group-title="Ulusal",Showtv | f
https://yayin2.canlitv.fun/livetv/showtv.stream/master.m3u8
#EXTINF:-1 tvg-id="1453" tvg-name="Showtv | h" group-title="Ulusal",Showtv | h
https://ciner-live.daioncdn.net/showtv/showtv.m3u8


#EXTINF:-1 tvg-id="1255" tvg-name="Kanal 7 " tvg-logo="https://i2.paste.pics/355ba171055dd0e6747131673432cc18.png", Kanal  7 * | CL
https://kanal7-live.daioncdn.net/kanal7/kanal7_1080p.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="kanal 7" group-title="Karışık kaynaklar",kanal 7
https://kanal7-live.daioncdn.net/kanal7/kanal7.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal 7 eu" group-title="Karışık kaynaklar",Kanal 7 eu
https://livetv.radyotvonline.net/kanal7live/kanal7avr/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal 7" group-title="FullTv",Kanal 7
https://c.fulltvizle.com/kanal7/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal 7" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Kanal_7_2002-%3F_logosu.webp/300px-Kanal_7_2002-%3F_logosu.webp.png" group-title="GinikoTv",Kanal 7
https://tgn.bozztv.com/dvrfl05/gin-kanal7/tracks-v1a1/mono.m3u8


#EXTINF:-1 tvg-id="31" tvg-name="360 Tv" tvg-logo="https://i2.paste.pics/6abc319563c207c4ba1fb2c199fedd86.png", 360 Tv * | CL
https://turkmedya-live.ercdn.net/tv360/tv360.m3u8
#EXTINF:-1 tvg-id="1493" tvg-name="360 | c" group-title="Ulusal",360 | c
https://tgn.bozztv.com/dvrfl05/gin-sky360/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="1496" tvg-name="360 | f" group-title="Ulusal",360 | f
https://turkmedya-live.ercdn.net/tv360/tv360.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="360" tvg-logo="https://upload.wikimedia.org/wikipedia/tr/7/78/Skyturk360_logosu.png" group-title="GinikoTv",360
https://tgn.bozztv.com/dvrfl05/gin-sky360/tracks-v1a1/mono.m3u8


#EXTINF:-1 tvg-id="1436" tvg-name="Tv 4" tvg-logo="https://i2.paste.pics/eee2cbc0f52cbb9c7c73ee13f72c0b96.png", Tv 4* | CL
https://turkmedya-live.ercdn.net/tv4/tv4_720p.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv4" group-title="Karışık kaynaklar",Tv4
https://turkmedya-live.ercdn.net/tv4/tv4.m3u8



#EXTINF:-1 tvg-id="1058" tvg-name="Teve 2" tvg-logo="https://i2.paste.pics/e3cde58abf314e0e6b17b595c357936a.png", Teve 2 * | CL
https://demiroren-live.daioncdn.net/teve2/teve2.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Teve2" group-title="Karışık kaynaklar",Teve2
https://demiroren-live.daioncdn.net/teve2/teve2.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Teve2" group-title="HelgaIpTv",Teve2
https://helga.iptv2022.com/teve_2/index.m3u8

#EXTINF:-1 tvg-id="1112" tvg-name="Beyaz Tv" tvg-logo="https://i2.paste.pics/5d6d67c298360548fd41a897f987628c.png", Beyaz Tv * | CL
https://beyaztv-live.daioncdn.net/beyaztv/beyaztv_1080p.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Beyaztv" group-title="Karışık kaynaklar",Beyaztv
https://beyaztv-live.daioncdn.net/beyaztv/beyaztv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Beyaz tv" group-title="HelgaIpTv",Beyaz tv
https://helga.iptv2022.com/beyaz_tv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Beyaz tv" tvg-logo="https://play-lh.googleusercontent.com/OYyWb0CbV7moC0vMYSWR-IPv2m1qckuV8uYFhACjomW9lDj-h1LJb6lqIzAbJDlR4KY" group-title="GinikoTv",Beyaz tv
https://tgn.bozztv.com/dvrfl05/gin-beyaztv/tracks-v1a1/mono.m3u8





#EXTINF:-1 tvg-id="1266" tvg-name="Tlc" tvg-logo="https://i.paste.pics/4a15cf6d76aaf3246f3a6cedd48e0ac9.png", Tlc * | CL
https://dogus-live.daioncdn.net/tlc/tlc_720p.m3u8
#EXTINF:-1 tvg-id="1420" tvg-name="Tv 6" tvg-logo="https://i2.paste.pics/3d543690d890b9a5918a8025aebcf2bc.png", Tv 6 * | CL
https://live.artidijitalmedya.com/artidijital_tivi6/tivi6/playlist.m3u8

#EXTINF:-1 tvg-id="1312" tvg-name="24 Tv" tvg-logo="https://i.paste.pics/8504c462729d61af6e1f0b59323f9a85.png", 24 Tv * | CL
https://turkmedya-live.ercdn.net/tv24/tv24_720p.m3u8
#EXTINF:-1 tvg-id="996" tvg-name="Akit Tv" tvg-logo="https://i2.paste.pics/f5a6133c6b0fcec076105dfd2508549c.png", Akit Tv * | CL
https://akittv-live.ercdn.net/akittv/akittv_720p.m3u8
#EXTINF:-1 tvg-id="1014" tvg-name="Bengu Turk" tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", Bengu Turk * | CL
https://ensonhaber-live.ercdn.net/benguturk/benguturk.m3u8
#EXTINF:-1 tvg-id="1016" tvg-name="Flash Haber" tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", Flash Haber * | CL
https://tgn.bozztv.com/dvrfl05/gin-flashtv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="1424" tvg-name="Turk Haber" tvg-logo="https://i2.paste.pics/d94a5f7f1913eea53167784065b56aee.png", Turk Haber * | CL
https://edge1.socialsmart.tv/turkhaber/bant1/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cnn türk" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRjQpazuGWaFtKTt4hu-N1BJkdtH3sl6jEQ&usqp=CAU" group-title="GinikoTv",Cnn türk
https://tgn.bozztv.com/dvrfl05/gin-cnnturk/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Flash tv" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCX5EuAGq3pZ8obo9bQiCWsdYK7PHWt4CwVA&s" group-title="GinikoTv",Flash tv
https://tgn.bozztv.com/dvrfl05/gin-flashtv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber türk" tvg-logo="https://store-images.s-microsoft.com/image/apps.17853.9007199266556213.66164210-aa51-4852-a838-11ba237eb590.be81052b-3dbb-4aa1-9179-ba040e7bc7a9?h=210" group-title="GinikoTv",Haber türk
https://tgn.bozztv.com/dvrfl05/gin-haberturk/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Halk tv" tvg-logo="https://pbs.twimg.com/profile_images/1664239311494033408/szCkhgAv_400x400.jpg?h=210" group-title="GinikoTv",Halk tv
https://tgn.bozztv.com/dvrfl05/gin-halktv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Halk tv" group-title="FullTv",Halk tv
https://c.fulltvizle.com/halk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ntv" tvg-logo="https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.youtube.com&client=VFE&size=64&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2fffff-no-rj" group-title="GinikoTv",Ntv
https://tgn.bozztv.com/dvrfl05/gin-ntvtv/tracks-v1a1/mono.m3u8



#EXTINF:-1 tvg-id="1195" tvg-name="Vivi Turk" tvg-logo="https://i2.paste.pics/8c05e352159b95f3dc0092a6149b3daf.png",Vivi Turk* | CL
https://stream.tiviturk.de/live/tiviturk.m3u8

#EXTINF:-1 tvg-id="349" tvg-name="Bein Haber" tvg-logo="https://i2.paste.pics/fef1c0d39162f064f634fd3250f23659.png", Bein Haber * | CL
https://tgn.bozztv.com/dvrfl05/gin-beinsportshaber/tracks-v1a1/mono.m3u8






#EXTINF:-1 tvg-id="1466" tvg-name="Kanald | f" group-title="Ulusal",Kanald | f
https://c.fulltvizle.com/kanald/index.m3u8
#EXTINF:-1 tvg-id="1467" tvg-name="Kanald | g" group-title="Ulusal",Kanald | g
https://helga.iptv2022.com/kanal_d/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Euro D" group-title="GinikoTv",Euro D
https://tgn.bozztv.com/dvrfl05/gin-eurod/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="KanalD" group-title="CanliTvFun",KanalD
https://yayin2.canlitv.fun/livetv/kanald.stream/master.m3u8






#EXTINF:-1 tvg-id="1480" tvg-name="Kanal7 | c" group-title="Ulusal",Kanal7 | c
https://tgn.bozztv.com/dvrfl05/gin-kanal7/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="1482" tvg-name="Kanal7 | e" group-title="Ulusal",Kanal7 | e
https://kanal7-live.daioncdn.net/kanal7/kanal7.m3u8


#EXTINF:-1 tvg-id="1486" tvg-name="Fox | c" group-title="Ulusal",Now| c
https://tgn.bozztv.com/trn03/gt-foxturktv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="1489" tvg-name="Fox | f" group-title="Ulusal",Now | f
https://yayin2.canlitv.fun/livetv/foxtv.stream/master.m3u8
#EXTINF:-1 tvg-id="1490" tvg-name="Fox | g" group-title="Ulusal",Now | g
https://c.fulltvizle.com/fox/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Fox | Now" group-title="FullTv",Fox | Now
https://c.fulltvizle.com/fox/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Fox tv" tvg-logo="https://i.turkiyegazetesi.com.tr/images/Resources/2015/5/8/700x266415_fox-tv_1.jpg" group-title="GinikoTv",Now tv
https://tgn.bozztv.com/trn03/gt-foxturktv/tracks-v1a1/mono.m3u8





#EXTINF:-1 tvg-id="155" tvg-name="A2 yedek" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RrFU73imLmT37YEFTog1FdmkE_pcnJwurw&s" group-title="GinikoTv",A2 yedek
https://tgn.bozztv.com/dvrfl05/gin-atva2/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ahaber" tvg-logo="https://pbs.twimg.com/profile_images/1626885016901808132/iXrZylss_400x400.jpg" group-title="GinikoTv",Ahaber
https://tgn.bozztv.com/dvrfl05/gin-ahaber/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="A haber" group-title="FullTv",A haber
https://c.fulltvizle.com/ahaber/index.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Altastv" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEjUGglvw1QvcQYEJDJGzLiTT5WWWZk0EZg&s" group-title="GinikoTv",Altastv
https://tgn.bozztv.com/dvrfl05/gin-altastv/tracks-v1a1/mono.m3u8



#EXTINF:-1 tvg-id="155" tvg-name="Aspor" tvg-logo="https://cdn6.aptoide.com/imgs/7/f/d/7fd636ea06646d1a9aaefe27a11dfb58_icon.png" group-title="GinikoTv",Aspor
https://tgn.bozztv.com/dvrfl05/gin-aspor/tracks-v1a1/mono.m3u8



#EXTINF:-1 tvg-id="155" tvg-name="Az tv" tvg-logo="https://abc.az/storage/abc/2020/december/25/aztv-logo.jpg" group-title="GinikoTv",Az tv
https://tgn.bozztv.com/dvrfl05/gin-aztvhd/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Beinsport haber" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbntdIv_BGoXSoyyys6F8QqPYm_57z6-LJgA&s" group-title="GinikoTv",Beinsport haber
https://tgn.bozztv.com/dvrfl05/gin-beinsportshaber/tracks-v1a1/mono.m3u8












#EXTINF:-1 tvg-id="155" tvg-name="Idman tv" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgVYFMducHmLHn2s_T5ZLb9qLoSe7pX16lDA&s" group-title="GinikoTv",Idman tv
https://tgn.bozztv.com/dvrfl05/gin-idmantv/tracks-v1a1/mono.m3u8



#EXTINF:-1 tvg-id="155" tvg-name="Kral pop" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVpKM2eqzr8gbcHydPlwkyy334C_hxz1nFyQ&sffff-no-rj" group-title="GinikoTv",Kral pop
https://tgn.bozztv.com/dvrfl05/gin-kralpop/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kral pop" group-title="Karışık kaynaklar",Kral pop
https://dogus-live.daioncdn.net/kralpoptv/kralpoptv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Power hd" tvg-logo="https://cdn.powergroup.com.tr/image/500x500/powerapp/channels/v3/logo_44.png?v=1IZE,URL&nfrp=2fffff-no-rj" group-title="GinikoTv",Power hd
https://tgn.bozztv.com/dvrfl05/gin-powerhd/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Power türk" tvg-logo="https://cdn.powergroup.com.tr/image/500x500/powerapp/channels/v3/logo_44.png?v=1IZE,URL&nfrp=2fffff-no-rj" group-title="GinikoTv",Power türk
https://tgn.bozztv.com/dvrfl05/gin-powerturk/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Nr1 türk" group-title="BluTv",Nr1 türk
https://nr1turk.blutv.com/blutv_n1turk/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Nr1" group-title="Karışık kaynaklar",Nr1
https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e17cd59e8b.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Nr1damar" group-title="Karışık kaynaklar",Nr1damar
https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e198784bdc_1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Nr1dance" group-title="Karışık kaynaklar",Nr1dance
https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e2aa8acf44_1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Mavikaradeniz" group-title="Karışık kaynaklar",Mavikaradeniz
https://live.artidijitalmedya.com/artidijital_mavikaradeniz/mavikaradeniz/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Mceu" group-title="Karışık kaynaklar",Mceu
https://rrr.sz.xlcdn.com/?account=mceutv&file=mc2&type=live&service=wowza&protocol=https&output=playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Isviçre tv" group-title="Karışık kaynaklar",Isviçre tv
https://i41.ozelip.com:3269/hybrid/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Finesttv" group-title="Karışık kaynaklar",Finesttv
https://media.finest.tv/hls/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tempo tv" group-title="HelgaIpTv",Tempo tv
https://helga.iptv2022.com/tempo_tv/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Powerakustik" group-title="Karışık kaynaklar",Powerakustik
https://listen.powerapp.com.tr/pturkakustik/akustik.smil/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Powerdance" group-title="Karışık kaynaklar",Powerdance
https://listen.powerapp.com.tr/dance/dance.smil/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Powerlove" group-title="Karışık kaynaklar",Powerlove
https://listen.powerapp.com.tr/plove/love.smil/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Powerslow" group-title="Karışık kaynaklar",Powerslow
https://listen.powerapp.com.tr/pturkslow/slow.smil/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Powertaptaze" group-title="Karışık kaynaklar",Powertaptaze
https://listen.powerapp.com.tr/pturktaptaze/taptaze.smil/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Powertürk" group-title="Karışık kaynaklar",Powertürk
https://livetv.powerapp.com.tr/powerturkTV/powerturkhd.smil/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Powertürktv" group-title="Karışık kaynaklar",Powertürktv
https://livetv.powerapp.com.tr/powerturkTV/powerturkhd.smil/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Powertv" group-title="Karışık kaynaklar",Powertv
https://livetv.powerapp.com.tr/powerTV/powerhd.smil/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rize türk" group-title="Karışık kaynaklar",Rize türk
https://yayin.rizeturk.com:3777/multi_web/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tempotv" group-title="Karışık kaynaklar",Tempotv
https://live.artidijitalmedya.com/artidijital_tempotv/tempotv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tempotv" group-title="Karışık kaynaklar",Tempotv
https://live.artidijitalmedya.com/artidijital_tempotv/tempotv/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tatlısestv" group-title="Karışık kaynaklar",Tatlısestv
https://live.artidijitalmedya.com/artidijital_tatlisestv/tatlisestv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rizetürk" group-title="Karışık kaynaklar",Rizetürk
https://yayin.rizeturk.com:3777/multi_web/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Metropoltv" group-title="Karışık kaynaklar",Metropoltv
https://edge1.socialsmart.tv/metropoltv/smil/metropoltv/bant1/chunks.m3u8?app=supersatforum








#EXTINF:-1 tvg-id="155" tvg-name="Cine1" group-title="Karışık kaynaklar",Cine1
https://live.artidijitalmedya.com/artidijital_cine1/cine1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cine5" group-title="Karışık kaynaklar",Cine5
https://cdn-cine5tv.yayin.com.tr/cine5tv/cine5tv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tivi 6" group-title="HelgaIpTv",Tivi 6
https://helga.iptv2022.com/tivi_6/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tivi6" group-title="Karışık kaynaklar",Tivi6
https://live.artidijitalmedya.com/artidijital_tivi6/tivi6/playlist.m3u8
















#EXTINF:-1 tvg-id="155" tvg-name="Mekke tv" group-title="GinikoTv",Mekke tv
https://trn03.tulix.tv/gin-saudiquran/index.m3u8








#EXTINF:-1 tvg-id="155" tvg-name="A2" group-title="FullTv",A2
https://c.fulltvizle.com/a2/index.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Tele1" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXViGyxWfrWCk0GY0-c17ikUc67f_wUg6Lw&s" group-title="GinikoTv",Tele1
https://tgn.bozztv.com/dvrfl05/gin-tele1/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Teve2" group-title="CanliTvFun",Teve2
https://yayin2.canlitv.fun/livetv/teve2.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt belgesel" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs8oBAb8rqHEL10nes5FCEkPCeUUKRTWG1ow&s" group-title="GinikoTv",Tgrt belgesel
https://tgn.bozztv.com/dvrfl05/gin-tgrtbelgesel/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt belgesel" group-title="CanliTvFun",Tgrt belgesel
https://yayin2.canlitv.fun/livetv/tgrtbelgesel.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt haber" group-title="CanliTvFun",Tgrt haber
https://yayin2.canlitv.fun/livetv/tgrthaber.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt eu" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3lABEz__rNNQssvdLnudafoVyBNQTDhwuuA&s" group-title="GinikoTv",Tgrt eu
https://tgn.bozztv.com/dvrfl05/gin-tgrteu/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt haber" tvg-logo="https://www.haber365.com.tr/img/tv/tv/tgrthaber.jpg" group-title="GinikoTv",Tgrt haber
https://tgn.bozztv.com/dvrfl05/gin-tgrthaber/tracks-v1a1/mono.m3u8






#EXTINF:-1 tvg-id="155" tvg-name="Tlc yedek" tvg-logo="https://yt3.googleusercontent.com/7-fGBxX6cWaBrdjk32N77kEm5dMWFVyKNyt3q5s9MW6xP_zbMTi7BoKzp8eLAatn7SL4G3LS=s900-c-k-c0x00ffffff-no-rj" group-title="GinikoTv",Tlc yedek
https://tgn.bozztv.com/trn03/gt-tlc/tracks-v1a1/mono.m3u8












#EXTINF:-1 tvg-id="155" tvg-name="Agro tv" group-title="BluTv",Agro tv
https://agrotv.blutv.com/blutv_agrotv/blutv_agrotv/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Eurosport1" group-title="BluTv",Eurosport1
https://eurosport1.blutv.com/blutv_eurosport1/smil:eurosport1.smil/playlist.m3u8






#EXTINF:-1 tvg-id="155" tvg-name="Cnn türk" group-title="HelgaIpTv",Cnn türk
https://helga.iptv2022.com/cnn_turk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cnn türk" group-title="FullTv",Cnn türk
https://c.fulltvizle.com/cnn/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber global" group-title="HelgaIpTv",Haber global
https://helga.iptv2022.com/haber_global/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber türk" group-title="HelgaIpTv",Haber türk
https://helga.iptv2022.com/haber_turk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber türk" group-title="FullTv",Haber türk
https://c.fulltvizle.com/haberturk/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber türk (test)" group-title="BluTv",Haber türk (test)
https://mnorigin-cmn-5.mncdn.com/haberturk_testt_dvr/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="24" group-title="BluTv",24
https://kanal24dvr.blutv.com/blutv_kanal24_dvr/live.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ülke tv" tvg-logo="https://egitim.tossfed.gov.tr/storage/2017/07/indir.png" group-title="GinikoTv",Ülke tv
https://tgn.bozztv.com/dvrfl05/gt-ulketv/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Flash tv" group-title="FullTv",Flash tv
https://c.fulltvizle.com/flash/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tele1" group-title="FullTv",Tele1
https://c.fulltvizle.com/tele1/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanalavrupa" group-title="Karışık kaynaklar",Kanalavrupa
https://api-tv27.yayin.com.tr/kanalavrupa/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber global" group-title="Karışık kaynaklar",Haber global
https://tv.ensonhaber.com/haberglobal/haberglobal.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haber türk" group-title="Karışık kaynaklar",Haber türk
https://ciner-live.daioncdn.net/haberturktv/haberturktv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt haber" group-title="Karışık kaynaklar",Tgrt haber
https://tgrthaber-live.daioncdn.net/tgrthaber/tgrthaber.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tgrt haber" group-title="Karışık kaynaklar",Tgrt haber
https://canli.tgrthaber.com/tgrt.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Th türkhaber" group-title="Karışık kaynaklar",Th türkhaber
https://edge1.socialsmart.tv/turkhaber/bant1/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tlc" group-title="Karışık kaynaklar",Tlc
https://dogus-live.daioncdn.net/tlc/tlc.m3u8





#EXTINF:-1 tvg-id="155" tvg-name="Beinsport haber" group-title="CanliTvFun",Beinsport haber
https://yayin2.canlitv.fun/livetv/beinsporthaber.stream/master.m3u8



#EXTINF:-1 tvg-id="155" tvg-name="Cbc" group-title="CanliTvFun",Cbc
https://yayin2.canlitv.fun/livetv/cbc.stream/master.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cbc sport" group-title="CanliTvFun",Cbc sport
https://yayin2.canlitv.fun/livetv/cbcsport.stream/master.m3u8




































#EXTINF:-1 tvg-id="155" tvg-name="Aksu tv" group-title="HelgaIpTv",Aksu tv
https://helga.iptv2022.com/aksu_tv/index.m3u8



#EXTINF:-1 tvg-id="155" tvg-name="Bir tv" group-title="HelgaIpTv",Bir tv
https://helga.iptv2022.com/bir_tv/index.m3u8




#EXTINF:-1 tvg-id="155" tvg-name="Kanal v" group-title="HelgaIpTv",Kanal v
https://helga.iptv2022.com/kanal_v/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Olay türk" group-title="HelgaIpTv",Olay türk
https://helga.iptv2022.com/OlayTurk_TV/index.m3u8







#EXTINF:-1 tvg-id="155" tvg-name="Tv100" group-title="HelgaIpTv",Tv100
https://helga.iptv2022.com/tv_100/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Agrotv" group-title="Karışık kaynaklar",Agrotv
https://yayin30.haber100.com/live/agrotv/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Akittv" group-title="Karışık kaynaklar",Akittv
https://akittv-live.ercdn.net/akittv/akittv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Aksutv" group-title="Karışık kaynaklar",Aksutv
https://live.artidijitalmedya.com/artidijital_aksutv/aksutv/playlist.m3u8




#EXTINF:-1 tvg-id="155" tvg-name="Anadolutv" group-title="Karışık kaynaklar",Anadolutv
https://live.artidijitalmedya.com/artidijital_anadolunet/anadolunet/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Angaratv" group-title="Karışık kaynaklar",Angaratv
https://angr.radyotvonline.net/webtv/smil:kecioren.smil/chunklist_w976368300_b3268000_sltur.m3u8



#EXTINF:-1 tvg-id="155" tvg-name="Bengü türk" group-title="Karışık kaynaklar",Bengü türk
https://ensonhaber-live.ercdn.net/benguturk/benguturk.m3u8






#EXTINF:-1 tvg-id="155" tvg-name="Brt1" group-title="Karışık kaynaklar",Brt1
https://sc-kuzeykibrissmarttv.ercdn.net/brt1hd/bant1/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Brt2" group-title="Karışık kaynaklar",Brt2
https://sc-kuzeykibrissmarttv.ercdn.net/brt2hd/bant1/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Brtv" group-title="Karışık kaynaklar",Brtv
https://live.artidijitalmedya.com/artidijital_brtv/brtv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Bursalinetv" group-title="Karışık kaynaklar",Bursalinetv
https://edge1.socialsmart.tv/linetv/bant1/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Bursaon6tv" group-title="Karışık kaynaklar",Bursaon6tv
https://live.artidijitalmedya.com/artidijital_kanal16/kanal16/playlist.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Çaytv" group-title="Karışık kaynaklar",Çaytv
https://edge1.socialsmart.tv/caytv/bant1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Çiftçitv" group-title="Karışık kaynaklar",Çiftçitv
https://live.artidijitalmedya.com/artidijital_ciftcitv/ciftcitv/chunks.m3u8







#EXTINF:-1 tvg-id="155" tvg-name="Dehatv" group-title="Karışık kaynaklar",Dehatv
https://live.artidijitalmedya.com/artidijital_dehatv/dehatv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Denizpostası" group-title="Karışık kaynaklar",Denizpostası
https://live.artidijitalmedya.com/artidijital_denizpostasi/denizpostasi/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Derintv" group-title="Karışık kaynaklar",Derintv
https://cdn1-derintv.yayin.com.tr/derintv/derintv/chunklist_w1486394141_b1796000.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Dimtv" group-title="Karışık kaynaklar",Dimtv
https://live.artidijitalmedya.com/artidijital_dimtv/dimtv/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Diyanettv" group-title="Karışık kaynaklar",Diyanettv
https://eustr73.mediatriple.net/videoonlylive/mtikoimxnztxlive/broadcast_5e3bf95a47e07.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Dizi tv" group-title="Karışık kaynaklar",Dizi tv
https://playlist.fasttvcdn.com/pl/rfrk9821hdy9dayo8wfyha/dizi-tv/playlist/0.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Dmax" group-title="Karışık kaynaklar",Dmax
https://dogus-live.daioncdn.net/dmax/dmax.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Dosttv" group-title="Karışık kaynaklar",Dosttv
https://dost.stream.emsal.im/tv/live.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Edessatvurfa" group-title="Karışık kaynaklar",Edessatvurfa
https://tv170.radyotelekom.com.tr:21764/edessatv/edessatv/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Edirnetv" group-title="Karışık kaynaklar",Edirnetv
https://yayin.edirnetv.com:8088/hls/etvcanliyayin.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Ekoltv" group-title="Karışık kaynaklar",Ekoltv
https://ekoltv-live.ercdn.net/ekoltv/ekoltv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ercistv" group-title="Karışık kaynaklar",Ercistv
https://cdn1-ercistv.yayin.com.tr/ercistv/amlst:ercistv/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ercistv" group-title="Karışık kaynaklar",Ercistv
https://cdn1-ercistv.yayin.com.tr/ercistv/amlst:ercistv/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Erciyestv" group-title="Karışık kaynaklar",Erciyestv
https://live.artidijitalmedya.com/artidijital_erciyestv/erciyestv/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ertv" group-title="Karışık kaynaklar",Ertv
https://live.artidijitalmedya.com/artidijital_ertv_new/ertv/playlist.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Estv" group-title="Karışık kaynaklar",Estv
https://live.artidijitalmedya.com/artidijital_estv/estv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Etvkayseri" group-title="Karışık kaynaklar",Etvkayseri
https://live.artidijitalmedya.com/artidijital_etv/etv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Etvmanisa" group-title="Karışık kaynaklar",Etvmanisa
https://edge1.socialsmart.tv/manisaetv/bant1/playlist.m3u8



#EXTINF:-1 tvg-id="155" tvg-name="Fb Tv" group-title="Karışık kaynaklar",Fb Tv
https://1hskrdto.rocketcdn.com/fenerbahcetv.smil/chunklist_b996000_sltur.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Fbtv" group-title="Karışık kaynaklar",Fbtv
https://1hskrdto.rocketcdn.com/fenerbahcetv.smil/playlist.m3u8




#EXTINF:-1 tvg-id="155" tvg-name="Frttv" group-title="Karışık kaynaklar",Frttv
https://edge1.socialsmart.tv/frttv/bant1/chunks.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Goncatv" group-title="Karışık kaynaklar",Goncatv
https://edge1.socialsmart.tv/goncatv/bant1/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Grtgaziantep" group-title="Karışık kaynaklar",Grtgaziantep
https://live.artidijitalmedya.com/artidijital_grt/grt/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Güneydogutv" group-title="Karışık kaynaklar",Güneydogutv
https://edge1.socialsmart.tv/gtv/bant1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Güneytv" group-title="Karışık kaynaklar",Güneytv
https://edge1.socialsmart.tv/guneytv/bant1/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Gurbet24tv" group-title="Karışık kaynaklar",Gurbet24tv
http://cdn-gurbet24.yayin.com.tr/gurbet24/gurbet24/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Haber61" group-title="Karışık kaynaklar",Haber61
https://win8.yayin.com.tr/haber61tv/smil:haber61tv.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Haditv" group-title="Karışık kaynaklar",Haditv
https://live.ishiacloud.com/hls/37166b77-128d-425c-91bf-8195071c217d_720p.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Hrtakdeniz" group-title="Karışık kaynaklar",Hrtakdeniz
https://vod02.cdn.web.tv/cn/ov/cnovvu97lqw_,240,360,480,.mp4.urlset/playlist-f3-v1-a1.m3u8



#EXTINF:-1 tvg-id="155" tvg-name="Hunattv" group-title="Karışık kaynaklar",Hunattv
https://live.artidijitalmedya.com/artidijital_hunattv/hunattv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Iceltv" group-title="Karışık kaynaklar",Iceltv
https://edge1.socialsmart.tv/iceltv/bant1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ikratv" group-title="Karışık kaynaklar",Ikratv
https://live.artidijitalmedya.com/artidijital_diyartv/diyartv/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ilktv" group-title="Karışık kaynaklar",Ilktv
https://592f1881b3d5f.streamlock.net:1443/santraltv_294/santraltv_294/playlist.m3u8




#EXTINF:-1 tvg-id="155" tvg-name="Izmirtime35" group-title="Karışık kaynaklar",Izmirtime35
https://cdn-time35tv.yayin.com.tr/time35tv/time35tv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kabe canlı" group-title="Karışık kaynaklar",Kabe canlı
https://al-ekhbaria-prod-dub.shahid.net/out/v1/9885cab0a3ec4008b53bae57a27ca76b/index.m3u8





#EXTINF:-1 tvg-id="155" tvg-name="Kanal3" group-title="Karışık kaynaklar",Kanal3
https://live.artidijitalmedya.com/artidijital_kanal3/kanal3/playlist.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Kanal12" group-title="Karışık kaynaklar",Kanal12
https://live.artidijitalmedya.com/artidijital_kanal12/kanal12/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Kanal15" group-title="Karışık kaynaklar",Kanal15
https://live.artidijitalmedya.com/artidijital_kanal15/kanal15/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal23" group-title="Karışık kaynaklar",Kanal23
https://live.artidijitalmedya.com/artidijital_kanal23/kanal23/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal23" group-title="Karışık kaynaklar",Kanal23
https://live.artidijitalmedya.com/artidijital_kanal23/kanal23/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal26" group-title="Karışık kaynaklar",Kanal26
https://live.artidijitalmedya.com/artidijital_kanal26/kanal26/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal26" group-title="Karışık kaynaklar",Kanal26
https://live.artidijitalmedya.com/artidijital_kanal26/kanal26/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal28" group-title="Karışık kaynaklar",Kanal28
https://ip252.ozelip.com:22524/kanalg/kanalg/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal32" group-title="Karışık kaynaklar",Kanal32
https://edge1.socialsmart.tv/kanal32/bant1/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal34" group-title="Karışık kaynaklar",Kanal34
https://live.euromediacenter.com/kanal34/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal53" group-title="Karışık kaynaklar",Kanal53
https://kanal53.ozelip.com:3448/hybrid/play.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal53" group-title="Karışık kaynaklar",Kanal53
https://kanal53.ozelip.com:3448/hybrid/play.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Kanal58" group-title="Karışık kaynaklar",Kanal58
https://live.artidijitalmedya.com/artidijital_kanal58/kanal58/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal58" group-title="Karışık kaynaklar",Kanal58
https://live.artidijitalmedya.com/artidijital_kanal58/kanal58/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal68" group-title="Karışık kaynaklar",Kanal68
https://live.artidijitalmedya.com/artidijital_kanal68/kanal68/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanal68" group-title="Karışık kaynaklar",Kanal68
https://live.artidijitalmedya.com/artidijital_kanal68/kanal68/chunks.m3u8




#EXTINF:-1 tvg-id="155" tvg-name="Kanalfırat" group-title="Karışık kaynaklar",Kanalfırat
https://live.artidijitalmedya.com/artidijital_kanalfirat/kanalfirat/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Kanalon4" group-title="Karışık kaynaklar",Kanalon4
https://edge1.socialsmart.tv/on4/bant1/chunks.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Kanalt" group-title="Karışık kaynaklar",Kanalt
https://sc-kuzeykibrissmarttv.ercdn.net/kanalt/bantp1/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanalurfa" group-title="Karışık kaynaklar",Kanalurfa
https://edge1.socialsmart.tv/kanalurfa/bant1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanalv" group-title="Karışık kaynaklar",Kanalv
https://waw1.artiyerelmedya.net/kanalv/bant1/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kanalz" group-title="Karışık kaynaklar",Kanalz
https://live.artidijitalmedya.com/artidijital_kanalz/kanalz/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kardelentv" group-title="Karışık kaynaklar",Kardelentv
https://edge1.socialsmart.tv/kardelentv/bant1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kardeştv" group-title="Karışık kaynaklar",Kardeştv
https://yayin30.haber100.com/live/kardestv/chunklist.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Kaytv" group-title="Karışık kaynaklar",Kaytv
https://live.artidijitalmedya.com/artidijital_kaytv/kaytv1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kıbrıs genç" group-title="Karışık kaynaklar",Kıbrıs genç
https://sc-kuzeykibrissmarttv.ercdn.net/kibrisgenctv/bant1/chunklist_w248136165.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kocaelitv" group-title="Karışık kaynaklar",Kocaelitv
https://edge1.socialsmart.tv/kocaelitv/bant1/playlist.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Kudustv" group-title="Karışık kaynaklar",Kudustv
https://yayin30.haber100.com/live/kudustv/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Kuzey kıbrıs" group-title="Karışık kaynaklar",Kuzey kıbrıs
https://kuzeykibris.tv/m3u8/kktv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Lalegül" group-title="Karışık kaynaklar",Lalegül
https://lbl.netmedya.net/hls/lalegultv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Lifetv" group-title="Karışık kaynaklar",Lifetv
https://live.artidijitalmedya.com/artidijital_lifetv/lifetv/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Lifetv" group-title="Karışık kaynaklar",Lifetv
https://live.artidijitalmedya.com/artidijital_lifetv/lifetv/playlist.m3u8






#EXTINF:-1 tvg-id="155" tvg-name="Meltemtv" group-title="Karışık kaynaklar",Meltemtv
https://vhxyrsly.rocketcdn.com/meltemtv/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Mercantv" group-title="Karışık kaynaklar",Mercantv
https://live.artidijitalmedya.com/artidijital_mercantv/mercantv/chunks.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Muğlatürk" group-title="Karışık kaynaklar",Muğlatürk
https://edge1.socialsmart.tv/muglaturk/bant1/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Noratv" group-title="Karışık kaynaklar",Noratv
https://live.artidijitalmedya.com/artidijital_noratv/noratv/chunks.m3u8







#EXTINF:-1 tvg-id="155" tvg-name="Olaytürk" group-title="Karışık kaynaklar",Olaytürk
https://live.artidijitalmedya.com/artidijital_olayturk/olayturk/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Ordubeltv" group-title="Karışık kaynaklar",Ordubeltv
https://cdn1-ordubeltv.yayin.com.tr/ordubeltv/ordubeltv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Pazarcık" group-title="Karışık kaynaklar",Pazarcık
https://pazarciktv.ozelip.net:3962/hybrid/play.m3u8






#EXTINF:-1 tvg-id="155" tvg-name="Semerkandtv" group-title="Karışık kaynaklar",Semerkandtv
https://b01c02nl.mediatriple.net/videoonlylive/mtisvwurbfcyslive/broadcast_58d915bd40efc.smil/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Serhattv" group-title="Karışık kaynaklar",Serhattv
https://cdn-kanaltvo.yayin.com.tr/kanaltvo/kanaltvo/playlist.m3u8






#EXTINF:-1 tvg-id="155" tvg-name="Simtv" group-title="Karışık kaynaklar",Simtv
https://sc-kuzeykibrissmarttv.ercdn.net/simtv/bantp1/chunklis.m3u8




#EXTINF:-1 tvg-id="155" tvg-name="Sports tv" group-title="Karışık kaynaklar",Sports tv
https://live.sportstv.com.tr/hls/low/sportstv_fhd/index.m3u8






#EXTINF:-1 tvg-id="155" tvg-name="Suntv" group-title="Karışık kaynaklar",Suntv
https://live.artidijitalmedya.com/artidijital_sunrtv/sunrtv/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Tarımtv" group-title="Karışık kaynaklar",Tarımtv
https://content.tvkur.com/l/c7e1da7mm25p552d9u9g/index-1080p.m3u8














#EXTINF:-1 tvg-id="155" tvg-name="Tontv" group-title="Karışık kaynaklar",Tontv
https://live.artidijitalmedya.com/artidijital_tontv/tontv/playlist.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Trakyatürk" group-title="Karışık kaynaklar",Trakyatürk
https://live.artidijitalmedya.com/artidijital_trakyaturk/trakyaturk/playlist.m3u8





#EXTINF:-1 tvg-id="155" tvg-name="Tv3" group-title="Karışık kaynaklar",Tv3
https://live.artidijitalmedya.com/artidijital_tv3/tv3/playlist.m3u8







#EXTINF:-1 tvg-id="155" tvg-name="Tv25" group-title="Karışık kaynaklar",Tv25
https://cdn-tv25.yayin.com.tr/tv25/tv25/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tv41" group-title="Karışık kaynaklar",Tv41
https://live.artidijitalmedya.com/artidijital_tv41/tv41/playlist.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Tv52" group-title="Karışık kaynaklar",Tv52
https://edge1.socialsmart.tv/tv52/bant1/playlist.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Tv2020" group-title="Karışık kaynaklar",Tv2020
https://sc-kuzeykibrissmarttv.ercdn.net/tv2020/bantp1/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tva" group-title="Karışık kaynaklar",Tva
https://live.artidijitalmedya.com/artidijital_tva/tva/chunks.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tvnet" group-title="Karışık kaynaklar",Tvnet
https://mn-nl.mncdn.com/tvnet/tvnet/chunklist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Ülketv" group-title="Karışık kaynaklar",Ülketv
https://livetv.radyotvonline.net/kanal7live/ulketv/playlist.m3u8




#EXTINF:-1 tvg-id="155" tvg-name="Urfahaber" group-title="Karışık kaynaklar",Urfahaber
https://ruhatv.ozelip.com:3483/stream/play.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Vrt" group-title="Karışık kaynaklar",Vrt
https://vrttv.ozelip.com:3644/multi_web/play_720.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Vuslattv" group-title="Karışık kaynaklar",Vuslattv
https://live.artidijitalmedya.com/artidijital_vuslattv/vuslattv/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Womankadın" group-title="Karışık kaynaklar",Womankadın
https://s01.webcaster.cloud/wmtv/live_1080p.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Womantv" group-title="Karışık kaynaklar",Womantv
https://s01.webcaster.cloud/wmtv/live_1080p.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Worldtürk" group-title="Karışık kaynaklar",Worldtürk
https://live.artidijitalmedya.com/artidijital_worldturk/worldturk/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="5ocak" group-title="Karışık kaynaklar",5ocak
http://stream.tvcdn.net/yerel/5-ocak-tv.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="24" group-title="Karışık kaynaklar",24
https://turkmedya-live.ercdn.net/tv24/tv24.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="24 | 2" group-title="Karışık kaynaklar",24 | 2
https://mn-nl.mncdn.com/kanal24/kanal24.smil/chunklist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="360" group-title="Karışık kaynaklar",360
https://turkmedya-live.ercdn.net/tv360/tv360.m3u8














#EXTINF:-1 tvg-id="155" tvg-name="Cloud12" group-title="Usa",Cloud12
https://cloudvideo.servers10.com:8081/8012/index.m3u8



#EXTINF:-1 tvg-id="155" tvg-name="Cloud24" group-title="Usa",Cloud24
https://cloudvideo.servers10.com:8081/8024/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud26" group-title="Usa",Cloud26
https://cloudvideo.servers10.com:8081/8026/index.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Cloud32" group-title="Usa",Cloud32
https://cloudvideo.servers10.com:8081/8032/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud34" group-title="Usa",Cloud34
https://cloudvideo.servers10.com:8081/8034/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud36" group-title="Usa",Cloud36
https://cloudvideo.servers10.com:8081/8036/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud38" group-title="Usa",Cloud38
https://cloudvideo.servers10.com:8081/8038/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud40" group-title="Usa",Cloud40
https://cloudvideo.servers10.com:8081/8040/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud44" group-title="Usa",Cloud44
https://cloudvideo.servers10.com:8081/8044/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud46" group-title="Usa",Cloud46
https://cloudvideo.servers10.com:8081/8046/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud48" group-title="Usa",Cloud48
https://cloudvideo.servers10.com:8081/8048/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud50" group-title="Usa",Cloud50
https://cloudvideo.servers10.com:8081/8050/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud54" group-title="Usa",Cloud54
https://cloudvideo.servers10.com:8081/8054/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud58" group-title="Usa",Cloud58
https://cloudvideo.servers10.com:8081/8058/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud62" group-title="Usa",Cloud62
https://cloudvideo.servers10.com:8081/8062/index.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Cloud68" group-title="Usa",Cloud68
https://cloudvideo.servers10.com:8081/8068/index.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Cloud70" group-title="Usa",Cloud70
https://cloudvideo.servers10.com:8081/8070/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud70" group-title="Usa",Cloud70
https://cloudvideo.servers10.com:8081/8072/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud74" group-title="Usa",Cloud74
https://cloudvideo.servers10.com:8081/8074/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud76" group-title="Usa",Cloud76
https://cloudvideo.servers10.com:8081/8076/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud78" group-title="Usa",Cloud78
https://cloudvideo.servers10.com:8081/8078/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud92" group-title="Usa",Cloud92
https://cloudvideo.servers10.com:8081/8092/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud94" group-title="Usa",Cloud94
https://cloudvideo.servers10.com:8081/8094/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud102" group-title="Usa",Cloud102
https://cloudvideo.servers10.com:8081/8102/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud104" group-title="Usa",Cloud104
https://cloudvideo.servers10.com:8081/8104/index.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Cloud112" group-title="Usa",Cloud112
https://cloudvideo.servers10.com:8081/8112/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud116" group-title="Usa",Cloud116
https://cloudvideo.servers10.com:8081/8116/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud118" group-title="Usa",Cloud118
https://cloudvideo.servers10.com:8081/8118/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud120" group-title="Usa",Cloud120
https://cloudvideo.servers10.com:8081/8120/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud122" group-title="Usa",Cloud122
https://cloudvideo.servers10.com:8081/8122/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud126" group-title="Usa",Cloud126
https://cloudvideo.servers10.com:8081/8126/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud128" group-title="Usa",Cloud128
https://cloudvideo.servers10.com:8081/8128/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud130" group-title="Usa",Cloud130
https://cloudvideo.servers10.com:8081/8130/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud132" group-title="Usa",Cloud132
https://cloudvideo.servers10.com:8081/8132/index.m3u8





#EXTINF:-1 tvg-id="155" tvg-name="Cloud142" group-title="Usa",Cloud142
https://cloudvideo.servers10.com:8081/8142/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud144" group-title="Usa",Cloud144
https://cloudvideo.servers10.com:8081/8144/index.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Cloud148" group-title="Usa",Cloud148
https://cloudvideo.servers10.com:8081/8148/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud150" group-title="Usa",Cloud150
https://cloudvideo.servers10.com:8081/8150/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud152" group-title="Usa",Cloud152
https://cloudvideo.servers10.com:8081/8152/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud154" group-title="Usa",Cloud154
https://cloudvideo.servers10.com:8081/8154/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud158" group-title="Usa",Cloud158
https://cloudvideo.servers10.com:8081/8158/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud168" group-title="Usa",Cloud168
https://cloudvideo.servers10.com:8081/8168/index.m3u8



#EXTINF:-1 tvg-id="155" tvg-name="Cloud178" group-title="Usa",Cloud178
https://cloudvideo.servers10.com:8081/8178/index.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Cloud184" group-title="Usa",Cloud184
https://cloudvideo.servers10.com:8081/8184/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud186" group-title="Usa",Cloud186
https://cloudvideo.servers10.com:8081/8186/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud188" group-title="Usa",Cloud188
https://cloudvideo.servers10.com:8081/8188/index.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Cloud194" group-title="Usa",Cloud194
https://cloudvideo.servers10.com:8081/8194/index.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Cloud198" group-title="Usa",Cloud198
https://cloudvideo.servers10.com:8081/8198/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud202" group-title="Usa",Cloud202
https://cloudvideo.servers10.com:8081/8202/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud204" group-title="Usa",Cloud204
https://cloudvideo.servers10.com:8081/8204/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud212" group-title="Usa",Cloud212
https://cloudvideo.servers10.com:8081/8212/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Cloud256" group-title="Usa",Cloud256
https://cloudvideo.servers10.com:8081/8256/index.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Az tv" group-title="Azerbaycan",Az tv
http://str.yodacdn.net/aztv/index.m3u8






#EXTINF:-1 tvg-id="155" tvg-name="Arb 24" group-title="Azerbaycan",Arb 24
http://str.yodacdn.net/arb24/index.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Xazar" group-title="Azerbaycan",Xazar
http://str.yodacdn.net/xazar/index.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Real" group-title="Azerbaycan",Real
http://str.yodacdn.net/real/index.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Gebele tv" group-title="Azerbaycan",Gebele tv
https://qebeletv.ozelip.net:3918/stream/play.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Baku tv" group-title="Azerbaycan",Baku tv
https://rtmp.baku.tv/live/bakutv_720p.m3u8




#EXTINF:-1 tvg-id="155" tvg-name="Alvin tv" group-title="Azerbaycan",Alvin tv
http://cdn10-alvinchannel.yayin.com.tr/alvinchannel/alvinchannel/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Live tv" group-title="Azerbaycan",Live tv
https://tv.mobyservice.ru/livetv/index.m3u8







#EXTINF:-1 tvg-id="155" tvg-name="Nature Scape" group-title="Relax Room",Nature Scape
https://stream.ads.ottera.tv/cl/240211cn4j7g65sur7fq378vpg/1920x1080_5711200_3_f.m3u8




#EXTINF:-1 tvg-id="155" tvg-name="Ding dong" group-title="Alb / Kos / It / De",Ding dong
https://eu5cdn.overotm.com/abr_amd13/dingdong/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Clover" group-title="Alb / Kos / It / De",Clover
https://eu5cdn.overotm.com/abr_amd13/clover/playlist.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Action" group-title="Alb / Kos / It / De",Action
https://eu5cdn.overotm.com/abr_gpu3/action/playlist.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Drama" group-title="Alb / Kos / It / De",Drama
https://eu5cdn.overotm.com/abr_gpu2/drama/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Comedy" group-title="Alb / Kos / It / De",Comedy
https://eu5cdn.overotm.com/abr_gpu3/comedy/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Serial" group-title="Alb / Kos / It / De",Serial
https://eu5cdn.overotm.com/abr_gpu2/serial/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Prime1" group-title="Alb / Kos / It / De",Prime1
https://eu5cdn.overotm.com/abr_gpu2/prime1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Prime2" group-title="Alb / Kos / It / De",Prime2
https://eu5cdn.overotm.com/abr_gpu3/prime2/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Doc1" group-title="Alb / Kos / It / De",Doc1
https://eu5cdn.overotm.com/abr_gpu3/doc1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Doc2" group-title="Alb / Kos / It / De",Doc2
https://eu5cdn.overotm.com/abr_gpu3/doc2/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Isp hits" group-title="Alb / Kos / It / De",Isp hits
https://eu5cdn.overotm.com/abr_amd20/gbcgodfather/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Isp dramë" group-title="Alb / Kos / It / De",Isp dramë
https://eu5cdn.overotm.com/abr_amd20/gbcsofa/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Isp popullore" group-title="Alb / Kos / It / De",Isp popullore
https://eu5cdn.overotm.com/harejatv_120/Stream1_720p/playlist.m3u8






#EXTINF:-1 tvg-id="155" tvg-name="Tring sport news" group-title="Alb / Kos / It / De",Tring sport news
https://eu5cdn.overotm.com/abr_srv695/tsnews/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring sport1" group-title="Alb / Kos / It / De",Tring sport1
https://eu5cdn.overotm.com/abr_amd24/ts1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring sport2" group-title="Alb / Kos / It / De",Tring sport2
https://eu5cdn.overotm.com/abr_amd24/ts2/playlist.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Tring sport4" group-title="Alb / Kos / It / De",Tring sport4
https://eu5cdn.overotm.com/abr_srv641/ts4/playlist.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Eurosport1" group-title="Alb / Kos / It / De",Eurosport1
https://eu5cdn.overotm.com/abr_ovh003/eurosport1/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Eurosport2" group-title="Alb / Kos / It / De",Eurosport2
https://eu5cdn.overotm.com/abr_ovh003/eurosport2/playlist.m3u8



#EXTINF:-1 tvg-id="155" tvg-name="News24" group-title="Alb / Kos / It / De",News24
https://eu5cdn.overotm.com/abr_ovh003/news24hd/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Tring action" group-title="Alb / Kos / It / De",Tring action
https://eu5cdn.overotm.com/abr_srv695/tringaction/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring fantasy" group-title="Alb / Kos / It / De",Tring fantasy
https://eu5cdn.overotm.com/abr_srv695/tringfantasy/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Tring kids" group-title="Alb / Kos / It / De",Tring kids
https://eu5cdn.overotm.com/abr_srv695/tringkids/playlist.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Tring comedy" group-title="Alb / Kos / It / De",Tring comedy
https://eu5cdn.overotm.com/abr_srv695/tringcomedy/playlist.m3u8

#EXTINF:-1 tvg-id="155" tvg-name="Tring planet" group-title="Alb / Kos / It / De",Tring planet
https://eu5cdn.overotm.com/abr_srv695/tringplanet/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring shqip" group-title="Alb / Kos / It / De",Tring shqip
https://eu5cdn.overotm.com/abr_srv695/tringshqip/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring super" group-title="Alb / Kos / It / De",Tring super
https://eu5cdn.overotm.com/abr_srv695/tringsuper/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring tring" group-title="Alb / Kos / It / De",Tring tring
https://eu5cdn.overotm.com/abr_srv695/tringtring/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Tring world" group-title="Alb / Kos / It / De",Tring world
https://eu5cdn.overotm.com/abr_srv695/tringworld/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Vizion plus" group-title="Alb / Kos / It / De",Vizion plus
https://eu5cdn.overotm.com/abr_srv695/vizionplus/playlist.m3u8




#EXTINF:-1 tvg-id="155" tvg-name="Muse" group-title="Alb / Kos / It / De",Muse
https://eu5cdn.overotm.com/abr_srv693/muse/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rtsh2" group-title="Alb / Kos / It / De",Rtsh2
https://eu5cdn.overotm.com/abr_amd24/rtsh2/playlist.m3u8








#EXTINF:-1 tvg-id="155" tvg-name="Klan music" group-title="Alb / Kos / It / De",Klan music
https://eu5cdn.overotm.com/abr_amd23/klanmuzik/playlist.m3u8


#EXTINF:-1 tvg-id="155" tvg-name="Rai4" group-title="Alb / Kos / It / De",Rai4
https://eu5cdn.overotm.com/abr_amd10/rai4/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rai5" group-title="Alb / Kos / It / De",Rai5
https://eu5cdn.overotm.com/abr_amd10/rai5/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rai movie" group-title="Alb / Kos / It / De",Rai movie
https://eu5cdn.overotm.com/abr_amd10/raimovie/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rai premium" group-title="Alb / Kos / It / De",Rai premium
https://eu5cdn.overotm.com/abr_amd10/raipremium/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rai gulp" group-title="Alb / Kos / It / De",Rai gulp
https://eu5cdn.overotm.com/abr_amd09/raigulp/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rai yoyo" group-title="Alb / Kos / It / De",Rai yoyo
https://eu5cdn.overotm.com/abr_amd10/raiyoyo/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rai sport" group-title="Alb / Kos / It / De",Rai sport
https://eu5cdn.overotm.com/abr_amd10/raisport/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Rai scuola" group-title="Alb / Kos / It / De",Rai scuola
https://eu5cdn.overotm.com/abr_amd10/raiscuola/playlist.m3u8
#EXTINF:-1 tvg-id="155" tvg-name="Italia1" group-title="Alb / Kos / It / De",Italia1
https://eu5cdn.overotm.com/abr_amd09/italia1/playlist.m3u8




`

let parseM3u = m3utojson(m3u);