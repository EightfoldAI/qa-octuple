import React from 'react';
import { Layout, Link } from '@eightfold.ai/octuple';

const { Footer } = Layout;

function AppFooter() {
  return (
    <Footer classNames="footer">
      <Link
        classNames="footerLink"
        href="https://eightfold.ai"
        title="Visit Eightfold.ai homepage"
        target="_blank"
        rel="noopener noreferrer"
        underline={false}
        variant="secondary"
      >
        Powered by{' '}
        <img
          alt="Powered by Eightfold.ai"
          className="footerLogo"
          height="20"
          src="https://raw.githubusercontent.com/dkilgore-eightfold/static/main/images/eightfold_logo.png"
          width="20"
        />{' '}
        eightfold.ai #WhatsNextForYou
      </Link>
    </Footer>
  );
}

export default AppFooter;
