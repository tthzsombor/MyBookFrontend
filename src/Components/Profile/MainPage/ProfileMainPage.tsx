import { useContext } from "react";
import { ProfileNav } from "../Nav/ProfileNav";
import { ApiContext } from "../../../api";
import './ProfileMainPage.css';



/**
 * Designed Main Page for the user's profile
 */
export function ProfilMainPage() {
   {/* Used to access the ApiContext */ }
   const api = useContext(ApiContext)
   if (!api.currentUser) return null;


   //Make the page full screen
   function Teljes() {
      var el = document.querySelector('body');
      el?.requestFullscreen();
   }



   return <>
      <div  style={{overflow:"hidden"}} id="profilfooldal">
         <div id="content">
            <ProfileNav user={api.currentUser!} />
            <button id="fullscreenbutton" onClick={Teljes}><img style={{ height: 50, width: 50 }} src="https://static.thenounproject.com/png/56935-200.png" alt="teljes képernyő" /></button>
            <div className="centered">
               <h1>MyBook</h1>
               <h3>Alakítsd ki saját online könyvtárad</h3>
            </div>
            <div style={{marginTop: 80}} className="wrapper-images">
               {/* 5 images by row */}
               <div className="images-line">
                  <>
                     <a href="https://www.libri.hu/konyv/A-ragyogas-2002.html"target="_blank">
                     <div
                        className="line"
                        style={{
                           backgroundImage:
                              "url(https://marvin.bline.hu/product_images/420/B928483.JPG)"
                        }}
                     >
                        <div
                           className="img"
                           style={{
                              backgroundImage:
                                 "url(https://marvin.bline.hu/product_images/420/B928483.JPG)"
                           }}
                        >
                        </div>
                     </div>
                     </a>
                     <a href="https://www.libri.hu/konyv/albert_camus.a-pestis--1.html" target="_blank">
                     <div
                        className="line"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/87/2/5696284_4.jpg)"
                        }}
                     >
                        <div
                           className="img"
                           style={{
                              backgroundImage:
                                 "url(https://s01.static.libri.hu/cover/87/2/5696284_4.jpg)"
                           }}
                        />
                     </div>
                     </a>
                  </>
                 <a href="https://www.libri.hu/konyv/fjodor_mihajlovics_dosztojevszkij.bun-es-bunhodes--7.html"target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://lira.erbacdn.net/upload/M_28/rek1/508/3423508.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://lira.erbacdn.net/upload/M_28/rek1/508/3423508.jpg)"
                        }}
                     />
                  </div>
                 </a>
                  <a href="https://www.libri.hu/konyv/marai_sandor.a-gyertyak-csonkig-egnek-46.html" target="_blank">
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_805948.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_805948.jpg)"
                        }}
                     />
                  </div>
                  </a>
                 <a href="https://www.libri.hu/konyv/joseph_campbell.az-ezerarcu-hos--1.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/57/e/9501870_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/57/e/9501870_4.jpg)"
                        }}
                     />
                  </div>
                 </a>
                 <a href="https://www.libri.hu/konyv/albert_camus.a-pestis--1.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/87/2/5696284_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/87/2/5696284_4.jpg)"
                        }}
                     />
                  </div>
                 </a>
                 <a href="https://www.libri.hu/konyv/A-ragyogas-2002.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://marvin.bline.hu/product_images/420/B928483.JPG)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://marvin.bline.hu/product_images/420/B928483.JPG)"
                        }}
                     >

                     </div>
                  </div>
                 </a>
                  <a href="https://www.libri.hu/konyv/fjodor_mihajlovics_dosztojevszkij.bun-es-bunhodes--7.html" target="_blank">
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://lira.erbacdn.net/upload/M_28/rek1/508/3423508.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://lira.erbacdn.net/upload/M_28/rek1/508/3423508.jpg)"
                        }}
                     />
                  </div>
                  </a>
                 <a href="https://www.libri.hu/konyv/marai_sandor.a-gyertyak-csonkig-egnek-46.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_805948.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_805948.jpg)"
                        }}
                     />
                  </div>
                 </a>
                 <a href="https://www.libri.hu/konyv/joseph_campbell.az-ezerarcu-hos--1.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/57/e/9501870_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/57/e/9501870_4.jpg)"
                        }}
                     />
                  </div>
                 </a>
                  
                  <a href="https://www.libri.hu/konyv/albert_camus.a-pestis--1.html" target="_blank">
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/87/2/5696284_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/87/2/5696284_4.jpg)"
                        }}
                     />
                  </div>
                  </a>
                 <a href="https://www.libri.hu/konyv/A-ragyogas-2002.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://marvin.bline.hu/product_images/420/B928483.JPG)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://marvin.bline.hu/product_images/420/B928483.JPG)"
                        }}
                     >

                     </div>
                  </div>
                 </a>
                  <a href="https://www.libri.hu/konyv/fjodor_mihajlovics_dosztojevszkij.bun-es-bunhodes--7.html" target="_blank">
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://lira.erbacdn.net/upload/M_28/rek1/508/3423508.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://lira.erbacdn.net/upload/M_28/rek1/508/3423508.jpg)"
                        }}
                     />
                  </div>
                  </a>
                  <a href="https://www.libri.hu/konyv/marai_sandor.a-gyertyak-csonkig-egnek-46.html" target="_blank">
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_805948.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_805948.jpg)"
                        }}
                     />
                  </div>
                  </a>
                 <a href="https://www.libri.hu/konyv/joseph_campbell.az-ezerarcu-hos--1.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/57/e/9501870_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/57/e/9501870_4.jpg)"
                        }}
                     />
                  </div>
                 </a>
                 <a href="https://www.libri.hu/konyv/albert_camus.a-pestis--1.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/87/2/5696284_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/87/2/5696284_4.jpg)"
                        }}
                     />
                  </div>
                 </a>
               </div>


               {/*masodik sor */}
               <div className="images-line">
                 <a href="https://www.libri.hu/konyv/fjodor_mihajlovics_dosztojevszkij.ordogok-i-ii--3.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_776400.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_776400.jpg)"
                        }}
                     >

                     </div>
                  </div>
                 </a>
                <a href="https://www.libri.hu/konyv/orvos-toth_noemi.orokolt-sors--4.html" target="_blank">
                <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://lira.erbacdn.net/upload/M_28/rek1/400/3173400.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://lira.erbacdn.net/upload/M_28/rek1/400/3173400.jpg)"
                        }}
                     />
                  </div>
                </a>
                 <a href="https://www.libri.hu/konyv/stephen_hawking.rovid-valaszok-a-nagy-kerdesekre.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://lira.erbacdn.net/upload/M_28/rek1/145/1650145.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://lira.erbacdn.net/upload/M_28/rek1/145/1650145.jpg)"
                        }}
                     />
                  </div>
                 </a>
                 <a href="https://www.libri.hu/konyv/stephen_king.tortura--4.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_592918.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_592918.jpg)"
                        }}
                     />
                  </div>
                 </a>
                  <a href="https://www.libri.hu/konyv/franz_kafka.a-per--12.html" target="_blank">
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s06.static.libri.hu/cover/3d/a/9231498_5.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s06.static.libri.hu/cover/3d/a/9231498_5.jpg)"
                        }}
                     />
                  </div>
                  </a>
                <a href="https://www.libri.hu/konyv/fjodor_mihajlovics_dosztojevszkij.ordogok-i-ii--3.html" target="_blank">
                <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_776400.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_776400.jpg)"
                        }}
                     >
                     </div>
                  </div>
                </a>
                 <a href="https://www.libri.hu/konyv/orvos-toth_noemi.orokolt-sors--4.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://lira.erbacdn.net/upload/M_28/rek1/400/3173400.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://lira.erbacdn.net/upload/M_28/rek1/400/3173400.jpg)"
                        }}
                     />
                  </div>
                 </a>
                 <a href="https://www.libri.hu/konyv/stephen_hawking.rovid-valaszok-a-nagy-kerdesekre.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://lira.erbacdn.net/upload/M_28/rek1/145/1650145.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://lira.erbacdn.net/upload/M_28/rek1/145/1650145.jpg)"
                        }}
                     />
                  </div>
                 </a>
                 <a href="https://www.libri.hu/konyv/stephen_king.tortura--4.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_592918.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_592918.jpg)"
                        }}
                     />
                  </div>
                 </a>
                  <a href="https://www.libri.hu/konyv/franz_kafka.a-per--12.html" target="_blank">
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s06.static.libri.hu/cover/3d/a/9231498_5.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s06.static.libri.hu/cover/3d/a/9231498_5.jpg)"
                        }}
                     />
                  </div>
                  </a>
                 <a href="https://www.libri.hu/konyv/fjodor_mihajlovics_dosztojevszkij.ordogok-i-ii--3.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_776400.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_776400.jpg)"
                        }}
                     >
                     </div>
                  </div>
                 </a>
                <a href="https://www.libri.hu/konyv/orvos-toth_noemi.orokolt-sors--4.html" target="_blank">
                <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://lira.erbacdn.net/upload/M_28/rek1/400/3173400.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://lira.erbacdn.net/upload/M_28/rek1/400/3173400.jpg)"
                        }}
                     />
                  </div>
                </a>
                 <a href="https://www.libri.hu/konyv/stephen_hawking.rovid-valaszok-a-nagy-kerdesekre.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://lira.erbacdn.net/upload/M_28/rek1/145/1650145.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://lira.erbacdn.net/upload/M_28/rek1/145/1650145.jpg)"
                        }}
                     />
                  </div>
                 </a>
                  <a href="https://www.libri.hu/konyv/stephen_king.tortura--4.html" target="_blank">
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_592918.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_592918.jpg)"
                        }}
                     />
                  </div>
                  </a>
               <a href="https://www.libri.hu/konyv/franz_kafka.a-per--12.html" target="_blank">
               <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://marvin.bline.hu/product_images/408/B919538.JPG)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://marvin.bline.hu/product_images/408/B919538.JPG)"
                        }}
                     />
                  </div>
               </a>
               </div>

               {/*harmadik sor */}
               <div className="images-line">
                  <a href="https://www.libri.hu/konyv/opium-3.html" target="_blank">
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/ed/d/5531535_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/ed/d/5531535_4.jpg)"
                        }}
                     >

                     </div>
                  </div>
                  </a>
                <a href="https://www.libri.hu/konyv/albert_camus.sziszuphosz-mitosza--2.html" target="_blank">
                <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/6a/4/7743198_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/6a/4/7743198_4.jpg)"
                        }}
                     />
                  </div>
                </a>
                 <a href="https://www.libri.hu/konyv/platon.phaidon--1.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/96/1/8552094_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/96/1/8552094_4.jpg)"
                        }}
                     />
                  </div>
                 </a>
                 <a href="https://www.libri.hu/konyv/Alomfejtes-812.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/ca/2/3275266_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/ca/2/3275266_4.jpg)"
                        }}
                     />
                  </div>
                 </a>
                  <a href="https://www.libri.hu/konyv/szerb_antal.utas-es-holdvilag.html" target="_blank">
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s06.static.libri.hu/cover/62/9/616229_5.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s06.static.libri.hu/cover/62/9/616229_5.jpg)"
                        }}
                     />
                  </div>
                  </a>
                 <a href="https://www.libri.hu/konyv/opium-3.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/ed/d/5531535_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/ed/d/5531535_4.jpg)"
                        }}
                     >
                     </div>
                  </div>
                 </a>
                 <a href="https://www.libri.hu/konyv/albert_camus.sziszuphosz-mitosza--2.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/6a/4/7743198_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/6a/4/7743198_4.jpg)"
                        }}
                     />
                  </div>
                 </a>
                  <a href="https://www.libri.hu/konyv/platon.phaidon--1.html" target="_blank">
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/96/1/8552094_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/96/1/8552094_4.jpg)"
                        }}
                     />
                  </div>
                  </a>
                  <a href="https://www.libri.hu/konyv/Alomfejtes-812.html" target="_blank">
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/ca/2/3275266_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/ca/2/3275266_4.jpg)"
                        }}
                     />
                  </div>
                  </a>
                 <a href="https://www.libri.hu/konyv/szerb_antal.utas-es-holdvilag.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s06.static.libri.hu/cover/62/9/616229_5.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s06.static.libri.hu/cover/62/9/616229_5.jpg)"
                        }}
                     />
                  </div>
                 </a>
                 <a href="https://www.libri.hu/konyv/opium-3.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/ed/d/5531535_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/ed/d/5531535_4.jpg)"
                        }}
                     >
                     </div>
                  </div>
                 </a>
                 <a href="https://www.libri.hu/konyv/albert_camus.sziszuphosz-mitosza--2.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/6a/4/7743198_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/6a/4/7743198_4.jpg)"
                        }}
                     />
                  </div>
                 </a>
                 <a href="https://www.libri.hu/konyv/platon.phaidon--1.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/96/1/8552094_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/96/1/8552094_4.jpg)"
                        }}
                     />
                  </div>
                 </a>
                 <a href="https://www.libri.hu/konyv/Alomfejtes-812.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/ca/2/3275266_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/ca/2/3275266_4.jpg)"
                        }}
                     />
                  </div>
                 </a>
                 <a href="https://www.libri.hu/konyv/szerb_antal.utas-es-holdvilag.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2019/06/HelikonZsebkonyv_SzerbA_UtasEsHoldvilag_B1_72dpi-1.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2019/06/HelikonZsebkonyv_SzerbA_UtasEsHoldvilag_B1_72dpi-1.jpg)"
                        }}
                     />
                  </div>
                 </a>
               </div>


               {/*negyedik sor */}


               <div className="images-line">
                  <a href="https://www.libri.hu/konyv/orkeny_istvan.totek-6.html" target="_blank">
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/14/e/6608540_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/14/e/6608540_4.jpg)"
                        }}
                     >
                     </div>
                  </div>
                  </a>
                 <a href="https://www.libri.hu/konyv/madach_imre.az-ember-tragediaja--20.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2018/06/HZsK063_Madach_EmberTargediaja_b1_72.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2018/06/HZsK063_Madach_EmberTargediaja_b1_72.jpg)"
                        }}
                     />
                  </div>
                 </a>
                <a href="https://www.libri.hu/konyv/orvos-toth_noemi.szabad-akarat.html" target="_blank">
                <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/7d/e/7585984_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/7d/e/7585984_4.jpg)"
                        }}
                     />
                  </div>
                </a>
                 <a href="https://www.libri.hu/konyv/fjodor_mihajlovics_dosztojevszkij.a-karamazov-testverek-i-ii--1.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_711619.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_711619.jpg)"
                        }}
                     />
                  </div>
                 </a>
                  <a href="https://www.libri.hu/konyv/a-halaloszton-es-az-eletosztonok-egy-illuzio-jovoje.html" target="_blank">
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_615809.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_615809.jpg)"
                        }}
                     />
                  </div>
                  </a>
                 <a href="https://www.libri.hu/konyv/orkeny_istvan.totek-6.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/14/e/6608540_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/14/e/6608540_4.jpg)"
                        }}
                     >
                     </div>
                  </div>
                 </a>
                 <a href="https://www.libri.hu/konyv/madach_imre.az-ember-tragediaja--20.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2018/06/HZsK063_Madach_EmberTargediaja_b1_72.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2018/06/HZsK063_Madach_EmberTargediaja_b1_72.jpg)"
                        }}
                     />
                  </div>
                 </a>
                 <a href="https://www.libri.hu/konyv/orvos-toth_noemi.szabad-akarat.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/7d/e/7585984_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/7d/e/7585984_4.jpg)"
                        }}
                     />
                  </div>
                 </a>
                <a href="https://www.libri.hu/konyv/fjodor_mihajlovics_dosztojevszkij.a-karamazov-testverek-i-ii--1.html" target="_blank">
                <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_711619.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_711619.jpg)"
                        }}
                     />
                  </div>
                </a>
                <a href="https://www.libri.hu/konyv/a-halaloszton-es-az-eletosztonok-egy-illuzio-jovoje.html" target="_blank">
                <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_615809.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_615809.jpg)"
                        }}
                     />
                  </div>
                </a>
                 <a href="https://www.libri.hu/konyv/orkeny_istvan.totek-6.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/14/e/6608540_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/14/e/6608540_4.jpg)"
                        }}
                     >
                     </div>
                  </div>
                 </a>
                 <a href="https://www.libri.hu/konyv/madach_imre.az-ember-tragediaja--20.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2018/06/HZsK063_Madach_EmberTargediaja_b1_72.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://helikon.libricsoport.hu/wp-content/uploads/sites/5/2018/06/HZsK063_Madach_EmberTargediaja_b1_72.jpg)"
                        }}
                     />
                  </div>
                 </a>
                  <a href="https://www.libri.hu/konyv/orvos-toth_noemi.szabad-akarat.html" target="_blank">
                  <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://s01.static.libri.hu/cover/7d/e/7585984_4.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://s01.static.libri.hu/cover/7d/e/7585984_4.jpg)"
                        }}
                     />
                  </div>
                  </a>
                 <a href="https://www.libri.hu/konyv/fjodor_mihajlovics_dosztojevszkij.a-karamazov-testverek-i-ii--1.html" target="_blank">
                 <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_711619.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_711619.jpg)"
                        }}
                     />
                  </div>
                 </a>
                <a href="https://www.libri.hu/konyv/a-halaloszton-es-az-eletosztonok-egy-illuzio-jovoje.html" target="_blank">
                <div
                     className="line"
                     style={{
                        backgroundImage:
                           "url(https://moly.hu/system/covers/big/covers_615809.jpg)"
                     }}
                  >
                     <div
                        className="img"
                        style={{
                           backgroundImage:
                              "url(https://moly.hu/system/covers/big/covers_615809.jpg)"
                        }}
                     />
                  </div>
                </a>
               </div>


            </div>
         </div>
      </div>




   </>
}