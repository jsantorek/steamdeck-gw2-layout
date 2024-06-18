# Simple&Intuitive Steam Controls Layout for Guild Wars 2 with Steam Deck
Guild Wars 2 Simple&amp;Intuitive control layout for Steam Deck: resources, releases, files and guides.

Layout design principles, in priority order:
1.  Works with game's default settings, new player able to load the layout immediately after account creation and it is fully playable.
2.  Supports advanced features out of the box (if they are enabled in game by default) or they are trivially configurable (if new account would need to enable them anyway).
3. Has no redundancies, unused menus, separate modes for mounts use, map navigation or map selection to keep it as simple as possible.
4.  Follows game's default HUD to make it as intuitive as possible.
5.  It keeps space to allow for growth with new masteries/mounts/novelties/templates.

# How to get it
### Initial Requirements
There are few things you need to make sure of before heading for installation of Simple&amp;Intuitive control layout for your SteamDeck:
1. You have Guild Wars 2 added to your Steam account (for an alternative, check [notes](#note-non-steam-installation))
2. The client is already downloaded
3. The game was successfully run at least once

It is not relevant if you are signing in with Steam or Arena Net credentials. Having client acquired as a Steam Game ensures its id and directory names match defaults used in download files and Controller Layout.

### Basic Setup
It should be possible to open Steam's controller configuration for Guild Wars 2 and search Community Layouts for "Simple&amp;Intuitive" authored by Vonsh on 14 January 2024. If search yields such entry, its enough to apply it, but this method reportedly does not always return any results, in which case do the following:
1. Switch your Steam Deck to desktop mode: press [STEAM] button, select "Power" and "Switch to Desktop".
2. Open internet browser, paste the following link to address bar: `steam://controllerconfig/1284210/3139116388/`, and press enter. A pop-up should appear asking if you want to start application - agreeing will open Steam's Guild Wars 2 Controler Settings - you need to apply this layout.

You are done now! Layout works with game's default settings out of the box - no additional settings nor downloads are necessary. I believe it should be intuitive enough to learn it on your own pretty quickly, but you are free to go to [overview](#overiview) section to read on some tips and explanations.

### Optional: Installation of Icons
1. Download latest `.tar.gz` release [here](https://github.com/jsantorek/steamdeck-gw2-layout/archive/refs/tags/1.0.0.tar.gz). 
2. Extract the archive and manually move its contents to `/home/deck/.steam/steam/steamapps` directory. Alternatively, to automate the process,  you can right-click in directory where file was downloaded, click "Open Terminal Here" option and copy-paste the following command there `tar xf steamdeck-gw2-layout-1.0.0.tar.gz --strip=1 --directory /home/deck/.steam/steam/steamapps`.
3. If everything was done correctly, virtual menu's displayed on screen will now be using game's UI icons.

This whole process is basically supposed to do two things: put [SteamDeck Simple.xml](https://github.com/jsantorek/steamdeck-gw2-layout/blob/1.0.0/compatdata/1284210/pfx/drive_c/users/steamuser/Documents/Guild%20Wars%202/InputBinds/SteamDeck%20Simple.xml) file to Guild Wars'2 Document's subdirectory on Proton prefix filesystem (to make activation of advanced features easier) and place [TouchMenuIcons with all its contents](https://github.com/jsantorek/steamdeck-gw2-layout/tree/1.0.0/common/Guild%20Wars%202/TouchMenuIcons) in Steam game's directory (to make menus use custom icons).

### Optional: Activation of Advanced Features
As a pre-requisite, you need to follow all steps from [installation of icons](#optional-installation-of-icons) section.
1. Start the game - you are free to do so back in **Gaming Mode** or stay in **Desktop Mode**.
2. After Guild Wars 2 loads, open *Game Menu* (by pressing "Menu" [&equiv;] button on Steam Deck) and navigate to *Options*, then *Control Options* (cursor movement and clicking is done with right trackpad).
3. In bottom right corner of the panel, there is "Export" button and "Import" selection box. Press the "Import" and from available options select "SteamDeck Simple".

### Note: Non steam installation
There is a way to make layout work with non-steam installation of the game - for example in countries where the game is not being distributed through Steam. This will require substitution of appid: `1284210`, with whatever name you've given the game locally. Assuming the name is "Guild Wars 2", layout address becomes `steam://controllerconfig/Guild%20Wars%202/3139116388/` and proton prefix directory becomes something random that you will need to determine. 

# Overview
Joysticks are most self-explanatory and intuitive. When starting a new game on a modern system, player should expect left one to move character around and right one to operate camera - which is exactly what happens.
 - This behaviour in most popular layouts is achieved relying on action camera, which forces user to set additional key binding manually. The toggle will also not be preserved between play sessions and for some cases user needs to remember toggling it on and off between UI navigation and regular gameplay. My attempt instead replicates my own PC experience: having right mouse button clicked 90% of the time as I run around.
 - Using <kbd>&uarr;</kbd><kbd>&darr;</kbd><kbd>&larr;</kbd><kbd>&rarr;</kbd> instead of <kbd>W</kbd><kbd>S</kbd><kbd>A</kbd><kbd>D</kbd> makes it possible to use left analog for Character Selection screen navigation or corrections in text or numeric fields.
 - Autorun <kbd>R</kbd> is available with left joystick short hard press.
 - [Advanced Feature]: Walk toggle is available with left joystick long hard press.
 - [Advanced Feature]: Action camera toggle is available with a single hard press of a right joystick.
 - Please notice a pattern that all camera related actions (move camera, toggle action camera) are on right analog, while all movement related actions (move, autorun, walk) are on left one.
 - Learn to place your right thumb on top of joystick for the device to correctly register that it is being touched.
 - Sometimes if you leave mouse cursor over HUD element (map, skill bar, inventory panel etc), camera movement might not work until you move it away.
 - [Customization option]: I've set analog sensitivity along X and Y axes to what I personally feel reflects best my area of interest when looking around, but feel free to adjust that according to your preferences.

Keeping the "left side/hand is for movement" theme, dodge <kbd>V</kbd> is bound to left trigger and jump <kbd>Space</kbd> is bound to left bumper.
 - [Customization option]: In past I have been experimenting with left trigger having two modes of activation: half-press for plain dodge and full-press for dodge jump <kbd>V</kbd>+<kbd>Space</kbd>. This setup works very well for numerous areas, but unfortunately makes some mounts, noticeably Griffon and Raptor, much more challenging to use. In the end I've decided to remove it (since you can still just press bumper and trigger at the same time for dodge jump), but feel free to experiment on your own - especially if you do not use these mounts or play primarily WvW or PvP.

Right trackpad is a mouse, plain and simple - click is left mouse button, double click, drag and drop - all works as you would expect it to.
 - To right click (eg on salvage kit to salvage all, bag to consume all or player in party/squad to join their map) simply hover over target with cursor using the trackpad, then gently tap the top part of right joystick.
 - Mouse in game serves few additional purposes: zooming in and out, scrolling through panels, splitting stacks, linking items in chat and changing which skill activates automatically - more on all of these in later section.

Left trackpad is designated as a virtual menu for frequently used panels: **inventory** <kbd>I</kbd>, **friends** <kbd>Y</kbd>, **guild** <kbd>G</kbd> etc. These are all also accessible through icons in top left corner of screen.
 - [Customization option]: The three most commonly used by me shortcuts are all in central horizontal line:  **hero panel**,  **inventory panel**  and  **wizard's vault** - you are free to reorder them as you like though. It's also possible to add new entries, which I felt needed no shortcut eg **Pet Dialog** <kbd>K</kbd>  or  **Party Dialog** <kbd>P</kbd>.
 - [Customization option][Advanced Feature]: You are additionally able to create shortcuts for **Mail Dialog** <kbd>[</kbd>and **PvP Panel** <kbd>]</kbd>. Game's original icons for these are also available for manual assignment.

The other theme is "right side is for skills", thus all weapon skills, slot skills and profession skills are accessible with: right bumper, right trigger and XYAB buttons. Because this is way more skills than buttons, two chord buttons (modifier buttons, acting only when held) are needed:
 - Hold back grip top left button L4 to access profession skills - on top left of a skill bar
 - Hold back grip top right button R4 to access slot skills - on the right side of a skill bar.

|  | no back button held | R4 held | L4 held |
|--|--|--|--|
|**R1** | Weapon Skill 1 <kbd>1</kbd> | Healing Skill <kbd>6</kbd> | Profession Skill 1 <kbd>F1</kbd> |
| **X** | Weapon Skill 2 <kbd>2</kbd> | Utility Skill 1 <kbd>7</kbd> | Profession Skill 2 <kbd>F2</kbd> |
| **A** | Weapon Skill 3 <kbd>3</kbd> | Utility Skill 2 <kbd>8</kbd> | Profession Skill 3 <kbd>F3</kbd> |
| **B** | Weapon Skill 4 <kbd>4</kbd> | Utility Skill 3 <kbd>9</kbd> | Profession Skill 4 <kbd>F4</kbd> |
| **Y** | Weapon Skill 5 <kbd>5</kbd> | Elite Skill <kbd>0</kbd> | Profession Skill 5 <kbd>F5</kbd> |

- Right Bumper is Weapon Swap <kbd>`</kbd>. In addition to that, Mount Skill 2 <kbd>C</kbd> will be called which is irrelevant for regular combat, but results in very pleasant mount navigation. You will be moving and looking with joysticks while mount skills will all be available through bumpers (jump, fly up, skill 2) and triggers (engage skill, skill 1).
- Special Action key <kbd>N</kbd> is invoked when both top back grip buttons acting as skillset modifiers are pressed at the same time. You can press one after the other, or both at once, this does not really matter.
 - [Customization option]: With button ordering I tried to follow observed by me trend, to have more frequently used skills on left side of any set of skills. Thus Right Trigger (most mashed button) becomes auto attack <kbd>1</kbd>, self heal <kbd>6</kbd> or skill <kbd>F1</kbd> (most spammed skills); next three easily reachable buttons (roughly lying ordered in an arc) XAB, following ordering on a skill bar become weapon skills <kbd>2</kbd><kbd>3</kbd><kbd>4</kbd>, utility skills <kbd>7</kbd><kbd>8</kbd><kbd>9</kbd> or profession skills <kbd>F2</kbd><kbd>F3</kbd><kbd>F4</kbd>; finally the furthest button Y, becomes the least spammy, the most impactful weapon skill <kbd>5</kbd>, elite skill <kbd>0</kbd> or profession skill <kbd>F5</kbd>.
    
Directional pad contains 2 shortcuts: up is  **Map** <kbd>M</kbd> (as in "I want to move somewhere else"), down is  **Interact/talk/pickup** <kbd>F</kbd> (as in "I want to grab this toward me"). Additionally right and left are for enemy targeting (next enemy <kbd>Tab</kbd> and previous enemy <kbd>Shift</kbd>+<kbd>Tab</kbd>).
 - If you keep left pressed longer it will call out currently targeted enemy <kbd>Ctrl</kbd><kbd>T</kbd>, and if keep right pressed longer it will take the target that is currently called <kbd>T</kbd>.

"Menu" button [&equiv;] is for <kbd>Esc</kbd>  key - not only it opens Game Menu, it also closes panels and cancels target.
 - When held longer, it opens logout or change character panel - extremely useful when doing a morning tour through your characters for daily chests or purchases.

The two remaining back grip buttons are used to mount/dismount <kbd>X</kbd>(R5, since mounts are on right side of skill bar) and use Mastery Skill <kbd>J</kbd> (L5, since shortcut for that is on left side of skill bar).
 - [Advanced Feature]: When held longer, R5 will turn Right Trackpad to mount selection menu and Left Trackpad to Novelty selection menu. Mount selection menu is set to trigger on release, meaning you do not need to actually press the trackpad to activate mount - it is enough to hover finger over correct one and release: either trackpad or back button.
 - [Advanced Feature]: When held longer, L5 will turn Right Trackpad to Mastery Skill selection menu and Left Trackpad to Build and Equipment Template selection menu

The final "View" button [&#x29c9;] is a Miscellaneous layer button, that when held, will change behaviour of several buttons to some rarely (but still sometimes) used functions:
 - Back grip buttons on the left become <kbd>PgUp</kbd> and <kbd>PgDn</kbd> (for floor changes on map), and the ones on the right become scroll up/down (for camera, map and mini-map zoom in/out)
 - Right trackpad becomes <kbd>Alt</kbd>+[left mouse click], to enable stack splitting through drag and drop
 - Touching right joystick becomes <kbd>Ctrl</kbd>+right mouse click, to enable change of automatically activated skill
 - A becomes <kbd>Enter</kbd>, to allow quicker logging, character selection or chat opening. B becomes <kbd>Backspace</kbd> - sometimes useful to correct values in text/number fields.
 - X and Y become <kbd>Ctrl</kbd> and <kbd>Shift</kbd>+[left mouse click], to allow item linking in chat. Obviously first you need to move cursor over item with right trackpad.
 - "Menu" button [&equiv;] becomes a "debug" command, removing all other layers on top of control layout. Extremely rarely, after using Special Action, I've had experienced being locked in profession skills or utility skills mode, even when no L4 nor L5 buttons were being held anymore. I believe this was a bug that Valve could have already fixed in their OS, but to save myself from needing to restart game if it ever happens again, I've kept the button.
 
For additional help, feel free to reach me out in game as *Aenia Shadowforce.9148*, through [reddit thread](https://www.reddit.com/r/Guildwars2/comments/194sqa6/steam_deck_simpleintuitive_controller_layout_for) or via [Steam](https://steamcommunity.com/profiles/76561198064514229/).
