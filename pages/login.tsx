import { Typography } from '@mui/material';
import React from 'react';
import Link from 'next/link';

type CopyProps = {
    site: string;
    sx?:object;
}

function CopyRight(props:CopyProps){

    return(
        <Typography>
            {'Copyright © '}
            <Link color="inherit" href="https://www.avanade.com">
               {props.site}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}          
        </Typography>
    )
}

export default function LoginPage() {
  return (
    <>
    <div>login</div>
    <CopyRight site="https://www.avanade.com" sx={{mt:8, mb: 4}} />
    </>
  )
}
