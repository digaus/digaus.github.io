/*
 * Known Shelly Device types
 */

var DEVICE_TYPES = {
    'SHPLG-1': {
        'name': 'shellyplug',
        'friendly_name': 'Plug',
        'family': 'relay',
        'modes': [
            'relay'
        ],
        'channels': 1,
        'meters': 1,
        'rolers': 0,
        'default_icon': 'socket.png'
    },
    'SHPLG-S': {
        'name': 'shellyplug-s',
        'friendly_name': 'Plug S',
        'family': 'relay',
        'modes': [
            'relay'
        ],
        'channels': 1,
        'meters': 1,
        'rolers': 0,
        'default_icon': 'socket.png'
    },
    'SHPLG-U1': {
        'name': 'shellyplugu1',
        'friendly_name': 'Plug US',
        'family': 'relay',
        'modes': [
            'relay'
        ],
        'channels': 1,
        'meters': 1,
        'rolers': 0,
        'default_icon': 'socket.png'
    },
    'SHPLG2-1': {
        'name': 'shellyplug',
        'friendly_name': 'Plug',
        'family': 'relay',
        'modes': [
            'relay'
        ],
        'channels': 1,
        'meters': 1,
        'rolers': 0,
        'default_icon': 'socket.png'
    },
    'SHPLG-UK1': {
        'name': 'shellyplug',
        'friendly_name': 'Plug',
        'family': 'relay',
        'modes': [
            'relay'
        ],
        'channels': 1,
        'meters': 1,
        'rolers': 0,
        'default_icon': 'socket.png'
    },
    'SHSK-1': {
        'name': 'shellysocket',
        'friendly_name': 'Socket',
        'family': 'relay',
        'modes': [
            'relay'
        ],
        'channels': 1,
        'meters': 0,
        'rolers': 0,
        'default_icon': 'socket.png'
    },
    'SHSW-1': {
        'name': 'shelly1',
        'friendly_name': '1',
        'family': 'relay',
        'modes': [
            'relay'
        ],
        'channels': 1,
        'meters': 0,
        'rolers': 0,
        'default_icon': 'relay.png'
    },
    'SHSW-PM': {
        'name': 'shelly1pm',
        'friendly_name': '1 PM',
        'family': 'relay',
        'modes': [
            'relay'
        ],
        'channels': 1,
        'meters': 1,
        'rolers': 0,
        'default_icon': 'relay.png'
    },
    'SHSW-L': {
        'name': 'shelly1l',
        'friendly_name': '1L',
        'family': 'relay',
        'modes': [
            'relay'
        ],
        'channels': 1,
        'meters': 1,
        'rolers': 0,
        'default_icon': 'relay.png'
    },
    'SHAIR-1': {
        'name': 'shellyair',
        'friendly_name': 'Air',
        'family': 'relay',
        'modes': [
            'relay'
        ],
        'channels': 1,
        'meters': 1,
        'rolers': 0,
        'default_icon': 'relay.png'
    },
    'SHAIR-2': {
        'name': 'shellyairturbo',
        'friendly_name': 'Air Turbo',
        'family': 'relay',
        'modes': [
            'relay'
        ],
        'channels': 1,
        'meters': 1,
        'rolers': 0,
        'default_icon': 'relay.png'
    },
    'SHSW-21': {
        'name': 'shellyswitch',
        'friendly_name': '2',
        'family': 'relay',
        'modes': [
            'relay',
            'roller'
        ],
        'channels': 2,
        'meters': 1,
        'rolers': 1,
        'default_icon': 'relay.png'
    },
    'SHSW-22': {
        'name': 'shellyHDpro',
        'friendly_name': 'HDPro',
        'family': 'relay',
        'modes': [
            'relay'
        ],
        'channels': 2,
        'meters': 2,
        'rolers': 0,
        'default_icon': 'relay.png'
    },
    'SHSW-25': {
        'name': 'shellyswitch25',
        'friendly_name': '25',
        'family': 'relay',
        'modes': [
            'relay',
            'roller'
        ],
        'channels': 2,
        'meters': 2,
        'rolers': 1,
        'default_icon': 'relay.png'
    },
    'SHSW-44': {
        'name': 'shelly4pro',
        'friendly_name': '4Pro',
        'family': 'relay',
        'modes': [
            'relay'
        ],
        'channels': 4,
        'meters': 4,
        'rolers': 0,
        'default_icon': 'relay.png'
    },
    'SHEM-1': {
        'name': 'shellyemeter',
        'friendly_name': 'EM',
        'family': 'relay',
        'modes': [
            'relay'
        ],
        'channels': 1,
        'meters': 1,
        'rolers': 0,
        'default_icon': 'relay.png'
    },
    'SHEM-3': {
        'name': 'shellyem3',
        'friendly_name': 'EM3',
        'family': 'emeter',
        'modes': [
            'emeter'
        ],
        'channels': 1,
        'meters': 0,
        'emeters': 3,
        'relays': 1,
        'default_icon': 'relay.png'
    },
    'SHEM': {
        'name': 'shellyem',
        'friendly_name': 'EM',
        'family': 'emeter',
        'modes': [
            'emeter'
        ],
        'channels': 2,
        'meters': 0,
        'emeters': 2,
        'relays': 1,
        'default_icon': 'relay.png'
    },
    'SHSEN-1': {
        'name': 'shellysense',
        'friendly_name': 'Sense',
        'family': 'sensor',
        'modes': [
            'sensor'
        ],
        'default_icon': 'sensor.png'
    },
    'SHGS-1': {
        'name': 'shellygas',
        'friendly_name': 'Gas',
        'family': 'sensor',
        'modes': [
            'sensor'
        ],
        'default_icon': 'sensor.png'
    },
    'SHSM-01': {
        'name': 'shellysmoke',
        'friendly_name': 'Smoke',
        'family': 'sensor',
        'modes': [
            'sensor'
        ],
        'default_icon': 'smoke_sensor.png',
        'sleeping_mode': true
    },
    'SHHT-1': {
        'name': 'shellyht',
        'friendly_name': 'T&H',
        'family': 'sensor',
        'modes': [
            'sensor'
        ],
        'default_icon': 'sensor.png',
        'sleeping_mode': true
    },
    'SHDW-1': {
        'name': 'shellydw',
        'friendly_name': 'Door',
        'family': 'sensor',
        'modes': [
            'sensor'
        ],
        'default_icon': 'door.png',
        'sleeping_mode': true
    },
    'SHDW-2': {
        'name': 'shellydw2',
        'friendly_name': 'Door 2',
        'family': 'sensor',
        'modes': [
            'sensor'
        ],
        'default_icon': 'door.png',
        'sleeping_mode': true
    },
    'SHWT-1': {
        'name': 'shellyflood',
        'friendly_name': 'Flood',
        'family': 'sensor',
        'modes': [
            'sensor'
        ],
        'default_icon': 'sensor.png',
        'sleeping_mode': true
    },
    // lights
    'SHCL-255': {
        'name': 'shellycolor',
        'friendly_name': 'Bulb',
        'family': 'light',
        'modes': [
            'color',
            'white'
        ],
        'template': 'SHCL-255-light',
        'channels': 1,
        'color_support': true,
        'default_icon': 'light.png',
        'control_path': 'light'
    },
    'SHBLB-1': {
        'name': 'shellybulb',
        'friendly_name': 'Bulb',
        'family': 'light',
        'modes': [
            'color',
            'white'
        ],
        'effect': [
            'Off',
            'Meteor Shower',
            'Gradual Change',
            'Breath',
            'Flash',
            'On/Off Gradual',
            'Red/Green Change'
        ],
        'template': 'SHBLB-1-light',
        'channels': 1,
        'color_support': true,
        'default_icon': 'light.png',
        'control_path': 'light'
    },
    'SHRGBWW-01': {
        'name': 'shellyrgbww',
        'friendly_name': 'RGBWW',
        'family': 'light',
        'modes': [
            'color',
            'white'
        ],
        'effect': [
            'Off',
            'Meteor Shower',
            'Gradual Change',
            'Breath',
            'Flash',
            'On/Off Gradual',
            'Red/Green Change'
        ],
        'template': 'SHRGBWW-01-light', //Overwrites the default <type>-<mode>
        'channels': 1,
        'color_support': true,
        'default_icon': 'light.png',
        'control_path': 'light'
    },
    'SHRGBW2': {
        'name': 'shellyrgbw2',
        'friendly_name': 'RGBW 2',
        'family': 'light',
        'modes': [
            'color',
            'white'
        ],
        'effect': [
            'Off',
            'Meteor Shower',
            'Gradual Change',
            'Flash'
        ],
        'channels': 4,
        'meters': 4,
        'color_support': true,
        'default_icon': 'light.png',
        'control_path': 'light'
    },
    'SH2LED-1': {
        'name': 'Shelly2LED',
        'friendly_name': '2LED',
        'family': 'light',
        'modes': [],
        'template': 'SH2LED-1-light', //Overwrites the default <type>-<mode>
        'channels': 2,
        'color_support': false,
        'default_icon': 'light.png',
        'control_path': 'light' //custom control path, used within control endpoints
    },
    'SHDM-1': {
        'name': 'shellydimmer',
        'friendly_name': 'DIMMER',
        'family': 'light',
        'modes': [],
        'template': 'SHDM-1-light', //Overwrites the default <type>-<mode>
        'channels': 1,
        'color_support': false,
        'default_icon': 'light.png',
        'control_path': 'light', //custom control path, used within control endpoints
        'meters': 1
    },
    'SHDM-2': {
        'name': 'shellydimmer2',
        'friendly_name': 'DIMMER 2',
        'family': 'light',
        'modes': [],
        'template': 'SHDM-2-light', //Overwrites the default <type>-<mode>
        'channels': 1,
        'color_support': false,
        'default_icon': 'light.png',
        'control_path': 'light', //custom control path, used within control endpoints
        'meters': 1
    },
    'SHDIMW-1': {
        'name': 'shellydimmerw1',
        'friendly_name': 'DIMMER',
        'family': 'light',
        'modes': [],
        'template': 'SHDIMW-1-light', //Overwrites the default <type>-<mode>
        'channels': 1,
        'color_support': false,
        'default_icon': 'light.png',
        'control_path': 'light', //custom control path, used within control endpoints
        'meters': 1
    },
    'SHVIN-1': {
        'name': 'ShellyVintage',
        'friendly_name': 'Vintage',
        'family': 'light',
        'modes': [],
        'template': 'SHVIN-1-light', //Overwrites the default <type>-<mode>
        'channels': 1,
        'color_support': false,
        'default_icon': 'light.png',
        'control_path': 'light' //custom control path, used within control endpoints
    },
    'SHBDUO-1': {
        'name': 'ShellyBulbDuo',
        'friendly_name': 'Duo',
        'family': 'light',
        'modes': [],
        'template': 'SHBDUO-1-light', //Overwrites the default <type>-<mode>
        'channels': 1,
        'color_support': false,
        'default_icon': 'light.png',
        'control_path': 'light', //custom control path, used within control endpoints
        'meters': 1
    },
    'SHCB-1': {
        'name': 'shellycolorbulb',
        'friendly_name': 'Color Bulb',
        'family': 'light',
        'modes': [
            'color',
            'white'
        ],
        'effect': [
            'Off',
            'Meteor Shower',
            'Gradual Change',
            'Flash'
        ],
        'template': 'SHCB-1-light', //Overwrites the default <type>-<mode>
        'channels': 1,
        'color_support': true,
        'default_icon': 'light.png',
        'control_path': 'light', //custom control path, used within control endpoints
        'meters': 1
    },

    'SHBTN-1': {
        'name': 'shellybutton1',
        'friendly_name': ' Button',
        'family': 'inputs_reader',
        'modes': [],
        'channels': 1,
        'template': 'SHBTN-1-inputs_reader', //Overwrites the default <type>-<mode>
        'default_icon': 'relay.png'
    },
    'SHBTN-2': {
        'name': 'shellybutton1',
        'friendly_name': ' Button',
        'family': 'inputs_reader',
        'modes': [],
        'channels': 1,
        'template': 'SHBTN-2-inputs_reader', //Overwrites the default <type>-<mode>
        'default_icon': 'relay.png'
    },
    'SHIX3-1' : {
        'name': 'shellyix3',
        'friendly_name': 'i3',
        'family': 'inputs_reader',
        'channels': 3,
        'inputs': 3,
        'modes': ['inputs_reader'],
        'default_icon': 'relay.png'
    },

    
    /* Narrow-band devices */
    'PLG1NB': {
        'name': 'shellyplug',
        'friendly_name': 'Plug',
        'family': 'relay',
        'is_nb': true,
        'modes': [
            'relay'
        ],
        'channels': 1,
        'meters': 1,
        'rolers': 0,
        'default_icon': 'socket.png'
    },
    'SMK1NB': {
        'name': 'shellysmokenb',
        'friendly_name': 'Smoke NB',
        'family': 'sensor',
        'modes': [
            'sensor'
        ],
        'is_nb': true,
        'default_icon': 'smoke_sensor.png',
        'sleeping_mode': true
    },
    'DS1NB': {
        'name': 'shellydoornb',
        'friendly_name': 'Door NB',
        'family': 'sensor',
        'modes': [
            'sensor'
        ],
        'is_nb': true,
        'default_icon': 'door.png',
        'sleeping_mode': true
    },
    'MS1NB': {
        'name': 'shellypirnb',
        'friendly_name': 'PIR NB',
        'family': 'sensor',
        'modes': [
            'sensor'
        ],
        'is_nb': true,
        'default_icon': 'motion.png',
        'sleeping_mode': true
    },
    'HT1NB': {
        'name': 'shellyhtnb',
        'friendly_name': 'HT NB',
        'family': 'sensor',
        'modes': [
            'sensor'
        ],
        'is_nb': true,
        'default_icon': 'sensor.png',
        'sleeping_mode': true
    },
    'WS1NB': {
        'name': 'shellysmknb',
        'friendly_name': 'Flood NB',
        'family': 'sensor',
        'modes': [
            'sensor'
        ],
        'is_nb': true,
        'default_icon': 'flood_icon.png',
        'sleeping_mode': true
    },

    'SHSW-1S' : {
        'name': 'Shelly Harvia RSS',
        'friendly_name': 'Harvia RSS',
        'family': 'relay',
        'modes': [
            'relay'
        ],
        'channels': 1,
        'meters': 1,
        'rolers': 0,
        'inputs': 1,
        'default_icon': 'relay.png'
    },
    'SHUNI-1' : {
        'name': 'shellyuni',
        'friendly_name': 'Uni',
        'family': 'relay',
        'modes': [
            'relay'
        ],
        'template': 'SHUNI-1-relay',
        'channels': 2,
        'meters': 2,
        'rolers': 0,
        'inputs': 2,
        'default_icon': 'relay.png'
    },
    'SHMOS-01' : {
        'name': 'shellymotionsensor',
        'friendly_name': 'Motion Sensor',
        'family': 'sensor',
        'modes': [
            'sensor'
        ],
        'default_icon': 'motion.png',
        'sleeping_mode': true
    },
    'SHSPOT-1' : {
        'name': 'shellyspot',
        'friendly_name': 'Spot',
        'family': 'sensor',
        'modes': [
            'sensor'
        ],
        'default_icon': 'motion.png',
        'sleeping_mode': true
    }
};

