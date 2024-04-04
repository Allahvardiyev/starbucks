// Function to check if the consent is given
var cookieHtml = `

<div id="detail_card" >
    <div class="detail_container">
      <p>🔐 Gizliliğiniz Önemlidir!</p>
      <p>
        Bu araç, bu web sitesinde kullanılan çeşitli etiketleri / izleyicileri
        / analiz araçlarını seçmenize ve devre dışı bırakmanıza yardımcı olur.
      </p>

      <div class="detail_card_head">
        <div class="detail_card_head_content">
          <label class="switch2103">
            <input type="checkbox" checked="" disabled="">
            <span class="slider2103"></span>
          </label>

          <h5 style="margin-block-start: 1.67em; margin-block-end: 1.67em; margin: 0; font-size: 0.83em;">Önemli Çerezler</h5>
          <br>
          <br>
        </div>
        Temel çerezler, internet sitesinin çalışabilmesi için gereklidir ve
        kapatılamaz. Bu çerezler, ziyaretçilerin internet sitemizde
        dolaşmasına, gizlilik tercihlerini belirlemesine, giriş yapma ve
        bilgi/talep formlarını doldurmasına olanak sağlamaktadır.
      </div>
      <div class="detail_card_head">
        <div class="detail_card_head_content">
          <label class="switch2103">
            <input type="checkbox" checked="" disabled="">
            <span class="slider2103"></span>
          </label>
          <h5 style="margin-block-start: 1.67em;margin-block-end: 1.67em; font-size: 0.83em;">Fonksiyonel Çerezler</h5>
        </div>
        Fonksiyonel çerezler, internet sitesinin, yaptığınız seçimleri
        hatırlamasını (dil tercihleriniz ve bulunduğunuz bölge gibi)
        hatırlamasını ve gelişmiş, daha fazla kişisel özellikler sağlamasını
        sağlar. Ayrıca metin boyutu, yazı tipi ve internet sitesinin diğer
        bölümlerinde özelleştirebileceğiniz unsurları hatırlamak için de
        kullanılabilir. Bu çerezlerin topladığı bilgiler gizli tutulabilir ve
        bu çerezler, diğer internet sitelerindeki etkinliğinizi izleyemez. Bu
        çerezlere izin vermezseniz, söz konusu işlevlerin bazıları veya tümü
        düzgün çalışmayabilir.
      </div>
      <div class="detail_card_head">
        <div class="detail_card_head_content">
          <label class="switch2103 checkbox-analytics">
            <input type="checkbox">
            <span class="slider2103"></span>
          </label>
          <!-- <input class="apple-switch checkbox-analytics" type="checkbox"> -->
          <h5 style="margin-block-start: 1.67em;margin-block-end: 1.67em; font-size: 0.83em;">Analitik Çerezleri</h5>
        </div>
        Analitik çerezleri, bilgileri anonim olarak toplayıp raporlayarak web
        sitesi sahiplerinin, ziyaretçilerin web siteleriyle nasıl etkileşime
        girdiğini anlamalarına yardımcı olur.
      </div>
      <div class="detail_card_head">
        <div class="detail_card_head_content">
          <label class="switch2103 checkbox-marketing">
            <input type="checkbox">
            <span class="slider2103"></span>
          </label>
          <!--  <input class="apple-switch checkbox-marketing" type="checkbox" > -->
          <h5 style="margin-block-start: 1.67em; margin-block-end: 1.67em; font-size: 0.83em;">Pazarlama Çerezleri</h5>
        </div>
        Bu çerezler, profilinizi oluşturmak ve ilgi alanlarınızla alakalı
        reklamlar sunmak için kullanılmaktadır. Aynı zamanda reklam
        kampanyalarının etkinliğini ölçmeye yardımcı olmalarının yanı sıra,
        bir reklamı görme sayısını sınırlamak için de kullanılmaktadır.
        Genellikle internet sitesinin sahibinin izni ile reklam ağlarına
        yerleştirilir (örneğin; sosyal medya kanalları). İnternet sitesini
        ziyaretinize ilişkin bilgiler, reklam verenler ve diğer kuruluşlarla
        paylaşılmaktadır. Bu çerezlere izin vermezseniz, farklı internet
        sitelerinde ve sosyal medya kanallarındaki hedefli reklamları
        deneyimleyemezsiniz.
      </div>
      <div class="detail_card_btn">
        <button id=acceptAll type="button">
          Tümünü Kabul Et
        </button>
        <button id="saveChanges" type="button" class="saveChanges">
          Kaydet
        </button>
        <button id="rejectAll" type="button">
          Tümünü Reddet
        </button>
      </div>
    </div>
  </div>
`

