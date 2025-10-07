let sectionCount = 0;
const imageOptions = [
	{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/daglezja/drzwi_erkado_daglezja_wiz_1.jpg",
    alt: "Drzwi Erkado Daglezja - wizualizacja 1"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/daglezja/drzwi_erkado_daglezja_wiz_2.jpg",
    alt: "Drzwi Erkado Daglezja - wizualizacja 2"
},

	{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Budleja/drzwi_erkado_budleja_wiz_1.jpg",
    alt: "Drzwi Erkado Budleja - wizualizacja 1"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Budleja/drzwi_erkado_budleja_wiz_2.jpg",
    alt: "Drzwi Erkado Budleja - wizualizacja 2"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Budleja/drzwi_erkado_budleja_wiz_4.jpg",
    alt: "Drzwi Erkado Budleja - wizualizacja 4"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Budleja/drzwi_erkado_budleja_wiz_3.jpg",
    alt: "Drzwi Erkado Budleja - wizualizacja 3"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Berberys/drzwi_erkado_berberys_wiz_1.jpg",
    alt: "Drzwi Erkado Berberys - wizualizacja 1"
},
	{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Baldur/drzwi_erkado_Baldur_wiz_9.jpg",
    alt: "Drzwi Erkado Baldur - wizualizacja 9"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Baldur/drzwi_erkado_Baldur_wiz_7.jpg",
    alt: "Drzwi Erkado Baldur - wizualizacja 7"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Baldur/drzwi_erkado_Baldur_wiz_8.jpg",
    alt: "Drzwi Erkado Baldur - wizualizacja 8"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Baldur/drzwi_erkado_Baldur_wiz_4.jpg",
    alt: "Drzwi Erkado Baldur - wizualizacja 4"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Baldur/drzwi_erkado_Baldur_wiz_5.jpg",
    alt: "Drzwi Erkado Baldur - wizualizacja 5"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Baldur/drzwi_erkado_Baldur_wiz_6.jpg",
    alt: "Drzwi Erkado Baldur - wizualizacja 6"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Baldur/drzwi_erkado_Baldur_wiz_1.jpg",
    alt: "Drzwi Erkado Baldur - wizualizacja 1"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Baldur/drzwi_erkado_Baldur_wiz_2.jpg",
    alt: "Drzwi Erkado Baldur - wizualizacja 2"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Baldur/drzwi_erkado_Baldur_wiz_3.jpg",
    alt: "Drzwi Erkado Baldur - wizualizacja 3"
},

	{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/aralia/drzwi_erkado_aralia_wiz_1.jpg",
    alt: "Drzwi Erkado Aralia - wizualizacja 1"
},
	{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/ansedomoia/drzwi_erkado_ansedomoia_wiz_1.jpg",
    alt: "Drzwi Erkado Ansedomoia - wizualizacja 1"
},
	{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/anubis/drzwi_erkado_anubis_wiz_4.jpg",
    alt: "Drzwi Erkado Anubis - wizualizacja 4"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/anubis/drzwi_erkado_anubis_wiz_5.jpg",
    alt: "Drzwi Erkado Anubis - wizualizacja 5"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/anubis/drzwi_erkado_anubis_wiz_1.jpg",
    alt: "Drzwi Erkado Anubis - wizualizacja 1"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/anubis/drzwi_erkado_anubis_wiz_2.jpg",
    alt: "Drzwi Erkado Anubis - wizualizacja 2"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/anubis/drzwi_erkado_anubis_wiz_3.jpg",
    alt: "Drzwi Erkado Anubis - wizualizacja 3"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Amarylis/drzwi_erkado_amarylis_wiz_6.jpg",
    alt: "Drzwi Erkado Amarylis - wizualizacja 6"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Amarylis/drzwi_erkado_amarylis_wiz_3.jpg",
    alt: "Drzwi Erkado Amarylis - wizualizacja 3"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Amarylis/drzwi_erkado_amarylis_wiz_4.jpg",
    alt: "Drzwi Erkado Amarylis - wizualizacja 4"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Amarylis/drzwi_erkado_amarylis_wiz_5.jpg",
    alt: "Drzwi Erkado Amarylis - wizualizacja 5"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Amarylis/drzwi_erkado_amarylis_wiz_1.jpg",
    alt: "Drzwi Erkado Amarylis - wizualizacja 1"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Amarylis/drzwi_erkado_amarylis_wiz_2.jpg",
    alt: "Drzwi Erkado Amarylis - wizualizacja 2"
},
	
	{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Magnolia/drzwi_erkado_Magnolia_wiz_5.jpg",
    alt: "Drzwi Erkado Magnolia - wizualizacja 5"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Magnolia/drzwi-erkado-Magnolia-wiz-2.jpg",
    alt: "Drzwi Erkado Magnolia - wizualizacja 2"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Magnolia/drzwi_erkado_Magnolia_wiz_3.jpg",
    alt: "Drzwi Erkado Magnolia - wizualizacja 3"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Magnolia/drzwi_erkado_Magnolia_wiz_4.jpg",
    alt: "Drzwi Erkado Magnolia - wizualizacja 4"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Magnolia/drzwi_erkado_Magnolia_wiz_1.jpg",
    alt: "Drzwi Erkado Magnolia - wizualizacja 1"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Altamura/drzwi_erkado_Altamura_wiz_6.jpg",
    alt: "Drzwi Erkado Altamura - wizualizacja 6"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Altamura/drzwi_erkado_Altamura_wiz_3.jpg",
    alt: "Drzwi Erkado Altamura - wizualizacja 3"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Altamura/drzwi_erkado_Altamura_wiz_4.jpg",
    alt: "Drzwi Erkado Altamura - wizualizacja 4"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Altamura/drzwi_erkado_Altamura_wiz_5.jpg",
    alt: "Drzwi Erkado Altamura - wizualizacja 5"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Altamura/drzwi_erkado_Altamura_wiz_1.jpg",
    alt: "Drzwi Erkado Altamura - wizualizacja 1"
},
{
    url: "https://mfstore.pl/media/wysiwyg/drzwi/Altamura/drzwi_erkado_Altamura_wiz_2.jpg",
    alt: "Drzwi Erkado Altamura - wizualizacja 2"
},

	
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_zona_wiz2.jpg",
        alt: "Lustro Multiline Zona - wizualizacja 2"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_trim_wiz4_1_.jpg",
        alt: "Lustro Multiline Trim - wizualizacja 4"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_zona_wiz1.jpg",
        alt: "Lustro Multiline Zona - wizualizacja 1"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_trim_wiz2_1_.jpg",
        alt: "Lustro Multiline Trim - wizualizacja 2"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_trim_wiz3_1_.jpg",
        alt: "Lustro Multiline Trim - wizualizacja 3"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_trim_wiz1_1_.jpg",
        alt: "Lustro Multiline Trim - wizualizacja 1"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_trim_wiz4.jpg",
        alt: "Lustro Multiline Trim - wizualizacja 4 alternatywna"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_sid_wiz3.jpg",
        alt: "Lustro Multiline Sid - wizualizacja 3"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_sid_wiz5_1_.jpg",
        alt: "Lustro Multiline Sid - wizualizacja 5"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_sid_wiz1_1_.jpg",
        alt: "Lustro Multiline Sid - wizualizacja 1"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_orbita_lux_wiz7.jpg",
        alt: "Lustro Multiline Orbita Lux - wizualizacja 7"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_orbita_amb_wiz4.jpg",
        alt: "Lustro Multiline Orbita Ambient - wizualizacja 4"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_moon__wiz5.jpg",
        alt: "Lustro Multiline Moon - wizualizacja 5"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_moon__wiz3.jpg",
        alt: "Lustro Multiline Moon - wizualizacja 3"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_moon__wiz1.jpg",
        alt: "Lustro Multiline Moon - wizualizacja 1"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_longer_sand_wiz1.jpg",
        alt: "Lustro Multiline Longer Sand - wizualizacja 1"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_longer_wiz1.jpg",
        alt: "Lustro Multiline Longer - wizualizacja 1"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_kinu_wiz1.jpg",
        alt: "Lustro Multiline Kinu - wizualizacja 1"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_ceres_sand_wiz1.jpg",
        alt: "Lustro Multiline Ceres Sand - wizualizacja 1"
    },
    {
        url: "https://mfstore.pl/media/wysiwyg/image_description/lustra/lustro_multiline_ceres_wiz1.jpg",
        alt: "Lustro Multiline Ceres - wizualizacja 1"
    }
];

