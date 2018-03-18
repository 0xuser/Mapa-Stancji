# MapaStancji - ogłoszeniowy portal dla studentów

# Wstęp

Aplikacja internetowa umożliwiająca znalezienie mieszkania lub pokoju do wynajęcia z głównym naciskiem na lokalizację.
W internecie istnieje wiele serwisów ogłoszeniowych, jednak gdy szukamy mieszkania w konkretnej lokalizacji, przeglądanie pojedynczych ofert staje się uciążliwe.

Serwis kierowany jest dla studentów którzy nierzadko szukają tylko samego pokoju w współdzielonym mieszkaniu. Duże znaczenie na wybór lokum ma również bliskość uczelni. Dzięki serwisowi znalezienie dogodnej oferty będzie szybkie i wygodne.

Na mapę naniesione są również dodatkowe obiekty takie jak uczelnie, przystanki czy miejsca zamieszkania naszych znajomych. 

# Rozwinięcie

Aplikacja w formie strony internetowej. Głównym elementem interfejsu jest wielka interaktywna mapa na której znajdują się "pinezki" (tzw. markery) będące wyznacznikiem lokalizacji a także odnośnikiem do konkretnego ogłoszenia.

Witryna dostępna pod adresem subdomena.domena.pl, gdzie: subdomena oznacza rejon ogłoszeń

Przykład: krakow.mapastancji.pl - adres ten powinien otworzyć serwis z przybliżeniem na rejon Krakowa.

System logowania rozwiązany za pomocą integracji z serwisem Facebook. Dodawanie ogłoszeń dostępne jest po zalogowaniu.
Ogłoszenie staje się publiczne po akceptacji przez administratora w specjalnym panelu stanowiącym rozwinięcie panelu użytkownika.

Aplikacja z wykorzystaniem API Google Maps
https://developers.google.com/maps/

# Wymagania funkcjonalne

Dostępne dla każdego 
- przeglądanie ogłoszeń na interaktywnej mapie
  * odbywa się to za pomocą implementacji API udostępnianej przez Google. Na mape nanoszone są "pinezki", stanowiące odnośnik do konkretnych ogłoszeń.
  
- filtracja wyświetlanych obiektów
  * zarządzanie wyświetlaniem dodatkowych obiektów na mapie (ikon uczelni, przystanków, w przypadku zalogowania także znajomych)
 
- filtracja wyświetlanych ogłoszeń
  * możliwość ograniczenia wyników wyszukiwania według parametrów takich jak rodzaj Mieszkanie/Pokój oraz cena, powierzchnia czy w przypadku pokoju ( jednoosobowy, dwuosobowy, z balkonem, nieprzechodni, tylko dla dziewczyny )

- wyświetlanie konkretnego ogłoszenia
  * po wybraniu "pinezki" na mapie wyświetla się okienko wraz ze szczegółami ogłoszenia

- logowanie za pośrednictwem Facebook
  * wykorzystanie API Facebook do integracji https://developers.facebook.com/docs/facebook-login
  * serwis jest nowy, nie może zniechęcać użytkownika żmudnym procesem rejestracji
 
Dostępne tylko dla zalogowanego użytkownika:
wszystkie z powyższych oraz

