import { Lines, TextItem } from '../../types';

export const BULLET_POINTS = [
  '⋅',
  '∙',
  '🞄',
  '•',
  '⦁',
  '⚫︎',
  '●',
  '⬤',
  '⚬',
  '○',
];

const bulletPointsSet = new Set(BULLET_POINTS);

const getFirstBulletPointLineIdx = (lines: Lines): number | undefined => {
  for (let i = 0; i < lines.length; i++) {
    for (let item of lines[i]) {
      if (
        Array.from(bulletPointsSet).some((bullet) => item.text.includes(bullet))
      ) {
        return i;
      }
    }
  }

  return undefined;
};

const doesNotContainNumbers = (str: string) => /^[^0-9]+$/.test(str);

const hasAtLeast8Words = (item: TextItem) =>
  item.text.split(/\s/).filter(doesNotContainNumbers).length >= 8;

export const getDescriptionLinesIdx = (lines: Lines): number | undefined => {
  let idx = getFirstBulletPointLineIdx(lines);

  if (idx === undefined) {
    idx = lines.findIndex(
      (line) => line.length === 1 && hasAtLeast8Words(line[0])
    );
  }

  return idx === -1 ? undefined : idx;
};

export const getBulletPointsFromLines = (lines: Lines): string[] => {
  const firstBulletPointLineIndex = getFirstBulletPointLineIdx(lines);
  if (firstBulletPointLineIndex === undefined) {
    return lines.map((line) => line.map((item) => item.text).join(' '));
  }

  let lineStr = lines.flat().reduce((acc, item) => {
    const text = item.text;
    if (!acc.endsWith(' ') && !text.startsWith(' ')) {
      acc += ' ';
    }
    return acc + text;
  }, '');

  const commonBulletPoint = getMostCommonBulletPoint(lineStr);

  const firstBulletPointIndex = lineStr.indexOf(commonBulletPoint);
  if (firstBulletPointIndex !== -1) {
    lineStr = lineStr.slice(firstBulletPointIndex);
  }

  return lineStr
    .split(commonBulletPoint)
    .map((text) => text.trim())
    .filter((text) => !!text);
};

const getMostCommonBulletPoint = (str: string): string => {
  const bulletToCount: { [bullet: string]: number } = BULLET_POINTS.reduce(
    (acc: { [bullet: string]: number }, curr) => {
      acc[curr] = 0;
      return acc;
    },
    {}
  );

  let bulletWithMostCount = BULLET_POINTS[0];
  let bulletMaxCount = 0;
  for (let char of str) {
    if (bulletToCount[char] !== undefined) {
      bulletToCount[char]++;
      if (bulletToCount[char] > bulletMaxCount) {
        bulletMaxCount = bulletToCount[char];
        bulletWithMostCount = char;
      }
    }
  }

  return bulletWithMostCount;
};
