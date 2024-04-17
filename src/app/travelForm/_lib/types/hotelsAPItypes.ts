const hotelIdSample = {
  data: [
    {
      timezone: "Asia/Tokyo",
      roundtrip: "GgEwIAAoATICZW46BXRva3lvQABKAFAA",
      city_name: "Tokyo",
      dest_id: "-246227",
      latitude: 35.68596,
      type: "ci",
      nr_hotels: 5652,
      lc: "en",
      city_ufi: null,
      hotels: 5652,
      country: "Japan",
      cc1: "jp",
      rtl: 0,
      region: "Tokyo-to",
      dest_type: "city",
      name: "Tokyo",
      label: "Tokyo, Tokyo-to, Japan",
      longitude: 139.72952,
      b_max_los_data: [Object],
      image_url:
        "https://cf.bstatic.com/xdata/images/city/150x150/619746.jpg?k=ff577d4b01bf1332a711e09ad9b320b516b4cbfca9122d20d9dfc6a6e3fab9d2&o=",
      id: "eyJjaXR5X25hbWUiOiJUb2t5byIsImNvdW50cnkiOiJKYXBhbiIsImRlc3RfaWQiOiItMjQ2MjI3IiwiZGVzdF90eXBlIjoiY2l0eSJ9",
    },
  ],
  status: true,
  message: "Successful",
};

const hotelListSample = {
  data: [
    {
      reviewScoreWord: "Good",
      checkout: [Object],
      wishlistName: "Seoul",
      isFirstPage: true,
      reviewScore: 7.1,
      checkoutDate: "2024-04-28",
      longitude: 126.9889297,
      reviewCount: 225,
      checkinDate: "2024-04-19",
      rankingPosition: 0,
      currency: "KRW",
      latitude: 37.5727393,
      priceBreakdown: [Object],
      checkin: [Object],
      position: 0,
      propertyClass: 3,
      id: 10743249,
      qualityClass: 0,
      photoUrls: [Array],
      countryCode: "kr",
      optOutFromGalleryChanges: 0,
      ufi: -716583,
      name: "HERTZ Hotel",
      mainPhotoId: 492054786,
      accuratePropertyClass: 3,
      blockIds: [Array],
    },
  ],
  meta: { currentPage: 1, limit: 20, totalRecords: 140, totalPage: 7 },
  status: true,
  message: "140 properties",
};

const hotel = hotelListSample.data[0];

export type HotelIdTypes = typeof hotelIdSample;
export type HotelListTypes = typeof hotelListSample;
export type HotelTypes = typeof hotel;
