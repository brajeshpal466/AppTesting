//@ts-nocheck
import namor from 'namor';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    project: namor.generate({ words: 1, numbers: 0 }),
    startOn: namor.generate({ words: 1, numbers: 0 }),
    build: namor.generate({ words: 1, numbers: 0 }),
    script: namor.generate({ words: 1, numbers: 0 }),
    device: namor.generate({ words: 1, numbers: 0 }),
    user: namor.generate({ words: 1, numbers: 0 }),
    id: Math.floor(Math.random() * 9),

    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
