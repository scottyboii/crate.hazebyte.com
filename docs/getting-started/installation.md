# Installation

## Prerequisites

CrateReloaded requires either the Bukkit or Spigot API. Note that the official vanilla minecraft server is not supported.
At this current moment, we do not support Sponge.

**CrateReloaded from [Spigot - Free](https://www.spigotmc.org/resources/mystery-crate-crate-reloaded.861/), 
[Spigot - Premium](https://www.spigotmc.org/resources/.3663/),
[Bukkit](http://dev.bukkit.org/bukkit-plugins/crate-reloaded/)**

:::info

CrateReloaded has optional dependencies to improve ease-of-use.

:::

### Optional

1. [**Vault**](https://www.spigotmc.org/resources/vault.34315/)
2. **Essentials** or [**EssentialsX**](https://www.spigotmc.org/resources/essentialsx.9089/)
3. [**HolographicDisplays**](https://dev.bukkit.org/projects/holographic-displays) or **[CMI](https://www.spigotmc.org/resources/cmi-298-commands-insane-kits-portals-essentials-economy-mysql-sqlite-much-more.3742/?__cf_chl_tk=qeciDECk703nM57utNWdyBa5iv5RNYhXFtRjCDqCg7Y-1668999020-0-gaNycGzNDl) (Holographics)**.
   * CrateReloaded PRO may also use [Decent Holograms](https://www.spigotmc.org/resources/decentholograms-1-8-1-19-3-papi-support-no-dependencies.96927/).
4. [**CrateReloadedNPC**](https://www.spigotmc.org/resources/.60992/)
   * Depends on [**Citizens**](https://www.spigotmc.org/resources/citizens.13811/)

## Plugin Install

1. In your server folder, create a `plugins` folder if one does not exist.
2. Drag and drop the `CrateReloaded.jar` and any optional plugin into your `plugins` folder.
3. Start up the server.
4. You can now begin using the plugin! For usage, click [here](first-time-usage)
5. For customization, you can click [here](../config/config.md)

## Post-Install: Configuration

Once your server has CrateReloaded installed, you will find the following inside
**{server}/plugins/CrateReloaded** folder

* [config.yml](../config/config.md)
* [crate.yml](../config/crate.md)
* location.yml
* claims/
* [messages/](../config/translating.md)

### [config.yml](../config/config.md)

Holds generic settings such as *prefix, formatting, and modifers.* This is where you would
find settings that modify the plugin as a whole.

### [crate.yml](../config/crate.md)

This is where you would set up custom crates. Crates may be interpreted as kits, packs, or
a set of rewards.

### [Messaging](../config/translating.md)

The following folder is used to store plugin messages. You may modify these files to match your
designated region and language.

* messages/

### Others

The following are storage files used for storing plugin data, and won't need any an explanation.

* location.yml
* claims/
