'use client';

import React, {
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {
  Button,
  ButtonVariant,
  CheckBox,
  CheckBoxGroup,
  CheckboxValueType,
  Col,
  Form,
  Grid,
  Layout,
  Link,
  LinkButton,
  LinkButtonVariant,
  List,
  RadioGroup,
  Row,
  Select,
  SelectOption,
  SelectShape,
  snack,
  SnackbarContainer,
  Stack,
  TextArea,
  TextInput,
  TextInputShape,
  TextInputWidth,
  UploadFile,
  UploadProps,
} from '@eightfold.ai/octuple';
import AppFooter from '@/modules/Shared/components/AppFooter';
import { UploadModal } from '@/modules/Shared/components/UploadModal/UploadModal';
import { AppProps, PCSNavItem } from '@/packages/utils/mockdata.types';
import {
  samplePCSNavigationList,
  sampleRoleList,
} from '@/packages/utils/mockdata';
import { canUseDom } from '@/packages/utils/canUseDom';
import { countries } from '@/packages/utils/countries';
import { disabilityGroup } from '@/packages/utils/disability';
import { gender } from '@/packages/utils/gender';
import { langs } from '@/packages/utils/langs';
import { pepAffiliated, pepRelationship, pepSelf } from '@/packages/utils/pep';
import { raceAndEthnicityGroup } from '@/packages/utils/raceAndEthnicity';
import { usstates } from '@/packages/utils/usstates';
import { vevraa } from '@/packages/utils/vevraa';
import {
  requireSponsorship,
  usWorkAuthorization,
} from '@/packages/utils/usWorkAuthorization';
import {
  directSourceGroup,
  eventsGroup,
  jobBoardGroup,
  networks,
  socialMediaGroup,
} from '@/packages/utils/networks';
import { usePreviousState } from '@/packages/hooks/usePreviousState';
import { mergeClasses } from '@/packages/utils/mergeClasses';
import { prevEmployment } from '@/packages/utils/prevEmployment';
import { extractResumeFromSections } from '@/packages/lib/parse-resume-from-pdf/extract-resume-from-sections';
import { groupLinesIntoSections } from '@/packages/lib/parse-resume-from-pdf/group-lines-into-sections';
import { groupTextItemsIntoLines } from '@/packages/lib/parse-resume-from-pdf/group-text-items-into-lines';
import { readPdf } from '@/packages/lib/parse-resume-from-pdf/read-pdf';
import { TextItems } from '@/packages/lib/parse-resume-from-pdf/types';
import { parseResumeFromPdf } from '@/packages/lib/parse-resume-from-pdf';
import { deepClone } from '@/packages/lib/parse-resume-from-pdf/deep-clone';
import { ShowForm, initialSettings } from '@/packages/lib/redux/settingsSlice';
import {
  getHasUsedAppBefore,
  saveStateToLocalStorage,
} from '@/packages/lib/redux/local-storage';

// TODO: Export from Octuple
import { Breakpoint } from '@eightfold.ai/octuple/lib/shared/utilities';
import {
  RadioButtonProps,
  RadioButtonValue,
} from '@eightfold.ai/octuple/lib/components/RadioButton';

const { Content, Header, Nav, Section } = Layout;

const { useBreakpoint } = Grid;

import styles from './pcsapply.module.css';

function PCSApply(_props: PropsWithChildren<AppProps>) {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const router: AppRouterInstance = useRouter();
  const screens: Partial<Record<Breakpoint, boolean>> = useBreakpoint();

  const isDesktop: boolean | undefined = screens.md;

  const [preferredName, setPreferredName] = useState<boolean>(false);
  const [uploadModalVisible, setUploadModalVisible] = useState<boolean>(false);

  const [selectedRole, setSelectedRole] = useState<number | undefined>(0);

  const [nda, setNda] = useState<boolean>(false);
  const previousNda: boolean = usePreviousState(nda);
  const [privacy, setPrivacy] = useState<boolean>(false);
  const previousPrivacy: boolean = usePreviousState(privacy);
  const [myRaceAndEthnicity, setMyRaceAndEthnicity] = useState<
    CheckboxValueType[]
  >([]);
  const previousMyRaceAndEthnicity: CheckboxValueType[] =
    usePreviousState(myRaceAndEthnicity);
  const [disability, setDisability] = useState<RadioButtonValue | undefined>(
    ''
  );
  const previousDisability: RadioButtonValue | undefined =
    usePreviousState(disability);
  const [network, setNetwork] = useState<RadioButtonValue | undefined>('');
  const previousNetwork: RadioButtonValue | undefined =
    usePreviousState(network);
  const [myCountry, setMyCountry] = useState<SelectOption | undefined>(
    undefined
  );
  const previousMyCountry: SelectOption | undefined =
    usePreviousState(myCountry);
  const [myCountryDialCode, setMyCountryDialCode] = useState<
    SelectOption | undefined
  >(undefined);
  const previousMyCountryDialCode: SelectOption | undefined =
    usePreviousState(myCountryDialCode);
  const [myGender, setMyGender] = useState<SelectOption | undefined>(undefined);
  const previousMyGender: SelectOption | undefined = usePreviousState(myGender);
  const defaultLang = langs.find((lang) => lang.name === 'English');
  const [myLang, setMyLang] = useState<SelectOption | undefined>(undefined);
  const previousMyLang: SelectOption | undefined = usePreviousState(myLang);
  const [myNetwork, setMyNetwork] = useState<SelectOption | undefined>(
    undefined
  );
  const previousMyNetwork: SelectOption | undefined =
    usePreviousState(myNetwork);
  const [myPepAffiliation, setMyPepAffiliation] = useState<
    SelectOption | undefined
  >(undefined);
  const previousMyPepAffiliation: SelectOption | undefined =
    usePreviousState(myPepAffiliation);
  const [myPepAffiliationDetails, setMyPepAffiliationDetails] = useState<
    string | undefined
  >(undefined);
  const previousMyPepAffiliationDetails: string | undefined = usePreviousState(
    myPepAffiliationDetails
  );
  const [myPepRelationship, setMyPepRelationship] = useState<
    SelectOption | undefined
  >(undefined);
  const previousMyPepRelationship: SelectOption | undefined =
    usePreviousState(myPepRelationship);
  const [myPepRelationshipDetails, setMyPepRelationshipDetails] = useState<
    string | undefined
  >(undefined);
  const previousMyPepRelationshipDetails: SelectOption | undefined =
    usePreviousState(myPepRelationshipDetails);
  const [myPepSelf, setMyPepSelf] = useState<SelectOption | undefined>(
    undefined
  );
  const previousMyPepSelf: SelectOption | undefined =
    usePreviousState(myPepSelf);
  const [myPrevEmployment, setMyPrevEmployment] = useState<
    SelectOption | undefined
  >(undefined);
  const previousMyPrevEmployment: SelectOption | undefined =
    usePreviousState(myPrevEmployment);
  const [mySponsorshipRequirement, setMySponsorshipRequirement] = useState<
    SelectOption | undefined
  >(undefined);
  const previousMySponsorshipRequirement: SelectOption | undefined =
    usePreviousState(mySponsorshipRequirement);
  const [myUSState, setMyUSState] = useState<SelectOption | undefined>(
    undefined
  );
  const previousMyUSState: SelectOption | undefined =
    usePreviousState(myUSState);
  const [myUsWorkAuthorization, setMyUsWorkAuthorization] = useState<
    SelectOption | undefined
  >(undefined);
  const previousMyUsWorkAuthorization: SelectOption | undefined =
    usePreviousState(myUsWorkAuthorization);
  const [myVeteranStatus, setMyVeteranStatus] = useState<
    SelectOption | undefined
  >(undefined);
  const previousMyVeteranStatus: SelectOption | undefined =
    usePreviousState(myVeteranStatus);

  const defaultDialCode = countries.find(
    (country) => country.name === 'United States'
  );

  const [visibleStepFilter, setVisibleStepFilter] = useState<{
    [x: string]: boolean;
  }>({});
  const currentStep = Object.keys(visibleStepFilter)?.[0] || '';

  const toggleStepFilterVisibility = ({
    key,
    value,
  }: {
    key: string;
    value: boolean;
  }) => {
    setVisibleStepFilter({ [key]: value });
  };

  /**
   * Mock the selected role for the user via a query string.
   */
  useMemo(() => {
    if (searchParams) {
      const parsedParam = searchParams.get('index');
      console.log('Role index search param value', parsedParam);
      const roleIndex: number = parseInt(parsedParam ?? '0', 10) ?? 0;
      setSelectedRole(roleIndex);
      console.log('Selected Role', selectedRole);
      toggleStepFilterVisibility({ key: 'step one', value: true });
    }
  }, []);

  // TODO: Implement the following functions to handle the form steps if needed.
  // const getNextStep = (): string => {
  //   switch (currentStep) {
  //     case 'step one':
  //       return 'step two';
  //     default:
  //       return 'step two';
  //   }
  // };

  // const getPreviousStep = (): string => {
  //   switch (currentStep) {
  //     case 'step two':
  //       return 'step one';
  //     default:
  //       return 'step one';
  //   }
  // };

  /**
   * Log the current mock state of the select components to the console.
   * Also ensures state updates are not missed.
   * This may be done in a more sophisticated way in vscode apps to execute API calls.
   * We may also validate the form fields using custom props here.
   */
  useEffect(() => {
    console.log('currentStep', currentStep);
  }, [currentStep]);
  useEffect(() => {
    console.log('network', network);
    if (network !== previousNetwork) {
      form.validateFields(['source']);
    }
  }, [network]);
  useEffect(() => {
    console.log('disability', disability);
    if (disability !== previousDisability) {
      form.validateFields(['disability']);
    }
  }, [disability]);
  useEffect(() => {
    if (!previousNda) {
      return;
    }
    console.log('nda', nda);
    if (nda !== previousNda) {
      form.validateFields(['nda']);
    }
  }, [nda]);
  useEffect(() => {
    if (!previousPrivacy) {
      return;
    }
    console.log('privacy', privacy);
    if (privacy !== previousPrivacy) {
      form.validateFields(['pii']);
    }
  }, [privacy]);
  useEffect(() => {
    console.log('country', myCountry);
    if (myCountry !== previousMyCountry) {
      form.validateFields(['country']);
    }
  }, [myCountry]);
  useEffect(() => {
    console.log('dialCode', myCountryDialCode);
    if (myCountryDialCode !== previousMyCountryDialCode) {
      form.validateFields(['dialcode']);
    }
  }, [myCountryDialCode]);
  useEffect(() => {
    console.log('my gender', myGender);
    if (myGender !== previousMyGender) {
      form.validateFields(['gender']);
    }
  }, [myGender]);
  useEffect(() => {
    console.log('lang', myLang);
    if (myLang !== previousMyLang) {
      form.validateFields(['language']);
    }
  }, [myLang]);
  useEffect(() => {
    console.log('network', myNetwork);
    if (myNetwork !== previousMyNetwork) {
      form.validateFields(['networking']);
    }
  }, [myNetwork]);
  useEffect(() => {
    console.log('pep affiliation', myPepAffiliation);
    if (myPepAffiliation !== previousMyPepAffiliation) {
      form.validateFields(['pepaffiliation']);
    }
  }, [myPepAffiliation]);
  useEffect(() => {
    console.log('pep affiliation details', myPepAffiliationDetails);
    if (myPepAffiliationDetails !== previousMyPepAffiliationDetails) {
      form.validateFields(['pepaffiliationdetails']);
    }
  }, [myPepAffiliationDetails]);
  useEffect(() => {
    console.log('pep relationship', myPepRelationship);
    if (myPepRelationship !== previousMyPepRelationship) {
      form.validateFields(['peprelationship']);
    }
  }, [myPepRelationship]);
  useEffect(() => {
    console.log('pep relationship details', myPepRelationshipDetails);
    if (myPepRelationshipDetails !== previousMyPepRelationshipDetails) {
      form.validateFields(['peprelationshipdetails']);
    }
  }, [myPepRelationshipDetails]);
  useEffect(() => {
    console.log('pep self', myPepSelf);
    if (myPepSelf !== previousMyPepSelf) {
      form.validateFields(['pepselfidentification']);
    }
  }, [myPepSelf]);
  useEffect(() => {
    console.log('previous employment', myPrevEmployment);
    if (myPrevEmployment !== previousMyPrevEmployment) {
      form.validateFields(['prevemployment']);
    }
  }, [myPrevEmployment]);
  useEffect(() => {
    if (!previousMyRaceAndEthnicity) {
      return;
    }
    console.log('race/ethnicity', myRaceAndEthnicity);
    if (myRaceAndEthnicity !== previousMyRaceAndEthnicity) {
      form.validateFields(['raceandethnicity']);
    }
  }, [myRaceAndEthnicity]);
  useEffect(() => {
    console.log('us state', myUSState);
    if (myUSState !== previousMyUSState) {
      form.validateFields(['usstate']);
    }
  }, [myUSState]);
  useEffect(() => {
    console.log('veteran status', myVeteranStatus);
    if (myVeteranStatus !== previousMyVeteranStatus) {
      form.validateFields(['vevraa']);
    }
  }, [myVeteranStatus]);
  useEffect(() => {
    console.log('sponsorship requirement', mySponsorshipRequirement);
    if (mySponsorshipRequirement !== previousMySponsorshipRequirement) {
      form.validateFields(['sponsorshiprequirement']);
    }
  }, [mySponsorshipRequirement]);
  useEffect(() => {
    console.log('us work authorization', myUsWorkAuthorization);
    if (myUsWorkAuthorization !== previousMyUsWorkAuthorization) {
      form.validateFields(['usworkauthorization']);
    }
  }, [myUsWorkAuthorization]);

  /**
   * From here we mock the language selection.
   */
  const languageOptions: SelectOption[] = Object.keys(langs).map((k) => ({
    disabled: (langs as any)[k].name !== 'English' ? true : false,
    text: (langs as any)[k].name,
    value: (langs as any)[k].name,
  }));

  const onLangSelectChange = (options: SelectOption[]) => {
    options.forEach((option) => {
      const selectedLang = option;
      setMyLang(selectedLang);
    });
  };

  /**
   * From here we mock the job description.
   */
  const getSelectedJobTitle = (): string | undefined => {
    if (selectedRole === undefined) {
      return undefined;
    }
    const jobTitle = sampleRoleList[selectedRole]?.title;
    return jobTitle;
  };

  /**
   * From here we mock the country selection.
   */
  const dialCodeOptions: SelectOption[] = Object.keys(countries).map((k) => ({
    text: (countries as any)[k].dial_code,
    value: (countries as any)[k].dial_code,
  }));
  const countryDialCodeOptions: SelectOption[] = Object.keys(countries).map(
    (k) => ({
      text: `${(countries as any)[k].name} ${(countries as any)[k].dial_code}`,
      value: `${(countries as any)[k].name} ${(countries as any)[k].dial_code}`,
    })
  );
  const countryNameOptions: SelectOption[] = Object.keys(countries).map(
    (k) => ({
      text: (countries as any)[k].name,
      value: (countries as any)[k].name,
    })
  );

  const onCountryDialCodeSelectChange = (options: SelectOption[]) => {
    options.forEach((option) => {
      const selectedCountryDialCode = option;
      setMyCountryDialCode(selectedCountryDialCode);
    });
  };

  const onCountrySelectChange = (options: SelectOption[]) => {
    options.forEach((option) => {
      const selectedCountryName = option;
      setMyCountry(selectedCountryName);
    });
  };

  const onPreferredNameSelectionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPreferredName(e?.target.checked);
  };

  const onPrivacySelectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacy(e?.target.checked);
  };

  const onNdaSelectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNda(e?.target.checked);
  };

  /**
   * From here we mock the US state selection.
   */
  const usStateNameOptions: SelectOption[] = Object.keys(usstates).map((k) => ({
    text: (usstates as any)[k].name,
    value: (usstates as any)[k].name,
  }));

  const onUSStateSelectChange = (options: SelectOption[]) => {
    options.forEach((option) => {
      const selectedUSState = option;
      setMyUSState(selectedUSState);
    });
  };

  /**
   * From here we mock the networking selection.
   */
  const networkOptions: SelectOption[] = Object.keys(networks).map((k) => ({
    text: (networks as any)[k].network,
    value: (networks as any)[k].network,
  }));

  const onNetworkSelectChange = (options: SelectOption[]) => {
    options.forEach((option) => {
      const selectedNetwork = option;
      setMyNetwork(selectedNetwork);
    });
  };

  const getNetworkRadioGroupItems = (): RadioButtonProps[] => {
    switch (myNetwork) {
      case 'Direct Source Candidates' as SelectOption:
        return directSourceGroup;
      case 'Events' as SelectOption:
        return eventsGroup;
      case 'Job board' as SelectOption:
        return jobBoardGroup;
      case 'Social Media' as SelectOption:
        return socialMediaGroup;
      default:
        return directSourceGroup;
    }
  };

  const changeNetworkGroupHandler = (
    e?: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNetwork(e?.target.value);
  };

  /**
   * From here we mock the race/ethnicity selection.
   */
  const changeRaceAndEthnicityGroupHandler = (
    checkedValue: CheckboxValueType[]
  ): void => {
    console.log('checkedValue', [...checkedValue]);
    setMyRaceAndEthnicity([...checkedValue]);
  };

  /**
   * From here we mock the prev employee selection.
   */
  const prevEmpolymentOptions: SelectOption[] = Object.keys(prevEmployment).map(
    (k) => ({
      text: (prevEmployment as any)[k].choice,
      value: (prevEmployment as any)[k].choice,
    })
  );

  const onPrevEmploymentSelectChange = (options: SelectOption[]) => {
    options.forEach((option) => {
      const prevEmployment = option;
      setMyPrevEmployment(prevEmployment);
    });
  };

  /**
   * From here we mock the VEVRAA selection.
   */
  const vevraaOptions: SelectOption[] = Object.keys(vevraa).map((k) => ({
    text: (vevraa as any)[k].status,
    value: (vevraa as any)[k].status,
  }));

  const onVevraaSelectChange = (options: SelectOption[]) => {
    options.forEach((option) => {
      const selectedStatus = option;
      setMyVeteranStatus(selectedStatus);
    });
  };

  /**
   * From here we mock the gender selection.
   */
  const genderOptions: SelectOption[] = Object.keys(gender).map((k) => ({
    text: (gender as any)[k].identity,
    value: (gender as any)[k].identity,
  }));

  const onGenderSelectChange = (options: SelectOption[]) => {
    options.forEach((option) => {
      const selectedGender = option;
      setMyGender(selectedGender);
    });
  };

  /**
   * From here we mock any readonly date.
   */
  const getToday = (): string => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  };

  /**
   * From here we mock the disability selection.
   */
  const changeDisabilityGroupHandler = (
    e?: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDisability(e?.target.value);
  };

  /**
   * From here we mock the pep selections.
   */
  const pepAffiliationOptions: SelectOption[] = Object.keys(pepAffiliated).map(
    (k) => ({
      text: (pepAffiliated as any)[k].choice,
      value: (pepAffiliated as any)[k].choice,
    })
  );

  const onPepAffiliationSelectChange = (options: SelectOption[]) => {
    options.forEach((option) => {
      const selectedPepAffiliation = option;
      setMyPepAffiliation(selectedPepAffiliation);
    });
  };

  const pepRelationshipOptions: SelectOption[] = Object.keys(
    pepRelationship
  ).map((k) => ({
    text: (pepRelationship as any)[k].choice,
    value: (pepRelationship as any)[k].choice,
  }));

  const onPepRelationshipSelectChange = (options: SelectOption[]) => {
    options.forEach((option) => {
      const selectedPepRelationship = option;
      setMyPepRelationship(selectedPepRelationship);
    });
  };

  const pepSelfOptions: SelectOption[] = Object.keys(pepSelf).map((k) => ({
    text: (pepSelf as any)[k].choice,
    value: (pepSelf as any)[k].choice,
  }));

  const onPepSelfSelectChange = (options: SelectOption[]) => {
    options.forEach((option) => {
      const selectedPepSelf = option;
      setMyPepSelf(selectedPepSelf);
    });
  };

  /**
   * From here we mock the US work authorization selection.
   */
  const usWorkAuthorizationOptions: SelectOption[] = Object.keys(
    usWorkAuthorization
  ).map((k) => ({
    text: (usWorkAuthorization as any)[k].choice,
    value: (usWorkAuthorization as any)[k].choice,
  }));

  const onUsWorkAuthorizationSelectChange = (options: SelectOption[]) => {
    options.forEach((option) => {
      const selectedUsWorkAuthorization = option;
      setMyUsWorkAuthorization(selectedUsWorkAuthorization);
    });
  };

  /**
   * From here we mock the US sponsorship requirement selection.
   */
  const sponsorshipRequirementOptions: SelectOption[] = Object.keys(
    requireSponsorship
  ).map((k) => ({
    text: (requireSponsorship as any)[k].choice,
    value: (requireSponsorship as any)[k].choice,
  }));

  const onSponsorshipRequirementSelectChange = (options: SelectOption[]) => {
    options.forEach((option) => {
      const selectedSponsorshipRequirement = option;
      setMySponsorshipRequirement(selectedSponsorshipRequirement);
    });
  };

  /**
   * From here we mock the PEP Affiliation Details.
   */
  const onPepAffiliationDetailsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMyPepAffiliationDetails(e?.target.value);
  };

  /**
   * From here we mock the PEP Relationship Details.
   */
  const onPepRelationshipDetailsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMyPepRelationshipDetails(e?.target.value);
  };

  /**
   * From here we mock the upload resume functionality.
   */
  const defaultFileState = {
    name: '',
    size: 0,
    fileUrl: '',
  };

  const [data, setData] = useState<Record<string, unknown>>({});
  const [file, setFile] = useState(defaultFileState);
  const [hasNonPdfFile, setHasNonPdfFile] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [fileName, setFileName] = useState<string>('');
  const [fileUploaded, setFileUploaded] = useState<boolean | undefined>(false);
  const [fileUrl, setFileUrl] = useState('');
  const [textItems, setTextItems] = useState<TextItems>([]);
  const lines = groupTextItemsIntoLines(textItems || []);
  const sections = groupLinesIntoSections(lines);
  const resume = extractResumeFromSections(sections);

  const [firstName, setFirstName] = useState<string | undefined>(undefined);
  const [lastName, setLastName] = useState<string | undefined>(undefined);
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);

  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function parse() {
      if (!fileUrl) {
        return;
      }
      const textItems = await readPdf(fileUrl);
      setTextItems(textItems);
    }
    parse();
    console.log('fileUrl', fileUrl);
    console.log('Resume', resume);
  }, [fileUrl]);

  useEffect(() => {
    if (!resume.profile?.name) {
      return;
    }
    setFirstName(resume.profile?.name.split(' ')[0]);
    setLastName(resume.profile?.name.split(' ').pop());
    setPhone(resume.profile?.phone);

    console.log('First name', firstName);
    if (firstNameInputRef.current) {
      firstNameInputRef.current.value = `${firstName}`;
    }
    console.log('Last name', lastName);
    if (lastNameInputRef.current) {
      lastNameInputRef.current.value = `${lastName}`;
    }
    console.log('Phone', phone);
    if (phoneInputRef.current) {
      phoneInputRef.current.value = `${phone}`;
    }

    const emailRegex = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    const emailMatch = resume.profile?.email.match(emailRegex);
    if (emailMatch) {
      const parsedEmail = emailMatch[0];
      setEmail(parsedEmail);
      console.log('Email', parsedEmail);
      if (emailInputRef.current) {
        emailInputRef.current.value = `${email}`;
      }
    } else {
      console.log('No valid email found in', resume.profile?.email);
    }
  }, [resume]);

  useEffect(() => {
    console.log('firstName', firstName);
    if (firstName) {
      form.validateFields(['first']);
    }
  }, [firstName]);
  useEffect(() => {
    console.log('lastName', lastName);
    if (lastName) {
      form.validateFields(['last']);
    }
  }, [lastName]);
  useEffect(() => {
    console.log('email', email);
    if (email) {
      form.validateFields(['email']);
    }
  }, [email]);
  useEffect(() => {
    console.log('phone', phone);
    if (phone) {
      form.validateFields(['phone']);
    }
  }, [phone]);

  const onImport = async () => {
    const resume = await parseResumeFromPdf(file.fileUrl);
    if (!resume) {
      return
    }
    const settings = deepClone(initialSettings);
    if (getHasUsedAppBefore()) {
      const sections = Object.keys(settings.formToShow) as ShowForm[];
      const sectionToFormToShow: Record<ShowForm, boolean> = {
        workExperience: resume.workExperience.length > 0,
        education: resume.education.length > 0,
        projects: resume.projects.length > 0,
        skills: resume.skills.description.length > 0,
        custom: resume.custom.description.length > 0,
      };
      for (const section of sections) {
        settings.formToShow[section] = sectionToFormToShow[section];
      }
    }
    saveStateToLocalStorage({ resume, settings });
    router.push('/pcs/loggedout?firstRun=1'); // TODO update rout to profile builder and redux the parsed resume.
  };

  const setNewFile = (newFile: File) => {
    if (file.fileUrl) {
      URL.revokeObjectURL(file.fileUrl);
    }

    const { name, size } = newFile;
    const fileUrl = URL.createObjectURL(newFile);
    setFile({ name, size, fileUrl });
  };

  const uploadProps: UploadProps = {
    listType: 'picture',
    maxCount: 1,
    name: 'file',
    onChange(info) {
      const { status } = info.file;
      console.log('info', info.file);
      if (status === 'uploading') {
        console.log(info.file, info.fileList);
        if (info.file.originFileObj && canUseDom()) {
          setFileName(`${info.file.name}`);
          setFileUrl(
            (window?.URL ? URL : webkitURL).createObjectURL(
              info.file.originFileObj
            )
          );
          const newFile = info.file.originFileObj as File;
          setNewFile(newFile);
        }
      }
      if (status === 'done') {
        snack.servePositive({
          content: `${info.file.name} file uploaded successfully`,
        });
        setFileUploaded(true);
      } else if (status === 'error') {
        snack.serveDisruptive({
          closable: true,
          content: hasNonPdfFile
            ? 'Only pdf file is supported in this prototype'
            : `${info.file.name} file upload failed.`,
        });
      } else if (status === 'removed') {
        const resetData = async () => {
          setFileList([]);
          setData({});
        };
        resetData().catch(console.error);
        setFileUploaded(false);
        setFileUrl('');
      }
    },
    onDrop(e) {
      console.log('Dropped files', e?.dataTransfer.files);
      e?.preventDefault();
      const newFile = e?.dataTransfer.files[0];
      if (newFile.name.endsWith('.pdf')) {
        setHasNonPdfFile(false);
        setNewFile(newFile);
      } else {
        setHasNonPdfFile(true);
      }
    },
    onRemove(_file) {
      setFile(defaultFileState);
      const resetData = async () => {
        setFileList([]);
        setData({});
      };
      resetData().catch(console.error);
      setFileUploaded(false);
      setFileUrl('');
    },
    showUploadList: {
      removeIconButtonType: 'button',
      showRemoveIconButton: true,
    },
  };

  /**
   * From here we mock the Form validation.
   */
  const [submittable, setSubmittable] = useState<boolean>(false);

  const [form] = Form.useForm();
  //const values = Form.useWatch([], form);

  const formLayout = {
    labelCol: { push: isDesktop ? 3 : 0, span: isDesktop ? 6 : 12 },
    wrapperCol: { push: isDesktop ? 3 : 0, span: isDesktop ? 6 : 12 },
  };

  useEffect(() => {
    if (!submittable) {
      return;
    }
    if (submittable) {
      onImport();
    } else {
      snack.serveDisruptive({
        closable: true,
        content: 'Please fill in all required fields.',
      });
    }
  }, [submittable]);

  useEffect(() => {
    if (!fileUploaded) {
      return;
    }
    console.log('File uploaded', fileUploaded);
    console.log('File name', fileName);
    form.validateFields(['resume']);
  }, [fileUploaded]);

  const onFinish = (values: any) => {
    console.log(values);
    form
      .validateFields()
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  };

  const onReset = () => {
    form.resetFields();
  };

  /**
   * Validation may be done using any state variable or object
   * It's super powerful and flexible.
   */
  const ndaValidator = () => {
    if (nda) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('NDA terms is required'));
  };
  const privacyValidator = () => {
    if (privacy) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Privacy Statement consent is required'));
  };
  const uploadValidator = () => {
    if (fileUploaded) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Resume is required'));
  };
  const networkingValidator = () => {
    if (myNetwork) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('How did you hear about us? is required'));
  };
  const phoneCodeValidator = () => {
    if (myCountryDialCode) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Country phone code is required'));
  };
  const pepAffiliationValidator = () => {
    if (myPepAffiliation) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('PEP Affiliation is required'));
  };
  const pepAffiliationDetailsValidator = () => {
    if (myPepAffiliationDetails) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('PEP Affiliation Details is required'));
  };
  const pepRelationshipValidator = () => {
    if (myPepRelationship) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('PEP Relationship is required'));
  };
  const pepRelationshipDetailsValidator = () => {
    if (myPepRelationshipDetails) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('PEP Relationship Details is required'));
  };
  const pepSelfValidator = () => {
    if (myPepSelf) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('PEP Self Identification is required'));
  };
  const prevEmploymentValidator = () => {
    if (myPrevEmployment) {
      return Promise.resolve();
    }
    return Promise.reject(
      new Error(
        'Are you a previous Employee of Eightfold or any of its subsidiaries? is required'
      )
    );
  };
  const raceAndEthnicityValidator = () => {
    if (myRaceAndEthnicity?.length > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Race/Ethnicity is required'));
  };
  const countryValidator = () => {
    if (myCountry) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Country is required'));
  };
  const usStateValidator = () => {
    if (myUSState) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('State is required'));
  };
  const vevraaValidator = () => {
    if (myVeteranStatus) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Veteran Status is required'));
  };
  const genderValidator = () => {
    if (myGender) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Gender is required'));
  };
  const langValidator = () => {
    if (myLang) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Language is required'));
  };
  const usWorkAuthorizationValidator = () => {
    if (myUsWorkAuthorization) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('US Work Authorization is required'));
  };
  const sponsorshipRequirementValidator = () => {
    if (mySponsorshipRequirement) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Sponsorship Requirement is required'));
  };
  const firstNameValidator = () => {
    if (firstName) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('First name is required'));
  };
  const lastNameValidator = () => {
    if (lastName) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Last name is required'));
  };
  const phoneValidator = () => {
    if (phone) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Phone is required'));
  };
  const emailValidator = () => {
    if (email) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Email is required'));
  };

  return (
    <Layout classNames="octuple">
      <Nav
        aria-label="Main navigation"
        classNames="pcsApplyNav"
        style={{
          flexDirection: !isDesktop ? 'column' : 'row',
          justifyContent: !isDesktop ? 'center' : 'flex-end',
          height: !isDesktop ? '240px' : '80px',
        }}
      >
        <List
          items={samplePCSNavigationList}
          itemProps={{ role: 'none' }}
          layout={!isDesktop ? 'vertical' : 'horizontal'}
          role="menubar"
          renderItem={(item: PCSNavItem) => (
            <LinkButton
              dropShadow
              href={item.url}
              role="menuitem"
              style={{ margin: 8 }}
              text={item.text}
              variant={item.variant}
            />
          )}
          style={{ textAlign: 'center' }} // inline style or classNames may be used to apply styles
        />
        <Select
          clearable
          dropdownProps={{
            width: 120,
          }}
          filterable
          onClear={() => setMyLang(undefined)}
          onOptionsChange={(options: SelectOption[]) =>
            onLangSelectChange(options)
          }
          options={languageOptions}
          shape={SelectShape.Pill}
          style={{ minWidth: 120, width: 120 }}
          textInputProps={{
            clearButtonAriaLabel: 'Clear language',
            placeholder: 'Language',
          }}
          value={myLang?.value || defaultLang?.name}
        />
      </Nav>
      <Header
        style={{
          background:
            'url("https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/career_hero_8.jpg") center center no-repeat',
          backgroundSize: 'cover',
          height: !isDesktop ? '240px' : '320px',
        }}
      />
      <Content>
        <Section>
          <Row
            style={{
              background: 'var(--grey-background1-color)',
              marginBottom: 32,
              padding: '24px 16px',
            }}
          >
            <Col span={12}>
              <Stack direction="vertical" fullWidth>
                <h1 style={{ textAlign: 'center' }}>{getSelectedJobTitle()}</h1>
                <h2
                  style={{ color: 'var(--primary-color)', textAlign: 'center' }}
                >
                  Apply for this job
                </h2>
              </Stack>
            </Col>
          </Row>
        </Section>
        <Section classNames={styles.sectionMarginBottom}>
          <Form
            {...formLayout}
            form={form}
            layout="vertical"
            name="applyForm"
            onFinish={onFinish}
            style={{ paddingBottom: 80 }}
          >
            <fieldset className={styles.fieldSet}>
              <legend style={{ display: 'none' }}>
                <h3>Upload resume</h3>
              </legend>
              <Form.Item
                name={'resume'}
                label="Resume"
                labelAlign="left"
                rules={[
                  {
                    required: true,
                    validator: uploadValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <Stack direction="horizontal" flexGap="xs" fullWidth>
                  <Button
                    htmlType="button"
                    onClick={() => setUploadModalVisible(true)}
                    text={fileUploaded ? `${fileName}` : 'Upload resume'}
                  />{' '}
                  <span style={{ lineHeight: '36px' }}>or</span>{' '}
                  <LinkButton
                    text="Build resume"
                    variant={LinkButtonVariant.SystemUI}
                  />
                </Stack>
              </Form.Item>
              <Form.Item
                name={'first'}
                label="First name"
                labelAlign="left"
                rules={[
                  {
                    required: true,
                    validator: firstNameValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <TextInput
                  ref={firstNameInputRef}
                  inputWidth={TextInputWidth.fill}
                  placeholder="First name"
                  shape={TextInputShape.Pill}
                  value={firstName}
                />
              </Form.Item>
              <Form.Item
                name={'last'}
                label="Last name"
                labelAlign="left"
                rules={[
                  {
                    required: true,
                    validator: lastNameValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <TextInput
                  ref={lastNameInputRef}
                  inputWidth={TextInputWidth.fill}
                  placeholder="Last name"
                  shape={TextInputShape.Pill}
                  value={lastName}
                />
              </Form.Item>
              <Form.Item
                name={'phone'}
                label="Phone"
                labelAlign="left"
                rules={[
                  {
                    required: true,
                    validator: phoneValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <Stack direction="horizontal" flexGap="xs" fullWidth>
                  <Select
                    clearable
                    dropdownProps={{
                      dropdownClassNames: styles.dropdown,
                      width: 120,
                    }}
                    filterable
                    onClear={() => setMyCountryDialCode(undefined)}
                    onOptionsChange={(options: SelectOption[]) =>
                      onCountryDialCodeSelectChange(options)
                    }
                    options={dialCodeOptions}
                    shape={SelectShape.Pill}
                    style={{ minWidth: 120, width: 120 }}
                    textInputProps={{
                      clearButtonAriaLabel: 'Clear phone code',
                    }}
                    value={
                      myCountryDialCode?.value || defaultDialCode?.dial_code
                    }
                  />
                  <TextInput
                    ref={phoneInputRef}
                    htmlType="tel"
                    inputWidth={TextInputWidth.fill}
                    placeholder="Phone"
                    shape={TextInputShape.Pill}
                    value={phone}
                  />
                </Stack>
              </Form.Item>
              <Form.Item
                name={'email'}
                label="Email"
                labelAlign="left"
                rules={[
                  {
                    required: true,
                    validator: emailValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <TextInput
                  ref={emailInputRef}
                  htmlType="email"
                  inputWidth={TextInputWidth.fill}
                  placeholder="Email"
                  shape={TextInputShape.Pill}
                  value={email}
                />
              </Form.Item>
            </fieldset>
            <fieldset className={styles.fieldSet}>
              <Row>
                <Col {...formLayout.labelCol}>
                  <legend className={styles.legend}>
                    <h3>My Information</h3>
                  </legend>
                </Col>
              </Row>
              <Form.Item
                name={'networking'}
                label="How did you hear about us?"
                labelAlign="left"
                rules={[
                  {
                    required: true,
                    validator: networkingValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <Select
                  clearable
                  filterable
                  onClear={() => setMyNetwork(undefined)}
                  onOptionsChange={onNetworkSelectChange}
                  options={networkOptions}
                  shape={SelectShape.Pill}
                  textInputProps={{
                    clearButtonAriaLabel: 'Clear networking source',
                  }}
                  value={myNetwork?.value}
                />
              </Form.Item>
              {myNetwork && (
                <Form.Item
                  name={'source'}
                  label="Source"
                  rules={[
                    {
                      required: true,
                      validateTrigger: 'onSubmit',
                    },
                  ]}
                  style={{ marginBottom: 24 }}
                >
                  <RadioGroup
                    items={getNetworkRadioGroupItems()}
                    onChange={changeNetworkGroupHandler}
                    value={network}
                  />
                </Form.Item>
              )}
              <Form.Item
                name={'prevemployment'}
                label="Are you a previous Employee of Eightfold or any of its subsidiaries?"
                labelAlign="left"
                rules={[
                  {
                    required: true,
                    validator: prevEmploymentValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <Select
                  clearable
                  filterable
                  onClear={() => setMyPrevEmployment(undefined)}
                  onOptionsChange={onPrevEmploymentSelectChange}
                  options={prevEmpolymentOptions}
                  shape={SelectShape.Pill}
                  textInputProps={{
                    clearButtonAriaLabel: 'Clear previous employment status',
                  }}
                  value={myPrevEmployment?.value}
                />
              </Form.Item>
              {myPrevEmployment === ('Yes' as SelectOption) && (
                <>
                  <Form.Item
                    name={'prevemploymentemail'}
                    label="Please provide your past Eightfold AI email address"
                    rules={[
                      {
                        required: true,
                        validateTrigger: 'onSubmit',
                      },
                    ]}
                    style={{ marginBottom: 24 }}
                  >
                    <TextInput
                      htmlType="email"
                      inputWidth={TextInputWidth.fill}
                      shape={TextInputShape.Pill}
                    />
                  </Form.Item>
                  <Form.Item
                    name={'prevemploymentlocation'}
                    label="Please provide your last Eightfold AI work location"
                    style={{ marginBottom: 24 }}
                  >
                    <TextInput
                      inputWidth={TextInputWidth.fill}
                      shape={TextInputShape.Pill}
                    />
                  </Form.Item>
                  <Form.Item
                    name={'prevemploymentmanager'}
                    label="Please provide your former Eightfold AI manager's name"
                    style={{ marginBottom: 24 }}
                  >
                    <TextInput
                      inputWidth={TextInputWidth.fill}
                      shape={TextInputShape.Pill}
                    />
                  </Form.Item>
                  <Form.Item
                    name={'prevemploymentid'}
                    label="Please provide your Eightfold AI employee ID"
                    style={{ marginBottom: 24 }}
                  >
                    <TextInput
                      inputWidth={TextInputWidth.fill}
                      shape={TextInputShape.Pill}
                    />
                  </Form.Item>
                </>
              )}
              <Form.Item
                name={'country'}
                label="Country"
                labelAlign="left"
                rules={[
                  {
                    required: true,
                    validator: countryValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <Select
                  clearable
                  filterable
                  onClear={() => setMyCountry(undefined)}
                  onOptionsChange={(options: SelectOption[]) =>
                    onCountrySelectChange(options)
                  }
                  options={countryNameOptions}
                  shape={SelectShape.Pill}
                  textInputProps={{
                    clearButtonAriaLabel: 'Clear country',
                  }}
                  value={myCountry?.value}
                />
              </Form.Item>
            </fieldset>
            {myCountry && (
              <fieldset className={styles.fieldSet}>
                <Row>
                  <Col {...formLayout.labelCol}>
                    <legend className={styles.legend}>
                      <h3>Legal Name</h3>
                    </legend>
                  </Col>
                </Row>
                <Form.Item
                  name={'first'}
                  label="First name"
                  rules={[
                    {
                      required: true,
                      validateTrigger: 'onSubmit',
                    },
                  ]}
                  style={{ marginBottom: 24 }}
                >
                  <TextInput
                    inputWidth={TextInputWidth.fill}
                    shape={TextInputShape.Pill}
                  />
                </Form.Item>
                <Form.Item
                  name={'last'}
                  label="Last name"
                  rules={[
                    {
                      required: true,
                      validateTrigger: 'onSubmit',
                    },
                  ]}
                  style={{ marginBottom: 24 }}
                >
                  <TextInput
                    inputWidth={TextInputWidth.fill}
                    shape={TextInputShape.Pill}
                  />
                </Form.Item>
                <Form.Item
                  name={'preferredname'}
                  label="I have a preferred name"
                  style={{ marginBottom: 24 }}
                >
                  <CheckBox
                    checked={preferredName}
                    label="Yes"
                    onChange={onPreferredNameSelectionChange}
                  />
                </Form.Item>
              </fieldset>
            )}
            {preferredName && (
              <fieldset className={styles.fieldSet}>
                <Row>
                  <Col {...formLayout.labelCol}>
                    <legend className={styles.legend}>
                      <h3>Preferred Name</h3>
                    </legend>
                  </Col>
                </Row>
                <Form.Item
                  name={'preferredfirstname'}
                  label="First name"
                  style={{ marginBottom: 24 }}
                >
                  <TextInput
                    inputWidth={TextInputWidth.fill}
                    shape={TextInputShape.Pill}
                  />
                </Form.Item>
                <Form.Item
                  name={'preferredlastname'}
                  label="Last name"
                  style={{ marginBottom: 24 }}
                >
                  <TextInput
                    inputWidth={TextInputWidth.fill}
                    shape={TextInputShape.Pill}
                  />
                </Form.Item>
              </fieldset>
            )}
            {myCountry && (
              <>
                <fieldset className={styles.fieldSet}>
                  <Row>
                    <Col {...formLayout.labelCol}>
                      <legend className={styles.legend}>
                        <h3>Address</h3>
                      </legend>
                    </Col>
                  </Row>
                  <Form.Item
                    name={'addressline'}
                    label="Addresss line 1"
                    style={{ marginBottom: 24 }}
                  >
                    <TextInput
                      inputWidth={TextInputWidth.fill}
                      shape={TextInputShape.Pill}
                    />
                  </Form.Item>
                  <Form.Item
                    name={'city'}
                    label="City"
                    style={{ marginBottom: 24 }}
                  >
                    <TextInput
                      inputWidth={TextInputWidth.fill}
                      shape={TextInputShape.Pill}
                    />
                  </Form.Item>
                  <Form.Item
                    name={'postalcode'}
                    label="Postal code"
                    style={{ marginBottom: 24 }}
                  >
                    <TextInput
                      inputWidth={TextInputWidth.fill}
                      shape={TextInputShape.Pill}
                    />
                  </Form.Item>
                  {myCountry === ('United States' as SelectOption) && (
                    <Form.Item
                      name={'usstate'}
                      label="State"
                      rules={[
                        {
                          required:
                            myCountry === ('United States' as SelectOption),
                          validator: usStateValidator,
                          validateTrigger: 'onSubmit',
                        },
                      ]}
                      style={{ marginBottom: 24 }}
                    >
                      <Select
                        clearable
                        filterable
                        onClear={() => setMyUSState(undefined)}
                        onOptionsChange={(options: SelectOption[]) =>
                          onUSStateSelectChange(options)
                        }
                        options={usStateNameOptions}
                        shape={SelectShape.Pill}
                        textInputProps={{
                          clearButtonAriaLabel: 'Clear state',
                        }}
                        value={myUSState?.value}
                      />
                    </Form.Item>
                  )}
                </fieldset>
                <fieldset className={styles.fieldSet}>
                  <Row>
                    <Col {...formLayout.labelCol}>
                      <legend className={styles.legend}>
                        <h3>Phone</h3>
                      </legend>
                    </Col>
                  </Row>
                  <Form.Item
                    name={'dialcode'}
                    label="Country phone code"
                    rules={[
                      {
                        required: myCountry !== undefined,
                        validator: phoneCodeValidator,
                        validateTrigger: 'onSubmit',
                      },
                    ]}
                    style={{ marginBottom: 24 }}
                  >
                    <Select
                      clearable
                      filterable
                      onClear={() => setMyCountryDialCode(undefined)}
                      onOptionsChange={(options: SelectOption[]) =>
                        onCountryDialCodeSelectChange(options)
                      }
                      options={countryDialCodeOptions}
                      shape={SelectShape.Pill}
                      textInputProps={{
                        clearButtonAriaLabel: 'Clear phone code',
                      }}
                      value={myCountryDialCode?.value}
                    />
                  </Form.Item>
                </fieldset>
              </>
            )}
            <fieldset className={styles.fieldSet}>
              <Row>
                <Col {...formLayout.labelCol}>
                  <legend className={styles.legend}>
                    <h3>Terms and Conditions</h3>
                  </legend>
                </Col>
              </Row>
              <Form.Item
                name={'pii'}
                label={
                  <p className={styles.label}>
                    <span>
                      Learn more about how Eightfold AI processes your personal
                      data by reviewing our
                    </span>{' '}
                    <span>
                      <Link href="#" variant="primary">
                        Eightfold AI Candidate Privacy Statement
                      </Link>
                    </span>
                  </p>
                }
                rules={[
                  {
                    required: true,
                    validator: privacyValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <CheckBox
                  checked={privacy}
                  label="Yes, I have read and consent to this Privacy Statement."
                  onChange={onPrivacySelectionChange}
                />
              </Form.Item>
              <br />
              <Form.Item
                name={'nda'}
                label={
                  <p className={styles.label}>
                    <span>Please review the</span>{' '}
                    <span>
                      <Link href="#" variant="primary">
                        Eightfold AI Non-disclosure Agreement
                      </Link>
                    </span>{' '}
                    <span>
                      and acknowledge your understanding and intention to comply
                      with Eightfold AI nondisclosure policies.
                    </span>
                  </p>
                }
                rules={[
                  {
                    required: true,
                    validator: ndaValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <CheckBox
                  checked={nda}
                  label="Yes, I acknowledge and agree to abide by the terms of this Nondisclosure Agreement."
                  onChange={onNdaSelectionChange}
                />
              </Form.Item>
            </fieldset>
            <Row>
              <Col {...formLayout.labelCol}>
                <h3>Voluntary disclosures</h3>
              </Col>
            </Row>
            <Row classNames={styles.lastRow}>
              <Col {...formLayout.labelCol}>
                <p>
                  <strong>Note:</strong>
                </p>
                <p>
                  <span>
                    Candidate demographic data submitted voluntarily helps
                    Eightfold AI further our Diversity, Inclusion, Equity and
                    Belonging (DIE&B) initiatives to benefit the overall
                    candidate experience. Sensitive data will only be used for
                    aggregated reporting purposes and will only be accessible by
                    a small group of HR Administrators so that they can create
                    these aggregate reports. All personal data is kept
                    confidential, will never be used by Eightfold AI for any
                    individual decisions regarding recruitment or hiring and you
                    will not be subject to any adverse treatment if you choose
                    not to provide the data. For more details, including how you
                    can change or remove your information, please review our
                  </span>{' '}
                  <span>
                    <Link
                      href="#"
                      underline
                      style={{ display: 'inline' }}
                      variant="primary"
                    >
                      Eightfold AI Code of Business Conduct and Ethics
                    </Link>
                  </span>{' '}
                  <span>and</span>{' '}
                  <span>
                    <Link
                      href="#"
                      underline
                      style={{ display: 'inline' }}
                      variant="primary"
                    >
                      Eightfold AI Candidate Privacy Statement
                    </Link>
                    .
                  </span>{' '}
                  <span>
                    You can also request a copy of our DIE&B Data Guidelines at
                    any time.
                  </span>
                </p>
              </Col>
            </Row>
            <fieldset className={styles.fieldSet}>
              <legend style={{ display: 'none' }}>
                <h3>Veteran Status</h3>
              </legend>
              <Row>
                <Col {...formLayout.labelCol}>
                  <h3>VEVRAA Invitation to Self-Identify</h3>
                </Col>
              </Row>
              <Row classNames={styles.lastRow}>
                <Col {...formLayout.labelCol}>
                  <p>Instructions</p>
                  <p>
                    Individuals seeking employment at Eightfold AI are
                    considered without regard to race, color, religion, national
                    origin, age, sex, marital status, ancestry, physical or
                    mental disability, veteran status, or sexual orientation.
                    You have the opportunity to provide the following
                    information in order to help us comply with federal and
                    state Equal Employment Opportunity/Affirmative Action record
                    keeping, reporting, and other legal requirements.
                  </p>
                  <p>
                    <span>
                      We are a government contractor subject to the Vietnam Era
                      Veterans' Readjustment Assistance Act of 1974, as amended
                      by the Jobs for Veterans Act of 2002,
                    </span>{' '}
                    <span>
                      <Link
                        href="https://www.govinfo.gov/content/pkg/USCODE-2013-title38/html/USCODE-2013-title38-partIII-chap42-sec4212.htm"
                        underline
                        style={{ display: 'inline' }}
                        target="_blank"
                        variant="primary"
                      >
                        38 U.S.C. 4212
                      </Link>
                    </span>{' '}
                    <span>
                      (VEVRAA), which requires government contractors to take
                      affirmative action to employ and advance in employment:
                      (1) disabled veterans; (2) recently separated veterans;
                      (3) active duty wartime or campaign badge veterans; and
                      (4) Armed Forces service medal veterans. These
                      classifications are defined as follows and are hereafter
                      referred to all together as “protected veterans”:
                    </span>{' '}
                  </p>
                  <ul>
                    <li>
                      A “disabled veteran” is one of the following:
                      <ul>
                        <li>
                          a veteran of the U.S. military, ground, naval or air
                          service who is entitled to compensation (or who but
                          for the receipt of military retired pay would be
                          entitled to compensation) under laws administered by
                          the Secretary of Veterans Affairs; or
                        </li>
                        <li>
                          a person who was discharged or released from active
                          duty because of a service-connected disability.
                        </li>
                      </ul>
                    </li>
                    <li>
                      A “recently separated veteran” means any veteran during
                      the three-year period beginning on the date of such
                      veteran's discharge or release from active duty in the
                      U.S. military, ground, naval, or air service.
                    </li>
                    <li>
                      An “active duty wartime or campaign badge veteran” means a
                      veteran who served on active duty in the U.S. military,
                      ground, naval or air service during a war, or in a
                      campaign or expedition for which a campaign badge has been
                      authorized under the laws administered by the Department
                      of Defense.
                    </li>
                    <li>
                      <span>
                        An “Armed forces service medal veteran” means a veteran
                        who, while serving on active duty in the U.S. military,
                        ground, naval or air service, participated in a United
                        States military operation for which an Armed Forces
                        service medal was awarded pursuant to
                      </span>{' '}
                      <span>
                        <Link
                          href="https://www.federalregister.gov/documents/1996/01/18/96-622/establishing-the-armed-forces-service-medal"
                          underline
                          style={{ display: 'inline' }}
                          target="_blank"
                          variant="primary"
                        >
                          Executive Order 12985
                        </Link>
                        .
                      </span>
                    </li>
                  </ul>
                  <p>
                    Submission of this information is voluntary and refusal to
                    provide it will not subject you to any adverse treatment.
                    The information provided will be used only in ways that are
                    not inconsistent with VEVRAA as amended. We are an equal
                    opportunity employer. We do not discriminate in hiring or
                    employment against any individual on the basis of race,
                    color, gender, national origin, ancestry, religion, physical
                    or mental disability, age, veteran status, sexual
                    orientation, gender identity or expression, marital status,
                    pregnancy, citizenship, or any other factor protected by
                    anti-discrimination laws.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col {...formLayout.labelCol}>
                  <p>
                    If you believe you belong to any of the categories of
                    protected veterans listed above, please indicate by
                    selecting the appropriate box below. As a Government
                    contractor subject to VEVRAA, we request this information in
                    order to measure the effectiveness of the outreach and
                    positive recruitment efforts we undertake pursuant to
                    VEVRAA.
                  </p>
                </Col>
              </Row>
              <Form.Item
                name={'vevraa'}
                label="Veteran Status"
                labelAlign="left"
                rules={[
                  {
                    required: true,
                    validator: vevraaValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <Select
                  clearable
                  dropdownProps={{
                    dropdownClassNames: styles.dropdownWrapText,
                  }}
                  filterable
                  onClear={() => setMyVeteranStatus(undefined)}
                  onOptionsChange={(options: SelectOption[]) =>
                    onVevraaSelectChange(options)
                  }
                  options={vevraaOptions}
                  shape={SelectShape.Pill}
                  textInputProps={{
                    clearButtonAriaLabel: 'Clear veteran status',
                  }}
                  value={myVeteranStatus?.value}
                />
              </Form.Item>
            </fieldset>
            <fieldset className={styles.fieldSet}>
              <legend style={{ display: 'none' }}>
                <h3>Personal Identity</h3>
              </legend>
              <Form.Item
                name={'gender'}
                label="Gender"
                labelAlign="left"
                rules={[
                  {
                    required: true,
                    validator: genderValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <Select
                  clearable
                  filterable
                  onClear={() => setMyGender(undefined)}
                  onOptionsChange={(options: SelectOption[]) =>
                    onGenderSelectChange(options)
                  }
                  options={genderOptions}
                  shape={SelectShape.Pill}
                  textInputProps={{
                    clearButtonAriaLabel: 'Clear gender',
                  }}
                  value={myGender?.value}
                />
              </Form.Item>
              <br />
              <Row>
                <Col {...formLayout.labelCol}>
                  <p>Please select any/all group(s) that you identify with.</p>
                </Col>
              </Row>
              <Form.Item
                name={'raceandethnicity'}
                label="Race/Ethnicity"
                rules={[
                  {
                    required: true,
                    validator: raceAndEthnicityValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <>
                  <CheckBoxGroup
                    items={raceAndEthnicityGroup}
                    onChange={(selectedRaceAndEthnicity) =>
                      changeRaceAndEthnicityGroupHandler(
                        selectedRaceAndEthnicity
                      )
                    }
                    value={myRaceAndEthnicity}
                  />
                </>
              </Form.Item>
            </fieldset>
            <fieldset className={styles.fieldSet}>
              <Row>
                <Col {...formLayout.labelCol}>
                  <legend className={styles.legend}>
                    <h3>Voluntary Self-Identification of Disability</h3>
                  </legend>
                </Col>
              </Row>
              <Form.Item
                name={'language'}
                label="Language"
                rules={[
                  {
                    required: true,
                    validator: langValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <>
                  <Select
                    clearable
                    filterable
                    onClear={() => setMyLang(undefined)}
                    onOptionsChange={(options: SelectOption[]) =>
                      onLangSelectChange(options)
                    }
                    options={languageOptions}
                    shape={SelectShape.Pill}
                    textInputProps={{
                      clearButtonAriaLabel: 'Clear language',
                      placeholder: 'Language',
                    }}
                    value={myLang?.value || defaultLang?.name}
                  />
                </>
              </Form.Item>
            </fieldset>
            {myLang !== undefined && (
              <>
                <fieldset className={styles.fieldSet}>
                  <Row>
                    <Col {...formLayout.labelCol}>
                      <legend className={styles.legend}>
                        <h3>Form CC-305</h3>
                      </legend>
                    </Col>
                  </Row>
                  <Row>
                    <Col {...formLayout.labelCol}>
                      <p>
                        <strong>OMB Control Number</strong>{' '}
                        <span>0000-0000</span>
                      </p>
                    </Col>
                  </Row>
                  <Row classNames={styles.lastRow}>
                    <Col {...formLayout.labelCol}>
                      <p>
                        <strong>Expires</strong> <span>{getToday()}</span>
                      </p>
                    </Col>
                  </Row>
                  <Form.Item
                    name={'fullname'}
                    label="Name"
                    rules={[
                      {
                        required: true,
                        validateTrigger: 'onSubmit',
                      },
                    ]}
                    style={{ marginBottom: 24 }}
                  >
                    <TextInput
                      inputWidth={TextInputWidth.fill}
                      shape={TextInputShape.Pill}
                    />
                  </Form.Item>
                  <Form.Item
                    name={'employeeid'}
                    label="Employee ID (if applicable)"
                    style={{ marginBottom: 24 }}
                  >
                    <TextInput
                      inputWidth={TextInputWidth.fill}
                      shape={TextInputShape.Pill}
                    />
                  </Form.Item>
                  <Form.Item
                    name={'date'}
                    label="Date*"
                    style={{ marginBottom: 24 }}
                  >
                    <TextInput
                      inputWidth={TextInputWidth.fill}
                      readonly
                      shape={TextInputShape.Pill}
                      defaultValue={getToday()}
                    />
                  </Form.Item>
                </fieldset>
                <Row>
                  <Col {...formLayout.labelCol}>
                    <h3>Why are you being asked to complete this form?</h3>
                  </Col>
                </Row>
                <Row classNames={styles.lastRow}>
                  <Col {...formLayout.labelCol}>
                    <p>
                      We are a federal contractor or subcontractor. The law
                      requires us to provide equal employment opportunity to
                      qualified people with disabilities. We have a goal of
                      having at least 7% of our workers as people with
                      disabilities. The law says we must measure our progress
                      towards this goal. To do this, we must ask applicants and
                      employees if they have a disability or have ever had one.
                      People can become disabled, so we need to ask this
                      question at least every five years.
                    </p>
                    <p>
                      <span>
                        Completing this form is voluntary, and we hope that you
                        will choose to do so. Your answer is confidential. No
                        one who makes hiring decisions will see it. Your
                        decision to complete the form and your answer will not
                        harm you in any way. If you want to learn more about the
                        law or this form, visit the U.S. Department of Labor's
                        Office of Federal Contract Compliance Programs (OFCCP)
                        website at
                      </span>
                      <span>
                        <Link
                          href="https://www.dol.gov/ofccp"
                          underline
                          style={{ display: 'inline' }}
                          target="_blank"
                          variant="primary"
                        >
                          www.dol.gov/ofccp
                        </Link>
                      </span>
                      .
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col {...formLayout.labelCol}>
                    <h3>How do you know if you have a disability?</h3>
                  </Col>
                </Row>
                <Row classNames={styles.lastRow}>
                  <Col {...formLayout.labelCol}>
                    <p>
                      A disability is a condition that substantially limits one
                      or more of your “major life activities.” If you have or
                      have ever had such a condition, you are a person with a
                      disability.{' '}
                      <strong>
                        Disabilities include, but are not limited to:
                      </strong>
                    </p>
                    <ul>
                      <li>
                        Alcohol or other substance use disorder (not currently
                        using drugs illegally)
                      </li>
                      <li>
                        Autoimmune disorder, for example, lupus, fibromyalgia,
                        rheumatoid arthritis, HIV/AIDS
                      </li>
                      <li>Blind or low vision</li>
                      <li>Cancer (past or present)</li>
                      <li>Cardiovascular or heart disease</li>
                      <li>Celiac disease</li>
                      <li>Cerebral palsy</li>
                      <li>Deaf or serious difficulty hearing</li>
                      <li>Diabetes</li>
                      <li>
                        Disfigurement, for example, disfigurement caused by
                        burns, wounds, accidents, or congenital disorders
                      </li>
                      <li>Epilepsy or other seizure disorder</li>
                      <li>
                        Gastrointestinal disorders, for example, Crohn's
                        Disease, irritable bowel syndrome
                      </li>
                      <li>Intellectual or developmental disability</li>
                      <li>
                        Mental health conditions, for example, depression,
                        bipolar disorder, anxiety disorder, schizophrenia, PTSD
                      </li>
                      <li>Missing limbs or partially missing limbs</li>
                      <li>
                        Mobility impairment, benefiting from the use of a
                        wheelchair, scooter, walker, leg brace(s) and/or other
                        supports
                      </li>
                      <li>
                        Nervous system condition, for example, migraine
                        headaches, Parkinson's disease, multiple sclerosis (MS)
                      </li>
                      <li>
                        Neurodivergence, for example,
                        attention-deficit/hyperactivity disorder (ADHD), autism
                        spectrum disorder, dyslexia, dyspraxia, other learning
                        disabilities
                      </li>
                      <li>Partial or complete paralysis (any cause)</li>
                      <li>
                        Pulmonary or respiratory conditions, for example,
                        tuberculosis, asthma, emphysema
                      </li>
                      <li>Short stature (dwarfism)</li>
                      <li>Traumatic brain injury</li>
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <Col {...formLayout.labelCol}>
                    <h3>Please choose one of the option below:</h3>
                  </Col>
                </Row>
                <fieldset className={styles.fieldSet}>
                  <legend style={{ display: 'none' }}>
                    <h3>Voluntary Self-Identification of Disability Options</h3>
                  </legend>
                  <Form.Item
                    name={'disability'}
                    label="Disability"
                    rules={[
                      {
                        required: true,
                        validateTrigger: 'onSubmit',
                      },
                    ]}
                    style={{ marginBottom: 24 }}
                  >
                    <RadioGroup
                      items={disabilityGroup}
                      onChange={changeDisabilityGroupHandler}
                      value={disability}
                    />
                  </Form.Item>
                </fieldset>
                <Row classNames={styles.lastRow}>
                  <Col {...formLayout.labelCol}>
                    <p>
                      PUBLIC BURDEN STATEMENT: According to the Paperwork
                      Reduction Act of 1995 no persons are required to respond
                      to a collection of information unless such collection
                      displays a valid OMB control number. This survey should
                      take about 5 minutes to complete.
                    </p>
                  </Col>
                </Row>
              </>
            )}
            <fieldset
              className={mergeClasses([styles.fieldSet, styles.questions])}
            >
              <Row>
                <Col {...formLayout.labelCol}>
                  <legend className={styles.legend}>
                    <h3>Application Questions</h3>
                  </legend>
                </Col>
              </Row>
              <Form.Item
                name={'pepaffiliation'}
                label="
                    I am related to or associated with a Politically Exposed
                    Person (PEP). A PEP is defined as an individual who is or
                    has been entrusted with a prominent public function.
                    Examples of PEPs include Member of Parliament/Senator,
                    retired Judge, Central Bank Governor/Chairman, Former Police
                    Commissioner, Head of National transport bodies (like rail,
                    bus, airlines etc)."
                rules={[
                  {
                    required: true,
                    validator: pepAffiliationValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <Select
                  clearable
                  filterable
                  onClear={() => setMyPepAffiliation(undefined)}
                  onOptionsChange={(options: SelectOption[]) =>
                    onPepAffiliationSelectChange(options)
                  }
                  options={pepAffiliationOptions}
                  shape={SelectShape.Pill}
                  textInputProps={{
                    clearButtonAriaLabel: 'Clear PEP affiliation',
                  }}
                  value={myPepAffiliation?.value}
                />
              </Form.Item>
              {myPepAffiliation === ('Yes' as SelectOption) && (
                <Form.Item
                  name={'pepaffiliationdetails'}
                  label="Please provide details (e.g. name, position, organization, relationship)"
                  rules={[
                    {
                      required: true,
                      validator: pepAffiliationDetailsValidator,
                      validateTrigger: 'onSubmit',
                    },
                  ]}
                  style={{ marginBottom: 24 }}
                >
                  <TextArea
                    enableExpand
                    inputWidth={TextInputWidth.fill}
                    onChange={onPepAffiliationDetailsChange}
                    shape={TextInputShape.Pill}
                    value={myPepAffiliationDetails}
                  />
                </Form.Item>
              )}
              <Form.Item
                name={'pepselfidentification'}
                label="I am a current or former Politically Exposed Person (PEP)."
                rules={[
                  {
                    required: true,
                    validator: pepSelfValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <Select
                  clearable
                  filterable
                  onClear={() => setMyPepSelf(undefined)}
                  onOptionsChange={(options: SelectOption[]) =>
                    onPepSelfSelectChange(options)
                  }
                  options={pepSelfOptions}
                  shape={SelectShape.Pill}
                  textInputProps={{
                    clearButtonAriaLabel: 'Clear PEP self identification',
                  }}
                  value={myPepSelf?.value}
                />
              </Form.Item>
              <Form.Item
                name={'peprelationship'}
                label="I am related to or have a close relationship (common friendships, acquaintanceships and past working relationships excluded) with an employee working in the Eightfold AI group of companies"
                rules={[
                  {
                    required: true,
                    validator: pepRelationshipValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <Select
                  clearable
                  filterable
                  onClear={() => setMyPepRelationship(undefined)}
                  onOptionsChange={(options: SelectOption[]) =>
                    onPepRelationshipSelectChange(options)
                  }
                  options={pepRelationshipOptions}
                  shape={SelectShape.Pill}
                  textInputProps={{
                    clearButtonAriaLabel: 'Clear PEP relationship',
                  }}
                  value={myPepRelationship?.value}
                />
              </Form.Item>
              {myPepRelationship === ('Yes' as SelectOption) && (
                <Form.Item
                  name={'peprelationshipdetails'}
                  label="Please provide details (e.g. name, position, department, PP or subsidiary name, relationship)"
                  rules={[
                    {
                      required: true,
                      validator: pepRelationshipDetailsValidator,
                      validateTrigger: 'onSubmit',
                    },
                  ]}
                  style={{ marginBottom: 24 }}
                >
                  <TextArea
                    enableExpand
                    inputWidth={TextInputWidth.fill}
                    onChange={onPepRelationshipDetailsChange}
                    shape={TextInputShape.Pill}
                    value={myPepRelationshipDetails}
                  />
                </Form.Item>
              )}
              <Form.Item
                name={'pepDate'}
                label="I understand that a positive declaration does not mean that I would automatically be disqualified from being considered for employment but a false declaration may render me ineligible to be considered for employment with Eightfold AI and/or its group of companies. I understand that a false declaration may constitute a conflicts of interests which has consequences should I be hired. Please enter today's date on your acknowledgement.*"
                style={{ marginBottom: 24 }}
              >
                <TextInput
                  inputWidth={TextInputWidth.fill}
                  readonly
                  shape={TextInputShape.Pill}
                  defaultValue={getToday()}
                />
              </Form.Item>
            </fieldset>
            <fieldset className={styles.fieldSet}>
              <Row>
                <Col {...formLayout.labelCol}>
                  <legend style={{ display: 'none' }}>
                    <h3>U.S. Work Authorization</h3>
                  </legend>
                </Col>
              </Row>
              <Form.Item
                name={'usworkauthorization'}
                label="Are you legally authorized to work in the United States for Eightfold AI?"
                rules={[
                  {
                    required: true,
                    validator: usWorkAuthorizationValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <Select
                  clearable
                  filterable
                  onClear={() => setMyUsWorkAuthorization(undefined)}
                  onOptionsChange={(options: SelectOption[]) =>
                    onUsWorkAuthorizationSelectChange(options)
                  }
                  options={usWorkAuthorizationOptions}
                  shape={SelectShape.Pill}
                  textInputProps={{
                    clearButtonAriaLabel: 'Clear U.S. work authorization',
                  }}
                  value={myUsWorkAuthorization?.value}
                />
              </Form.Item>
              <Form.Item
                name={'sponsorshiprequirement'}
                label="Do you now, or will you in the future, require sponsorship for employment visa status (e.g., H-1B visa status, etc.) to work legally for Eightfold AI in the United States?"
                rules={[
                  {
                    required: true,
                    validator: sponsorshipRequirementValidator,
                    validateTrigger: 'onSubmit',
                  },
                ]}
                style={{ marginBottom: 24 }}
              >
                <Select
                  clearable
                  filterable
                  onClear={() => setMySponsorshipRequirement(undefined)}
                  onOptionsChange={(options: SelectOption[]) =>
                    onSponsorshipRequirementSelectChange(options)
                  }
                  options={sponsorshipRequirementOptions}
                  shape={SelectShape.Pill}
                  textInputProps={{
                    clearButtonAriaLabel: 'Clear sponsorship requirement',
                  }}
                  value={mySponsorshipRequirement?.value}
                />
              </Form.Item>
            </fieldset>
            <fieldset className={styles.fieldSet}>
              <legend style={{ display: 'none' }}>
                <h3>Cancel or Submit</h3>
              </legend>
              <Form.Item name={'actions'}>
                <Stack
                  direction="horizontal"
                  flexGap="xs"
                  fullWidth
                  justify="flex-end"
                  style={{ marginTop: 16 }}
                >
                  <LinkButton
                    href="/pcs/loggedout?firstRun=1"
                    onClick={onReset}
                    text="Cancel"
                    variant={ButtonVariant.Secondary}
                  />
                  <Button
                    htmlType="button"
                    onClick={onFinish}
                    text="Next"
                    variant={ButtonVariant.Primary}
                  />
                </Stack>
              </Form.Item>
            </fieldset>
          </Form>
        </Section>
        <UploadModal
          onClose={() => setUploadModalVisible(false)}
          uploadProps={uploadProps}
          visible={uploadModalVisible}
        />
      </Content>
      <AppFooter />
      <SnackbarContainer />
    </Layout>
  );
}

export default PCSApply;
