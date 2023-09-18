export default function handler(req, res) {
    if (req.method !== 'POST') return res.status(405)
    res.status(200).json({
        balance: '0xab73651a',
        project: {

        }
    })
}