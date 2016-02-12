<section class="don-template">
  <div class="don-go-home">
  <a class="btn" href="./">
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
    <p>Revenir à l'accueil</p>
  </a>
  </div>
  <div class="don-container">
    <div>
      <h2>Faire un don à Enfants du Désert</h2>
      <p>
        L’association <a href="#">Enfants du désert</a> agit depuis 2005 pour faciliter l’accès à l’éducation des enfants du sud Marocain.<br />
  Votre don permettra de financer divers projets comme la construction d’écoles ou l’amélioration des conditions médicales des jeunes marocains.
      </p>
      <div class="don-input-btn">
        <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
          <div class="panel-cta">
            <div class="amount-input">
              <label for="amount">Montant</label>
              <input type="number" name="amount" id="amount" min="0" placeholder="3,00">
              <span>€</span>
            </div>
            <input name="cancel_return" type="hidden" value="http://4ltrophy.paul.yt" />
            <input name="item_name" type="hidden" value="Les Enfants Du Désert" />
            <input name="currency_code" type="hidden" value="EUR" />
            <input name="cmd" type="hidden" value="_xclick" />
            <input name="business" type="hidden" value="paulgabriel7-facilitator-1@gmail.com" />
            <input name="custom" type="hidden" value="{{stickerID}}" />
          </div>
          <input type="submit" value="Faire un don" class="btn">
        </form>
      </div>
    </div>
  </div>
</section>
