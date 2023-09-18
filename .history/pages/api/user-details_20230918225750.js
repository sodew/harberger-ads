export default function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end()

    const { userAddr } = req.query

    res.status(200).json({
        balance: '0xab73651a',
        userAddr,
        project: {
            name: 'FtC',
            description: 'Funding the Commons',
            
        }
    })
}