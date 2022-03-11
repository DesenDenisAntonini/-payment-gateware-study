// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const stripe = require('stripe')('pk_test_51Kbz0hAK2uIKVwRUCQzQ8jC1uQiEcJIZF1FeSyCImYtTCj6iDVLSKJrfanbtMptqBq8m9eYuETiCbzbGrLR7E0sW00DKm1k2vj')

  const paymentIntent = await stripe.paymentIntent.create({
    amout: 2000, // centavos
    currency: 'brl',
    payment_method_types: ['card']
  })

  res.status(200).json(paymentIntent)
}
