module.exports = {
  rules: {
    rules: {
      updated: '5/22/2020',
      list: [
        'If something feels like it is broken, either not like it was on era retail or a potential exploit or too overpowered (read: if something seems like it was not intentional from the development team) report it. Knowingly taking advantage of these activities is NOT allowed.',
        'Each player is only allowed to have 2 characters logged in and active, with an additional third character confined to a city and idle. This character may only be used to bazaar or mule items while your other characters are logged in. (This will not be locked down by IP, but it will be actively patrolled.) Tri-boxing 3 or more active characters is NOT allowed.',
        'Claim bots, modifying dats to claim, any type of targeting using mob ID (such as /target 12345678) or using any other third party tools such as Shorthand or its Windower equivalent to claim is NOT allowed.',
        "Any scripts, bots, or addons that automate actions are NOT allowed. Macros using the /wait or <wait> feature within the game are OK. (Such as /lastsynth macros up to the game's maximum of 6 lines.)",
        'Using known bugs (including terrain) or unpatched exploits to your advantage in a way that would not be possible in retail.',
        "Holding a monster for the purpose of grieving other players or monopolizing the time it spawns is NOT allowed.",
        "Not so much a rule either but if you are aware of any non-era item/NM/recipe/et cetera please report it. And do expect the rewards obtained from it to be removed. We can't find every non-era thing at once but as we find them they will be removed.",
        'Hacking/exploiting/cheating of any kind including, but not limited to, buying items and selling back for more than you paid for is NOT allowed.',
        'Spamming any public chat is NOT allowed. (Linkshells and tells are the exception as they will only be subject to harassment reports.)',
        'Harassment of any kind including offensive character or linkshell names is NOT allowed.',
        'Use of, or advertisement of, any cheat program/addon or a non-approved addon/program on Eden.',
        'GM interaction is limited here but if a GM messages you in game and you are active, respond within a reasonable time. Ignoring a GM is likely to get you jailed as we will likely think you are afk botting.',
      ],
      violations: [
        {
          rule: 'Using Bots to include Fish Botting and Claim Botting',
          consequence: 'Banned',
        },
        { rule: 'Pos Hacking / Speed Hacking', consequence: 'Banned' },
        {
          rule: 'Harassment',
          consequence:
            '1st Violation: 2 Week Suspension\n2nd Violation: 1 Month Suspension\n3rd Violation: 3 Month Suspension\n4th Violation: Banned',
        },
        {
          rule: 'Navmesh Abuse',
          consequence:
            '1st-3rd Violation: Homepointed\n4th Violation: 2 Week Suspension\n5th Violation: 1 Month Suspension',
        },
        {
          rule: 'Intentional MPK',
          consequence:
            '1st Violation: 2 Week Suspension\n2nd Violation: 1 Month Suspension\n3rd Violation: 3 Month Suspension\n4th Violation: Banned\n',
        },
        {
          rule: 'RMT (Buying and Selling)',
          consequence: 'Banned',
        },
        {
          rule: 'Too many characters online',
          consequence:
            '1st Violation: Warning\n2nd Violation: 2 Week Suspension\n3rd Violation: 2 Month Suspension\n4th Violation: Banned\n',
        },
        {
          rule: 'Gardening on more than 3 characters',
          consequence:
            '1st Violation: Warning and emptied pots\n2nd Violation: 1 Month Suspension and emptied pots\n3rd Violation: 3 Month Suspension and emptied pots\n4th Violation: Banned\n',
        },
        {
          rule: 'Severe Exploits',
          consequence: 'Banned',
        },
        {
          rule: 'Inappropriate Character Names',
          consequence: 'Randomly Assigned Character Name',
        },
      ],
    },
    software: {
      updated: '5/22/2020',
      list: [
        { item: 'Combat Parsers', allowed: true },
        { item: 'GearLock', allowed: true },
        { item: 'TPParty', allowed: true },
        { item: 'WatchEXP', allowed: true },
        { item: 'FPS', allowed: true },
        { item: 'Duration', allowed: true },
        { item: 'HideConsole', allowed: true },
        { item: 'Recast', windower: 'Renamer', allowed: true },
        { item: 'Timestamp', allowed: true },
        {
          item:
            'Shorthand (only for actions on players -- NOT allowed for claiming)',
          allowed: true,
        },
        {
          item:
            'Renamer (only using the lists we provide -- NOT for custom naming of mobs)',
          allowed: true,
        },
        {
          item:
            'Any modified bootloader.',
        },
        { item: 'AuctionHelper / Auction House assistants' },
        { item: 'Multisend / Servo' },
        {
          item:
            'Minimap and other map overlays that interact with the world  (Show NPCs, players, etc)',
        },
        { item: 'Allmaps' },
        {
          item:
            'Scripts ran unattended. (If a GM speaks to you and you do not reply within a certain time frame, you may be jailed.)',
        },
        { item: 'Shorthand (when used to claim)' },
        { item: 'LightLuggage' },
        {
          item:
            'Fishing/exp/healing bots or any other bots that automate player actions',
        },
        {
          item:
            'Claim tools or character enhancement tools like flee or warp hacks.',
        },
        {
          item:
            "WatchDog (or anything that gives you abilities you shouldn't have access to)",
        },
      ],
    },
    yells: {
      updated: '7/12/2020',
      list: [
        'Do not yell or shout profanity, hate messages, or any harassing statements. Violating this rule may result in mutes and/or an account ban depending on severity.',
        'Do not banter back and forth between yourselves in yell (instead use shout for banter). This includes replying in yell to someone who has violated these rules. Banter in yell may result in mutes applied.',
        'Asking a legitimate FFXI question in yell is fine. However, replies to questions should not be sent in yell. Shout or tell is preferred.',
        'Adding on irrelevant banter not related to the purpose of a yell may result in a mute. Example: “WTS pebbles also... player XYZ sux!”',
      ],
    },
    discord: {
      updated: '5/22/2020',
      list: [
        "Please be respectful to each other. Consider this phrase when typing, treat others as you would want to be treated. You wouldn't want someone yelling at you or belittling you so you don't need to do it to another person.",
        'Please keep the cursing at a minimum. Some people prefer not to read constant cursing. We know sometimes a word or two will slip out in the heat of the moment and that is ok but if it becomes a habit we will go to you in private about it.',
        'Do not post nudity of any kind.',
        'Do not give out any personal information in public. If you must send it do so via a PM. There are too many people that will take advantage of this personal information.',
        "Most importantly we want you all to have fun while you use our discord. We know you won't agree with everything we implement and that is ok. We do ask that you follow our rules. If you feel you won't be able to then we kindly thank you for using our Discord and ask you to move on to somewhere else to chat.",
        'Any attempt evading a mute will result in an immediate ban.',
      ],
    },
  },
  links: [
    {
      url: 'https://discord.gg/DSa2Q2',
      image:
        'https://vignette.wikia.nocookie.net/ffxi/images/0/08/Flag.jpg/revision/latest?cb=20060211183144',
      header: 'Chaos Discord',
      description:
        'Join us on Discord for technical support, up-to-date annoucements, community events, memes, live chat with staff, and more.',
    },
    {
      url: 'http://classicffxi.wikia.com/wiki/Classic_FFXI_community',
      image: 'https://avatars2.githubusercontent.com/u/1171011?s=200&v=4',
      header: 'Eden Wiki',
      description:
        'This is a player led wiki open for everyone to edit. Although it is specific to Eden, it may have incorrect information due to the fact that it is not an official source of information.',
    },
    {
      url: 'https://github.com//community/issues',
      image: 'https://static.ffxiah.com/images/icon/17001.png',
      header: 'Bug Reports',
      description:
        'Eden has bugs too. :( See what issues we have and chime in if you found a bug!',
    },
    {
      url: 'https://github.com//issues',
      image: 'https://static.ffxiah.com/images/icon/17005.png',
      header: 'Website Bugs',
      description:
        'In addition to technical bugs, Eden refines rules, information, and connection details occassionally. Chime in if you found an error!',
    },
    {
      url: 'https://ffxiclopedia.wikia.com/wiki/Main_Page',
      image:
        'https://vignette.wikia.nocookie.net/ffxi/images/b/b7/Favicon_Poroggo.png/revision/latest/scale-to-width-down/60?cb=20170308121952',
      header: 'FFXIclopedia',
      description:
        'The defacto go-to resource of this era. Keep in mind that this site has been updated post-era and you may need to browse history of the page to get more accurate data.',
    },
    {
      url: 'https://www.bg-wiki.com/',
      image: 'https://static.ffxiah.com/images/icon/15076.png',
      header: 'BG Wikipedia',
      description:
        "Another resource, however more updated that the era wiki. Can be a good place to get information that isn't provided by other sources.",
    },
    {
      url: 'http://ffxi-atlas.mageringnetwork.com/',
      image: 'https://static.ffxiah.com/images/icon/191.png',
      header: 'FFXI Atlas (Mirror)',
      description:
        'All the maps without the cost of buying your own maps in game. However, good luck finding where you are in relation to the map!',
    },
    {
      url: 'http://www.pyogenes.com/ffxi/timer/v2.html',
      image: 'https://static.ffxiah.com/images/icon/3706.png',
      header: 'Pyogenes Timer',
      description:
        "Pyogenes developed a Vana'Diel clock for retail. Eden runs on the same timer.",
    },
    {
      url: 'http://www.ffxidb.com/',
      image: 'http://www.ffxidb.com/public/img/xidb-logo-2.png',
      header: 'FFXIDB',
      description:
        'Common site to track drop rates of items. Keep in mind that drop rates stay updated when people use their plugin. With things like TH10 on current retail this data may be inaccurate.',
    },
    {
      url: 'http://ashita.atom0s.com/',
      image: 'https://www.ashitaxi.com/assets/img/ashita.ico',
      header: 'Ashita',
      description:
        'Eden officially supports Ashita v3 to enhance gameplay. Ashita v3 comes bundled with the Eden installer. You can find support for Ashita v3-specific things here.',
    },
    {
      url: 'http://windower.net/',
      image: 'http://windower.net/img/icon.png',
      header: 'Windower',
      description:
        'Windower 4 and 5 are not officially supported on Eden to enhance gameplay. While we do not offer setup or troubleshooting assistance, it does work on Eden.',
    },
  ],
  install: {
    source1: 'http://www.playonline.com/ff11us/download/media/install_win.html',
    source2: '',
    bootloader: '',
    discord: 'https://discord.gg/DSa2Q2',
  },
};
