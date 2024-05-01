'use client';

import React, { useState } from 'react';
import {
  Button,
  ButtonShape,
  Col,
  Dropdown,
  Grid,
  Layout,
  Link,
  LinkButton,
  LinkButtonShape,
  List,
  Menu,
  MenuItemType,
  MenuVariant,
  Row,
} from '@eightfold.ai/octuple';
import { LaunchPadNavItem } from '@/packages/utils/mockdata.types';
import { launchPadNavigationList } from '@/packages/utils/mockdata';
import AppFooter from '@/modules/Shared/components/AppFooter';
import useMounted from '@/packages/hooks/useMounted';

const { Article, Content, Header, Nav } = Layout;

const { useBreakpoint } = Grid;

import styles from './HomeWrapper.client.module.css';

function HomePageWrapper() {
  const [bannerImage, setBannerImage] = useState<string>(
    'https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/CoolPixelWavesSizeProfile.svg'
  );

  /**
   * Use the Octuple Grid useBreakpoint hook to determine the screen size.
   * The Grid is mobile first, so the screen size is determined by the breakpoint.
   * Each breakpoint is a boolean value that is true if the screen is at least that size.
   * The breakpoints are xs, sm, md, lg, and xl. They size UP from mobile, not DOWN from Desktop.
   * e.g. xs is 0, sm is 600, md is 900, lg is 1200, and xl is 1600.
   */
  const screens = useBreakpoint();
  const isDesktop = screens.md;

  /**
   * Randomize the banner image on page load.
   */
  useMounted(() => {
    const bannerImageCycle = [
      'https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/CoolPixelWavesSizeProfile.svg',
      'https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/BlueWavesSizeProfile.svg',
      'https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/ColorfulChevronsSizeProfile.svg',
      'https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/ColorfulHexagonsSizeProfile.svg',
      'https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/CoolBlobsSizeProfile.svg',
      'https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/HexagonFilledSizeProfile.svg',
      'https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/HexagonOutlinedSizeProfile.svg',
      'https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/SideWarmWavesSizeProfile.svg',
      'https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/TopWarmWavesSizeProfile.svg',
      'https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/PieChartSizeProfile.svg',
    ];

    const randomBannerImageNumber: number = Math.floor(
      Math.random() * bannerImageCycle.length
    );

    setBannerImage(bannerImageCycle[randomBannerImageNumber]);
  });

  const PCSLinkOverlay = (item: LaunchPadNavItem) => (
    <Menu
      items={[
        {
          disabled: item.launchPadNavigationSubList?.[0].disabled,
          type: MenuItemType.link,
          text: 'Logged out',
          href: item.launchPadNavigationSubList?.[0].url,
        },
        {
          disabled: item.launchPadNavigationSubList?.[1].disabled,
          type: MenuItemType.link,
          text: 'Apply form',
          href: item.launchPadNavigationSubList?.[1].url,
        },
        {
          disabled: item.launchPadNavigationSubList?.[2].disabled,
          type: MenuItemType.link,
          text: 'Logged in',
          href: item.launchPadNavigationSubList?.[2].url,
        },
      ]}
      role="list"
      variant={MenuVariant.neutral}
    />
  );

  return (
    <Layout classNames="octuple">
      <Nav aria-label="Main navigation" classNames={styles.nav}>
        <div id="branding-container" className={styles.brandingContainer}>
          <Link
            className={styles.logoContainer}
            title="Eightfold AI" // Typically strings are localized, however, this is a static string because prototype.
            aria-label="Eightfold AI logo"
            href="/"
          >
            <img
              className={styles.companyLogo}
              src="https://static.vscdn.net/images/logos/eightfold_logo_no_text.svg"
              alt="Eightfold AI - UX"
            />
          </Link>
          {isDesktop && (
            <>
              <div className={styles.verticalLine}></div>
              <div className={styles.productName}>
                <div className={styles.productNamePrimary}>Eightfold AI</div>
                <div className={styles.productNameSecondary}>UX Team</div>
              </div>
            </>
          )}
        </div>
        <List
          items={launchPadNavigationList}
          itemProps={{ role: 'none' }}
          layout="horizontal"
          role="menubar"
          renderItem={(item: LaunchPadNavItem) => (
            <>
              {item.index === 0 && (
                <Dropdown
                  initialFocus
                  overlay={PCSLinkOverlay(item)}
                >
                  <Button
                    classNames={styles.navButton}
                    disabled={item.disabled}
                    role="menuitem"
                    shape={ButtonShape.Rectangle}
                    text={item.text}
                    variant={item.variant}
                  />
                </Dropdown>
              )}
              {item.index >= 1 && (
                <LinkButton
                  classNames={styles.navButton}
                  disabled={item.disabled}
                  href={item.url}
                  role="menuitem"
                  shape={LinkButtonShape.Rectangle}
                  text={item.text}
                  variant={item.variant}
                />
              )}
            </>
          )}
          style={{ textAlign: 'center' }} // inline style or classNames may be used to apply styles
        />
      </Nav>
      <Header
        classNames={styles.bannerImage}
        style={{
          backgroundImage: `url(${bannerImage})`,
          height: isDesktop ? '320px' : '200px',
        }}
      />
      <Content>
        <Article classNames={styles.article}>
          <Row>
            <Col offset={!isDesktop ? 1 : 3} span={!isDesktop ? 10 : 6}>
              {/* Because the Layout implments `classNames="octuple"`, elements like `<h1>` and `<p>` use Octuple BEM styles. */}
              <h1>
                Welcome to the Eightfold AI UX Team Octuple Prototype Launchpad
              </h1>
              <p>
                This is a collection of prototypes that represent the
                deliverables of the UX Team built using the Octuple Design
                System. Click on a link in the main navigation to get started!
              </p>
            </Col>
          </Row>
        </Article>
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default HomePageWrapper;
