export const ordersByCustomerId = {};

ordersByCustomerId.singleItemNotShipped = [
  {
    id: 10,
    orderId: 198772,
    items: [
      {
        id: 100000,
        name: "Apple Iphone XR",
        plan: "AT&T Unlimited Extra",
        skuId: "sku1234",
        skuAttributes: {
          model: "Iphone XR",
          manufacturer: "Apple",
          color: "Yellow",
          size: "64 GB",
        },
        quantity: 1,
        telephoneNumber: "409.406.3322",
        status: "ordered",
        complete: true,
        estimatedShipDateRange: {
          fromDate: "2020-09-06T13:39:52.774-05:00",
          toDate: "2020-09-06T13:39:52.774-05:00",
        },
        newEstimatedShipDateRange: {},
        userAcceptedDelay: true,
      },
    ],
    status: "ordered",
    complete: true,
    shipingAddress: {
      street: "437 Lytton",
      city: "Palo Alto",
      state: "CA",
      zip: "94301",
    },
    shipments: [],
  },
];

ordersByCustomerId.singleItemShipped = [
  {
    id: 10,
    orderId: 198772,
    items: [
      {
        id: 100000,
        name: "Apple Iphone XR",
        plan: "AT&T Unlimited Extra",
        skuId: "sku1234",
        skuAttributes: {
          model: "Iphone XR",
          manufacturer: "Apple",
          color: "Yellow",
          size: "64 GB",
        },
        quantity: 1,
        telephoneNumber: "409.406.3322",
        status: "shipped",
        complete: true,
        estimatedShipDateRange: {},
        newEstimatedShipDateRange: {},
        userAcceptedDelay: false,
      },
    ],
    status: "shipped",
    complete: false,
    shipingAddress: {
      street: "437 Lytton",
      city: "Palo Alto",
      state: "CA",
      zip: "94301",
    },
    shipments: [
      {
        id: 1,
        items: [100000],
        carrier: "USPS",
        trackingNumber: "9400100000000000000000",
        trackingUrl:
          "https://tools.usps.com/go/TrackConfirmAction?tRef=fullpage&tLc=2&text28777=&tLabels=9400100000000000000000%2C",
        estimatedDeliveryDate: "2020-10-06T13:39:52.774-05:00",
        shipDate: "2020-10-02T13:39:52.774-05:00",
      },
    ],
  },
];

ordersByCustomerId.singleItemDelivered = [
  {
    id: 10,
    orderId: 198772,
    items: [
      {
        id: 100000,
        name: "Apple Iphone XR",
        plan: "AT&T Unlimited Extra",
        skuId: "sku1234",
        skuAttributes: {
          model: "Iphone XR",
          manufacturer: "Apple",
          color: "Yellow",
          size: "64 GB",
        },
        quantity: 1,
        telephoneNumber: "409.406.3322",
        status: "delivered",
        complete: true,
        estimatedShipDateRange: {},
        newEstimatedShipDateRange: {},
        userAcceptedDelay: false,
      },
    ],
    status: "delivered",
    complete: true,
    shipingAddress: {
      street: "437 Lytton",
      city: "Palo Alto",
      state: "CA",
      zip: "94301",
    },
    shipments: [
      {
        id: 1,
        items: [100000],
        carrier: "USPS",
        trackingNumber: "9400100000000000000000",
        trackingUrl:
          "https://tools.usps.com/go/TrackConfirmAction?tRef=fullpage&tLc=2&text28777=&tLabels=9400100000000000000000%2C",
        estimatedDeliveryDate: "2020-10-06T13:39:52.774-05:00",
        shipDate: "2020-10-02T13:39:52.774-05:00",
      },
    ],
  },
];

