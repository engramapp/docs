import { group } from "./config/sidebar";


export const sidebar = [
    group('home', {
        items: [
            { label: 'Home', link: '/' },
            {
                label: 'Themes',
                autogenerate: { directory: 'themes' },
            },
            {
                label: 'Plugins',
                autogenerate: { directory: 'plugins' },
            },
        ]
    }),
    group('reference', {
        items: [
            group('reference.cssVariables', {
				items: ['reference/css-variables'],
			}),
            group('reference.api', {
				items: ['reference/api'],
			}),
            // {
            //     label: 'TypeScript API',
            //     items: [
            //         'reference/api',
            //     ],
            // },
            { label: 'Manifest', link: 'reference/manifest' },
            { label: 'Versions', link: 'reference/versions' },
        ]
    })
    // { label: 'Home', link: '/' },
    // {
    //     label: 'Themes',
    //     autogenerate: { directory: 'themes' },
    // },
    // {
    //     label: 'Plugins',
    //     autogenerate: { directory: 'plugins' },
    // },
    // {
    //     label: 'Reference',
    //     items: [
    //         {
    //             label: 'CSS Variables',
    //             items: [
    //                 'reference/css-variables',
    //             ],
    //         },
    //         {
    //             label: 'TypeScript API',
    //             items: [
    //                 'reference/api',
    //             ],
    //         },
    //         { label: 'Manifest', link: 'reference/manifest' },
    //         { label: 'Versions', link: 'reference/versions' },
    //     ]
    // },
]