var style = document.createElement('style');
style.innerHTML = `



/* Google Fonts - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

.cookie_container {
    margin: 0;
    padding: 0;
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
}

.cookie_wrapper {
    z-index: 10000;
    position: fixed;
    background: white;
    top: 40%;
    max-width: 500px;
    width: 100%;
    border-radius: 8px;
    /* padding: 37px 40px; */
    padding: 23px 39px;
    transition: right 0.3s ease;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.cookie_wrapper header {
    display: flex;
    align-items: center;
    column-gap: 15px;
    /* justify-content: center; */
}

.cookie_header h2 {
    color: #4070f4;
    font-weight: 500;
    margin: 0;
}

.cookie_wrapper .cookie_content {
    margin-top: 16px;
}

.cookie_wrapper .cookie_content p {
    color: #333;
    font-size: 16px;
}

.cookie_content p a {
    color: #4070f4;
    text-decoration: none;
}

.dacookie_contentta p a:hover {
    text-decoration: underline;
}

.cookie_wrapper .cookie_buttons {
    margin-top: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.cookie_buttons .button {
    border: none;
    color: #fff;
    padding: 8px 0;
    border-radius: 4px;
    background: #4070f4;
    cursor: pointer;
    width: calc(100% / 2 - 10px);
    transition: all 0.2s ease;
}

.cookie_buttons #acceptAll:hover {
    background-color: #034bf1;
}

#declineBtn {
    border: 2px solid #4070f4;
    background-color: #fff;
    color: #4070f4;
}

#declineBtn:hover {
    background-color: #4070f4;
    color: #fff;
}



.cookieBanner {
    width: 100%;
    position: fixed;
    bottom: 0px;
}

.section {
    background-color: #f9fafc;
    box-shadow: 5px 2px 15px black;
    padding: 20px 20px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    /* width: 100%; */
}

.section-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.section-1-img img {
    width: 56px;
    height: 56px;
}

.section-head-content {
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 600;
    line-height: 1.2;
    font-family: Arial, Helvetica, sans-serif;
}

.section-text {
    margin-top: 0;
    margin-bottom: 1rem;
}

button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    border-radius: 0.25rem;
}

/* Card Detail Style */

.detail_card_btn button:first-child {
    width: 100%;
    background: #15bf6f;
    padding: 10px 20px;
    margin: 0 10px 0;
    margin: 0 0 10px 0;
    border: none;
    color: #fff;
}

.detail_card_btn button:first-child:hover {
    background-color: hwb(151 28% 7%);
}

.detail_card_btn button:last-child {
    width: 100%;
    color: #15bf6f;
    border: 2px solid #15bf6f !important;
    font-size: 16px;
    padding: 10px 20px;
    background-color: #fff;
}

.detail_card_btn button:last-child:hover {
    background-color: rgb(200, 244, 223);
}

/* Detail Card Style */

#detail_card {
    /* display: none; */
    max-width: 90%;
    max-height: 90%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    max-height: 90%;
    overflow: auto;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    z-index: 10001;
    padding: 30px;
    overflow: auto;
}

.detail_container p:first-child {
    font-weight: 400;
    font-size: 26px;
    color: #111;
    margin: 0 0 22px;
}

.form-switch .form-check-input:checked[type="checkbox"] {
    background-position: 100% !important;
    background-color: #15bf6f !important;
    border-color: #15bf6f !important;
}

.form-switch {
    padding-left: 2.5em;
}

.form-check {
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5em;
    margin-bottom: 0.125rem;
}

.form-switch .form-check-input:checked {
    background-position: right center;
    background-image: url("./image/download.svg");
}

.form-check-input:checked[type="checkbox"] {
    background-image: url("./image/download.svg");
}

.form-switch .form-check-input {
    width: 2em;
    /* margin-left: -2.5em; */
    /* background-image: url("./image/download.svg"); */
    background-position: left center;
    border-radius: 2em;
    transition: background-position 0.15s ease-in-out;
}

.form-check-input:disabled {
    pointer-events: none;
    filter: none;
    opacity: 0.5;
}

.form-check-input:checked {
    background-color: #0d6efd;
    border-color: #0d6efd;
}

.form-check-input:checked {
    background-color: #0d6efd;
    border-color: #0d6efd;
}

.form-check-input[type="checkbox"] {
    border-radius: 0.25em;
}

.form-check .form-check-input {
    float: left;
    margin-left: -1.5em;
}

.form-check-input:checked {
    background-color: #0d6efd;
    border-color: #0d6efd;
}

.form-check-input:disabled {
    pointer-events: none;
    filter: none;
    opacity: 0.5;
}

.form-switch .form-check-input {
    width: 2em;
    /* margin-left: -2.5em; */
    background-position: left center;
    border-radius: 2em;
    transition: background-position 0.15s ease-in-out;
}

.bg-white {
    background-color: #fff !important;
}

.shadow-sm {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.align-top {
    vertical-align: top !important;
}

.form-check-input {
    width: 1em;
    height: 1em;
    margin-top: 0.25em;
    vertical-align: top;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid rgba(0, 0, 0, 0.25);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

}



.detail_card_head_content {
    display: flex;
    align-items: center;
    gap: 10px;
}

input {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

.detail_card_btn {
    margin-top: 20px;
}

#saveChanges {
    font-family: inherit;
    line-height: inherit;
    border-radius: 0.25rem;
    width: 100%;

    color: #fff;
    background-color: #15bf6f !important;
    border: 2px solid #15bf6f;
    font-size: 16px;
    padding: 10px 20px;
    background-color: #fff;
    margin-bottom: 10px;
}

#saveChanges:hover {
    background-color: rgb(200, 244, 223);
}


.detail_card_btn button:last-child:hover {
    background-color: rgb(200, 244, 223);
}

@media (min-width: 576px) {
    .detail_container {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .detail_container {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .detail_container {
        max-width: 960px;
    }

    .detail_card_btn {
        display: flex !important;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    .detail_card_btn button {
        width: 193px !important;
        /* padding: 20px 300px ; */
    }

    .detail_card_btn button:first-child {
        margin: 0 10px 0;
    }

    #saveChanges {
        margin: 0 10px;
        width: 193px !important;
    }
}

@media (min-width: 1200px) {
    .detail_container {
        max-width: 1140px;
    }
}

@media (min-width: 1400px) {
    .detail_container {
        max-width: 1240px;
    }
}

/* new switch style */

input.apple-switch {
    position: relative;
    -webkit-appearance: none;
    outline: none;
    width: 2em;
    height: 1.125em;
    background-color: #fff;
    border: 1px solid #D9DADC;
    border-radius: 50px;
    box-shadow: inset -20px 0 0 0 #fff;
    transition: all 300ms ease-in;
}

input.apple-switch:after {
    content: "";
    position: absolute;
    /* top: 1px;
    left: 1px; */
    background: transparent;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.2);
}

input.apple-switch:checked {
    box-shadow: inset 13px 0px 0px 0px #4ed164;
    border-color: #4ed164;
}

input.apple-switch:checked:after {
    left: 13px;
    box-shadow: -2px 4px 3px rgba(0, 0, 0, 0.05);
}

/* new switch style end */

/* ChatBot New Style */

.switch2103 {
    position: relative;
    display: inline-block;
    width: 3rem;
    height: 1.5rem;
}

.switch2103 input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider2103 {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e6e6e6;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 1rem;
}

.slider2103:before {
    position: absolute;
    content: "";
    height: 1.25rem;
    width: 1.25rem;
    left: 0.125rem;
    bottom: 0.125rem;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
}

input:checked+.slider2103 {
    background-color: #4BD763;
}

input:checked+.slider2103:before {
    -webkit-transform: translateX(1.5rem);
    -ms-transform: translateX(1.5rem);
    transform: translateX(1.5rem);
}

/* ChatBot New Style */
  `;