const advantagesOptions = [
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/4_V_mikro_fuga.png",
        alt: "V-fuga",
        title: "V-fuga",
        desc: "Podkreśla naturalny rysunek deski; eleganckie wykończenie i lepsza optyka podłogi."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/AC3.png",
        alt: "Klasa ścieralności AC3",
        title: "Klasa ścieralności AC3",
        desc: "Panele laminowane do sypialni i gabinetów; umiarkowany ruch."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/AC4.png",
        alt: "Klasa ścieralności AC4",
        title: "Klasa ścieralności AC4",
        desc: "Trwałe panele do salonów i korytarzy; wysoka odporność na zużycie."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/AC5.png",
        alt: "Klasa ścieralności AC5",
        title: "Klasa ścieralności AC5",
        desc: "Bardzo wytrzymałe panele do biur i lokali; intensywny ruch."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/AC6.png",
        alt: "Klasa ścieralności AC6",
        title: "Klasa ścieralności AC6",
        desc: "Najwyższa odporność; podłogi do obiektów o bardzo dużym natężeniu ruchu."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Antyposlizgowe_r9.png",
        alt: "Antypoślizgowość R9",
        title: "Antypoślizgowość R9",
        desc: "Do suchych wnętrz; korytarze, sypialnie i kuchnie o lekkim ruchu."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Antyposlizgowe_r10.png",
        alt: "Antypoślizgowość R10",
        title: "Antypoślizgowość R10",
        desc: "Do kuchni i łazienek; bezpieczna przy codziennym użytkowaniu, umiarkowany ruch."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Antyposlizgowe_r11.png",
        alt: "Antypoślizgowość R11",
        title: "Antypoślizgowość R11",
        desc: "Dla stref mokrych; tarasy, wejścia i garaże z wysoką przyczepnością."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Antyposlizgowe_r12.png",
        alt: "Antypoślizgowość R12",
        title: "Antypoślizgowość R12",
        desc: "Do zapleczy, warsztatów i kuchni profi; bardzo wysoka trakcja na mokrym."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Antyposlizgowe_r13.png",
        alt: "Antypoślizgowość R13",
        title: "Antypoślizgowość R13",
        desc: "Do przemysłu i stref pochyłych; maksymalna przyczepność w trudnych warunkach."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Gwarancja_2.png",
        alt: "Gwarancja 2 lata",
        title: "Gwarancja 2 lata",
        desc: "Gwarancja 1 rok zapewnia podstawową ochronę; szybka naprawa lub wymiana przy usterce."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Gwarancja_3.png",
        alt: "Gwarancja 3 lata",
        title: "Gwarancja 3 lata",
        desc: "Gwarancja 3 lata zwiększa spokój użytkowania; serwis i wsparcie producenta bez problemu."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Gwarancja_5.png",
        alt: "Gwarancja 5 lat",
        title: "Gwarancja 5 lat",
        desc: "Gwarancja 5 lat to solidna ochrona inwestycji; pewna jakość i mniejsze ryzyko kosztów."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Gwarancja_20.png",
        alt: "Gwarancja 20 lat",
        title: "Gwarancja 20 lat",
        desc: "Gwarancja 20 lat podkreśla trwałość produktu; długoterminowe bezpieczeństwo zakupu."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Gwarancja_25.png",
        alt: "Gwarancja 25 lat",
        title: "Gwarancja 25 lat",
        desc: "Gwarancja 25 lat zapewnia długą ochronę; potwierdzona trwałość i spokój użytkowania na dekady."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Gwarancja_30.png",
        alt: "Gwarancja 30 lat",
        title: "Gwarancja 30 lat",
        desc: "Gwarancja 30 lat daje maksymalny spokój; wyjątkowa wytrzymałość potwierdzona producentem."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Gwarancja_dozywotnia.png",
        alt: "Gwarancja dożywotnia",
        title: "Gwarancja dożywotnia",
        desc: "Gwarancja dożywotnia zapewnia najdłuższą ochronę; pewność jakości na cały okres użytkowania."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_21.png",
        alt: "Klasa użyteczności 21",
        title: "Klasa użyteczności 21",
        desc: "Klasa użyteczności 21 do sypialni i gabinetów domowych; niski ruch, podstawowa odporność."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_22.png",
        alt: "Klasa użyteczności 22",
        title: "Klasa użyteczności 22",
        desc: "Klasa użyteczności 22 do salonów i jadalni; średni ruch, trwałość na co dzień."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_23.png",
        alt: "Klasa użyteczności 23",
        title: "Klasa użyteczności 23",
        desc: "Klasa użyteczności 23 do kuchni i korytarzy; wysoki ruch w domu, dobra odporność."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_31.png",
        alt: "Klasa użyteczności 31",
        title: "Klasa użyteczności 31",
        desc: "Klasa użyteczności 31 do biur i poczekalni; lekki ruch komercyjny, ekonomiczny wybór."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_32.png",
        alt: "Klasa użyteczności 32",
        title: "Klasa użyteczności 32",
        desc: "Klasa użyteczności 32 do sklepów i biur; średni ruch, wyższa trwałość w obiektach."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_33.png",
        alt: "Klasa użyteczności 33",
        title: "Klasa użyteczności 33",
        desc: "Klasa użyteczności 33 do galerii, restauracji; intensywny ruch, bardzo wysoka odporność."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_41.png",
        alt: "Klasa użyteczności 41",
        title: "Klasa użyteczności 41",
        desc: "Klasa użyteczności 41 do magazynów; lekki przemysł, odporność na obciążenia."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_42.png",
        alt: "Klasa użyteczności 42",
        title: "Klasa użyteczności 42",
        desc: "Klasa użyteczności 42 do hal produkcyjnych; średni przemysł, wysoka trwałość."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_43.png",
        alt: "Klasa użyteczności 43",
        title: "Klasa użyteczności 43",
        desc: "Klasa użyteczności 43 do ciężkiego przemysłu; ekstremalny ruch i obciążenia."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Latwe_czyszczenie.png",
        alt: "Łatwe czyszczenie",
        title: "Łatwe czyszczenie",
        desc: "Gwarantuje szybkie usuwanie plam i kurzu; idealne dla rodzin i pupili."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Ogrzewanie_podlogowe.png",
        alt: "Ogrzewanie podłogowe",
        title: "Ogrzewanie podłogowe",
        desc: "Świetnie przewodzą ciepło i są przyjemne w dotyku; komfort termiczny każdego dnia."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Recykling.png",
        alt: "100% Recyclable",
        title: "100% Recyclable",
        desc: "Oznacza pełną możliwość recyklingu; ekologiczny wybór bez kompromisów."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Redukcja_nadmiaru_halasu.png",
        alt: "Izolacja akustyczna",
        title: "Izolacja akustyczna",
        desc: "Redukuje hałas kroków; większy komfort w mieszkaniu i biurze."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/System_montazu.png",
        alt: "Łatwy montaż na klik",
        title: "Łatwy montaż na klik",
        desc: "Przyspiesza układanie podłogi; bez kleju, samodzielnie i czysto."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Wodoodporna.png",
        alt: "Wodoodporność",
        title: "Wodoodporność",
        desc: "Chroni przed zalaniami i plamami; idealna do kuchni, łazienek i przedpokojów."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Zintegrowany_podklad.png",
        alt: "Zintegrowany podkład",
        title: "Zintegrowany podkład",
        desc: "Poprawia akustykę i wyrównuje drobne nierówności; oszczędza czas i koszt."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/230c.png",
        alt: "Podłączenie 230 V",
        title: "Podłączenie 230 V",
        desc: "Standardowa instalacja domowa; szybki montaż, zgodność z gniazdami w Polsce i bezpieczeństwo."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/3000K.png",
        alt: "Barwa ciepła 3000 K",
        title: "Barwa ciepła 3000 K",
        desc: "Tworzy przytulny klimat; idealna do relaksu, makijażu i wieczornego oświetlenia."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/4000K.png",
        alt: "Barwa ciepła 4000 K",
        title: "Barwa ciepła 4000 K",
        desc: "Neutralne, naturalne światło; wierne kolory i komfort codziennego użytkowania."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Anti_fog.png",
        alt: "Mata antyparowa",
        title: "Mata antyparowa",
        desc: "Szyby nie zaparują po kąpieli; klarowny obraz i wygoda w łazience bez czekania."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Led_24v.png",
        alt: "24 V DC LED",
        title: "24 V DC LED",
        desc: "Bezpieczne, niskonapięciowe zasilanie; stabilna praca, także w strefach mokrych i wilgotnych."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Led_life.png",
        alt: "Żywotność LED 30000 h",
        title: "Żywotność LED 30000 h",
        desc: "Długie, bezobsługowe świecenie; mniej wymian i stały komfort użytkowania przez lata."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Moc.png",
        alt: "Moc 15–23,8 W ",
        title: "Moc 15–23,8 W",
        desc: "Wydajne i oszczędne oświetlenie; dobra jasność przy niskim zużyciu energii elektrycznej."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Wlacznik.png",
        alt: "Włącznik",
        title: "Włącznik",
        desc: "Wygodne sterowanie podświetleniem lustra; szybkie włączanie i wyłączanie jednym kliknięciem."
    },
    {
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Obrot.png",
        alt: "Montaż w dowolnym położeniu",
        title: "Montaż w dowolnym położeniu",
        desc: "Instalacja pionowo lub poziomo; dopasowanie do przestrzeni bez kompromisów."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_scieralnosci_1.png",
        alt: "Klasa PEI 1",
        title: "Klasa PEI 1",
        desc: "Do ścian i stref bez obuwia; łazienki, sypialnie. Niewskazana na podłogi o ruchu pieszym."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_scieralnosci_2.png",
        alt: "Klasa PEI 2",
        title: "Klasa PEI 2",
        desc: "Do podłóg w domach o lekkim ruchu; łazienki, sypialnie. Nie zalecana do kuchni i korytarzy."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_scieralnosci_3.png",
        alt: "Klasa PEI 3",
        title: "Klasa PEI 3",
        desc: "Do mieszkań o średnim ruchu; kuchnie, korytarze, salony. Dobra odporność na ścieranie."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_scieralnosci_4.png",
        alt: "Klasa PEI 4",
        title: "Klasa PEI 4",
        desc: "Uniwersalne do domów i lokali; korytarze, sklepy, biura. Wysoka odporność na ścieranie."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Klasa_scieralnosci_5.png",
        alt: "Klasa PEI 5",
        title: "Klasa PEI 5",
        desc: "Do intensywnego ruchu; centra handlowe, wejścia, lokale usługowe. Maksymalna trwałość."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Mrozoodporne.png",
        alt: "Mrozoodporne",
        title: "Mrozoodporne",
        desc: "Bezpieczne na zewnątrz; tarasy, balkony, schody. Nie pękają przy spadkach temperatur."
    },
	{
        src: "https://mfstore.pl/media/wysiwyg/icon_advantage/Rektyfikacja.png",
        alt: "Rektyfikowane",
        title: "Rektyfikowane",
        desc: "Precyzyjnie docięte krawędzie; wąskie fugi, elegancki efekt i łatwiejsze utrzymanie czystości."
    }
];

