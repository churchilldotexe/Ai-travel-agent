const flightInfoSample = {
  data: [
    {
      __typename: "SearchLocation",
      city: "New York",
      cityCode: "NYC",
      continent: "North America",
      continentCode: "NA",
      country: "USA",
      countryCode: "US",
      iataCode: "NYC",
      id: 546,
      multipleAirports: true,
      name: "New York",
      state: "New York",
      type: "CITY",
    },
  ],
  status: true,
  message: "Successful",
};

const flightsSample = {
  data: {
    availableFilters: [],
    availableSortTypes: [
      {
        code: "RECOMMENDATION",
        name: "Recommended flights",
        __typename: "SortTypeOption",
      },
    ],
    carrierCodes: [],
    carrierNames: [],
    flights: [
      {
        id: "409827865558549",
        tripId: "0",
        isVI: false,
        includedCabinBaggage: {
          includedPersonalItem: true,
          size3d: {
            height: 25,
            length: 56,
            width: 45,
            __typename: "Size3d",
          },
          pieces: 1,
          weight: 0,
          weightUnit: "kg",
          __typename: "IncludedCabinBaggage",
        },
        includedCheckedBaggage: null,
        bounds: [
          {
            boundId: "0",
            includedCabinBaggage: {
              pieces: 1,
              weight: 0,
              weightUnit: "kg",
              __typename: "IncludedCabinBaggage",
            },
            includedCheckedBaggage: null,
            segments: [
              {
                __typename: "TripSegment",
                segmentId: "00",
                aircraftType: "",
                arrivedAt: "2024-02-16T10:25",
                brandedFareInformation: null,
                includedCabinBaggage: {
                  pieces: 1,
                  weight: null,
                  weightUnit: "kg",
                  __typename: "IncludedCabinBaggage",
                },
                includedCheckedBaggage: null,
                cabinClassName: "Economy",
                departuredAt: "2024-02-15T19:45",
                destination: {
                  code: "LHR",
                  name: "London Heathrow",
                  cityCode: "LON",
                  cityName: "London",
                  airportCode: "LHR",
                  airportName: "London Heathrow",
                  __typename: "RegionNew",
                },
                duration: 31200000,
                equipmentCode: "AIR",
                flightNumber: "BA224",
                marketingCarrier: {
                  code: "BA",
                  name: "British Airways",
                  __typename: "CarrierNew",
                },
                numberOfTechnicalStops: 0,
                operatingCarrier: {
                  code: "BA",
                  name: "British Airways",
                  __typename: "CarrierNew",
                },
                operatingInformation: null,
                origin: {
                  code: "MSY",
                  name: "New Orleans",
                  cityCode: "MSY",
                  cityName: "New Orleans",
                  airportCode: "MSY",
                  airportName: "New Orleans",
                  __typename: "RegionNew",
                },
                segmentDetails: [
                  {
                    paxType: "ADT",
                    numberOfSeatsLeft: 0,
                    __typename: "SegmentDetailsNew",
                  },
                ],
              },
              {
                __typename: "EventSegment",
                segmentId: "0E",
                types: ["STOP"],
                duration: 6900000,
              },
              {
                __typename: "TripSegment",
                segmentId: "01",
                aircraftType: "",
                arrivedAt: "2024-02-16T14:40",
                brandedFareInformation: null,
                includedCabinBaggage: {
                  pieces: 1,
                  weight: null,
                  weightUnit: "kg",
                  __typename: "IncludedCabinBaggage",
                },
                includedCheckedBaggage: null,
                cabinClassName: "Economy",
                departuredAt: "2024-02-16T12:20",
                destination: {
                  code: "CDG",
                  name: "Paris Charles De Gaulle",
                  cityCode: "PAR",
                  cityName: "Paris",
                  airportCode: "CDG",
                  airportName: "Paris Charles De Gaulle",
                  __typename: "RegionNew",
                },
                duration: 4800000,
                equipmentCode: "AIR",
                flightNumber: "BA308",
                marketingCarrier: {
                  code: "BA",
                  name: "British Airways",
                  __typename: "CarrierNew",
                },
                numberOfTechnicalStops: 0,
                operatingCarrier: {
                  code: "BA",
                  name: "British Airways",
                  __typename: "CarrierNew",
                },
                operatingInformation: null,
                origin: {
                  code: "LHR",
                  name: "London Heathrow",
                  cityCode: "LON",
                  cityName: "London",
                  airportCode: "LHR",
                  airportName: "London Heathrow",
                  __typename: "RegionNew",
                },
                segmentDetails: [
                  {
                    paxType: "ADT",
                    numberOfSeatsLeft: 0,
                    __typename: "SegmentDetailsNew",
                  },
                ],
              },
            ],
            __typename: "BoundNew",
          },
          {
            boundId: "1",
            includedCabinBaggage: {
              pieces: 1,
              weight: 0,
              weightUnit: "kg",
              __typename: "IncludedCabinBaggage",
            },
            includedCheckedBaggage: null,
            segments: [
              {
                __typename: "TripSegment",
                segmentId: "10",
                aircraftType: "",
                arrivedAt: "2024-02-29T12:05",
                brandedFareInformation: null,
                includedCabinBaggage: {
                  pieces: 1,
                  weight: null,
                  weightUnit: "kg",
                  __typename: "IncludedCabinBaggage",
                },
                includedCheckedBaggage: null,
                cabinClassName: "Economy",
                departuredAt: "2024-02-29T11:40",
                destination: {
                  code: "LHR",
                  name: "London Heathrow",
                  cityCode: "LON",
                  cityName: "London",
                  airportCode: "LHR",
                  airportName: "London Heathrow",
                  __typename: "RegionNew",
                },
                duration: 5100000,
                equipmentCode: "AIR",
                flightNumber: "BA309",
                marketingCarrier: {
                  code: "BA",
                  name: "British Airways",
                  __typename: "CarrierNew",
                },
                numberOfTechnicalStops: 0,
                operatingCarrier: {
                  code: "BA",
                  name: "British Airways",
                  __typename: "CarrierNew",
                },
                operatingInformation: null,
                origin: {
                  code: "CDG",
                  name: "Paris Charles De Gaulle",
                  cityCode: "PAR",
                  cityName: "Paris",
                  airportCode: "CDG",
                  airportName: "Paris Charles De Gaulle",
                  __typename: "RegionNew",
                },
                segmentDetails: [
                  {
                    paxType: "ADT",
                    numberOfSeatsLeft: 0,
                    __typename: "SegmentDetailsNew",
                  },
                ],
              },
              {
                __typename: "EventSegment",
                segmentId: "1E",
                types: ["STOP"],
                duration: 5400000,
              },
              {
                __typename: "TripSegment",
                segmentId: "11",
                aircraftType: "",
                arrivedAt: "2024-02-29T17:55",
                brandedFareInformation: null,
                includedCabinBaggage: {
                  pieces: 1,
                  weight: null,
                  weightUnit: "kg",
                  __typename: "IncludedCabinBaggage",
                },
                includedCheckedBaggage: null,
                cabinClassName: "Economy",
                departuredAt: "2024-02-29T13:35",
                destination: {
                  code: "MSY",
                  name: "New Orleans",
                  cityCode: "MSY",
                  cityName: "New Orleans",
                  airportCode: "MSY",
                  airportName: "New Orleans",
                  __typename: "RegionNew",
                },
                duration: 37200000,
                equipmentCode: "AIR",
                flightNumber: "BA225",
                marketingCarrier: {
                  code: "BA",
                  name: "British Airways",
                  __typename: "CarrierNew",
                },
                numberOfTechnicalStops: 0,
                operatingCarrier: {
                  code: "BA",
                  name: "British Airways",
                  __typename: "CarrierNew",
                },
                operatingInformation: null,
                origin: {
                  code: "LHR",
                  name: "London Heathrow",
                  cityCode: "LON",
                  cityName: "London",
                  airportCode: "LHR",
                  airportName: "London Heathrow",
                  __typename: "RegionNew",
                },
                segmentDetails: [
                  {
                    paxType: "ADT",
                    numberOfSeatsLeft: 0,
                    __typename: "SegmentDetailsNew",
                  },
                ],
              },
            ],
            __typename: "BoundNew",
          },
        ],
        brandedFares: null,
        availableExtraProducts: [
          {
            configuration: {
              productPreSelection: "NONE",
              __typename: "Configuration",
            },
            productId: "6",
            name: "Checked baggage",
            selectedWithTrip: false,
            sellSpecification: {
              sellPriceBaggage: [
                {
                  maxWeight: 23,
                  numberOfUnits: 1,
                  weightUnit: "kg",
                  price: {
                    price: {
                      value: 19598,
                      currency: {
                        code: "USD",
                        __typename: "Currency",
                      },
                      __typename: "CurrencyAmount",
                    },
                    __typename: "Price",
                  },
                  __typename: "SellPriceBaggageNew",
                },
              ],
              __typename: "SellSpecificationBaggageNew",
            },
            __typename: "ExtraProduct",
          },
        ],
        includedExtraProducts: [],
        selectionKey: "BA224-15Feb24-V_BA308-16Feb24-V_BA309-29Feb24-S_BA225-29Feb24-O,58gm5c",
        type: "RETURN",
        tripCharacteristics: [],
        tripTravelers: [
          {
            id: "4098278655585490",
            ageType: "ADT",
            __typename: "TravelerNew",
          },
        ],
        paymentMethodPrices: [
          {
            name: "VISA",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "VISA Debit",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "VISA Electron",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "VISA Corporate",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "MASTERCARD",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "MAESTRO",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "MASTERCARD Debit",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "MASTERCARD Corporate",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "DINER'S CLUB",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "DISCOVER",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "AMERICAN EXPRESS",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "AMERICAN EXPRESS Corporate",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "JCB",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "JCB Corporate",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "Apple Pay",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "WALLET",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "Google Pay",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "WALLET",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "Affirm",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "WALLET",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "PayPal",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "WALLET",
            __typename: "PaymentMethodPrice",
          },
        ],
        travelerPrices: [
          {
            id: "4098278655585490",
            price: {
              markup: {
                value: 3212,
                __typename: "CurrencyAmount",
              },
              price: {
                value: 121262,
                currency: {
                  code: "USD",
                  __typename: "Currency",
                },
                __typename: "CurrencyAmount",
              },
              vat: {
                value: 54550,
                __typename: "CurrencyAmount",
              },
              __typename: "Price",
            },
            taxesAndFees: [],
            travelerId: "4098278655585490",
            __typename: "TravelerPrice",
          },
        ],
        travelerPricesWithoutPaymentDiscounts: [
          {
            price: {
              markup: {
                value: 3212,
                __typename: "CurrencyAmount",
              },
              price: {
                value: 121262,
                currency: {
                  code: "USD",
                  __typename: "Currency",
                },
                __typename: "CurrencyAmount",
              },
              vat: {
                value: 54550,
                __typename: "CurrencyAmount",
              },
              __typename: "Price",
            },
            taxesAndFees: [],
            travelerId: "4098278655585490",
            __typename: "TravelerPrice",
          },
        ],
        tripTags: [],
        systems: null,
        voucherAmount: {
          value: 0,
          __typename: "CurrencyAmount",
        },
        shareableUrl:
          "https://www.gotogate.com/air/MSYORY15FEB29FEB/1/-/-/c:Y?selectionKey=BA224-15Feb24-V_BA308-16Feb24-V_BA309-29Feb24-S_BA225-29Feb24-O,58gm5c",
        __typename: "Trip",
      },
    ],
    flightsCount: 746,
    filteredFlightsCount: 746,
    quickSortPrices: {
      carrierPromo: {
        value: 64503,
        currency: {
          code: "USD",
          __typename: "Currency",
        },
        __typename: "CurrencyAmount",
      },
      cheapTrip: {
        value: 64503,
        currency: {
          code: "USD",
          __typename: "Currency",
        },
        __typename: "CurrencyAmount",
      },
      shortTrip: {
        value: 121262,
        currency: {
          code: "USD",
          __typename: "Currency",
        },
        __typename: "CurrencyAmount",
      },
      recommendation: {
        value: 64503,
        currency: {
          code: "USD",
          __typename: "Currency",
        },
        __typename: "CurrencyAmount",
      },
      __typename: "QuickSortPrices",
    },
    resultSetMetaData: {
      priceRange: {
        min: 64503,
        max: 670563,
        __typename: "PriceRange",
      },
      travelTimeRange: {
        min: 47700000,
        max: 159720000,
        __typename: "TravelTimeRange",
      },
      marketingCarriers: [
        {
          code: "IB",
          name: "Iberia",
          __typename: "CarrierNew",
        },
      ],
      __typename: "ResultSetMetaData",
    },
    routes: [
      {
        origin: {
          code: "MSY",
          name: "New Orleans",
          cityCode: "MSY",
          cityName: "New Orleans",
          countryCode: "US",
          countryName: "USA",
          continentCode: "NA",
          continentName: "North America",
          __typename: "RegionNew",
        },
        destination: {
          code: "ORY",
          name: "Paris Orly",
          cityCode: "PAR",
          cityName: "Paris",
          countryCode: "FR",
          countryName: "France",
          continentCode: "EU",
          continentName: "Europe",
          __typename: "RegionNew",
        },
        departureAt: "2024-02-15T00:00",
        departureDate: "2024-02-15",
        departureTimeOfDay: null,
        __typename: "TripRoute",
      },
    ],
    searchPath: "/air/MSYORY15FEB29FEB/1/-/-/c:Y",
    sponsoredTrips: [
      {
        id: "409827865558157",
        tripId: "0",
        isVI: false,
        includedCabinBaggage: {
          includedPersonalItem: true,
          size3d: {
            height: 23,
            length: 56,
            width: 36,
            __typename: "Size3d",
          },
          pieces: 1,
          weight: 0,
          weightUnit: "kg",
          __typename: "IncludedCabinBaggage",
        },
        includedCheckedBaggage: {
          pieces: 1,
          weight: 23,
          weightUnit: "kg",
          __typename: "IncludedCheckedBaggage",
        },
        bounds: [
          {
            boundId: "0",
            includedCabinBaggage: {
              pieces: 1,
              weight: 0,
              weightUnit: "kg",
              __typename: "IncludedCabinBaggage",
            },
            includedCheckedBaggage: {
              pieces: 2,
              weight: 23,
              weightUnit: "kg",
              __typename: "IncludedCheckedBaggage",
            },
            segments: [
              {
                __typename: "TripSegment",
                segmentId: "00",
                aircraftType: "Airbus A321-100/200",
                arrivedAt: "2024-02-15T12:24",
                brandedFareInformation: null,
                includedCabinBaggage: {
                  pieces: 1,
                  weight: null,
                  weightUnit: "kg",
                  __typename: "IncludedCabinBaggage",
                },
                includedCheckedBaggage: {
                  pieces: 2,
                  weight: 23,
                  weightUnit: "kg",
                  __typename: "IncludedCheckedBaggage",
                },
                cabinClassName: "Economy",
                departuredAt: "2024-02-15T09:30",
                destination: {
                  code: "CLT",
                  name: "Charlotte",
                  cityCode: "CLT",
                  cityName: "Charlotte",
                  airportCode: "CLT",
                  airportName: "Charlotte",
                  __typename: "RegionNew",
                },
                duration: 6840000,
                equipmentCode: "AIR",
                flightNumber: "AA2287",
                marketingCarrier: {
                  code: "AA",
                  name: "American Airlines",
                  __typename: "CarrierNew",
                },
                numberOfTechnicalStops: 0,
                operatingCarrier: {
                  code: "AA",
                  name: "American Airlines",
                  __typename: "CarrierNew",
                },
                operatingInformation: null,
                origin: {
                  code: "MSY",
                  name: "New Orleans",
                  cityCode: "MSY",
                  cityName: "New Orleans",
                  airportCode: "MSY",
                  airportName: "New Orleans",
                  __typename: "RegionNew",
                },
                segmentDetails: [
                  {
                    paxType: "ADT",
                    numberOfSeatsLeft: 7,
                    __typename: "SegmentDetailsNew",
                  },
                ],
              },
              {
                __typename: "EventSegment",
                segmentId: "0E",
                types: ["STOP"],
                duration: 12660000,
              },
              {
                __typename: "TripSegment",
                segmentId: "01",
                aircraftType: "Boeing 777-200",
                arrivedAt: "2024-02-16T05:45",
                brandedFareInformation: null,
                includedCabinBaggage: {
                  pieces: 1,
                  weight: null,
                  weightUnit: "kg",
                  __typename: "IncludedCabinBaggage",
                },
                includedCheckedBaggage: {
                  pieces: 2,
                  weight: 23,
                  weightUnit: "kg",
                  __typename: "IncludedCheckedBaggage",
                },
                cabinClassName: "PremiumEconomy",
                departuredAt: "2024-02-15T15:55",
                destination: {
                  code: "MAD",
                  name: "Madrid Barajas Apt",
                  cityCode: "MAD",
                  cityName: "Madrid",
                  airportCode: "MAD",
                  airportName: "Madrid Barajas Apt",
                  __typename: "RegionNew",
                },
                duration: 28200000,
                equipmentCode: "AIR",
                flightNumber: "AA748",
                marketingCarrier: {
                  code: "AA",
                  name: "American Airlines",
                  __typename: "CarrierNew",
                },
                numberOfTechnicalStops: 0,
                operatingCarrier: {
                  code: "AA",
                  name: "American Airlines",
                  __typename: "CarrierNew",
                },
                operatingInformation: null,
                origin: {
                  code: "CLT",
                  name: "Charlotte",
                  cityCode: "CLT",
                  cityName: "Charlotte",
                  airportCode: "CLT",
                  airportName: "Charlotte",
                  __typename: "RegionNew",
                },
                segmentDetails: [
                  {
                    paxType: "ADT",
                    numberOfSeatsLeft: 1,
                    __typename: "SegmentDetailsNew",
                  },
                ],
              },
              {
                __typename: "EventSegment",
                segmentId: "1E",
                types: ["STOP"],
                duration: 6000000,
              },
              {
                __typename: "TripSegment",
                segmentId: "02",
                aircraftType: "Airbus A320-100/200",
                arrivedAt: "2024-02-16T09:30",
                brandedFareInformation: null,
                includedCabinBaggage: {
                  pieces: 1,
                  weight: null,
                  weightUnit: "kg",
                  __typename: "IncludedCabinBaggage",
                },
                includedCheckedBaggage: {
                  pieces: 2,
                  weight: 23,
                  weightUnit: "kg",
                  __typename: "IncludedCheckedBaggage",
                },
                cabinClassName: "Economy",
                departuredAt: "2024-02-16T07:25",
                destination: {
                  code: "ORY",
                  name: "Paris Orly",
                  cityCode: "PAR",
                  cityName: "Paris",
                  airportCode: "ORY",
                  airportName: "Paris Orly",
                  __typename: "RegionNew",
                },
                duration: 7500000,
                equipmentCode: "AIR",
                flightNumber: "AA8766",
                marketingCarrier: {
                  code: "AA",
                  name: "American Airlines",
                  __typename: "CarrierNew",
                },
                numberOfTechnicalStops: 0,
                operatingCarrier: {
                  code: "IB",
                  name: "Iberia",
                  __typename: "CarrierNew",
                },
                operatingInformation: "Iberia",
                origin: {
                  code: "MAD",
                  name: "Madrid Barajas Apt",
                  cityCode: "MAD",
                  cityName: "Madrid",
                  airportCode: "MAD",
                  airportName: "Madrid Barajas Apt",
                  __typename: "RegionNew",
                },
                segmentDetails: [
                  {
                    paxType: "ADT",
                    numberOfSeatsLeft: 7,
                    __typename: "SegmentDetailsNew",
                  },
                ],
              },
            ],
            __typename: "BoundNew",
          },
          {
            boundId: "1",
            includedCabinBaggage: {
              pieces: 1,
              weight: 0,
              weightUnit: "kg",
              __typename: "IncludedCabinBaggage",
            },
            includedCheckedBaggage: {
              pieces: 1,
              weight: 23,
              weightUnit: "kg",
              __typename: "IncludedCheckedBaggage",
            },
            segments: [
              {
                __typename: "TripSegment",
                segmentId: "10",
                aircraftType: "Airbus A320-100/200",
                arrivedAt: "2024-02-29T14:45",
                brandedFareInformation: null,
                includedCabinBaggage: {
                  pieces: 1,
                  weight: null,
                  weightUnit: "kg",
                  __typename: "IncludedCabinBaggage",
                },
                includedCheckedBaggage: {
                  pieces: 1,
                  weight: 23,
                  weightUnit: "kg",
                  __typename: "IncludedCheckedBaggage",
                },
                cabinClassName: "Economy",
                departuredAt: "2024-02-29T12:40",
                destination: {
                  code: "MAD",
                  name: "Madrid Barajas Apt",
                  cityCode: "MAD",
                  cityName: "Madrid",
                  airportCode: "MAD",
                  airportName: "Madrid Barajas Apt",
                  __typename: "RegionNew",
                },
                duration: 7500000,
                equipmentCode: "AIR",
                flightNumber: "AA8577",
                marketingCarrier: {
                  code: "AA",
                  name: "American Airlines",
                  __typename: "CarrierNew",
                },
                numberOfTechnicalStops: 0,
                operatingCarrier: {
                  code: "IB",
                  name: "Iberia",
                  __typename: "CarrierNew",
                },
                operatingInformation: "Iberia",
                origin: {
                  code: "ORY",
                  name: "Paris Orly",
                  cityCode: "PAR",
                  cityName: "Paris",
                  airportCode: "ORY",
                  airportName: "Paris Orly",
                  __typename: "RegionNew",
                },
                segmentDetails: [
                  {
                    paxType: "ADT",
                    numberOfSeatsLeft: 7,
                    __typename: "SegmentDetailsNew",
                  },
                ],
              },
              {
                __typename: "EventSegment",
                segmentId: "2E",
                types: ["STOP"],
                duration: 5100000,
              },
              {
                __typename: "TripSegment",
                segmentId: "11",
                aircraftType: "Airbus A330-300",
                arrivedAt: "2024-02-29T20:20",
                brandedFareInformation: null,
                includedCabinBaggage: {
                  pieces: 1,
                  weight: null,
                  weightUnit: "kg",
                  __typename: "IncludedCabinBaggage",
                },
                includedCheckedBaggage: {
                  pieces: 1,
                  weight: 23,
                  weightUnit: "kg",
                  __typename: "IncludedCheckedBaggage",
                },
                cabinClassName: "Economy",
                departuredAt: "2024-02-29T16:10",
                destination: {
                  code: "MIA",
                  name: "Miami",
                  cityCode: "MIA",
                  cityName: "Miami",
                  airportCode: "MIA",
                  airportName: "Miami",
                  __typename: "RegionNew",
                },
                duration: 36600000,
                equipmentCode: "AIR",
                flightNumber: "AA8645",
                marketingCarrier: {
                  code: "AA",
                  name: "American Airlines",
                  __typename: "CarrierNew",
                },
                numberOfTechnicalStops: 0,
                operatingCarrier: {
                  code: "IB",
                  name: "Iberia",
                  __typename: "CarrierNew",
                },
                operatingInformation: "Iberia",
                origin: {
                  code: "MAD",
                  name: "Madrid Barajas Apt",
                  cityCode: "MAD",
                  cityName: "Madrid",
                  airportCode: "MAD",
                  airportName: "Madrid Barajas Apt",
                  __typename: "RegionNew",
                },
                segmentDetails: [
                  {
                    paxType: "ADT",
                    numberOfSeatsLeft: 7,
                    __typename: "SegmentDetailsNew",
                  },
                ],
              },
              {
                __typename: "EventSegment",
                segmentId: "3E",
                types: ["STOP"],
                duration: 8100000,
              },
              {
                __typename: "TripSegment",
                segmentId: "12",
                aircraftType: "Boeing 737-800",
                arrivedAt: "2024-02-29T23:46",
                brandedFareInformation: null,
                includedCabinBaggage: {
                  pieces: 1,
                  weight: null,
                  weightUnit: "kg",
                  __typename: "IncludedCabinBaggage",
                },
                includedCheckedBaggage: {
                  pieces: 1,
                  weight: 23,
                  weightUnit: "kg",
                  __typename: "IncludedCheckedBaggage",
                },
                cabinClassName: "Economy",
                departuredAt: "2024-02-29T22:35",
                destination: {
                  code: "MSY",
                  name: "New Orleans",
                  cityCode: "MSY",
                  cityName: "New Orleans",
                  airportCode: "MSY",
                  airportName: "New Orleans",
                  __typename: "RegionNew",
                },
                duration: 7860000,
                equipmentCode: "AIR",
                flightNumber: "AA2355",
                marketingCarrier: {
                  code: "AA",
                  name: "American Airlines",
                  __typename: "CarrierNew",
                },
                numberOfTechnicalStops: 0,
                operatingCarrier: {
                  code: "AA",
                  name: "American Airlines",
                  __typename: "CarrierNew",
                },
                operatingInformation: null,
                origin: {
                  code: "MIA",
                  name: "Miami",
                  cityCode: "MIA",
                  cityName: "Miami",
                  airportCode: "MIA",
                  airportName: "Miami",
                  __typename: "RegionNew",
                },
                segmentDetails: [
                  {
                    paxType: "ADT",
                    numberOfSeatsLeft: 7,
                    __typename: "SegmentDetailsNew",
                  },
                ],
              },
            ],
            __typename: "BoundNew",
          },
        ],
        brandedFares: null,
        availableExtraProducts: [
          {
            configuration: {
              productPreSelection: "NONE",
              __typename: "Configuration",
            },
            productId: "65",
            name: "Flexible Ticket",
            selectedWithTrip: false,
            sellSpecification: {
              sellPriceTravelers: [
                {
                  price: {
                    price: {
                      value: 37703,
                      __typename: "CurrencyAmount",
                    },
                    markup: null,
                    vat: null,
                    __typename: "Price",
                  },
                  __typename: "SellPriceTravelerNew",
                },
              ],
              __typename: "SellSpecificationTravelerNew",
            },
            __typename: "ExtraProduct",
          },
        ],
        includedExtraProducts: [
          {
            id: "6",
            texts: {
              name: "Checked baggage",
              productSummaryAlternativeName: null,
              readMoreText: null,
              receiptText: null,
              salesAbstract: "On this trip you are allowed 1X23 kg",
              __typename: "ExtraProductTexts",
            },
            __typename: "IncludedExtraProduct",
          },
        ],
        selectionKey:
          "AA2287-15Feb24-H_AA748-15Feb24-P_AA8766-16Feb24-H_AA8577-29Feb24-O_AA8645-29Feb24-O_AA2355-29Feb24-O,bebl22",
        type: "RETURN",
        tripCharacteristics: [],
        tripTravelers: [
          {
            id: "4098278655581570",
            ageType: "ADT",
            __typename: "TravelerNew",
          },
        ],
        paymentMethodPrices: [
          {
            name: "VISA",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "VISA Debit",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "VISA Electron",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "VISA Corporate",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "MASTERCARD",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "MAESTRO",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "MASTERCARD Debit",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "MASTERCARD Corporate",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "DINER'S CLUB",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "DISCOVER",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "AMERICAN EXPRESS",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "AMERICAN EXPRESS Corporate",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "JCB",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "JCB Corporate",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "CARD",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "Apple Pay",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "WALLET",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "Google Pay",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "WALLET",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "Affirm",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "WALLET",
            __typename: "PaymentMethodPrice",
          },
          {
            name: "PayPal",
            price: {
              value: 0,
              __typename: "CurrencyAmount",
            },
            type: "WALLET",
            __typename: "PaymentMethodPrice",
          },
        ],
        travelerPrices: [
          {
            id: "4098278655581570",
            price: {
              markup: {
                value: 6693,
                __typename: "CurrencyAmount",
              },
              price: {
                value: 209463,
                currency: {
                  code: "USD",
                  __typename: "Currency",
                },
                __typename: "CurrencyAmount",
              },
              vat: {
                value: 78770,
                __typename: "CurrencyAmount",
              },
              __typename: "Price",
            },
            taxesAndFees: [],
            travelerId: "4098278655581570",
            __typename: "TravelerPrice",
          },
        ],
        travelerPricesWithoutPaymentDiscounts: [
          {
            price: {
              markup: {
                value: 6693,
                __typename: "CurrencyAmount",
              },
              price: {
                value: 209463,
                currency: {
                  code: "USD",
                  __typename: "Currency",
                },
                __typename: "CurrencyAmount",
              },
              vat: {
                value: 78770,
                __typename: "CurrencyAmount",
              },
              __typename: "Price",
            },
            taxesAndFees: [],
            travelerId: "4098278655581570",
            __typename: "TravelerPrice",
          },
        ],
        tripTags: ["SPEED"],
        systems: null,
        voucherAmount: {
          value: 0,
          __typename: "CurrencyAmount",
        },
        shareableUrl:
          "https://www.gotogate.com/air/MSYORY15FEB29FEB/1/-/-/c:Y?selectionKey=AA2287-15Feb24-H_AA748-15Feb24-P_AA8766-16Feb24-H_AA8577-29Feb24-O_AA8645-29Feb24-O_AA2355-29Feb24-O,bebl22",
        __typename: "Trip",
      },
    ],
    travelers: [
      {
        ageType: "ADT",
        __typename: "SearchTraveler",
      },
    ],
    type: "RETURN",
    tripCampaigns: [],
    validWithVoucher: false,
    __typename: "Search",
  },
  meta: {
    currentPage: 1,
    limit: 10,
    totalRecords: 746,
    totalPage: 75,
  },
  status: true,
  message: "Successful",
};

const {
  priceRange,
  travelTimeRange,
  marketingCarriers: [airline],
} = flightsSample.data.resultSetMetaData;
const [route] = flightsSample.data.routes;
const currency = flightsSample.data.quickSortPrices.recommendation.currency;

const flightsReturn = { priceRange, travelTimeRange, airline, route, currency };

export type FlightInfo = typeof flightInfoSample;
export type FlightTypes = typeof flightsSample;
export type FlightsReturnTypes = typeof flightsReturn;
