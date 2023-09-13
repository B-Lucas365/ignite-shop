import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRETE_KEY;

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRETE_KEY não está definido no ambiente.");
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2023-08-16",
  appInfo: {
    name: "Ignite shop",
  }
});