const LOCAL_STORAGE_KEY = 'htmlGeneratorState';
let history = [];
let historyIndex = -1;
let isRestoringState = false;
let pasteModalInstance = null;
function openPasteModal() {
    if (!pasteModalInstance) {
        pasteModalInstance = new bootstrap.Modal(document.getElementById('pasteModal'));
    }
    pasteModalInstance.show();
}


function processPastedHTML() {
    const editableArea = document.getElementById('pasteModalEditable');
    const htmlContent = editableArea.innerHTML;

    if (htmlContent.trim()) {
        loadFromPastedHTML(htmlContent);
    }
    
    editableArea.innerHTML = ''; 
    pasteModalInstance.hide();
}




function getEditorState() {
    const sections = document.querySelectorAll('#sectionsContainer .section-block');
    const state = [];
    sections.forEach(section => {
        const type = section.querySelector('input[name*="[type]"]').value;
        const sectionState = { type };
        switch (type) {
            case 'text':
                sectionState.tag = section.querySelector('select[name*="[tag]"]').value;
                sectionState.list_heading = section.querySelector('input[name*="[list_heading]"]').value;
                sectionState.content = section.querySelector('.editable-textarea').innerHTML;
                sectionState.class = section.querySelector('input[name*="[class]"]').value;
                break;
            case 'image':
                sectionState.url = section.querySelector('input[name*="[url]"]').value;
                sectionState.alt = section.querySelector('input[name*="[alt]"]').value;
                sectionState.width = section.querySelector('input[name*="[width]"]').value;
                sectionState.class = section.querySelector('input[name*="[class]"]').value;
                break;
            case 'advantages':
                sectionState.items = Array.from(section.querySelectorAll('.advantages-container select'))
                    .map(select => select.value)
                    .filter(val => val !== "");
                break;
        }
        state.push(sectionState);
    });
    return state;
}

