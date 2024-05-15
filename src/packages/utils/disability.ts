export const disability: {
  answer: string;
}[] = [
  { answer: 'Yes, I have a disability, or have had one in the past' },
  { answer: 'No, I do not have a disability and have not had one in the past' },
  { answer: 'I do not want to answer' },
];

export const disabilityGroup: {
  ariaLabel: string;
  id: string;
  label: string;
  name: string;
  value: string;
}[] = [
  {
    ariaLabel: 'Yes, I have a disability, or have had one in the past',
    id: 'disability-0',
    label: 'Yes, I have a disability, or have had one in the past',
    name: 'disability',
    value: 'Yes, I have a disability, or have had one in the past',
  },
  {
    ariaLabel:
      'No, I do not have a disability and have not had one in the past',
    id: 'disability-1',
    label: 'No, I do not have a disability and have not had one in the past',
    name: 'disability',
    value: 'No, I do not have a disability and have not had one in the past',
  },
  {
    ariaLabel: 'I do not want to answer',
    id: 'disability-2',
    label: 'I do not want to answer',
    name: 'disability',
    value: 'I do not want to answer',
  },
];