ordersByCustomerId.multipleItemsNotShipped = [
  {
    id: 10,
    orderId: 198772,
    items: [
      {
        id: 100000,
        name: "Apple Iphone XR",
        plan: "AT&T Unlimited Extra",
        skuId: "sku1234",
        skuAttributes: {
          model: "Iphone XR",
          manufacturer: "Apple",
          color: "Yellow",
          size: "64 GB",
        },
        quantity: 1,
        telephoneNumber: "409.406.3322",
        status: "ordered",
        complete: true,
        estimatedShipDateRange: {
          fromDate: "2020-09-06T13:39:52.774-05:00",
          toDate: "2020-09-06T13:39:52.774-05:00",
        },
        newEstimatedShipDateRange: {},
        userAcceptedDelay: true,
      },
      {
        id: 100001,
        name: "Apple Iphone 12",
        plan: "AT&T Unlimited Extra",
        skuId: "sku1235",
        skuAttributes: {
          model: "Iphone 12",
          manufacturer: "Apple",
          color: "Black",
          size: "256 GB",
        },
        quantity: 2,
        telephoneNumber: "409.406.3322",
        status: "ordered",
        complete: false,
        estimatedShipDateRange: {
          fromDate: "2020-09-06T13:39:52.774-05:00",
          toDate: "2020-09-06T13:39:52.774-05:00",
        },
        newEstimatedShipDateRange: {},
        userAcceptedDelay: false,
      },
    ],
    status: "ordered",
    complete: true,
    shipingAddress: {
      street: "437 Lytton",
      city: "Palo Alto",
      state: "CA",
      zip: "94301",
    },
    shipments: [],
  },
];

ordersByCustomerId.multipleItemsShipped = [
  {
    id: 10,
    orderId: 198772,
    items: [
      {
        id: 100000,
        name: "Apple Iphone XR",
        plan: "AT&T Unlimited Extra",
        skuId: "sku1234",
        skuAttributes: {
          model: "Iphone XR",
          manufacturer: "Apple",
          color: "Yellow",
          size: "64 GB",
        },
        quantity: 1,
        telephoneNumber: "409.406.3322",
        status: "shipped",
        complete: false,
        estimatedShipDateRange: {},
        newEstimatedShipDateRange: {},
        userAcceptedDelay: false,
      },
      {
        id: 100001,
        name: "Apple Iphone 12",
        plan: "AT&T Unlimited Extra",
        skuId: "sku1235",
        skuAttributes: {
          model: "Iphone 12",
          manufacturer: "Apple",
          color: "Black",
          size: "256 GB",
        },
        quantity: 2,
        telephoneNumber: "409.406.3322",
        status: "shipped",
        complete: false,
        estimatedShipDateRange: {},
        newEstimatedShipDateRange: {},
        userAcceptedDelay: false,
      },
    ],
    status: "shipped",
    complete: false,
    shipingAddress: {
      street: "437 Lytton",
      city: "Palo Alto",
      state: "CA",
      zip: "94301",
    },
    shipments: [
      {
        id: 1,
        items: [100000, 100001],
        carrier: "USPS",
        trackingNumber: "9400100000000000000000",
        trackingUrl:
          "https://tools.usps.com/go/TrackConfirmAction?tRef=fullpage&tLc=2&text28777=&tLabels=9400100000000000000000%2C",
        estimatedDeliveryDate: "2020-10-06T13:39:52.774-05:00",
        shipDate: "2020-10-02T13:39:52.774-05:00",
      },
    ],
  },
];

ordersByCustomerId.multipleItemsDelivered = [
  {
    id: 10,
    orderId: 198772,
    items: [
      {
        id: 100000,
        name: "Apple Iphone XR",
        plan: "AT&T Unlimited Extra",
        skuId: "sku1234",
        skuAttributes: {
          model: "Iphone XR",
          manufacturer: "Apple",
          color: "Yellow",
          size: "64 GB",
        },
        quantity: 1,
        telephoneNumber: "409.406.3322",
        status: "delivered",
        complete: true,
        estimatedShipDateRange: {},
        newEstimatedShipDateRange: {},
        userAcceptedDelay: false,
      },
      {
        id: 100001,
        name: "Apple Iphone 12",
        plan: "AT&T Unlimited Extra",
        skuId: "sku1235",
        skuAttributes: {
          model: "Iphone 12",
          manufacturer: "Apple",
          color: "Black",
          size: "256 GB",
        },
        quantity: 2,
        telephoneNumber: "409.406.3322",
        status: "delivered",
        complete: false,
        estimatedShipDateRange: {},
        newEstimatedShipDateRange: {},
        userAcceptedDelay: false,
      },
    ],
    status: "delivered",
    complete: true,
    shipingAddress: {
      street: "437 Lytton",
      city: "Palo Alto",
      state: "CA",
      zip: "94301",
    },
    shipments: [
      {
        id: 1,
        items: [100000, 100001],
        carrier: "USPS",
        trackingNumber: "9400100000000000000000",
        trackingUrl:
          "https://tools.usps.com/go/TrackConfirmAction?tRef=fullpage&tLc=2&text28777=&tLabels=9400100000000000000000%2C",
        estimatedDeliveryDate: "2020-10-06T13:39:52.774-05:00",
        shipDate: "2020-10-02T13:39:52.774-05:00",
      },
    ],
  },
];

