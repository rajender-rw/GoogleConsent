'use client';

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from "react";
import { pageview } from "../lib/gtagHelper"

export default function GoogleAnalytics() {
    const GAM = process.env.GA_MEASUREMENT_ID || 'G-HG7PDPFY4H';
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = pathname + searchParams.toString();

        pageview(GAM, url);

    }, [pathname, searchParams, GAM]);
    return (
        <>
            <Script strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GAM}`} />
            <Script id='google-analytics' strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                    gtag('consent', 'default', {
                    'ad_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'granted',
                    'analytics_storage': 'granted'
                    'functionality_storage': 'granted',
                    'personalization_storage': 'outcome',
                    'security_storage': 'granted',
                });
                
                gtag('config', '${GAM}', {
                    page_path: window.location.pathname,
                });
                `,
                }}
            />
        </>
    )
}