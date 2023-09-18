export default function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end()

    const { userAddr } = 

    res.status(200).json({
        balance: '0xab73651a',
        project: {

        }
    })
}