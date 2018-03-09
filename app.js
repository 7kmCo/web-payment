const checkoutBtn = document.querySelector('#checkoutBtn')

if (window.PaymentRequest) {
  const supportedPaymentMethods = [
    {
      supportedMethods: ['basic-card']
    }
  ]

  const allDisplayItems = [
    {
      label: 'Subtotal',
      amount: {
        currency: 'NOK',
        value: 1250,
      }
    },
    {
      label: 'Discount (10%)',
      amount: {
        currency: 'NOK',
        value: -125,
      }
    },
    {
      label: 'Tax',
      amount: {
        currency: 'NOK',
        value: 100,
      }
    }
  ]

  const paymentDetails = {
    total: {
      label: 'Total cost',
      amount: {
        currency: 'NOK',
        value: '1225'
      }
    },
    displayItems: allDisplayItems
  }

  const options = {}

  checkoutBtn.onclick = () => {
    const paymentRequest = new PaymentRequest(supportedPaymentMethods, paymentDetails, options)
    paymentRequest.show()
      .then(paymentRes => console.log(paymentRes))
      .catch(err => console.log(err))
  }
  
} else {
  const paymentResult = document.querySelector('#paymentResult')
  paymentResult.innerHTML = 'Sorry, Web Payment Request is not supported in your browser! You need to handle request in old way.'

  checkoutBtn.style.display = 'none'
}