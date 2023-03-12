export interface MarkerData {
  name: string;
  refName: string;
  videoURL: string;
  coordinates: [number, number];
}

export const markers: MarkerData[] = [
  {
    name: "La Vallée des Esprits - [Récits d'Aventures Tyriennes #1]",
    refName: 'spirit-vale',
    videoURL: 'https://www.youtube.com/watch?v=Y9tSGmFcwBA',
    coordinates: [-226, 286],
  },
  {
    name: "Le Passage de la Rédemption - [Récits d'Aventures Tyriennes #2]",
    refName: 'passage-redemption',
    videoURL: 'https://www.youtube.com/watch?v=FuZtRms6WVg',
    coordinates: [-228, 279],
  },
  {
    name: "La Forteresse des Fidèles - [Récits d'Aventures Tyriennes #3]",
    refName: 'stronghold-faithful',
    videoURL: 'https://www.youtube.com/watch?v=UIAt9eVKRQQ',
    coordinates: [-227.87, 273.6],
  },
];
