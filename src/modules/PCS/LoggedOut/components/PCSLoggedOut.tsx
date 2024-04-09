'use client';

import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useSearchParams } from 'next/navigation';
import useMeasure from 'react-use-measure';
import { a, useSpring } from '@react-spring/web';
import {
  Accordion,
  Avatar,
  Button,
  ButtonIconAlign,
  ButtonShape,
  ButtonTextAlign,
  ButtonVariant,
  ButtonWidth,
  Card,
  Carousel,
  CarouselSize,
  CheckBox,
  Col,
  Dropdown,
  Form,
  Grid,
  Icon,
  IconName,
  Label,
  LabelSize,
  Layout,
  Link,
  LinkButton,
  List,
  Menu,
  MenuItemType,
  Modal,
  ModalSize,
  OcFile,
  Pill,
  Row,
  SearchBox,
  Select,
  SelectorSize,
  SelectShape,
  SkillTag,
  SkillSize,
  SkillStatus,
  snack,
  SnackbarContainer,
  Stack,
  TextInputWidth,
  Tooltip,
  TooltipTheme,
  Upload,
  UploadFile,
  UploadFileStatus,
  UploadProps,
  UploadSize,
  PillSize,
  TextInputShape,
  TextInput,
} from '@eightfold.ai/octuple';
import {
  AppProps,
  Department,
  Employee,
  Job,
  jobs,
  langs,
  locations,
  NewsItem,
  PCSNavItem,
  PerksItem,
  Role,
  Seniority,
  Skill,
  VideoItem,
  Workplace,
} from '@/packages/utils/mockdata.types';
import {
  mdiAccountSearchOutline,
  mdiBrush,
  mdiRadioboxMarked,
  mockAvatarProps,
  sampleDepartmentList,
  sampleEmployeeList,
  sampleNewsList,
  samplePCSNavigationList,
  samplePerksList,
  sampleRoleList,
  sampleSeniorityList,
  sampleSkillList,
  sampleVideoList,
  sampleWorkplaceList,
} from '@/packages/utils/mockdata';
import AppFooter from '@/modules/Shared/components/AppFooter';
import { useSticky } from '@/packages/hooks/useSticky';
import { canUseDom } from '@/packages/utils/canUseDom';

const { Content, Header, Nav, Section } = Layout;
const { Dropzone } = Upload;

const { useBreakpoint } = Grid;

import styles from './PCSLoggedOut.module.css';