function setEditorState(state) {
    isRestoringState = true;
    const container = document.getElementById('sectionsContainer');
    container.innerHTML = '';
    sectionCount = 0;

    if (state && state.length > 0) {
        state.forEach(sectionState => {
            let sectionNode;
            switch (sectionState.type) {
                case 'text':
                    sectionNode = addTextSection(true);
                    sectionNode.querySelector('select[name*="[tag]"]').value = sectionState.tag;
                    sectionNode.querySelector('input[name*="[list_heading]"]').value = sectionState.list_heading;
                    sectionNode.querySelector('input[name*="[class]"]').value = sectionState.class;
                    const editableDiv = sectionNode.querySelector('.editable-textarea');
                    editableDiv.innerHTML = sectionState.content;
                    const hiddenTextareaId = sectionNode.querySelector('textarea[name*="[content]"]').id;
                    syncContentEditable(editableDiv, hiddenTextareaId);
                    toggleListTitle(sectionNode.querySelector('select[name*="[tag]"]'));
                    break;
                case 'image':
                    sectionNode = addImageSection(true);
                    sectionNode.querySelector('input[name*="[url]"]').value = sectionState.url;
                    sectionNode.querySelector('input[name*="[alt]"]').value = sectionState.alt;
                    sectionNode.querySelector('input[name*="[width]"]').value = sectionState.width;
                    sectionNode.querySelector('input[name*="[class]"]').value = sectionState.class;
                    updateImageDetails(sectionNode.querySelector('select'), sectionNode.getAttribute('data-id'));
                    break;
                case 'advantages':
                    sectionNode = addAdvantagesSection(true);
                    const addButton = sectionNode.querySelector('.btn-outline-primary');
                    sectionState.items.forEach(itemIndex => {
                        addAdvantageItem(addButton, sectionNode.getAttribute('data-id'));
                        const newSelect = sectionNode.querySelector('.advantages-container > div:last-child select');
                        newSelect.value = itemIndex;
                        newSelect.dispatchEvent(new Event('change'));
                    });
                    break;
            }
        });
    }
    setTimeout(() => { isRestoringState = false; }, 50);
}



