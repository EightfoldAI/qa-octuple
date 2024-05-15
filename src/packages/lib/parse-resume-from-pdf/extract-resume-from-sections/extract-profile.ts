import {
  textContainsLetter,
  textContainsLetterAndIsAllUpperCase,
  textItemIsBold,
} from '../group-lines-into-sections';
import { FeatureSet, ResumeSectionToLines, TextItem } from '../types';
import { getTextWithHighestFeatureScore } from './lib/match-scoring-system';
import { getSectionLinesByKeywords } from './lib/get-section-lines';

// TODO: make extraction/validation more robust
// Name
export const matchOnlyLetterSpaceOrPeriod = (item: TextItem) =>
  item.text.match(/^[A-Za-z\s\.]+$/);

// Email
export const matchEmail = (item: TextItem) =>
  item.text.match(/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/);
const textIncludesAtSymbol = (item: TextItem) => item.text.includes('@');

// Phone
export const matchPhone = (item: TextItem) =>
  item.text.match(/\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}/);
const textContainsNumberInParentheses = (item: TextItem) =>
  /\([0-9]+\)/.test(item.text);
export const textContainsNumber = (item: TextItem) => /[0-9]/.test(item.text);

// Location
export const matchCityAndState = (item: TextItem) =>
  item.text.match(/[A-Z][a-zA-Z\s]+,[A-Z]{2}/);

export const textIncludesComma = (item: TextItem) => item.text.includes(',');

// Url
export const matchUrl = (item: TextItem) => item.text.match(/\S+\.[a-z]+\/S+/);

const matchUrlHttpFallback = (item: TextItem) =>
  item.text.match(/https?:\/\/S+\.\S+/);

const matchUrlWwwFallback = (item: TextItem) =>
  item.text.match(/www\.\S+\.\S+/);
const textIncludesSlash = (item: TextItem) => item.text.includes('/');

//Summary
const textHasFourOrMoreWords = (item: TextItem) =>
  item.text.split(' ').length >= 4;

const NAME_FEATURE_SETS: FeatureSet[] = [
  [matchOnlyLetterSpaceOrPeriod, 3, true],
  [textItemIsBold, 2],
  [textContainsLetterAndIsAllUpperCase, 2],
  [textIncludesAtSymbol, -4],
  [textContainsNumber, -4],
  [textContainsNumberInParentheses, -4],
  [textIncludesSlash, -4],
  [textIncludesComma, -4],
  [textHasFourOrMoreWords, -2],
];

const EMAIL_FEATURE_SETS: FeatureSet[] = [
  [matchEmail, 4, true],
  [textItemIsBold, -1],
  [textContainsLetterAndIsAllUpperCase, -1],
  [textContainsNumberInParentheses, -4],
  [textIncludesComma, -4],
  [textIncludesSlash, -4],
  [textHasFourOrMoreWords, -4],
];

const PHONE_FEATURE_SETS: FeatureSet[] = [
  [matchPhone, 4, true],
  [textContainsLetter, -4],
];

const LOCATION_FEATURE_SETS: FeatureSet[] = [
  [matchCityAndState, 4, true],
  [textItemIsBold, -1],
  [textIncludesAtSymbol, -4],
  [textContainsNumberInParentheses, -3],
  [textIncludesSlash, -4],
];

const URL_FEATURE_SETS: FeatureSet[] = [
  [matchUrl, 4, true],
  [matchUrlHttpFallback, 3, true],
  [matchUrlWwwFallback, 3, true],
  [textItemIsBold, -1],
  [textIncludesAtSymbol, -4],
  [textContainsNumberInParentheses, -3],
  [textIncludesComma, -4],
  [textHasFourOrMoreWords, -4],
];

const SUMMARY_FEATURE_SETS: FeatureSet[] = [
  [textHasFourOrMoreWords, 4],
  [textItemIsBold, -1],
  [textIncludesAtSymbol, -4],
  [textContainsNumberInParentheses, -3],
  [matchCityAndState, -4, false],
];

export const extractProfile = (sections: ResumeSectionToLines) => {
  const lines = sections.profile || [];
  const textItems = lines.flat();

  const extractAndScore = (
    featureSets: FeatureSet[],
    useAllMatches?: boolean
  ) =>
    getTextWithHighestFeatureScore(
      textItems,
      featureSets,
      undefined,
      useAllMatches
    );

  const [name, nameScores] = extractAndScore(NAME_FEATURE_SETS);
  const [email, emailScores] = extractAndScore(EMAIL_FEATURE_SETS);
  const [phone, phoneScores] = extractAndScore(PHONE_FEATURE_SETS);
  const [location, locationScores] = extractAndScore(LOCATION_FEATURE_SETS);
  const [url, urlScores] = extractAndScore(URL_FEATURE_SETS);
  const [summary, summaryScores] = extractAndScore(SUMMARY_FEATURE_SETS, true);

  const joinTextItems = (textItems: TextItem[]) =>
    textItems.map((item) => item.text).join(' ');

  const getAndJoinSectionLines = (keywords: string[]) => {
    const sectionLines = getSectionLinesByKeywords(sections, keywords);
    return joinTextItems(sectionLines.flat());
  };

  const summarySection = getAndJoinSectionLines(['summary']);
  const objectiveSection = getAndJoinSectionLines(['objective']);

  return {
    profile: {
      name,
      email,
      phone,
      location,
      url,
      summary: summarySection || objectiveSection || summary,
    },
    profileScores: {
      name: nameScores,
      email: emailScores,
      phone: phoneScores,
      location: locationScores,
      url: urlScores,
      summary: summaryScores,
    },
  };
};
