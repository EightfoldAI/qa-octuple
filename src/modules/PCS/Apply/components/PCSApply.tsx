'use client';

import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Button,
  ButtonVariant,
  Col,
  Form,
  Grid,
  Layout,
  LinkButton,
  List,
  OcFile,
  Row,
  Select,
  SelectShape,
  snack,
  SnackbarContainer,
  Stack,
  TextInputWidth,
  UploadFile,
  UploadFileStatus,
  UploadProps,
  TextInputShape,
  TextInput,
  LinkButtonVariant,
} from '@eightfold.ai/octuple';
import { UploadModal } from '@/modules/Shared/components/UploadModal/UploadModal';
import { AppProps, PCSNavItem } from '@/packages/utils/mockdata.types';
import {
  samplePCSNavigationList,
  sampleRoleList,
} from '@/packages/utils/mockdata';
import { countries } from '@/packages/utils/countries';
import AppFooter from '@/modules/Shared/components/AppFooter';

const { Content, Header, Nav, Section } = Layout;

const { useBreakpoint } = Grid;

import styles from './pcsapply.module.css';

function PCSApply(_props: PropsWithChildren<AppProps>) {
  const searchParams = useSearchParams();

  const [selectedRole, setSelectedRole] = useState<number | undefined>(0);
  const [data, setData] = useState<Record<string, unknown>>({});
  const [thumbUrl, setThumbUrl] = useState<string>('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploadModalVisible, setUploadModalVisible] = useState<boolean>(false);

  const defaultCountry = countries.find(
    (country) => country.name === 'United States'
  );
  const [myCountry, setMyCountry] = useState(defaultCountry);

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

  const screens = useBreakpoint();
  const isDesktop = screens.md;

  const [form] = Form.useForm();
  const formLayout = {
    labelCol: { push: isDesktop ? 3 : 0, span: isDesktop ? 6 : 12 },
    wrapperCol: { push: isDesktop ? 3 : 0, span: isDesktop ? 6 : 12 },
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

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
  const countryOptions = Object.keys(countries).map((k) => ({
    flag: (countries as any)[k].flag,
    name: (countries as any)[k].name,
    text: (countries as any)[k].dial_code,
    value: k,
  }));

  const onCountrySelectChange = (options: any[]) => {
    options.forEach((option) => {
      setMyCountry(option);
    });
  };

  /**
   * Log the current mock state of the component to the console.
   * Also ensures state updates are not missed.
   * This may be done in a more sophisticated way in vscode apps.
   */
  useEffect(() => {
    console.log('currentStep', currentStep);
  }, [currentStep]);

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
            name={'apply-form'}
            onFinish={onFinish}
            requiredMark
            style={{ paddingBottom: 80 }}
          >
            {(visibleStepFilter as any)?.['step one'] && (
              <fieldset className={styles.fieldSet}>
                <legend style={{ display: 'none' }}>
                  Application {currentStep}
                </legend>
                <Form.Item
                  name={'resume'}
                  label="Resume"
                  labelAlign="left"
                  rules={[{ required: true, validateTrigger: 'onSubmit' }]}
                  style={{ marginBottom: 8 }}
                >
                  <Stack direction="horizontal" flexGap='xs' fullWidth>
                    <Button
                      htmlType='button'
                      onClick={() => setUploadModalVisible(true)}
                      text="Upload Resume"
                    />
                    {' '}
                    <span style={{ lineHeight: '36px' }}>or</span>
                    {' '}
                    <LinkButton
                      text="Build Resume"
                      variant={LinkButtonVariant.SystemUI}
                    />
                  </Stack>
                </Form.Item>
                <Form.Item
                  name={'first'}
                  label="First name"
                  labelAlign="left"
                  rules={[{ required: true, validateTrigger: 'onSubmit' }]}
                  style={{ marginBottom: 8 }}
                >
                  <TextInput
                    inputWidth={TextInputWidth.fill}
                    placeholder="First name"
                    shape={TextInputShape.Pill}
                  />
                </Form.Item>
                <Form.Item
                  name={'last'}
                  label="Last name"
                  labelAlign="left"
                  rules={[{ required: true, validateTrigger: 'onSubmit' }]}
                  style={{ marginBottom: 8 }}
                >
                  <TextInput
                    inputWidth={TextInputWidth.fill}
                    placeholder="Last name"
                    shape={TextInputShape.Pill}
                  />
                </Form.Item>
                <Form.Item
                  name={'phone'}
                  label="Phone"
                  labelAlign="left"
                  rules={[{ required: true, validateTrigger: 'onSubmit' }]}
                  style={{ marginBottom: 8 }}
                >
                  <Stack direction="horizontal" flexGap="xs" fullWidth>
                    <Select
                      clearable
                      dropdownProps={{
                        width: 120,
                      }}
                      filterable
                      onClear={() => setMyCountry(defaultCountry)}
                      onOptionsChange={onCountrySelectChange}
                      options={countryOptions}
                      shape={SelectShape.Pill}
                      style={{ minWidth: 120, width: 120 }}
                      textInputProps={{
                        placeholder: myCountry?.dial_code,
                      }}
                    />
                    <TextInput
                      htmlType="tel"
                      inputWidth={TextInputWidth.fill}
                      placeholder="Phone"
                      shape={TextInputShape.Pill}
                    />
                  </Stack>
                </Form.Item>
                <Form.Item
                  name={'email'}
                  label="Email"
                  labelAlign="left"
                  rules={[{ required: true, validateTrigger: 'onSubmit' }]}
                  style={{ marginBottom: 8 }}
                >
                  <TextInput
                    htmlType="email"
                    inputWidth={TextInputWidth.fill}
                    placeholder="Email"
                    shape={TextInputShape.Pill}
                  />
                </Form.Item>
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
            )}
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