function saveState() {
    if (isRestoringState) return;
    const currentState = getEditorState();
    if (historyIndex > -1 && JSON.stringify(currentState) === JSON.stringify(history[historyIndex])) {
        return;
    }
    if (historyIndex < history.length - 1) {
        history = history.slice(0, historyIndex + 1);
    }
    history.push(currentState);
    historyIndex = history.length - 1;
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentState));
    } catch (e) {
        console.error("Błąd podczas zapisu do Local Storage:", e);
    }
    updateUndoRedoButtons();
}

function loadStateFromLocalStorage() {
    const savedStateJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    let initialState = savedStateJSON ? JSON.parse(savedStateJSON) : [];
    history = [initialState];
    historyIndex = 0;
    setEditorState(initialState);
    updateUndoRedoButtons();
}

function undo() {
    if (historyIndex > 0) {
        historyIndex--;
        setEditorState(history[historyIndex]);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(history[historyIndex]));
        updateUndoRedoButtons();
    }
}

function redo() {
    if (historyIndex < history.length - 1) {
        historyIndex++;
        setEditorState(history[historyIndex]);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(history[historyIndex]));
        updateUndoRedoButtons();
    }
}

function resetEditor() {
    const isConfirmed = confirm("Czy na pewno chcesz zresetować cały edytor? Spowoduje to usunięcie wszystkich sekcji i historii zmian.");
    if (!isConfirmed) return;
    document.getElementById('sectionsContainer').innerHTML = '';
    history = [[]];
    historyIndex = 0;
    sectionCount = 0;
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    updateUndoRedoButtons();
    document.getElementById('result').style.display = 'none';
    document.getElementById('sourceCode').value = '';
    document.querySelector('#result .preview').innerHTML = '';
    console.log("Edytor został zresetowany.");
}

function updateUndoRedoButtons() {
    document.getElementById('btn-undo').disabled = historyIndex <= 0;
    document.getElementById('btn-redo').disabled = historyIndex >= history.length - 1;
}


document.addEventListener('DOMContentLoaded', () => {
    loadStateFromLocalStorage();
    const container = document.getElementById('sectionsContainer');

    new Sortable(container, {
        animation: 150,
        handle: '.drag-handle',
        onEnd: function () {
            saveState();
        }
    });

    container.addEventListener('input', debounce(saveState, 400));
    container.addEventListener('change', saveState);
});

document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key.toLowerCase() === 'z') { e.preventDefault(); undo(); }
    if (e.ctrlKey && e.key.toLowerCase() === 'y') { e.preventDefault(); redo(); }
});

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}


function addTextSection(suppressSave = false) {
    const container = document.getElementById('sectionsContainer');
    const sectionId = `section-${sectionCount++}`;
    const div = document.createElement('div');
    div.className = 'section-block';
    div.setAttribute('data-id', sectionId);
    div.innerHTML = `
      <div class="section-actions">
        <i class="bi bi-grip-vertical drag-handle me-2"></i>
        <div class="btn-group btn-group-sm me-2" role="group">
          <button type="button" class="btn btn-outline-secondary" onclick="moveUp(this)" title="Przesuń w górę"><i class="bi bi-arrow-up"></i></button>
          <button type="button" class="btn btn-outline-secondary" onclick="moveDown(this)" title="Przesuń w dół"><i class="bi bi-arrow-down"></i></button>
        </div>
        <button type="button" class="btn btn-sm btn-outline-danger" onclick="removeSection(this)" title="Usuń sekcję"><i class="bi bi-trash"></i></button>
      </div>
      <h5>Sekcja tekstowa</h5>
      <div class="mb-2"><label class="form-label">Rodzaj tagu:</label><select class="form-select" name="sections[${sectionId}][tag]" onchange="toggleListTitle(this)"><option value="p">p</option><option value="strong">strong</option><option value="h1">h1</option><option value="h2">h2</option><option value="h3">h3</option><option value="ul">Lista wypunktowana (ul)</option><option value="ol">Lista numerowana (ol)</option></select></div>
      <div class="mb-2 list-title" style="display:none"><label class="form-label">Nagłówek listy:</label><input type="text" class="form-control" name="sections[${sectionId}][list_heading]"></div>
      <div class="mb-2"><label class="form-label d-flex justify-content-between"><span>Treść:</span><button type="button" class="btn btn-sm btn-outline-dark" onclick="wrapInBold('editable-${sectionId}')"><strong>B</strong></button></label><div id="editable-${sectionId}" class="form-control editable-textarea" contenteditable="true" oninput="syncContentEditable(this, 'textarea-${sectionId}')"></div><textarea id="textarea-${sectionId}" name="sections[${sectionId}][content]" style="display: none;"></textarea></div>
      <div class="mb-2"><label class="form-label">Klasa CSS:</label><input type="text" class="form-control" name="sections[${sectionId}][class]"></div>
      <input type="hidden" name="sections[${sectionId}][type]" value="text">`;
    container.appendChild(div);
    if (!suppressSave) saveState();
    return div;
}

