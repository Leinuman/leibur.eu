Pmst saad kopeerida praeguse landing page'i asemele aga on paar nuanssi:

A. Kui sa tahad, et uudiste automaat laadimine toimub, on sul paar asja vaja teha
    Vaheta oma praegune news.html minu ymbertehtud news.htmliga ja siis on sul kaks varianti:
    1. Teed selle leibur.eu domeenilt katte saadavaks (ma subdomeenidega katsetanud pole)
    2. Seadistad oma veebiserveri n6nda, et saaks paringuid teha koos CORSiga.
        Siis lisad sinna script sektsiooni t2isaadressi kuhu tahad.
    Uudiseid lisades sisu peab olema kastikeses, millel klass on news-item, muidu JS ei leia ylesse

    Hetkel n2iteks selline formaat
    <div class="news-item">
        <h2>
          Kuup2ev<br>
          <small>Sisestaja</small>
        </h2>
        <p>
            Sisu
        </p>
      </div>
B. Leiburcore lehel praegu on bottleneck, et koiki iframe laaditakse korraga alla.
    See tottu ta alguses ka motleb natuke kauem aga parast on sujuv ja on kena koike lahti teha.
    Lisaks Youtube'i API situb konsooli tais, ma ei tea miks aga kui addresseerida esimest probleemi, siis akki laheneb ka see m6neti.

Vahel ka kui piisavalt teha refreshi siis pildid ei lae enam Leiburcore'is, sest Discogs saab kurjaks ja ei taha natuke aega kliendi p2ringutele vastata.




