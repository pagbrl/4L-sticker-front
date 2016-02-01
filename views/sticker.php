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
                        <a ng-click="chooseColor(0,'white')" class="white" href=""></a>
                    </div>
                </article>
                <article class="color-picker 1">
                    <span>{{colorPickerNames[1]}}</span>
                    <div class="picker">
                        <a ng-click="chooseColor(1,'yellow')" class="yellow" href=""></a>
                        <a ng-click="chooseColor(1,'red')" class="red" href=""></a>
                        <a ng-click="chooseColor(1,'green')" class="green" href=""></a>
                        <a ng-click="chooseColor(1,'blue')" class="blue" href=""></a>
                        <a ng-click="chooseColor(1,'white')" class="white" href=""></a>
                    </div>
                </article>
                <article class="color-picker 2">
                    <span>{{colorPickerNames[2]}}</span>
                    <div class="picker">
                        <a ng-click="chooseColor(2,'yellow')" class="yellow" href=""></a>
                        <a ng-click="chooseColor(2,'red')" class="red" href=""></a>
                        <a ng-click="chooseColor(2,'green')" class="green" href=""></a>
                        <a ng-click="chooseColor(2,'blue')" class="blue" href=""></a>
                        <a ng-click="chooseColor(2,'white')" class="white" href=""></a>
                    </div>
                </article>
            </div>
        </section>
        <section class="custom-sticker choose-message">
            <h4>Votre message</h4>
            <textarea ng-keypress="chooseMessage()" name="" id="sticker-message" maxlength="100" placeholder="Entrez un message"></textarea>
        </section>
        <section class="custom-sticker choose-name">
            <h4>Votre prénom</h4>
            <textarea ng-keypress="chooseName()" name="" id="sticker-name" maxlength="25" placeholder="Entrez votre prénom"></textarea>
        </section>
    </div>
    <div class="content--right">
        
    </div>
</section>