var DEVICE_NAMES_REGEXP = /shelly-|shelly1-|shellysmoke-|shelly4pro-|shellyplug-|shellyplug-s-|shellyswitch-|shellyswitch25-|shellysense-|shellycolor-|shellysocket-|shellybulb-|shellyrgbww-|shellyHDpro-|Shelly2LED-|shellydw-|shellyht-|shellyemeter-|shellyrgbw2-|shelly1pm-|shellyem-|Shellybulb6w-|shellyem3-|shellyix3-|ShellyBulbDuo-|shellygas|shellybutton1-|shellyplugu1-|shellydimmerw1-|shellydimmer2-|shellydw2-|shellyuni-|shellycolorbulb-|shellymotionsensor-|shellypluguk1-|shellyspot-|shelly1l-|shellyairturbo-/;

var DISCOVERY_TYPES = ["SHSW-1", "SHSW-PM", "SHAIR-1", "SHAIR-2", "SHSW-21", "SHSW-44", "SHSW-22", "SHSW-25", "SHSW-L", "SHPLG-1", "SHPLG-S", "SHPLG2-1", "SHSK-1", "SHSEN-1", "SHCL-255", "SHSM-01", "SHBLB-1", "SHRGBWW-01", "SH2LED-1", "SHHT-1", "SHDW-1", "SHDW-2", "SHWT-1", "SHEM-1", "SHEM-3", "SHEM", "SHRGBW2", "SHDM-1", "SHDM-2", "SHDIMW-1", "SHVIN-1", "SHIX3-1", "SHSW-1S", "SHBDUO-1","SHGS-1", "SHBTN-1", "SHBTN-2", "SHPLG-U1", "SHUNI-1", "SHCB-1", "SHMOS-01", "SHPLG-UK1", "SHSPOT-1", "shelly1", "shelly1pm", "shelly4pro", "shellyHDpro", "shellyswitch25", "shellyplug", "shellyplug-s", "shellyswitch", "shellysense", "shellysocket", "shellycolor", "shellyflood", "shellydw", "shellybulb", "shellybulb6w", "Shelly2LED", "shellyht", "shellyemeter", "shellyrgbw2", "shellyem", "shellyem3", "shellyix3", "ShellyBulbDuo", "shellygas", "shellybutton1", "shellyplugu1", "shellydimmer", "shellydimmer2", "shellydimmerw1", "shellydw2", "shellyuni", "shellycolorbulb", "shellymotionsensor", "shellypluguk1", "shellyspot", "shelly1l","shellyairturbo"];