export const orderByOrderId = {};

orderByOrderId.orderNotShipped = {
  id: 10,
  orderId: 198772,
  items: [
    {
      id: 100000,
      name: "Apple Iphone XR",
      plan: "AT&T Unlimited Extra",
      skuId: "sku1234",
      skuAttributes: {
        model: "Iphone XR",
        manufacturer: "Apple",
        color: "Yellow",
        size: "64 GB",
      },
      quantity: 1,
      telephoneNumber: "409.406.3322",
      status: "ordered",
      complete: false,
      estimatedShipDateRange: {
        fromDate: "2020-09-06T13:39:52.774-05:00",
        toDate: "2020-09-06T13:39:52.774-05:00",
      },
      newEstimatedShipDateRange: {},
      userAcceptedDelay: false,
    },
    {
      id: 100004,
      name: "Asus Rog Phone 3",
      plan: "AT&T Unlimited Extra",
      skuId: "sku1234",
      skuAttributes: {
        model: "Rog Phone 3",
        manufacturer: "Asus",
        color: "Black",
        size: "256 GB",
      },
      quantity: 2,
      telephoneNumber: "409.406.3322",
      status: "ordered",
      complete: false,
      estimatedShipDateRange: {
        fromDate: "2020-09-06T13:39:52.774-05:00",
        toDate: "2020-09-06T13:39:52.774-05:00",
      },
      newEstimatedShipDateRange: {},
      userAcceptedDelay: false,
    },
  ],
  status: "ordered",
  complete: false,
  shipingAddress: {
    street: "437 Lytton",
    city: "Palo Alto",
    state: "CA",
    zip: "94301",
  },
  shipments: [],
};

orderByOrderId.orderDelayedShipping = {
  id: 10,
  orderId: 198772,
  items: [
    {
      id: 100000,
      name: "Apple Iphone XR",
      plan: "AT&T Unlimited Extra",
      skuId: "sku1234",
      skuAttributes: {
        model: "Iphone XR",
        manufacturer: "Apple",
        color: "Yellow",
        size: "64 GB",
      },
      quantity: 1,
      telephoneNumber: "409.406.3322",
      status: "ordered",
      complete: false,
      estimatedShipDateRange: {
        fromDate: "2020-09-06T13:39:52.774-05:00",
        toDate: "2020-09-06T13:39:52.774-05:00",
      },
      newEstimatedShipDateRange: {
        fromDate: "2020-10-02T13:39:52.774-05:00",
        toDate: "2020-10-02T13:39:52.774-05:00",
      },
      userAcceptedDelay: false,
    },
    {
      id: 100004,
      name: "Asus Rog Phone 3",
      plan: "AT&T Unlimited Extra",
      skuId: "sku1234",
      skuAttributes: {
        model: "Rog Phone 3",
        manufacturer: "Asus",
        color: "Black",
        size: "256 GB",
      },
      quantity: 2,
      telephoneNumber: "409.406.3322",
      status: "ordered",
      complete: false,
      estimatedShipDateRange: {
        fromDate: "2020-09-06T13:39:52.774-05:00",
        toDate: "2020-09-06T13:39:52.774-05:00",
      },
      newEstimatedShipDateRange: {
        fromDate: "2020-10-02T13:39:52.774-05:00",
        toDate: "2020-10-02T13:39:52.774-05:00",
      },
      userAcceptedDelay: false,
    },
  ],
  status: "ordered",
  complete: false,
  shipingAddress: {
    street: "437 Lytton",
    city: "Palo Alto",
    state: "CA",
    zip: "94301",
  },
  shipments: [],
};

