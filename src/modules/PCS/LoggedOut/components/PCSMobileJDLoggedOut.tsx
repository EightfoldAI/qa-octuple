'use client';

import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Avatar,
  Button,
  ButtonShape,
  ButtonVariant,
  ButtonWidth,
  Card,
  Carousel,
  CarouselSize,
  Col,
  Dropdown,
  Grid,
  Icon,
  IconName,
  Layout,
  Link,
  LinkButton,
  LinkButtonVariant,
  List,
  Menu,
  MenuItemType,
  Modal,
  ModalSize,
  OcFile,
  Pill,
  Row,
  Select,
  SelectShape,
  snack,
  SnackbarContainer,
  Stack,
  Tooltip,
  TooltipTheme,
  Upload,
  UploadFile,
  UploadFileStatus,
  UploadProps,
  UploadSize,
  PillSize,
  LinkButtonShape,
} from '@eightfold.ai/octuple';
import {
  AppProps,
  Employee,
  langs,
  NewsItem,
  PCSNavItem,
  PerksItem,
  Role,
  VideoItem,
} from '@/packages/utils/mockdata.types';
import {
  mockAvatarProps,
  sampleEmployeeList,
  sampleNewsList,
  samplePCSNavigationList,
  samplePerksList,
  sampleRoleList,
  sampleVideoList,
} from '@/packages/utils/mockdata';
import AppFooter from '@/modules/Shared/components/AppFooter';

const { Content, Header, Nav, Section } = Layout;
const { Dropzone } = Upload;

const { useBreakpoint } = Grid;

import styles from './PCSMobileJDLoggedOut.module.css';

function PCSMobileJDLoggedOutWrapper(_props: PropsWithChildren<AppProps>) {
  const searchParams = useSearchParams();

  const [myLang, setMyLang] = useState(langs.en);
  const [selectedEmployee, setSelectedEmployee] = useState<number | undefined>(
    0
  );
  const [selectedRole, setSelectedRole] = useState<number | undefined>(0);
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

  const screens = useBreakpoint();
  const isDesktop = screens.md;

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
    }
  }, []);

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
    sampleRoleList[selectedRole].cart = value;
    sampleRoleList.forEach((job) => {
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
    const jobTitle = sampleRoleList[selectedRole]?.title;
    return jobTitle;
  };

  const getSelectedJobGeo = (): string | undefined => {
    if (selectedRole === undefined) {
      return undefined;
    }
    let jobGeo = sampleRoleList[selectedRole]?.geo;
    if (typeof jobGeo !== 'string') {
      jobGeo = jobGeo?.join(' • ');
    }
    return jobGeo;
  };

  const getSelectedJobLocation = (): string | undefined => {
    if (selectedRole === undefined) {
      return undefined;
    }
    const jobLocation = sampleRoleList[selectedRole]?.location;
    return jobLocation;
  };

  const getSelectedJobDescription = (): React.ReactNode => {
    if (selectedRole === undefined) {
      return null;
    }
    const jobDescription = sampleRoleList[selectedRole]?.jd;
    return jobDescription;
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
   * Mock Menu overlay for the share button.
   */
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
          href: 'https://facebook.com',
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
          style={{ textAlign: 'center' }}
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
        style={{
          background:
            'url("https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/career_hero_8.jpg") center center no-repeat',
          backgroundSize: 'cover',
          height: !isDesktop ? '240px' : '320px',
        }}
      />
      <Content>
        <Section style={{ padding: '24px' }}>
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <Section>
                <Section>
                  <Row gutter={[16, 16]}>
                    <Stack
                      align="stretch"
                      direction="horizontal"
                      flexGap="m"
                      fullWidth
                      justify="space-between"
                    >
                      <LinkButton
                        href="/pcs/loggedout"
                        iconProps={{ path: IconName.mdiArrowLeft }}
                        shape={LinkButtonShape.Pill}
                        text="All jobs"
                        variant={LinkButtonVariant.SystemUI}
                      />
                      <Dropdown overlay={shareOverlay()}>
                        <Button
                          ariaLabel="Share job"
                          iconProps={{ path: IconName.mdiShare }}
                          shape={ButtonShape.Round}
                          style={{ margin: '0 8px' }}
                          variant={ButtonVariant.Secondary}
                        />
                      </Dropdown>
                    </Stack>
                  </Row>
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
                              ? updateJobCart(false, getSelectedJobCartIndex())
                              : updateJobCart(true)
                          }
                          variant={ButtonVariant.Primary}
                        />
                      </Stack>
                    </Stack>
                  </Row>
                </Section>
                <Section style={{ marginBottom: 80 }}>
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
                  <Row>
                    <Section>{getSelectedJobDescription()}</Section>
                  </Row>
                </Section>
              </Section>
              <Section style={{ marginBottom: 80, position: 'relative' }}>
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
                        Upload Your Resume And See Jobs That Match Your Skills
                        And Experience
                      </p>
                      <Button
                        buttonWidth={ButtonWidth.fill}
                        classNames={styles.uploadButton}
                        onClick={() => setUploadModalVisible(true)}
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
                        Your match score will appear here after your resume is
                        uploaded.
                      </p>
                    </Stack>
                  }
                  height={'auto'}
                  width={'100%'}
                />
              </Section>
              <Section style={{ marginBottom: 80, position: 'relative' }}>
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
                            selectedEmployee === item.index ? 'selected' : ''
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
              <Section style={{ marginBottom: 80, position: 'relative' }}>
                <Stack
                  align="center"
                  direction="vertical"
                  flexGap="m"
                  fullWidth
                >
                  <h3>Similar jobs</h3>
                  <Carousel
                    carouselScrollMenuProps={{
                      children: sampleRoleList.map((item: Role) => (
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
                            sampleRoleList.map((i) => ({
                              selected: i.index === selectedRole,
                            }));
                          }}
                          onMouseOver={(e) => setJobCardDropShadow(item.index)}
                          onMouseLeave={(e) => setJobCardDropShadow(undefined)}
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
              <Section style={{ marginBottom: 80, position: 'relative' }}>
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
                            minWidth: !isDesktop ? 256 : 616,
                          }}
                          tabIndex={0}
                          width={!isDesktop ? 256 : 616}
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
              <Section style={{ marginBottom: 80, position: 'relative' }}>
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
              <Section style={{ marginBottom: 80, position: 'relative' }}>
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
            </Col>
          </Row>
        </Section>
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

export default PCSMobileJDLoggedOutWrapper;