function addImageSection(suppressSave = false) {
    const container = document.getElementById('sectionsContainer');
    const sectionId = `section-${sectionCount++}`;
    const imageOptionsHtml = imageOptions.map((img, index) => `<option value="${index}">${img.alt}</option>`).join('');
    const div = document.createElement('div');
    div.className = 'section-block';
    div.setAttribute('data-id', sectionId);
    div.innerHTML = `
      <div class="section-actions">
        <i class="bi bi-grip-vertical drag-handle me-2"></i>
        <div class="btn-group btn-group-sm me-2" role="group">
          <button type="button" class="btn btn-outline-secondary" onclick="moveUp(this)" title="Przesuń w górę"><i class="bi bi-arrow-up"></i></button>
          <button type="button" class="btn btn-outline-secondary" onclick="moveDown(this)" title="Przesuń w dół"><i class="bi bi-arrow-down"></i></button>
        </div>
        <button type="button" class="btn btn-sm btn-outline-danger" onclick="removeSection(this)" title="Usuń sekcję"><i class="bi bi-trash"></i></button>
      </div>
      <h5>Sekcja obrazkowa</h5>
      <div class="mb-3"><label class="form-label">Wybierz zdjęcie z listy:</label><select class="form-select" onchange="updateImageDetails(this, '${sectionId}')"><option value="">-- Wybierz lub wypełnij ręcznie --</option>${imageOptionsHtml}</select></div>
      <div class="mb-2"><label class="form-label">URL obrazka:</label><input type="text" class="form-control" name="sections[${sectionId}][url]" placeholder="https://example.com/image.jpg"></div>
      <div class="mb-2"><label class="form-label">Alt:</label><input type="text" class="form-control" name="sections[${sectionId}][alt]" placeholder="Opis alternatywny"></div>
      <div class="row g-2"><div class="col-md-12"><label class="form-label">Szerokość (width):</label><input type="number" class="form-control" name="sections[${sectionId}][width]" value="1080"></div></div>
      <div class="mb-2 mt-2"><label class="form-label">Klasa CSS (dla tagu img):</label><input type="text" class="form-control" name="sections[${sectionId}][class]"></div>
      <div class="mt-3"><img src="" alt="Podgląd wybranego obrazka" style=" width: 150px; max-width: 100%; display: none;" class="image-preview"></div>
      <input type="hidden" name="sections[${sectionId}][type]" value="image">`;
    container.appendChild(div);
    if (!suppressSave) saveState();
    return div;
}

function addAdvantagesSection(suppressSave = false) {
    const container = document.getElementById('sectionsContainer');
    const sectionId = `section-${sectionCount++}`;
    const div = document.createElement('div');
    div.className = 'section-block';
    div.setAttribute('data-id', sectionId);
    div.innerHTML = `
      <div class="section-actions">
        <i class="bi bi-grip-vertical drag-handle me-2"></i>
        <div class="btn-group btn-group-sm me-2" role="group">
          <button type="button" class="btn btn-outline-secondary" onclick="moveUp(this)" title="Przesuń w górę"><i class="bi bi-arrow-up"></i></button>
          <button type="button" class="btn btn-outline-secondary" onclick="moveDown(this)" title="Przesuń w dół"><i class="bi bi-arrow-down"></i></button>
        </div>
        <button type="button" class="btn btn-sm btn-outline-danger" onclick="removeSection(this)" title="Usuń sekcję"><i class="bi bi-trash"></i></button>
      </div>
      <h5>Sekcja zalet</h5>
      <div class="advantages-container mb-3"></div>
      <button type="button" class="btn btn-sm btn-outline-primary" onclick="addAdvantageItem(this, '${sectionId}')">➕ Dodaj zaletę</button>
      <input type="hidden" name="sections[${sectionId}][type]" value="advantages">`;
    container.appendChild(div);
    if (!suppressSave) saveState();
    return div;
}

function moveUp(button) {
    const sectionBlock = button.closest('.section-block');
    if (sectionBlock && sectionBlock.previousElementSibling) {
        sectionBlock.parentElement.insertBefore(sectionBlock, sectionBlock.previousElementSibling);
        saveState();
    }
}

function moveDown(button) {
    const sectionBlock = button.closest('.section-block');
    if (sectionBlock && sectionBlock.nextElementSibling) {
        sectionBlock.nextElementSibling.after(sectionBlock);
        saveState();
    }
}

function removeSection(button) {
    button.closest('.section-block').remove();
    saveState();
}

function syncContentEditable(editableDiv, hiddenTextareaId) {
    const hiddenTextarea = typeof hiddenTextareaId === 'string' ? document.getElementById(hiddenTextareaId) : hiddenTextareaId;
    if (!hiddenTextarea) return;
    const clone = editableDiv.cloneNode(true);
    clone.querySelectorAll('div, p').forEach(el => el.appendChild(document.createTextNode('\n')));
    clone.querySelectorAll('strong, b').forEach(el => {
        el.before(document.createTextNode('[b]'));
        el.after(document.createTextNode('[/b]'));
    });
    let bbcode = (clone.textContent || clone.innerText || '').replace(/\n\n/g, '\n').trim();
    hiddenTextarea.value = bbcode;
}

function wrapInBold(editableId) {
    document.getElementById(editableId).focus();
    document.execCommand('bold', false, null);
    const hiddenTextareaId = 'textarea-' + editableId.split('-').slice(1).join('-');
    syncContentEditable(document.getElementById(editableId), hiddenTextareaId);
    saveState();
}

function updateImageDetails(select, sectionId) {
    const section = select.closest('.section-block');
    const index = select.value;
    const urlInput = section.querySelector(`input[name="sections[${sectionId}][url]"]`);
    const altInput = section.querySelector(`input[name="sections[${sectionId}][alt]"]`);
    const preview = section.querySelector('.image-preview');
    if (index !== '') {
        const imageData = imageOptions[index];
        urlInput.value = imageData.url;
        altInput.value = imageData.alt;
    }
    preview.src = urlInput.value;
    preview.alt = altInput.value;
    preview.style.display = urlInput.value ? 'block' : 'none';
}

function addAdvantageItem(button, sectionId) {
  const container = button.parentElement.querySelector('.advantages-container');
  const index = container.children.length;
  const optionElements = advantagesOptions.map((opt, i) => `<option value="${i}">${opt.title}</option>`).join('');
  const item = document.createElement('div');
  item.className = 'border rounded p-2 my-2 bg-white';
  item.innerHTML = `<div class="mb-2"><label class="form-label">Wybierz zaletę:</label><select class="form-select" onchange="updateHiddenFields(this, '${sectionId}', ${index})"><option value="">-- Wybierz --</option>${optionElements}</select></div><div class="hidden-fields"><input type="hidden" name="sections[${sectionId}][items][${index}][src]"><input type="hidden" name="sections[${sectionId}][items][${index}][alt]"><input type="hidden" name="sections[${sectionId}][items][${index}][title]"><input type="hidden" name="sections[${sectionId}][items][${index}][desc]"></div>`;
  container.appendChild(item);
}