- Dodawanie ogłoszenia
  * Przy dodawaniu ogłoszenia użytkownik musi wypełnić wszystkie pola "konieczne" reszta jest opcjonalna.
  * Konieczne jest podanie typu ogłoszenia (mieszkanie / pokój / pokój współdzielony).
  * Dla mieszkania pola konieczne to wybranie lokalizacji, dodanie minimum jednego zdjęcia, podanie tytułu, numeru kontaktowego, ceny, powierzchni, piętra i     krótkiego opisu 
  * Dla pokoju / pokoju współdzielonego trzeba dodatkowo podać warunki użytkowania części wspólnych.
  * wybranie lokalizacji odbywa się przez wskazanie na mapie.
  * przy dodawaniu odbywa się walidacja danych (cena i powierzchnia muszą być liczbami a pliki muszą mieć rozszerzenie .jpg / .png.
  * Pojedyńczy plik może mieć maksymalny rozmiar 2MB.
  * Do jednego ogłoszenia można dodać maksymalnie 8 zdjęć, gdzie jedno jest miniaturką.
  * nie ma limitu ogłoszeń
  * ogłoszenie po dodaniu musi zostać zaakceptowane przez administratora
  
- Modyfikacja ogłoszenia
  * umożliwia zmianę wszystkich danych w dodanym już ogłoszeniu. Zmiana zdjęć, tytułu czy opisu wymaga ponownej akceptacji ogłoszenia przez administratora.
  
- Usuwanie ogłoszeń
  * Pozwala bezpowrotnie usunąć aktywne ogłoszenia.
  
- Dezaktywacja ogłoszenia
  * Powoduje, że ogłoszenie nie jest wyświetlane publicznie. Dane nie są kasowane z serwera.
- Aktywacja ogłoszenia
  * Pozwala przywrócić spowrotem dezaktywowane ogłoszenie. Ogłoszenie aktywowane nie musi zostać ponownie akceptowane przez administratora.
  
- Zarządzanie swoją lokalizacją
  * Funkcja ta pozwala dodać / usunąć aktualne miejsce zamieszkania na mapie. Udostępniona lokalizacja będzie widoczna dla znajomych z Facebook'a. 

- Wyświetlanie znajomych na mapie
  * Wyświetlanie na mapie znajomych z Facebooka którzy dodali w portalu swoją lokalizację.
  // przemyśleć wyświetlanie znajomych z grupy.

- Wylogowywanie
  * kończy sesje użytkownika
 
Dostępne tylko dla zalogowanego użytkownika z uprawnieniami administratora
wszystkie z powyższych oraz

- Akceptowanie ogłoszeń
  * wszystkie ogłoszenia dodane przez użytkowników w portalu muszą pierw przejść akceptacje
  * w przypadku gdy ogłoszenie nie zostanie zaakceptowane, użytkownik ma zostać o tym fakcie poinformowany, ma mieć również możliwość edycji niezaakceptowanego ogłoszenia. Po dokonaniu popraw może starać się o ponowną akceptacje.
  * zaakceptowanie ogłoszenia sprawia, że zostaje ono wyświetlane publicznie.
  * Możliwość przekazania krótkiej noty od administratora dla użytkownika.
  
- Kasowanie ogłoszeń
  * możliwość kasowania przez administratora ogłoszeń
  * użytkownik powinien zostać poinformowany o tym, że jego ogłoszenie zostało usunięte.
  * Możliwość przekazania krótkiej noty od administratora dla użytkownika.

- Dodawanie niestandardowych "pinezek" do mapy
  * administrator ma mieć możliwość dodania na mapę obiektów specjalnych takich jak przystanki komunikacji czy uczelnie.

# Wygląd interfejsu

# Zmiana styli wyświetlania map Google

Mapa powinna posiadać specjalnie zmodyfikowane style
![My image](https://i.imgur.com/JsJj18Y.png)

zmiany:
- widok zmieniony na styl "retro"
- uproszczone wyświetlanie dzielnic (Locality)
- podkolorowana woda i tereny zielone.
- ukrycie zbędnych informacji na mapie (Attraction)
- uczelnie w kolorze wypełnienia #fd9191 (School)
- obiekty sportowe w kolorze wypełnienia #ac92fc (Sports complex)
- autostrady zmiana grubości na 4 (Highway)

//Niestety Uniwersytet Ekonomiczny jest dodany do Google Maps jako "business institution" a nie placówka uczelniana.

# Pinezki na mapie

Pinezka - grafika sybolizująca obiekt lub ogłoszenie na mapie, "marker" to odpowiednik pinezki w języku angielskim

Mapa posiadać będzie niestandardowe markery z biblioteki
http://map-icons.com/

![My image](https://i.imgur.com/vzwMiXy.png)

Przypadki:
- mieszkanie SQUARE_ROUNDED marker
- pokój x osobowy MAP_PIN z odpowiednią liczbą
- znajomy na mapie SQUARE_PIN ze zdjęciem profilowym znajomego

![My image](https://i.imgur.com/gKgcuOL.png)

- przystanek ROUTE z odpowiednią ikoną map-icon-transit-station
- uczelnie powinny posiadać swoje własne odpowiednie grafiki

//Co w przypadku gdy w jednej lokalizacji są do wynajęcia 2 pokoje? (nie jako mieszkanie) lub markery nakładają się?
dodatkowy marker który "stackuje" ??

# Zarys interfejsu

Ilustracja jest bardzo podglądowa, przedstawie wyświetlanie ogłoszenia po dodaniu
![My image](https://i.imgur.com/2mYbAvz.png)





