
let arc = require('@architect/functions')
let parseBody = arc.http.helpers.bodyParser
// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')(process.env.STR_SK_LIVE, {
  maxNetworkRetries: 2, // Retry a request twice before giving up
});

let linkMap = {
  'book': process.env.LINK_BOOK,
  'book5': process.env.LINK_BOOK_TEAM,
  'book10': process.env.LINK_BOOK_TEAM,
  'community': process.env.LINK_COMMUNITY,
  'community5': process.env.LINK_COMMUNITY_TEAM,
  'community10': process.env.LINK_COMMUNITY_TEAM,
  'creator': process.env.LINK_CREATOR,
}


let idMap = {
  'book': 'price_1HfuidKWe8hdGUWLxmTQHB5E',
  'book5': 'price_1HiMDjKWe8hdGUWLUZbpgbap',
  'book10': 'price_1HiMD7KWe8hdGUWLbGuROpgi',
  'community': 'price_1HfukDKWe8hdGUWLBQOZ4OdZ',
  'community5': 'price_1HiMGjKWe8hdGUWL7wMuDnpw',
  'community10': 'price_1HiMGjKWe8hdGUWLuZsTBCq2',
  'creator': 'price_1HfulVKWe8hdGUWL6lu8zjdy',
}

// let wrapcurlies = txt => `{{${txt}}}`
let wrapcurlies = txt => txt
exports.handler = async function http(request) {
  let body = parseBody(request) // Pass the entire request object
  let item = idMap[body.item]
  // console.log({item, body})
  if (!item) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'unrecognized item',
        body,
        item
      })
    }
  }
  let coupon = body.coupon
  let referer = body.referer
  let success_url = linkMap[body.item]
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
        price: wrapcurlies(item),
        quantity: 1,
      }],
    discounts: coupon ? [{
      coupon: wrapcurlies(coupon)
    }] : undefined,
    metadata: {
      referer: referer || 'no_referer'
    },
    mode: 'payment',
    success_url,
    cancel_url: 'https://learninpublic.org/#buy',
  });

  return {
    statusCode: 200,
    // headers: { 'content-type': 'text/html; charset=utf8' },
    body: JSON.stringify({success_url, id: session.id, customer_email: session.customer_email})
  }
}