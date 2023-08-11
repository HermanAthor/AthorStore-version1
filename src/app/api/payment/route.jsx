// //import Stripe from "stripe";
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const { NextResponse } = require("next/server");

// export async function handler(req, res) {
//   if (req.method === "POST") {
//     const items = req.body.cartItems;

//     const transformedItems = items.map((item) => ({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: item.title,
//           images: [req.headers.origin + item.image],
//         },
//         unit_amount: item.price * 100,
//       },
//       quantity: item.quantity,
//     }));
//     try {
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create({
//         line_items: transformedItems,
//         mode: "payment",
//         success_url: `${req.headers.origin}/?success=true`,
//         cancel_url: `${req.headers.origin}/?cancel=true`,
//       });
//       res.redirect(303, session.url);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }
const POST = async (request) => {
  const body = await request.json();
  const { cartItems } = body;

  console.log(cartItems);

  try {
    const checkoutSession = await stripe.checkout.sessions.create({
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.product.title,
          },
          unit_amount: item.product.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `http://localhost:3000/`,
      cancel_url: `http://localhost:3000/`,
    });

    return new NextResponse.json({ url: checkoutSession.url });
  } catch (err) {
    console.error(err.message);

    return new NextResponse.json(
      {
        error: err.message,
      },
      { status: 500 }
    );
  }
};