document.head.appendChild(style);




// Function to check if the consent is given
var oldCookieHtml = `

<div class="cookie_container">
    <div class="cookie_wrapper">
      <header class="cookie_header">
        <h2>Çerez izni</h2>
      </header>

      <div class="cookie_content">
        <p>
          This website use cookies to help you have a superior and more relevant
          browsing experience on the website. <a href="#"> Read more...</a>
        </p>
      </div>

      <div class="cookie_buttons">
        <button class="button" id="acceptAll">Tümünü Kabul Et</button>
        <button class="button" id="detailCookie">Detaylar</button>
      </div>
    </div>
  </div>


  <div id="detail_card" style='display: none'>
  <div class="detail_container">
    <p>🔐 Gizliliğiniz Önemlidir!</p>
    <p>
      Bu araç, bu web sitesinde kullanılan çeşitli etiketleri / izleyicileri
      / analiz araçlarını seçmenize ve devre dışı bırakmanıza yardımcı olur.
    </p>

    <div class="detail_card_head">
      <div class="detail_card_head_content">
        <input class="apple-switch alwaysTrue" type="checkbox" checked="" disabled="">
        <h5>Önemli Çerezler</h5>
      </div>
      Temel çerezler, internet sitesinin çalışabilmesi için gereklidir ve
      kapatılamaz. Bu çerezler, ziyaretçilerin internet sitemizde
      dolaşmasına, gizlilik tercihlerini belirlemesine, giriş yapma ve
      bilgi/talep formlarını doldurmasına olanak sağlamaktadır.
    </div>
    <div class="detail_card_head">
      <div class="detail_card_head_content">
        <input class="apple-switch alwaysTrue" type="checkbox" checked="" disabled="">
        <h5>Fonksiyonel Çerezler</h5>
      </div>
      Fonksiyonel çerezler, internet sitesinin, yaptığınız seçimleri
      hatırlamasını (dil tercihleriniz ve bulunduğunuz bölge gibi)
      hatırlamasını ve gelişmiş, daha fazla kişisel özellikler sağlamasını
      sağlar. Ayrıca metin boyutu, yazı tipi ve internet sitesinin diğer
      bölümlerinde özelleştirebileceğiniz unsurları hatırlamak için de
      kullanılabilir. Bu çerezlerin topladığı bilgiler gizli tutulabilir ve
      bu çerezler, diğer internet sitelerindeki etkinliğinizi izleyemez. Bu
      çerezlere izin vermezseniz, söz konusu işlevlerin bazıları veya tümü
      düzgün çalışmayabilir.
    </div>
    <div class="detail_card_head">
      <div class="detail_card_head_content">
        <input class="apple-switch checkbox-analytics" type="checkbox">
        <h5>Analitik Çerezleri</h5>
      </div>
      Analitik çerezleri, bilgileri anonim olarak toplayıp raporlayarak web
      sitesi sahiplerinin, ziyaretçilerin web siteleriyle nasıl etkileşime
      girdiğini anlamalarına yardımcı olur.
    </div>
    <div class="detail_card_head">
      <div class="detail_card_head_content">
        <input class="apple-switch checkbox-marketing" type="checkbox" >
        <h5>Pazarlama Çerezleri</h5>
      </div>
      Bu çerezler, profilinizi oluşturmak ve ilgi alanlarınızla alakalı
      reklamlar sunmak için kullanılmaktadır. Aynı zamanda reklam
      kampanyalarının etkinliğini ölçmeye yardımcı olmalarının yanı sıra,
      bir reklamı görme sayısını sınırlamak için de kullanılmaktadır.
      Genellikle internet sitesinin sahibinin izni ile reklam ağlarına
      yerleştirilir (örneğin; sosyal medya kanalları). İnternet sitesini
      ziyaretinize ilişkin bilgiler, reklam verenler ve diğer kuruluşlarla
      paylaşılmaktadır. Bu çerezlere izin vermezseniz, farklı internet
      sitelerinde ve sosyal medya kanallarındaki hedefli reklamları
      deneyimleyemezsiniz.
    </div>
    <div class="detail_card_btn">
      <button id=acceptAll type="button">
        Tümünü Kabul Et
      </button>
      <button id="saveChanges" type="button" class="saveChanges">
        Kaydet
      </button>
      <button id="rejectAll" type="button">
        Tümünü Reddet
      </button>
    </div>
  </div>
</div>
`


