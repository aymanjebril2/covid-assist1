import React from 'react'
import { primaryColor, textColor, fontFamily } from "./Footer";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerContainerCss: {
    background: primaryColor,
    fontFamily,
    width: '100%',
    position: 'fixed',
    bottom: '0',
    '& p': {
      padding: '24px 0',
      textAlign: 'center',
      color: textColor,
      fontSize: '14px',
      margin: '0',
      [theme.breakpoints.down('xs')]: {
        fontSize: '12px',
      },
    },
  },
}));

function FooterLink() {
  const classes = useStyles();
  const { footerContainerCss } = classes;

  return (
    <div className={footerContainerCss}>
      <p>Copyright © Covid-Assist 2021. All rights reserved.</p>
    </div>
  );
}

export default FooterLink;