function PCSLoggedOut(_props: PropsWithChildren<AppProps>) {
  const searchParams = useSearchParams();

  const [accordionExpanded, setAccordionExpanded] = useState<boolean>(true);
  const [advancedExpanded, setAdvancedExpanded] = useState<boolean>(false);
  const [firstRunVisible, setFirstRunVisible] = useState<boolean>(false);
  const [myLang, setMyLang] = useState(langs.en);
  const [myLocation, setMyLocation] = useState('');
  const [myDepartmentList, setMyDepartmentList] = useState<Department[]>([]);
  const [mySeniorityList, setMySeniorityList] = useState<Seniority[]>([]);
  const [mySkillsList, setMySkillsList] = useState<Skill[]>([]);
  const [myWorkplaceList, setMyWorkplaceList] = useState<Workplace[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedEmployee, setSelectedEmployee] = useState<number | undefined>(
    0
  );
  const [selectedRole, setSelectedRole] = useState<number | undefined>(0);
  const [selectedJobList, setSelectedJobList] = useState<Job[]>([]);
  const [questionsEnabled, setQuestionsEnabled] = useState<boolean>(false);
  const [employeeCardDropShadow, setEmployeeCardDropShadow] = useState<
    number | undefined
  >(undefined);
  const [jobCardDropShadow, setJobCardDropShadow] = useState<
    number | undefined
  >(undefined);
  const [data, setData] = useState<Record<string, unknown>>({});
  const [thumbUrl, setThumbUrl] = useState<string>('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploadModalVisible, setUploadModalVisible] = useState<boolean>(false);
  const [myJobCartList, setMyJobCartList] = useState<Role[]>([]);
  const [visibleQuestionFilter, setVisibleQuestionFilter] = useState<{
    [x: string]: boolean;
  }>({});
  const currentQuestion = Object.keys(visibleQuestionFilter)?.[0] || '';

  const jobCardListRef = useRef<HTMLDivElement>(null);
  const jobDescriptionHeaderRef = useRef<HTMLDivElement>(null);
  const jobDescriptionContentRef = useRef<HTMLDivElement>(null);
  const matchScoreCardRef = useRef<HTMLDivElement>(null);
  const locationSelectOneRef = useRef<HTMLDivElement>(null);
  const jobSelectRef = useRef<HTMLDivElement>(null);
  const locationSelectTwoRef = useRef<HTMLDivElement>(null);

  const screens = useBreakpoint();
  const isDesktop = screens.md;

  // TODO: Add useSticky hook to Octuple.
  useSticky(0, jobCardListRef);
  useSticky(0, jobDescriptionHeaderRef);

  // Offset for the ancestor padding of the match score card
  const matchScoreCardAncestorPaddingOffset: number = 96;
  useSticky(
    (jobDescriptionHeaderRef.current?.offsetHeight ?? 208) +
      matchScoreCardAncestorPaddingOffset,
    matchScoreCardRef
  );

  const [form] = Form.useForm();
  const formLayout = {
    wrapperCol: { span: 12 },
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  /**
   * Use the react-use-measure hook to get the height of the expanded content container.
   * This is used to animate the height of the expanded content container.
   * The expanded content container is hidden by default and only shown when the advanced options are expanded.
   * The height of the expanded content container is set to 0 when the advanced options are collapsed.
   * When the advanced options are expanded, the height of the expanded content container is set to the height of the content.
   * The height of the expanded content container is animated using the react-spring useSpring hook.
   * These are available in vscode production.
   */
  const [expandedContentContainerRef, expandedContentContainerBounds] =
    useMeasure();
  const expandingSpringProps = useSpring({
    height: advancedExpanded ? expandedContentContainerBounds.height : 0,
    immediate: false,
    opacity: advancedExpanded ? 1 : 0,
  });

  /**
   * Get the number of columns based on the screen size.
   * While bootstrap and other frameworks rely on hardcoded strings,
   * Octuple uses a grid system that is based on the number of columns.
   */
  const getInputSearchColSpan = () => {
    if (screens.xl) {
      return 4;
    }
    if (screens.lg) {
      return 3;
    }
    if (screens.md) {
      return 2;
    }
    return 12;
  };

  const getInputLocationColSpan = () => {
    if (screens.xl) {
      return 4;
    }
    if (screens.lg) {
      return 4;
    }
    if (screens.md) {
      return 3;
    }
    return 12;
  };

  const getActionsColSpan = () => {
    if (screens.xl) {
      return 4;
    }
    if (screens.lg) {
      return 5;
    }
    if (screens.md) {
      return 7;
    }
    return 12;
  };

  const getFormColSpan = () => {
    if (screens.lg) {
      return 6;
    }
    return 12;
  };

  /**
   * Log the current mock state of the component to the console.
   * Also ensures state updates are not missed.
   * This may be done in a more sophisticated way in vscode apps.
   */
  useEffect(() => {
    console.log('currentQuestion', currentQuestion);
  }, [currentQuestion]);

  useEffect(() => {
    console.log('myDepartmentList', myDepartmentList);
  }, [myDepartmentList]);

  useEffect(() => {
    console.log('mySeniorityList', mySeniorityList);
  }, [mySeniorityList]);

  useEffect(() => {
    console.log('mySkillsList', mySkillsList);
  }, [mySkillsList]);

  useEffect(() => {
    console.log('myWorkplaceList', myWorkplaceList);
  }, [myWorkplaceList]);

  useEffect(() => {
    console.log('myLocation', myLocation);
  }, [myLocation]);

  useEffect(() => {
    console.log('selectedJobList', selectedJobList);
  }, [selectedJobList]);

  /**
   * Mock the first run experience for the user via a query string.
   */
  useMemo(() => {
    if (searchParams) {
      const parsedParam = searchParams.get('firstRun');
      console.log('firstReun search param value: ', parsedParam);
      const showIndex: number = parseInt(parsedParam ?? '0', 10) ?? 0;
      setFirstRunVisible(showIndex === 0);
    }
  }, []);

  /**
   * From here, we do some naive filtering of the role list based on useState properties.
   * Some of the filters are based on the user's selection of skills, department, seniority, and workplace.
   * This is a naive implementation and should be replaced with a more sophisticated search algorithm.
   * We also update arrays of selected items based on the user's selection and their job cart.
   */
  const [filteredRoleList, setFilteredRoleList] =
    useState<Role[]>(sampleRoleList);

  const searchRoles = useCallback(
    async (term: string) => {
      if (!term) {
        return filteredRoleList;
      }

      const getSearchResults = async (term: string): Promise<Role[]> => {
        return sampleRoleList.filter((role) =>
          Object.values(role).some((value) =>
            value.toString().toLowerCase().includes(term.toLowerCase())
          )
        );
      };

      const results = await getSearchResults(term);
      setFilteredRoleList(results.map((role, index) => ({ ...role, index })));
      setSearchTerm(term);
    },
    [sampleRoleList, filteredRoleList]
  );

  /**
   * Get the length of the advanced filter options for button counters and other content.
   * @returns The length of the advanced filter options.
   */
  const getAdvancedFilterLength = (): string | undefined => {
    let filterLength: number | undefined;
    filterLength =
      mySkillsList.length +
      myDepartmentList.length +
      mySeniorityList.length +
      myWorkplaceList.length;
    if (filterLength === 0) {
      return undefined;
    }
    return filterLength.toString();
  };

  /**
   * Mock the job cart functionality.
   */
  const getSelectedJobCartStatus = (): boolean | undefined => {
    if (selectedRole === undefined) {
      return undefined;
    }
    let jobCart: boolean | undefined;
    myJobCartList.forEach((job: Role) => {
      if (job.index === selectedRole) {
        jobCart = job.cart;
        return;
      }
    });
    return jobCart;
  };

  const getJobCartLength = (): string | undefined => {
    let cartLength: number | undefined;
    cartLength = myJobCartList.length;
    if (cartLength === 0) {
      return undefined;
    }
    return cartLength.toString();
  };

  const getSelectedJobCartIndex = (): number | undefined => {
    if (selectedRole === undefined) {
      return undefined;
    }
    let jobCartIndex: number | undefined;
    myJobCartList.forEach((job: Role, index: number) => {
      if (job.index === selectedRole) {
        jobCartIndex = index;
        return;
      }
    });
    return jobCartIndex;
  };

  const updateJobCart = (value: boolean, index?: number): void => {
    if (selectedRole === undefined) {
      return;
    }
    filteredRoleList[selectedRole].cart = value;
    filteredRoleList.forEach((job) => {
      if (job.cart && !myJobCartList.includes(job)) {
        setMyJobCartList((prevList) => [...prevList, job]);
      }
    });

    if (index !== undefined) {
      setMyJobCartList((prevList) => {
        const newList = [...prevList];
        newList.splice(index, 1);
        return newList;
      });
    } else {
      myJobCartList.forEach((jobInCart) => {
        if (!jobInCart.cart) {
          setMyJobCartList((prevList) =>
            prevList.filter((job) => job !== jobInCart)
          );
        }
      });
    }
  };

  /**
   * From here we mock the job description.
   */
  const getSelectedJobTitle = (): string | undefined => {
    if (selectedRole === undefined) {
      return undefined;
    }
    const jobTitle = filteredRoleList[selectedRole]?.title;
    return jobTitle;
  };

  const getSelectedJobGeo = (): string | undefined => {
    if (selectedRole === undefined) {
      return undefined;
    }
    let jobGeo = filteredRoleList[selectedRole]?.geo;
    if (typeof jobGeo !== 'string') {
      jobGeo = jobGeo?.join(' • ');
    }
    return jobGeo;
  };

  const getSelectedJobLocation = (): string | undefined => {
    if (selectedRole === undefined) {
      return undefined;
    }
    const jobLocation = filteredRoleList[selectedRole]?.location;
    return jobLocation;
  };

  const getSelectedJobDescription = (): React.ReactNode => {
    if (selectedRole === undefined) {
      return null;
    }
    const jobDescription = filteredRoleList[selectedRole]?.jd;
    return jobDescription;
  };

  const onJobSelectChange = (options: any[]) => {
    const newJobList = options.filter(
      (option) => !selectedJobList?.includes(option)
    );
    const removedJobs = selectedJobList?.filter(
      (job) => !options.includes(job)
    );

    setSelectedJobList((prevList) =>
      [...prevList, ...newJobList].filter((job) => !removedJobs.includes(job))
    );
    console.log(selectedJobList);
  };

  /**
   * From here we mock the language selection.
   */
  const languageOptions = Object.keys(langs).map((k) => ({
    text: (langs as any)[k],
    value: k,
  }));

  const onLangSelectChange = (options: any[]) => {
    options.forEach((option) => {
      setMyLang(option);
    });
  };

  /**
   * From here we mock the location filter.
   */
  const locationOptions = Object.keys(locations).map((k) => ({
    text: (locations as any)[k],
    value: k,
  }));

  const onLocationSelectChange = useCallback(
    async (options: any[]) => {
      for (const option of options) {
        const location = option === 'current' ? 'santa' : option;
        setMyLocation(location);

        const getLocationResults = async (
          location: string
        ): Promise<Role[]> => {
          return sampleRoleList.filter((role) =>
            Object.values(role).some((value) =>
              value.toString().toLowerCase().includes(location.toLowerCase())
            )
          );
        };

        console.log('Location selected', option);
        const results = await getLocationResults(option);
        setFilteredRoleList(results.map((role, index) => ({ ...role, index })));
      }
    },
    [sampleRoleList, filteredRoleList]
  );

  // Mock the accordion question UX flow.
  const jobOptions = Object.keys(jobs).map((k) => ({
    text: (jobs as any)[k],
    value: k,
  }));

  const toggleQuestionFilterVisibility = ({
    key,
    value,
  }: {
    key: string;
    value: boolean;
  }) => {
    setVisibleQuestionFilter({ [key]: value });
  };

  const getNextQuestion = (): string => {
    switch (currentQuestion) {
      case 'question one':
        return 'question two';
      case 'question two':
        return 'question three';
      case 'question three':
        return 'question four';
      default:
        return 'question two';
    }
  };

  const getPreviousQuestion = (): string => {
    switch (currentQuestion) {
      case 'question two':
        return 'question one';
      case 'question three':
        return 'question two';
      case 'question four':
        return 'question three';
      default:
        return 'question one';
    }
  };

  /**
   * From here we mock the upload functionality.
   */
  const onChange: UploadProps['onChange'] = async (info: any) => {
    if (info.file.status === 'removed') {
      await resetThumbAsync().then(() => {
        setData({
          ...info.file,
          name: info.file.name,
          percent: 0,
          status: 'removed',
          thumbUrl: '',
        });
      });
      return;
    }
    await generateThumbAsync(info.file).then(() => {
      setData({
        ...info.file,
        name: info.file.name,
        percent: 100,
        status: 'done',
        thumbUrl: info.file.preview,
      });
    });
  };

  const getBase64 = (file: OcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const generateThumbAsync = async (file: UploadFile): Promise<void> => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as OcFile);
    }
    setThumbUrl(file.url || (file.preview as string));
  };

  const resetThumbAsync = async (): Promise<void> => {
    setThumbUrl('');
  };

  const uploadProps: UploadProps = {
    customRequest() {
      return true;
    },
    data: data,
    fileList: fileList,
    listType: 'picture',
    maxCount: 1,
    name: 'file',
    onChange: onChange,
  };

  useEffect(() => {
    if (data.status === 'done') {
      setFileList([
        {
          ...data,
          uid: data.uid as string,
          name: data.name as string,
          status: data.status as UploadFileStatus,
          thumbUrl: data.thumbUrl as string,
        },
      ]);
      snack.servePositive({
        content: `${data.name} file uploaded successfully`,
      });
    } else if (data.status === 'removed') {
      const resetData = async () => {
        setFileList([]);
        setData({});
      };
      resetData().catch(console.error);
    }
  }, [data]);

  /**
   * Mock Menu overlays for the search, share, and job cart buttons.
   */
  const searchOverlay = () => (
    <Menu
      itemProps={{
        role: 'listitem',
      }}
      items={
        filteredRoleList.length
          ? filteredRoleList?.map((role: Role) => ({
              onClick: () => {
                setSearchTerm(role.title ?? '');
                setSelectedRole(role.index);
              },
              text: role.title,
              type: MenuItemType.button,
              style: { whiteSpace: 'normal' },
            }))
          : [
              {
                render: () => (
                  <p style={{ marginTop: 16, textAlign: 'center' }}>
                    No results found
                  </p>
                ),
                type: MenuItemType.custom,
              },
            ]
      }
      listType="ul"
      role="list"
    />
  );

  const shareOverlay = () => (
    <Menu
      itemProps={{
        role: 'listitem',
      }}
      items={[
        {
          iconProps: { path: IconName.mdiLinkedIn },
          href: '#',
          text: 'LinkedIn',
          type: MenuItemType.link,
        },
        {
          iconProps: { path: IconName.mdiFacebook },
          href: '#',
          text: 'Facebook',
          type: MenuItemType.link,
        },
        {
          iconProps: { path: IconName.mdiX },
          href: '#',
          text: 'X (Formerly Twitter)',
          type: MenuItemType.link,
        },
        {
          iconProps: { path: IconName.mdiEmailOutline },
          href: '#',
          text: 'Email',
          type: MenuItemType.link,
        },
        {
          iconProps: { path: IconName.mdiContentCopy },
          href: '#',
          text: 'Copy Link',
          type: MenuItemType.link,
        },
      ]}
      listType="ul"
      onChange={(item) => {
        console.log(item);
      }}
      role="list"
    />
  );

  const jobCartOverlay = () => (
    <Menu
      itemProps={{
        role: 'listitem',
      }}
      items={myJobCartList.map((job, index) => ({
        type: MenuItemType.custom,
        render: ({ onChange, ...rest }) => (
          <Card
            bordered
            children={
              <Stack direction="vertical" flexGap="m" fullWidth>
                <Stack
                  align="flex-start"
                  direction="horizontal"
                  flexGap="xs"
                  fullWidth
                  justify="space-between"
                >
                  <h3 style={{ fontSize: '20px', lineHeight: '24px' }}>
                    {job.title}
                  </h3>
                  <Button
                    ariaLabel="Remove job from cart"
                    disruptive
                    iconProps={{
                      path: IconName.mdiTrashCanOutline,
                    }}
                    onClick={() => {
                      updateJobCart(false, index);
                    }}
                    shape={ButtonShape.Round}
                    variant={ButtonVariant.Secondary}
                  />
                </Stack>
                <Stack align="flex-start" direction="horizontal" flexGap="xs">
                  <Icon path={IconName.mdiMapMarkerOutline} />
                  <p style={{ padding: 0 }}>
                    {typeof job.geo === 'string'
                      ? job.geo
                      : job.geo?.[0] + ' and 1 more'}
                  </p>
                </Stack>
              </Stack>
            }
            height={'auto'}
            style={{
              marginTop: index === 0 ? 16 : 0,
              minWidth: '100%',
            }}
            tabIndex={0}
            width={'100%'}
          />
        ),
      }))}
      additionalItem={{
        text: 'Apply to saved jobs',
        counter: `${myJobCartList.length}`,
      }}
      listType="ul"
      onChange={(item) => {
        console.log(item);
      }}
      renderAdditionalItem={(item: any) => {
        if (myJobCartList.length === 0) {
          return <p style={{ textAlign: 'center' }}>Your job cart is empty.</p>;
        }
        return (
          <Button
            alignText={ButtonTextAlign.Right}
            buttonWidth={ButtonWidth.fitContent}
            counter={item.counter}
            role="listitem"
            style={{ margin: '0 16px 16px 16px', float: 'right' }}
            text={item.text}
            variant={ButtonVariant.Primary}
          />
        );
      }}
      role="list"
    />
  );

  return (
    <Layout classNames="octuple">
      <Nav
        aria-label="Main navigation"
        classNames="pcsLoggedOutNav"
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
          onClear={() => setMyLang('English')}
          onOptionsChange={onLangSelectChange}
          options={languageOptions}
          shape={SelectShape.Pill}
          style={{ minWidth: 120, width: 120 }}
          textInputProps={{
            placeholder: myLang,
          }}
        />
      </Nav>
      <Header
        role="banner"
        style={{
          background:
            'url("https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/career_hero_8.jpg") center center no-repeat',
          backgroundSize: 'cover',
          height: !isDesktop ? '240px' : '320px',
        }}
      />
      <Content>
        <Section classNames={styles.sectionPadding}>
          <Row>
            <Col span={12}>
              <h1>Jobs at Eightfold.ai</h1>
              <p>
                To support our mission of finding the right career for everyone
                in the world, we no longer require 4-year college degrees for
                specific roles. Please review the job description for more
                details.
              </p>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
            <Col span={getInputSearchColSpan()}>
              <Dropdown
                initialFocus={false}
                overlay={searchOverlay()}
                classNames={styles.search}
              >
                <SearchBox
                  clearable
                  placeholder="Search"
                  inputWidth={TextInputWidth.fill}
                  onChange={(e) => searchRoles(e.target.value)}
                  onClear={() => setFilteredRoleList(sampleRoleList)}
                  onSubmit={(e) => e.preventDefault()}
                  value={searchTerm}
                />
              </Dropdown>
            </Col>
            <Col span={getInputLocationColSpan()}>
              <Select
                clear={myLocation === ''}
                clearable
                defaultValue={myLocation}
                filterable
                initialFocus={false}
                inputWidth={TextInputWidth.fill}
                onClear={() => {
                  setMyLocation('');
                  setFilteredRoleList(sampleRoleList);
                }}
                onOptionsChange={onLocationSelectChange}
                options={locationOptions}
                ref={locationSelectOneRef}
                shape={SelectShape.Pill}
                style={{ minWidth: 'fit-content' }}
                textInputProps={{
                  iconProps: { path: IconName.mdiMapMarkerOutline }, // TODO: Fix icon position bug when clearable.
                  placeholder: 'City, state, zip code, or "hybrid"',
                }}
              />
            </Col>
            <Col span={getActionsColSpan()}>
              <Stack direction="horizontal" flexGap={isDesktop ? 'm' : 'xs'}>
                <Button
                  shape={ButtonShape.Pill}
                  text="Go"
                  variant={ButtonVariant.Secondary}
                />
                <Stack
                  direction={screens.sm ? 'horizontal' : 'vertical'}
                  flexGap="m"
                >
                  <Dropdown
                    closeOnDropdownClick={false}
                    overlay={jobCartOverlay()}
                  >
                    <Button
                      buttonWidth={ButtonWidth.fitContent}
                      counter={getJobCartLength()}
                      iconProps={{ path: IconName.mdiCartOutline }}
                      shape={ButtonShape.Pill}
                      style={{ width: 'fit-content' }}
                      text="Job cart"
                      variant={ButtonVariant.Secondary}
                    />
                  </Dropdown>
                  <Stack direction="horizontal" flexGap="xxxs">
                    <Button
                      alignIcon={ButtonIconAlign.Right}
                      checked={advancedExpanded}
                      counter={getAdvancedFilterLength()}
                      iconProps={{
                        path: advancedExpanded
                          ? IconName.mdiChevronUp
                          : IconName.mdiChevronDown,
                        ariaHidden: true,
                        role: 'presentation',
                        rotate: 0,
                        spin: false,
                        vertical: false,
                      }}
                      onClick={() => setAdvancedExpanded(!advancedExpanded)}
                      style={{ marginInlineStart: screens.sm ? 0 : -60 }}
                      toggle
                      text="Advanced options"
                      transparent
                      variant={ButtonVariant.SystemUI}
                    />
                    {getAdvancedFilterLength() !== undefined && (
                      <Tooltip
                        content="Reset advanced options"
                        placement="top"
                        theme={TooltipTheme.dark}
                      >
                        <Button
                          ariaLabel="Reset advanced options"
                          iconProps={{ path: IconName.mdiRefresh }}
                          onClick={() => {
                            setMySkillsList([]);
                            setMyDepartmentList([]);
                            setMySeniorityList([]);
                            setMyWorkplaceList([]);
                          }}
                          shape={ButtonShape.Round}
                          variant={ButtonVariant.SystemUI}
                        />
                      </Tooltip>
                    )}
                  </Stack>
                </Stack>
              </Stack>
            </Col>
          </Row>
        </Section>
        <a.div style={expandingSpringProps}>
          <Section
            classNames={
              advancedExpanded
                ? `${styles.expandedContent} ${styles.expanded}`
                : `${styles.expanded}`
            }
            ref={expandedContentContainerRef}
            style={{ padding: '0 24px 24px 24px' }}
          >
            {advancedExpanded && (
              <Row>
                <Col
                  span={isDesktop ? 6 : 12}
                  style={{ margin: isDesktop ? 0 : '16px 0' }}
                >
                  <Row>
                    <Label
                      id="skills-label"
                      text="Your relevant skills"
                      size={LabelSize.Medium}
                      style={{ marginBottom: 8 }}
                    />
                  </Row>
                  <div
                    style={{
                      height: 200,
                      overflowX: 'hidden',
                      overflowY: 'scroll',
                    }}
                  >
                    <List
                      items={sampleSkillList}
                      layout="horizontal"
                      listClassNames={styles.skillList}
                      renderItem={(item: Skill) => (
                        <SkillTag
                          aria-checked={mySkillsList?.some(
                            (skill) => skill.index === item.index
                          )}
                          aria-labelledby="skills-label"
                          bordered
                          clickable
                          label={item.name}
                          onClick={() => {
                            if (
                              mySkillsList?.some(
                                (skill) => skill.index === item.index
                              )
                            ) {
                              item.selected = false;
                              setMySkillsList((prevList) =>
                                prevList.filter(
                                  (skill) => skill.index !== item.index
                                )
                              );
                            } else {
                              setMySkillsList((prevList) => [
                                ...prevList,
                                item,
                              ]);
                              item.selected = true;
                            }
                          }}
                          role="checkbox"
                          size={SkillSize.Small}
                          status={
                            mySkillsList?.some(
                              (skill) => skill.index === item.index
                            )
                              ? SkillStatus.Highlight
                              : SkillStatus.Default
                          }
                          style={{ alignSelf: 'flex-start', margin: 4 }}
                        />
                      )}
                      role="group"
                    />
                  </div>
                </Col>
                <Col
                  span={isDesktop ? 2 : 12}
                  style={{ margin: isDesktop ? 0 : '16px 0' }}
                >
                  <Row>
                    <Label
                      id="department-label"
                      text="Department"
                      size={LabelSize.Medium}
                      style={{ margin: '0 10px 8px 10px' }}
                    />
                  </Row>
                  <div
                    style={{
                      height: isDesktop ? 200 : 'auto',
                      margin: '0 8px',
                      overflowX: 'hidden',
                      overflowY: isDesktop ? 'scroll' : 'auto',
                    }}
                  >
                    <List
                      items={sampleDepartmentList}
                      layout="vertical"
                      renderItem={(item: Department) => (
                        <CheckBox
                          aria-checked={myDepartmentList?.some(
                            (dep) => dep.index === item.index
                          )}
                          aria-labelledby="department-label"
                          checked={myDepartmentList?.some(
                            (dep) => dep.index === item.index
                          )}
                          label={item.role}
                          onChange={() => {
                            if (
                              myDepartmentList?.some(
                                (dep) => dep.index === item.index
                              )
                            ) {
                              item.selected = false;
                              setMyDepartmentList((prevList) =>
                                prevList.filter(
                                  (dep) => dep.index !== item.index
                                )
                              );
                            } else {
                              setMyDepartmentList((prevList) => [
                                ...prevList,
                                item,
                              ]);
                              item.selected = true;
                            }
                          }}
                          role="checkbox"
                          size={SelectorSize.Medium}
                          style={{ margin: 4 }}
                        />
                      )}
                      role="group"
                    />
                  </div>
                </Col>
                <Col
                  span={isDesktop ? 2 : 12}
                  style={{ margin: isDesktop ? 0 : '16px 0' }}
                >
                  <Row>
                    <Label
                      id="seniority-label"
                      text="Seniority"
                      size={LabelSize.Medium}
                      style={{ margin: '0 10px 8px 10px' }}
                    />
                  </Row>
                  <div
                    style={{
                      height: isDesktop ? 200 : 'auto',
                      margin: '0 8px',
                      overflowX: 'hidden',
                      overflowY: 'scroll',
                    }}
                  >
                    <List
                      items={sampleSeniorityList}
                      layout="vertical"
                      renderItem={(item: Seniority) => (
                        <CheckBox
                          aria-checked={mySeniorityList?.some(
                            (sen) => sen.index === item.index
                          )}
                          aria-labelledby="seniority-label"
                          checked={mySeniorityList?.some(
                            (sen) => sen.index === item.index
                          )}
                          label={item.title}
                          onChange={() => {
                            if (
                              mySeniorityList?.some(
                                (sen) => sen.index === item.index
                              )
                            ) {
                              item.selected = false;
                              setMySeniorityList((prevList) =>
                                prevList.filter(
                                  (sen) => sen.index !== item.index
                                )
                              );
                            } else {
                              setMySeniorityList((prevList) => [
                                ...prevList,
                                item,
                              ]);
                              item.selected = true;
                            }
                          }}
                          role="checkbox"
                          size={SelectorSize.Medium}
                          style={{ margin: 4 }}
                        />
                      )}
                      role="group"
                    />
                  </div>
                </Col>
                <Col
                  span={isDesktop ? 2 : 12}
                  style={{ margin: isDesktop ? 0 : '16px 0' }}
                >
                  <Row>
                    <Label
                      id="workplace-label"
                      text="Workplace"
                      size={LabelSize.Medium}
                      style={{ margin: '0 10px 8px 10px' }}
                    />
                  </Row>
                  <div
                    style={{
                      height: isDesktop ? 200 : 'auto',
                      margin: '0 8px',
                      overflowX: 'hidden',
                      overflowY: 'scroll',
                    }}
                  >
                    <List
                      items={sampleWorkplaceList}
                      layout="vertical"
                      renderItem={(item: Workplace) => (
                        <CheckBox
                          aria-checked={myWorkplaceList?.some(
                            (place) => place.index === item.index
                          )}
                          aria-labelledby="workplace-label"
                          checked={myWorkplaceList?.some(
                            (place) => place.index === item.index
                          )}
                          label={item.location}
                          onChange={() => {
                            if (
                              myWorkplaceList?.some(
                                (place) => place.index === item.index
                              )
                            ) {
                              item.selected = false;
                              setMyWorkplaceList((prevList) =>
                                prevList.filter(
                                  (place) => place.index !== item.index
                                )
                              );
                            } else {
                              setMyWorkplaceList((prevList) => [
                                ...prevList,
                                item,
                              ]);
                              item.selected = true;
                            }
                          }}
                          role="checkbox"
                          size={SelectorSize.Medium}
                          style={{ margin: 4 }}
                        />
                      )}
                      role="group"
                    />
                  </div>
                </Col>
              </Row>
            )}
          </Section>
        </a.div>
        <Section id="accordionSection" classNames={styles.sectionPadding}>
          <Accordion
            expanded={accordionExpanded}
            expandButtonProps={{ ariaLabel: 'Toggle expand' }}
            onAccordionChange={(expanded) => setAccordionExpanded(expanded)}
            headerProps={{
              style: { background: 'var(--primary-background1-color)' },
            }}
            children={
              <>
                {questionsEnabled && (
                  <Stack
                    align={screens.lg ? 'flex-start' : 'center'}
                    direction={screens.lg ? 'horizontal' : 'vertical'}
                    flexGap="ml"
                    fullWidth
                    style={{ height: screens.lg ? '100%' : 'auto' }}
                  >
                    <Stack
                      direction="vertical"
                      flexGap="m"
                      style={{
                        borderBottom: screens.lg
                          ? 'none'
                          : '1px solid var(--border-color)',
                        borderRight: screens.lg
                          ? '1px solid var(--border-color)'
                          : 'none',
                        height: screens.lg ? '280px' : 'auto',
                        padding: screens.lg
                          ? '0 20px 0 0'
                          : isDesktop
                          ? '0 0 84px 0'
                          : '0 0 24px 0',
                        position: 'relative',
                        width: screens.lg ? '60%' : '100%',
                      }}
                      fullWidth={!screens.lg}
                    >
                      {(visibleQuestionFilter as any)?.['question one'] && (
                        <>
                          <h2
                            id="selectLocationHeader"
                            style={{
                              fontSize: '20px',
                              lineHeight: '24px',
                            }}
                          >
                            Enter your zip code or location
                          </h2>
                          <Stack
                            direction="horizontal"
                            flexGap="m"
                            fullWidth={!screens.lg}
                            wrap={!isDesktop ? 'wrap' : 'nowrap'}
                          >
                            <Select
                              aria-labelledby="selectLocationHeader"
                              clear={myLocation === ''}
                              clearable
                              defaultValue={myLocation}
                              dropdownProps={{
                                portal: true,
                              }}
                              filterable
                              initialFocus={false}
                              inputWidth={TextInputWidth.fill}
                              onClear={() => {
                                setMyLocation('');
                                setFilteredRoleList(sampleRoleList);
                              }}
                              onOptionsChange={onLocationSelectChange}
                              options={locationOptions}
                              ref={locationSelectTwoRef}
                              shape={SelectShape.Pill}
                              style={{ minWidth: isDesktop ? 400 : '100%' }}
                              textInputProps={{
                                iconProps: {
                                  path: IconName.mdiMapMarkerOutline,
                                },
                                placeholder:
                                  'City, state, zip code, or "hybrid"',
                              }}
                            />
                            <Button
                              buttonWidth={
                                screens.lg
                                  ? ButtonWidth.fitContent
                                  : ButtonWidth.fill
                              }
                              iconProps={{ path: IconName.mdiMapMarker }}
                              onClick={() =>
                                setMyLocation('Santa Clara, CA, United States')
                              }
                              style={{
                                width: screens.xl ? 'fit-content' : '100%',
                              }}
                              text="Use my current location"
                              variant={ButtonVariant.Neutral}
                            />
                          </Stack>
                        </>
                      )}
                      {(visibleQuestionFilter as any)?.['question two'] && (
                        <>
                          <h2
                            id="selectJobsHeader"
                            style={{
                              fontSize: '20px',
                              lineHeight: '24px',
                            }}
                          >
                            Select the jobs you are interested in
                          </h2>
                          <Select
                            aria-labelledby="selectJobsHeader"
                            clear={selectedJobList === undefined}
                            clearable
                            dropdownProps={{
                              portal: true,
                            }}
                            filterable
                            inputWidth={TextInputWidth.fill}
                            multiple
                            onClear={() => setSelectedJobList([])}
                            onOptionsChange={onJobSelectChange}
                            options={jobOptions}
                            ref={jobSelectRef}
                            shape={SelectShape.Pill}
                            textInputProps={{
                              placeholder: 'Type to search',
                            }}
                          />
                        </>
                      )}
                      {(visibleQuestionFilter as any)?.['question three'] && (
                        <>
                          <h2
                            id="highlightSkillsHeader"
                            style={{
                              fontSize: '20px',
                              lineHeight: '24px',
                            }}
                          >
                            Highlight your skills
                          </h2>
                          <Stack
                            direction="horizontal"
                            flexGap="m"
                            fullWidth={!screens.lg}
                            wrap={!isDesktop ? 'wrap' : 'nowrap'}
                          >
                            <div
                              style={{
                                height: 112,
                                overflowX: 'hidden',
                                overflowY: 'scroll',
                              }}
                            >
                              <List
                                items={sampleSkillList}
                                layout="horizontal"
                                listClassNames={styles.skillList}
                                renderItem={(item: Skill) => (
                                  <SkillTag
                                    aria-checked={mySkillsList?.some(
                                      (skill) => skill.index === item.index
                                    )}
                                    aria-labelledby="highlightSkillsHeader"
                                    bordered
                                    clickable
                                    label={item.name}
                                    onClick={() => {
                                      if (
                                        mySkillsList?.some(
                                          (skill) => skill.index === item.index
                                        )
                                      ) {
                                        item.selected = false;
                                        setMySkillsList((prevList) =>
                                          prevList.filter(
                                            (skill) =>
                                              skill.index !== item.index
                                          )
                                        );
                                      } else {
                                        setMySkillsList((prevList) => [
                                          ...prevList,
                                          item,
                                        ]);
                                        item.selected = true;
                                      }
                                    }}
                                    role="checkbox"
                                    size={SkillSize.Small}
                                    status={
                                      mySkillsList?.some(
                                        (skill) => skill.index === item.index
                                      )
                                        ? SkillStatus.Highlight
                                        : SkillStatus.Default
                                    }
                                    style={{
                                      alignSelf: 'flex-start',
                                      margin: 4,
                                    }}
                                  />
                                )}
                                role="group"
                              />
                            </div>
                          </Stack>
                        </>
                      )}
                      {(visibleQuestionFilter as any)?.['question four'] && (
                        <>
                          <h2
                            style={{
                              fontSize: '20px',
                              lineHeight: '24px',
                            }}
                          >
                            Enter your information to help us create your
                            profile
                          </h2>
                          <Stack fullWidth>
                            <Form
                              {...formLayout}
                              form={form}
                              name={'profile-form'}
                              onFinish={onFinish}
                              requiredMark
                              style={{
                                width: '100%',
                              }}
                            >
                              <Row gutter={[16, 16]}>
                                <Col span={getFormColSpan()}>
                                  <Form.Item
                                    name={'first'}
                                    label={
                                      <span style={{ marginInlineStart: 8 }}>
                                        First name
                                      </span>
                                    }
                                    labelAlign="left"
                                    rules={[{ required: true }]}
                                    style={{ marginBottom: 8 }}
                                  >
                                    <TextInput
                                      inputWidth={TextInputWidth.fill}
                                      placeholder="First name"
                                      shape={TextInputShape.Pill}
                                    />
                                  </Form.Item>
                                </Col>
                                <Col span={getFormColSpan()}>
                                  <Form.Item
                                    name={'last'}
                                    label={
                                      <span style={{ marginInlineStart: 8 }}>
                                        Last name
                                      </span>
                                    }
                                    labelAlign="left"
                                    rules={[{ required: true }]}
                                    style={{ marginBottom: 8 }}
                                  >
                                    <TextInput
                                      inputWidth={TextInputWidth.fill}
                                      placeholder="Last name"
                                      shape={TextInputShape.Pill}
                                    />
                                  </Form.Item>
                                </Col>
                              </Row>
                              <Row gutter={[16, 16]}>
                                <Col span={getFormColSpan()}>
                                  <Form.Item
                                    name={'email'}
                                    label={
                                      <span style={{ marginInlineStart: 8 }}>
                                        Email
                                      </span>
                                    }
                                    labelAlign="left"
                                    rules={[{ required: true }]}
                                    style={{ marginBottom: 8 }}
                                  >
                                    <TextInput
                                      htmlType="email"
                                      inputWidth={TextInputWidth.fill}
                                      placeholder="Email"
                                      shape={TextInputShape.Pill}
                                    />
                                  </Form.Item>
                                </Col>
                                <Col span={getFormColSpan()}>
                                  <Form.Item
                                    name={'phone'}
                                    label={
                                      <span style={{ marginInlineStart: 8 }}>
                                        Phone
                                      </span>
                                    }
                                    labelAlign="left"
                                    rules={[{ required: true }]}
                                    style={{ marginBottom: 8 }}
                                  >
                                    <TextInput
                                      htmlType="tel"
                                      inputWidth={TextInputWidth.fill}
                                      placeholder="Phone"
                                      shape={TextInputShape.Pill}
                                    />
                                  </Form.Item>
                                </Col>
                              </Row>
                            </Form>
                          </Stack>
                        </>
                      )}
                      <Stack
                        direction="horizontal"
                        flexGap="s"
                        fullWidth={!isDesktop}
                        style={{
                          bottom: isDesktop ? 0 : 'auto',
                          margin: isDesktop ? 0 : '24px 0',
                          position: isDesktop ? 'absolute' : 'relative',
                          right: isDesktop ? 20 : 'auto',
                          width: isDesktop ? 'fit-content' : '100%',
                        }}
                      >
                        {currentQuestion !== 'question one' && (
                          <Button
                            buttonWidth={
                              isDesktop
                                ? ButtonWidth.fitContent
                                : ButtonWidth.fill
                            }
                            onClick={() => {
                              if (currentQuestion === 'question four') {
                                onReset();
                              }
                              toggleQuestionFilterVisibility({
                                key: getPreviousQuestion(),
                                value: true,
                              });
                            }}
                            style={{
                              width: isDesktop ? 'fit-content' : '100%',
                            }}
                            text="Go back"
                            variant={ButtonVariant.Secondary}
                          />
                        )}
                        <Button
                          buttonWidth={
                            isDesktop
                              ? ButtonWidth.fitContent
                              : ButtonWidth.fill
                          }
                          onClick={() => {
                            if (currentQuestion === 'question four') {
                              form.submit();
                            } else {
                              toggleQuestionFilterVisibility({
                                key: getNextQuestion(),
                                value: true,
                              });
                            }
                          }}
                          text={
                            currentQuestion === 'question four'
                              ? 'Save'
                              : 'Next'
                          }
                          variant={ButtonVariant.Primary}
                        />
                      </Stack>
                    </Stack>
                    <Stack
                      direction="vertical"
                      flexGap="m"
                      fullWidth={!screens.lg}
                    >
                      <h3
                        style={{
                          fontSize: '16px',
                          lineHeight: '20px',
                          marginTop: 8,
                        }}
                      >
                        {filteredRoleList.length} jobs
                      </h3>
                      <p style={{ padding: 0, paddingBottom: 8 }}>
                        Jobs are filtered based on your preferred location.
                      </p>
                      <Button
                        buttonWidth={
                          screens.xl ? ButtonWidth.fitContent : ButtonWidth.fill
                        }
                        onClick={() => setQuestionsEnabled(false)}
                        style={{ width: screens.xl ? 'fit-content' : '100%' }}
                        text="Have a resume? Click here"
                        variant={ButtonVariant.Secondary}
                      />
                    </Stack>
                  </Stack>
                )}
                {!questionsEnabled && (
                  <Stack
                    align={screens.lg ? 'flex-start' : 'center'}
                    direction={screens.lg ? 'horizontal' : 'vertical'}
                    flexGap="ml"
                    fullWidth
                    style={{ height: screens.lg ? '100%' : 'auto' }}
                  >
                    <Stack
                      align="center"
                      direction="vertical"
                      flexGap={isDesktop ? 'm' : 'xxs'}
                      fullWidth={!screens.lg}
                    >
                      <h2 style={{ fontSize: '20px', lineHeight: '24px' }}>
                        Let your resume search for jobs.
                      </h2>
                      <Stack
                        direction="horizontal"
                        flexGap="m"
                        fullWidth={!screens.lg}
                      >
                        <Stack
                          direction="vertical"
                          flexGap="m"
                          fullWidth={!screens.lg}
                        >
                          <Dropzone
                            {...uploadProps}
                            fullWidth={!screens.lg}
                            size={
                              !screens.lg ? UploadSize.Medium : UploadSize.Small
                            }
                            style={{ minWidth: !screens.lg ? 200 : 400 }}
                          />
                          <p style={{ textAlign: 'center' }}>
                            Don't have a resume? Use our resume builder.
                          </p>
                          <Button
                            buttonWidth={ButtonWidth.fill}
                            text="Build your resume"
                            variant={ButtonVariant.Secondary}
                          />
                        </Stack>
                      </Stack>
                    </Stack>
                    <Stack
                      direction="vertical"
                      flexGap={isDesktop ? 'm' : 'xxs'}
                      style={{
                        borderBottom: screens.lg
                          ? 'none'
                          : '1px solid var(--border-color)',
                        borderLeft: screens.lg
                          ? '1px solid var(--border-color)'
                          : 'none',
                        borderRight: screens.lg
                          ? '1px solid var(--border-color)'
                          : 'none',
                        borderTop: screens.lg
                          ? 'none'
                          : '1px solid var(--border-color)',
                        height: screens.lg ? '240px' : 'auto',
                        padding: screens.lg ? '0 20px' : '20px 0',
                      }}
                      fullWidth={!screens.lg}
                    >
                      <h3
                        style={{
                          fontSize: '16px',
                          lineHeight: '20px',
                          marginTop: 8,
                        }}
                      >
                        When you upload your resume:
                      </h3>
                      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        <li>
                          <Stack
                            align="flex-start"
                            direction="horizontal"
                            flexGap="xs"
                            fullWidth={!screens.lg}
                          >
                            <Icon path={mdiRadioboxMarked} />
                            <p style={{ padding: 0, paddingBottom: 8 }}>
                              Jobs will be labeled when they're a good or great
                              match
                            </p>
                          </Stack>
                        </li>
                        <li>
                          <Stack
                            align="flex-start"
                            direction="horizontal"
                            flexGap="xs"
                            fullWidth={!screens.lg}
                          >
                            <Icon path={mdiBrush} />
                            <p style={{ padding: 0, paddingBottom: 8 }}>
                              Great matches will be shown first in search
                              results
                            </p>
                          </Stack>
                        </li>
                        <li>
                          <Stack
                            align="flex-start"
                            direction="horizontal"
                            flexGap="xs"
                            fullWidth={!screens.lg}
                          >
                            <Icon path={IconName.mdiAccountCircle} />
                            <p style={{ padding: 0, paddingBottom: 8 }}>
                              Relevant skills and experience will be listed so
                              you know why those jobs are a match
                            </p>
                          </Stack>
                        </li>
                      </ul>
                    </Stack>
                    <Stack
                      direction="vertical"
                      flexGap={isDesktop ? 'm' : 'xxs'}
                      fullWidth={!screens.lg}
                    >
                      <h3
                        style={{
                          fontSize: '16px',
                          lineHeight: '20px',
                          marginTop: 8,
                        }}
                      >
                        Don't have a resume?
                      </h3>
                      <p style={{ padding: 0, paddingBottom: 8 }}>
                        By answering a few quick questions, you will discover
                        jobs that meet your requirements
                      </p>
                      <Button
                        buttonWidth={
                          screens.xl ? ButtonWidth.fitContent : ButtonWidth.fill
                        }
                        onClick={() => {
                          toggleQuestionFilterVisibility({
                            key: 'question one',
                            value: true,
                          });
                          setQuestionsEnabled(true);
                        }}
                        style={{ width: screens.xl ? 'fit-content' : '100%' }}
                        text="Answer questions"
                        variant={ButtonVariant.Secondary}
                      />
                      <p>Estimated time to complete: 2 minutes</p>
                    </Stack>
                  </Stack>
                )}
              </>
            }
            summary={
              <Stack align="flex-start" direction="horizontal" flexGap="xs">
                <Icon path={mdiAccountSearchOutline} style={{ marginTop: 8 }} />
                <Stack
                  direction={isDesktop ? 'horizontal' : 'vertical'}
                  flexGap="xs"
                >
                  <p>
                    <b>{filteredRoleList.length} open jobs.</b> Use your resume
                    to get matched with the right job.
                  </p>
                  {!accordionExpanded && (
                    <Button
                      alignText={
                        isDesktop
                          ? ButtonTextAlign.Left
                          : ButtonTextAlign.Center
                      }
                      buttonWidth={
                        isDesktop ? ButtonWidth.fitContent : ButtonWidth.fill
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        toggleQuestionFilterVisibility({
                          key: currentQuestion,
                          value: false,
                        });
                        setQuestionsEnabled(false);
                      }}
                      style={{ margin: isDesktop ? '0 16px' : '0' }}
                      text="Upload your resume"
                      variant={ButtonVariant.Primary}
                    />
                  )}
                </Stack>
              </Stack>
            }
          />
        </Section>
        <Section classNames={styles.sectionPadding}>
          <Row gutter={[24, 24]}>
            {filteredRoleList.length > 0 && !isDesktop && (
              <Col span={12}>
                <Section style={{ marginBottom: 40 }}>
                  <List
                    items={filteredRoleList}
                    layout="vertical"
                    listClassNames={styles.jobListMobile}
                    renderItem={(item: Role) => (
                      <Card
                        aria-current={selectedRole === item.index}
                        bordered
                        classNames={
                          selectedRole === item.index ? 'selected' : ''
                        }
                        dropShadow={
                          selectedRole === item.index ||
                          jobCardDropShadow === item.index
                        }
                        onClick={() => {
                          setSelectedRole(item.index);
                          filteredRoleList.map((i) => ({
                            selected: i.index === selectedRole,
                          }));
                          if (canUseDom()) {
                            window?.location.assign(
                              `/pcs/loggedout/mobilejd?index=${item.index}`
                            );
                          }
                        }}
                        onMouseOver={(e) => setJobCardDropShadow(item.index)}
                        onMouseLeave={(e) => setJobCardDropShadow(undefined)}
                        children={
                          <Stack direction="vertical" flexGap="m" fullWidth>
                            <Stack
                              align="flex-start"
                              direction="horizontal"
                              flexGap="xs"
                              fullWidth
                              justify="space-between"
                            >
                              <h3
                                style={{
                                  fontSize: '20px',
                                  lineHeight: '24px',
                                }}
                              >
                                {item.title}
                              </h3>
                              {item.priority === 0 && (
                                <Tooltip
                                  content="Designated as an important hire for the company."
                                  placement="top"
                                  portal
                                  theme={TooltipTheme.dark}
                                  maxWidth={200}
                                  width={200}
                                >
                                  <Icon
                                    color="var(--red-secondary-color)"
                                    path={IconName.mdiFire}
                                    style={{ marginTop: 4 }}
                                  />
                                </Tooltip>
                              )}
                            </Stack>
                            <Stack
                              align="flex-start"
                              direction="horizontal"
                              flexGap="xs"
                            >
                              <Icon path={IconName.mdiMapMarkerOutline} />
                              <p style={{ padding: 0 }}>
                                {typeof item.geo === 'string'
                                  ? item.geo
                                  : item.geo?.[0] + ' and 1 more'}
                              </p>
                            </Stack>
                            <p style={{ padding: 0 }}>{item.role}</p>
                            {item.location && (
                              <Pill label={`${item.location}`} theme="grey" />
                            )}
                          </Stack>
                        }
                        height={'auto'}
                        role="button"
                        style={{
                          cursor: 'pointer',
                          background:
                            selectedRole === item.index
                              ? 'var(--primary-background1-color)'
                              : 'var(--background-color)',
                          border:
                            selectedRole === item.index
                              ? '1px solid var(--primary-color)'
                              : '1px solid var(--border-color)',
                          marginBottom: '16px',
                          minWidth: '100%',
                        }}
                        tabIndex={0}
                        width={'100%'}
                      />
                    )}
                  />
                </Section>
              </Col>
            )}
            {!isDesktop && (
              <Col span={12}>
                <Section classNames={styles.sectionMarginBottom}>
                  <Stack
                    align="center"
                    direction="vertical"
                    flexGap="m"
                    fullWidth
                  >
                    <h3>Recommended videos for you</h3>
                    <Carousel
                      carouselScrollMenuProps={{
                        children: sampleVideoList.map((item: VideoItem) => (
                          <Card
                            bordered
                            children={
                              <Stack
                                align="center"
                                direction="vertical"
                                fullWidth
                                justify="center"
                                style={{ height: '100%' }}
                              >
                                {!isDesktop && item.mobileVideo}
                                {isDesktop && item.desktopVideo}
                                <h3
                                  className={styles.blogImageTitle}
                                  style={{ fontSize: '18px' }}
                                >
                                  {item.title}
                                </h3>
                                <p className={styles.blogImageDescription}>
                                  {item.description}
                                </p>
                              </Stack>
                            }
                            height={380}
                            style={{
                              minWidth: 256,
                            }}
                            tabIndex={0}
                            width={256}
                          />
                        )),
                        containerPadding: 8,
                        gap: 24,
                      }}
                      single
                      size={CarouselSize.Small}
                      style={{ width: '100%' }}
                      type="scroll"
                    />
                  </Stack>
                </Section>
                <Section classNames={styles.sectionMarginBottom}>
                  <Stack
                    align="center"
                    direction="vertical"
                    flexGap="m"
                    fullWidth
                  >
                    <h3>Recommended articles for you</h3>
                    <Carousel
                      carouselScrollMenuProps={{
                        children: sampleNewsList.map((item: NewsItem) => (
                          <Card
                            bordered
                            children={
                              <Link
                                classNames="pointer"
                                href={item.url}
                                target="_blank"
                                rel="noopener"
                                style={{
                                  height: '100%',
                                  textDecoration: 'none',
                                  width: '100%',
                                }}
                                underline={false}
                              >
                                <Stack
                                  align="center"
                                  direction="vertical"
                                  fullWidth
                                  justify="center"
                                  style={{ height: '100%' }}
                                >
                                  <div
                                    className={styles.blogImage}
                                    role="presentation"
                                    style={{
                                      background: `url(${item.image}) no-repeat`,
                                      backgroundSize: 'cover',
                                    }}
                                  ></div>
                                  <h3
                                    className={styles.blogImageTitle}
                                    style={{ fontSize: '18px' }}
                                  >
                                    {item.title}
                                  </h3>
                                  <p className={styles.blogImageDescription}>
                                    {item.description}
                                  </p>
                                </Stack>
                              </Link>
                            }
                            height={352}
                            style={{
                              cursor: 'pointer',
                              minWidth: 256,
                            }}
                            tabIndex={0}
                            width={256}
                          />
                        )),
                        containerPadding: 8,
                        gap: 24,
                      }}
                      size={CarouselSize.Small}
                      style={{ width: '100%' }}
                      type="scroll"
                    />
                  </Stack>
                </Section>
              </Col>
            )}
            {filteredRoleList.length > 0 && isDesktop && (
              <Col span={screens.lg ? 3 : 4}>
                <Section style={{ height: '100%' }}>
                  <div
                    ref={jobCardListRef}
                    style={{
                      height: 'calc(100vh - 41px)',
                      overflowY: 'scroll',
                    }}
                  >
                    <List
                      items={filteredRoleList}
                      layout="vertical"
                      listClassNames={styles.jobListDesktop}
                      renderItem={(item: Role) => (
                        <Card
                          aria-current={selectedRole === item.index}
                          bordered
                          classNames={
                            selectedRole === item.index ? 'selected' : ''
                          }
                          dropShadow={
                            selectedRole === item.index ||
                            jobCardDropShadow === item.index
                          }
                          onClick={() => {
                            setSelectedRole(item.index);
                            filteredRoleList.map((i) => ({
                              selected: i.index === selectedRole,
                            }));
                            if (
                              canUseDom() &&
                              jobDescriptionHeaderRef.current &&
                              isDesktop
                            ) {
                              const accordionSectionElement =
                                document?.getElementById('accordionSection');
                              const accordionTopOffset: number =
                                accordionSectionElement?.offsetTop || 0;
                              const accordionOffsetHeight: number =
                                accordionSectionElement?.offsetHeight || 0;
                              const headerOffset: number =
                                accordionTopOffset +
                                  accordionOffsetHeight +
                                  24 || 0;
                              window?.scrollTo({
                                behavior: 'smooth',
                                top: headerOffset,
                              });
                            }
                          }}
                          onMouseOver={(e) => setJobCardDropShadow(item.index)}
                          onMouseLeave={(e) => setJobCardDropShadow(undefined)}
                          children={
                            <Stack direction="vertical" flexGap="m" fullWidth>
                              <Stack
                                align="flex-start"
                                direction="horizontal"
                                flexGap="xs"
                                fullWidth
                                justify="space-between"
                              >
                                <h3
                                  style={{
                                    fontSize: '20px',
                                    lineHeight: '24px',
                                  }}
                                >
                                  {item.title}
                                </h3>
                                {item.priority === 0 && (
                                  <Tooltip
                                    content="Designated as an important hire for the company."
                                    placement="top"
                                    portal
                                    theme={TooltipTheme.dark}
                                    maxWidth={200}
                                    width={200}
                                  >
                                    <Icon
                                      color="var(--red-secondary-color)"
                                      path={IconName.mdiFire}
                                      style={{ marginTop: 4 }}
                                    />
                                  </Tooltip>
                                )}
                              </Stack>
                              <Stack
                                align="flex-start"
                                direction="horizontal"
                                flexGap="xs"
                              >
                                <Icon path={IconName.mdiMapMarkerOutline} />
                                <p style={{ padding: 0 }}>
                                  {typeof item.geo === 'string'
                                    ? item.geo
                                    : item.geo?.[0] + ' and 1 more'}
                                </p>
                              </Stack>
                              <p style={{ padding: 0 }}>{item.role}</p>
                              {item.location && (
                                <Pill label={`${item.location}`} theme="grey" />
                              )}
                            </Stack>
                          }
                          height={'auto'}
                          role="button"
                          style={{
                            cursor: 'pointer',
                            background:
                              selectedRole === item.index
                                ? 'var(--primary-background1-color)'
                                : 'var(--background-color)',
                            border:
                              selectedRole === item.index
                                ? '1px solid var(--primary-color)'
                                : '1px solid var(--border-color)',
                            marginBottom: '16px',
                            minWidth: '100%',
                          }}
                          tabIndex={0}
                          width={'100%'}
                        />
                      )}
                    />
                  </div>
                </Section>
              </Col>
            )}
            {isDesktop && (
              <Col span={screens.lg ? 9 : 8}>
                {filteredRoleList.length > 0 && (
                  <Section>
                    <Section
                      ref={jobDescriptionHeaderRef}
                      style={{ zIndex: 1 }}
                    >
                      <Row
                        gutter={[16, 16]}
                        style={{
                          background: 'var(--background-color)',
                          borderBottom: '1px solid var(--border-color)',
                          marginBottom: 32,
                          padding: '0 16px 24px 16px',
                        }}
                      >
                        <Stack
                          align="center"
                          direction="vertical"
                          flexGap="ml"
                          fullWidth
                        >
                          <Stack
                            align="center"
                            direction="vertical"
                            flexGap="xxxs"
                            fullWidth
                          >
                            <h1
                              style={{
                                marginBottom: 0,
                                textAlign: 'center',
                              }}
                            >
                              {getSelectedJobTitle()}
                            </h1>
                            <div className="octuple-subtitle octuple-subtitle__medium">
                              {getSelectedJobGeo()}
                            </div>
                          </Stack>
                          {getSelectedJobLocation() !== undefined && (
                            <div>
                              <Pill
                                label={`${getSelectedJobLocation()}`}
                                theme="grey"
                              />
                            </div>
                          )}
                          <Stack
                            align="center"
                            direction="horizontal"
                            flexGap="m"
                            fullWidth
                            justify="center"
                          >
                            <Button
                              text="Apply now"
                              variant={ButtonVariant.Primary}
                            />
                            <Button
                              text={
                                getSelectedJobCartStatus()
                                  ? 'Remove from cart'
                                  : 'Add to Job Cart'
                              }
                              onClick={() =>
                                getSelectedJobCartStatus()
                                  ? updateJobCart(
                                      false,
                                      getSelectedJobCartIndex()
                                    )
                                  : updateJobCart(true)
                              }
                              variant={ButtonVariant.Primary}
                            />
                            <Dropdown overlay={shareOverlay()}>
                              <Button
                                ariaLabel="Share job"
                                iconProps={{ path: IconName.mdiShare }}
                                shape={ButtonShape.Round}
                                variant={ButtonVariant.Secondary}
                              />
                            </Dropdown>
                          </Stack>
                        </Stack>
                      </Row>
                    </Section>
                    <Section
                      ref={jobDescriptionContentRef}
                      style={{ paddingBottom: 80, zIndex: 0 }}
                    >
                      <Row>
                        <h2
                          style={{
                            margin: '24px 0',
                            padding: 0,
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          Job description
                        </h2>
                      </Row>
                      <Row gutter={[24, 24]}>
                        <Col span={screens.lg ? 9 : 8}>
                          <Section>{getSelectedJobDescription()}</Section>
                        </Col>
                        <Col span={screens.lg ? 3 : 4}>
                          <Section style={{ height: '100%' }}>
                            <div
                              ref={matchScoreCardRef}
                              style={{ padding: '24px 0' }}
                            >
                              <Card
                                bordered
                                children={
                                  <Stack
                                    align="center"
                                    direction="vertical"
                                    flexGap="m"
                                    fullWidth
                                  >
                                    <h3
                                      style={{
                                        fontSize: '20px',
                                        lineHeight: '24px',
                                      }}
                                    >
                                      Get Matched
                                    </h3>
                                    <p
                                      style={{
                                        padding: 0,
                                        textAlign: 'center',
                                      }}
                                    >
                                      Upload Your Resume And See Jobs That Match
                                      Your Skills And Experience
                                    </p>
                                    <Button
                                      buttonWidth={ButtonWidth.fill}
                                      classNames={styles.uploadButton}
                                      onClick={() =>
                                        setUploadModalVisible(true)
                                      }
                                      text="Upload your resume"
                                      variant={ButtonVariant.Secondary}
                                    />
                                    <p
                                      style={{
                                        fontSize: '12px',
                                        lineHeight: '16px',
                                        padding: 0,
                                        textAlign: 'center',
                                      }}
                                    >
                                      Your match score will appear here after
                                      your resume is uploaded.
                                    </p>
                                  </Stack>
                                }
                                height={'auto'}
                                width={'100%'}
                              />
                            </div>
                          </Section>
                        </Col>
                      </Row>
                    </Section>
                  </Section>
                )}
                {filteredRoleList.length > 0 && (
                  <Section classNames={styles.sectionMarginBottom}>
                    <Stack
                      align="center"
                      direction="vertical"
                      flexGap="m"
                      fullWidth
                    >
                      <h3>People you may work with</h3>
                      <Carousel
                        carouselScrollMenuProps={{
                          children: sampleEmployeeList.map((item: Employee) => (
                            <Card
                              aria-current={selectedEmployee === item.index}
                              bordered
                              classNames={
                                selectedEmployee === item.index
                                  ? 'selected'
                                  : ''
                              }
                              dropShadow={
                                selectedEmployee === item.index ||
                                employeeCardDropShadow === item.index
                              }
                              onClick={() => {
                                setSelectedEmployee(item.index);
                                sampleEmployeeList.map((i) => ({
                                  selected: i.index === selectedRole,
                                }));
                              }}
                              onMouseOver={(e) =>
                                setEmployeeCardDropShadow(item.index)
                              }
                              onMouseLeave={(e) =>
                                setEmployeeCardDropShadow(undefined)
                              }
                              children={
                                <Stack
                                  align="center"
                                  direction="vertical"
                                  fullWidth
                                  justify="center"
                                  style={{ height: '100%' }}
                                >
                                  <Avatar
                                    alt={mockAvatarProps.alt}
                                    children={item.initials}
                                    size="84px"
                                    type="round"
                                    src={mockAvatarProps.src}
                                  />
                                  <h3
                                    style={{
                                      fontSize: '18px',
                                      lineHeight: '24px',
                                      textAlign: 'center',
                                    }}
                                  >
                                    {item.name}
                                  </h3>
                                  <p>{item.department}</p>
                                </Stack>
                              }
                              height={224}
                              role="button"
                              style={{
                                cursor: 'pointer',
                                background:
                                  selectedEmployee === item.index
                                    ? 'var(--primary-background1-color)'
                                    : 'var(--background-color)',
                                border:
                                  selectedEmployee === item.index
                                    ? '1px solid var(--primary-color)'
                                    : '1px solid var(--border-color)',
                                minWidth: 224,
                              }}
                              tabIndex={0}
                              width={280}
                            />
                          )),
                          containerPadding: 8,
                          gap: 24,
                        }}
                        style={{ width: '100%' }}
                        type="scroll"
                      />
                    </Stack>
                  </Section>
                )}
                {filteredRoleList.length > 0 && (
                  <Section classNames={styles.sectionMarginBottom}>
                    <Stack
                      align="center"
                      direction="vertical"
                      flexGap="m"
                      fullWidth
                    >
                      <h3>Similar jobs</h3>
                      <Carousel
                        carouselScrollMenuProps={{
                          children: filteredRoleList.map((item: Role) => (
                            <Card
                              aria-current={selectedRole === item.index}
                              bordered
                              classNames={
                                selectedRole === item.index ? 'selected' : ''
                              }
                              dropShadow={
                                selectedRole === item.index ||
                                jobCardDropShadow === item.index
                              }
                              onClick={() => {
                                setSelectedRole(item.index);
                                filteredRoleList.map((i) => ({
                                  selected: i.index === selectedRole,
                                }));
                                if (
                                  canUseDom() &&
                                  jobDescriptionHeaderRef.current &&
                                  isDesktop
                                ) {
                                  const accordionSectionElement =
                                    document?.getElementById(
                                      'accordionSection'
                                    );
                                  const accordionTopOffset: number =
                                    accordionSectionElement?.offsetTop || 0;
                                  const accordionOffsetHeight: number =
                                    accordionSectionElement?.offsetHeight || 0;
                                  const headerOffset: number =
                                    accordionTopOffset +
                                      accordionOffsetHeight +
                                      24 || 0;
                                  window?.scrollTo({
                                    behavior: 'smooth',
                                    top: headerOffset,
                                  });
                                }
                              }}
                              onMouseOver={(e) =>
                                setJobCardDropShadow(item.index)
                              }
                              onMouseLeave={(e) =>
                                setJobCardDropShadow(undefined)
                              }
                              children={
                                <Stack
                                  direction="vertical"
                                  flexGap="m"
                                  fullWidth
                                  style={{ height: '100%' }}
                                >
                                  <Stack
                                    align="flex-start"
                                    direction="horizontal"
                                    flexGap="xs"
                                    fullWidth
                                    justify="space-between"
                                  >
                                    <h3
                                      style={{
                                        fontSize: '18px',
                                        lineHeight: '24px',
                                      }}
                                    >
                                      {item.title}
                                    </h3>
                                    {item.priority === 0 && (
                                      <Tooltip
                                        content="Designated as an important hire for the company."
                                        placement="top"
                                        portal
                                        theme={TooltipTheme.dark}
                                        maxWidth={200}
                                        width={200}
                                      >
                                        <Icon
                                          color="var(--red-secondary-color)"
                                          path={IconName.mdiFire}
                                          style={{ marginTop: 4 }}
                                        />
                                      </Tooltip>
                                    )}
                                  </Stack>
                                  <Stack
                                    align="flex-start"
                                    direction="horizontal"
                                    flexGap="xs"
                                  >
                                    <Icon path={IconName.mdiMapMarkerOutline} />
                                    <p style={{ padding: 0 }}>
                                      {typeof item.geo === 'string'
                                        ? item.geo
                                        : item.geo?.[0] + ' and 1 more'}
                                    </p>
                                  </Stack>
                                  <p style={{ padding: 0 }}>{item.role}</p>
                                  {item.location && (
                                    <Pill
                                      label={`${item.location}`}
                                      size={PillSize.Small}
                                      theme="grey"
                                    />
                                  )}
                                </Stack>
                              }
                              height={256}
                              role="button"
                              style={{
                                cursor: 'pointer',
                                background:
                                  selectedRole === item.index
                                    ? 'var(--primary-background1-color)'
                                    : 'var(--background-color)',
                                border:
                                  selectedRole === item.index
                                    ? '1px solid var(--primary-color)'
                                    : '1px solid var(--border-color)',
                                marginBottom: '16px',
                                minWidth: '100%',
                              }}
                              tabIndex={0}
                              width={280}
                            />
                          )),
                          containerPadding: 8,
                          gap: 24,
                        }}
                        style={{ width: '100%' }}
                        type="scroll"
                      />
                    </Stack>
                  </Section>
                )}
                <Section classNames={styles.sectionMarginBottom}>
                  <Stack
                    align="center"
                    direction="vertical"
                    flexGap="m"
                    fullWidth
                  >
                    <h3>Recommended videos for you</h3>
                    <Carousel
                      carouselScrollMenuProps={{
                        children: sampleVideoList.map((item: VideoItem) => (
                          <Card
                            bordered
                            children={
                              <Stack
                                align="center"
                                direction="vertical"
                                fullWidth
                                justify="center"
                                style={{ height: '100%' }}
                              >
                                {!isDesktop && item.mobileVideo}
                                {isDesktop && item.desktopVideo}
                                <h3
                                  className={styles.blogImageTitle}
                                  style={{ fontSize: '18px' }}
                                >
                                  {item.title}
                                </h3>
                                <p className={styles.blogImageDescription}>
                                  {item.description}
                                </p>
                              </Stack>
                            }
                            height={380}
                            style={{
                              minWidth: 616,
                            }}
                            tabIndex={0}
                            width={616}
                          />
                        )),
                        containerPadding: 8,
                        gap: 24,
                      }}
                      single
                      size={CarouselSize.Large}
                      style={{ width: '100%' }}
                      type="scroll"
                    />
                  </Stack>
                </Section>
                <Section classNames={styles.sectionMarginBottom}>
                  <Stack
                    align="center"
                    direction="vertical"
                    flexGap="m"
                    fullWidth
                  >
                    <h3>Recommended articles for you</h3>
                    <Carousel
                      carouselScrollMenuProps={{
                        children: sampleNewsList.map((item: NewsItem) => (
                          <Card
                            bordered
                            children={
                              <Link
                                classNames="pointer"
                                href={item.url}
                                target="_blank"
                                rel="noopener"
                                style={{
                                  height: '100%',
                                  textDecoration: 'none',
                                  width: '100%',
                                }}
                                underline={false}
                              >
                                <Stack
                                  align="center"
                                  direction="vertical"
                                  fullWidth
                                  justify="center"
                                  style={{ height: '100%' }}
                                >
                                  <div
                                    className={styles.blogImage}
                                    role="presentation"
                                    style={{
                                      background: `url(${item.image}) no-repeat`,
                                      backgroundSize: 'cover',
                                    }}
                                  ></div>
                                  <h3
                                    className={styles.blogImageTitle}
                                    style={{ fontSize: '18px' }}
                                  >
                                    {item.title}
                                  </h3>
                                  <p className={styles.blogImageDescription}>
                                    {item.description}
                                  </p>
                                </Stack>
                              </Link>
                            }
                            height={352}
                            style={{
                              cursor: 'pointer',
                              minWidth: 256,
                            }}
                            tabIndex={0}
                            width={256}
                          />
                        )),
                        containerPadding: 8,
                        gap: 24,
                      }}
                      size={CarouselSize.Large}
                      style={{ width: '100%' }}
                      type="scroll"
                    />
                  </Stack>
                </Section>
                {filteredRoleList.length > 0 && (
                  <Section classNames={styles.sectionMarginBottom}>
                    <Stack
                      align="center"
                      direction="vertical"
                      flexGap="m"
                      fullWidth
                    >
                      <h3>Perks and benefits</h3>
                      <List
                        items={samplePerksList}
                        itemProps={{ role: 'listitem' }}
                        layout={!isDesktop ? 'vertical' : 'horizontal'}
                        role="list"
                        renderItem={(item: PerksItem) => (
                          <Stack
                            align="center"
                            direction="vertical"
                            flexGap="xs"
                            justify="center"
                            style={{
                              margin: !isDesktop ? '24px auto' : '16px 48px',
                            }}
                          >
                            <Icon
                              path={item.icon}
                              size="56px"
                              color="var(--primary-color)"
                            />
                            <p>{item.description}</p>
                          </Stack>
                        )}
                        style={{ textAlign: 'center' }}
                      />
                    </Stack>
                  </Section>
                )}
              </Col>
            )}
          </Row>
        </Section>
        {isDesktop && (
          <Modal
            actions={
              <Stack
                align="center"
                direction="horizontal"
                flexGap="m"
                fullWidth
                justify="center"
              >
                <Button
                  buttonWidth={ButtonWidth.fitContent}
                  onClick={() => setFirstRunVisible(false)}
                  text="Skip"
                  variant={ButtonVariant.Neutral}
                />
              </Stack>
            }
            aria-label="Upload your resume"
            body={
              <Stack
                align="center"
                direction="vertical"
                flexGap="m"
                justify="center"
                fullWidth
                style={{ height: '100%' }}
              >
                <h1 style={{ margin: 0 }}>
                  Welcome to eightfold.ai's Career Center
                </h1>
                <p>
                  Streamline your search by uploading your resume to be matched
                  with positions that best suit your qualifications.
                </p>
                <Dropzone
                  {...uploadProps}
                  fullWidth={!isDesktop}
                  classNames={styles.uploadModalDropzone}
                  size={UploadSize.Medium}
                  style={{ minWidth: !isDesktop ? 200 : 520 }}
                />
                <p style={{ textAlign: 'center' }}>
                  Don't have a resume? Use our resume builder.
                </p>
                <Button
                  buttonWidth={ButtonWidth.fitContent}
                  text="Build your resume"
                  variant={ButtonVariant.Secondary}
                />
                <p>
                  **Uploading a resume is not a formal application for
                  employment**
                </p>
              </Stack>
            }
            closeButtonProps={{
              ariaLabel: 'Skip',
            }}
            maskClosable={false}
            modalClassNames={styles.firstRunModal}
            onClose={() => setFirstRunVisible(false)}
            size={ModalSize.large}
            visible={firstRunVisible}
          />
        )}
        <Modal
          aria-label="Upload your resume"
          body={
            <Stack
              align="center"
              direction="vertical"
              flexGap="m"
              justify="center"
              fullWidth
              style={{ height: '100%', paddingBottom: 100 }}
            >
              <h1>
                Upload your resume and see jobs that match your skills and
                experience
              </h1>
              <Dropzone
                {...uploadProps}
                fullWidth={!isDesktop}
                classNames={styles.uploadModalDropzone}
                size={UploadSize.Medium}
                style={{ minWidth: !isDesktop ? 200 : 520 }}
              />
              <p style={{ textAlign: 'center' }}>
                Don't have a resume? Use our resume builder.
              </p>
              <Button
                buttonWidth={ButtonWidth.fitContent}
                text="Build your resume"
                variant={ButtonVariant.Secondary}
              />
            </Stack>
          }
          closeButtonProps={{
            ariaLabel: 'Close',
          }}
          modalClassNames={styles.uploadModal}
          onClose={() => setUploadModalVisible(false)}
          size={ModalSize.fullscreen}
          visible={uploadModalVisible}
        />
      </Content>
      <AppFooter />
      <SnackbarContainer />
    </Layout>
  );
}

export default PCSLoggedOut;
