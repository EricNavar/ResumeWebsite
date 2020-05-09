import React from 'react';
import ErrorIcon from './../assets/svg/ErrorBubble.svg';
import Link from '@material-ui/core/Link'

export default function Error404Page() {
  React.useEffect(() => {
    document.title = 'Page not found';
  });
  return (
    <div style={{textAlign:'center', marginTop: 32}}>
      <img alt="" src={ErrorIcon} style={{width:150}}/>
      <h2><b/>
        Error 404
        <br/>
        Page does not exist
      <b/></h2>
      <Link href='/'>
        Return to home
      </Link>
    </div>
  );
}