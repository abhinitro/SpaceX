import React, { PureComponent } from 'react'
import Head from 'next/head'

export default class Meta extends PureComponent {
  render() {
    return (
      <div>
        <Head>

            <title>
                SSR Demo Application
            </title>
        </Head>
      </div>
    )
  }
}
