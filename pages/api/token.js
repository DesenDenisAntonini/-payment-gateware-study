export default async function handler(req, res) {
    const stripe = require('stripe')('pk_test_51Kbz0hAK2uIKVwRUCQzQ8jC1uQiEcJIZF1FeSyCImYtTCj6iDVLSKJrfanbtMptqBq8m9eYuETiCbzbGrLR7E0sW00DKm1k2vj')
  
    const token = await stripe.tokens.create({
        card: req.body.card,
    })
  
    res.status(200).json(token)
  }
  