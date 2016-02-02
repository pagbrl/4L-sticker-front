<section class="sticker-template">
    <div class="content--left">
        <section class="custom-sticker choose-view">
            <h4>L'angle de vue</h4>
            <div>
                <a href="" class="face active" ng-click="chooseView('face')">
                    <span>
                        <img src="assets/img/face256.png" alt="">
                    </span>
                    <p>Face</p>
                </a>
                <a href="" class="profil" ng-click="chooseView('profil')">
                    <span>
                        <img src="assets/img/profil256.png" alt="">
                    </span>
                    <p>Profil</p>
                </a>
                <div class="clear"></div>
            </div>
        </section>
        <section class="custom-sticker choose-color">
            <h4>Les couleurs</h4>
            <div>
                <article class="color-picker 0">
                    <span>{{colorPickerNames[0]}}</span>
                    <div class="picker">
                        <a ng-click="chooseColor(0,'yellow')" class="yellow" href=""></a>
                        <a ng-click="chooseColor(0,'red')" class="red" href=""></a>
                        <a ng-click="chooseColor(0,'green')" class="green" href=""></a>
                        <a ng-click="chooseColor(0,'blue')" class="blue" href=""></a>
                        <a ng-click="chooseColor(0,'white')" class="white active" href=""></a>
                    </div>
                </article>
                <article class="color-picker 1">
                    <span>{{colorPickerNames[1]}}</span>
                    <div class="picker">
                        <a ng-click="chooseColor(1,'yellow')" class="yellow" href=""></a>
                        <a ng-click="chooseColor(1,'red')" class="red" href=""></a>
                        <a ng-click="chooseColor(1,'green')" class="green" href=""></a>
                        <a ng-click="chooseColor(1,'blue')" class="blue" href=""></a>
                        <a ng-click="chooseColor(1,'white')" class="white active" href=""></a>
                    </div>
                </article>
                <article class="color-picker 2">
                    <span>{{colorPickerNames[2]}}</span>
                    <div class="picker">
                        <a ng-click="chooseColor(2,'yellow')" class="yellow" href=""></a>
                        <a ng-click="chooseColor(2,'red')" class="red" href=""></a>
                        <a ng-click="chooseColor(2,'green')" class="green" href=""></a>
                        <a ng-click="chooseColor(2,'blue')" class="blue" href=""></a>
                        <a ng-click="chooseColor(2,'white')" class="white active" href=""></a>
                    </div>
                </article>
            </div>
        </section>
        <section class="custom-sticker choose-message">
            <h4>Votre message</h4>
            <textarea ng-keyup="chooseMessage()" name="" id="sticker-message" maxlength="100" placeholder="Entrez un message"></textarea>
        </section>
        <section class="custom-sticker choose-name">
            <h4>Votre prénom</h4>
            <textarea ng-keyup="chooseName()" name="" id="sticker-name" maxlength="15" placeholder="Entrez votre prénom"></textarea>
        </section>
    </div>
    <div class="content--right">
        <header>
            <a href="/" class="close-template btn">
                <svg version="1.1"
                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                     x="0px" y="0px" width="24.2px" height="24.2px" viewBox="0 0 24.2 24.2" style="enable-background:new 0 0 24.2 24.2;"
                     xml:space="preserve">
                    <style type="text/css">
                        .yellow{fill:#000;}
                    </style>
                    <defs>
                    </defs>
                    <polygon class="yellow" points="0,3 9.1,12.1 0,21.2 3,24.2 12.1,15.2 21.2,24.2 24.2,21.2 15.2,12.1 24.2,3 21.2,0 12.1,9.1 3,0 "/>
                </svg>

                <p>Revenir à l'acceuil</p>
            </a>
            <h1>{{pageH1}}</h1>
        </header>
        <section class="the-sticker">
            <div id="sticker-custom" ng-init="setStickerStyle()">
                <div class="sticker-main-content">
                    <div class="svg face" ng-if="sticker.view == 0">
                        <!-- Generator: Adobe Illustrator 19.2.0, SVG Export Plug-In  -->
                        <svg version="1.1"
                             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                             x="0px" y="0px" width="804.4px" height="667.4px" viewBox="0 0 804.4 667.4" style="enable-background:new 0 0 804.4 667.4;"
                             xml:space="preserve">
                        <style type="text/css">
                            .st0{fill:#A6F574;}
                            .st1{fill:#FFC600;}
                            .st2{fill:#90D8FC;}
                        </style>
                        <defs>
                        </defs>
                        <g>
                            <g>
                                <path class="st0" style="fill: #{{sticker.colors[0]}}" d="M742.8,514.7c0,0,35-192.8-5.7-256.3c-40.7-63.5-107-70.6-107-70.6s111.3,25,140.6,97.8
                                    c29.3,72.8,20.7,182.2,0,233.4c-29.9,5.3-29.9,5.3-29.9,5.3L742.8,514.7z"/>
                                <path class="st0" style="fill: #{{sticker.colors[0]}}" d="M695.5,214.9c-22.2-17.8-65.5-27.1-65.5-27.1l-90.9-6.2l-11.5,4.8c0,0-88.4-2.7-100.2-3.3
                                    c-8.2-6.1-23.9-6.9-23.9-6.9H401c0,0-15.7,0.8-23.9,6.9c-11.8,0.6-100.2,3.3-100.2,3.3l-11.5-4.9l-90.9,6.2
                                    c0,0-43.3,9.3-65.5,27.1c-22.2,17.8-68.3,47.6-60.4,182.6c7.3,78.5,15.2,126.9,15.2,126.9s152.4,27.1,338.4,20
                                    c186,7.1,338.4-20,338.4-20s7.9-48.4,15.2-126.9C763.9,262.4,717.8,232.6,695.5,214.9z"/>
                                <path class="st0" style="fill: #{{sticker.colors[0]}}" d="M605.8,38.2C597.5,20.6,563,1.6,403.9,2.5C244.8,1.6,206,20.6,197.7,38.2c-8.3,17.6-45.1,149.7-45.1,149.7
                                    v5.7l21.5-5.8l81.7-7.5l21,6.1l95.2-3.1l32-6.8l28.4,6.8l95.3,3.1l21-6.1l81.1,7.5l20.8,5.8v-5.7
                                    C650.5,187.9,614.1,55.8,605.8,38.2z"/>
                                <path class="st0" style="fill: #{{sticker.colors[0]}}" d="M61.8,514.7c0,0-35-192.8,5.7-256.3s107-70.6,107-70.6s-111.3,25-140.6,97.8s-20.7,182.2,0,233.4
                                    c29.9,5.3,29.9,5.3,29.9,5.3L61.8,514.7z"/>
                            </g>
                            <path class="st0" style="fill: #{{sticker.colors[0]}}" d="M788.8,512.4c0,0-2.3-5.2-4.5,3.5C667.1,544.9,400.8,543,400.8,543s-263.6,2-380.8-27.1
                                c-2.2-8.7-4.3-3.5-4.3-3.5s-23.2,42-8.2,54.9s30.4,21.1,137.2,26.8c99.6,5.3,237.9,7,255.9,7.2v0c0,0,0.3,0,1,0c0.7,0,1,0,1,0v0
                                c19-0.2,157-1.9,256.6-7.2c106.8-5.6,122.8-13.8,137.7-26.8S788.8,512.4,788.8,512.4z"/>
                        </g>
                        <path d="M737.5,527.4l2.8-13.2c0.7-3.6,34.1-192.8-5.4-254.4c-17-26.5-38.6-43-57.8-53.3c-26.1-11.4-47.4-16.2-47.7-16.3l0.8-4.9
                            c0.7,0.1,17.2,1.9,39,11.7c3.4,1.5,7,3.3,10.8,5.3c3.4,1.5,6.8,3.1,10.3,4.8c29.1,14.2,67.1,39.2,82.5,77.5
                            c13.4,33.3,20.1,78,18.9,125.8c-1,41.8-8.1,82.8-18.9,109.5l-0.5,1.3L737.5,527.4z M711.6,224.5c9.7,8.7,19.2,19.4,27.6,32.5
                            c17.2,26.8,23.4,78.4,18.5,153.5c-3.6,55.6-12.3,104.1-12.4,104.6l0,0.1l-1.3,6l24.9-4.4c10.3-26.2,17-65.9,18-106.5
                            c1.2-47.1-5.4-91.1-18.6-123.8C761.5,269.6,746.1,246.3,711.6,224.5z"/>
                        <path d="M464.8,548c-20.3,0-41.2-0.4-62.5-1.2c-184.1,7-337.3-19.8-338.9-20.1l-1.7-0.3l-0.3-1.7c-0.1-0.5-8-49.4-15.2-127.1
                            c-7.7-130.6,35.2-164.3,58.3-182.4c1-0.8,2-1.6,3-2.3c22.4-17.9,64.8-27.2,66.6-27.6l0.4-0.1l91.5-6.2l11.5,4.8
                            c7.3-0.2,85.3-2.7,98.9-3.4c8.8-6,23.9-7.1,24.6-7.2l0.2,0l2.7,0c0.7,0,15.8,1.2,24.6,7.2c13.5,0.6,91.5,3.2,98.9,3.5l11.5-4.9
                            l0.6,0l91.1,6.2l0.2,0c1.8,0.4,44.1,9.6,66.6,27.5c1,0.8,1.9,1.5,3,2.3c23.1,18.1,66,51.8,58.3,182.3
                            c-7.2,77.8-15.2,126.7-15.2,127.2l-0.3,1.7l-1.7,0.3C739.8,527,619.8,548,464.8,548z M402.3,541.9L402.3,541.9
                            c173.1,6.6,318.7-16.7,336.2-19.7c1.5-9.4,8.5-55.7,14.9-125c3.3-55.4-2.4-99.3-16.9-130.5c-12.2-26.1-27.9-38.5-39.5-47.6
                            c-1-0.8-2-1.6-3-2.4c-20.8-16.6-61.3-25.9-64.3-26.5l-90.1-6.1l-11.5,4.8l-0.5,0c-0.9,0-88.5-2.9-100.2-3.5l-0.8,0l-0.6-0.4
                            c-7.2-5.3-21.3-6.6-22.5-6.7h-2.4c-1.2,0.1-15.3,1.3-22.5,6.7l-0.6,0.4l-0.8,0c-11.7,0.6-99.3,3.4-100.2,3.4l-0.5,0l-11.5-4.8
                            l-90.1,6.1c-3,0.7-43.5,9.9-64.3,26.5c-1,0.8-2,1.6-3,2.4c-11.5,9.1-27.3,21.5-39.5,47.6c-14.5,31.1-20.2,75.1-16.9,130.6
                            c6.4,69.2,13.4,115.5,14.9,124.9C83.5,525.1,229.2,548.5,402.3,541.9L402.3,541.9z"/>
                        <path d="M682.5,332.3h-280H402H122c0,0-38.2-3.8-31,52.2c7.2,56,13.8,69.8,42.8,69.8c26.9,0,237.1,0,266.7,0c0,0,1.2,0,3.5,0
                            c29.6,0,239.8,0,266.7,0c29,0,35.6-13.8,42.8-69.8C720.7,328.5,682.5,332.3,682.5,332.3z"/>
                        <path d="M569.7,246.1l-5-0.7c0-0.3,4.2-34.3-27.3-62l3.3-3.8C574.4,209.3,569.9,244.7,569.7,246.1z"/>
                        <path d="M424.2,244.2l-4.7-1.6c0.1-0.2,7-21.6,4.5-59.4l5-0.3C431.5,221.8,424.5,243.3,424.2,244.2z"/>
                        <path d="M653.5,196.9l-24-6.6l-80.7-7.4l-20.9,6.1l-95.9-3.1l-28-6.7l-31.7,6.7l-95.8,3.1l-20.9-6.1l-80.9,7.4l-24.2,6.6v-9.4
                            l0.1-0.3c1.5-5.4,36.8-132.5,45.1-150.1c5.5-11.6,21.2-20.1,48.2-26.1C278.3,3.3,332.2-0.4,404,0c72.6-0.4,124.4,3.2,158.1,11
                            c25.9,6,40.6,14.3,46.2,26.1l0,0c8.3,17.6,43.6,144.7,45.1,150.1l0.1,0.3V196.9z M155.5,188.2v2.1l18.6-5l82-7.5l21,6.2l94.5-3.1
                            L404,174l28.7,6.9l94.6,3.1l21.1-6.2l82.3,7.6l17.9,4.9v-2.1c-2-7.3-36.8-132.1-44.7-148.9c-1.8-3.8-7.2-15.2-42.8-23.4
                            C528.2,8.3,475.3,4.6,404,5C279.9,4.3,211.3,15.8,200.2,39.3C192.3,56.1,157.6,180.9,155.5,188.2z"/>
                        <path d="M651,187.9c0,0,39.1-0.9,44.2-1.6c5-0.7,7.1,1.4,7.1-20s-21-16.8-32.8-17.6c-11.8-0.8-21.4,0-21.4,4s-5.1,11.2-5.1,11.2
                            L651,187.9z"/>
                        <path d="M721.4,667.4c17.9,0,37.9-9.5,40-40.6c2.1-31.1,3.1-43.8,3.1-43.8s-45.5,9.8-59.9,8.1s-18.8-0.7-18.8-0.7s0.3,32.7,0,54.8
                            S721.4,667.4,721.4,667.4z"/>
                        <path d="M398.5,603.8L398.5,603.8c-24.4-0.4-157.6-2.2-253.8-7.3c-108.8-5.7-123.7-14.1-139-27.4c-16-13.9,6-54.9,7.6-57.9
                            c0.7-1.5,2-3.1,4-3c2.4,0.2,3.7,2.7,4.5,5.5c116.3,28.3,376.1,26.7,378.8,26.7c2.7,0,265.2,1.6,381.5-26.7c0.8-2.8,2.1-5.3,4.6-5.5
                            c2-0.2,3.5,1.4,4.2,2.9c1.5,2.7,23.6,44,7.5,58c-15.2,13.2-30.1,21.6-139.1,27.4c-96.2,5.1-229.6,6.9-254,7.2v0.1l-3.5,0
                            L398.5,603.8z M17.1,515c-6.4,12.2-18.6,41.3-8,50.5c12.5,10.8,23.3,20.2,136,26.2c100.1,5.3,240.4,7,256,7.2l1.2,0l0.7,0
                            c15.7-0.2,156.2-1.9,256.2-7.2c105.2-5.6,121.6-13.6,136.1-26.2c10.6-9.2-1.7-38.7-8.1-50.7c-0.2,0.5-0.3,1.1-0.5,1.8l-0.4,1.5
                            l-1.5,0.4c-116.2,28.8-381.5,27.2-384.2,27.2c-2.6,0-265.2,1.6-381.4-27.2l-1.5-0.4l-0.4-1.5C17.4,515.9,17.3,515.4,17.1,515z"/>
                        <path d="M67.1,527.4l-34.9-6.2l-0.5-1.3c-10.8-26.7-17.9-67.7-18.9-109.5c-1.2-47.8,5.5-92.5,18.9-125.8
                            c15.4-38.3,53.4-63.3,82.5-77.5c3.5-1.7,7-3.3,10.3-4.8c3.8-2,7.4-3.8,10.8-5.3c21.8-9.8,38.3-11.6,39-11.7l0.8,4.9
                            c-0.2,0.1-21.5,4.9-47.4,16.2c-19.3,10.3-41,26.8-58.1,53.4c-39.5,61.7-6,250.8-5.4,254.4L67.1,527.4z M35.8,516.8l24.9,4.4
                            l-1.3-6.1c-0.1-0.5-8.8-49-12.4-104.6c-4.9-75,1.3-126.7,18.5-153.5c8.4-13.1,17.8-23.8,27.5-32.5c-22.7,14.3-45.6,34.6-56.6,61.8
                            c-13.1,32.7-19.7,76.7-18.6,123.8C18.7,450.9,25.5,490.5,35.8,516.8z"/>
                        <path d="M222.9,622.2h8.3c9,0,16.3-7.3,16.3-16.3v-74.8c0-9-7.3-16.3-16.3-16.3h-8.3c-9,0-16.3,7.3-16.3,16.3v74.8
                            C206.6,614.9,213.9,622.2,222.9,622.2z"/>
                        <g>
                            <circle class="st1" style="fill: #{{sticker.colors[2]}}" cx="645.6" cy="393.3" r="40.2"/>
                            <circle class="st1" style="fill: #{{sticker.colors[2]}}" cx="158.9" cy="393.3" r="40.2"/>
                        </g>
                        <path d="M234.8,246.1c-0.2-1.5-4.7-36.9,29-66.4l3.3,3.8c-31.6,27.7-27.4,61.6-27.3,62L234.8,246.1z"/>
                        <path d="M380.3,244.2c-0.3-0.9-7.3-22.4-4.7-61.3l5,0.3c-2.5,37.8,4.4,59.1,4.5,59.4L380.3,244.2z"/>
                        <path d="M521.8,157c-12.2-3.2-118.3-4.5-118.3-4.5s-108.9,1.2-121.1,4.5c-12.2,3.2,1.7,29.2,1.7,29.2l87.7-2.9
                            c0,0,22.5-3.7,32.7-6.7c7,2.9,27.7,6.7,27.7,6.7l87.9,2.9C520.2,186.2,534,160.2,521.8,157z"/>
                        <path d="M153.5,187.9c0,0-39.1-0.9-44.2-1.6c-5-0.7-7.1,1.4-7.1-20s21-16.8,32.8-17.6s21.4,0,21.4,4s5.1,11.2,5.1,11.2L153.5,187.9z
                            "/>
                        <path class="st2" style="fill: #{{sticker.colors[1]}}" d="M615.8,103.9c-13.4-48.1-9.3-68.8-79.6-73.9c-60.2-4.4-117.3-4.3-133.9-4.2c-14.4-0.1-74-0.2-134.3,4.2
                            c-70.3,5.2-66,25.9-79.5,73.9c-13.4,48.1,11.3,42.4,27.8,44.4c15.1,1.8,184.6-0.9,184.6-0.9s171.8,2.7,186.9,0.9
                            C604.4,146.3,629.3,152,615.8,103.9z"/>
                        <path d="M552.2,151.4c-53.4,0-145.9-1.4-151.2-1.5c-6.9,0.1-169.8,2.7-184.9,0.9c-2-0.2-4.2-0.4-6.4-0.5c-8.5-0.5-18.2-1-23.5-8.5
                            c-5.3-7.4-5.2-19.6,0-38.5c1.6-5.8,3-11.1,4.3-16.2c9.2-36.5,13.8-54.8,77.4-59.5c62-4.6,122.9-4.3,134.5-4.2
                            c21-0.2,76.1-0.1,134,4.2c63.7,4.7,68.4,23.1,77.7,59.7c1.3,5.1,2.6,10.3,4.2,16c5.3,18.9,5.3,31.1,0,38.5
                            c-5.4,7.5-15.1,8.1-23.6,8.6c-2.3,0.1-4.4,0.3-6.4,0.5C584.3,151.2,570.6,151.4,552.2,151.4z M401,144.9c1.8,0,171.9,2.7,186.6,0.9
                            c2.2-0.3,4.5-0.4,6.8-0.5c7.8-0.4,15.8-0.9,19.8-6.5c4.2-5.9,3.9-17.4-0.8-34.2l0,0c-1.6-5.8-3-11.1-4.2-16.2
                            c-9.2-36.5-13-51.6-73.2-56c-57.7-4.2-112.7-4.3-133.7-4.2c-11.6-0.1-72.2-0.4-134.1,4.2c-60,4.4-63.8,19.4-73,55.8
                            c-1.3,5.2-2.7,10.5-4.3,16.4c-4.7,16.9-5,28.4-0.8,34.2c4,5.6,12,6,19.7,6.5c2.2,0.1,4.6,0.3,6.7,0.5
                            C231.4,147.5,399.3,144.9,401,144.9z"/>
                        <path d="M83.1,667.4c-17.9,0-37.9-9.5-40-40.6C41,595.7,40,583,40,583s45.5,9.8,59.9,8.1s18.8-0.7,18.8-0.7s-0.3,32.7,0,54.8
                            S83.1,667.4,83.1,667.4z"/>
                        <path d="M581.6,622.2h-8.3c-9,0-16.3-7.3-16.3-16.3v-74.8c0-9,7.3-16.3,16.3-16.3h8.3c9,0,16.3,7.3,16.3,16.3v74.8
                            C598,614.9,590.6,622.2,581.6,622.2z"/>
                        </svg>
                    </div>
                    <div class="svg profil" ng-if="sticker.view == 1">
                        <!-- Generator: Adobe Illustrator 19.2.0, SVG Export Plug-In  -->
                        <svg version="1.1"
                             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                             x="0px" y="0px" width="959px" height="404.7px" viewBox="0 0 959 404.7" style="enable-background:new 0 0 959 404.7;"
                             xml:space="preserve">
                        <style type="text/css">
                            .st0{fill:#D74D4D;}
                            .st1{fill:#8FD7FB;}
                            .st2{fill:#FFFFFF;}
                            .st3{fill:#A5F474;}
                        </style>
                        <defs>
                        </defs>
                        <g>
                            <path class="st0" style="fill: #{{sticker.colors[0]}}" d="M235,317.9h425c0,0,2.5-10.4,6.4-10.4s4.9,5.4,4.9,5.4H885h44v-50c0,0-11.3-7.2-11.9-12.9s9.2-6.6,8.8-12.8
                                s-5.3-11.1-5.3-11.1s4.6-9.5-1.8-14.4c-6.4-4.9-15-4.1-15-4.1S834,75.3,833.4,64s1.3-19.2-4.6-23.2c-6-4-26.5-37.2-155.9-37.2
                                S410.2-4.9,385,24.3c-25.2,29.2-79.6,116.1-79.6,116.1S56.1,119.1,20.9,193.4c2,13.9,2,13.9,2,13.9s4,33.8-2,42.4
                                c-6,8.6-7.3,20.6,5.3,25.2c12.6,4.6,23.2,31.2,23.2,31.2l4,6.2L235,317.9z"/>
                        </g>
                        <g>
                            <g>
                                <path class="st1" style="fill: #{{sticker.colors[1]}}" d="M355.5,142.4h149.8c4.6,0,8.3-3.7,8.3-8.3v-77c0-4.6-3.7-8.3-8.2-8.3c-22.2,0-86.6,0.4-99.6,5.3
                                    c-16.1,6-58.9,72-63.2,79.3c-2.6,4.3,1.5,6.7,5.3,7.9C350.2,142.1,352.8,142.4,355.5,142.4z"/>
                            </g>
                            <g>
                                <path class="st1" style="fill: #{{sticker.colors[1]}}" d="M623,50.1c-30-0.8-60.5-1.1-71.8-1.2c-3,0-5.5,2-6.2,5c-4.7,20.3-4.2,88.5,6.5,88.5c6.8,0,41.5,0.1,71.5,0.1
                                    V50.1z"/>
                            </g>
                            <g>
                                <path class="st1" style="fill: #{{sticker.colors[1]}}" d="M688.1,54.5c-7.1-2.1-37.1-3.4-63.1-4.3v92.2c19,0,40.7,0,44.1-0.1c9-0.2,20.4-38.9,25.1-55
                                    C699,71.2,705.7,59.8,688.1,54.5z"/>
                            </g>
                            <g>
                                <path class="st1" style="fill: #{{sticker.colors[1]}}" d="M758.3,65.2c0,0,32.1-2.5,40.4,18.5c7.7,19.6,25.4,55.1,7.3,55.9c-18.1,0.8-67.8-0.4-82.8,0
                                    c-15,0.4-3.3-29.3,2-44.1C731.7,77.4,735.3,64.4,758.3,65.2z"/>
                            </g>
                        </g>
                        <g>
                            <path d="M505.2,144.9H355.5c-3.1,0-5.9-0.4-8.6-1.2c-4-1.3-6.5-3.1-7.4-5.6c-0.5-1.3-0.8-3.4,0.8-6c0.4-0.7,46.3-73.5,64.5-80.3
                                c13.3-5,74.8-5.4,100.5-5.4c5.9,0,10.7,4.8,10.7,10.8v77C516,140.1,511.2,144.9,505.2,144.9z M503,51.4c-40.5,0-86.5,1.3-96.5,5.1
                                c-14.4,5.4-55.7,67.7-62,78.2c-0.4,0.7-0.6,1.3-0.4,1.6c0.3,0.7,1.5,1.7,4.3,2.6c2.1,0.7,4.5,1,7.1,1h149.8c3.2,0,5.8-2.6,5.8-5.8
                                v-77c0-3.2-2.6-5.8-5.7-5.8C504.5,51.4,503.8,51.4,503,51.4z"/>
                        </g>
                        <path d="M700.9,60.2c-1.9-3.7-5.8-6.3-11.8-8.1h0c-5.9-1.8-26.5-3.2-63.1-4.4v-0.2l-2.4-0.1c-29.9-0.8-60.4-1.1-72.1-1.2
                            c-4.2,0-7.8,2.8-8.8,6.9c-4.2,18.2-4.4,77.9,4.5,89.1c1.6,2.1,3.4,2.5,4.6,2.5c2.6,0,9.5,0,18.6,0c14.3,0,34.4,0,52.6,0
                            c0.2,0,0.3,0,0.5,0h2h0.5c1.7,0,4,0,6.6,0c12.6,0,33.4,0,36.8,0c7.8-0.1,15.5-16,27.5-56.8c0.6-2.1,1.3-4.2,1.9-6.2
                            C701.6,73.4,704,66.1,700.9,60.2z M621,140c-17.7,0-36.8,0-50.6,0c-8.6,0-15.2,0-18.1,0c-0.2,0-0.3,0-0.5,0c0,0-0.4-0.3-1-1.3
                            c-7-11.1-7.3-66.8-3.2-84.4c0.4-1.8,2-3.3,3.8-3.3c0,0,0,0,0,0c11.4,1,40.5,0.8,69.5,1.6V140z M694.1,80.4c-0.6,2-1.3,4.1-2,6.3
                            c-2.4,8.1-6.4,21.7-10.9,33.3c-7.5,19.3-11.4,19.9-11.9,19.9c-3.2,0.1-23,0.1-41.4,0.1V52.8c34.3,1.1,54.3,2.5,59.6,4.1
                            c4.7,1.4,7.5,3.2,8.8,5.6C698.5,66.6,696.6,72.7,694.1,80.4z"/>
                        <g>
                            <path d="M786.5,142.3c-9.4,0-20.2-0.1-30.2-0.2c-13.7-0.1-26.7-0.2-33-0.1c-0.1,0-0.2,0-0.3,0c-4.1,0-6.3-1.9-7.5-3.5
                                c-5.3-7.3,0-23.7,6.4-41.3l1.8-4.9c6.1-17,10.9-30.4,34.6-29.6c1.2-0.1,8.9-0.5,17.7,1.4c12.7,2.8,21.4,9.2,25.1,18.6
                                c1,2.6,2.2,5.5,3.5,8.6c7.3,17.6,15.6,37.4,10,46.3c-1.2,1.9-3.6,4.2-8.4,4.4C801.3,142.2,794.4,142.3,786.5,142.3z M732.1,137
                                c6.7,0,15.3,0.1,24.2,0.2c18.4,0.2,39.3,0.4,49.6-0.1c2.8-0.1,3.9-1.2,4.4-2.1c4.3-6.7-4.6-27.8-10.4-41.7c-1.3-3.1-2.5-6-3.6-8.6
                                c-7.5-19-37.5-16.9-37.8-16.9l-0.1,0l-0.1,0C738,67,734.4,77.2,728.4,94l-1.8,4.9c-3.9,10.8-11.2,30.9-7.1,36.7
                                c0.5,0.6,1.3,1.5,3.6,1.4C725.4,137,728.5,137,732.1,137z"/>
                        </g>
                        <g>
                            <path class="st2" d="M22.1,201.2c0,0-14.8,21.5,0,41.6c0,0,1.3-0.3,1.5-1.9C23.8,239.2,26.1,219.6,22.1,201.2z"/>
                        </g>
                        <g>
                            <g>
                                <rect x="71" y="193.9" width="762" height="5"/>
                            </g>
                        </g>
                        <path d="M952.9,274.9h-2.7c-2.2,0-4.2,1.2-5.3,3l-6.3,11H932v-27.4l-1.2-0.7c-4.3-2.7-10.6-7.9-11-11.1c-0.1-1.3,0.9-2.2,3.2-3.9
                            c2.4-1.8,5.8-4.3,5.5-8.8c-0.3-5.1-3.3-9.4-5-11.5c1.2-3.3,3-11.1-3.2-15.9c-5.4-4.1-12-4.7-15.1-4.7
                            c-27.9-53-68.9-133.3-69.4-141.1c-0.2-2.7-0.2-5.3-0.2-7.7c0-7.4,0-13.7-5.6-17.5c-0.4-0.3-1.2-1-2.1-1.8
                            c-9.4-8.8-38.2-35.7-155.1-35.7c-24.6,0-49.5-0.3-73.5-0.6c-104.7-1.3-195.1-2.5-216.2,22c-23.4,27-72.1,104.2-79,115.1
                            c-10-0.8-67.5-4.8-127.9-1.2c-89.5,5.3-142.6,24.1-157.6,55.8l-0.3,0.7l1.1,7.7c-2.6,4.4-13.4,24.7,0.6,43.6l0.3,0.4
                            c-0.4,1.5-0.9,2.8-1.5,3.6c-4.3,6.2-5.9,13.3-4.1,18.8c1,3.2,3.7,7.6,10.6,10.2c4.2,1.6,8.5,6.3,12.1,11.6H20.9l-6.3-11
                            c-1.1-1.9-3.1-3-5.3-3H6.6c-3.4,0-6.6,3-6.6,6.4V320c0,3.4,3.2,5.8,6.6,5.8h7.2l7.6-11h36.1c0.4,0,0.8-0.1,1.2-0.2l176.3,5.2h427
                            l0.5-1.9c0.9-3.9,2.9-8.1,3.9-8.5c1.7,0,2.4,3.3,2.4,3.3l0.4,2.1H902h30h6.1l7.6,11h7.2c3.4,0,6.1-2.7,6.1-6.1V281
                            C959,277.6,956.3,274.9,952.9,274.9z M917.3,213.6c4.7,3.6,1.2,11.3,1.1,11.4l-0.8,1.6l1.2,1.3c0,0,4.3,4.4,4.6,9.5
                            c0.1,1.6-1,2.6-3.5,4.4c-0.7,0.5-1.4,1.1-2.1,1.7l-10.7-33.4C910,210.3,914,211.1,917.3,213.6z M386.9,25.9
                            C406.6,3.1,500.2,4.3,599.3,5.6c24.1,0.3,48.9,0.6,73.6,0.6c27.8,0,111,0,149.1,32.1c-12.6-0.2-40.3-0.7-60.9-2.3
                            c-2.8-0.2-6.2-0.5-10-0.8c-32.3-2.5-92.4-7.3-127.6-7.3c-35.4,0-207.4,1.6-239.8,1.9C384.8,28.4,385.9,27.1,386.9,25.9z M20.7,209.5
                            c0.9,8.1,1.4,19.2,0.8,27.7C15.8,226.5,18.1,216.1,20.7,209.5z M927,288.9h-25c-7.2,0-13,5.8-13,13c0,3,1,5.8,2.8,8H673.1
                            c-1-2.6-3.1-5.4-6.7-5.4c-4.5,0-7.1,6.3-8.3,10.4H235l-169.8-5c4.5-5.2,8.4-13,8.4-16.6c0-1.2-0.3-2.1-0.9-2.8
                            c-0.7-1-1.9-1.6-3.2-1.6H43.4c-4.3-6.9-10-14-16.3-16.3c-4-1.5-6.6-3.8-7.6-7c-1.3-4.1,0-9.4,3.5-14.4c1.5-2.2,2.5-5.6,3-9.7
                            c0-0.1,0.1-0.2,0.1-0.3c0-0.4,0.1-0.9,0.2-1.5c0.1-1.2,0.2-2.5,0.3-3.8c0.5-7.7,0.9-21.6-2-35.1l-1-7c35.2-71.1,279.3-51.2,281.7-51
                            l1.5,0.1l0.8-1.3c0.5-0.8,45.4-72.4,72.1-106.8c17-0.2,206.6-1.9,243.8-1.9c34.9,0,94.9,4.7,127.2,7.2c3.8,0.3,7.2,0.6,10,0.8
                            c25.4,2,61.4,2.4,67.2,2.4c2.7,2.2,2.8,6.1,2.8,12.9c0,2.4,0,5.1,0.2,8c0.7,11.4,63,129.9,70.6,144.3l13.5,42.1
                            c0.9,5.7,8.7,11.4,12,13.6V288.9z"/>
                        <path d="M139.2,260.6c-39.7,0-72,32.3-72,72s32.3,72,72,72s72-32.3,72-72S178.9,260.6,139.2,260.6z"/>
                        <g>
                            <path d="M139.2,376.4c-24.1,0-43.8-19.6-43.8-43.8s19.6-43.8,43.8-43.8s43.8,19.6,43.8,43.8S163.3,376.4,139.2,376.4z M139.2,293.9
                                c-21.4,0-38.8,17.4-38.8,38.8s17.4,38.8,38.8,38.8s38.8-17.4,38.8-38.8S160.5,293.9,139.2,293.9z"/>
                        </g>
                        <path d="M745.9,260.6c-39.7,0-72,32.3-72,72s32.3,72,72,72s72-32.3,72-72S785.7,260.6,745.9,260.6z"/>
                        <g>
                            <path d="M745.9,376.4c-24.1,0-43.8-19.6-43.8-43.8s19.6-43.8,43.8-43.8s43.8,19.6,43.8,43.8S770.1,376.4,745.9,376.4z M745.9,293.9
                                c-21.4,0-38.8,17.4-38.8,38.8s17.4,38.8,38.8,38.8s38.8-17.4,38.8-38.8S767.3,293.9,745.9,293.9z"/>
                        </g>
                        <g>
                            <path d="M139.2,345.9c-7.3,0-13.2-5.9-13.2-13.2s5.9-13.2,13.2-13.2s13.2,5.9,13.2,13.2S146.5,345.9,139.2,345.9z M139.2,324.4
                                c-4.5,0-8.2,3.7-8.2,8.2c0,4.5,3.7,8.2,8.2,8.2c4.5,0,8.2-3.7,8.2-8.2C147.4,328.1,143.7,324.4,139.2,324.4z"/>
                        </g>
                        <g>
                            <g>
                                <circle class="st3" style="fill: #{{sticker.colors[2]}}" cx="139.2" cy="332.6" r="41.3"/>
                            </g>
                            <g>
                                <circle class="st3" style="fill: #{{sticker.colors[2]}}" cx="745.9" cy="332.6" r="41.3"/>
                            </g>
                            <g>
                                <circle class="st3" style="fill: #{{sticker.colors[2]}}" cx="745.9" cy="332.6" r="10.7"/>
                            </g>
                        </g>
                        <g>
                            <path d="M139.2,345.4c-7,0-12.7-5.7-12.7-12.7c0-7,5.7-12.7,12.7-12.7c7,0,12.7,5.7,12.7,12.7C151.9,339.7,146.2,345.4,139.2,345.4
                                z M139.2,323.9c-4.8,0-8.7,3.9-8.7,8.7s3.9,8.7,8.7,8.7s8.7-3.9,8.7-8.7S144,323.9,139.2,323.9z"/>
                        </g>
                        <g>
                            <path d="M745.9,345.9c-7.3,0-13.2-5.9-13.2-13.2s5.9-13.2,13.2-13.2s13.2,5.9,13.2,13.2S753.2,345.9,745.9,345.9z M745.9,324.4
                                c-4.5,0-8.2,3.7-8.2,8.2c0,4.5,3.7,8.2,8.2,8.2c4.5,0,8.2-3.7,8.2-8.2C754.2,328.1,750.5,324.4,745.9,324.4z"/>
                        </g>
                        </svg>
                    </div>
                    <div class="content">
                        <p>{{sticker.message}}</p>
                        <div class="name">
                            <span>{{sticker.name}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="action-panel" ng-if="layout === 'customize'">
            <div class="panel-cta">
                <a href="" class="btn" ng-click="printSticker()">
                    Faire imprimer mon sticker sur la 4L
                </a>
                <p>En faisant une donation à l’association les Enfants du Désert</p>
            </div>
            <div class="panel-cta">
                <a href="" class="btn secondary" ng-click="downloadSticker()">
                    Télécharger mon sticker
                </a>
                <p>
                    Et le partager sur les réseaux sociaux
                </p>
            </div>
        </section>

        <section class="action-panel" ng-if="layout === 'print'">
            <div class="panel-cta">
                <a href="" class="btn" ng-click="printSticker()">
                    NTM IMPRIME
                </a>
                <p>bite</p>
            </div>
            <div class="panel-cta">
                <a href="" class="btn secondary">
                    Chatte
                </a>
                <p>
                    schneck
                </p>
            </div>
        </section>
    </div>
    <div class="clear"></div>
</section>
