const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const items = req.body.cartItems

        const transformedItems = items.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.title,
                    images: [req.headers.origin+item.image],
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        }))
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?cancel=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}