orderByOrderId.orderDelayedShippingUserAccepted = {
  id: 10,
  orderId: 198772,
  items: [
    {
      id: 100000,
      name: "Apple Iphone XR",
      plan: "AT&T Unlimited Extra",
      skuId: "sku1234",
      skuAttributes: {
        model: "Iphone XR",
        manufacturer: "Apple",
        color: "Yellow",
        size: "64 GB",
      },
      quantity: 1,
      telephoneNumber: "409.406.3322",
      status: "ordered",
      complete: false,
      estimatedShipDateRange: {
        fromDate: "2020-09-06T13:39:52.774-05:00",
        toDate: "2020-09-06T13:39:52.774-05:00",
      },
      newEstimatedShipDateRange: {
        fromDate: "2020-10-02T13:39:52.774-05:00",
        toDate: "2020-10-02T13:39:52.774-05:00",
      },
      userAcceptedDelay: true,
    },
    {
      id: 100004,
      name: "Asus Rog Phone 3",
      plan: "AT&T Unlimited Extra",
      skuId: "sku1234",
      skuAttributes: {
        model: "Rog Phone 3",
        manufacturer: "Asus",
        color: "Black",
        size: "256 GB",
      },
      quantity: 2,
      telephoneNumber: "409.406.3322",
      status: "ordered",
      complete: false,
      estimatedShipDateRange: {
        fromDate: "2020-09-06T13:39:52.774-05:00",
        toDate: "2020-09-06T13:39:52.774-05:00",
      },
      newEstimatedShipDateRange: {
        fromDate: "2020-10-02T13:39:52.774-05:00",
        toDate: "2020-10-02T13:39:52.774-05:00",
      },
      userAcceptedDelay: true,
    },
  ],
  status: "ordered",
  complete: false,
  shipingAddress: {
    street: "437 Lytton",
    city: "Palo Alto",
    state: "CA",
    zip: "94301",
  },
  shipments: [],
};

orderByOrderId.orderShipped = {
  id: 10,
  orderId: 198772,
  items: [
    {
      id: 100000,
      name: "Apple Iphone XR",
      plan: "AT&T Unlimited Extra",
      skuId: "sku1234",
      skuAttributes: {
        model: "Iphone XR",
        manufacturer: "Apple",
        color: "Yellow",
        size: "64 GB",
      },
      quantity: 1,
      telephoneNumber: "409.406.3322",
      status: "shipped",
      complete: false,
      estimatedShipDateRange: {
        fromDate: "2020-09-06T13:39:52.774-05:00",
        toDate: "2020-09-06T13:39:52.774-05:00",
      },
      newEstimatedShipDateRange: {
        fromDate: "2020-10-02T13:39:52.774-05:00",
        toDate: "2020-10-02T13:39:52.774-05:00",
      },
      userAcceptedDelay: true,
    },
    {
      id: 100001,
      name: "Apple Iphone 12",
      plan: "AT&T Unlimited Extra",
      skuId: "sku1234",
      skuAttributes: {
        model: "Iphone 12",
        manufacturer: "Apple",
        color: "White",
        size: "128 GB",
      },
      quantity: 1,
      telephoneNumber: "409.406.3322",
      status: "shipped",
      complete: false,
      estimatedShipDateRange: {
        fromDate: "2020-09-06T13:39:52.774-05:00",
        toDate: "2020-09-06T13:39:52.774-05:00",
      },
      newEstimatedShipDateRange: {
        fromDate: "2020-10-02T13:39:52.774-05:00",
        toDate: "2020-10-02T13:39:52.774-05:00",
      },
      userAcceptedDelay: true,
    },

    {
      id: 100004,
      name: "Asus Rog Phone 3",
      plan: "AT&T Unlimited Extra",
      skuId: "sku1234",
      skuAttributes: {
        model: "Rog Phone 3",
        manufacturer: "Asus",
        color: "Black",
        size: "256 GB",
      },
      quantity: 2,
      telephoneNumber: "409.406.3322",
      status: "shipped",
      complete: false,
      estimatedShipDateRange: {
        fromDate: "2020-09-06T13:39:52.774-05:00",
        toDate: "2020-09-06T13:39:52.774-05:00",
      },
      newEstimatedShipDateRange: {
        fromDate: "2020-10-02T13:39:52.774-05:00",
        toDate: "2020-10-02T13:39:52.774-05:00",
      },
      userAcceptedDelay: true,
    },
  ],
  status: "shipped",
  complete: false,
  shipingAddress: {
    street: "437 Lytton",
    city: "Palo Alto",
    state: "CA",
    zip: "94301",
  },
  shipments: [
    {
      id: 1,
      items: [100000, 100001, 100004],
      carrier: "USPS",
      trackingNumber: "9400100000000000000000",
      trackingUrl:
        "https://tools.usps.com/go/TrackConfirmAction?tRef=fullpage&tLc=2&text28777=&tLabels=9400100000000000000000%2C",
      estimatedDeliveryDate: "2020-10-06T13:39:52.774-05:00",
      shipDate: "2020-10-02T13:39:52.774-05:00",
    },
  ],
};

