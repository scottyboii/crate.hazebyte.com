# FAQ

## Why are players unable to open key crates?

Any plugin or server modification that may prevent a player from interacting with
a block will interfere with CrateReloaded. This is intended as protection plugins have priority over game enchancement plugins such as CrateReloaded.

Troubleshooting:

1. Remove the default Minecraft spawn protection in `server.properties`.
2. If you have world guard:
    1. Create a region for your crates.
    2. Enable the flags, `use` and `chest-access`

## Why do players have to shift-click to interact with key crates?

See prior answer

## I want to create a custom crate. How do I do this? 

The configuration process for the plugin is mostly a copy-paste process. We have templates that you can modify to suit your needs. e.g. `item:(diamond 1)` - this can be modified to be what item you'd like to give.

## How do I change the number of decimals in the chance placeholder?

See config.yml for decimal format

## Can we have multiple crate files?

Yes, all valid crate files in the crate folder will be parsed and read

## What is the difference between the free and premium version

The premium version will have all the features of the free version including a subset of the following:

1. A semi in-game editor command subsitute that allows you to export a chest of items into a rewards file. This will generate the reward strings that can be added to the crates. 
2. Priority Support in Discord
3. Priority Feature Requests
4. Custom Model Data Support
5. Fast updates for any issues and features
6. NBT (Temporarily removed)