// Function to set the consent cookie
function acceptCookies() {

    var cookieExpires = new Date;
    cookieExpires.setFullYear(cookieExpires.getFullYear() + 1);

    // Tümünü kabul edince yazılacak çerezler
    document.cookie = "consent=true; expires=" + cookieExpires.toUTCString();
    document.cookie = "ad_storage=granted; expires=" + cookieExpires.toUTCString();
    document.cookie = "ad_user_data=granted; expires=" + cookieExpires.toUTCString();
    document.cookie = "ad_personalization=granted; expires=" + cookieExpires.toUTCString();
    document.cookie = "analytics_storage=granted; expires=" + cookieExpires.toUTCString();

    // Seçimden sonra pop up kapatılacak.
    document.querySelector(".cookie_container").style.display = "none";
}

function cardAllAccept() {

    var cookieExpires = new Date;
    cookieExpires.setFullYear(cookieExpires.getFullYear() + 1);

    document.querySelector(".checkbox-analytics").checked = true
    document.querySelector(".checkbox-marketing").checked = true

    // Tümünü kabul edince yazılacak çerezler
    document.cookie = "consent=true; expires=" + cookieExpires.toUTCString();
    document.cookie = "ad_storage=granted; expires=" + cookieExpires.toUTCString();
    document.cookie = "ad_user_data=granted; expires=" + cookieExpires.toUTCString();
    document.cookie = "ad_personalization=granted; expires=" + cookieExpires.toUTCString();
    document.cookie = "analytics_storage=granted; expires=" + cookieExpires.toUTCString();

    // Seçimden sonra pop up kapatılacak.
    setTimeout(function () {
        document.querySelector(".cookie_container").style.display = "none";
        document.querySelector('#detail_card').style.display = "none";
    }, 700)
}

