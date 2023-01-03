# Config.yml 

* **[config.yml](config/config.md)**
* [Create A New Crate](config/crate.md)

The config.yml allows you to modify global settings for the plugin.

## Prefix

Change the prefix shown before a message from the plugin.

```YML
prefix: '&8[&bCrates&8]&e'
```

## Locale

Change the language of the plugin. The following languages are supported:

| Language | Code |
| -------- | ---- |
| English  | en   |
| French   | fr   |
| Italian  | it   |
| Chinese  | zhs  |
| Russian  | rf   |
| German   | de   |
| Vietnamese | vn |
| Spanish  | es   |
| Turkish  | tr   |

```YML
locale: en
```

## Logger

Enable a built in logger used as a debugging tool to see events occuring.

```YML
logger: false
```

## Decimal Format

Change how the plugin should handle decimal numbers. Eg `#.##` results in `1.23`, and `#.#` results in `1.2`.

```YML
decimal-format: '#'
```

## Cooldown

How long a player has to wait between actions.

```YML
cooldown: 1.0
```

## Hologram Provider

Change what plugin is used for holograms. Supported plugins are [CMI](https://www.spigotmc.org/resources/cmi-298-commands-insane-kits-portals-essentials-economy-mysql-sqlite-much-more.3742/?__cf_chl_tk=qeciDECk703nM57utNWdyBa5iv5RNYhXFtRjCDqCg7Y-1668999020-0-gaNycGzNDl) and [Holographic Displays](https://dev.bukkit.org/projects/holographic-displays?__cf_chl_tk=cAE.5wb0zR3bHUbTSY8NFRRG_dqjOaeN_tgwrqR0ifA-1672706846-0-gaNycGzNEr0). CrateReloaded Pro also supports [Decent Holograms](https://www.spigotmc.org/resources/decentholograms-1-8-1-19-3-papi-support-no-dependencies.96927/)

```YML
hologram-plugin: 'HolographicDisplays'
```

## Creative Settings

This setting is used to prevent duplication of keys while in creative mode.

```YML
creative:
  # Enables safety checks
  safety: true
  # Allows ops to override the safety checks imposed on creative players
  exclude-ops: false
```

## Timezone

Change the timezone the plugin uses. Common timezones:

| Timezone                       | Abbreviation | Time Offset |
|--------------------------------|--------------|-------------|
| Greenwich Mean Time            | GMT          | UTC +0      |
| Eastern Standard Time          | EST          | UTC -5      |
| Central Standard Time          | CST          | UTC -6      |
| Mountain Standard Time         | MST          | UTC -7      |
| Pacific Standard Time          | PST          | UTC -8      |
| Central European Standard Time | CEST         | UTC +2      |

See the full list of timezones [here](https://en.wikipedia.org/wiki/List_of_time_zone_abbreviations).

```YML
timezone: 'PST'
```

## Date Format

Change the formatting the plugin uses for date and time. Most common formatting:

| Letter | Function                        | Result   |
|--------|---------------------------------|----------|
| yy     | Year (short)                    | 23       |
| yyyy   | Year (long)                     | 2023     |
| MM     | Month (number)                  | 12       |
| MMM    | Month (shortened)               | Dec      |
| MMMM   | Month (long)                    | December |
| d      | Day of the month (no leading 0) | 9        |
| dd     | Day of the month (leading 0)    | 09       |
| E      | Day name (short)                | Tue      |
| EE     | Day name (long)                 | Tuesday  |
| a      | AM or PM                        | AM       |
| H      | Hour in day (0-23)              | 23       |
| k      | Hour in day (1-24)              | 24       |
| K      | Hour in 12 hour format (0-11)   | 0        |
| h      | Hour in 12 hour format (1-12)   | 12       |
| m      | Minute in hour                  | 59       |
| s      | Second in minute                | 32       |

See complete list [here](https://www.digitalocean.com/community/tutorials/java-simpledateformat-java-date-format).

```YML
date-format: 'E, dd MMM yyyy HH:mm:ss z'
```

## Claim Settings

All the settings for the `/cr claim` function.

### Command

Change the base command that is used (`/cr`) **Do NOT change this unless conflicting**

```YML
command: 'cr'
```

### Limit

Maximum amount of rewards a player can claim from `/cr claim`. Either this number, or the amount of free inventory slots the user has.

```YML
limit: 15
```

### Menu

The name of the `/cr claim` menu.

```YML
menu: 'Claim Rewards!'
```
### Handle Full Inventory

Should the claim manager handle it if the players inventory is full, if disabled, items will drop to the ground.

```YML
  handle-full-inventory: true
```

### Reminder Settings

Configure the reminder function of pending rewards to claim.

#### Join

Should a reminder be given to the user when the join the server?

```YML
join: true
```

#### Timer

Should the player be reminded at set intervals of time?

```YML
timer: true
```

#### Period

If timer is `true`, how long is should the interval be?

```YML
period: 900
```

### Format

How the items should look in the `/cr claim` menu.

#### Item

Change how the items description will look.

```YML
- '{lore}'
- '&7Number of Rewards: &6{number}'
- '&7Received on {date}'
```

#### Item Success

How the item should look once claimed.

```YML
item-success: '&a&lClaimed!'
```

## Crate

Configure settings regarding crates.

### Comparison Level

Change how much an item needs to match a crate to be valid.

0 - Name, type, and lore.
1 - (Setting 0), Enchants, and item flags
2 - (Setting 1), Custom NBT

```YML
compare: 0
```

### Display

Add an item that is shown during an animation.

```YML
display: ''
```

### Menu

Name of the preview menu.

```YML
menu: 'Menu'
```

### Confirmation Menu

Name of the confirmation menu.

```YML
confirmation-menu: 'Confirm!'
```

### Craft

Can players put crates/keys into crafting inventories?

```YML
craft: false
```

### Item Frame

Can players put crates/keys into item frames?

```YML
item-frame: false
```

### Peri Exit

Can players quit animations that havent fully completed?

```YML
peri-exit: false
```

### CSGO

Length of the CSGO animation

```YML
csgo: 6
```

### Roulette

Length of the roulette animation

```YML
roulette: 5
```

### Wheel

Length of the wheel animation

```YML
wheel: 8
```

### Buttons

Configure what buttons in the different GUIs will look like.
#### Enabled

Enable/disable buttons in GUIs.

```YML
enabled: true
```

#### Next

Go to the next page in a GUI.

```YML
next: 'ARROW 1 name:&aNext_Page lore:&eClick_to_enter_the_next_page.'
```

#### Close

Exit a GUI.

```YML
close: 'MUSIC_DISC_11 1 name:&4Close! flag:HIDE_POTION_EFFECTS'
```

#### Back

Go to the previous page in a GUI.

```YML
back: 'RED_BED 1 name:&4&lGo_back lore:&eGo_back_to_previous_page.'
```

#### Accept

The accept button in the confirmation menu of a crate.

```YML
accept: 'GREEN_STAINED_GLASS_PANE 1 name:&aYes lore:&fClick_here_to_open_{crate}!'
```

#### Decline

The decline button in the confirmation menu of a crate.

```YML
decline: 'RED_STAINED_GLASS_PANE 1 name:&4No'
```

#### CSGO Top

The item displayed above a winning item in the CSGO animation.

```YML
csgo-top: 'REDSTONE_TORCH 1 name:&6Prize!'
```

#### CSGO Bottom

The item displayed below a winning item in the CSGO animation.

```YML
csgo-bot: 'REDSTONE_TORCH 1 name:&6Prize!'
```

### Pushback

Settings regarding pushback when a crate is clicked without a valid key.

#### Enabled

Should the user be pushed back?

```YML
enabled: true
```

#### Modifier

How far should the user be pushed back?

```YML
x: 1.0
y: 1.0
z: 1.0
```

### Hologram

Settings for holograms.

#### Modifier

Offset for the holograms to be displayed, by default holograms are centered one block above the crate. 

```YML
x: 0.0
y: 0.0
z: 0.0
```