function updateHiddenFields(select, sectionId, index) {
  const selectedIndex = select.value;
  const wrapper = select.closest('.border').querySelector('.hidden-fields');
  const inputs = { src: wrapper.querySelector(`[name="sections[${sectionId}][items][${index}][src]"]`), alt: wrapper.querySelector(`[name="sections[${sectionId}][items][${index}][alt]"]`), title: wrapper.querySelector(`[name="sections[${sectionId}][items][${index}][title]"]`), desc: wrapper.querySelector(`[name="sections[${sectionId}][items][${index}][desc]"]`) };
  if (selectedIndex === "") return Object.values(inputs).forEach(input => input.value = "");
  const option = advantagesOptions[selectedIndex];
  Object.keys(option).forEach(key => { if (inputs[key]) inputs[key].value = option[key]; });
}

function toggleListTitle(select) {
  const listTitle = select.closest('.section-block').querySelector('.list-title');
  listTitle.style.display = (select.value === 'ul' || select.value === 'ol') ? 'block' : 'none';
}

function escapeHtml(s = '') {
  return String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}

function loadFromPastedHTML(sourceCode) {
    if (!sourceCode.trim()) return alert('Pole z kodem źródłowym jest puste.');

    const parser = new DOMParser();
    const doc = parser.parseFromString(sourceCode, 'text/html');
    const processedElements = new Set();
    const newState = [];

    doc.querySelectorAll('.advantages-grid').forEach(grid => {
        if (processedElements.has(grid)) return;
        const items = Array.from(grid.querySelectorAll('.advantages-box h3')).map(h3 =>
            advantagesOptions.findIndex(opt => opt.title === h3.textContent.trim()).toString()
        ).filter(index => index !== "-1");
        if (items.length > 0) newState.push({ type: 'advantages', items });
        grid.querySelectorAll('*').forEach(child => processedElements.add(child));
        processedElements.add(grid);
    });

    function walkAndProcess(node) {
        if (processedElements.has(node)) return;
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
            newState.push({ type: 'text', tag: 'p', list_heading: '', content: node.textContent, class: '' });
            processedElements.add(node);
            return;
        }
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        let element = node, consumedNext = false, mainEl = element;

        if (['P', 'H1', 'H2', 'STRONG', 'B', 'UL', 'OL', 'IMG', 'H3'].includes(element.tagName)) {
             if (element.tagName === 'B') {
                element.tagName = 'STRONG';
            }
            if (element.tagName === 'H3' && element.nextElementSibling && ['UL', 'OL'].includes(element.nextElementSibling.tagName)) {
                mainEl = element.nextElementSibling;
                consumedNext = true;
            }
            if (mainEl.tagName === 'IMG') {
                newState.push({ type: 'image', url: mainEl.getAttribute('src') || '', alt: mainEl.alt, width: mainEl.getAttribute('width') || '', class: mainEl.className });
            } else {
                let content = ['UL', 'OL'].includes(mainEl.tagName) ? Array.from(mainEl.querySelectorAll('li')).map(li => `<div>${li.innerHTML}</div>`).join('') : mainEl.innerHTML;
                newState.push({ type: 'text', tag: mainEl.tagName.toLowerCase(), list_heading: (consumedNext ? element.textContent : ''), content, class: mainEl.className });
            }
            processedElements.add(element);
            if (consumedNext) processedElements.add(mainEl);
            mainEl.querySelectorAll('*').forEach(child => processedElements.add(child));
        } else {
            element.childNodes.forEach(walkAndProcess);
        }
    }
    doc.body.childNodes.forEach(walkAndProcess);
    setEditorState(newState);
    saveState();
    alert('Import zakończony!');
}