function saveChanges() {

    var cookieExpires = new Date;
    cookieExpires.setFullYear(cookieExpires.getFullYear() + 1);

    // Seçilenleri kabul edince yazılacak çerezler.

    let checkBoxAnalytics = document.querySelector(".checkbox-analytics").checked
    let checkBoxMarketing = document.querySelector(".checkbox-marketing").checked

    document.cookie = "consent=true; expires=" + cookieExpires.toUTCString();

    if (checkBoxAnalytics == true) {
        document.cookie = "analytics_storage=granted; expires=" + cookieExpires.toUTCString();
    } else {
        document.cookie = "analytics_storage=denied; expires=" + cookieExpires.toUTCString();
    }

    if (checkBoxMarketing == true) {
        document.cookie = "ad_storage=granted; expires=" + cookieExpires.toUTCString();
        document.cookie = "ad_user_data=granted; expires=" + cookieExpires.toUTCString();
        document.cookie = "ad_personalization=granted; expires=" + cookieExpires.toUTCString();
    } else {
        document.cookie = "ad_storage=denied; expires=" + cookieExpires.toUTCString();
        document.cookie = "ad_user_data=denied; expires=" + cookieExpires.toUTCString();
        document.cookie = "ad_personalization=denied; expires=" + cookieExpires.toUTCString();
    }

    // Seçimden sonra pop up kapatılacak.
    document.querySelector(".cookie_container").style.display = "none";
    document.querySelector('#detail_card').style.display = "none";
}

