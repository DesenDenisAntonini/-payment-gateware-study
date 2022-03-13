export default async function handler(req, res) {
    const stripe = require('stripe')('pk_test_51Kbz0hAK2uIKVwRUCQzQ8jC1uQiEcJIZF1FeSyCImYtTCj6iDVLSKJrfanbtMptqBq8m9eYuETiCbzbGrLR7E0sW00DKm1k2vj')
  
    const charge = await stripe.charges.create({
      amout: req.body.amout, // centavos
      currency: 'brl',
      source: req.body.token,
    })
  
    res.status(200).json(charge);
  }
  