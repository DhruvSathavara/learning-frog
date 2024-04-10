/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
})


app.frame('blocks/third', (c) => {
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
        this is third frame!
      </div>
    ),
    intents: [
      <Button>go to the first frame</Button>,
      <Button.Transaction target='/mint'>Mint here</Button.Transaction>,
    ],
  })
})



devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
// export { GET as secondGET, POST as secondPOST } 