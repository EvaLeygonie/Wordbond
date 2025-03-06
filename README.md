# Färger

#fa4032 - rgba(250, 64, 50, 0.5)
#fa812f - rgba(250, 129, 47, 0.5)
#fab12f - rgba(250, 177, 47, 0.5)
#fef3e2 - rgba(254, 243, 226, 0.5)
#575555 - rgba(87, 85, 85, 0.5)

linear-gradient(90deg, #fa4032, #fa812f, #fab12f, #fef3e2)

# Fonts

- Crimson Pro - Titles
- Inter Standard - Text
- Inter Italic - Highlight text

# Media Queries & Font storlekar

Default - App (375px)

- H1:
- H2:
- H3:
- p:

@media screen and (min-width: 500px)

- H1:
- H2:
- H3:
- p:

@media screen and (min-width: 700px)

- H1:
- H2:
- H3:
- p:

# Allmän

- Hamburgare meny: stängs när man klickar på en flik
- Desktop: Highlighta fliken man är på
- Bestäm Font storlekar

# Match page

- Kartan

# ChatPage

- Like + Emojis
- Local storage => Spara meddelanden & ordbok
  => Halva skärmen på desktop, modal på app?
- Pinia eller reactive store?

Responsiv design:

- Lägga till profilbild i desktop view
- Lägg till "toolbox" section brevid chatten
- Spara meddelande => stjärna, läggs i toolbox

- Koppla AI
- Translate API
- AI assistent, förslag på meningar?

Koppla med resten:

- Chat funktion efter att man loggat in + username skickas från meny + profil med query params. En enda vän
- Länk name/språk till både profil & hem byt

  switch (language) {
  case Arabic:
  language = 'ar'
  break
  case Dutch:
  language = 'nl'
  break
  case English:
  language = 'en'
  break
  case French:
  language = 'fr'
  break
  case German:
  language = 'de'
  break
  case Greek:
  language = 'el'
  break
  case Hindi:
  language = 'hi'
  break
  case Italian:
  language = 'it'
  break
  case Japanese:
  language = 'ja'
  break
  case Korean:
  language = 'ko'
  break
  case Mandarin:
  language = 'zh'
  break
  case Portuguese:
  language = 'pt'
  break
  case Russian:
  language = 'ru'
  break
  case Spanish:
  language = 'es'
  break
  case Swedish:
  language = 'sv'
  break
  case Turkish:
  language = 'tr'
  break
  }
