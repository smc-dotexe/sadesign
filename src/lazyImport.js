import { lazy } from 'react'

const lazyImport = (filename) => (
    lazy(() => import(`${filename}`))
    // lazy(() => (
    //     new Promise(resolve => {
    //         setTimeout(
    //             resolve,
    //             1000,
    //         )
    //     })
    //     .then(() => (
    //         import(`${filename}`)
    //     ))
    // ))
)

export default lazyImport