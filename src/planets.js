export const Earth = {
  name: 'Earth',
  distance: 92960000,
  period: 1,
  layers: [
    {
      name: 'crust',
      radius: 4025,
      color: '#f0f9e8'
    },
    {
      name: 'mantle',
      radius: 4000,
      color: '#bae4bc'
    },
    {
      name: 'outerCore',
      radius: 2200,
      color: '#7bccc4'
    },
    {
      name: 'innerCore',
      radius: 800,
      color: '#2b8cbe'
    }
  ]
};
export const Sun = {
  name: 'Sun',
  distance: 0,
  period: 0,
  layers: [
    { name: 'Chromosphere', radius: 432718, color: '#ffffb2' },
    { name: 'Photosphere', radius: 428391, color: '#fecc5c' },
    { name: 'Radioactive Layer', radius: 285594, color: '#fd8d3c' },
    { name: 'Solar Core', radius: 142797, color: '#e31a1c' }
  ]
};
export const planets = [
  {
    name: 'Mercury',
    distance: 35980000,
    period: 0.24,
    layers: [
      { name: 'crust', radius: 1576, color: '#e5f5f9' },
      { name: 'mantle', radius: 1490, color: '#99d8c9' },
      { name: 'core', radius: 1118, color: '#2ca25f' }
    ]
  },
  {
    name: 'Venus',
    distance: 67240000,
    period: 0.62,
    layers: [{ name: 'crust', radius: 3759, color: '#9ebcda' }]
  },
  Earth,
  {
    name: 'Mars',
    distance: 143000000,
    period: 1.88,
    layers: [
      { name: 'crust', radius: 2106, color: '#e31a1c' },
      { name: 'core', radius: 1115, color: '#fdc086' }
    ]
  },
  {
    name: 'Jupiter',
    distance: 483800000,
    period: 11.86,
    layers: [
      { name: 'hydrogen', radius: 43441, color: '#feebe2' },
      { name: 'liquidHydrogen', radius: 42500, color: '#fbb4b9' },
      { name: 'heliumNeonRain', radius: 35000, color: '#f768a1' },
      { name: 'metallicHydrogen', radius: 30000, color: '#c51b8a' },
      { name: 'iceCore', radius: 12000, color: '#7a0177' }
    ]
  },
  {
    name: 'Saturn',
    distance: 888200000,
    period: 29.46,
    layers: [
      { name: 'gassyHydrogen', radius: 37448, color: '#ffffd4' },
      { name: 'liquidHydrogen', radius: 34000, color: '#fed98e' },
      { name: 'heliumRain', radius: 20000, color: '#fe9929' },
      { name: 'metallicHydrogen', radius: 17000, color: '#d95f0e' },
      { name: 'iceCore', radius: 6000, color: '#993404' }
    ]
  },
  {
    name: 'Uranus',
    distance: 1784000000,
    period: 84,
    layers: [{ name: 'surface', radius: 15759, color: '#bdd7e7' }]
  },
  {
    name: 'Neptune',
    distance: 2795000000,
    period: 165,
    layers: [
      { name: 'upperAtmosphere', radius: 15299, color: '#bdc9e1' },
      { name: 'atmosphere', radius: 15000, color: '#74a9cf' },
      { name: 'mantle', radius: 10000, color: '#2b8cbe' },
      { name: 'core', radius: 4000, color: '#045a8d' }
    ]
  },
  {
    name: 'Pluto',
    distance: 3670000000,
    period: 248,
    layers: [
      { name: 'frozenNitrogen', radius: 737, color: '#f0f0f0' },
      { name: 'waterIce', radius: 700, color: '#bdbdbd' },
      { name: 'rock', radius: 600, color: '#636363' }
    ]
  }
];
