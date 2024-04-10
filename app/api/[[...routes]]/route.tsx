/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  return c.res({
    action: '/second',
    image: (
      <div style={{
        color: 'white',
        backgroundColor: 'black',
        fontSize: 60,
        letterSpacing: '-0.025em',
        lineHeight: 1.4,
        marginTop: 30,
        padding: '0 120px',
        whiteSpace: 'pre-wrap'
      }}>
        this is our first frame!
      </div>
    ),
    intents: [
      <Button>go to the next frame</Button>,
    ],
  })
})

app.frame('/second', (c) => {
  return c.res({
    action: '/',
    image: (
      <div style={{
        color: 'white',
        backgroundColor: 'black',
        fontSize: 60,
        letterSpacing: '-0.025em',
        lineHeight: 1.4,
        marginTop: 30,
        padding: '0 120px',
        whiteSpace: 'pre-wrap'
      }}>
        this is our second frame!
      </div>
    ),
    intents: [
      <Button>go to the first frame</Button>,
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
