//   {
//       "id": "424501215",
//       "segment": "i am a good boy",
//       "translation": "ஆன்லைன் தமிழ் மொழிபெயர்ப்பு ஆங்கிலம் பத்தி",
//       "source": "en-US",
//       "target": "ta-LK",
//       "quality": "68",
//       "reference": null,
//       "usage-count": 2,
//       "subject": "General",
//       "created-by": "MateCat",
//       "last-updated-by": "",
//       "create-date": "2014-09-27 03:47:39",
//       "last-update-date": "2014-09-27 03:47:39",
//       "match": 0.88
//     }

export type Translation = {
  id: string;
  segment: string;
  translation: string;
  source: string;
  target: string;
  quality: string;
  reference: string;
  usage_count: number;
  subject: string;
  created_by: string;
  last_updated_by: string;
  create_date: string;
  last_update_date: string;
  match: number;
};
const check: { match: number }[] = [
  {
    match: 0.88,
  },
  {
    match: 0.2,
  },
  {
    match: 0.5,
  },
  {
    match: 0.9,
  },
  {
    match: 0.1,
  },
];

const test = check.reduce((a, b) => (a.match > b.match ? a : b)).match;
console.log(test);
