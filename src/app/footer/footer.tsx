import React from 'react';

const Footer = () => (
    <React.Fragment>
        <footer className="footer">
            We made this website to amplify the voices of the BLM movement, and we plan to add more functionalities in
            the near future. If you have any feature suggestions or resources to share, please DM<span>{' '}
            <a rel="noreferrer" target="_blank" href="https://twitter.com/oddrilynn">
                @oddrilynn
            </a>{' '}</span>
            or<span>{' '}
            <a rel="noreferrer" target="_blank" href="https://twitter.com/4shub">
                @4shub
            </a>{' '}</span>
            on Twitter or send an email to <a href="mailto:shub@shub.club">shub@shub.club</a>.
        </footer>
        <footer className="footer">
            This code is open source (MIT) and available on {' '}
            <a rel="noreferrer" target="_blank" href="https://github.com/4shub/boost.avoice.info">
                GitHub
            </a>
            .
        </footer>
    </React.Fragment>
);

export default Footer;
