var GIO = (function (exports) {
'use strict';

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * The StyleFactory will persist all pre-defined style, and return style object to ConfigureHandler by a given name
 */

var StyleFactory = ( function () {

    var styleMap = {};

    // get style API for ConfigureHandler to get a specific style object by name

    function getStyle ( styleName ) {

        return styleMap[ styleName ];

    }

    //register API for style creator

    function register( styleName, style ) {

        styleMap[ styleName ] = style;

    }

    return {

        getStyle: getStyle,

        register: register

    }

}() );

/**
 * @author syt123450 / https://github.com/syt123450
 */

// Developer can adjust and define their own style like this, and contribute to our repository

var MagicStyle = ( function () {

    return {

        color: {

            surface: 0xff0000,

            selected: 0x0000ff,

            in: 0x154492,

            out: 0xdd380c,

            halo: 0x00ff00,

            background: 0x222222
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var MintStyle = ( function () {

    return {

        color: {

            surface: 0x4BB007,

            selected: 0x59E37D,

            in: 0x7CFC56,

            out: 0x2E92AB,

            halo: 0xBDFFC8,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var RedBlueStyle = ( function () {

    return {

        color: {

            surface: 0x7E0BB0,

            selected: 0xFF8000,

            in: 0xFF0000,

            out: 0x0A85CC,

            halo: 0x0883FF,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var StrawberryStyle = ( function () {

    return {

        color: {

            surface: 0xB066A6,

            selected: 0xE2717C,

            in: 0xFFFFFF,

            out: 0xE20000,

            halo: 0xFF5E5E,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var SunsetStyle = ( function () {

    return {

        color: {

            surface: 0x9F04B0,

            selected: 0xE3DF62,

            in: 0xFF7803,

            out: 0xE20000,

            halo: 0xFFB60A,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var NearMoonStyle = ( function () {

    return {

        color: {

            surface: 0x9C63D4,

            selected: 0x913DFF,

            in: 0x8A6AD4,

            out: 0x3486E4,

            halo: 0x3BCBFF,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var LemonGateStyle = ( function () {

    return {

        color: {

            surface: 0x9C63D4,

            selected: 0x913DFF,

            in: 0x8A6AD4,

            out: 0x3486E4,

            halo: 0x3BCBFF,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var JuicyCakeStyle = ( function () {

    return {

        color: {

            surface: 0xCE26D4,

            selected: 0xE8F000,

            in: 0xF7BB2F,

            out: 0xE155AB,

            halo: 0xF9A6FF,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author Qi Liu / https://github.com/lq3297401
 */

var GorgeousDreamStyle = ( function () {

    return {

        color: {

            surface: 0x7828D4,

            selected: 0x527CF0,

            in: 0xCC208E,

            out: 0x3126D2,

            halo: 0x7A6BFF,

            background: 0x000000
        },

        brightness: {

            ocean: 0.5,

            mentioned: 0.5,

            related: 0.5
        }

    }

}() );

/**
 * @author syt123450 / https://github.com/syt123450
 */

// developer need to register their new style to StyleFactory here
// 这里注册 风格颜色
// 使用方法 controller.setStyle("magic");
StyleFactory.register( "magic", MagicStyle );

StyleFactory.register( "mint", MintStyle );

StyleFactory.register( "redBlue", RedBlueStyle );

StyleFactory.register( "strawberry", StrawberryStyle );

StyleFactory.register( "sunset", SunsetStyle );

StyleFactory.register( "nearMoon", NearMoonStyle );

StyleFactory.register( "lemonGate", LemonGateStyle );

StyleFactory.register( "juicyCake", JuicyCakeStyle );

StyleFactory.register( "gorgeousDream", GorgeousDreamStyle );

/**
 * @author syt123450 / https://github.com/syt123450
 * @author Botime / https://github.com/BoTime
 */

/**
 * This is a singleton object.
 * When getting picked clicked color, the surfaceHandler will lookup the clicked country through this map.
 */

var CountryColorMap = ( function () {

    return {

        '1': 'PE',
        '2': 'BF',
        '3': 'FR',
        '4': 'LY',
        '5': 'BY',
        '6': 'PK',
        '7': 'ID',
        '8': 'YE',
        '9': 'MG',
        '10': 'BO',
        '11': 'CI',
        '12': 'DZ',
        '13': 'CH',
        '14': 'CM',
        '15': 'MK',
        '16': 'BW',
        '17': 'UA',
        '18': 'KE',
        '19': 'TW',
        '20': 'JO',
        '21': 'MX',
        '22': 'AE',
        '23': 'BZ',
        '24': 'BR',
        '25': 'SL',
        '26': 'ML',
        '27': 'CD',
        '28': 'IT',
        '29': 'SO',
        '30': 'AF',
        '31': 'BD',
        '32': 'DO',
        '33': 'GW',
        '34': 'GH',
        '35': 'AT',
        '36': 'SE',
        '37': 'TR',
        '38': 'UG',
        '39': 'MZ',
        '40': 'JP',
        '41': 'NZ',
        '42': 'CU',
        '43': 'VE',
        '44': 'PT',
        '45': 'CO',
        '46': 'MR',
        '47': 'AO',
        '48': 'DE',
        '49': 'SD',
        '50': 'TH',
        '51': 'AU',
        '52': 'PG',
        '53': 'IQ',
        '54': 'HR',
        '55': 'GL',
        '56': 'NE',
        '57': 'DK',
        '58': 'LV',
        '59': 'RO',
        '60': 'ZM',
        '61': 'IR',
        '62': 'MM',
        '63': 'ET',
        '64': 'GT',
        '65': 'SR',
        '66': 'EH',
        '67': 'CZ',
        '68': 'TD',
        '69': 'AL',
        '70': 'FI',
        '71': 'SY',
        '72': 'KG',
        '73': 'SB',
        '74': 'OM',
        '75': 'PA',
        '76': 'AR',
        '77': 'GB',
        '78': 'CR',
        '79': 'PY',
        '80': 'GN',
        '81': 'IE',
        '82': 'NG',
        '83': 'TN',
        '84': 'PL',
        '85': 'NA',
        '86': 'ZA',
        '87': 'EG',
        '88': 'TZ',
        '89': 'GE',
        '90': 'SA',
        '91': 'VN',
        '92': 'RU',
        '93': 'HT',
        '94': 'BA',
        '95': 'IN',
        '96': 'CN',
        '97': 'CA',
        '98': 'SV',
        '99': 'GY',
        '100': 'BE',
        '101': 'GQ',
        '102': 'LS',
        '103': 'BG',
        '104': 'BI',
        '105': 'DJ',
        '106': 'AZ',
        '107': 'MY',
        '108': 'PH',
        '109': 'UY',
        '110': 'CG',
        '111': 'RS',
        '112': 'ME',
        '113': 'EE',
        '114': 'RW',
        '115': 'AM',
        '116': 'SN',
        '117': 'TG',
        '118': 'ES',
        '119': 'GA',
        '120': 'HU',
        '121': 'MW',
        '122': 'TJ',
        '123': 'KH',
        '124': 'KR',
        '125': 'HN',
        '126': 'IS',
        '127': 'NI',
        '128': 'CL',
        '129': 'MA',
        '130': 'LR',
        '131': 'NL',
        '132': 'CF',
        '133': 'SK',
        '134': 'LT',
        '135': 'ZW',
        '136': 'LK',
        '137': 'IL',
        '138': 'LA',
        '139': 'KP',
        '140': 'GR',
        '141': 'TM',
        '142': 'EC',
        '143': 'BJ',
        '144': 'SI',
        '145': 'NO',
        '146': 'MD',
        '147': 'LB',
        '148': 'NP',
        '149': 'ER',
        '150': 'US',
        '151': 'KZ',
        '152': 'AQ',
        '153': 'SZ',
        '154': 'UZ',
        '155': 'MN',
        '156': 'BT',
        '157': 'NC',
        '158': 'FJ',
        '159': 'KW',
        '160': 'TL',
        '161': 'BS',
        '162': 'VU',
        '163': 'FK',
        '164': 'GM',
        '165': 'QA',
        '166': 'JM',
        '167': 'CY',
        '168': 'PR',
        '169': 'PS',
        '170': 'BN',
        '171': 'TT',
        '172': 'CV',
        '173': 'PF',
        '174': 'WS',
        '175': 'LU',
        '176': 'KM',
        '177': 'MU',
        '178': 'FO',
        '179': 'ST',
        '181': 'DM',
        '182': 'TO',
        '183': 'KI',
        '184': 'FM',
        '185': 'BH',
        '186': 'AD',
        '187': 'MP',
        '188': 'PW',
        '189': 'SC',
        '190': 'AG',
        '191': 'BB',
        '192': 'TC',
        '193': 'VC',
        '194': 'LC',
        '195': 'YT',
        '196': 'VI',
        '197': 'GD',
        '198': 'MT',
        '199': 'MV',
        '200': 'KY',
        '201': 'KN',
        '202': 'MS',
        '203': 'BL',
        '204': 'NU',
        '205': 'PM',
        '206': 'CK',
        '207': 'WF',
        '208': 'AS',
        '209': 'MH',
        '210': 'AW',
        '211': 'LI',
        '212': 'VG',
        '213': 'SH',
        '214': 'JE',
        '215': 'AI',
        '217': 'GG',
        '218': 'SM',
        '219': 'BM',
        '220': 'TV',
        '221': 'NR',
        '222': 'GI',
        '223': 'PN',
        '224': 'MC',
        '225': 'VA',
        '226': 'IM',
        '227': 'GU',
        '228': 'SG'

    };

}() );

/**
 * @author syt123450 / https://github.com/syt123450
 * @author mokuteno / https://github.com/manymeeting
 */

/**
 * it contains static function, the functions will be called by other component in whole project.
 * The stateless function can be added here.
 */
// 工具类
var Utils = ( function () {

    function isString( str ) {

        return ( typeof str === 'string' ) && str.constructor === String;

    }

    function transformStringToHex( str ) {

        if ( str.charAt( 0 ) !== "#" ) {

            return null;

        }

        return parseInt( str.substring( 1 ), 16 );

    }

    function formatHexColor( color ) {

        if ( color < 0 || color > 16777215 ) {

            return null;

        }

        return color;

    }

    function getElementViewTop ( element ){

        var actualTop = element.offsetTop;
        var current = element.offsetParent;
    
        while ( current !== null ) {

            actualTop += current.offsetTop;
            current = current.offsetParent;

        }

        var elementScrollTop;

        if ( document.compatMode === "BackCompat" ) {

            elementScrollTop = document.body.scrollTop;

	    } else {

            if ( document.documentElement.scrollTop === 0 ) {

                elementScrollTop = document.body.scrollTop;

	        } else {

                elementScrollTop = document.documentElement.scrollTop;

            }

        }

        return actualTop - elementScrollTop;

    }

    function getElementViewLeft ( element ) {

        var actualLeft = element.offsetLeft;
        var current = element.offsetParent;
        
        while ( current !== null ) {

            actualLeft += current.offsetLeft;
            current = current.offsetParent;

        }

        var elementScrollLeft;

	    if ( document.compatMode === "BackCompat" ) {

	        elementScrollLeft = document.body.scrollLeft;

        } else {

            if ( document.documentElement.scrollTop === 0 ) {

                elementScrollLeft = document.body.scrollLeft;

            } else {

                elementScrollLeft = document.documentElement.scrollLeft;

            }

        }

        return actualLeft - elementScrollLeft;

    }

    function isArray( value ) {

        return Array.isArray( value );

    }


    return {

        // temporarily constrain value to ( -Math.PI, Math.PI )

        wrap: function ( value, min, range ) {

            range -= min;

            while ( value < min ) {

                value += range;

            }

            return value % range;

        },

        // constrain the value in a range

        constrain: function ( v, min, max ) {

            if ( v < min ) {

                v = min;

            } else if ( v > max ) {

                v = max;

            }

            return v;

        },

        // format code to hex type (the input may "#000000" or 0x000000)

        formatColor: function ( color ) {

            if ( isString( color ) ) {

                return transformStringToHex( color );

            } else {

                return formatHexColor( color );

            }

        },

        // transform brightness from user's input (0 - 1) to (min - max)

        transformBrightness: function ( brightness, min, max ) {

            if ( brightness > 1 ) {

                return max;

            }

            if ( brightness < 0 ) {

                return min;

            }

            return Math.floor( min + ( max - min ) * brightness );

        },

        // deep clone an object from a country data, add more information for user's callback

        transformCountryData: function ( countryData ) {

            var outputData = {};

            outputData.name = countryData.name;
            outputData.lat = countryData.lat;
            outputData.lon = countryData.lon;
            outputData.center = countryData.center.clone();
            outputData.ISOCode = CountryColorMap[ countryData.colorCode ];

            return outputData;

        },

        /**
        * Flatten country data based on given min and max value.
        *
        * @param {Array} data
        *   An array of data to be processed.
        *   Example: [
        *      {
        *        "e": "CN",
        *        "i": "US",
        *        "v": 3300000
        *      },
        *      {
        *        "e": "CN",
        *        "i": "RU",
        *        "v": 10000
        *      }
        *    ]
        * @param {string} valueKey
        * @param {number} definedMin
        * @param {number} definedMax
        */

        flattenCountryData: function ( data, valueKey, definedMin, definedMax ) {
            if ( data.length === 0 )
                return;
    
            var values = data.map( function ( countryData ) {
                return countryData[ valueKey ];
            });
            var min = Math.min.apply( null, values );
            var max = Math.max.apply( null, values );
            
            data.forEach( function ( country ) {

                var v = country[ valueKey ];

                if (( max - min ) !== 0) {
                    country[ valueKey ] = ( v - min ) * ( definedMax - definedMin ) / ( max - min ) + definedMin;
                }

            } );

        },

        getElementViewTop: getElementViewTop,

        getElementViewLeft: getElementViewLeft,

		isArray: isArray

    };

}() );

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handlers handle all task related to the earth surface.
 */

function SurfaceHandler ( controller ) {

    var highlightColor = 255;

    var oceanMin = 0, oceanMax = 20;
    var mentionedMin = 50, mentionedMax = 100;
    var relatedMin = 100, relatedMax = 150;

    // this function return a color code range in (0 - 255) from a clicked area on the screen

    function getPickColor ( mouseX, mouseY ) {

        // first need to hide above layer and shows the map_index image

        var ctx = controller.earthSurfaceShader.lookupCanvas.getContext( '2d' );
        ctx.clearRect( 0, 0, 256, 1 );

        var oceanFill = 0;
        ctx.fillStyle = 'rgb(' + oceanFill + ',' + oceanFill + ',' + oceanFill +')';
        ctx.fillRect( 0, 0, 1, 1 );

        controller.earthSurfaceShader.uniforms[ 'outlineLevel' ].value = 0;
        controller.earthSurfaceShader.uniforms[ 'flag' ].value = 0;

        controller.rotating.remove( controller.visualizationMesh );

        controller.earthSurfaceShader.lookupTexture.needsUpdate = true;

        controller.renderer.autoClear = false;
        controller.renderer.autoClearColor = false;
        controller.renderer.autoClearDepth = false;
        controller.renderer.autoClearStencil = false;

        controller.renderer.clear();
        controller.renderer.render( controller.scene, controller.camera );

        var gl = controller.renderer.context;
        gl.preserveDrawingBuffer = true;

        var mx = ( mouseX + controller.renderer.context.canvas.width / 2 );
        var my = ( -mouseY + controller.renderer.context.canvas.height / 2 );
        mx = Math.floor( mx );
        my = Math.floor( my );

        // picked color from map_index image

        var buf = new Uint8Array( 4 );
        gl.readPixels( mx, my, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, buf );

        // restore the above layer

        controller.renderer.autoClear = true;
        controller.renderer.autoClearColor = true;
        controller.renderer.autoClearDepth = true;
        controller.renderer.autoClearStencil = true;

        gl.preserveDrawingBuffer = false;

        controller.earthSurfaceShader.uniforms[ 'outlineLevel' ].value = 1;
        controller.earthSurfaceShader.uniforms[ 'flag' ].value = 1;

        controller.rotating.add( controller.visualizationMesh );

        highlightCountry( controller.selectedCountry.colorCode );

        return buf[ 0 ];

    }

    // this function highlight the surface

    function highlightCountry ( code ) {

        var i;

        // clear the surface

        var ctx = controller.earthSurfaceShader.lookupCanvas.getContext( '2d' );
        ctx.clearRect( 0, 0, 256, 1 );

        // highlight ocean
		/*
		 change
		 * */
        ctx.fillStyle = generateFillStyle( Utils.transformBrightness( controller.configure.brightness.ocean, oceanMin, oceanMax ) );
        // ctx.fillStyle = '#ADFF9A'
        console.log('高亮海洋', ctx.fillStyle);
        
        ctx.fillRect( 0, 0, 1, 1 );
		
        // highlight mentioned countries

        if ( controller.configure.control.lightenMentioned ) {

            ctx.fillStyle = generateFillStyle(
                Utils.transformBrightness( controller.configure.brightness.mentioned, mentionedMin, mentionedMax )
            );

            for ( i in controller.mentionedCountryCodes ) {

                ctx.fillRect( controller.mentionedCountryCodes[ i ], 0, 1, 1 );

            }

        }

        // highlight related countries

        ctx.fillStyle = generateFillStyle(
            Utils.transformBrightness( controller.configure.brightness.related, relatedMin, relatedMax )
        );

        for ( i in controller.relatedCountries ) {

            ctx.fillRect( controller.relatedCountries[ i ].colorCode, 0, 1, 1 );

        }

        // highlight clicked country

        ctx.fillStyle = generateFillStyle( highlightColor );
        ctx.fillRect( code, 0, 1, 1 );

        controller.earthSurfaceShader.lookupTexture.needsUpdate = true;

    }

    function generateFillStyle ( color ) {
		console.log('grenerate color========>', color, 'rgb(' + color + ',' + color + ',' + color +')')
        return 'rgb(' + color + ',' + color + ',' + color +')';

    }

    function update () {

        controller.earthSurfaceShader.update();

        highlightCountry( controller.selectedCountry.colorCode );

    }
	console.log('SurfaceHandler===>', getPickColor, highlightCountry, update)
    return {

        getPickColor: getPickColor,

        highlightCountry: highlightCountry,

        update: update

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handlers handle rotation of the globe.
 */

function RotationHandler ( controller ) {

    var rotateX = 0, rotateY = 0;
    var rotateVX = 0, rotateVY = 0;
    var rotateTargetX = undefined;
    var rotateTargetY = undefined;
    var rotateXMax = 90 * Math.PI / 180;

    var dragging = false;

    function update () {

        if ( rotateTargetX !== undefined && rotateTargetY !== undefined ) {

            rotateVX += ( rotateTargetX - rotateX ) * 0.012;
            rotateVY += ( rotateTargetY - rotateY ) * 0.012;

            if ( Math.abs( rotateTargetX - rotateX ) < 0.1 && Math.abs( rotateTargetY - rotateY ) < 0.1 ) {

                rotateTargetX = undefined;
                rotateTargetY = undefined;

            }

        }

        rotateX += rotateVX;
        rotateY += rotateVY;

        rotateVX *= 0.98;
        rotateVY *= 0.98;

        if ( dragging || rotateTargetX !== undefined ) {

            rotateVX *= 0.6;
            rotateVY *= 0.6;

        }

        if ( rotateX < -rotateXMax ) {

            rotateX = -rotateXMax;
            rotateVX *= -0.95;

        }

        if ( rotateX > rotateXMax ) {

            rotateX = rotateXMax;
            rotateVX *= -0.95;

        }

        controller.rotating.rotation.x = rotateX;
        controller.rotating.rotation.y = rotateY;

    }

    function rotateToTargetCountry () {

        var selectedCountry = controller.selectedCountry;

        rotateTargetX = selectedCountry.lat * Math.PI / 180;
        var targetY0 = -( selectedCountry.lon - 9 ) * Math.PI / 180;
        var piCounter = 0;

        while( true ) {

            var targetY0Neg = targetY0 - Math.PI * 2 * piCounter;
            var targetY0Pos = targetY0 + Math.PI * 2 * piCounter;

            if ( Math.abs( targetY0Neg - controller.rotating.rotation.y ) < Math.PI ) {

                rotateTargetY = targetY0Neg;
                break;

            } else if ( Math.abs( targetY0Pos - controller.rotating.rotation.y ) < Math.PI ) {

                rotateTargetY = targetY0Pos;
                break;

            }

            piCounter++;
            rotateTargetY = Utils.wrap(targetY0, -Math.PI, Math.PI);

        }

        rotateVX *= 0.6;
        rotateVY *= 0.6;

    }

    return {

        rotateToTargetCountry: rotateToTargetCountry,

        update: update,

        addRotateVY: function ( VYValue ) {

            rotateVY += VYValue;

        },

        addRotateVX: function ( VXValue ) {

            rotateVX += VXValue;

        },

        setDragging: function( isDragging ) {

            dragging = isDragging;

        },

        isDragging: function () {

            return dragging;

        },

        clearRotateTargetX: function () {

            rotateTargetX = undefined;

        }

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handlers handle the mouse wheel task.
 */

function WheelHandler ( controller ) {

    var nearPoint = 800;
    var farPoint = 2000;

    function handleMWheel ( delta ) {

        if ( controller.camera.position.z + delta * 100 <= nearPoint || controller.camera.position.z + delta * 100 >= farPoint) {

            // if no zoom in or zoom out wheel page

            // document.body.scrollTop += delta * 5;
            // document.documentElement.scrollTop += delta * 5;

        } else {

            // zoom in or zoom out the camera, its just like magnify or minify the globe
            // constrain camera to 1000 - 2000

            var positionZ = Utils.constrain( controller.camera.position.z + delta * 100, nearPoint, farPoint );
            controller.camera.position.set( 0, 0, positionZ );

        }

    }

    return {

        handleMWheel: handleMWheel

    }

}

/**
 * @author botime / https://github.com/botime
 * @author syt123450 / https://github.com/syt123450
 */

function HaloShader ( controller ) {

    var colorVector = new THREE.Vector3();

    update();

    function update () {

        var color = new THREE.Color( controller.configure.color.halo );

        colorVector.x = color.r;
        colorVector.y = color.g;
        colorVector.z = color.b;
    }

    return {

        uniforms: {

            "haloColor": { type: 'v3', value: colorVector }

        },

        vertexShader: [

            'varying vec3 vNormal;',

            'void main() {',

                'vNormal = normalize( normalMatrix * normal );',
                'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',

            '}'

        ].join( '\n' ),

        fragmentShader: [

            'varying vec3 vNormal;',
            "uniform vec3 haloColor;",

            'void main() {',

                'float intensity = pow( 0.5 - dot( vNormal, vec3( 0, 0, 1.0 ) ), 16.0 );',
                'gl_FragColor = vec4( haloColor, 1.0 ) * intensity;',

            '}'

        ].join( '\n' ),

        update: update

    }
}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This is the image in "/assets/images/map_indexed.png", encoded in based64
 */

var MapIndexBase64 = ( function () {

    // return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAEAAAAAgACAIAAAAp8GHpAAAACXBIWXMAAAsTAAALEwEAmpwYAAA4LGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxOC0wMS0yNlQxNDo1Mzo1My0wODowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE4LTAyLTA5VDE2OjI1OjQwLTA4OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxOC0wMi0wOVQxNjoyNTo0MC0wODowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDpmZTY5MzA0My1jYWQxLTQ5ZWEtOTQ0Ny1iZmUwNDRjYTY2MTA8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPnhtcC5kaWQ6ZmU2OTMwNDMtY2FkMS00OWVhLTk0NDctYmZlMDQ0Y2E2NjEwPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6ZmU2OTMwNDMtY2FkMS00OWVhLTk0NDctYmZlMDQ0Y2E2NjEwPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmZlNjkzMDQzLWNhZDEtNDllYS05NDQ3LWJmZTA0NGNhNjYxMDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxOC0wMS0yNlQxNDo1Mzo1My0wODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjQwOTY8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjA0ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAg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"
	return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAEAAAAAgACAIAAAAp8GHpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZTY5MzA0My1jYWQxLTQ5ZWEtOTQ0Ny1iZmUwNDRjYTY2MTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkY1OTBBNTdFQTZEMTFFOTkzNEVFOENDQkUyMTFGQjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkY1OTBBNTZFQTZEMTFFOTkzNEVFOENDQkUyMTFGQjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmZTY5MzA0My1jYWQxLTQ5ZWEtOTQ0Ny1iZmUwNDRjYTY2MTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZmU2OTMwNDMtY2FkMS00OWVhLTk0NDctYmZlMDQ0Y2E2NjEw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"
}() );

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This is the image in "/assets/images/map_outline.png", encoded in based64
 */

var MapOutlineBase64 = ( function () {

}() );

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * shader material's parameter for earth surface
 */

function EarthSurfaceShader ( controller ) {

    var helperColor = new THREE.Color();

    // cache color object for surface color

    var surfaceColor = new THREE.Vector3();

    //cache color object for selected Color

    var selectedColor = new THREE.Vector3();

    var lookupCanvas, lookupTexture;

    // the uniforms object will be created when the EarthSurfaceShader object is created

    var uniforms = createUniforms();

    // this function create the uniform for shader

    function createUniforms () {

        loadSurfaceColor();

        var uniforms = {};

        // var mapIndexedTexture = ( new THREE.TextureLoader() ).load( MapIndexBase64 );
        var mapIndexedTexture = ( new THREE.TextureLoader() ).load( MapIndexBase64 );
		// console.log('create===>', mapIndexedTexture, MapIndexBase64);
        // the mapIndex is used for getting the color when click on the earth

        uniforms.mapIndex = { type: 't', value: mapIndexedTexture };
        uniforms.mapIndex.value.magFilter = THREE.NearestFilter;
        uniforms.mapIndex.value.minFilter = THREE.NearestFilter;

        lookupCanvas = document.createElement( 'canvas' );
        lookupCanvas.width = 256;
        lookupCanvas.height = 1;

        lookupTexture = new THREE.Texture( lookupCanvas );
        lookupTexture.magFilter = THREE.NearestFilter;
        lookupTexture.minFilter = THREE.NearestFilter;
        lookupTexture.needsUpdate = true;

        // the lookup is used for
		
		// 修改 lookup颜色 
        uniforms.lookup = { type: 't', value: lookupTexture };
		console.log('uniforms.lookup====>', uniforms.lookup)
        var mapOutlineTexture = ( new THREE.TextureLoader() ).load( MapOutlineBase64 );

        // the outline is what the user see in browser

           uniforms.outline = { type: 't', value: mapOutlineTexture };
        // the outlineLevel is used by webgl to judge whether to show outline
		
		// 修改线条宽度
        uniforms.outlineLevel = { type: 'f', value: 1 };
		
        // the surfaceColor is passed into webgl to render the surface color

           uniforms.surfaceColor = { type: 'v3', value: surfaceColor };
		console.log('surfaceColor', surfaceColor)
        // the flag is passed into webgl to judge whether to show surface color

        uniforms.flag = { type: 'f', value: 1 };

        // the selectedColor is passed into webgl to render the selected country on the surface

        uniforms.selectedColor = { type: 'v3', value: selectedColor };

        return uniforms;

    }

    // this function will set selectedColor and surfaceColor based on the configure

    function loadSurfaceColor () {

        setShaderColor( controller.configure.color.surface );

        if ( controller.configure.color.selected === null ) {

            setHighlightColor( controller.configure.color.surface );
			console.log('highlight color===========>', controller.configure.color.surface)
        } else {

            setHighlightColor( controller.configure.color.selected );

        }

    }

    function setShaderColor( color ) {

        if (color === null) {

            return;

        }

        color = Utils.formatColor( color );

        helperColor.setHex( color );

        surfaceColor.x = helperColor.r;
        surfaceColor.y = helperColor.g;
        surfaceColor.z = helperColor.b;

    }

    function setHighlightColor(color) {

        if (color === null) {

            return;

        }

        color = Utils.formatColor( color );

        helperColor.setHex( color );
        selectedColor.x = helperColor.r;
        selectedColor.y = helperColor.g;
        selectedColor.z = helperColor.b;

    }

    // this function used to update the shader material when user change the surface color at run time

    function update () {

        loadSurfaceColor();

    }

    return {

        uniforms: uniforms,

        vertexShader: [

            "varying vec2 vUv;",

            "void main() {",
                "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0);",
                "vUv = uv;",
            "}"

        ].join( "\n" ),

        fragmentShader: [

            "uniform sampler2D mapIndex;",
            "uniform sampler2D lookup;",
            "uniform sampler2D outline;",
            "uniform float outlineLevel;",
            "varying vec2 vUv;",

            "uniform vec3 surfaceColor;",
            "uniform float flag;",
            "uniform vec3 selectedColor;",

            "void main() {",
                "vec4 mapColor = texture2D( mapIndex, vUv );",
                "float indexedColor = mapColor.x;",
                "vec2 lookupUV = vec2( indexedColor, 0. );",
                "vec4 lookupColor = texture2D( lookup, lookupUV );",
                "float mask = lookupColor.x + (1.-outlineLevel) * indexedColor;",
                "mask = clamp(mask,0.,1.);",
                "float outlineColor = texture2D( outline, vUv ).x * outlineLevel;",
                "float diffuse = mask + outlineColor;",

                "vec3 earthColor = vec3(0.0, 0.0, 0.0);",
                "earthColor.x = flag * surfaceColor.x * diffuse + (1.0 - flag) * diffuse;",
                "earthColor.y = flag * surfaceColor.y * diffuse + (1.0 - flag) * diffuse;",
                "earthColor.z = flag * surfaceColor.z * diffuse + (1.0 - flag) * diffuse;",

                "if (lookupColor.x > 0.9) {",
                    "earthColor = selectedColor * diffuse;",
                "}",

                "gl_FragColor = vec4( earthColor, 1.  );",

            "}"

        ].join( "\n" ),

        lookupCanvas: lookupCanvas,

        lookupTexture: lookupTexture,

        update: update

    }
}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This is the image in "/assets/images/particle.png", encoded in based64
 */
// 光源
var ParticleBase64 = ( function () {

    return "data:image/png;base64,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";

}() );

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * Shader material's parameter for moving sprite on spline
 */

function MovingSpriteShader () {

    var particleTexture = ( new THREE.TextureLoader() ).load( ParticleBase64 );

    var uniform = {

        amplitude: { type: "f", value: 1.0 },
        color: { type: "c", value: new THREE.Color( 0xffffff ) },
        texture: { type: "t", value: particleTexture }

    };

    return {

        uniforms: uniform,

        vertexShader: [

            "uniform float amplitude;",

            "attribute float size;",
            "attribute vec3 customColor;",

            "varying vec3 vColor;",

            "void main() {",

                "vColor = customColor;",

                "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",

                "gl_PointSize = size;",

                "gl_Position = projectionMatrix * mvPosition;",

            "}"

        ].join( "\n" ),

        fragmentShader: [

            "uniform vec3 color;",
            "uniform sampler2D texture;",

            "varying vec3 vColor;",

            "void main() {",

                "gl_FragColor = vec4( color * vColor, 1.0 );",
                "gl_FragColor = gl_FragColor * texture2D( texture, gl_PointCoord );",

            "}"

        ].join( "\n" )

    };
}

/**
 * @author syt123450 / https://github.com/syt123450
 * @author Botime / https://github.com/BoTime
 */

/**
 * This is a singleton object.
 * This object contains all country information in detail.
 */

var CountryData = ( function () {

    var basicCountryData = {

        AD: { colorCode: 186, name: 'ANDORRA', lat: 42.5, lon: 1.6 },
        AE: { colorCode: 22, name: 'UNITED ARAB EMIRATES', lat: 24, lon: 54 },
        AF: { colorCode: 30, name: 'AFGHANISTAN', lat: 33, lon: 65 },
        AG: { colorCode: 190, name: 'ANTIGUA AND BARBUDA', lat: 17.05, lon: -61.8 },
        AI: { colorCode: 215, name: 'ANGUILLA', lat: 18.25, lon: -63.1667 },
        AL: { colorCode: 69, name: 'ALBANIA', lat: 41, lon: 20 },
        AM: { colorCode: 115, name: 'ARMENIA', lat: 40, lon: 45 },
        AO: { colorCode: 47, name: 'ANGOLA', lat: -12.5, lon: 18.5 },
        AQ: { colorCode: 152, name: 'ANTARCTICA', lat: -90, lon: 0 },
        AR: { colorCode: 76, name: 'ARGENTINA', lat: -34, lon: -64 },
        AS: { colorCode: 208, name: 'AMERICAN SAMOA', lat: -14.3333, lon: -170 },
        AT: { colorCode: 35, name: 'AUSTRIA', lat: 47.3333, lon: 13.3333 },
        AU: { colorCode: 51, name: 'AUSTRALIA', lat: -27, lon: 133 },
        AW: { colorCode: 210, name: 'ARUBA', lat: 12.5, lon: -69.9667 },
        AZ: { colorCode: 106, name: 'AZERBAIJAN', lat: 40.5, lon: 47.5 },
        BA: { colorCode: 94, name: 'BOSNIA AND HERZEGOVINA', lat: 44, lon: 18 },
        BB: { colorCode: 191, name: 'BARBADOS', lat: 13.1667, lon: -59.5333 },
        BD: { colorCode: 31, name: 'BANGLADESH', lat: 24, lon: 90 },
        BE: { colorCode: 100, name: 'BELGIUM', lat: 50.8333, lon: 4 },
        BF: { colorCode: 2, name: 'BURKINA FASO', lat: 13, lon: -2 },
        BG: { colorCode: 103, name: 'BULGARIA', lat: 43, lon: 25 },
        BH: { colorCode: 185, name: 'BAHRAIN', lat: 26, lon: 50.55 },
        BI: { colorCode: 104, name: 'BURUNDI', lat: -3.5, lon: 30 },
        BJ: { colorCode: 143, name: 'BENIN', lat: 9.5, lon: 2.25 },
        BL: { colorCode: 203, name: 'SAINT BARTHÉLEMY' },
        BM: { colorCode: 219, name: 'BERMUDA', lat: 32.3333, lon: -64.75 },
        BN: { colorCode: 170, name: 'BRUNEI DARUSSALAM', lat: 4.5, lon: 114.6667 },
        BO: { colorCode: 10, name: 'BOLIVIA, PLURINATIONAL STATE OF', lat: -17, lon: -65 },
        BR: { colorCode: 24, name: 'BRAZIL', lat: -10, lon: -55 },
        BS: { colorCode: 161, name: 'BAHAMAS', lat: 24.25, lon: -76 },
        BT: { colorCode: 156, name: 'BHUTAN', lat: 27.5, lon: 90.5 },
        BW: { colorCode: 16, name: 'BOTSWANA', lat: -22, lon: 24 },
        BY: { colorCode: 5, name: 'BELARUS', lat: 53, lon: 28 },
        BZ: { colorCode: 23, name: 'BELIZE', lat: 17.25, lon: -88.75 },
        CA: { colorCode: 97, name: 'CANADA', lat: 60, lon: -95 },
        CD: { colorCode: 27, name: 'CONGO, THE DEMOCRATIC REPUBLIC OF THE', lat: 0, lon: 25 },
        CF: { colorCode: 132, name: 'CENTRAL AFRICAN REPUBLIC', lat: 7, lon: 21 },
        CG: { colorCode: 110, name: 'CONGO', lat: -1, lon: 15 },
        CH: { colorCode: 13, name: 'SWITZERLAND', lat: 47, lon: 8 },
        CI: { colorCode: 11, name: 'CÔTE D\'IVOIRE', lat: 8, lon: -5 },
        CK: { colorCode: 206, name: 'COOK ISLANDS', lat: -21.2333, lon: -159.7667 },
        CL: { colorCode: 128, name: 'CHILE', lat: -30, lon: -71 },
        CM: { colorCode: 14, name: 'CAMEROON', lat: 6, lon: 12 },
        CN: { colorCode: 96, name: 'CHINA', lat: 35, lon: 105 },
        CO: { colorCode: 45, name: 'COLOMBIA', lat: 4, lon: -72 },
        CR: { colorCode: 78, name: 'COSTA RICA', lat: 10, lon: -84 },
        CU: { colorCode: 42, name: 'CUBA', lat: 21.5, lon: -80 },
        CV: { colorCode: 172, name: 'CAPE VERDE', lat: 16, lon: -24 },
        CY: { colorCode: 167, name: 'CYPRUS', lat: 35, lon: 33 },
        CZ: { colorCode: 67, name: 'CZECH REPUBLIC', lat: 49.75, lon: 15.5 },
        DE: { colorCode: 48, name: 'GERMANY', lat: 51, lon: 9 },
        DJ: { colorCode: 105, name: 'DJIBOUTI', lat: 11.5, lon: 43 },
        DK: { colorCode: 57, name: 'DENMARK', lat: 56, lon: 10 },
        DM: { colorCode: 181, name: 'DOMINICA', lat: 15.4167, lon: -61.3333 },
        DO: { colorCode: 32, name: 'DOMINICAN REPUBLIC', lat: 19, lon: -70.6667 },
        DZ: { colorCode: 12, name: 'ALGERIA', lat: 28, lon: 3 },
        EC: { colorCode: 142, name: 'ECUADOR', lat: -2, lon: -77.5 },
        EE: { colorCode: 113, name: 'ESTONIA', lat: 59, lon: 26 },
        EG: { colorCode: 87, name: 'EGYPT', lat: 27, lon: 30 },
        EH: { colorCode: 66, name: 'WESTERN SAHARA', lat: 24.5, lon: -13 },
        ER: { colorCode: 149, name: 'ERITREA', lat: 15, lon: 39 },
        ES: { colorCode: 118, name: 'SPAIN', lat: 40, lon: -4 },
        ET: { colorCode: 63, name: 'ETHIOPIA', lat: 8, lon: 38 },
        FI: { colorCode: 70, name: 'FINLAND', lat: 64, lon: 26 },
        FJ: { colorCode: 158, name: 'FIJI', lat: -18, lon: 175 },
        FK: { colorCode: 163, name: 'FALKLAND ISLANDS (MALVINAS)', lat: -51.75, lon: -59 },
        FM: { colorCode: 184, name: 'MICRONESIA, FEDERATED STATES OF', lat: 6.9167, lon: 158.25 },
        FO: { colorCode: 178, name: 'FAROE ISLANDS', lat: 62, lon: -7 },
        FR: { colorCode: 3, name: 'FRANCE', lat: 46, lon: 2 },
        GA: { colorCode: 119, name: 'GABON', lat: -1, lon: 11.75 },
        GB: { colorCode: 77, name: 'UNITED KINGDOM', lat: 54, lon: -2 },
        GD: { colorCode: 197, name: 'GRENADA', lat: 12.1167, lon: -61.6667 },
        GE: { colorCode: 89, name: 'GEORGIA', lat: 42, lon: 43.5 },
        GG: { colorCode: 217, name: 'GUERNSEY', lat: 49.5, lon: -2.56 },
        GH: { colorCode: 34, name: 'GHANA', lat: 8, lon: -2 },
        GI: { colorCode: 222, name: 'GIBRALTAR', lat: 36.1833, lon: -5.3667 },
        GL: { colorCode: 55, name: 'GREENLAND', lat: 72, lon: -40 },
        GM: { colorCode: 164, name: 'GAMBIA', lat: 13.4667, lon: -16.5667 },
        GN: { colorCode: 80, name: 'GUINEA', lat: 11, lon: -10 },
		GP: { colorCode: 3, name: 'FRANCE', lat: 46, lon: 2 },
        GQ: { colorCode: 101, name: 'EQUATORIAL GUINEA', lat: 2, lon: 10 },
        GR: { colorCode: 140, name: 'GREECE', lat: 39, lon: 22 },
        GT: { colorCode: 64, name: 'GUATEMALA', lat: 15.5, lon: -90.25 },
        GU: { colorCode: 227, name: 'GUAM', lat: 13.4667, lon: 144.7833 },
        GW: { colorCode: 33, name: 'GUINEA-BISSAU', lat: 12, lon: -15 },
        GY: { colorCode: 99, name: 'GUYANA', lat: 5, lon: -59 },
        HK: { colorCode: 96, name: 'CHINA', lat: 35, lon: 105 },
        HN: { colorCode: 125, name: 'HONDURAS', lat: 15, lon: -86.5 },
        HR: { colorCode: 54, name: 'CROATIA', lat: 45.1667, lon: 15.5 },
        HT: { colorCode: 93, name: 'HAITI', lat: 19, lon: -72.4167 },
        HU: { colorCode: 120, name: 'HUNGARY', lat: 47, lon: 20 },
        ID: { colorCode: 7, name: 'INDONESIA', lat: -5, lon: 120 },
        IE: { colorCode: 81, name: 'IRELAND', lat: 53, lon: -8 },
        IL: { colorCode: 137, name: 'ISRAEL', lat: 31.5, lon: 34.75 },
        IM: { colorCode: 226, name: 'ISLE OF MAN', lat: 54.23, lon: -4.55 },
        IN: { colorCode: 95, name: 'INDIA', lat: 20, lon: 77 },
        IQ: { colorCode: 53, name: 'IRAQ', lat: 33, lon: 44 },
        IR: { colorCode: 61, name: 'IRAN, ISLAMIC REPUBLIC OF', lat: 32, lon: 53 },
        IS: { colorCode: 126, name: 'ICELAND', lat: 65, lon: -18 },
        IT: { colorCode: 28, name: 'ITALY', lat: 42.8333, lon: 12.8333 },
        JE: { colorCode: 214, name: 'JERSEY', lat: 49.21, lon: -2.13 },
        JM: { colorCode: 166, name: 'JAMAICA', lat: 18.25, lon: -77.5 },
        JO: { colorCode: 20, name: 'JORDAN', lat: 31, lon: 36 },
        JP: { colorCode: 40, name: 'JAPAN', lat: 36, lon: 138 },
        KE: { colorCode: 18, name: 'KENYA', lat: 1, lon: 38 },
        KG: { colorCode: 72, name: 'KYRGYZSTAN', lat: 41, lon: 75 },
        KH: { colorCode: 123, name: 'CAMBODIA', lat: 13, lon: 105 },
        KI: { colorCode: 183, name: 'KIRIBATI', lat: 1.4167, lon: 173 },
        KM: { colorCode: 176, name: 'COMOROS', lat: -12.1667, lon: 44.25 },
        KN: { colorCode: 201, name: 'SAINT KITTS AND NEVIS', lat: 17.3333, lon: -62.75 },
        KP: { colorCode: 139, name: 'KOREA, DEMOCRATIC PEOPLE\'S REPUBLIC OF', lat: 40, lon: 127 },
        KR: { colorCode: 124, name: 'KOREA, REPUBLIC OF', lat: 37, lon: 127.5 },
        KW: { colorCode: 159, name: 'KUWAIT', lat: 29.3375, lon: 47.6581 },
        KY: { colorCode: 200, name: 'CAYMAN ISLANDS', lat: 19.5, lon: -80.5 },
        KZ: { colorCode: 151, name: 'KAZAKHSTAN', lat: 48, lon: 68 },
        LA: { colorCode: 138, name: 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC', lat: 18, lon: 105 },
        LB: { colorCode: 147, name: 'LEBANON', lat: 33.8333, lon: 35.8333 },
        LC: { colorCode: 194, name: 'SAINT LUCIA', lat: 13.8833, lon: -61.1333 },
        LI: { colorCode: 211, name: 'LIECHTENSTEIN', lat: 47.1667, lon: 9.5333 },
        LK: { colorCode: 136, name: 'SRI LANKA', lat: 7, lon: 81 },
        LR: { colorCode: 130, name: 'LIBERIA', lat: 6.5, lon: -9.5 },
        LS: { colorCode: 102, name: 'LESOTHO', lat: -29.5, lon: 28.5 },
        LT: { colorCode: 134, name: 'LITHUANIA', lat: 56, lon: 24 },
        LU: { colorCode: 175, name: 'LUXEMBOURG', lat: 49.75, lon: 6.1667 },
        LV: { colorCode: 58, name: 'LATVIA', lat: 57, lon: 25 },
        LY: { colorCode: 4, name: 'LIBYA', lat: 25, lon: 17 },
        MA: { colorCode: 129, name: 'MOROCCO', lat: 32, lon: -5 },
        MC: { colorCode: 224, name: 'MONACO', lat: 43.7333, lon: 7.4 },
        MD: { colorCode: 146, name: 'MOLDOVA, REPUBLIC OF', lat: 47, lon: 29 },
        ME: { colorCode: 112, name: 'MONTENEGRO', lat: 42, lon: 19 },
        MG: { colorCode: 9, name: 'MADAGASCAR', lat: -20, lon: 47 },
        MH: { colorCode: 209, name: 'MARSHALL ISLANDS', lat: 9, lon: 168 },
        MK: { colorCode: 15, name: 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF', lat: 41.8333, lon: 22 },
        ML: { colorCode: 26, name: 'MALI', lat: 17, lon: -4 },
        MM: { colorCode: 62, name: 'MYANMAR', lat: 22, lon: 98 },
        MN: { colorCode: 155, name: 'MONGOLIA', lat: 46, lon: 105 },
        MP: { colorCode: 187, name: 'NORTHERN MARIANA ISLANDS', lat: 15.2, lon: 145.75 },
        MR: { colorCode: 46, name: 'MAURITANIA', lat: 20, lon: -12 },
        MS: { colorCode: 202, name: 'MONTSERRAT', lat: 16.75, lon: -62.2 },
        MT: { colorCode: 198, name: 'MALTA', lat: 35.8333, lon: 14.5833 },
        MU: { colorCode: 177, name: 'MAURITIUS', lat: -20.2833, lon: 57.55 },
        MV: { colorCode: 199, name: 'MALDIVES', lat: 3.25, lon: 73 },
        MW: { colorCode: 121, name: 'MALAWI', lat: -13.5, lon: 34 },
        MX: { colorCode: 21, name: 'MEXICO', lat: 23, lon: -102 },
        MY: { colorCode: 107, name: 'MALAYSIA', lat: 2.5, lon: 112.5 },
        MZ: { colorCode: 39, name: 'MOZAMBIQUE', lat: -18.25, lon: 35 },
        NA: { colorCode: 85, name: 'NAMIBIA', lat: -22, lon: 17 },
        NC: { colorCode: 157, name: 'NEW CALEDONIA', lat: -21.5, lon: 165.5 },
        NE: { colorCode: 56, name: 'NIGER', lat: 16, lon: 8 },
        NG: { colorCode: 82, name: 'NIGERIA', lat: 10, lon: 8 },
        NI: { colorCode: 127, name: 'NICARAGUA', lat: 13, lon: -85 },
        NL: { colorCode: 131, name: 'NETHERLANDS', lat: 52.5, lon: 5.75 },
        NO: { colorCode: 145, name: 'NORWAY', lat: 62, lon: 10 },
        NP: { colorCode: 148, name: 'NEPAL', lat: 28, lon: 84 },
        NR: { colorCode: 221, name: 'NAURU', lat: -0.5333, lon: 166.9167 },
        NU: { colorCode: 204, name: 'NIUE', lat: -19.0333, lon: -169.8667 },
        NZ: { colorCode: 41, name: 'NEW ZEALAND', lat: -41, lon: 174 },
        OM: { colorCode: 74, name: 'OMAN', lat: 21, lon: 57 },
        PA: { colorCode: 75, name: 'PANAMA', lat: 9, lon: -80 },
        PE: { colorCode: 1, name: 'PERU', lat: -10, lon: -76 },
        PF: { colorCode: 173, name: 'FRENCH POLYNESIA', lat: -15, lon: -140 },
        PG: { colorCode: 52, name: 'PAPUA NEW GUINEA', lat: -6, lon: 147 },
        PH: { colorCode: 108, name: 'PHILIPPINES', lat: 13, lon: 122 },
        PK: { colorCode: 6, name: 'PAKISTAN', lat: 30, lon: 70 },
        PL: { colorCode: 84, name: 'POLAND', lat: 52, lon: 20 },
        PM: { colorCode: 205, name: 'SAINT PIERRE AND MIQUELON', lat: 46.8333, lon: -56.3333 },
        PN: { colorCode: 223, name: 'PITCAIRN', lat: -24.7, lon: -127.4 },
        PR: { colorCode: 168, name: 'PUERTO RICO', lat: 18.25, lon: -66.5 },
        PS: { colorCode: 169, name: 'PALESTINIAN TERRITORY, OCCUPIED', lat: 32, lon: 35.25 },
        PT: { colorCode: 44, name: 'PORTUGAL', lat: 39.5, lon: -8 },
        PW: { colorCode: 188, name: 'PALAU', lat: 7.5, lon: 134.5 },
        PY: { colorCode: 79, name: 'PARAGUAY', lat: -23, lon: -58 },
        QA: { colorCode: 165, name: 'QATAR', lat: 25.5, lon: 51.25 },
		RE: { colorCode: 3, name: 'FRANCE', lat: 46, lon: 2 },
        RO: { colorCode: 59, name: 'ROMANIA', lat: 46, lon: 25 },
        RS: { colorCode: 111, name: 'SERBIA', lat: 44, lon: 21 },
        RU: { colorCode: 92, name: 'RUSSIAN FEDERATION', lat: 60, lon: 100 },
        RW: { colorCode: 114, name: 'RWANDA', lat: -2, lon: 30 },
        SA: { colorCode: 90, name: 'SAUDI ARABIA', lat: 25, lon: 45 },
        SB: { colorCode: 73, name: 'SOLOMON ISLANDS', lat: -8, lon: 159 },
        SC: { colorCode: 189, name: 'SEYCHELLES', lat: -4.5833, lon: 55.6667 },
        SD: { colorCode: 49, name: 'SUDAN', lat: 15, lon: 30 },
        SE: { colorCode: 36, name: 'SWEDEN', lat: 62, lon: 15 },
        SG: { colorCode: 228, name: 'SINGAPORE', lat: 1.3667, lon: 103.8 },
        SH: { colorCode: 213, name: 'SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA', lat: -15.9333, lon: -5.7 },
        SI: { colorCode: 144, name: 'SLOVENIA', lat: 46, lon: 15 },
        SK: { colorCode: 133, name: 'SLOVAKIA', lat: 48.6667, lon: 19.5 },
        SL: { colorCode: 25, name: 'SIERRA LEONE', lat: 8.5, lon: -11.5 },
        SM: { colorCode: 218, name: 'SAN MARINO', lat: 43.7667, lon: 12.4167 },
        SN: { colorCode: 116, name: 'SENEGAL', lat: 14, lon: -14 },
        SO: { colorCode: 29, name: 'SOMALIA', lat: 10, lon: 49 },
        SR: { colorCode: 65, name: 'SURINAME', lat: 4, lon: -56 },
        ST: { colorCode: 179, name: 'SAO TOME AND PRINCIPE', lat: 1, lon: 7 },
        SV: { colorCode: 98, name: 'EL SALVADOR', lat: 13.8333, lon: -88.9167 },
        SY: { colorCode: 71, name: 'SYRIAN ARAB REPUBLIC', lat: 35, lon: 38 },
        SZ: { colorCode: 153, name: 'SWAZILAND', lat: -26.5, lon: 31.5 },
        TC: { colorCode: 192, name: 'TURKS AND CAICOS ISLANDS', lat: 21.75, lon: -71.5833 },
        TD: { colorCode: 68, name: 'CHAD', lat: 15, lon: 19 },
        TG: { colorCode: 117, name: 'TOGO', lat: 8, lon: 1.1667 },
        TH: { colorCode: 50, name: 'THAILAND', lat: 15, lon: 100 },
        TJ: { colorCode: 122, name: 'TAJIKISTAN', lat: 39, lon: 71 },
        TL: { colorCode: 160, name: 'TIMOR-LESTE', lat: -8.55, lon: 125.5167 },
        TM: { colorCode: 141, name: 'TURKMENISTAN', lat: 40, lon: 60 },
        TN: { colorCode: 83, name: 'TUNISIA', lat: 34, lon: 9 },
        TO: { colorCode: 182, name: 'TONGA', lat: -20, lon: -175 },
        TR: { colorCode: 37, name: 'TURKEY', lat: 39, lon: 35 },
        TT: { colorCode: 171, name: 'TRINIDAD AND TOBAGO', lat: 11, lon: -61 },
        TV: { colorCode: 220, name: 'TUVALU', lat: -8, lon: 178 },
        TW: { colorCode: 19, name: 'TAIWAN', lat: 23.5, lon: 121 },
        TZ: { colorCode: 88, name: 'TANZANIA, UNITED REPUBLIC OF', lat: -6, lon: 35 },
        UA: { colorCode: 17, name: 'UKRAINE', lat: 49, lon: 32 },
        UG: { colorCode: 38, name: 'UGANDA', lat: 1, lon: 32 },
        US: { colorCode: 150, name: 'UNITED STATES', lat: 38, lon: -97 },
        UY: { colorCode: 109, name: 'URUGUAY', lat: -33, lon: -56 },
        UZ: { colorCode: 154, name: 'UZBEKISTAN', lat: 41, lon: 64 },
        VA: { colorCode: 225, name: 'HOLY SEE (VATICAN CITY STATE)', lat: 41.9, lon: 12.45 },
        VC: { colorCode: 193, name: 'SAINT VINCENT AND THE GRENADINES', lat: 13.25, lon: -61.2 },
        VE: { colorCode: 43, name: 'VENEZUELA, BOLIVARIAN REPUBLIC OF', lat: 8, lon: -66 },
        VG: { colorCode: 212, name: 'VIRGIN ISLANDS, BRITISH', lat: 18.5, lon: -64.5 },
        VI: { colorCode: 196, name: 'VIRGIN ISLANDS, U.S.', lat: 18.3333, lon: -64.8333 },
        VN: { colorCode: 91, name: 'VIET NAM', lat: 16, lon: 106 },
        VU: { colorCode: 162, name: 'VANUATU', lat: -16, lon: 167 },
        WF: { colorCode: 207, name: 'WALLIS AND FUTUNA', lat: -13.3, lon: -176.2 },
        WS: { colorCode: 174, name: 'SAMOA', lat: -13.5833, lon: -172.3333 },
        YE: { colorCode: 8, name: 'YEMEN', lat: 15, lon: 48 },
        YT: { colorCode: 195, name: 'MAYOTTE', lat: -12.8333, lon: 45.1667 },
        ZA: { colorCode: 86, name: 'SOUTH AFRICA', lat: -29, lon: 24 },
        ZM: { colorCode: 60, name: 'ZAMBIA', lat: -15, lon: 30 },
        ZW: { colorCode: 135, name: 'ZIMBABWE', lat: -20, lon: 30 }

    };

    // This function create the center ( Three.js vector3 ) of all country, and add the center to "basicCountryData" object

    function createCountryCenter () {

        var rad = 100;

        for ( var s in basicCountryData ) {

            var country = basicCountryData[ s ];

            var lon = country.lon - 90;
            var lat = country.lat;

            var phi = Math.PI / 2 - lat * Math.PI / 180 - Math.PI * 0.01;
            var theta = 2 * Math.PI - lon * Math.PI / 180 + Math.PI * 0.06;

            var center = new THREE.Vector3();
            center.x = Math.sin( phi ) * Math.cos( theta ) * rad;
            center.y = Math.cos( phi ) * rad;
            center.z = Math.sin( phi ) * Math.sin( theta ) * rad;

            country.center = center;

        }

    }

    // when CountryData is initialized, it will automatically create the center ( Three.js vector3) for all country

    createCountryCenter();

    return basicCountryData;

}() );

var Continent = (function() {

	var continentList = {
		"names": ["OCEANIA", "NORTH AMERICA", "SOUTH AMERICA", "AFRICA", "EUROPE", "ASIA"],
		"OCEANIA": {
			"countries": ["AU", "CK", "FJ", "GU", "NZ", "PG"],
			"lat": -27,
			"lon": 133
		},
		"NORTH AMERICA": {
			"countries": ["BM", "BS", "CA", "CR", "CU", "GD", "GT", "HN", "HT", "JM", "MX", "NI", "PA", "US", "VE"],
			"lat": 39.5,
			"lon": -95
		},
		"SOUTH AMERICA": {
			"countries": ["AR", "BO", "BR", "CL", "CO", "EC", "GY", "PE", "PY", "UY"],
			"lat": -21,
			"lon": -58.5
		},
		"AFRICA": {
			"countries": ["AO", "BI", "BJ", "BW", "CF", "CG", "CM", "CV", "DZ", "EG", "ET", "GA", "GH", "GM", "GN", "GQ", "KE", "LY", "MA", "MG", "ML", "MR", "MU", "MZ", "NA", "NE", "NG", "RW", "SD", "SN", "SO", "TZ", "UG", "ZA", "ZM", "ZW", "TN"],
			"lat": 1,
			"lon": 17
		},
		"EUROPE": {
			"countries": ["AT", "BE", "BG", "CH", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IS", "IT", "LT", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "SE", "SK", "SM", "UA", "VA"],
			"lat": 53.5,
			"lon": 28
		},
		"ASIA": {
			"countries": ["AE", "AF", "AL", "AZ", "BD", "BH", "BN", "BT", "CN", "CY", "ID", "IL", "IN", "IQ", "JO", "JP", "KH", "KP", "KR", "KW", "KZ", "LA", "LB", "LU", "MN", "MV", "MY", "NP", "OM", "PH", "PK", "QA", "SA", "SG", "SY", "TH", "TJ", "TM", "UZ", "VN", "YE"],
			"lat": 35,
			"lon": 108.5
		}
	};

	function createContinentCenter () {

		var rad = 100;

		for ( var i = 0; i < continentList.names.length; i++ ) {

			var continentName = continentList.names[i];
			var continentInfo = continentList[continentName];

			var lon = continentInfo.lon - 90;
			var lat = continentInfo.lat;

			var phi = Math.PI / 2 - lat * Math.PI / 180 - Math.PI * 0.01;
			var theta = 2 * Math.PI - lon * Math.PI / 180 + Math.PI * 0.06;

			var center = new THREE.Vector3();
			center.x = Math.sin( phi ) * Math.cos( theta ) * rad;
			center.y = Math.cos( phi ) * rad;
			center.z = Math.sin( phi ) * Math.sin( theta ) * rad;

			continentInfo.center = center;

		}

	}

	createContinentCenter();

	return continentList;

}());

/**
 * @author syt123450 / https://github.com/syt123450
 * @author botime / https://github.com/botime
 */

/**
 * This utils create objects in for the scene
 */

var ObjectUtils = ( function () {

    function createScene ( controller ) {

        var scene = new THREE.Scene();
        if ( controller.configure.color.background !== null ) {

            scene.background = new THREE.Color( controller.configure.color.background );

        }

        return scene;
    }

    //create Three.js camera

    function createCamera ( container ) {

        var camera = new THREE.PerspectiveCamera( 12, container.clientWidth / container.clientHeight, 1, 20000 );
        camera.position.z = 1400;
        camera.position.y = 0;
        camera.lookAt( 0, 0, 0 );

        return camera;

    }

    //create Three.js lights

    function createLights () {

        var lights = [];

        var light1 = new THREE.AmbientLight( 0x505050 );

        var light2 = new THREE.SpotLight( 0xeeeeee, 3 );
        light2.position.x = 730;
        light2.position.y = 520;
        light2.position.z = 626;
        light2.castShadow = true;

        var light3 = new THREE.PointLight( 0x222222, 14.8 );
        light3.position.x = -640;
        light3.position.y = -500;
        light3.position.z = -1000;

        lights.push( light1 );
        lights.push( light2 );
        lights.push( light3 );

        return lights;

    }

    //create Three.js renderer, using webgl renderer to render canvas

    function createRenderer ( container ) {

        container.style.backgroundColor = "#ffffff";

        var sceneArea = document.createElement( "canvas" );

        // the scene's height and width only fit the div's actual height and width

        var cs = getComputedStyle( container );

        var paddingX = parseFloat( cs.paddingLeft ) + parseFloat( cs.paddingRight );
        var paddingY = parseFloat( cs.paddingTop ) + parseFloat( cs.paddingBottom );

        var borderX = parseFloat( cs.borderLeftWidth ) + parseFloat( cs.borderRightWidth );
        var borderY = parseFloat( cs.borderTopWidth ) + parseFloat( cs.borderBottomWidth );

        sceneArea.width = container.clientWidth - paddingX - borderX;
        sceneArea.height = container.clientHeight - paddingY - borderY;
        sceneArea.style.backgroundColor = "#ffffff";

        var renderer = new THREE.WebGLRenderer( { canvas: sceneArea, antialias: false } );
        renderer.setSize( sceneArea.width, sceneArea.height );
        renderer.autoClear = false;
        renderer.sortObjects = false;
        renderer.generateMipmaps = false;

        return renderer;

    }

    //create stats to monitor performance, for development, the detailed introduce about stats: https://github.com/mrdoob/stats.js

    function createStats () {

        var stats = new Stats();
        stats.showPanel( 1 );
        stats.dom.style.position = "absolute";

        return stats;

    }

    // The Sphere object is the earth object (without spineline visual system)

    function createSphere ( controller ) {

        // create EarthSurfaceShader object when initialized

        var earthSurfaceShader = new EarthSurfaceShader( controller );

        var shaderMaterial = new THREE.ShaderMaterial( {

            uniforms: earthSurfaceShader.uniforms,
            vertexShader: earthSurfaceShader.vertexShader,
            fragmentShader: earthSurfaceShader.fragmentShader

        } );

        var sphere = new THREE.Mesh( new THREE.SphereGeometry( 100, 40, 40 ), shaderMaterial );
        sphere.doubleSided = false;
        sphere.rotation.x = Math.PI;
        sphere.rotation.y = -Math.PI / 2;
        sphere.rotation.z = Math.PI;

        sphere.name = "sphere";

        // hold the pointer for EarthSurfaceShader, the controller will use this pointer to hold the pointer of the EarthSurfaceShader

        sphere.earthSurfaceShader = earthSurfaceShader;

        return sphere;

    }

    function createHalo ( controller ) {

        var radius = 100;
        var geometry = new THREE.SphereBufferGeometry( radius, 32, 32 );

        var haloShader = new HaloShader( controller );
        var shaderMaterial = new THREE.ShaderMaterial( {

            uniforms: haloShader.uniforms,
            vertexShader: haloShader.vertexShader,
            fragmentShader: haloShader.fragmentShader,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            transparent: true

        } );

        var mesh = new THREE.Mesh( geometry, shaderMaterial );
        mesh.scale.set( 1.2, 1.2, 1.2 );

        mesh.haloShader = haloShader;

        return mesh;

    }

    /**
     * The SplineSystem contains the mesh of spine lines and the moving object on the globe.
     * The mesh will be created each time the clicked country changes.
     */

    function createSplineSystem ( controller ) {

        var geometries = createGeometries( controller );

        var splineOutline = createSplineOutline( geometries.linesGeo );
        var pSystem = createParticleSystem( geometries.particlesGeo, geometries.movingPoints );

        splineOutline.add( pSystem );

        return splineOutline;

    }

    function createGeometries ( controller ) {

        var inputData = controller.globalData;
        controller.relatedCountries = [];
        var selectedCountry = controller.selectedCountry;

        var linesGeo = new THREE.Geometry();
        var lineColors = [];

        var particlesGeo = new THREE.BufferGeometry();

        var movingPoints = [];

        var positions = [];
        var sizes = [];
        var customColors = [];

        for (var i in inputData) {

            var set = inputData[ i ];

            if ( ( controller.configure.control.inOnly && set.i !== CountryColorMap[ selectedCountry.colorCode ] ) ||
                ( controller.configure.control.outOnly && set.e !== CountryColorMap[ selectedCountry.colorCode ] ) ) {

                continue;

            }

            if ( set.i === CountryColorMap[ selectedCountry.colorCode ] ||
                set.e === CountryColorMap[ selectedCountry.colorCode ] ) {

                var lineColor;

                if ( set.e === CountryColorMap[ selectedCountry.colorCode ] ) {

                    if ( Continent.names.indexOf( set.i.toUpperCase() ) !== -1 ) {

                        var continentCountries = Continent[ set.i.toUpperCase() ].countries;

                        for ( var j = 0; j < continentCountries.length; j++ ) {

                            var countryCode = continentCountries[ j ];

                            if ( CountryData[ countryCode ] !== undefined ) {

								controller.relatedCountries.push(CountryData[continentCountries[j]]);

                            }

                        }

                    } else {

						controller.relatedCountries.push( CountryData[ set.i ] );

                    }

					if ( set.outColor === undefined ) {

						lineColor = new THREE.Color( controller.configure.color.out );

					} else {

						lineColor = new THREE.Color( set.outColor );

					}
					console.log('line color========>', lineColor)

                } else {

                    controller.relatedCountries.push( CountryData[ set.e ] );

                    if ( set.inColor === undefined ) {

                        lineColor = new THREE.Color( controller.configure.color.in );

                    } else {

                        lineColor = new THREE.Color( set.inColor );

                    }

                }

                var lastColor;

                for ( var s in set.lineGeometry.vertices ) {

                    lineColors.push( lineColor );
                    lastColor = lineColor;

                }

                linesGeo.merge( set.lineGeometry );

                var particleColor = lastColor.clone();
                var points = set.lineGeometry.vertices;
                var particleCount = Math.floor( set.v / 8000 / set.lineGeometry.vertices.length ) + 1;
                particleCount = Utils.constrain( particleCount, 1, 100 );
                var particleSize = set.lineGeometry.size * controller.container.clientHeight / 750;

                for ( s = 0; s < particleCount; s++ ) {

                    var desiredIndex = s / particleCount * points.length;

                    var rIndex = Utils.constrain( Math.floor( desiredIndex ), 0, points.length - 1 );
                    var point = points[ rIndex ];
                    var particle = point.clone();
                    particle.moveIndex = rIndex;
                    particle.nextIndex = rIndex + 1;

                    if ( particle.nextIndex >= points.length ) {

                        particle.nextIndex = 0;

                    }

                    particle.lerpN = 0;
                    particle.path = points;

                    movingPoints.push( particle );

                    particle.size = particleSize;

                    positions.push( particle.x );
                    positions.push( particle.y );
                    positions.push( particle.z );

                    sizes.push( particleSize );

                    customColors.push( particleColor.r );
                    customColors.push( particleColor.g );
                    customColors.push( particleColor.b );

                }

            }

        }

        linesGeo.colors = lineColors;

        particlesGeo.addAttribute( "position", new THREE.Float32BufferAttribute( positions, 3 ) );
        particlesGeo.addAttribute( "size", new THREE.Float32BufferAttribute( sizes, 1 ) );
        particlesGeo.addAttribute( "customColor", new THREE.Float32BufferAttribute( customColors, 3 ) );

        particlesGeo.attributes.position.needsUpdate = true;

        return {

            linesGeo: linesGeo,
            particlesGeo: particlesGeo,
            movingPoints: movingPoints

        }

    }

    function createSplineOutline ( linesGeo ) {

        var splineOutline = new THREE.Line( linesGeo, new THREE.LineBasicMaterial( {

            color: 0xffffff,
            opacity: 1.0,
            blending: THREE.AdditiveBlending,
            transparent: true,
            depthWrite: false,
            vertexColors: true,
            linewidth: 1

        } ) );

        splineOutline.renderDepth = false;

        return splineOutline;

    }

    function createParticleSystem ( particlesGeo, movingPoints ) {

        var movingSpriteShader = new MovingSpriteShader();

        var shaderMaterial = new THREE.ShaderMaterial( {

            uniforms: movingSpriteShader.uniforms,
            vertexShader: movingSpriteShader.vertexShader,
            fragmentShader: movingSpriteShader.fragmentShader,

            blending: THREE.AdditiveBlending,
            depthTest: true,
            depthWrite: false,
            transparent: true

        } );

        var pSystem = new THREE.Points( particlesGeo, shaderMaterial );

        pSystem.dynamic = true;

        pSystem.movingPoints = movingPoints;


        pSystem.update = function () {

            for ( var i in this.movingPoints ) {

                var particle = this.movingPoints[ i ];

                var path = particle.path;

                particle.lerpN += 0.05;

                if (particle.lerpN > 1) {

                    particle.lerpN = 0;
                    particle.moveIndex = particle.nextIndex;
                    particle.nextIndex++;

                    if (particle.nextIndex >= path.length) {

                        particle.moveIndex = 0;
                        particle.nextIndex = 1;

                    }

                }

                var currentPoint = path[ particle.moveIndex ];
                var nextPoint = path[ particle.nextIndex ];

                particle.copy( currentPoint );
                if ( nextPoint !== undefined && particle !== undefined ) {

                    particle.lerp( nextPoint, particle.lerpN );

                }

                this.geometry.attributes.position.array[ 3 * i ] = particle.x;
                this.geometry.attributes.position.array[ 3 * i + 1 ] = particle.y;
                this.geometry.attributes.position.array[ 3 * i + 2 ] = particle.z;

            }

            this.geometry.attributes.position.needsUpdate = true;

        };

        return pSystem;
    }

    return {

        createScene: createScene,

        createCamera: createCamera,

        createLights: createLights,

        createRenderer: createRenderer,

        createStats: createStats,

        createSphere: createSphere,

        createHalo: createHalo,

        createSplineSystem: createSplineSystem

    }

}() );

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handlers handle the update of VisSystem ( The system will be updated when clicked country changed ).
 */

function VisSystemHandler ( controller ) {

    function update () {

        // first remove the old object from rotating ( contains splines and moving sprites )

        controller.rotating.remove( controller.visualizationMesh );

        // create a new visualization mesh

        controller.visualizationMesh = new THREE.Object3D();
        var lines = ObjectUtils.createSplineSystem( controller );
        controller.visualizationMesh.add( lines );

        // add the new visualization mesh to rotating

        controller.rotating.add( controller.visualizationMesh );

    }

    return {

        update: update

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handlers handle the switch of the clicked country.
 */

function SwitchCountryHandler ( controller ) {

    var pickedCallBack = null;

    function execute( pickColorIndex ) {

        executeSwitch( pickColorIndex );
        executeCallback();

    }

    function executeSwitch ( pickColorIndex ) {

        // first change the selectedCountry

        controller.selectedCountry = CountryData[ CountryColorMap[ pickColorIndex ] ];

        // then create a new visSystem

        controller.visSystemHandler.update();

        // change the highlight country on the earth surface

        controller.surfaceHandler.highlightCountry( pickColorIndex );

        // at last rotate the earth

        controller.rotationHandler.rotateToTargetCountry();

    }

    function executeCallback () {

        if ( pickedCallBack !== null ) {

            // protected clone, return new object for user

            var selectedCountry = Utils.transformCountryData( controller.selectedCountry );

            var relatedCountries = [];

            for ( var i in controller.relatedCountries ) {

                relatedCountries.push(
                    Utils.transformCountryData( controller.relatedCountries[ i ] )
                );

            }

            pickedCallBack( selectedCountry, relatedCountries );

        }

    }

    function switchFromAPI ( ISOAbbr, direction ) {

        // using the snapshot, so the function just change the controller.configure for a short time

        var snapshot = {};

        if ( direction === "in" || direction === "out" ) {

            snapshot.inOnly = controller.configure.control.inOnly;
            snapshot.outOnly = controller.configure.control.outOnly;

            if ( direction === "in" ) {

                controller.configure.control.inOnly = true;
                controller.configure.control.outOnly = false;

            } else {

                controller.configure.control.inOnly = false;
                controller.configure.control.outOnly = true;

            }

        }

        if ( CountryData[ ISOAbbr ] !== undefined ) {

            executeSwitch( CountryData[ ISOAbbr ].colorCode );

        }

        // restore the controller.configure

        if ( direction === "in" || direction === "out" ) {

            controller.configure.control.inOnly = snapshot.inOnly;
            controller.configure.control.outOnly = snapshot.outOnly;

        }

    }

    return {

        executeSwitch: execute,

        switchFromAPI: switchFromAPI,

        setCountryPickCallBack: function ( callBack ) {

            pickedCallBack = callBack;

        }

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handlers handle resize of the window event.
 */

function ResizeHandler ( controller ) {

    function resizeScene () {

        controller.camera.aspect = controller.container.clientWidth / controller.container.clientHeight;
        controller.camera.updateProjectionMatrix();
        controller.renderer.setSize( controller.container.clientWidth, controller.container.clientHeight );
        controller.visSystemHandler.update();

    }

    return {

        resizeScene: resizeScene

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This Manager manage all mouse event for the scene.
 * This Manager will be created when InitHandler's init() function is called.
 */

function SceneEventManager () {

    var mouseX = 0, mouseY = 0, pmouseX = 0, pmouseY = 0;
    var pressX = 0, pressY = 0;

    var controller;

    // the mouse and raycaster is used to judge whether the mouse is clicked on the globe

    var mouse = new THREE.Vector2();
    var raycaster = new THREE.Raycaster();

    function onDocumentMouseMove ( event ) {

        pmouseX = mouseX;
        pmouseY = mouseY;

        mouseX = event.clientX - controller.container.clientWidth * 0.5 - Utils.getElementViewLeft( controller.container );
        mouseY = event.clientY - controller.container.clientHeight * 0.5 - Utils.getElementViewTop( controller.container );

        // if it is in a dragging state, let the RotationHandler to handlers the rotation of the globe

        if ( controller.rotationHandler.isDragging() ) {

            controller.rotationHandler.addRotateVY( ( mouseX - pmouseX ) / 2 * Math.PI / 180 * 0.3 );
            controller.rotationHandler.addRotateVX( ( mouseY - pmouseY ) / 2 * Math.PI / 180 * 0.3 );

        }

    }

    function onDocumentMouseDown ( event ) {

        if ( event.target.className.indexOf( 'noMapDrag' ) !== -1 ) {

            return;

        }

        // set the state to the dragging state

        controller.rotationHandler.setDragging( true );
        pressX = mouseX;
        pressY = mouseY;
        controller.rotationHandler.clearRotateTargetX();

    }

    function onDocumentMouseUp ( event ) {

        // When mouse up, the notify the RotatingHandler to set drag false

        controller.rotationHandler.setDragging( false );

    }

    function onMouseWheel ( event ) {

        var delta = 0;

        // calculate the mouse wheel delta in IE or Opera

        if ( event.wheelDelta ) {

            delta = event.wheelDelta / 120;

        }

        //	calculate the mouse wheel delta in firefox

        else if ( event.detail ) {

            delta = -event.detail / 3;

        }

        if ( delta ) {

            // use the WheelHandler to handle actual mouse wheel event, if we would like to do something

            controller.wheelHandler.handleMWheel(delta);

        }

        event.returnValue = false;

    }

    function onResize ( event ) {

        // use the ResizeHandler to handle the actual window resize event, if we would like to do something

        controller.resizeHandler.resizeScene();

    }

    function onClick ( event ) {

        //	if the click is drag, do nothing

        if ( Math.abs( pressX - mouseX ) > 3 || Math.abs( pressY - mouseY ) > 3 ) {

            return;

        }

        // let the mouse and raycaster to judge whether the click is on the earth, if not do noting

        mouse.x = ( ( event.clientX - Utils.getElementViewLeft( controller.container ) ) / controller.container.clientWidth ) * 2 - 1;
        mouse.y = -( ( event.clientY - Utils.getElementViewTop( controller.container ) ) / controller.container.clientHeight ) * 2 + 1;

        raycaster.setFromCamera( mouse, controller.camera );

        var intersects = raycaster.intersectObjects( controller.scene.children, true );

        // intersects.length === 0 means that the mouse click is not on the globe

        if ( intersects.length === 0 ) {

            return;

        }

        // to get the color of clicked area on the globe's surface

        var pickColorIndex = controller.surfaceHandler.getPickColor( mouseX, mouseY );

        // for debug

        // console.log( pickColorIndex );

        /**
         * on a specific condition will let the SwitchCountryHandler to execute switch
         * condition:
         * 1. the picked color is actually a color to represent a country
         * 2. the picked color is not 0 (0 represents ocean)
         * 3. if the user want only the mentioned countries can be clicked, it will judge whether the picked country is mentioned
         */

        if ( CountryColorMap[ pickColorIndex ] !== undefined &&
             pickColorIndex !== 0 &&
             ( ( controller.configure.control.disableUnmentioned &&
                 controller.mentionedCountryCodes.indexOf( pickColorIndex ) !== -1 ) ||
                 !controller.configure.control.disableUnmentioned ) ) {

            controller.switchCountryHandler.executeSwitch( pickColorIndex );

        }

    }

    function onTouchStart ( event ) {

		if ( event.target.className.indexOf( 'noMapDrag' ) !== -1 ) {

			return;

		}

		// set the state to the dragging state

		controller.rotationHandler.setDragging( true );
		pressX = mouseX;
		pressY = mouseY;
		controller.rotationHandler.clearRotateTargetX();

    }

    function onTouchEnd ( event ) {

		// When touch up, the notify the RotatingHandler to set drag false

		controller.rotationHandler.setDragging( false );

    }

    function onTouchMove ( event ) {

		pmouseX = mouseX;
		pmouseY = mouseY;

		// get clientX and clientY from "event.touches[0]", different with onmousemove event

		mouseX = event.touches[0].clientX - controller.container.clientWidth * 0.5 - Utils.getElementViewLeft( controller.container );
		mouseY = event.touches[0].clientY - controller.container.clientHeight * 0.5 - Utils.getElementViewTop( controller.container );

		// if it is in a dragging state, let the RotationHandler to handlers the rotation of the globe

		if ( controller.rotationHandler.isDragging() ) {

			controller.rotationHandler.addRotateVY( ( mouseX - pmouseX ) / 2 * Math.PI / 180 * 0.3 );
			controller.rotationHandler.addRotateVX( ( mouseY - pmouseY ) / 2 * Math.PI / 180 * 0.3 );

		}

    }

    /**
     * bind all event handlers to the dom of the scene, the resize event will be bind to window.
     * This function will be called when InitHandler's init() function be called
     */

    function bindEvent ( controllerPara ) {

        controller = controllerPara;

        controller.renderer.domElement.addEventListener( 'mousemove', onDocumentMouseMove, true );
        controller.renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, true );
        controller.renderer.domElement.addEventListener( 'mouseup', onDocumentMouseUp, false );
        controller.renderer.domElement.addEventListener( 'click', onClick, true );
        controller.renderer.domElement.addEventListener( 'mousewheel', onMouseWheel, false );
        controller.renderer.domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, false );

		controller.renderer.domElement.ontouchstart = onTouchStart;
		controller.renderer.domElement.ontouchend = onTouchEnd;
		controller.renderer.domElement.ontouchmove = onTouchMove;

        window.addEventListener( 'resize', onResize, false );

    }

    return {

        bindEvent: bindEvent

    }

}

/**
 * @author mokuteno / https://github.com/manymeeting
 */

function AbstractDataProcessor () {

	this.successor = null;

}

AbstractDataProcessor.prototype.setSuccessor = function ( dp ) {

	this.successor = dp;

};

AbstractDataProcessor.prototype.process = function ( controller ) {

	if ( this.isMatched( controller ) ) {

		this.processDetail( controller );

	}

	if ( this.successor !== null ) {

		this.successor.process( controller );

	}

};

AbstractDataProcessor.prototype.processDetail = function ( controller ) {
};

AbstractDataProcessor.prototype.isMatched = function ( controller ) {

	return true;

};

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * Judge input data is an single data array or data group
 */

function DataTypeProcessor () {}

DataTypeProcessor.prototype = new AbstractDataProcessor();

DataTypeProcessor.prototype.constructor = DataTypeProcessor;

DataTypeProcessor.prototype.processDetail = function ( controller ) {

	var inputData = controller.inputData;
	controller.dataGroup = !Utils.isArray( inputData );

};

/**
 * @author mokuteno / https://github.com/manymeeting
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This data processor set a new fake data from user's input value, this fake data used for later geometry creation
 */

function TransformProcessor () {}

TransformProcessor.prototype = new AbstractDataProcessor();

TransformProcessor.prototype.constructor = TransformProcessor;

TransformProcessor.prototype.processDetail = function ( controller ) {

    if ( controller.dataGroup ) {

        controller.dataGroupHandler.createFakeData();

    } else {

		controller.singleDataHandler.createFakeData();

    }

};

/**
 * @author mokuteno / https://github.com/manymeeting
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This default data preprocessor is used to create mentionedCountries for controller.
 * The process() function will be called when InitHandler's init() function is called.
 */

function DefaultDataPreprocessor () {}

DefaultDataPreprocessor.prototype = new AbstractDataProcessor();

DefaultDataPreprocessor.prototype.constructor = DefaultDataPreprocessor;

DefaultDataPreprocessor.prototype.processDetail = function ( controller ) {

    if ( controller.dataGroup ) {

        controller.dataGroupHandler.createMentionedCountries();

    } else {

		controller.singleDataHandler.createMentionedCountries();

    }

};

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This object build the basic geometry to be used by creation spline geometry and pSystem geometry.
 * The build function will build for all input data
 * The buildDataVizGeometries will be executed when InitHandler's init() function is called
 */

function GeometryDataProcessor () {}

GeometryDataProcessor.prototype = new AbstractDataProcessor();

GeometryDataProcessor.prototype.constructor = GeometryDataProcessor;

GeometryDataProcessor.prototype.processDetail = function ( controller ) {

    if ( controller.dataGroup ) {

        controller.dataGroupHandler.createGeometry();

    } else {

        controller.singleDataHandler.createGeometry();

    }

};

/**
 * @author mokuteno / https://github.com/manymeeting
 */

/**
 * This data processor flattens input data so that even a small number can be properly displayed on the screen.
 */

function FlattenDataProcessor () {}

FlattenDataProcessor.prototype = new AbstractDataProcessor();

FlattenDataProcessor.prototype.constructor = FlattenDataProcessor;

FlattenDataProcessor.prototype.processDetail = function ( controller ) {

    if ( controller.dataGroup ) {

        controller.dataGroupHandler.flattenData();

    } else {

        controller.singleDataHandler.flattenData();

    }
    
};

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This dumper preprocessor is used to dump processed data into globe.
 */

function DumperProcessor () {}

DumperProcessor.prototype = new AbstractDataProcessor();

DumperProcessor.prototype.constructor = DumperProcessor;

DumperProcessor.prototype.processDetail = function ( controller ) {

	if ( controller.dataGroup ) {

		controller.dataGroupHandler.dumpData();

	} else {

		controller.singleDataHandler.dumpData();

	}

};

/**
 * @author syt123450 / https://github.com/syt123450
 */

var ProcessorManager = ( function () {

    function getProcessorChain () {

        // register data processors here

        var dataTypeProcessor = new DataTypeProcessor();
        var transformDataProcessor = new TransformProcessor();
        var defaultDataPreprocessor = new DefaultDataPreprocessor();
        var dumpProcessor = new DumperProcessor();

        // a processor used to create basic geometry for splines and moving sprites

        var geometryDataProcessor = new GeometryDataProcessor();

        // a processor used to flatten country data

        var flattenDataProcessor = new FlattenDataProcessor();

        // set order of processors

		dataTypeProcessor.setSuccessor(defaultDataPreprocessor);
        defaultDataPreprocessor.setSuccessor( transformDataProcessor );
        transformDataProcessor.setSuccessor( flattenDataProcessor );
        flattenDataProcessor.setSuccessor( geometryDataProcessor );
        geometryDataProcessor.setSuccessor( dumpProcessor );

        return dataTypeProcessor;
    }

    return {

        getProcessorChain: getProcessorChain

    }

}() );

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handlers handle initialization task for controller.
 */

function InitHandler ( controller ) {

    function init () {

        initScene();
        animate();

    }

    // this function is used to initialize the data, object and status of the controller

    function initScene () {

        // init all scene objects

        initObjects();

        // init user's input data

        initData();
        
        // bind events to the dom

        ( new SceneEventManager() ).bindEvent( controller );

        // now the creation is finished, append the 3D object to the dom

        controller.container.appendChild( controller.renderer.domElement );

        // init object and action related to selected country

        initSelected();

        // set finishing initialization sign

        controller.initialized = true;

    }

    // the animate function will be execute periodically

    function animate () {

        if ( controller.configure.control.stats ) {

            controller.stats.update();

        }

        controller.rotationHandler.update();

        controller.renderer.clear();
        controller.renderer.render( controller.scene, controller.camera );

        // update the moving sprite on the spline

        controller.rotating.traverse(

            function ( mesh ) {

                if ( mesh.update !== undefined ) {

                    mesh.update();

                }

            }

        );

        requestAnimationFrame( animate );

    }

    // create objects and add them to the scene

    function initObjects () {

        // create all the objects for the scene

        controller.renderer = ObjectUtils.createRenderer( controller.container );
        controller.camera = ObjectUtils.createCamera( controller.container );
        controller.lights = ObjectUtils.createLights();

        controller.sphere = ObjectUtils.createSphere( controller );
        controller.halo = ObjectUtils.createHalo( controller );
        controller.haloShader = controller.halo.haloShader;
        controller.earthSurfaceShader = controller.sphere.earthSurfaceShader;

        controller.scene = ObjectUtils.createScene( controller );
        controller.rotating = new THREE.Object3D();

        // the stats object will only be created when "isStatsEnabled" in the configure is set to be true

        if ( controller.configure.control.stats ) {

            controller.stats = ObjectUtils.createStats( controller.container );
            controller.container.appendChild( controller.stats.dom );

        }

        // add objects to the scene

        for ( var i in controller.lights ) {

            controller.scene.add( controller.lights[ i ] );

        }

        controller.scene.add( controller.rotating );
        controller.rotating.add( controller.sphere );
        controller.scene.add( controller.camera );

        // halo must be add after adding the rotating object

        if ( controller.configure.control.halo === true ) {

            controller.scene.add( controller.halo );

        }

    }

    // pre-process the data

    function initData () {

        // set the first data processor on the "chain"

        controller.dataProcessor = ProcessorManager.getProcessorChain();

        // pre-processor the user's input data

        controller.dataProcessor.process(controller);
    }

    // init object and action related to selected country

    function initSelected () {

        // defined the initial country

        controller.selectedCountry = CountryData[ controller.configure.control.initCountry ];

        // create the visSystem based on the previous creation and settings

        controller.visSystemHandler.update();

        // rotate to the init country and highlight the init country

        controller.rotationHandler.rotateToTargetCountry();
        controller.surfaceHandler.highlightCountry( controller.selectedCountry[ "colorCode" ] );
    }

    return {

        init: init

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This is a Configure object, the controller will create a "configure object" and hold the object.
 * When user using the API to do some configuration, they are actually setting the configure object.
 * When IO Globe is running, other component in controller will read this configure object through controller
 */

function Configure () {

    this.control =  {

        // use to control whether show stats panel

        stats: false,

        // used to control whether to let unrelated countries ( unmentioned countries in input data ) unclickable

        disableUnmentioned: false,

        // use to control whether to lighten mentioned countries ( mentioned in input data )

        lightenMentioned: false,

        // control whether only show "in" lines for clicked country

        inOnly: false,

        // control whether only show "out" lines for clicked country

        outOnly: false,

        // setting for the initial country when globe is initialized

        initCountry: "CN",

        // control whether show halo

        halo: true

    };

    this.color = {

        // used to set the surface color

        surface: 0xffffff,

        // used to set the color of selected country

        selected: null,

        // use to set the "in" spline line color

        in: 0x154492,

        // use to set the "out" spline line color

        out: 0xdd380c,

        // use to set halo color

        halo: 0xffffff,

        // use to set the background color of the scene

        background: null

    };

    this.brightness = {

        // use to set the ocean brightness ( range is 0 - 1 )

        ocean: 0.5,

        // use to set the mentioned countries brightness ( range is 0 - 1 ), only the attribute isLightenMentioned == true, this attribute will take effect

        mentioned: 0.5,

        // use to set brightness of countries related to selected country

        related: 0.5

    };


    return this;

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handlers handle all configure related task for controller.
 */

function ConfigureHandler ( controller ) {

    function configureJSON ( configure ) {

        // the configure process in nature is set the controller.configure with a given JSON

        var attribute;

        if ( configure instanceof Object ) {

            if ( configure.control !== undefined ) {

                for ( attribute in configure.control ) {

                    controller.configure.control[ attribute ] = configure.control[ attribute ];

                }

            }

            if ( configure.color !== undefined ) {

                for ( attribute in configure.color ) {

                    controller.configure.color[ attribute ] = configure.color[ attribute ];

                }

            }

            if ( configure.brightness !== undefined ) {

                for ( attribute in configure.brightness ) {

                    controller.configure.brightness[ attribute ] = configure.brightness[ attribute ];

                }

            }

            if (configure.resource !== undefined ) {

                for ( attribute in configure.resource ) {

                    controller.configure.resource[ attribute ] = configure.resource[ attribute ];

                }

            }

        }

    }

    function configureStyle ( styleName ) {

        // get style from StyleFactory with a given style name

        var style = StyleFactory.getStyle( styleName );

        configureJSON( style );

    }

    function configureConstructor () {

        configureJSON( controller.constructorConfigure );

    }

    return {

        configureJSON: configureJSON,

        configureStyle: configureStyle,

        configureConstructor: configureConstructor

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This is a JSON loader which can load JSON data into the controller
 */

function JSONLoader () {

    function load ( controller, data ) {

        if ( data === undefined || data === null ) {

            data = [];

        }

        controller.inputData = JSON.parse( JSON.stringify( data ) );

    }

    return {

        load: load

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This is the asynchronous loader, which can be used to load data asynchronous from a given url
 */

function AsyncLoader () {

    this.callback = null;

    var asyncLoader = this;

    function load( controller, url, callback ) {

        asyncLoader.callback = callback;

        var request = new XMLHttpRequest();
        request.open( 'GET', url, true );

        request.onreadystatechange = function () {

            if ( request.readyState === 4 && request.status === 200 ) {

                var data = JSON.parse( request.responseText );

                controller.inputData = JSON.parse( JSON.stringify( data ) );

                asyncLoader.callback( data );

            }

        };

        request.send( null );

    }

    return {

        load: load

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This is a live loader, which can be used to load data from a url and refresh the data in the controller
 */

// still in develop

function LiveLoader () {

    this.callback = null;
    this.milliseconds = 5000;

    this.url = null;

    this.intervalHandle = null;
    this.controller = null;

    this.controller = null;

    this.asyncLoader = new AsyncLoader();

    var liveLoader = this;

    function load ( controller, url, callback, milliseconds ) {

        liveLoader.controller = controller;
        liveLoader.url = url;
        liveLoader.callback = callback;
        liveLoader.milliseconds = milliseconds;

        liveLoader.intervalHandle = setInterval( function () {

            loopCall();

        }, liveLoader.milliseconds );

    }

    function loopCall () {

        liveLoader.asyncLoader.load( liveLoader.controller, liveLoader.url, updateSystem );

        if ( liveLoader.callback !== null ) {

            liveLoader.callback();

        }

    }

    function updateSystem () {

        if ( liveLoader.controller.initialized === true ) {

            liveLoader.controller.dataProcessor.process();
            liveLoader.controller.visSystemHandler.update();
            liveLoader.controller.surfaceHandler.update();

        }

    }

    function stop () {

        window.clearInterval( liveLoader.intervalHandle );

    }

    return {

        load: load,

        stop: stop

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handlers handle all data load related task for controller.
 */

function DataHandler ( controller ) {

    // the dataHandler will initialize all loader's instance

    var jsonLoader = new JSONLoader();
    var liveLoader = new LiveLoader();
    var asyncLoader = new AsyncLoader();

    function loadJSON ( data ) {

        // jsonLoader is the proxy of loadJSON task

        jsonLoader.load( controller, data );

    }

    function loadAsync ( url, callback ) {

        // asyncLoader is the proxy of loadAsync task

        asyncLoader.load( controller, url, callback );

    }

    function liveLoad( url, callback, milliseconds ) {

        // liveLoader is the proxy of liveLoad task

        liveLoader.load( controller, url, callback, milliseconds );

    }

    // as liveLoader will load data periodically, this API is used to stop the liveLoader

    function stopLiveLoader () {

        liveLoader.stop();

    }

    return {

        loadJSON: loadJSON,

        loadAsync: loadAsync,

        liveLoad: liveLoad,

        stopLiveLoader: stopLiveLoader

    }

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

function HaloHandler ( controller ) {

    function create () {

        controller.halo = ObjectUtils.createHalo( controller );
        controller.haloShader = controller.halo.haloShader;
        controller.scene.add( controller.halo );

    }

    function remove () {

        controller.scene.remove( controller.halo );
        controller.halo =  null;

    }

    function update () {

        controller.haloShader.update();

    }

    return {

        create: create,

        remove: remove,

        update: update

    }

}

function DataGroupHandler ( controller ) {

	var mentionedCache = {};

	function createMentionedCountries () {

		var inputData = controller.inputData;
		var dataSetKeys = inputData.dataSetKeys;
		var initDataSet = inputData.initDataSet;

		for (var i = 0; i < dataSetKeys.length; i++) {

			var key = dataSetKeys[ i ];
			mentionedCache[ key ] = [];
			var data = inputData[ key ];

			for ( var j in data ) {

				var set = data[ j ];

				if ( CountryData[ set.e ] === undefined ) {

					continue;

				}

				var importerName = set.i.toUpperCase();

				if ( Continent.names.indexOf( importerName ) !== -1 ) {

					addMentionedContinent( set, key );

					continue;

				}

				if ( CountryData[ set.i ] === undefined ) {

					continue;

				}

				addMentionedCountryPair( set, key );

			}


		}

		controller.mentionedCountryCodes = mentionedCache[ initDataSet ];

	}

	function addMentionedContinent( set, key ) {

		var exportCountryCode = CountryData[ set.e ].colorCode;

		if ( mentionedCache[key].indexOf( exportCountryCode ) === - 1 ) {

			mentionedCache[key].push( exportCountryCode );

		}

		var importerName = set.i.toUpperCase();

		var continentCountries = Continent[ importerName ].countries;

		for ( var i = 0; i < continentCountries.length; i++ ) {

			var tempImportCountry = continentCountries[ i ];
			var tempCountryData = CountryData[ tempImportCountry ];

			if ( tempCountryData === undefined ) {

				continue;

			}

			var tempImportCountryCode = tempCountryData.colorCode;

			if ( mentionedCache[key].indexOf( tempImportCountryCode ) === - 1 ) {

				mentionedCache[key].push( tempImportCountryCode );

			}

		}

	}

	function addMentionedCountryPair( set, key ) {

		var importCountryCode = CountryData[ set.i.toUpperCase() ].colorCode;
		var exportCountryCode = CountryData[ set.e.toUpperCase() ].colorCode;

		// add mentioned color to controller's mentionedCountryCodes ( an array to store the code )

		if ( mentionedCache[key].indexOf( importCountryCode ) === - 1 ) {

			mentionedCache[key].push( importCountryCode );

		}

		if ( mentionedCache[key].indexOf( exportCountryCode ) === - 1 ) {

			mentionedCache[key].push( exportCountryCode );

		}

	}

	function flattenData () {

		var minDataValue = 800000, maxDataValue = 5000000;

		var inputData = controller.inputData;
		var dataSetKeys = inputData.dataSetKeys;

		for ( var i = 0; i < dataSetKeys.length; i++ ) {

			var key = dataSetKeys[ i ];
			var data = inputData[key];

			Utils.flattenCountryData( data, controller.inputValueKey, minDataValue, maxDataValue );

		}

	}

	function createFakeData() {

		var inputData = controller.inputData;
		var dataSetKeys = inputData.dataSetKeys;

		for ( var i = 0; i < dataSetKeys.length; i++ ) {

			var key = dataSetKeys[ i ];
			var data = inputData[ key ];

			for ( var j in data ) {

				var set = data[ j ];
				set.fakeData = set.v;

			}

		}

		controller.inputValueKey = "fakeData";

	}

	function createGeometry () {

		var inputData = controller.inputData;
		var dataSetKeys = inputData.dataSetKeys;

		for ( var i = 0; i < dataSetKeys.length; i++ ) {

			var key = dataSetKeys[ i ];
			var data = inputData[key];

			var vec3_origin = new THREE.Vector3( 0, 0, 0 );

			if ( data === null ) {

				return;

			}

			for ( var s in data ) {

				var set = data[ s ];

				var importerName = set.i.toUpperCase();

				if ( Continent.names.indexOf( importerName ) !== -1 ) {

					makeContinentConnection( set );

					continue;

				}

				makeCountriesConnection( set, data, s );

			}

			function makeCountriesConnection( set, data, s ) {

				var exporterName = set.e.toUpperCase();
				var importerName = set.i.toUpperCase();

				if ( exporterName === "ZZ" || importerName === "ZZ" ) {

					console.group( "ZZ unknown country" );
					console.log( "ZZ country code detected for current ;countries this will not be print on the globe" );
					console.log( exporterName + ", " + importerName );
					console.groupEnd();

					delete data[ s ];

					return;

				}

				var exporter = CountryData[ exporterName ];
				var importer = CountryData[ importerName ];

				if ( exporter === null ) throw exporterName + " is not referenced as a country code! See the full list there : https://github.com/syt123450/giojs/blob/master/docs/en/Country_Code.md";
				if ( importer === null ) throw importerName + " is not referenced as a country code! See the full list there : https://github.com/syt123450/giojs/blob/master/docs/en/Country_Code.md";

				set.lineGeometry = makeConnectionLineGeometry( exporter, importer, set.fakeData );

			}

			function makeContinentConnection( dataSet ) {

				var exporterName = dataSet.e.toUpperCase();
				var importerName = dataSet.i.toUpperCase();

				var exporter = CountryData[ exporterName ];
				var importer = Continent[ importerName ];

				dataSet.lineGeometry = makeConnectionLineGeometry( exporter, importer, dataSet.fakeData );

			}

			function makeConnectionLineGeometry ( exporter, importer, value ) {

				var exporterCenter = exporter.center.clone();
				var distanceBetweenCountryCenter = exporterCenter.subVectors( exporterCenter, importer.center ).length();

				var start = exporter.center;
				var end = importer.center;

				var mid = start.clone().lerp( end, 0.5 );
				var midLength = mid.length();
				mid.normalize();
				mid.multiplyScalar( midLength + distanceBetweenCountryCenter * 0.7 );

				var normal = ( new THREE.Vector3() ).subVectors( start, end );
				normal.normalize();

				var distanceHalf = distanceBetweenCountryCenter * 0.5;

				var startAnchor = start;

				var midStartAnchor = mid.clone().add( normal.clone().multiplyScalar( distanceHalf ) );
				var midEndAnchor = mid.clone().add( normal.clone().multiplyScalar( -distanceHalf ) );

				var endAnchor = end;

				var splineCurveA = new THREE.CubicBezierCurve3( start, startAnchor, midStartAnchor, mid );
				var splineCurveB = new THREE.CubicBezierCurve3( mid, midEndAnchor, endAnchor, end );

				var vertexCountDesired = Math.floor( distanceBetweenCountryCenter * 0.02 + 6 ) * 2;

				var points = splineCurveA.getPoints( vertexCountDesired );

				points = points.splice( 0, points.length - 1 );
				points = points.concat( splineCurveB.getPoints( vertexCountDesired ) );
				points.push( vec3_origin );

				var val = value * 0.0003;

				var size = ( 10 + Math.sqrt( val ) );


				size = Utils.constrain( size, 0.1, 60 );

				var curveGeometry = new THREE.Geometry();

				for ( var i = 0; i < points.length; i++ ) {

					curveGeometry.vertices.push( points[ i ] );

				}

				curveGeometry.size = size;

				return curveGeometry;

			}

		}


	}

	function dumpData () {

		var initDataSet = controller.inputData.initDataSet;
		controller.globalData = controller.inputData[ initDataSet ];

	}

	function switchDataSet ( dataSetName ) {

		var dataSetKeys = controller.inputData.dataSetKeys;

		if ( dataSetKeys.indexOf( dataSetName ) !== - 1 ) {

			controller.mentionedCountryCodes = mentionedCache[ dataSetName ];
			controller.globalData = controller.inputData[ dataSetName ];
			controller.visSystemHandler.update();
			controller.surfaceHandler.update();

		}

	}

	return {

		createMentionedCountries: createMentionedCountries,

		flattenData: flattenData,

		createFakeData: createFakeData,

		createGeometry: createGeometry,

		dumpData: dumpData,

		switchDataSet: switchDataSet

	}

}

function SingleDataHandler(controller) {

	function createMentionedCountries() {

		var inputData = controller.inputData;

		for ( var i in inputData ) {

			var dataSet = inputData[ i ];

			if (CountryData[ dataSet.e ] === undefined) {
				continue;
			}

			var importerName = dataSet.i.toUpperCase();

			if ( Continent.names.indexOf( importerName ) !== -1 ) {

				addMentionedContinent( dataSet );

				continue;

			}

			if (CountryData[ dataSet.i ] === undefined) {
				continue;
			}

			addMentionedCountryPair( dataSet );

		}


	}

	function addMentionedContinent( dataSet ) {

		var exportCountryCode = CountryData[ dataSet.e ].colorCode;

		if ( controller.mentionedCountryCodes.indexOf( exportCountryCode ) === - 1 ) {

			controller.mentionedCountryCodes.push( exportCountryCode );

		}

		var importerName = dataSet.i.toUpperCase();

		var continentCountries = Continent[ importerName ].countries;

		for ( var i = 0; i < continentCountries.length; i++ ) {

			var tempImportCountry = continentCountries[ i ];
			var tempCountryData = CountryData[ tempImportCountry ];

			if ( tempCountryData === undefined ) {

				continue;

			}

			var tempImportCountryCode = tempCountryData.colorCode;

			if ( controller.mentionedCountryCodes.indexOf( tempImportCountryCode ) === - 1 ) {

				controller.mentionedCountryCodes.push( tempImportCountryCode );

			}

		}

	}

	function addMentionedCountryPair(dataSet) {

		var importCountryCode = CountryData[ dataSet.i ].colorCode;
		var exportCountryCode = CountryData[ dataSet.e ].colorCode;

		// add mentioned color to controller's mentionedCountryCodes ( an array to store the code )

		if ( controller.mentionedCountryCodes.indexOf( importCountryCode ) === - 1 ) {

			controller.mentionedCountryCodes.push( importCountryCode );

		}

		if ( controller.mentionedCountryCodes.indexOf( exportCountryCode ) === - 1 ) {

			controller.mentionedCountryCodes.push( exportCountryCode );

		}

	}

	function flattenData() {

		var minDataValue = 800000, maxDataValue = 5000000;

		var inputData = controller.inputData;

		Utils.flattenCountryData(inputData, controller.inputValueKey, minDataValue, maxDataValue);

	}

	function createFakeData() {

		var inputData = controller.inputData;

		for ( var i in inputData ) {

			var set = inputData[ i ];
			set.fakeData = set.v;

		}

		// update input value key

		controller.inputValueKey = "fakeData";

	}

	function createGeometry() {

		var vec3_origin = new THREE.Vector3( 0, 0, 0 );

		if ( controller.inputData === null ) {

			return;

		}

		for ( var s in controller.inputData ) {

			var set = controller.inputData[ s ];

			var importerName = set.i.toUpperCase();

			if ( Continent.names.indexOf( importerName ) !== -1 ) {

				makeContinentConnection( set );

				continue;

			}

			makeCountriesConnection( set );

		}

		function makeCountriesConnection( dataSet ) {

			var exporterName = dataSet.e.toUpperCase();
			var importerName = dataSet.i.toUpperCase();

			if ( exporterName === "ZZ" || importerName === "ZZ" ) {

				console.group( "ZZ unknown country" );
				console.log( "ZZ country code detected for current ;countries this will not be print on the globe" );
				console.log( exporterName + ", " + importerName );
				console.groupEnd();

				delete controller.inputData[ s ];

				return;

			}

			var exporter = CountryData[ exporterName ];
			var importer = CountryData[ importerName ];

			if ( exporter === null ) throw exporterName + " is not referenced as a country code! See the full list there : https://github.com/syt123450/giojs/blob/master/docs/en/Country_Code.md";
			if ( importer === null ) throw importerName + " is not referenced as a country code! See the full list there : https://github.com/syt123450/giojs/blob/master/docs/en/Country_Code.md";

			dataSet.lineGeometry = makeConnectionLineGeometry( exporter, importer, dataSet.fakeData );

		}

		function makeContinentConnection( dataSet ) {

			var exporterName = dataSet.e.toUpperCase();
			var importerName = dataSet.i.toUpperCase();

			var exporter = CountryData[ exporterName ];
			var importer = Continent[ importerName ];

			dataSet.lineGeometry = makeConnectionLineGeometry( exporter, importer, dataSet.fakeData );

		}

		function makeConnectionLineGeometry ( exporter, importer, value ) {

			var exporterCenter = exporter.center.clone();
			var distanceBetweenCountryCenter = exporterCenter.subVectors( exporterCenter, importer.center ).length();

			var start = exporter.center;
			var end = importer.center;

			var mid = start.clone().lerp( end, 0.5 );
			var midLength = mid.length();
			mid.normalize();
			mid.multiplyScalar( midLength + distanceBetweenCountryCenter * 0.7 );

			var normal = ( new THREE.Vector3() ).subVectors( start, end );
			normal.normalize();

			var distanceHalf = distanceBetweenCountryCenter * 0.5;

			var startAnchor = start;

			var midStartAnchor = mid.clone().add( normal.clone().multiplyScalar( distanceHalf ) );
			var midEndAnchor = mid.clone().add( normal.clone().multiplyScalar( -distanceHalf ) );

			var endAnchor = end;

			var splineCurveA = new THREE.CubicBezierCurve3( start, startAnchor, midStartAnchor, mid );
			var splineCurveB = new THREE.CubicBezierCurve3( mid, midEndAnchor, endAnchor, end );

			var vertexCountDesired = Math.floor( distanceBetweenCountryCenter * 0.02 + 6 ) * 2;

			var points = splineCurveA.getPoints( vertexCountDesired );

			points = points.splice( 0, points.length - 1 );
			points = points.concat( splineCurveB.getPoints( vertexCountDesired ) );
			points.push( vec3_origin );

			var val = value * 0.0003;

			var size = ( 10 + Math.sqrt( val ) );


			size = Utils.constrain( size, 0.1, 60 );

			var curveGeometry = new THREE.Geometry();

			for ( var i = 0; i < points.length; i++ ) {

				curveGeometry.vertices.push( points[ i ] );

			}

			curveGeometry.size = size;

			return curveGeometry;

		}

	}

	function dumpData() {
		controller.globalData = controller.inputData;
	}

	return {

		createMentionedCountries: createMentionedCountries,

		flattenData: flattenData,

		createFakeData: createFakeData,

		createGeometry: createGeometry,

		dumpData: dumpData

	}

}

/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This is the controller object when IO Globe is running,
 * When developer want to create a new IO globe, they first need to create a controller instance and then init this controller.
 * How to create and use this controller is introduce in API document and shown in demos.
 */

function Controller ( container, configureObject ) {

    // constructor parameters

    this.container = container;
    this.constructorConfigure = configureObject;

    // configure object

    this.configure = new Configure();

    // handlers used to handle tasks in controller

    this.dataGroupHandler = new DataGroupHandler( this );
    this.singleDataHandler = new SingleDataHandler( this );
    this.configureHandler = new ConfigureHandler( this );
    this.rotationHandler = new RotationHandler( this );
    this.surfaceHandler = new SurfaceHandler( this );
    this.wheelHandler = new WheelHandler( this );
    this.visSystemHandler = new VisSystemHandler( this );
    this.switchCountryHandler = new SwitchCountryHandler( this );
    this.resizeHandler = new ResizeHandler( this );
    this.initHandler = new InitHandler( this );
    this.dataHandler = new DataHandler( this );
    this.haloHandler = new HaloHandler( this );
    
    // define a data processor to pre-processor the data, will be initialized in InitHandler

    this.dataProcessor = null;

    // configure "configure object" through constructor configure

    this.configureHandler.configureConstructor();

    // important components, they will be initialized when initHandler is called

    this.visualizationMesh = null;
    this.renderer = null;
    this.camera = null;
    this.lights = null;

    this.scene = null;
    this.rotating = null;
    this.sphere = null;
    this.earthSurfaceShader = null;
    this.halo = null;
    this.haloShader = null;

	this.inputData = [];
	this.globalData = [];

    this.dataGroup = false;
    // this.inputValueKey = "v";

    this.mentionedCountryCodes = [];
    this.relatedCountries = [];

    this.selectedCountry = null;

    this.stats = null;

    this.initialized = false;

    // hold controller itself

    var controller = this;

    // API is defined in return object

    return {

        init: function () {

            controller.initHandler.init();

            return this;

        },

        addData: function ( data ) {

            controller.dataHandler.loadJSON( data );

            if ( controller.initialized === true ) {

                controller.dataProcessor.process( controller );
                controller.visSystemHandler.update();
                controller.surfaceHandler.update();

            }

            return this;

        },

        clearData: function () {

            controller.inputData = [];
            controller.globalData = [];

            if ( controller.initialized === true ) {

                controller.visSystemHandler.update();
                controller.surfaceHandler.update();

            }

            return this;

        },

        addDataAsync: function ( url, callback ) {

            controller.dataHandler.loadAsync( url, callback );

            return this;

        },

        addLiveData: function ( url, callback, milliseconds ) {

            controller.dataHandler.liveLoad( url, callback, milliseconds );

            return this;

        },

        setSurfaceColor: function ( color ) {

            controller.configure.color.surface = color;

            if ( controller.initialized === true ) {

                controller.surfaceHandler.update();

            }

            return this;

        },

        setSelectedColor: function ( color ) {

            controller.configure.color.selected = color;

            if ( controller.initialized === true ) {

                controller.surfaceHandler.update();

            }

            return this;

        },

        getScene: function () {

            return controller.scene;

        },

        setInitCountry: function ( ISOAbbr ) {

            controller.configure.control.initCountry = ISOAbbr;

            return this;

        },

        disableUnmentioned: function ( flag ) {

            controller.configure.control.disableUnmentioned = flag;

            return this;

        },

        lightenMentioned: function ( flag ) {

            controller.configure.control.lightenMentioned = flag;

            if ( controller.initialized === true ) {

                controller.surfaceHandler.update();

            }

            return this;

        },

        setExportColor: function ( color ) {

            controller.configure.color.out = color;

            if ( controller.initialized === true ) {

                controller.visSystemHandler.update();

            }

            return this;

        },

        setImportColor: function ( color ) {

            controller.configure.color.in = color;

            if ( controller.initialized === true ) {

                controller.visSystemHandler.update();

            }

            return this;

        },

        getSelectedCountry: function () {

            return controller.selectedCountry;

        },

        getRelatedCountries: function () {

            return controller.relatedCountries;

        },

        onCountryPicked: function ( callBack ) {

            controller.switchCountryHandler.setCountryPickCallBack( callBack );

        },

        enableStats: function () {

            if ( controller.configure.control.stats === false && controller.initialized ) {

                if ( controller.stats === null ) {

                    controller.stats = ObjectUtils.createStats(controller.container);

                }

                controller.container.appendChild( controller.stats.dom );

            }

            controller.configure.control.stats = true;

            return this;

        },

        disableStats: function () {

            if ( controller.configure.control.stats === true && controller.stats !== null ) {

                controller.container.removeChild( controller.stats.dom );

            }

            controller.configure.control.stats = false;

            return this;

        },

        getStatsObject: function () {

            return controller.stats;

        },

        getConfig: function () {

            return controller.configure;
        },

        adjustRelatedBrightness: function ( brightness ) {

            controller.configure.brightness.related = brightness;

            if ( controller.initialized === true ) {

                controller.surfaceHandler.update();

            }

            return this;

        },

        adjustOceanBrightness: function ( brightness ) {

            controller.configure.brightness.ocean = brightness;
			
            if ( controller.initialized === true ) {

                controller.surfaceHandler.update();

            }

            return this;

        },

        adjustMentionedBrightness: function ( brightness ) {

            controller.configure.brightness.mentioned = brightness;

            if ( controller.initialized === true ) {

                controller.surfaceHandler.update();

            }

            return this;

        },

        setStyle: function ( style ) {

            controller.configureHandler.configureStyle( style );

            return this;

        },

        configure: function ( configure ) {

            controller.configureHandler.configureJSON( configure );

            if ( controller.initialized === true ) {

                controller.surfaceHandler.update();
                controller.visSystemHandler.update();

            }

            return this;

        },

        switchCountry: function ( ISOAbbr, direction ) {

            controller.switchCountryHandler.switchFromAPI( ISOAbbr, direction );

            return this;

        },

        showInOnly: function ( flag ) {

            if ( flag === true ) {

                controller.configure.control.inOnly = true;
                controller.configure.control.outOnly = false;

            } else {

                controller.configure.control.inOnly = false;
            }

            if ( controller.initialized === true ) {

                controller.visSystemHandler.update();

            }

            return this;

        },

        showOutOnly: function ( flag ) {

            if ( flag === true ) {

                controller.configure.control.outOnly = true;
                controller.configure.control.inOnly = false;

            } else {

                controller.configure.control.outOnly = false;

            }

            if ( controller.initialized === true ) {

                controller.visSystemHandler.update();

            }

            return this;

        },

        closeLiveLoader: function () {

            controller.dataHandler.stopLiveLoader();

            return this;

        },

        // to be used to force update the whole system after init(), may not be used by user

        update: function () {

            if ( controller.initialized === true ) {

                controller.dataProcessor.process( controller );
                controller.visSystemHandler.update();
                controller.surfaceHandler.update();

            }

            return this;

        },

        setHaloColor: function ( color ) {

            controller.configure.color.halo = color;

            if ( controller.initialized === true ) {

                controller.haloHandler.update();

            }

            return this;

        },

        removeHalo: function () {

            controller.configure.control.halo = false;


            if ( controller.initialized === true ) {

                controller.haloHandler.remove();

            }

            return this;

        },

        addHalo: function ( color ) {

            controller.configure.control.halo = true;

            if ( color !== undefined ) {

                controller.configure.color.halo = color;

            }

            if ( controller.initialized === true ) {

                if ( controller.halo !== null ) {

                    controller.haloHandler.update();

                } else {

                    controller.haloHandler.create();

                }

            }

            return this;

        },

        setBackgroundColor: function ( color ) {

            controller.configure.color.background = color;

            if ( controller.initialized === true ) {

                controller.scene.background = new THREE.Color( color );

            }

            return this;

        },

        resizeUpdate: function () {

            controller.resizeHandler.resizeScene();

            return this;

        },

        switchDataSet: function ( dataSetName ) {

            if ( controller.dataGroup ) {

                controller.dataGroupHandler.switchDataSet( dataSetName );

            }

            return this;

        }

    }

}

exports.Controller = Controller;

return exports;

}({}));