function rejectAll() {

    var cookieExpires = new Date;
    cookieExpires.setFullYear(cookieExpires.getFullYear() + 1);

    // Tümünü kabul edince yazılacak çerezler
    document.cookie = "consent=true; expires=" + cookieExpires.toUTCString();
    document.cookie = "ad_storage=denied; expires=" + cookieExpires.toUTCString();
    document.cookie = "ad_user_data=denied; expires=" + cookieExpires.toUTCString();
    document.cookie = "ad_personalization=denied; expires=" + cookieExpires.toUTCString();
    document.cookie = "analytics_storage=denied; expires=" + cookieExpires.toUTCString();

    // Seçimden sonra pop up kapatılacak.
    document.querySelector(".cookie_container").style.display = "none";
    document.querySelector('#detail_card').style.display = "none";
}

// Function to check if the consent is given


function checkConsent() {
    // Check if the consent cookie is set
    let getCookieName = new URLSearchParams(document.cookie.replaceAll("&", "%26").replaceAll("; ", "&"))
    let consent = getCookieName.get("consent");
    if (consent) {
        // console.log(consent == 'false');
        // Show the cookie consent banner if consent is not given
        // console.log('dd');
        // document.querySelector(".cookie_container").style.display = "none";
    } else {
        // document.querySelector('body').innerHTML = cookieHtml
        document.body.insertAdjacentHTML("beforeend", cookieHtml);
        document.getElementById("acceptAll").addEventListener("click", acceptCookies);
        // Düyməyə klik hadisəsini dinləmək və funksiyanı tətikləmək
        document.getElementById('detailCookie').addEventListener('click', toggleCardVisibility);
        document.querySelector('#detail_card #acceptAll').addEventListener('click', cardAllAccept);
        document.querySelector('#detail_card #saveChanges').addEventListener('click', saveChanges);
        document.querySelector('#detail_card #rejectAll').addEventListener('click', rejectAll);

        var cookieExpires = new Date;
        cookieExpires.setFullYear(cookieExpires.getFullYear() + 1);

        // Tümünü kabul edince yazılacak çerezler
        // document.cookie = "consent=false; expires=" + cookieExpires.toUTCString();
        document.cookie = "ad_storage=denied; expires=" + cookieExpires.toUTCString();
        document.cookie = "ad_user_data=denied; expires=" + cookieExpires.toUTCString();
        document.cookie = "ad_personalization=denied; expires=" + cookieExpires.toUTCString();
        document.cookie = "analytics_storage=denied; expires=" + cookieExpires.toUTCString();

    }

    // document.getElementById("acceptAll").addEventListener("click", acceptCookies);

    function toggleCardVisibility() {
        let card = document.getElementById('detail_card');
        if (card.style.display === 'block') {
            card.style.display = 'none';
        } else {
            card.style.display = 'block';
        }
    }

}

// if (location.href.includes('https')){
//     window.addEventListener("load", (event) => {
//     checkConsent()
// });
// }

window.addEventListener("load", (event) => {
    checkConsent()
});