orderByOrderId.orderDelivered = {
  id: 10,
  orderId: 198772,
  items: [
    {
      id: 100000,
      name: "Apple Iphone XR",
      plan: "AT&T Unlimited Extra",
      skuId: "sku1234",
      skuAttributes: {
        model: "Iphone XR",
        manufacturer: "Apple",
        color: "Yellow",
        size: "64 GB",
      },
      quantity: 1,
      telephoneNumber: "409.406.3322",
      status: "delivered",
      complete: false,
      estimatedShipDateRange: {
        fromDate: "2020-09-06T13:39:52.774-05:00",
        toDate: "2020-09-06T13:39:52.774-05:00",
      },
      newEstimatedShipDateRange: {},
      userAcceptedDelay: true,
    },
    {
      id: 100001,
      name: "Apple Iphone 12",
      plan: "AT&T Unlimited Extra",
      skuId: "sku1234",
      skuAttributes: {
        model: "Iphone 12",
        manufacturer: "Apple",
        color: "White",
        size: "128 GB",
      },
      quantity: 1,
      telephoneNumber: "409.406.3322",
      status: "delivered",
      complete: false,
      estimatedShipDateRange: {
        fromDate: "2020-09-06T13:39:52.774-05:00",
        toDate: "2020-09-06T13:39:52.774-05:00",
      },
      newEstimatedShipDateRange: {},
      userAcceptedDelay: true,
    },
    {
      id: 100003,
      name: "Apple Iphone 12",
      plan: "AT&T Unlimited Extra",
      skuId: "sku1234",
      skuAttributes: {
        model: "Iphone 12",
        manufacturer: "Apple",
        color: "White",
        size: "128 GB",
      },
      quantity: 1,
      telephoneNumber: "409.406.3322",
      status: "delivered",
      complete: false,
      estimatedShipDateRange: {
        fromDate: "2020-09-06T13:39:52.774-05:00",
        toDate: "2020-09-06T13:39:52.774-05:00",
      },
      newEstimatedShipDateRange: {},
      userAcceptedDelay: true,
    },

    {
      id: 100004,
      name: "Asus Rog Phone 3",
      plan: "AT&T Unlimited Extra",
      skuId: "sku1234",
      skuAttributes: {
        model: "Rog Phone 3",
        manufacturer: "Asus",
        color: "Black",
        size: "256 GB",
      },
      quantity: 2,
      telephoneNumber: "409.406.3322",
      status: "delivered",
      complete: true,
      estimatedShipDateRange: {
        fromDate: "2020-09-06T13:39:52.774-05:00",
        toDate: "2020-09-06T13:39:52.774-05:00",
      },
      newEstimatedShipDateRange: {},
      userAcceptedDelay: true,
    },
  ],
  status: "delivered",
  complete: true,
  shipingAddress: {
    street: "437 Lytton",
    city: "Palo Alto",
    state: "CA",
    zip: "94301",
  },
  shipments: [
    {
      id: 1,
      items: [100000, 100001, 100004],
      carrier: "USPS",
      trackingNumber: "9400100000000000000000",
      trackingUrl:
        "https://tools.usps.com/go/TrackConfirmAction?tRef=fullpage&tLc=2&text28777=&tLabels=9400100000000000000000%2C",
      estimatedDeliveryDate: "2020-10-06T13:39:52.774-05:00",
      shipDate: "2020-10-02T13:39:52.774-05:00",
    },
  ],
};
