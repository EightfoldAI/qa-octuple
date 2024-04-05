'use client';

import React, { useMemo, useState } from 'react';
import {
  Col,
  Grid,
  Layout,
  Link,
  LinkButton,
  LinkButtonShape,
  List,
  Row,
} from '@eightfold.ai/octuple';
import { LaunchPadNavItem } from '@/packages/utils/mockdata.types';
import { launchPadNavigationList } from '@/packages/utils/mockdata';
import AppFooter from '@/modules/Shared/components/AppFooter';

const { Article, Content, Header, Nav } = Layout;

const { useBreakpoint } = Grid;

import styles from './Home.page.module.css';

function HomePage() {
  const [bannerImage, setBannerImage] = useState<string>('');

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
  useMemo(() => {
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
  }, []);

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
          style={{ textAlign: 'center' }} // inline style or classNames may be used to apply styles
        />
      </Nav>
      <Header
        classNames={styles.bannerImage}
        role="banner"
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

export default HomePage;
