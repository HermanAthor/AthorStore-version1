const { NextResponse } = require("next/server");
const Stripe = require("stripe");

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  try {
    if (body.length > 0) {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        // shipping_options: [
        //   { shipping_rate: "shr_1NJgGfFFOcRRviB5IKHisAI1" },
        //   { shipping_rate: "shr_1NJgFzFFOcRRviB5RNlrrnhM" },
        // ],
        invoice_creation: {
          enabled: true,
        },
        line_items: body.map((item) => {
          return {
            price_data: {
              currency: "dkk",
              product_data: {
                name: item.name,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 10,
            },
          };
        }),
        phone_number_collection: {
          enabled: true,
        },
        success_url: `${request.headers.get("origin")}/success`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.message);
  }
}
