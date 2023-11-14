import * as React from 'react';
import Head from 'next/head';
import { MyAppProps } from 'next/app';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

import { Brand } from '~/common/app.config';
import { Providers } from '~/common/state/Providers';
import { apiQuery } from '~/common/util/trpc.client';

import 'katex/dist/katex.min.css';
import '~/common/styles/CodePrism.css';
import '~/common/styles/GithubMarkdown.css';


const MyApp = ({ Component, emotionCache, pageProps }: MyAppProps) =>
  <>

    <Head>
      <title>{Brand.Title.Common}</title>
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no' />
    </Head>

    <Providers emotionCache={emotionCache}>
      <Component {...pageProps} />
    </Providers>

    <VercelAnalytics debug={false} />

  </>;

// enables the React Query API invocation
export default apiQuery.withTRPC(MyApp);