var DEVICE_OTA = ['20190103-082948/rgbw2@565f4336', '20191219-100325/???', '20191216-140245/???','20181128-144724/???','20191230-112953/master@fe7779a8+'];

var DEVICE_OTA_BEFORE = {
    'SHEM-3': 20200204
};

var LONG_ID_DEVICES_OTA = {
    'SGPLG-S': 'http://shelly-api-eu.shelly.cloud/firmware/longid_patch/plugs-longid.zip',
    'SHDM-1': 'http://shelly-api-eu.shelly.cloud/firmware/longid_patch/dimmer-longid.zip',
    'SHHT-1': 'http://shelly-api-eu.shelly.cloud/firmware/longid_patch/ht-longid.zip',
    'SHSW-1': 'http://shelly-api-eu.shelly.cloud/firmware/longid_patch/switch1-longid.zip',
    'SHSW-PM': 'http://shelly-api-eu.shelly.cloud/firmware/longid_patch/switch1pm-longid.zip',
    'SHSW-25': 'http://shelly-api-eu.shelly.cloud/firmware/longid_patch/switch25-longid.zip',
    'SHEM': 'http://shelly-api-eu.shelly.cloud/firmware/longid_patch/em-longid.zip',
    'SHRGBW2': 'http://shelly-api-eu.shelly.cloud/firmware/longid_patch/rgbw2-longid.zip'
};

