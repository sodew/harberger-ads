import { NextResponse } from "next/server"

export async function POST(req) {
    console.log(`${typeof req}`)
    console.log(`${req.url}`)
    const url = new URL(req.url)
    console.log(JSON.stringify(url, null, 2))

    return NextResponse.json({
        balance: '0xab73651a',
        project: {
            name: 'FtC',
            description: 'Funding the Commons',
        },
        sponsors: [{
            owner: '0x123',
            name: 'Gitcoin',
            logo: 'image.svg',
            link: 'gitcoin.co',
            setPrice: '0x12345'
        },
        {
            owner: '0x345',
            name: 'Celo',
            logo: 'image.svg',
            link: 'celo.xyz',
            setPrice: '0x12345'
        },
        {
            owner: '0x678',
            name: 'Ethereum Foundation',
            logo: 'image.svg',
            link: 'ef.com',
            setPrice: '0x12345'
        }]
    })
}