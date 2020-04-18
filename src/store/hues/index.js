import _ from 'lodash';

export default {
  namespaced: true,

  state: {
    hues: [{
      "id": 1,
      "name": "Air Force blue",
      "hex": "#5D8AA8",
      "r": 93,
      "b": 168,
      "g": 138
    }, {
      "id": 2,
      "name": "Alice blue",
      "hex": "#F0F8FF",
      "r": 240,
      "b": 255,
      "g": 248
    }, {
      "id": 3,
      "name": "Alizarin crimson",
      "hex": "#E32636",
      "r": 227,
      "b": 54,
      "g": 38
    }, {
      "id": 4,
      "name": "Almond",
      "hex": "#EFDECD",
      "r": 239,
      "b": 205,
      "g": 222
    }, {
      "id": 5,
      "name": "Amaranth",
      "hex": "#E52B50",
      "r": 229,
      "b": 80,
      "g": 43
    }, {
      "id": 6,
      "name": "Amber",
      "hex": "#FFBF00",
      "r": 255,
      "b": 0,
      "g": 191
    }, {
      "id": 7,
      "name": "American rose",
      "hex": "#FF033E",
      "r": 255,
      "b": 62,
      "g": 3
    }, {
      "id": 8,
      "name": "Amethyst",
      "hex": "#9966CC",
      "r": 153,
      "b": 204,
      "g": 102
    }, {
      "id": 9,
      "name": "Android Green",
      "hex": "#A4C639",
      "r": 164,
      "b": 57,
      "g": 198
    }, {
      "id": 10,
      "name": "Anti-flash white",
      "hex": "#F2F3F4",
      "r": 242,
      "b": 244,
      "g": 243
    }, {
      "id": 11,
      "name": "Antique brass",
      "hex": "#CD9575",
      "r": 205,
      "b": 117,
      "g": 149
    }, {
      "id": 12,
      "name": "Antique fuchsia",
      "hex": "#915C83",
      "r": 145,
      "b": 131,
      "g": 92
    }, {
      "id": 13,
      "name": "Antique white",
      "hex": "#FAEBD7",
      "r": 250,
      "b": 215,
      "g": 235
    }, {
      "id": 14,
      "name": "Ao",
      "hex": "#008000",
      "r": 0,
      "b": 0,
      "g": 128
    }, {
      "id": 15,
      "name": "Apple green",
      "hex": "#8DB600",
      "r": 141,
      "b": 0,
      "g": 182
    }, {
      "id": 16,
      "name": "Apricot",
      "hex": "#FBCEB1",
      "r": 251,
      "b": 177,
      "g": 206
    }, {
      "id": 17,
      "name": "Aqua",
      "hex": "#00FFFF",
      "r": 0,
      "b": 255,
      "g": 255
    }, {
      "id": 18,
      "name": "Aquamarine",
      "hex": "#7FFFD4",
      "r": 127,
      "b": 212,
      "g": 255
    }, {
      "id": 19,
      "name": "Army green",
      "hex": "#4B5320",
      "r": 75,
      "b": 32,
      "g": 83
    }, {
      "id": 20,
      "name": "Arylide yellow",
      "hex": "#E9D66B",
      "r": 233,
      "b": 107,
      "g": 214
    }, {
      "id": 21,
      "name": "Ash grey",
      "hex": "#B2BEB5",
      "r": 178,
      "b": 181,
      "g": 190
    }, {
      "id": 22,
      "name": "Asparagus",
      "hex": "#87A96B",
      "r": 135,
      "b": 107,
      "g": 169
    }, {
      "id": 23,
      "name": "Atomic tangerine",
      "hex": "#FF9966",
      "r": 255,
      "b": 102,
      "g": 153
    }, {
      "id": 24,
      "name": "Auburn",
      "hex": "#A52A2A",
      "r": 165,
      "b": 42,
      "g": 42
    }, {
      "id": 25,
      "name": "Aureolin",
      "hex": "#FDEE00",
      "r": 253,
      "b": 0,
      "g": 238
    }, {
      "id": 26,
      "name": "AuroMetalSaurus",
      "hex": "#6E7F80",
      "r": 110,
      "b": 128,
      "g": 127
    }, {
      "id": 27,
      "name": "Awesome",
      "hex": "#FF2052",
      "r": 255,
      "b": 82,
      "g": 32
    }, {
      "id": 28,
      "name": "Azure",
      "hex": "#007FFF",
      "r": 0,
      "b": 255,
      "g": 127
    }, {
      "id": 29,
      "name": "Azure mist/web",
      "hex": "#F0FFFF",
      "r": 240,
      "b": 255,
      "g": 255
    }, {
      "id": 30,
      "name": "Baby blue",
      "hex": "#89CFF0",
      "r": 137,
      "b": 240,
      "g": 207
    }, {
      "id": 31,
      "name": "Baby blue eyes",
      "hex": "#A1CAF1",
      "r": 161,
      "b": 241,
      "g": 202
    }, {
      "id": 32,
      "name": "Baby pink",
      "hex": "#F4C2C2",
      "r": 244,
      "b": 194,
      "g": 194
    }, {
      "id": 33,
      "name": "Ball Blue",
      "hex": "#21ABCD",
      "r": 33,
      "b": 205,
      "g": 171
    }, {
      "id": 34,
      "name": "Banana Mania",
      "hex": "#FAE7B5",
      "r": 250,
      "b": 181,
      "g": 231
    }, {
      "id": 35,
      "name": "Banana yellow",
      "hex": "#FFE135",
      "r": 255,
      "b": 53,
      "g": 225
    }, {
      "id": 36,
      "name": "Battleship grey",
      "hex": "#848482",
      "r": 132,
      "b": 130,
      "g": 132
    }, {
      "id": 37,
      "name": "Bazaar",
      "hex": "#98777B",
      "r": 152,
      "b": 123,
      "g": 119
    }, {
      "id": 38,
      "name": "Beau blue",
      "hex": "#BCD4E6",
      "r": 188,
      "b": 230,
      "g": 212
    }, {
      "id": 39,
      "name": "Beaver",
      "hex": "#9F8170",
      "r": 159,
      "b": 112,
      "g": 129
    }, {
      "id": 40,
      "name": "Beige",
      "hex": "#F5F5DC",
      "r": 245,
      "b": 220,
      "g": 245
    }, {
      "id": 41,
      "name": "Bisque",
      "hex": "#FFE4C4",
      "r": 255,
      "b": 196,
      "g": 228
    }, {
      "id": 42,
      "name": "Bistre",
      "hex": "#3D2B1F",
      "r": 61,
      "b": 31,
      "g": 43
    }, {
      "id": 43,
      "name": "Bittersweet",
      "hex": "#FE6F5E",
      "r": 254,
      "b": 94,
      "g": 111
    }, {
      "id": 44,
      "name": "Black",
      "hex": "#000000",
      "r": 0,
      "b": 0,
      "g": 0
    }, {
      "id": 45,
      "name": "Blanched Almond",
      "hex": "#FFEBCD",
      "r": 255,
      "b": 205,
      "g": 235
    }, {
      "id": 46,
      "name": "Bleu de France",
      "hex": "#318CE7",
      "r": 49,
      "b": 231,
      "g": 140
    }, {
      "id": 47,
      "name": "Blizzard Blue",
      "hex": "#ACE5EE",
      "r": 172,
      "b": 238,
      "g": 229
    }, {
      "id": 48,
      "name": "Blond",
      "hex": "#FAF0BE",
      "r": 250,
      "b": 190,
      "g": 240
    }, {
      "id": 49,
      "name": "Blue",
      "hex": "#0000FF",
      "r": 0,
      "b": 255,
      "g": 0
    }, {
      "id": 50,
      "name": "Blue Bell",
      "hex": "#A2A2D0",
      "r": 162,
      "b": 208,
      "g": 162
    }, {
      "id": 51,
      "name": "Blue Gray",
      "hex": "#6699CC",
      "r": 102,
      "b": 204,
      "g": 153
    }, {
      "id": 52,
      "name": "Blue green",
      "hex": "#0D98BA",
      "r": 13,
      "b": 186,
      "g": 152
    }, {
      "id": 53,
      "name": "Blue purple",
      "hex": "#8A2BE2",
      "r": 138,
      "b": 226,
      "g": 43
    }, {
      "id": 54,
      "name": "Blue violet",
      "hex": "#8A2BE2",
      "r": 138,
      "b": 226,
      "g": 43
    }, {
      "id": 55,
      "name": "Blush",
      "hex": "#DE5D83",
      "r": 222,
      "b": 131,
      "g": 93
    }, {
      "id": 56,
      "name": "Bole",
      "hex": "#79443B",
      "r": 121,
      "b": 59,
      "g": 68
    }, {
      "id": 57,
      "name": "Bondi blue",
      "hex": "#0095B6",
      "r": 0,
      "b": 182,
      "g": 149
    }, {
      "id": 58,
      "name": "Bone",
      "hex": "#E3DAC9",
      "r": 227,
      "b": 201,
      "g": 218
    }, {
      "id": 59,
      "name": "Boston University Red",
      "hex": "#CC0000",
      "r": 204,
      "b": 0,
      "g": 0
    }, {
      "id": 60,
      "name": "Bottle green",
      "hex": "#006A4E",
      "r": 0,
      "b": 78,
      "g": 106
    }, {
      "id": 61,
      "name": "Boysenberry",
      "hex": "#873260",
      "r": 135,
      "b": 96,
      "g": 50
    }, {
      "id": 62,
      "name": "Brandeis blue",
      "hex": "#0070FF",
      "r": 0,
      "b": 255,
      "g": 112
    }, {
      "id": 63,
      "name": "Brass",
      "hex": "#B5A642",
      "r": 181,
      "b": 66,
      "g": 166
    }, {
      "id": 64,
      "name": "Brick red",
      "hex": "#CB4154",
      "r": 203,
      "b": 84,
      "g": 65
    }, {
      "id": 65,
      "name": "Bright cerulean",
      "hex": "#1DACD6",
      "r": 29,
      "b": 214,
      "g": 172
    }, {
      "id": 66,
      "name": "Bright green",
      "hex": "#66FF00",
      "r": 102,
      "b": 0,
      "g": 255
    }, {
      "id": 67,
      "name": "Bright lavender",
      "hex": "#BF94E4",
      "r": 191,
      "b": 228,
      "g": 148
    }, {
      "id": 68,
      "name": "Bright maroon",
      "hex": "#C32148",
      "r": 195,
      "b": 72,
      "g": 33
    }, {
      "id": 69,
      "name": "Bright pink",
      "hex": "#FF007F",
      "r": 255,
      "b": 127,
      "g": 0
    }, {
      "id": 70,
      "name": "Bright turquoise",
      "hex": "#08E8DE",
      "r": 8,
      "b": 222,
      "g": 232
    }, {
      "id": 71,
      "name": "Bright ube",
      "hex": "#D19FE8",
      "r": 209,
      "b": 232,
      "g": 159
    }, {
      "id": 72,
      "name": "Brilliant lavender",
      "hex": "#F4BBFF",
      "r": 244,
      "b": 255,
      "g": 187
    }, {
      "id": 73,
      "name": "Brilliant rose",
      "hex": "#FF55A3",
      "r": 255,
      "b": 163,
      "g": 85
    }, {
      "id": 74,
      "name": "Brink pink",
      "hex": "#FB607F",
      "r": 251,
      "b": 127,
      "g": 96
    }, {
      "id": 75,
      "name": "British racing green",
      "hex": "#004225",
      "r": 0,
      "b": 37,
      "g": 66
    }, {
      "id": 76,
      "name": "Bronze",
      "hex": "#CD7F32",
      "r": 205,
      "b": 50,
      "g": 127
    }, {
      "id": 77,
      "name": "Brown",
      "hex": "#A52A2A",
      "r": 165,
      "b": 42,
      "g": 42
    }, {
      "id": 78,
      "name": "Bubble gum",
      "hex": "#FFC1CC",
      "r": 255,
      "b": 204,
      "g": 193
    }, {
      "id": 79,
      "name": "Bubbles",
      "hex": "#E7FEFF",
      "r": 231,
      "b": 255,
      "g": 254
    }, {
      "id": 80,
      "name": "Buff",
      "hex": "#F0DC82",
      "r": 240,
      "b": 130,
      "g": 220
    }, {
      "id": 81,
      "name": "Bulgarian rose",
      "hex": "#480607",
      "r": 72,
      "b": 7,
      "g": 6
    }, {
      "id": 82,
      "name": "Burgundy",
      "hex": "#800020",
      "r": 128,
      "b": 32,
      "g": 0
    }, {
      "id": 83,
      "name": "Burlywood",
      "hex": "#DEB887",
      "r": 222,
      "b": 135,
      "g": 184
    }, {
      "id": 84,
      "name": "Burnt orange",
      "hex": "#CC5500",
      "r": 204,
      "b": 0,
      "g": 85
    }, {
      "id": 85,
      "name": "Burnt sienna",
      "hex": "#E97451",
      "r": 233,
      "b": 81,
      "g": 116
    }, {
      "id": 86,
      "name": "Burnt umber",
      "hex": "#8A3324",
      "r": 138,
      "b": 36,
      "g": 51
    }, {
      "id": 87,
      "name": "Byzantine",
      "hex": "#BD33A4",
      "r": 189,
      "b": 164,
      "g": 51
    }, {
      "id": 88,
      "name": "Byzantium",
      "hex": "#702963",
      "r": 112,
      "b": 99,
      "g": 41
    }, {
      "id": 89,
      "name": "CG Blue",
      "hex": "#007AA5",
      "r": 0,
      "b": 165,
      "g": 122
    }, {
      "id": 90,
      "name": "CG Red",
      "hex": "#E03C31",
      "r": 224,
      "b": 49,
      "g": 60
    }, {
      "id": 91,
      "name": "Cadet",
      "hex": "#536872",
      "r": 83,
      "b": 114,
      "g": 104
    }, {
      "id": 92,
      "name": "Cadet blue",
      "hex": "#5F9EA0",
      "r": 95,
      "b": 160,
      "g": 158
    }, {
      "id": 93,
      "name": "Cadet grey",
      "hex": "#91A3B0",
      "r": 145,
      "b": 176,
      "g": 163
    }, {
      "id": 94,
      "name": "Cadmium green",
      "hex": "#006B3C",
      "r": 0,
      "b": 60,
      "g": 107
    }, {
      "id": 95,
      "name": "Cadmium orange",
      "hex": "#ED872D",
      "r": 237,
      "b": 45,
      "g": 135
    }, {
      "id": 96,
      "name": "Cadmium red",
      "hex": "#E30022",
      "r": 227,
      "b": 34,
      "g": 0
    }, {
      "id": 97,
      "name": "Cadmium yellow",
      "hex": "#FFF600",
      "r": 255,
      "b": 0,
      "g": 246
    }, {
      "id": 98,
      "name": "Caf� au lait",
      "hex": "#A67B5B",
      "r": 166,
      "b": 91,
      "g": 123
    }, {
      "id": 99,
      "name": "Caf� noir",
      "hex": "#4B3621",
      "r": 75,
      "b": 33,
      "g": 54
    }, {
      "id": 100,
      "name": "Cal Poly Pomona green",
      "hex": "#1E4D2B",
      "r": 30,
      "b": 43,
      "g": 77
    }, {
      "id": 101,
      "name": "Cambridge Blue",
      "hex": "#A3C1AD",
      "r": 163,
      "b": 173,
      "g": 193
    }, {
      "id": 102,
      "name": "Camel",
      "hex": "#C19A6B",
      "r": 193,
      "b": 107,
      "g": 154
    }, {
      "id": 103,
      "name": "Camouflage green",
      "hex": "#78866B",
      "r": 120,
      "b": 107,
      "g": 134
    }, {
      "id": 104,
      "name": "Canary",
      "hex": "#FFFF99",
      "r": 255,
      "b": 153,
      "g": 255
    }, {
      "id": 105,
      "name": "Canary yellow",
      "hex": "#FFEF00",
      "r": 255,
      "b": 0,
      "g": 239
    }, {
      "id": 106,
      "name": "Candy apple red",
      "hex": "#FF0800",
      "r": 255,
      "b": 0,
      "g": 8
    }, {
      "id": 107,
      "name": "Candy pink",
      "hex": "#E4717A",
      "r": 228,
      "b": 122,
      "g": 113
    }, {
      "id": 108,
      "name": "Capri",
      "hex": "#00BFFF",
      "r": 0,
      "b": 255,
      "g": 191
    }, {
      "id": 109,
      "name": "Caput mortuum",
      "hex": "#592720",
      "r": 89,
      "b": 32,
      "g": 39
    }, {
      "id": 110,
      "name": "Cardinal",
      "hex": "#C41E3A",
      "r": 196,
      "b": 58,
      "g": 30
    }, {
      "id": 111,
      "name": "Caribbean green",
      "hex": "#00CC99",
      "r": 0,
      "b": 153,
      "g": 204
    }, {
      "id": 112,
      "name": "Carmine",
      "hex": "#FF0040",
      "r": 255,
      "b": 64,
      "g": 0
    }, {
      "id": 113,
      "name": "Carmine pink",
      "hex": "#EB4C42",
      "r": 235,
      "b": 66,
      "g": 76
    }, {
      "id": 114,
      "name": "Carmine red",
      "hex": "#FF0038",
      "r": 255,
      "b": 56,
      "g": 0
    }, {
      "id": 115,
      "name": "Carnation pink",
      "hex": "#FFA6C9",
      "r": 255,
      "b": 201,
      "g": 166
    }, {
      "id": 116,
      "name": "Carnelian",
      "hex": "#B31B1B",
      "r": 179,
      "b": 27,
      "g": 27
    }, {
      "id": 117,
      "name": "Carolina blue",
      "hex": "#99BADD",
      "r": 153,
      "b": 221,
      "g": 186
    }, {
      "id": 118,
      "name": "Carrot orange",
      "hex": "#ED9121",
      "r": 237,
      "b": 33,
      "g": 145
    }, {
      "id": 119,
      "name": "Celadon",
      "hex": "#ACE1AF",
      "r": 172,
      "b": 175,
      "g": 225
    }, {
      "id": 120,
      "name": "Celeste",
      "hex": "#B2FFFF",
      "r": 178,
      "b": 255,
      "g": 255
    }, {
      "id": 121,
      "name": "Celestial blue",
      "hex": "#4997D0",
      "r": 73,
      "b": 208,
      "g": 151
    }, {
      "id": 122,
      "name": "Cerise",
      "hex": "#DE3163",
      "r": 222,
      "b": 99,
      "g": 49
    }, {
      "id": 123,
      "name": "Cerise pink",
      "hex": "#EC3B83",
      "r": 236,
      "b": 131,
      "g": 59
    }, {
      "id": 124,
      "name": "Cerulean",
      "hex": "#007BA7",
      "r": 0,
      "b": 167,
      "g": 123
    }, {
      "id": 125,
      "name": "Cerulean blue",
      "hex": "#2A52BE",
      "r": 42,
      "b": 190,
      "g": 82
    }, {
      "id": 126,
      "name": "Chamoisee",
      "hex": "#A0785A",
      "r": 160,
      "b": 90,
      "g": 120
    }, {
      "id": 127,
      "name": "Champagne",
      "hex": "#FAD6A5",
      "r": 250,
      "b": 165,
      "g": 214
    }, {
      "id": 128,
      "name": "Charcoal",
      "hex": "#36454F",
      "r": 54,
      "b": 79,
      "g": 69
    }, {
      "id": 129,
      "name": "Chartreuse",
      "hex": "#7FFF00",
      "r": 127,
      "b": 0,
      "g": 255
    }, {
      "id": 130,
      "name": "Cherry",
      "hex": "#DE3163",
      "r": 222,
      "b": 99,
      "g": 49
    }, {
      "id": 131,
      "name": "Cherry blossom pink",
      "hex": "#FFB7C5",
      "r": 255,
      "b": 197,
      "g": 183
    }, {
      "id": 132,
      "name": "Chestnut",
      "hex": "#CD5C5C",
      "r": 205,
      "b": 92,
      "g": 92
    }, {
      "id": 133,
      "name": "Chocolate",
      "hex": "#D2691E",
      "r": 210,
      "b": 30,
      "g": 105
    }, {
      "id": 134,
      "name": "Chrome yellow",
      "hex": "#FFA700",
      "r": 255,
      "b": 0,
      "g": 167
    }, {
      "id": 135,
      "name": "Cinereous",
      "hex": "#98817B",
      "r": 152,
      "b": 123,
      "g": 129
    }, {
      "id": 136,
      "name": "Cinnabar",
      "hex": "#E34234",
      "r": 227,
      "b": 52,
      "g": 66
    }, {
      "id": 137,
      "name": "Cinnamon",
      "hex": "#D2691E",
      "r": 210,
      "b": 30,
      "g": 105
    }, {
      "id": 138,
      "name": "Citrine",
      "hex": "#E4D00A",
      "r": 228,
      "b": 10,
      "g": 208
    }, {
      "id": 139,
      "name": "Classic rose",
      "hex": "#FBCCE7",
      "r": 251,
      "b": 231,
      "g": 204
    }, {
      "id": 140,
      "name": "Cobalt",
      "hex": "#0047AB",
      "r": 0,
      "b": 171,
      "g": 71
    }, {
      "id": 141,
      "name": "Cocoa brown",
      "hex": "#D2691E",
      "r": 210,
      "b": 30,
      "g": 105
    }, {
      "id": 142,
      "name": "Coffee",
      "hex": "#6F4E37",
      "r": 111,
      "b": 55,
      "g": 78
    }, {
      "id": 143,
      "name": "Columbia blue",
      "hex": "#9BDDFF",
      "r": 155,
      "b": 255,
      "g": 221
    }, {
      "id": 144,
      "name": "Cool black",
      "hex": "#002E63",
      "r": 0,
      "b": 99,
      "g": 46
    }, {
      "id": 145,
      "name": "Cool grey",
      "hex": "#8C92AC",
      "r": 140,
      "b": 172,
      "g": 146
    }, {
      "id": 146,
      "name": "Copper",
      "hex": "#B87333",
      "r": 184,
      "b": 51,
      "g": 115
    }, {
      "id": 147,
      "name": "Copper rose",
      "hex": "#996666",
      "r": 153,
      "b": 102,
      "g": 102
    }, {
      "id": 148,
      "name": "Coquelicot",
      "hex": "#FF3800",
      "r": 255,
      "b": 0,
      "g": 56
    }, {
      "id": 149,
      "name": "Coral",
      "hex": "#FF7F50",
      "r": 255,
      "b": 80,
      "g": 127
    }, {
      "id": 150,
      "name": "Coral pink",
      "hex": "#F88379",
      "r": 248,
      "b": 121,
      "g": 131
    }, {
      "id": 151,
      "name": "Coral red",
      "hex": "#FF4040",
      "r": 255,
      "b": 64,
      "g": 64
    }, {
      "id": 152,
      "name": "Cordovan",
      "hex": "#893F45",
      "r": 137,
      "b": 69,
      "g": 63
    }, {
      "id": 153,
      "name": "Corn",
      "hex": "#FBEC5D",
      "r": 251,
      "b": 93,
      "g": 236
    }, {
      "id": 154,
      "name": "Cornell Red",
      "hex": "#B31B1B",
      "r": 179,
      "b": 27,
      "g": 27
    }, {
      "id": 155,
      "name": "Cornflower",
      "hex": "#9ACEEB",
      "r": 154,
      "b": 235,
      "g": 206
    }, {
      "id": 156,
      "name": "Cornflower blue",
      "hex": "#6495ED",
      "r": 100,
      "b": 237,
      "g": 149
    }, {
      "id": 157,
      "name": "Cornsilk",
      "hex": "#FFF8DC",
      "r": 255,
      "b": 220,
      "g": 248
    }, {
      "id": 158,
      "name": "Cosmic latte",
      "hex": "#FFF8E7",
      "r": 255,
      "b": 231,
      "g": 248
    }, {
      "id": 159,
      "name": "Cotton candy",
      "hex": "#FFBCD9",
      "r": 255,
      "b": 217,
      "g": 188
    }, {
      "id": 160,
      "name": "Cream",
      "hex": "#FFFDD0",
      "r": 255,
      "b": 208,
      "g": 253
    }, {
      "id": 161,
      "name": "Crimson",
      "hex": "#DC143C",
      "r": 220,
      "b": 60,
      "g": 20
    }, {
      "id": 162,
      "name": "Crimson Red",
      "hex": "#990000",
      "r": 153,
      "b": 0,
      "g": 0
    }, {
      "id": 163,
      "name": "Crimson glory",
      "hex": "#BE0032",
      "r": 190,
      "b": 50,
      "g": 0
    }, {
      "id": 164,
      "name": "Cyan",
      "hex": "#00FFFF",
      "r": 0,
      "b": 255,
      "g": 255
    }, {
      "id": 165,
      "name": "Daffodil",
      "hex": "#FFFF31",
      "r": 255,
      "b": 49,
      "g": 255
    }, {
      "id": 166,
      "name": "Dandelion",
      "hex": "#F0E130",
      "r": 240,
      "b": 48,
      "g": 225
    }, {
      "id": 167,
      "name": "Dark blue",
      "hex": "#00008B",
      "r": 0,
      "b": 139,
      "g": 0
    }, {
      "id": 168,
      "name": "Dark brown",
      "hex": "#654321",
      "r": 101,
      "b": 33,
      "g": 67
    }, {
      "id": 169,
      "name": "Dark byzantium",
      "hex": "#5D3954",
      "r": 93,
      "b": 84,
      "g": 57
    }, {
      "id": 170,
      "name": "Dark candy apple red",
      "hex": "#A40000",
      "r": 164,
      "b": 0,
      "g": 0
    }, {
      "id": 171,
      "name": "Dark cerulean",
      "hex": "#08457E",
      "r": 8,
      "b": 126,
      "g": 69
    }, {
      "id": 172,
      "name": "Dark chestnut",
      "hex": "#986960",
      "r": 152,
      "b": 96,
      "g": 105
    }, {
      "id": 173,
      "name": "Dark coral",
      "hex": "#CD5B45",
      "r": 205,
      "b": 69,
      "g": 91
    }, {
      "id": 174,
      "name": "Dark cyan",
      "hex": "#008B8B",
      "r": 0,
      "b": 139,
      "g": 139
    }, {
      "id": 175,
      "name": "Dark electric blue",
      "hex": "#536878",
      "r": 83,
      "b": 120,
      "g": 104
    }, {
      "id": 176,
      "name": "Dark goldenrod",
      "hex": "#B8860B",
      "r": 184,
      "b": 11,
      "g": 134
    }, {
      "id": 177,
      "name": "Dark gray",
      "hex": "#A9A9A9",
      "r": 169,
      "b": 169,
      "g": 169
    }, {
      "id": 178,
      "name": "Dark green",
      "hex": "#013220",
      "r": 1,
      "b": 32,
      "g": 50
    }, {
      "id": 179,
      "name": "Dark jungle green",
      "hex": "#1A2421",
      "r": 26,
      "b": 33,
      "g": 36
    }, {
      "id": 180,
      "name": "Dark khaki",
      "hex": "#BDB76B",
      "r": 189,
      "b": 107,
      "g": 183
    }, {
      "id": 181,
      "name": "Dark lava",
      "hex": "#483C32",
      "r": 72,
      "b": 50,
      "g": 60
    }, {
      "id": 182,
      "name": "Dark lavender",
      "hex": "#734F96",
      "r": 115,
      "b": 150,
      "g": 79
    }, {
      "id": 183,
      "name": "Dark magenta",
      "hex": "#8B008B",
      "r": 139,
      "b": 139,
      "g": 0
    }, {
      "id": 184,
      "name": "Dark midnight blue",
      "hex": "#003366",
      "r": 0,
      "b": 102,
      "g": 51
    }, {
      "id": 185,
      "name": "Dark olive green",
      "hex": "#556B2F",
      "r": 85,
      "b": 47,
      "g": 107
    }, {
      "id": 186,
      "name": "Dark orange",
      "hex": "#FF8C00",
      "r": 255,
      "b": 0,
      "g": 140
    }, {
      "id": 187,
      "name": "Dark orchid",
      "hex": "#9932CC",
      "r": 153,
      "b": 204,
      "g": 50
    }, {
      "id": 188,
      "name": "Dark pastel blue",
      "hex": "#779ECB",
      "r": 119,
      "b": 203,
      "g": 158
    }, {
      "id": 189,
      "name": "Dark pastel green",
      "hex": "#03C03C",
      "r": 3,
      "b": 60,
      "g": 192
    }, {
      "id": 190,
      "name": "Dark pastel purple",
      "hex": "#966FD6",
      "r": 150,
      "b": 214,
      "g": 111
    }, {
      "id": 191,
      "name": "Dark pastel red",
      "hex": "#C23B22",
      "r": 194,
      "b": 34,
      "g": 59
    }, {
      "id": 192,
      "name": "Dark pink",
      "hex": "#E75480",
      "r": 231,
      "b": 128,
      "g": 84
    }, {
      "id": 193,
      "name": "Dark powder blue",
      "hex": "#003399",
      "r": 0,
      "b": 153,
      "g": 51
    }, {
      "id": 194,
      "name": "Dark raspberry",
      "hex": "#872657",
      "r": 135,
      "b": 87,
      "g": 38
    }, {
      "id": 195,
      "name": "Dark red",
      "hex": "#8B0000",
      "r": 139,
      "b": 0,
      "g": 0
    }, {
      "id": 196,
      "name": "Dark salmon",
      "hex": "#E9967A",
      "r": 233,
      "b": 122,
      "g": 150
    }, {
      "id": 197,
      "name": "Dark scarlet",
      "hex": "#560319",
      "r": 86,
      "b": 25,
      "g": 3
    }, {
      "id": 198,
      "name": "Dark sea green",
      "hex": "#8FBC8F",
      "r": 143,
      "b": 143,
      "g": 188
    }, {
      "id": 199,
      "name": "Dark sienna",
      "hex": "#3C1414",
      "r": 60,
      "b": 20,
      "g": 20
    }, {
      "id": 200,
      "name": "Dark slate blue",
      "hex": "#483D8B",
      "r": 72,
      "b": 139,
      "g": 61
    }, {
      "id": 201,
      "name": "Dark slate gray",
      "hex": "#2F4F4F",
      "r": 47,
      "b": 79,
      "g": 79
    }, {
      "id": 202,
      "name": "Dark spring green",
      "hex": "#177245",
      "r": 23,
      "b": 69,
      "g": 114
    }, {
      "id": 203,
      "name": "Dark tan",
      "hex": "#918151",
      "r": 145,
      "b": 81,
      "g": 129
    }, {
      "id": 204,
      "name": "Dark tangerine",
      "hex": "#FFA812",
      "r": 255,
      "b": 18,
      "g": 168
    }, {
      "id": 205,
      "name": "Dark taupe",
      "hex": "#483C32",
      "r": 72,
      "b": 50,
      "g": 60
    }, {
      "id": 206,
      "name": "Dark terra cotta",
      "hex": "#CC4E5C",
      "r": 204,
      "b": 92,
      "g": 78
    }, {
      "id": 207,
      "name": "Dark turquoise",
      "hex": "#00CED1",
      "r": 0,
      "b": 209,
      "g": 206
    }, {
      "id": 208,
      "name": "Dark violet",
      "hex": "#9400D3",
      "r": 148,
      "b": 211,
      "g": 0
    }, {
      "id": 209,
      "name": "Dartmouth green",
      "hex": "#00693E",
      "r": 0,
      "b": 62,
      "g": 105
    }, {
      "id": 210,
      "name": "Davy grey",
      "hex": "#555555",
      "r": 85,
      "b": 85,
      "g": 85
    }, {
      "id": 211,
      "name": "Debian red",
      "hex": "#D70A53",
      "r": 215,
      "b": 83,
      "g": 10
    }, {
      "id": 212,
      "name": "Deep carmine",
      "hex": "#A9203E",
      "r": 169,
      "b": 62,
      "g": 32
    }, {
      "id": 213,
      "name": "Deep carmine pink",
      "hex": "#EF3038",
      "r": 239,
      "b": 56,
      "g": 48
    }, {
      "id": 214,
      "name": "Deep carrot orange",
      "hex": "#E9692C",
      "r": 233,
      "b": 44,
      "g": 105
    }, {
      "id": 215,
      "name": "Deep cerise",
      "hex": "#DA3287",
      "r": 218,
      "b": 135,
      "g": 50
    }, {
      "id": 216,
      "name": "Deep champagne",
      "hex": "#FAD6A5",
      "r": 250,
      "b": 165,
      "g": 214
    }, {
      "id": 217,
      "name": "Deep chestnut",
      "hex": "#B94E48",
      "r": 185,
      "b": 72,
      "g": 78
    }, {
      "id": 218,
      "name": "Deep coffee",
      "hex": "#704241",
      "r": 112,
      "b": 65,
      "g": 66
    }, {
      "id": 219,
      "name": "Deep fuchsia",
      "hex": "#C154C1",
      "r": 193,
      "b": 193,
      "g": 84
    }, {
      "id": 220,
      "name": "Deep jungle green",
      "hex": "#004B49",
      "r": 0,
      "b": 73,
      "g": 75
    }, {
      "id": 221,
      "name": "Deep lilac",
      "hex": "#9955BB",
      "r": 153,
      "b": 187,
      "g": 85
    }, {
      "id": 222,
      "name": "Deep magenta",
      "hex": "#CC00CC",
      "r": 204,
      "b": 204,
      "g": 0
    }, {
      "id": 223,
      "name": "Deep peach",
      "hex": "#FFCBA4",
      "r": 255,
      "b": 164,
      "g": 203
    }, {
      "id": 224,
      "name": "Deep pink",
      "hex": "#FF1493",
      "r": 255,
      "b": 147,
      "g": 20
    }, {
      "id": 225,
      "name": "Deep saffron",
      "hex": "#FF9933",
      "r": 255,
      "b": 51,
      "g": 153
    }, {
      "id": 226,
      "name": "Deep sky blue",
      "hex": "#00BFFF",
      "r": 0,
      "b": 255,
      "g": 191
    }, {
      "id": 227,
      "name": "Denim",
      "hex": "#1560BD",
      "r": 21,
      "b": 189,
      "g": 96
    }, {
      "id": 228,
      "name": "Desert",
      "hex": "#C19A6B",
      "r": 193,
      "b": 107,
      "g": 154
    }, {
      "id": 229,
      "name": "Desert sand",
      "hex": "#EDC9AF",
      "r": 237,
      "b": 175,
      "g": 201
    }, {
      "id": 230,
      "name": "Dim gray",
      "hex": "#696969",
      "r": 105,
      "b": 105,
      "g": 105
    }, {
      "id": 231,
      "name": "Dodger blue",
      "hex": "#1E90FF",
      "r": 30,
      "b": 255,
      "g": 144
    }, {
      "id": 232,
      "name": "Dogwood rose",
      "hex": "#D71868",
      "r": 215,
      "b": 104,
      "g": 24
    }, {
      "id": 233,
      "name": "Dollar bill",
      "hex": "#85BB65",
      "r": 133,
      "b": 101,
      "g": 187
    }, {
      "id": 234,
      "name": "Drab",
      "hex": "#967117",
      "r": 150,
      "b": 23,
      "g": 113
    }, {
      "id": 235,
      "name": "Duke blue",
      "hex": "#00009C",
      "r": 0,
      "b": 156,
      "g": 0
    }, {
      "id": 236,
      "name": "Earth yellow",
      "hex": "#E1A95F",
      "r": 225,
      "b": 95,
      "g": 169
    }, {
      "id": 237,
      "name": "Ecru",
      "hex": "#C2B280",
      "r": 194,
      "b": 128,
      "g": 178
    }, {
      "id": 238,
      "name": "Eggplant",
      "hex": "#614051",
      "r": 97,
      "b": 81,
      "g": 64
    }, {
      "id": 239,
      "name": "Eggshell",
      "hex": "#F0EAD6",
      "r": 240,
      "b": 214,
      "g": 234
    }, {
      "id": 240,
      "name": "Egyptian blue",
      "hex": "#1034A6",
      "r": 16,
      "b": 166,
      "g": 52
    }, {
      "id": 241,
      "name": "Electric blue",
      "hex": "#7DF9FF",
      "r": 125,
      "b": 255,
      "g": 249
    }, {
      "id": 242,
      "name": "Electric crimson",
      "hex": "#FF003F",
      "r": 255,
      "b": 63,
      "g": 0
    }, {
      "id": 243,
      "name": "Electric cyan",
      "hex": "#00FFFF",
      "r": 0,
      "b": 255,
      "g": 255
    }, {
      "id": 244,
      "name": "Electric green",
      "hex": "#00FF00",
      "r": 0,
      "b": 0,
      "g": 255
    }, {
      "id": 245,
      "name": "Electric indigo",
      "hex": "#6F00FF",
      "r": 111,
      "b": 255,
      "g": 0
    }, {
      "id": 246,
      "name": "Electric lavender",
      "hex": "#F4BBFF",
      "r": 244,
      "b": 255,
      "g": 187
    }, {
      "id": 247,
      "name": "Electric lime",
      "hex": "#CCFF00",
      "r": 204,
      "b": 0,
      "g": 255
    }, {
      "id": 248,
      "name": "Electric purple",
      "hex": "#BF00FF",
      "r": 191,
      "b": 255,
      "g": 0
    }, {
      "id": 249,
      "name": "Electric ultramarine",
      "hex": "#3F00FF",
      "r": 63,
      "b": 255,
      "g": 0
    }, {
      "id": 250,
      "name": "Electric violet",
      "hex": "#8F00FF",
      "r": 143,
      "b": 255,
      "g": 0
    }, {
      "id": 251,
      "name": "Electric yellow",
      "hex": "#FFFF00",
      "r": 255,
      "b": 0,
      "g": 255
    }, {
      "id": 252,
      "name": "Emerald",
      "hex": "#50C878",
      "r": 80,
      "b": 120,
      "g": 200
    }, {
      "id": 253,
      "name": "Eton blue",
      "hex": "#96C8A2",
      "r": 150,
      "b": 162,
      "g": 200
    }, {
      "id": 254,
      "name": "Fallow",
      "hex": "#C19A6B",
      "r": 193,
      "b": 107,
      "g": 154
    }, {
      "id": 255,
      "name": "Falu red",
      "hex": "#801818",
      "r": 128,
      "b": 24,
      "g": 24
    }, {
      "id": 256,
      "name": "Famous",
      "hex": "#FF00FF",
      "r": 255,
      "b": 255,
      "g": 0
    }, {
      "id": 257,
      "name": "Fandango",
      "hex": "#B53389",
      "r": 181,
      "b": 137,
      "g": 51
    }, {
      "id": 258,
      "name": "Fashion fuchsia",
      "hex": "#F400A1",
      "r": 244,
      "b": 161,
      "g": 0
    }, {
      "id": 259,
      "name": "Fawn",
      "hex": "#E5AA70",
      "r": 229,
      "b": 112,
      "g": 170
    }, {
      "id": 260,
      "name": "Feldgrau",
      "hex": "#4D5D53",
      "r": 77,
      "b": 83,
      "g": 93
    }, {
      "id": 261,
      "name": "Fern",
      "hex": "#71BC78",
      "r": 113,
      "b": 120,
      "g": 188
    }, {
      "id": 262,
      "name": "Fern green",
      "hex": "#4F7942",
      "r": 79,
      "b": 66,
      "g": 121
    }, {
      "id": 263,
      "name": "Ferrari Red",
      "hex": "#FF2800",
      "r": 255,
      "b": 0,
      "g": 40
    }, {
      "id": 264,
      "name": "Field drab",
      "hex": "#6C541E",
      "r": 108,
      "b": 30,
      "g": 84
    }, {
      "id": 265,
      "name": "Fire engine red",
      "hex": "#CE2029",
      "r": 206,
      "b": 41,
      "g": 32
    }, {
      "id": 266,
      "name": "Firebrick",
      "hex": "#B22222",
      "r": 178,
      "b": 34,
      "g": 34
    }, {
      "id": 267,
      "name": "Flame",
      "hex": "#E25822",
      "r": 226,
      "b": 34,
      "g": 88
    }, {
      "id": 268,
      "name": "Flamingo pink",
      "hex": "#FC8EAC",
      "r": 252,
      "b": 172,
      "g": 142
    }, {
      "id": 269,
      "name": "Flavescent",
      "hex": "#F7E98E",
      "r": 247,
      "b": 142,
      "g": 233
    }, {
      "id": 270,
      "name": "Flax",
      "hex": "#EEDC82",
      "r": 238,
      "b": 130,
      "g": 220
    }, {
      "id": 271,
      "name": "Floral white",
      "hex": "#FFFAF0",
      "r": 255,
      "b": 240,
      "g": 250
    }, {
      "id": 272,
      "name": "Fluorescent orange",
      "hex": "#FFBF00",
      "r": 255,
      "b": 0,
      "g": 191
    }, {
      "id": 273,
      "name": "Fluorescent pink",
      "hex": "#FF1493",
      "r": 255,
      "b": 147,
      "g": 20
    }, {
      "id": 274,
      "name": "Fluorescent yellow",
      "hex": "#CCFF00",
      "r": 204,
      "b": 0,
      "g": 255
    }, {
      "id": 275,
      "name": "Folly",
      "hex": "#FF004F",
      "r": 255,
      "b": 79,
      "g": 0
    }, {
      "id": 276,
      "name": "Forest green",
      "hex": "#228B22",
      "r": 34,
      "b": 34,
      "g": 139
    }, {
      "id": 277,
      "name": "French beige",
      "hex": "#A67B5B",
      "r": 166,
      "b": 91,
      "g": 123
    }, {
      "id": 278,
      "name": "French blue",
      "hex": "#0072BB",
      "r": 0,
      "b": 187,
      "g": 114
    }, {
      "id": 279,
      "name": "French lilac",
      "hex": "#86608E",
      "r": 134,
      "b": 142,
      "g": 96
    }, {
      "id": 280,
      "name": "French rose",
      "hex": "#F64A8A",
      "r": 246,
      "b": 138,
      "g": 74
    }, {
      "id": 281,
      "name": "Fuchsia",
      "hex": "#FF00FF",
      "r": 255,
      "b": 255,
      "g": 0
    }, {
      "id": 282,
      "name": "Fuchsia pink",
      "hex": "#FF77FF",
      "r": 255,
      "b": 255,
      "g": 119
    }, {
      "id": 283,
      "name": "Fulvous",
      "hex": "#E48400",
      "r": 228,
      "b": 0,
      "g": 132
    }, {
      "id": 284,
      "name": "Fuzzy Wuzzy",
      "hex": "#CC6666",
      "r": 204,
      "b": 102,
      "g": 102
    }, {
      "id": 285,
      "name": "Gainsboro",
      "hex": "#DCDCDC",
      "r": 220,
      "b": 220,
      "g": 220
    }, {
      "id": 286,
      "name": "Gamboge",
      "hex": "#E49B0F",
      "r": 228,
      "b": 15,
      "g": 155
    }, {
      "id": 287,
      "name": "Ghost white",
      "hex": "#F8F8FF",
      "r": 248,
      "b": 255,
      "g": 248
    }, {
      "id": 288,
      "name": "Ginger",
      "hex": "#B06500",
      "r": 176,
      "b": 0,
      "g": 101
    }, {
      "id": 289,
      "name": "Glaucous",
      "hex": "#6082B6",
      "r": 96,
      "b": 182,
      "g": 130
    }, {
      "id": 290,
      "name": "Glitter",
      "hex": "#E6E8FA",
      "r": 230,
      "b": 250,
      "g": 232
    }, {
      "id": 291,
      "name": "Gold",
      "hex": "#FFD700",
      "r": 255,
      "b": 0,
      "g": 215
    }, {
      "id": 292,
      "name": "Golden brown",
      "hex": "#996515",
      "r": 153,
      "b": 21,
      "g": 101
    }, {
      "id": 293,
      "name": "Golden poppy",
      "hex": "#FCC200",
      "r": 252,
      "b": 0,
      "g": 194
    }, {
      "id": 294,
      "name": "Golden yellow",
      "hex": "#FFDF00",
      "r": 255,
      "b": 0,
      "g": 223
    }, {
      "id": 295,
      "name": "Goldenrod",
      "hex": "#DAA520",
      "r": 218,
      "b": 32,
      "g": 165
    }, {
      "id": 296,
      "name": "Granny Smith Apple",
      "hex": "#A8E4A0",
      "r": 168,
      "b": 160,
      "g": 228
    }, {
      "id": 297,
      "name": "Gray",
      "hex": "#808080",
      "r": 128,
      "b": 128,
      "g": 128
    }, {
      "id": 298,
      "name": "Gray asparagus",
      "hex": "#465945",
      "r": 70,
      "b": 69,
      "g": 89
    }, {
      "id": 299,
      "name": "Green",
      "hex": "#00FF00",
      "r": 0,
      "b": 0,
      "g": 255
    }, {
      "id": 300,
      "name": "Green Blue",
      "hex": "#1164B4",
      "r": 17,
      "b": 180,
      "g": 100
    }, {
      "id": 301,
      "name": "Green yellow",
      "hex": "#ADFF2F",
      "r": 173,
      "b": 47,
      "g": 255
    }, {
      "id": 302,
      "name": "Grullo",
      "hex": "#A99A86",
      "r": 169,
      "b": 134,
      "g": 154
    }, {
      "id": 303,
      "name": "Guppie green",
      "hex": "#00FF7F",
      "r": 0,
      "b": 127,
      "g": 255
    }, {
      "id": 304,
      "name": "Halay� �be",
      "hex": "#663854",
      "r": 102,
      "b": 84,
      "g": 56
    }, {
      "id": 305,
      "name": "Han blue",
      "hex": "#446CCF",
      "r": 68,
      "b": 207,
      "g": 108
    }, {
      "id": 306,
      "name": "Han purple",
      "hex": "#5218FA",
      "r": 82,
      "b": 250,
      "g": 24
    }, {
      "id": 307,
      "name": "Hansa yellow",
      "hex": "#E9D66B",
      "r": 233,
      "b": 107,
      "g": 214
    }, {
      "id": 308,
      "name": "Harlequin",
      "hex": "#3FFF00",
      "r": 63,
      "b": 0,
      "g": 255
    }, {
      "id": 309,
      "name": "Harvard crimson",
      "hex": "#C90016",
      "r": 201,
      "b": 22,
      "g": 0
    }, {
      "id": 310,
      "name": "Harvest Gold",
      "hex": "#DA9100",
      "r": 218,
      "b": 0,
      "g": 145
    }, {
      "id": 311,
      "name": "Heart Gold",
      "hex": "#808000",
      "r": 128,
      "b": 0,
      "g": 128
    }, {
      "id": 312,
      "name": "Heliotrope",
      "hex": "#DF73FF",
      "r": 223,
      "b": 255,
      "g": 115
    }, {
      "id": 313,
      "name": "Hollywood cerise",
      "hex": "#F400A1",
      "r": 244,
      "b": 161,
      "g": 0
    }, {
      "id": 314,
      "name": "Honeydew",
      "hex": "#F0FFF0",
      "r": 240,
      "b": 240,
      "g": 255
    }, {
      "id": 315,
      "name": "Hooker green",
      "hex": "#49796B",
      "r": 73,
      "b": 107,
      "g": 121
    }, {
      "id": 316,
      "name": "Hot magenta",
      "hex": "#FF1DCE",
      "r": 255,
      "b": 206,
      "g": 29
    }, {
      "id": 317,
      "name": "Hot pink",
      "hex": "#FF69B4",
      "r": 255,
      "b": 180,
      "g": 105
    }, {
      "id": 318,
      "name": "Hunter green",
      "hex": "#355E3B",
      "r": 53,
      "b": 59,
      "g": 94
    }, {
      "id": 319,
      "name": "Icterine",
      "hex": "#FCF75E",
      "r": 252,
      "b": 94,
      "g": 247
    }, {
      "id": 320,
      "name": "Inchworm",
      "hex": "#B2EC5D",
      "r": 178,
      "b": 93,
      "g": 236
    }, {
      "id": 321,
      "name": "India green",
      "hex": "#138808",
      "r": 19,
      "b": 8,
      "g": 136
    }, {
      "id": 322,
      "name": "Indian red",
      "hex": "#CD5C5C",
      "r": 205,
      "b": 92,
      "g": 92
    }, {
      "id": 323,
      "name": "Indian yellow",
      "hex": "#E3A857",
      "r": 227,
      "b": 87,
      "g": 168
    }, {
      "id": 324,
      "name": "Indigo",
      "hex": "#4B0082",
      "r": 75,
      "b": 130,
      "g": 0
    }, {
      "id": 325,
      "name": "International Klein Blue",
      "hex": "#002FA7",
      "r": 0,
      "b": 167,
      "g": 47
    }, {
      "id": 326,
      "name": "International orange",
      "hex": "#FF4F00",
      "r": 255,
      "b": 0,
      "g": 79
    }, {
      "id": 327,
      "name": "Iris",
      "hex": "#5A4FCF",
      "r": 90,
      "b": 207,
      "g": 79
    }, {
      "id": 328,
      "name": "Isabelline",
      "hex": "#F4F0EC",
      "r": 244,
      "b": 236,
      "g": 240
    }, {
      "id": 329,
      "name": "Islamic green",
      "hex": "#009000",
      "r": 0,
      "b": 0,
      "g": 144
    }, {
      "id": 330,
      "name": "Ivory",
      "hex": "#FFFFF0",
      "r": 255,
      "b": 240,
      "g": 255
    }, {
      "id": 331,
      "name": "Jade",
      "hex": "#00A86B",
      "r": 0,
      "b": 107,
      "g": 168
    }, {
      "id": 332,
      "name": "Jasmine",
      "hex": "#F8DE7E",
      "r": 248,
      "b": 126,
      "g": 222
    }, {
      "id": 333,
      "name": "Jasper",
      "hex": "#D73B3E",
      "r": 215,
      "b": 62,
      "g": 59
    }, {
      "id": 334,
      "name": "Jazzberry jam",
      "hex": "#A50B5E",
      "r": 165,
      "b": 94,
      "g": 11
    }, {
      "id": 335,
      "name": "Jonquil",
      "hex": "#FADA5E",
      "r": 250,
      "b": 94,
      "g": 218
    }, {
      "id": 336,
      "name": "June bud",
      "hex": "#BDDA57",
      "r": 189,
      "b": 87,
      "g": 218
    }, {
      "id": 337,
      "name": "Jungle green",
      "hex": "#29AB87",
      "r": 41,
      "b": 135,
      "g": 171
    }, {
      "id": 338,
      "name": "KU Crimson",
      "hex": "#E8000D",
      "r": 232,
      "b": 13,
      "g": 0
    }, {
      "id": 339,
      "name": "Kelly green",
      "hex": "#4CBB17",
      "r": 76,
      "b": 23,
      "g": 187
    }, {
      "id": 340,
      "name": "Khaki",
      "hex": "#C3B091",
      "r": 195,
      "b": 145,
      "g": 176
    }, {
      "id": 341,
      "name": "La Salle Green",
      "hex": "#087830",
      "r": 8,
      "b": 48,
      "g": 120
    }, {
      "id": 342,
      "name": "Languid lavender",
      "hex": "#D6CADD",
      "r": 214,
      "b": 221,
      "g": 202
    }, {
      "id": 343,
      "name": "Lapis lazuli",
      "hex": "#26619C",
      "r": 38,
      "b": 156,
      "g": 97
    }, {
      "id": 344,
      "name": "Laser Lemon",
      "hex": "#FEFE22",
      "r": 254,
      "b": 34,
      "g": 254
    }, {
      "id": 345,
      "name": "Laurel green",
      "hex": "#A9BA9D",
      "r": 169,
      "b": 157,
      "g": 186
    }, {
      "id": 346,
      "name": "Lava",
      "hex": "#CF1020",
      "r": 207,
      "b": 32,
      "g": 16
    }, {
      "id": 347,
      "name": "Lavender",
      "hex": "#E6E6FA",
      "r": 230,
      "b": 250,
      "g": 230
    }, {
      "id": 348,
      "name": "Lavender blue",
      "hex": "#CCCCFF",
      "r": 204,
      "b": 255,
      "g": 204
    }, {
      "id": 349,
      "name": "Lavender blush",
      "hex": "#FFF0F5",
      "r": 255,
      "b": 245,
      "g": 240
    }, {
      "id": 350,
      "name": "Lavender gray",
      "hex": "#C4C3D0",
      "r": 196,
      "b": 208,
      "g": 195
    }, {
      "id": 351,
      "name": "Lavender indigo",
      "hex": "#9457EB",
      "r": 148,
      "b": 235,
      "g": 87
    }, {
      "id": 352,
      "name": "Lavender magenta",
      "hex": "#EE82EE",
      "r": 238,
      "b": 238,
      "g": 130
    }, {
      "id": 353,
      "name": "Lavender mist",
      "hex": "#E6E6FA",
      "r": 230,
      "b": 250,
      "g": 230
    }, {
      "id": 354,
      "name": "Lavender pink",
      "hex": "#FBAED2",
      "r": 251,
      "b": 210,
      "g": 174
    }, {
      "id": 355,
      "name": "Lavender purple",
      "hex": "#967BB6",
      "r": 150,
      "b": 182,
      "g": 123
    }, {
      "id": 356,
      "name": "Lavender rose",
      "hex": "#FBA0E3",
      "r": 251,
      "b": 227,
      "g": 160
    }, {
      "id": 357,
      "name": "Lawn green",
      "hex": "#7CFC00",
      "r": 124,
      "b": 0,
      "g": 252
    }, {
      "id": 358,
      "name": "Lemon",
      "hex": "#FFF700",
      "r": 255,
      "b": 0,
      "g": 247
    }, {
      "id": 359,
      "name": "Lemon Yellow",
      "hex": "#FFF44F",
      "r": 255,
      "b": 79,
      "g": 244
    }, {
      "id": 360,
      "name": "Lemon chiffon",
      "hex": "#FFFACD",
      "r": 255,
      "b": 205,
      "g": 250
    }, {
      "id": 361,
      "name": "Lemon lime",
      "hex": "#BFFF00",
      "r": 191,
      "b": 0,
      "g": 255
    }, {
      "id": 362,
      "name": "Light Crimson",
      "hex": "#F56991",
      "r": 245,
      "b": 145,
      "g": 105
    }, {
      "id": 363,
      "name": "Light Thulian pink",
      "hex": "#E68FAC",
      "r": 230,
      "b": 172,
      "g": 143
    }, {
      "id": 364,
      "name": "Light apricot",
      "hex": "#FDD5B1",
      "r": 253,
      "b": 177,
      "g": 213
    }, {
      "id": 365,
      "name": "Light blue",
      "hex": "#ADD8E6",
      "r": 173,
      "b": 230,
      "g": 216
    }, {
      "id": 366,
      "name": "Light brown",
      "hex": "#B5651D",
      "r": 181,
      "b": 29,
      "g": 101
    }, {
      "id": 367,
      "name": "Light carmine pink",
      "hex": "#E66771",
      "r": 230,
      "b": 113,
      "g": 103
    }, {
      "id": 368,
      "name": "Light coral",
      "hex": "#F08080",
      "r": 240,
      "b": 128,
      "g": 128
    }, {
      "id": 369,
      "name": "Light cornflower blue",
      "hex": "#93CCEA",
      "r": 147,
      "b": 234,
      "g": 204
    }, {
      "id": 370,
      "name": "Light cyan",
      "hex": "#E0FFFF",
      "r": 224,
      "b": 255,
      "g": 255
    }, {
      "id": 371,
      "name": "Light fuchsia pink",
      "hex": "#F984EF",
      "r": 249,
      "b": 239,
      "g": 132
    }, {
      "id": 372,
      "name": "Light goldenrod yellow",
      "hex": "#FAFAD2",
      "r": 250,
      "b": 210,
      "g": 250
    }, {
      "id": 373,
      "name": "Light gray",
      "hex": "#D3D3D3",
      "r": 211,
      "b": 211,
      "g": 211
    }, {
      "id": 374,
      "name": "Light green",
      "hex": "#90EE90",
      "r": 144,
      "b": 144,
      "g": 238
    }, {
      "id": 375,
      "name": "Light khaki",
      "hex": "#F0E68C",
      "r": 240,
      "b": 140,
      "g": 230
    }, {
      "id": 376,
      "name": "Light pastel purple",
      "hex": "#B19CD9",
      "r": 177,
      "b": 217,
      "g": 156
    }, {
      "id": 377,
      "name": "Light pink",
      "hex": "#FFB6C1",
      "r": 255,
      "b": 193,
      "g": 182
    }, {
      "id": 378,
      "name": "Light salmon",
      "hex": "#FFA07A",
      "r": 255,
      "b": 122,
      "g": 160
    }, {
      "id": 379,
      "name": "Light salmon pink",
      "hex": "#FF9999",
      "r": 255,
      "b": 153,
      "g": 153
    }, {
      "id": 380,
      "name": "Light sea green",
      "hex": "#20B2AA",
      "r": 32,
      "b": 170,
      "g": 178
    }, {
      "id": 381,
      "name": "Light sky blue",
      "hex": "#87CEFA",
      "r": 135,
      "b": 250,
      "g": 206
    }, {
      "id": 382,
      "name": "Light slate gray",
      "hex": "#778899",
      "r": 119,
      "b": 153,
      "g": 136
    }, {
      "id": 383,
      "name": "Light taupe",
      "hex": "#B38B6D",
      "r": 179,
      "b": 109,
      "g": 139
    }, {
      "id": 384,
      "name": "Light yellow",
      "hex": "#FFFFED",
      "r": 255,
      "b": 237,
      "g": 255
    }, {
      "id": 385,
      "name": "Lilac",
      "hex": "#C8A2C8",
      "r": 200,
      "b": 200,
      "g": 162
    }, {
      "id": 386,
      "name": "Lime",
      "hex": "#BFFF00",
      "r": 191,
      "b": 0,
      "g": 255
    }, {
      "id": 387,
      "name": "Lime green",
      "hex": "#32CD32",
      "r": 50,
      "b": 50,
      "g": 205
    }, {
      "id": 388,
      "name": "Lincoln green",
      "hex": "#195905",
      "r": 25,
      "b": 5,
      "g": 89
    }, {
      "id": 389,
      "name": "Linen",
      "hex": "#FAF0E6",
      "r": 250,
      "b": 230,
      "g": 240
    }, {
      "id": 390,
      "name": "Lion",
      "hex": "#C19A6B",
      "r": 193,
      "b": 107,
      "g": 154
    }, {
      "id": 391,
      "name": "Liver",
      "hex": "#534B4F",
      "r": 83,
      "b": 79,
      "g": 75
    }, {
      "id": 392,
      "name": "Lust",
      "hex": "#E62020",
      "r": 230,
      "b": 32,
      "g": 32
    }, {
      "id": 393,
      "name": "MSU Green",
      "hex": "#18453B",
      "r": 24,
      "b": 59,
      "g": 69
    }, {
      "id": 394,
      "name": "Macaroni and Cheese",
      "hex": "#FFBD88",
      "r": 255,
      "b": 136,
      "g": 189
    }, {
      "id": 395,
      "name": "Magenta",
      "hex": "#FF00FF",
      "r": 255,
      "b": 255,
      "g": 0
    }, {
      "id": 396,
      "name": "Magic mint",
      "hex": "#AAF0D1",
      "r": 170,
      "b": 209,
      "g": 240
    }, {
      "id": 397,
      "name": "Magnolia",
      "hex": "#F8F4FF",
      "r": 248,
      "b": 255,
      "g": 244
    }, {
      "id": 398,
      "name": "Mahogany",
      "hex": "#C04000",
      "r": 192,
      "b": 0,
      "g": 64
    }, {
      "id": 399,
      "name": "Maize",
      "hex": "#FBEC5D",
      "r": 251,
      "b": 93,
      "g": 236
    }, {
      "id": 400,
      "name": "Majorelle Blue",
      "hex": "#6050DC",
      "r": 96,
      "b": 220,
      "g": 80
    }, {
      "id": 401,
      "name": "Malachite",
      "hex": "#0BDA51",
      "r": 11,
      "b": 81,
      "g": 218
    }, {
      "id": 402,
      "name": "Manatee",
      "hex": "#979AAA",
      "r": 151,
      "b": 170,
      "g": 154
    }, {
      "id": 403,
      "name": "Mango Tango",
      "hex": "#FF8243",
      "r": 255,
      "b": 67,
      "g": 130
    }, {
      "id": 404,
      "name": "Mantis",
      "hex": "#74C365",
      "r": 116,
      "b": 101,
      "g": 195
    }, {
      "id": 405,
      "name": "Maroon",
      "hex": "#800000",
      "r": 128,
      "b": 0,
      "g": 0
    }, {
      "id": 406,
      "name": "Mauve",
      "hex": "#E0B0FF",
      "r": 224,
      "b": 255,
      "g": 176
    }, {
      "id": 407,
      "name": "Mauve taupe",
      "hex": "#915F6D",
      "r": 145,
      "b": 109,
      "g": 95
    }, {
      "id": 408,
      "name": "Mauvelous",
      "hex": "#EF98AA",
      "r": 239,
      "b": 170,
      "g": 152
    }, {
      "id": 409,
      "name": "Maya blue",
      "hex": "#73C2FB",
      "r": 115,
      "b": 251,
      "g": 194
    }, {
      "id": 410,
      "name": "Meat brown",
      "hex": "#E5B73B",
      "r": 229,
      "b": 59,
      "g": 183
    }, {
      "id": 411,
      "name": "Medium Persian blue",
      "hex": "#0067A5",
      "r": 0,
      "b": 165,
      "g": 103
    }, {
      "id": 412,
      "name": "Medium aquamarine",
      "hex": "#66DDAA",
      "r": 102,
      "b": 170,
      "g": 221
    }, {
      "id": 413,
      "name": "Medium blue",
      "hex": "#0000CD",
      "r": 0,
      "b": 205,
      "g": 0
    }, {
      "id": 414,
      "name": "Medium candy apple red",
      "hex": "#E2062C",
      "r": 226,
      "b": 44,
      "g": 6
    }, {
      "id": 415,
      "name": "Medium carmine",
      "hex": "#AF4035",
      "r": 175,
      "b": 53,
      "g": 64
    }, {
      "id": 416,
      "name": "Medium champagne",
      "hex": "#F3E5AB",
      "r": 243,
      "b": 171,
      "g": 229
    }, {
      "id": 417,
      "name": "Medium electric blue",
      "hex": "#035096",
      "r": 3,
      "b": 150,
      "g": 80
    }, {
      "id": 418,
      "name": "Medium jungle green",
      "hex": "#1C352D",
      "r": 28,
      "b": 45,
      "g": 53
    }, {
      "id": 419,
      "name": "Medium lavender magenta",
      "hex": "#DDA0DD",
      "r": 221,
      "b": 221,
      "g": 160
    }, {
      "id": 420,
      "name": "Medium orchid",
      "hex": "#BA55D3",
      "r": 186,
      "b": 211,
      "g": 85
    }, {
      "id": 421,
      "name": "Medium purple",
      "hex": "#9370DB",
      "r": 147,
      "b": 219,
      "g": 112
    }, {
      "id": 422,
      "name": "Medium red violet",
      "hex": "#BB3385",
      "r": 187,
      "b": 133,
      "g": 51
    }, {
      "id": 423,
      "name": "Medium sea green",
      "hex": "#3CB371",
      "r": 60,
      "b": 113,
      "g": 179
    }, {
      "id": 424,
      "name": "Medium slate blue",
      "hex": "#7B68EE",
      "r": 123,
      "b": 238,
      "g": 104
    }, {
      "id": 425,
      "name": "Medium spring bud",
      "hex": "#C9DC87",
      "r": 201,
      "b": 135,
      "g": 220
    }, {
      "id": 426,
      "name": "Medium spring green",
      "hex": "#00FA9A",
      "r": 0,
      "b": 154,
      "g": 250
    }, {
      "id": 427,
      "name": "Medium taupe",
      "hex": "#674C47",
      "r": 103,
      "b": 71,
      "g": 76
    }, {
      "id": 428,
      "name": "Medium teal blue",
      "hex": "#0054B4",
      "r": 0,
      "b": 180,
      "g": 84
    }, {
      "id": 429,
      "name": "Medium turquoise",
      "hex": "#48D1CC",
      "r": 72,
      "b": 204,
      "g": 209
    }, {
      "id": 430,
      "name": "Medium violet red",
      "hex": "#C71585",
      "r": 199,
      "b": 133,
      "g": 21
    }, {
      "id": 431,
      "name": "Melon",
      "hex": "#FDBCB4",
      "r": 253,
      "b": 180,
      "g": 188
    }, {
      "id": 432,
      "name": "Midnight blue",
      "hex": "#191970",
      "r": 25,
      "b": 112,
      "g": 25
    }, {
      "id": 433,
      "name": "Midnight green",
      "hex": "#004953",
      "r": 0,
      "b": 83,
      "g": 73
    }, {
      "id": 434,
      "name": "Mikado yellow",
      "hex": "#FFC40C",
      "r": 255,
      "b": 12,
      "g": 196
    }, {
      "id": 435,
      "name": "Mint",
      "hex": "#3EB489",
      "r": 62,
      "b": 137,
      "g": 180
    }, {
      "id": 436,
      "name": "Mint cream",
      "hex": "#F5FFFA",
      "r": 245,
      "b": 250,
      "g": 255
    }, {
      "id": 437,
      "name": "Mint green",
      "hex": "#98FF98",
      "r": 152,
      "b": 152,
      "g": 255
    }, {
      "id": 438,
      "name": "Misty rose",
      "hex": "#FFE4E1",
      "r": 255,
      "b": 225,
      "g": 228
    }, {
      "id": 439,
      "name": "Moccasin",
      "hex": "#FAEBD7",
      "r": 250,
      "b": 215,
      "g": 235
    }, {
      "id": 440,
      "name": "Mode beige",
      "hex": "#967117",
      "r": 150,
      "b": 23,
      "g": 113
    }, {
      "id": 441,
      "name": "Moonstone blue",
      "hex": "#73A9C2",
      "r": 115,
      "b": 194,
      "g": 169
    }, {
      "id": 442,
      "name": "Mordant red 19",
      "hex": "#AE0C00",
      "r": 174,
      "b": 0,
      "g": 12
    }, {
      "id": 443,
      "name": "Moss green",
      "hex": "#ADDFAD",
      "r": 173,
      "b": 173,
      "g": 223
    }, {
      "id": 444,
      "name": "Mountain Meadow",
      "hex": "#30BA8F",
      "r": 48,
      "b": 143,
      "g": 186
    }, {
      "id": 445,
      "name": "Mountbatten pink",
      "hex": "#997A8D",
      "r": 153,
      "b": 141,
      "g": 122
    }, {
      "id": 446,
      "name": "Mulberry",
      "hex": "#C54B8C",
      "r": 197,
      "b": 140,
      "g": 75
    }, {
      "id": 447,
      "name": "Munsell",
      "hex": "#F2F3F4",
      "r": 242,
      "b": 244,
      "g": 243
    }, {
      "id": 448,
      "name": "Mustard",
      "hex": "#FFDB58",
      "r": 255,
      "b": 88,
      "g": 219
    }, {
      "id": 449,
      "name": "Myrtle",
      "hex": "#21421E",
      "r": 33,
      "b": 30,
      "g": 66
    }, {
      "id": 450,
      "name": "Nadeshiko pink",
      "hex": "#F6ADC6",
      "r": 246,
      "b": 198,
      "g": 173
    }, {
      "id": 451,
      "name": "Napier green",
      "hex": "#2A8000",
      "r": 42,
      "b": 0,
      "g": 128
    }, {
      "id": 452,
      "name": "Naples yellow",
      "hex": "#FADA5E",
      "r": 250,
      "b": 94,
      "g": 218
    }, {
      "id": 453,
      "name": "Navajo white",
      "hex": "#FFDEAD",
      "r": 255,
      "b": 173,
      "g": 222
    }, {
      "id": 454,
      "name": "Navy blue",
      "hex": "#000080",
      "r": 0,
      "b": 128,
      "g": 0
    }, {
      "id": 455,
      "name": "Neon Carrot",
      "hex": "#FFA343",
      "r": 255,
      "b": 67,
      "g": 163
    }, {
      "id": 456,
      "name": "Neon fuchsia",
      "hex": "#FE59C2",
      "r": 254,
      "b": 194,
      "g": 89
    }, {
      "id": 457,
      "name": "Neon green",
      "hex": "#39FF14",
      "r": 57,
      "b": 20,
      "g": 255
    }, {
      "id": 458,
      "name": "Non-photo blue",
      "hex": "#A4DDED",
      "r": 164,
      "b": 237,
      "g": 221
    }, {
      "id": 459,
      "name": "North Texas Green",
      "hex": "#059033",
      "r": 5,
      "b": 51,
      "g": 144
    }, {
      "id": 460,
      "name": "Ocean Boat Blue",
      "hex": "#0077BE",
      "r": 0,
      "b": 190,
      "g": 119
    }, {
      "id": 461,
      "name": "Ochre",
      "hex": "#CC7722",
      "r": 204,
      "b": 34,
      "g": 119
    }, {
      "id": 462,
      "name": "Office green",
      "hex": "#008000",
      "r": 0,
      "b": 0,
      "g": 128
    }, {
      "id": 463,
      "name": "Old gold",
      "hex": "#CFB53B",
      "r": 207,
      "b": 59,
      "g": 181
    }, {
      "id": 464,
      "name": "Old lace",
      "hex": "#FDF5E6",
      "r": 253,
      "b": 230,
      "g": 245
    }, {
      "id": 465,
      "name": "Old lavender",
      "hex": "#796878",
      "r": 121,
      "b": 120,
      "g": 104
    }, {
      "id": 466,
      "name": "Old mauve",
      "hex": "#673147",
      "r": 103,
      "b": 71,
      "g": 49
    }, {
      "id": 467,
      "name": "Old rose",
      "hex": "#C08081",
      "r": 192,
      "b": 129,
      "g": 128
    }, {
      "id": 468,
      "name": "Olive",
      "hex": "#808000",
      "r": 128,
      "b": 0,
      "g": 128
    }, {
      "id": 469,
      "name": "Olive Drab",
      "hex": "#6B8E23",
      "r": 107,
      "b": 35,
      "g": 142
    }, {
      "id": 470,
      "name": "Olive Green",
      "hex": "#BAB86C",
      "r": 186,
      "b": 108,
      "g": 184
    }, {
      "id": 471,
      "name": "Olivine",
      "hex": "#9AB973",
      "r": 154,
      "b": 115,
      "g": 185
    }, {
      "id": 472,
      "name": "Onyx",
      "hex": "#0F0F0F",
      "r": 15,
      "b": 15,
      "g": 15
    }, {
      "id": 473,
      "name": "Opera mauve",
      "hex": "#B784A7",
      "r": 183,
      "b": 167,
      "g": 132
    }, {
      "id": 474,
      "name": "Orange",
      "hex": "#FFA500",
      "r": 255,
      "b": 0,
      "g": 165
    }, {
      "id": 475,
      "name": "Orange Yellow",
      "hex": "#F8D568",
      "r": 248,
      "b": 104,
      "g": 213
    }, {
      "id": 476,
      "name": "Orange peel",
      "hex": "#FF9F00",
      "r": 255,
      "b": 0,
      "g": 159
    }, {
      "id": 477,
      "name": "Orange red",
      "hex": "#FF4500",
      "r": 255,
      "b": 0,
      "g": 69
    }, {
      "id": 478,
      "name": "Orchid",
      "hex": "#DA70D6",
      "r": 218,
      "b": 214,
      "g": 112
    }, {
      "id": 479,
      "name": "Otter brown",
      "hex": "#654321",
      "r": 101,
      "b": 33,
      "g": 67
    }, {
      "id": 480,
      "name": "Outer Space",
      "hex": "#414A4C",
      "r": 65,
      "b": 76,
      "g": 74
    }, {
      "id": 481,
      "name": "Outrageous Orange",
      "hex": "#FF6E4A",
      "r": 255,
      "b": 74,
      "g": 110
    }, {
      "id": 482,
      "name": "Oxford Blue",
      "hex": "#002147",
      "r": 0,
      "b": 71,
      "g": 33
    }, {
      "id": 483,
      "name": "Pacific Blue",
      "hex": "#1CA9C9",
      "r": 28,
      "b": 201,
      "g": 169
    }, {
      "id": 484,
      "name": "Pakistan green",
      "hex": "#006600",
      "r": 0,
      "b": 0,
      "g": 102
    }, {
      "id": 485,
      "name": "Palatinate blue",
      "hex": "#273BE2",
      "r": 39,
      "b": 226,
      "g": 59
    }, {
      "id": 486,
      "name": "Palatinate purple",
      "hex": "#682860",
      "r": 104,
      "b": 96,
      "g": 40
    }, {
      "id": 487,
      "name": "Pale aqua",
      "hex": "#BCD4E6",
      "r": 188,
      "b": 230,
      "g": 212
    }, {
      "id": 488,
      "name": "Pale blue",
      "hex": "#AFEEEE",
      "r": 175,
      "b": 238,
      "g": 238
    }, {
      "id": 489,
      "name": "Pale brown",
      "hex": "#987654",
      "r": 152,
      "b": 84,
      "g": 118
    }, {
      "id": 490,
      "name": "Pale carmine",
      "hex": "#AF4035",
      "r": 175,
      "b": 53,
      "g": 64
    }, {
      "id": 491,
      "name": "Pale cerulean",
      "hex": "#9BC4E2",
      "r": 155,
      "b": 226,
      "g": 196
    }, {
      "id": 492,
      "name": "Pale chestnut",
      "hex": "#DDADAF",
      "r": 221,
      "b": 175,
      "g": 173
    }, {
      "id": 493,
      "name": "Pale copper",
      "hex": "#DA8A67",
      "r": 218,
      "b": 103,
      "g": 138
    }, {
      "id": 494,
      "name": "Pale cornflower blue",
      "hex": "#ABCDEF",
      "r": 171,
      "b": 239,
      "g": 205
    }, {
      "id": 495,
      "name": "Pale gold",
      "hex": "#E6BE8A",
      "r": 230,
      "b": 138,
      "g": 190
    }, {
      "id": 496,
      "name": "Pale goldenrod",
      "hex": "#EEE8AA",
      "r": 238,
      "b": 170,
      "g": 232
    }, {
      "id": 497,
      "name": "Pale green",
      "hex": "#98FB98",
      "r": 152,
      "b": 152,
      "g": 251
    }, {
      "id": 498,
      "name": "Pale lavender",
      "hex": "#DCD0FF",
      "r": 220,
      "b": 255,
      "g": 208
    }, {
      "id": 499,
      "name": "Pale magenta",
      "hex": "#F984E5",
      "r": 249,
      "b": 229,
      "g": 132
    }, {
      "id": 500,
      "name": "Pale pink",
      "hex": "#FADADD",
      "r": 250,
      "b": 221,
      "g": 218
    }, {
      "id": 501,
      "name": "Pale plum",
      "hex": "#DDA0DD",
      "r": 221,
      "b": 221,
      "g": 160
    }, {
      "id": 502,
      "name": "Pale red violet",
      "hex": "#DB7093",
      "r": 219,
      "b": 147,
      "g": 112
    }, {
      "id": 503,
      "name": "Pale robin egg blue",
      "hex": "#96DED1",
      "r": 150,
      "b": 209,
      "g": 222
    }, {
      "id": 504,
      "name": "Pale silver",
      "hex": "#C9C0BB",
      "r": 201,
      "b": 187,
      "g": 192
    }, {
      "id": 505,
      "name": "Pale spring bud",
      "hex": "#ECEBBD",
      "r": 236,
      "b": 189,
      "g": 235
    }, {
      "id": 506,
      "name": "Pale taupe",
      "hex": "#BC987E",
      "r": 188,
      "b": 126,
      "g": 152
    }, {
      "id": 507,
      "name": "Pale violet red",
      "hex": "#DB7093",
      "r": 219,
      "b": 147,
      "g": 112
    }, {
      "id": 508,
      "name": "Pansy purple",
      "hex": "#78184A",
      "r": 120,
      "b": 74,
      "g": 24
    }, {
      "id": 509,
      "name": "Papaya whip",
      "hex": "#FFEFD5",
      "r": 255,
      "b": 213,
      "g": 239
    }, {
      "id": 510,
      "name": "Paris Green",
      "hex": "#50C878",
      "r": 80,
      "b": 120,
      "g": 200
    }, {
      "id": 511,
      "name": "Pastel blue",
      "hex": "#AEC6CF",
      "r": 174,
      "b": 207,
      "g": 198
    }, {
      "id": 512,
      "name": "Pastel brown",
      "hex": "#836953",
      "r": 131,
      "b": 83,
      "g": 105
    }, {
      "id": 513,
      "name": "Pastel gray",
      "hex": "#CFCFC4",
      "r": 207,
      "b": 196,
      "g": 207
    }, {
      "id": 514,
      "name": "Pastel green",
      "hex": "#77DD77",
      "r": 119,
      "b": 119,
      "g": 221
    }, {
      "id": 515,
      "name": "Pastel magenta",
      "hex": "#F49AC2",
      "r": 244,
      "b": 194,
      "g": 154
    }, {
      "id": 516,
      "name": "Pastel orange",
      "hex": "#FFB347",
      "r": 255,
      "b": 71,
      "g": 179
    }, {
      "id": 517,
      "name": "Pastel pink",
      "hex": "#FFD1DC",
      "r": 255,
      "b": 220,
      "g": 209
    }, {
      "id": 518,
      "name": "Pastel purple",
      "hex": "#B39EB5",
      "r": 179,
      "b": 181,
      "g": 158
    }, {
      "id": 519,
      "name": "Pastel red",
      "hex": "#FF6961",
      "r": 255,
      "b": 97,
      "g": 105
    }, {
      "id": 520,
      "name": "Pastel violet",
      "hex": "#CB99C9",
      "r": 203,
      "b": 201,
      "g": 153
    }, {
      "id": 521,
      "name": "Pastel yellow",
      "hex": "#FDFD96",
      "r": 253,
      "b": 150,
      "g": 253
    }, {
      "id": 522,
      "name": "Patriarch",
      "hex": "#800080",
      "r": 128,
      "b": 128,
      "g": 0
    }, {
      "id": 523,
      "name": "Payne grey",
      "hex": "#536878",
      "r": 83,
      "b": 120,
      "g": 104
    }, {
      "id": 524,
      "name": "Peach",
      "hex": "#FFE5B4",
      "r": 255,
      "b": 180,
      "g": 229
    }, {
      "id": 525,
      "name": "Peach puff",
      "hex": "#FFDAB9",
      "r": 255,
      "b": 185,
      "g": 218
    }, {
      "id": 526,
      "name": "Peach yellow",
      "hex": "#FADFAD",
      "r": 250,
      "b": 173,
      "g": 223
    }, {
      "id": 527,
      "name": "Pear",
      "hex": "#D1E231",
      "r": 209,
      "b": 49,
      "g": 226
    }, {
      "id": 528,
      "name": "Pearl",
      "hex": "#EAE0C8",
      "r": 234,
      "b": 200,
      "g": 224
    }, {
      "id": 529,
      "name": "Pearl Aqua",
      "hex": "#88D8C0",
      "r": 136,
      "b": 192,
      "g": 216
    }, {
      "id": 530,
      "name": "Peridot",
      "hex": "#E6E200",
      "r": 230,
      "b": 0,
      "g": 226
    }, {
      "id": 531,
      "name": "Periwinkle",
      "hex": "#CCCCFF",
      "r": 204,
      "b": 255,
      "g": 204
    }, {
      "id": 532,
      "name": "Persian blue",
      "hex": "#1C39BB",
      "r": 28,
      "b": 187,
      "g": 57
    }, {
      "id": 533,
      "name": "Persian indigo",
      "hex": "#32127A",
      "r": 50,
      "b": 122,
      "g": 18
    }, {
      "id": 534,
      "name": "Persian orange",
      "hex": "#D99058",
      "r": 217,
      "b": 88,
      "g": 144
    }, {
      "id": 535,
      "name": "Persian pink",
      "hex": "#F77FBE",
      "r": 247,
      "b": 190,
      "g": 127
    }, {
      "id": 536,
      "name": "Persian plum",
      "hex": "#701C1C",
      "r": 112,
      "b": 28,
      "g": 28
    }, {
      "id": 537,
      "name": "Persian red",
      "hex": "#CC3333",
      "r": 204,
      "b": 51,
      "g": 51
    }, {
      "id": 538,
      "name": "Persian rose",
      "hex": "#FE28A2",
      "r": 254,
      "b": 162,
      "g": 40
    }, {
      "id": 539,
      "name": "Phlox",
      "hex": "#DF00FF",
      "r": 223,
      "b": 255,
      "g": 0
    }, {
      "id": 540,
      "name": "Phthalo blue",
      "hex": "#000F89",
      "r": 0,
      "b": 137,
      "g": 15
    }, {
      "id": 541,
      "name": "Phthalo green",
      "hex": "#123524",
      "r": 18,
      "b": 36,
      "g": 53
    }, {
      "id": 542,
      "name": "Piggy pink",
      "hex": "#FDDDE6",
      "r": 253,
      "b": 230,
      "g": 221
    }, {
      "id": 543,
      "name": "Pine green",
      "hex": "#01796F",
      "r": 1,
      "b": 111,
      "g": 121
    }, {
      "id": 544,
      "name": "Pink",
      "hex": "#FFC0CB",
      "r": 255,
      "b": 203,
      "g": 192
    }, {
      "id": 545,
      "name": "Pink Flamingo",
      "hex": "#FC74FD",
      "r": 252,
      "b": 253,
      "g": 116
    }, {
      "id": 546,
      "name": "Pink Sherbet",
      "hex": "#F78FA7",
      "r": 247,
      "b": 167,
      "g": 143
    }, {
      "id": 547,
      "name": "Pink pearl",
      "hex": "#E7ACCF",
      "r": 231,
      "b": 207,
      "g": 172
    }, {
      "id": 548,
      "name": "Pistachio",
      "hex": "#93C572",
      "r": 147,
      "b": 114,
      "g": 197
    }, {
      "id": 549,
      "name": "Platinum",
      "hex": "#E5E4E2",
      "r": 229,
      "b": 226,
      "g": 228
    }, {
      "id": 550,
      "name": "Plum",
      "hex": "#DDA0DD",
      "r": 221,
      "b": 221,
      "g": 160
    }, {
      "id": 551,
      "name": "Portland Orange",
      "hex": "#FF5A36",
      "r": 255,
      "b": 54,
      "g": 90
    }, {
      "id": 552,
      "name": "Powder blue",
      "hex": "#B0E0E6",
      "r": 176,
      "b": 230,
      "g": 224
    }, {
      "id": 553,
      "name": "Princeton orange",
      "hex": "#FF8F00",
      "r": 255,
      "b": 0,
      "g": 143
    }, {
      "id": 554,
      "name": "Prussian blue",
      "hex": "#003153",
      "r": 0,
      "b": 83,
      "g": 49
    }, {
      "id": 555,
      "name": "Psychedelic purple",
      "hex": "#DF00FF",
      "r": 223,
      "b": 255,
      "g": 0
    }, {
      "id": 556,
      "name": "Puce",
      "hex": "#CC8899",
      "r": 204,
      "b": 153,
      "g": 136
    }, {
      "id": 557,
      "name": "Pumpkin",
      "hex": "#FF7518",
      "r": 255,
      "b": 24,
      "g": 117
    }, {
      "id": 558,
      "name": "Purple",
      "hex": "#800080",
      "r": 128,
      "b": 128,
      "g": 0
    }, {
      "id": 559,
      "name": "Purple Heart",
      "hex": "#69359C",
      "r": 105,
      "b": 156,
      "g": 53
    }, {
      "id": 560,
      "name": "Purple Mountain's Majesty",
      "hex": "#9D81BA",
      "r": 157,
      "b": 186,
      "g": 129
    }, {
      "id": 561,
      "name": "Purple mountain majesty",
      "hex": "#9678B6",
      "r": 150,
      "b": 182,
      "g": 120
    }, {
      "id": 562,
      "name": "Purple pizzazz",
      "hex": "#FE4EDA",
      "r": 254,
      "b": 218,
      "g": 78
    }, {
      "id": 563,
      "name": "Purple taupe",
      "hex": "#50404D",
      "r": 80,
      "b": 77,
      "g": 64
    }, {
      "id": 564,
      "name": "Rackley",
      "hex": "#5D8AA8",
      "r": 93,
      "b": 168,
      "g": 138
    }, {
      "id": 565,
      "name": "Radical Red",
      "hex": "#FF355E",
      "r": 255,
      "b": 94,
      "g": 53
    }, {
      "id": 566,
      "name": "Raspberry",
      "hex": "#E30B5D",
      "r": 227,
      "b": 93,
      "g": 11
    }, {
      "id": 567,
      "name": "Raspberry glace",
      "hex": "#915F6D",
      "r": 145,
      "b": 109,
      "g": 95
    }, {
      "id": 568,
      "name": "Raspberry pink",
      "hex": "#E25098",
      "r": 226,
      "b": 152,
      "g": 80
    }, {
      "id": 569,
      "name": "Raspberry rose",
      "hex": "#B3446C",
      "r": 179,
      "b": 108,
      "g": 68
    }, {
      "id": 570,
      "name": "Raw Sienna",
      "hex": "#D68A59",
      "r": 214,
      "b": 89,
      "g": 138
    }, {
      "id": 571,
      "name": "Razzle dazzle rose",
      "hex": "#FF33CC",
      "r": 255,
      "b": 204,
      "g": 51
    }, {
      "id": 572,
      "name": "Razzmatazz",
      "hex": "#E3256B",
      "r": 227,
      "b": 107,
      "g": 37
    }, {
      "id": 573,
      "name": "Red",
      "hex": "#FF0000",
      "r": 255,
      "b": 0,
      "g": 0
    }, {
      "id": 574,
      "name": "Red Orange",
      "hex": "#FF5349",
      "r": 255,
      "b": 73,
      "g": 83
    }, {
      "id": 575,
      "name": "Red brown",
      "hex": "#A52A2A",
      "r": 165,
      "b": 42,
      "g": 42
    }, {
      "id": 576,
      "name": "Red violet",
      "hex": "#C71585",
      "r": 199,
      "b": 133,
      "g": 21
    }, {
      "id": 577,
      "name": "Rich black",
      "hex": "#004040",
      "r": 0,
      "b": 64,
      "g": 64
    }, {
      "id": 578,
      "name": "Rich carmine",
      "hex": "#D70040",
      "r": 215,
      "b": 64,
      "g": 0
    }, {
      "id": 579,
      "name": "Rich electric blue",
      "hex": "#0892D0",
      "r": 8,
      "b": 208,
      "g": 146
    }, {
      "id": 580,
      "name": "Rich lilac",
      "hex": "#B666D2",
      "r": 182,
      "b": 210,
      "g": 102
    }, {
      "id": 581,
      "name": "Rich maroon",
      "hex": "#B03060",
      "r": 176,
      "b": 96,
      "g": 48
    }, {
      "id": 582,
      "name": "Rifle green",
      "hex": "#414833",
      "r": 65,
      "b": 51,
      "g": 72
    }, {
      "id": 583,
      "name": "Robin's Egg Blue",
      "hex": "#1FCECB",
      "r": 31,
      "b": 203,
      "g": 206
    }, {
      "id": 584,
      "name": "Rose",
      "hex": "#FF007F",
      "r": 255,
      "b": 127,
      "g": 0
    }, {
      "id": 585,
      "name": "Rose bonbon",
      "hex": "#F9429E",
      "r": 249,
      "b": 158,
      "g": 66
    }, {
      "id": 586,
      "name": "Rose ebony",
      "hex": "#674846",
      "r": 103,
      "b": 70,
      "g": 72
    }, {
      "id": 587,
      "name": "Rose gold",
      "hex": "#B76E79",
      "r": 183,
      "b": 121,
      "g": 110
    }, {
      "id": 588,
      "name": "Rose madder",
      "hex": "#E32636",
      "r": 227,
      "b": 54,
      "g": 38
    }, {
      "id": 589,
      "name": "Rose pink",
      "hex": "#FF66CC",
      "r": 255,
      "b": 204,
      "g": 102
    }, {
      "id": 590,
      "name": "Rose quartz",
      "hex": "#AA98A9",
      "r": 170,
      "b": 169,
      "g": 152
    }, {
      "id": 591,
      "name": "Rose taupe",
      "hex": "#905D5D",
      "r": 144,
      "b": 93,
      "g": 93
    }, {
      "id": 592,
      "name": "Rose vale",
      "hex": "#AB4E52",
      "r": 171,
      "b": 82,
      "g": 78
    }, {
      "id": 593,
      "name": "Rosewood",
      "hex": "#65000B",
      "r": 101,
      "b": 11,
      "g": 0
    }, {
      "id": 594,
      "name": "Rosso corsa",
      "hex": "#D40000",
      "r": 212,
      "b": 0,
      "g": 0
    }, {
      "id": 595,
      "name": "Rosy brown",
      "hex": "#BC8F8F",
      "r": 188,
      "b": 143,
      "g": 143
    }, {
      "id": 596,
      "name": "Royal azure",
      "hex": "#0038A8",
      "r": 0,
      "b": 168,
      "g": 56
    }, {
      "id": 597,
      "name": "Royal blue",
      "hex": "#4169E1",
      "r": 65,
      "b": 225,
      "g": 105
    }, {
      "id": 598,
      "name": "Royal fuchsia",
      "hex": "#CA2C92",
      "r": 202,
      "b": 146,
      "g": 44
    }, {
      "id": 599,
      "name": "Royal purple",
      "hex": "#7851A9",
      "r": 120,
      "b": 169,
      "g": 81
    }, {
      "id": 600,
      "name": "Ruby",
      "hex": "#E0115F",
      "r": 224,
      "b": 95,
      "g": 17
    }, {
      "id": 601,
      "name": "Ruddy",
      "hex": "#FF0028",
      "r": 255,
      "b": 40,
      "g": 0
    }, {
      "id": 602,
      "name": "Ruddy brown",
      "hex": "#BB6528",
      "r": 187,
      "b": 40,
      "g": 101
    }, {
      "id": 603,
      "name": "Ruddy pink",
      "hex": "#E18E96",
      "r": 225,
      "b": 150,
      "g": 142
    }, {
      "id": 604,
      "name": "Rufous",
      "hex": "#A81C07",
      "r": 168,
      "b": 7,
      "g": 28
    }, {
      "id": 605,
      "name": "Russet",
      "hex": "#80461B",
      "r": 128,
      "b": 27,
      "g": 70
    }, {
      "id": 606,
      "name": "Rust",
      "hex": "#B7410E",
      "r": 183,
      "b": 14,
      "g": 65
    }, {
      "id": 607,
      "name": "Sacramento State green",
      "hex": "#00563F",
      "r": 0,
      "b": 63,
      "g": 86
    }, {
      "id": 608,
      "name": "Saddle brown",
      "hex": "#8B4513",
      "r": 139,
      "b": 19,
      "g": 69
    }, {
      "id": 609,
      "name": "Safety orange",
      "hex": "#FF6700",
      "r": 255,
      "b": 0,
      "g": 103
    }, {
      "id": 610,
      "name": "Saffron",
      "hex": "#F4C430",
      "r": 244,
      "b": 48,
      "g": 196
    }, {
      "id": 611,
      "name": "Saint Patrick Blue",
      "hex": "#23297A",
      "r": 35,
      "b": 122,
      "g": 41
    }, {
      "id": 612,
      "name": "Salmon",
      "hex": "#FF8C69",
      "r": 255,
      "b": 105,
      "g": 140
    }, {
      "id": 613,
      "name": "Salmon pink",
      "hex": "#FF91A4",
      "r": 255,
      "b": 164,
      "g": 145
    }, {
      "id": 614,
      "name": "Sand",
      "hex": "#C2B280",
      "r": 194,
      "b": 128,
      "g": 178
    }, {
      "id": 615,
      "name": "Sand dune",
      "hex": "#967117",
      "r": 150,
      "b": 23,
      "g": 113
    }, {
      "id": 616,
      "name": "Sandstorm",
      "hex": "#ECD540",
      "r": 236,
      "b": 64,
      "g": 213
    }, {
      "id": 617,
      "name": "Sandy brown",
      "hex": "#F4A460",
      "r": 244,
      "b": 96,
      "g": 164
    }, {
      "id": 618,
      "name": "Sandy taupe",
      "hex": "#967117",
      "r": 150,
      "b": 23,
      "g": 113
    }, {
      "id": 619,
      "name": "Sap green",
      "hex": "#507D2A",
      "r": 80,
      "b": 42,
      "g": 125
    }, {
      "id": 620,
      "name": "Sapphire",
      "hex": "#0F52BA",
      "r": 15,
      "b": 186,
      "g": 82
    }, {
      "id": 621,
      "name": "Satin sheen gold",
      "hex": "#CBA135",
      "r": 203,
      "b": 53,
      "g": 161
    }, {
      "id": 622,
      "name": "Scarlet",
      "hex": "#FF2400",
      "r": 255,
      "b": 0,
      "g": 36
    }, {
      "id": 623,
      "name": "School bus yellow",
      "hex": "#FFD800",
      "r": 255,
      "b": 0,
      "g": 216
    }, {
      "id": 624,
      "name": "Screamin Green",
      "hex": "#76FF7A",
      "r": 118,
      "b": 122,
      "g": 255
    }, {
      "id": 625,
      "name": "Sea blue",
      "hex": "#006994",
      "r": 0,
      "b": 148,
      "g": 105
    }, {
      "id": 626,
      "name": "Sea green",
      "hex": "#2E8B57",
      "r": 46,
      "b": 87,
      "g": 139
    }, {
      "id": 627,
      "name": "Seal brown",
      "hex": "#321414",
      "r": 50,
      "b": 20,
      "g": 20
    }, {
      "id": 628,
      "name": "Seashell",
      "hex": "#FFF5EE",
      "r": 255,
      "b": 238,
      "g": 245
    }, {
      "id": 629,
      "name": "Selective yellow",
      "hex": "#FFBA00",
      "r": 255,
      "b": 0,
      "g": 186
    }, {
      "id": 630,
      "name": "Sepia",
      "hex": "#704214",
      "r": 112,
      "b": 20,
      "g": 66
    }, {
      "id": 631,
      "name": "Shadow",
      "hex": "#8A795D",
      "r": 138,
      "b": 93,
      "g": 121
    }, {
      "id": 632,
      "name": "Shamrock",
      "hex": "#45CEA2",
      "r": 69,
      "b": 162,
      "g": 206
    }, {
      "id": 633,
      "name": "Shamrock green",
      "hex": "#009E60",
      "r": 0,
      "b": 96,
      "g": 158
    }, {
      "id": 634,
      "name": "Shocking pink",
      "hex": "#FC0FC0",
      "r": 252,
      "b": 192,
      "g": 15
    }, {
      "id": 635,
      "name": "Sienna",
      "hex": "#882D17",
      "r": 136,
      "b": 23,
      "g": 45
    }, {
      "id": 636,
      "name": "Silver",
      "hex": "#C0C0C0",
      "r": 192,
      "b": 192,
      "g": 192
    }, {
      "id": 637,
      "name": "Sinopia",
      "hex": "#CB410B",
      "r": 203,
      "b": 11,
      "g": 65
    }, {
      "id": 638,
      "name": "Skobeloff",
      "hex": "#007474",
      "r": 0,
      "b": 116,
      "g": 116
    }, {
      "id": 639,
      "name": "Sky blue",
      "hex": "#87CEEB",
      "r": 135,
      "b": 235,
      "g": 206
    }, {
      "id": 640,
      "name": "Sky magenta",
      "hex": "#CF71AF",
      "r": 207,
      "b": 175,
      "g": 113
    }, {
      "id": 641,
      "name": "Slate blue",
      "hex": "#6A5ACD",
      "r": 106,
      "b": 205,
      "g": 90
    }, {
      "id": 642,
      "name": "Slate gray",
      "hex": "#708090",
      "r": 112,
      "b": 144,
      "g": 128
    }, {
      "id": 643,
      "name": "Smalt",
      "hex": "#003399",
      "r": 0,
      "b": 153,
      "g": 51
    }, {
      "id": 644,
      "name": "Smokey topaz",
      "hex": "#933D41",
      "r": 147,
      "b": 65,
      "g": 61
    }, {
      "id": 645,
      "name": "Smoky black",
      "hex": "#100C08",
      "r": 16,
      "b": 8,
      "g": 12
    }, {
      "id": 646,
      "name": "Snow",
      "hex": "#FFFAFA",
      "r": 255,
      "b": 250,
      "g": 250
    }, {
      "id": 647,
      "name": "Spiro Disco Ball",
      "hex": "#0FC0FC",
      "r": 15,
      "b": 252,
      "g": 192
    }, {
      "id": 648,
      "name": "Spring bud",
      "hex": "#A7FC00",
      "r": 167,
      "b": 0,
      "g": 252
    }, {
      "id": 649,
      "name": "Spring green",
      "hex": "#00FF7F",
      "r": 0,
      "b": 127,
      "g": 255
    }, {
      "id": 650,
      "name": "Steel blue",
      "hex": "#4682B4",
      "r": 70,
      "b": 180,
      "g": 130
    }, {
      "id": 651,
      "name": "Stil de grain yellow",
      "hex": "#FADA5E",
      "r": 250,
      "b": 94,
      "g": 218
    }, {
      "id": 652,
      "name": "Stizza",
      "hex": "#990000",
      "r": 153,
      "b": 0,
      "g": 0
    }, {
      "id": 653,
      "name": "Stormcloud",
      "hex": "#008080",
      "r": 0,
      "b": 128,
      "g": 128
    }, {
      "id": 654,
      "name": "Straw",
      "hex": "#E4D96F",
      "r": 228,
      "b": 111,
      "g": 217
    }, {
      "id": 655,
      "name": "Sunglow",
      "hex": "#FFCC33",
      "r": 255,
      "b": 51,
      "g": 204
    }, {
      "id": 656,
      "name": "Sunset",
      "hex": "#FAD6A5",
      "r": 250,
      "b": 165,
      "g": 214
    }, {
      "id": 657,
      "name": "Sunset Orange",
      "hex": "#FD5E53",
      "r": 253,
      "b": 83,
      "g": 94
    }, {
      "id": 658,
      "name": "Tan",
      "hex": "#D2B48C",
      "r": 210,
      "b": 140,
      "g": 180
    }, {
      "id": 659,
      "name": "Tangelo",
      "hex": "#F94D00",
      "r": 249,
      "b": 0,
      "g": 77
    }, {
      "id": 660,
      "name": "Tangerine",
      "hex": "#F28500",
      "r": 242,
      "b": 0,
      "g": 133
    }, {
      "id": 661,
      "name": "Tangerine yellow",
      "hex": "#FFCC00",
      "r": 255,
      "b": 0,
      "g": 204
    }, {
      "id": 662,
      "name": "Taupe",
      "hex": "#483C32",
      "r": 72,
      "b": 50,
      "g": 60
    }, {
      "id": 663,
      "name": "Taupe gray",
      "hex": "#8B8589",
      "r": 139,
      "b": 137,
      "g": 133
    }, {
      "id": 664,
      "name": "Tawny",
      "hex": "#CD5700",
      "r": 205,
      "b": 0,
      "g": 87
    }, {
      "id": 665,
      "name": "Tea green",
      "hex": "#D0F0C0",
      "r": 208,
      "b": 192,
      "g": 240
    }, {
      "id": 666,
      "name": "Tea rose",
      "hex": "#F4C2C2",
      "r": 244,
      "b": 194,
      "g": 194
    }, {
      "id": 667,
      "name": "Teal",
      "hex": "#008080",
      "r": 0,
      "b": 128,
      "g": 128
    }, {
      "id": 668,
      "name": "Teal blue",
      "hex": "#367588",
      "r": 54,
      "b": 136,
      "g": 117
    }, {
      "id": 669,
      "name": "Teal green",
      "hex": "#006D5B",
      "r": 0,
      "b": 91,
      "g": 109
    }, {
      "id": 670,
      "name": "Terra cotta",
      "hex": "#E2725B",
      "r": 226,
      "b": 91,
      "g": 114
    }, {
      "id": 671,
      "name": "Thistle",
      "hex": "#D8BFD8",
      "r": 216,
      "b": 216,
      "g": 191
    }, {
      "id": 672,
      "name": "Thulian pink",
      "hex": "#DE6FA1",
      "r": 222,
      "b": 161,
      "g": 111
    }, {
      "id": 673,
      "name": "Tickle Me Pink",
      "hex": "#FC89AC",
      "r": 252,
      "b": 172,
      "g": 137
    }, {
      "id": 674,
      "name": "Tiffany Blue",
      "hex": "#0ABAB5",
      "r": 10,
      "b": 181,
      "g": 186
    }, {
      "id": 675,
      "name": "Tiger eye",
      "hex": "#E08D3C",
      "r": 224,
      "b": 60,
      "g": 141
    }, {
      "id": 676,
      "name": "Timberwolf",
      "hex": "#DBD7D2",
      "r": 219,
      "b": 210,
      "g": 215
    }, {
      "id": 677,
      "name": "Titanium yellow",
      "hex": "#EEE600",
      "r": 238,
      "b": 0,
      "g": 230
    }, {
      "id": 678,
      "name": "Tomato",
      "hex": "#FF6347",
      "r": 255,
      "b": 71,
      "g": 99
    }, {
      "id": 679,
      "name": "Toolbox",
      "hex": "#746CC0",
      "r": 116,
      "b": 192,
      "g": 108
    }, {
      "id": 680,
      "name": "Topaz",
      "hex": "#FFC87C",
      "r": 255,
      "b": 124,
      "g": 200
    }, {
      "id": 681,
      "name": "Tractor red",
      "hex": "#FD0E35",
      "r": 253,
      "b": 53,
      "g": 14
    }, {
      "id": 682,
      "name": "Trolley Grey",
      "hex": "#808080",
      "r": 128,
      "b": 128,
      "g": 128
    }, {
      "id": 683,
      "name": "Tropical rain forest",
      "hex": "#00755E",
      "r": 0,
      "b": 94,
      "g": 117
    }, {
      "id": 684,
      "name": "True Blue",
      "hex": "#0073CF",
      "r": 0,
      "b": 207,
      "g": 115
    }, {
      "id": 685,
      "name": "Tufts Blue",
      "hex": "#417DC1",
      "r": 65,
      "b": 193,
      "g": 125
    }, {
      "id": 686,
      "name": "Tumbleweed",
      "hex": "#DEAA88",
      "r": 222,
      "b": 136,
      "g": 170
    }, {
      "id": 687,
      "name": "Turkish rose",
      "hex": "#B57281",
      "r": 181,
      "b": 129,
      "g": 114
    }, {
      "id": 688,
      "name": "Turquoise",
      "hex": "#30D5C8",
      "r": 48,
      "b": 200,
      "g": 213
    }, {
      "id": 689,
      "name": "Turquoise blue",
      "hex": "#00FFEF",
      "r": 0,
      "b": 239,
      "g": 255
    }, {
      "id": 690,
      "name": "Turquoise green",
      "hex": "#A0D6B4",
      "r": 160,
      "b": 180,
      "g": 214
    }, {
      "id": 691,
      "name": "Tuscan red",
      "hex": "#66424D",
      "r": 102,
      "b": 77,
      "g": 66
    }, {
      "id": 692,
      "name": "Twilight lavender",
      "hex": "#8A496B",
      "r": 138,
      "b": 107,
      "g": 73
    }, {
      "id": 693,
      "name": "Tyrian purple",
      "hex": "#66023C",
      "r": 102,
      "b": 60,
      "g": 2
    }, {
      "id": 694,
      "name": "UA blue",
      "hex": "#0033AA",
      "r": 0,
      "b": 170,
      "g": 51
    }, {
      "id": 695,
      "name": "UA red",
      "hex": "#D9004C",
      "r": 217,
      "b": 76,
      "g": 0
    }, {
      "id": 696,
      "name": "UCLA Blue",
      "hex": "#536895",
      "r": 83,
      "b": 149,
      "g": 104
    }, {
      "id": 697,
      "name": "UCLA Gold",
      "hex": "#FFB300",
      "r": 255,
      "b": 0,
      "g": 179
    }, {
      "id": 698,
      "name": "UFO Green",
      "hex": "#3CD070",
      "r": 60,
      "b": 112,
      "g": 208
    }, {
      "id": 699,
      "name": "UP Forest green",
      "hex": "#014421",
      "r": 1,
      "b": 33,
      "g": 68
    }, {
      "id": 700,
      "name": "UP Maroon",
      "hex": "#7B1113",
      "r": 123,
      "b": 19,
      "g": 17
    }, {
      "id": 701,
      "name": "USC Cardinal",
      "hex": "#990000",
      "r": 153,
      "b": 0,
      "g": 0
    }, {
      "id": 702,
      "name": "USC Gold",
      "hex": "#FFCC00",
      "r": 255,
      "b": 0,
      "g": 204
    }, {
      "id": 703,
      "name": "Ube",
      "hex": "#8878C3",
      "r": 136,
      "b": 195,
      "g": 120
    }, {
      "id": 704,
      "name": "Ultra pink",
      "hex": "#FF6FFF",
      "r": 255,
      "b": 255,
      "g": 111
    }, {
      "id": 705,
      "name": "Ultramarine",
      "hex": "#120A8F",
      "r": 18,
      "b": 143,
      "g": 10
    }, {
      "id": 706,
      "name": "Ultramarine blue",
      "hex": "#4166F5",
      "r": 65,
      "b": 245,
      "g": 102
    }, {
      "id": 707,
      "name": "Umber",
      "hex": "#635147",
      "r": 99,
      "b": 71,
      "g": 81
    }, {
      "id": 708,
      "name": "United Nations blue",
      "hex": "#5B92E5",
      "r": 91,
      "b": 229,
      "g": 146
    }, {
      "id": 709,
      "name": "University of California Gold",
      "hex": "#B78727",
      "r": 183,
      "b": 39,
      "g": 135
    }, {
      "id": 710,
      "name": "Unmellow Yellow",
      "hex": "#FFFF66",
      "r": 255,
      "b": 102,
      "g": 255
    }, {
      "id": 711,
      "name": "Upsdell red",
      "hex": "#AE2029",
      "r": 174,
      "b": 41,
      "g": 32
    }, {
      "id": 712,
      "name": "Urobilin",
      "hex": "#E1AD21",
      "r": 225,
      "b": 33,
      "g": 173
    }, {
      "id": 713,
      "name": "Utah Crimson",
      "hex": "#D3003F",
      "r": 211,
      "b": 63,
      "g": 0
    }, {
      "id": 714,
      "name": "Vanilla",
      "hex": "#F3E5AB",
      "r": 243,
      "b": 171,
      "g": 229
    }, {
      "id": 715,
      "name": "Vegas gold",
      "hex": "#C5B358",
      "r": 197,
      "b": 88,
      "g": 179
    }, {
      "id": 716,
      "name": "Venetian red",
      "hex": "#C80815",
      "r": 200,
      "b": 21,
      "g": 8
    }, {
      "id": 717,
      "name": "Verdigris",
      "hex": "#43B3AE",
      "r": 67,
      "b": 174,
      "g": 179
    }, {
      "id": 718,
      "name": "Vermilion",
      "hex": "#E34234",
      "r": 227,
      "b": 52,
      "g": 66
    }, {
      "id": 719,
      "name": "Veronica",
      "hex": "#A020F0",
      "r": 160,
      "b": 240,
      "g": 32
    }, {
      "id": 720,
      "name": "Violet",
      "hex": "#EE82EE",
      "r": 238,
      "b": 238,
      "g": 130
    }, {
      "id": 721,
      "name": "Violet Blue",
      "hex": "#324AB2",
      "r": 50,
      "b": 178,
      "g": 74
    }, {
      "id": 722,
      "name": "Violet Red",
      "hex": "#F75394",
      "r": 247,
      "b": 148,
      "g": 83
    }, {
      "id": 723,
      "name": "Viridian",
      "hex": "#40826D",
      "r": 64,
      "b": 109,
      "g": 130
    }, {
      "id": 724,
      "name": "Vivid auburn",
      "hex": "#922724",
      "r": 146,
      "b": 36,
      "g": 39
    }, {
      "id": 725,
      "name": "Vivid burgundy",
      "hex": "#9F1D35",
      "r": 159,
      "b": 53,
      "g": 29
    }, {
      "id": 726,
      "name": "Vivid cerise",
      "hex": "#DA1D81",
      "r": 218,
      "b": 129,
      "g": 29
    }, {
      "id": 727,
      "name": "Vivid tangerine",
      "hex": "#FFA089",
      "r": 255,
      "b": 137,
      "g": 160
    }, {
      "id": 728,
      "name": "Vivid violet",
      "hex": "#9F00FF",
      "r": 159,
      "b": 255,
      "g": 0
    }, {
      "id": 729,
      "name": "Warm black",
      "hex": "#004242",
      "r": 0,
      "b": 66,
      "g": 66
    }, {
      "id": 730,
      "name": "Waterspout",
      "hex": "#00FFFF",
      "r": 0,
      "b": 255,
      "g": 255
    }, {
      "id": 731,
      "name": "Wenge",
      "hex": "#645452",
      "r": 100,
      "b": 82,
      "g": 84
    }, {
      "id": 732,
      "name": "Wheat",
      "hex": "#F5DEB3",
      "r": 245,
      "b": 179,
      "g": 222
    }, {
      "id": 733,
      "name": "White",
      "hex": "#FFFFFF",
      "r": 255,
      "b": 255,
      "g": 255
    }, {
      "id": 734,
      "name": "White smoke",
      "hex": "#F5F5F5",
      "r": 245,
      "b": 245,
      "g": 245
    }, {
      "id": 735,
      "name": "Wild Strawberry",
      "hex": "#FF43A4",
      "r": 255,
      "b": 164,
      "g": 67
    }, {
      "id": 736,
      "name": "Wild Watermelon",
      "hex": "#FC6C85",
      "r": 252,
      "b": 133,
      "g": 108
    }, {
      "id": 737,
      "name": "Wild blue yonder",
      "hex": "#A2ADD0",
      "r": 162,
      "b": 208,
      "g": 173
    }, {
      "id": 738,
      "name": "Wine",
      "hex": "#722F37",
      "r": 114,
      "b": 55,
      "g": 47
    }, {
      "id": 739,
      "name": "Wisteria",
      "hex": "#C9A0DC",
      "r": 201,
      "b": 220,
      "g": 160
    }, {
      "id": 740,
      "name": "Xanadu",
      "hex": "#738678",
      "r": 115,
      "b": 120,
      "g": 134
    }, {
      "id": 741,
      "name": "Yale Blue",
      "hex": "#0F4D92",
      "r": 15,
      "b": 146,
      "g": 77
    }, {
      "id": 742,
      "name": "Yellow",
      "hex": "#FFFF00",
      "r": 255,
      "b": 0,
      "g": 255
    }, {
      "id": 743,
      "name": "Yellow Orange",
      "hex": "#FFAE42",
      "r": 255,
      "b": 66,
      "g": 174
    }, {
      "id": 744,
      "name": "Yellow green",
      "hex": "#9ACD32",
      "r": 154,
      "b": 50,
      "g": 205
    }, {
      "id": 745,
      "name": "Zaffre",
      "hex": "#0014A8",
      "r": 0,
      "b": 168,
      "g": 20
    }, {
      "id": 746,
      "name": "Zinnwaldite brown",
      "hex": "#2C1608",
      "r": 44,
      "b": 8,
      "g": 22
    }]
  },

  getters: {
    all(state) {
      return state.hues
    }
  },

  mutations: {

  },

  actions: {
    filter({
      state
    }, payload) {

      let {
        leads,
        hues,
        page
      } = payload;
      console.log('excluding', hues.length)

      // Last leader
      let lead = leads.slice(-1)[0] || {}

      let PAGE_SIZE = 4;
      let from = (page - 1) * PAGE_SIZE;
      let to = from + PAGE_SIZE

      return new Promise(function (resolve, reject) {

        let all = []

        // Cloning hues, to avoid mutating the state source
        Object.assign(all, state.hues);

        // Filtering out the colors already displayed
        let filtered = all.filter(x => !hues.some(y => y.id === x.id));

        // Sorting
        if (!lead.hex) {
          // Shuffle!
          filtered
            .sort((h1, h2) => {
              if (Math.random() > 0.5)
                return 1;
              return -1;
            });
        } else {
          // Sorting by the closest color
          filtered
            .sort((h1, h2) => {
              let precision1 = Math.abs(h1.r - lead.r) +
                Math.abs(h1.g - lead.g) +
                Math.abs(h1.b - lead.b);

              let precision2 = Math.abs(h2.r - lead.r) +
                Math.abs(h2.g - lead.g) +
                Math.abs(h2.b - lead.b);

              if (precision1 > precision2)
                return 1
              else
                return -1
            });
        }

        // Paginate
        let sliced = filtered.slice(from, to)

        resolve(sliced)

      })
    }
  }
}