// --- POCZĄTEK ZMIENIONEGO KODU ---
function loadFromSource() {
    const sourceCode = document.getElementById('sourceCode').value;
    if (!sourceCode.trim()) {
        return alert('Pole z kodem źródłowym jest puste.');
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(sourceCode, 'text/html');
    const newState = [];
    const processedElements = new Set(); // Zapobiega podwójnemu przetwarzaniu

    // Funkcja rekursywna do przechodzenia przez drzewo DOM
    function processNode(node) {
        // Pomiń, jeśli węzeł został już przetworzony
        if (processedElements.has(node)) {
            return;
        }

        // Przetwarzaj tylko węzły typu ELEMENT
        if (node.nodeType !== Node.ELEMENT_NODE) {
            return;
        }

        let elementHandled = false;

        // --- Logika przetwarzania poszczególnych tagów ---

        // 1. Sekcja "Zalety" (advantages-grid) - najwyższy priorytet
        if (node.matches('.advantages-grid')) {
            const items = Array.from(node.querySelectorAll('.advantages-box h3'))
                .map(h3 => advantagesOptions.findIndex(opt => opt.title === h3.textContent.trim()).toString())
                .filter(index => index !== "-1");
            if (items.length > 0) {
                newState.push({ type: 'advantages', items });
            }
            elementHandled = true;
        }
        // 2. Obraz (IMG)
        else if (node.tagName === 'IMG') {
            newState.push({
                type: 'image',
                url: node.src,
                alt: node.alt,
                width: node.getAttribute('width') || '',
                class: node.className
            });
            elementHandled = true;
        }
        // 3. Listy (UL, OL) - sprawdzają, czy poprzedza je nagłówek
        else if (node.tagName === 'UL' || node.tagName === 'OL') {
            let heading = '';
            const prevElement = node.previousElementSibling;
            // Jeśli poprzedni element to nagłówek i nie został jeszcze przetworzony
            if (prevElement && ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(prevElement.tagName) && !processedElements.has(prevElement)) {
                heading = prevElement.textContent;
                processedElements.add(prevElement); // Oznacz nagłówek jako przetworzony
            }
            let content = Array.from(node.querySelectorAll('li')).map(li => `<div>${li.innerHTML}</div>`).join('');
            newState.push({
                type: 'text',
                tag: node.tagName.toLowerCase(),
                list_heading: heading,
                content: content,
                class: node.className
            });
            elementHandled = true;
        }
        // 4. Inne tagi tekstowe (P, H1, H2, H3, STRONG)
        else if (['P', 'H1', 'H2', 'H3', 'STRONG'].includes(node.tagName)) {
            // Sprawdź, czy ten tag nie jest nagłówkiem dla listy, która zostanie przetworzona później
            const nextElement = node.nextElementSibling;
            if (nextElement && ['UL', 'OL'].includes(nextElement.tagName)) {
                // To jest nagłówek listy, zostanie on obsłużony przez logikę dla UL/OL, więc nie rób nic
            } else {
                newState.push({
                    type: 'text',
                    tag: node.tagName.toLowerCase(),
                    list_heading: '',
                    content: node.innerHTML,
                    class: node.className
                });
                elementHandled = true;
            }
        }

        // --- Zakończenie logiki ---

        if (elementHandled) {
            // Jeśli element został przetworzony, oznacz go i wszystkie jego dzieci jako "zrobione"
            processedElements.add(node);
            node.querySelectorAll('*').forEach(child => processedElements.add(child));
        } else {
            // Jeśli element nie został obsłużony (np. jest to <div>, <section>),
            // kontynuuj przetwarzanie jego dzieci
            node.childNodes.forEach(child => processNode(child));
        }
    }

    // Rozpocznij przetwarzanie od głównych elementów w `body`
    doc.body.childNodes.forEach(node => processNode(node));

    setEditorState(newState);
    saveState();
    alert('Import zakończony!');
}
// --- KONIEC ZMIENIONEGO KODU ---

function generateHTML(event) {
    event?.preventDefault?.();
    const source = document.getElementById('sourceCode'), preview = document.querySelector('#result .preview');

    const originalState = getEditorState();

    const filteredState = originalState.filter(section => {
        switch(section.type) {
            case 'text':
                const hiddenTextarea = document.createElement('textarea');
                const editableDiv = document.createElement('div');
                editableDiv.innerHTML = section.content;
                syncContentEditable(editableDiv, hiddenTextarea);
                return hiddenTextarea.value.trim() !== '';
            case 'image':
                return section.url && section.url.trim() !== '';
            case 'advantages':
                return section.items && section.items.length > 0;
            default:
                return true; 
        }
    });

    let htmlChunks = [];
    filteredState.forEach(section => {
        const hiddenTextarea = document.createElement('textarea'), editableDiv = document.createElement('div');
        switch(section.type) {
            case 'text':
                editableDiv.innerHTML = section.content;
                syncContentEditable(editableDiv, hiddenTextarea);
                const contentRaw = hiddenTextarea.value;
                if (section.tag === 'ul' || section.tag === 'ol') {
                    const listHtml = buildList(section.tag, contentRaw, section.list_heading, section.class);
                    if (listHtml) htmlChunks.push(`<div class="item-description">${listHtml}</div>`);
                } else {
                    const cls = section.class ? ` class="${escapeHtml(section.class)}"` : '';
                    const tagHtml = `<${section.tag}${cls}>${bbcodeToHtml(contentRaw)}</${section.tag}>`;
                    htmlChunks.push(`<div class="item-description">${tagHtml}</div>`);
                }
                break;
            case 'image':
                if (section.url) {
                    const widthAttr = section.width ? ` width="${escapeHtml(section.width)}"` : '', classAttr = section.class ? ` class="${escapeHtml(section.class)}"` : '';
                    const imgHtml = `<img src="${escapeHtml(section.url)}" alt="${escapeHtml(section.alt)}"${widthAttr}${classAttr} loading="lazy">`;
                    htmlChunks.push(`<div class="item-description">${imgHtml}</div>`);
                }
                break;
            case 'advantages':
                if (section.items && section.items.length > 0) {
                    const boxes = section.items.map(index => advantagesOptions[index]).map(it => `<div class="advantages-box"><img src="${escapeHtml(it.src)}" alt="${escapeHtml(it.alt)}" /><div class="text"><h3>${escapeHtml(it.title)}</h3><p>${escapeHtml(it.desc)}</p></div></div>`).join('');
                    htmlChunks.push(`<div class="advantages-grid">${boxes}</div>`);
                }
                break;
        }
    });
    
    const finalHtml = htmlChunks.join('\n');
    document.getElementById('result').style.display = 'block';
    preview.innerHTML = finalHtml;
    source.value = finalHtml;

    setEditorState(filteredState);
    
    setTimeout(() => {
      saveState();
    }, 100);
}


function bbcodeToHtml(raw = '') {
    let s = escapeHtml(raw);
    s = s.replaceAll('[b]', '<strong>').replaceAll('[/b]', '</strong>');
    return s.replaceAll('\n', '<br>');
}

function buildList(tag, textContent, listHeading, cssClass) {
  const items = textContent.split(/\r?\n/).map(t => t.trim()).filter(Boolean).map(li => `<li>${bbcodeToHtml(li).replaceAll('<br>', '')}</li>`).join('');
  if (!items) {
      return '';
  }
  const heading = listHeading ? `<h3>${escapeHtml(listHeading)}</h3>` : '';
  const cls = cssClass ? ` class="${escapeHtml(cssClass)}"` : '';
  return `${heading}<${tag}${cls}>${items}</${tag}>`;
}

function updatePreview() {
  const preview = document.querySelector('#result .preview'), source = document.getElementById('sourceCode');
  if (preview && source) preview.innerHTML = source.value;
}

async function copyToClipboard() {
  const source = document.getElementById('sourceCode');
  if (!source || !source.value) return;
  try {
    await navigator.clipboard.writeText(source.value);
    alert('Skopiowano do schowka!');
  } catch {
    source.select();
    document.execCommand('copy');
    alert('Skopiowano do schowka!');
  }
}






