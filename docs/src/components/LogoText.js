import * as React from 'react';
import { Box } from '@mui/material';
import NextLink from 'next/link';
import styles from "./LogoButton.module.css"

export default function LogoText(){
    return <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} >
        <NextLink href={"/"} style={{textDecoration:"none"}}><Box
          className={styles.container}
        >
                <div className={`${styles.letterContainer} ${styles.startLetterContainer}`}>
                    <div className={styles.logoLetter}>
                        B
                    </div>
                </div>
                <div className={styles.letterContainer}>
                    <div className={styles.logoLetter}>
                        A
                    </div>
                </div>
                <div className={styles.letterContainer}>
                    <div className={styles.logoLetter}>
                        N
                    </div>
                </div>
                <div className={styles.letterContainer}>
                    <div className={styles.logoLetter}>
                        K
                    </div>
                </div>
                <div className={styles.letterContainer}>
                    <div className={styles.logoLetter}>
                        A
                    </div>
                </div>
                <div className={styles.letterContainer}>
                    <div className={styles.logoLetter}>
                        Y
                    </div>
                </div>
                <div className={styles.letterContainer}>
                    <div className={styles.logoLetter}>
                        0
                    </div>
                </div>
        </Box></NextLink>
        {/* <Typography textTransform={"capitalize"} color={"#8CBED6"} fontFamily={`sans-serif`} fontWeight={"bold"}>BANKING SIMPLIFIED</Typography> */}
        </Box>;
}
