import { FeatureSet, TextItem } from '../../types';
import { textIncludesComma } from '../extract-profile';

const textContainsYear = (item: TextItem) => /(?:19|20)\d{2}/.test(item.text);

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const textIncludesMonth = (item: TextItem) =>
  MONTHS.some(
    (month) =>
      item.text.includes(month) || item.text.includes(month.slice(0, 4))
  );

const SEASONS = ['Summer', 'Fall', 'Spring', 'Winter'];

const textIncludesSeason = (item: TextItem) =>
  SEASONS.some((season) => item.text.includes(season));

const textIncludesPresent = (item: TextItem) => item.text.includes('Present');

export const createTextInclusionChecker = (text: string) => (item: TextItem) =>
  item.text.includes(text);

export const DATE_FEATURE_SETS: FeatureSet[] = [
  [textContainsYear, 1],
  [textIncludesMonth, 1],
  [textIncludesSeason, 1],
  [textIncludesPresent, 1],
  [textIncludesComma, -1],
];
