<section class="home-template">
    <div class="content--left">
      <div class="left--container">
        <div class="vCenter">
          <img src="http://lorempixel.com/300/300">
            <div class="left--info">
            <h1>Soutenez l’association Enfants du Désert et participez à l’aventure du 4L Trophy</h1>
            <p>Depuis 11 ans, l’association Enfants du Désert organise le 4L Trophy : tous les ans, c’est plus de 1500 équipages qui sillonnent à bord de leur 4L Xkm de routes et de pistes à travers l’Europe.<br />
  Le 18 Février, Pauline & Margaux sont parties le coffre rempli de fournitures scolaire qu’elles distribueront aux enfants marocains pendant 10 jours. Prenez part à leur aventure !</p>

            <p>Pour participer, deux solutions : créez votre 4L personnalisée et affichez-la accompagnée d’un petit message sur la voiture de l’équipage. Vous pouvez également soutenir directement l’association en faisant un don.</p>

            <a href="/sticker" class="btn">Créer mon sticker</a>
            <a href="/don">Faire un don à enfant du désert</a>
          </div>
        </div>
      </div>
    </div>
    <div class="content--right">
        <div class="right-scrollable-zone">
            <div ng-repeat="day in instagramFlux">
                <header>
                    <h2>{{day.name}}</h2>
                    <span class="hashtag">#MPGAZL</span>
                </header>
                <div class="instagram-flux">
                    <article ng-repeat="picture in day.pictures">
                        <article>
                            <a target="_blank" href="{{picture.url}}">
                                <img ng-src="{{picture.thumbnail_url}}" alt="">
                                <p>{{picture.desc}}</p>
                            </a>
                        </article>
                    </article>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
        <div class="is-scrollable">
            <span>
                <svg version="1.1"
                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                     x="0px" y="0px" width="6.4px" height="35.4px" viewBox="0 0 6.4 35.4" style="enable-background:new 0 0 6.4 35.4;"
                     xml:space="preserve">
                    <style type="text/css">
                        .st0{fill:#FFC600;}
                    </style>
                    <defs>
                    </defs>
                    <circle class="st0" cx="3.2" cy="3.2" r="3.2"/>
                    <circle class="st0" cx="3.2" cy="18.2" r="3.2"/>
                    <circle class="st0" cx="3.2" cy="32.2" r="3.2"/>
                </svg>

                <!-- <p>Voir les jours précédents</p> -->
            </span>
        </div>
    </div>
    <div class="clear"></div>
</section>
