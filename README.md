# steamdeck-gw2-layout
Guild Wars 2 Simple&amp;Intuitive control layout for Steam Deck: resources, releases, files and guides

# Simple steps
1. Initial assumptions are: you have Guild Wars 2 added to your steam account, client was downloaded and started at least once. It does not matter if you are logging in with Steam or ANet credentials, but game must have been started to ensure certain directories exist and it needs to be added through steam so that game id and directory names are matching with directory structure of this layout release files.
2. It should be possible to open Steam's controller configuration for Guild Wars 2 and search Community Layouts for "Simple&amp;Intuitive" authored by Vonsh on 14 January 2024. If search yields such entry, its enough to apply it and go to step #5, but this method reportedly does not always return any results, in which case follow next steps.
3. Switch your Steam Deck to desktop mode: press [STEAM] button, select "Power" and "Switch to Desktop".
4. Open your preferred browser (there are some users experiance issues with Firefox, but Brave and Chrome are reportedly working) and paste the following link to address bar: `steam://controllerconfig/1284210/3139116388`, and press enter. Pop-up should appear asking if you want to start application - agreeing will open Steam's Guild Wars 2 Controler Settings - you need to apply this layout. Make sure you access the address, and not use search engine with it as an input.
5. You are done now! Layout works with game's default settings out of the box. I believe it should be intuitive enough to learn it on your own pretty quickly, but you are free to go to Overview section to read on some tips and advanced features.
6. To make touch menu icons matching game's GUI, download latest `.tar.gz` release (accessible on panel to the right or in Releases tab). Extract the archive and manually move its contents to `/home/deck/.steam/steam/steamapps` directory. Alternatively, to automate the process,  you can right-click in directory where file was downloaded, click "Open Terminal Here" option and copy-paste the following command there `tar xf steamdeck-gw2-layout-1.0.0.tar.gz --strip=1 --directory /home/deck/.steam/steam/steamapps`.
7. You are done again! Now all the touch menus will be using icons matching in-game user interface.
8. Start the game - you are free to do so back in Gaming Mode or stay in Desktop Mode. Remaining optional setup is done through game.
9. Within game open settings (menu [hamburger] button on SteamDeck) and click controls (with right trackpad). In bottom right corner of the panel, there is "Export" button and "Import" selection box. If you have some control scheme already - for example adjusted to your keyboard+mouse PC - press "Export" and give it some recognisable name eg "Good'ol Bindings". Now press "Import" selector - from available options (one of which, if you did export beforehand, should be your "Good'ol Bindings") select "SteamDeck Simple".

For additional help, feel free to reach me out in game as "Aenia Shadowforce.9148", through [reddit thread](https://www.reddit.com/r/Guildwars2/comments/194sqa6/steam_deck_simpleintuitive_controller_layout_for) or via [Steam](https://steamcommunity.com/profiles/76561198064514229/).
