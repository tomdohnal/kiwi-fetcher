/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type KiwiPrice_flight$ref = any;
export type FlightsSearchInput = {
    readonly from: ReadonlyArray<LocationRadiusInput>;
    readonly to: ReadonlyArray<LocationRadiusInput>;
    readonly date: DateInput;
    readonly returnDate?: DateInput | null;
    readonly passengers?: PassengersInput | null;
};
export type LocationRadiusInput = {
    readonly location?: string | null;
    readonly radius?: RadiusInput | null;
};
export type RadiusInput = {
    readonly lat: number;
    readonly lng: number;
    readonly radius: number;
};
export type DateInput = {
    readonly exact?: any | null;
    readonly from?: any | null;
    readonly to?: any | null;
};
export type PassengersInput = {
    readonly adults: number;
    readonly infants?: number | null;
};
export type AllFlightsQueryVariables = {
    readonly search: FlightsSearchInput;
};
export type AllFlightsQueryResponse = {
    readonly allFlights: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": KiwiPrice_flight$ref;
            } | null;
        } | null> | null;
    } | null;
};
export type AllFlightsQuery = {
    readonly response: AllFlightsQueryResponse;
    readonly variables: AllFlightsQueryVariables;
};



/*
query AllFlightsQuery(
  $search: FlightsSearchInput!
) {
  allFlights(search: $search) {
    edges {
      node {
        id
        ...KiwiPrice_flight
      }
    }
  }
}

fragment KiwiPrice_flight on Flight {
  departure {
    time
    airport {
      name
      id
    }
  }
  arrival {
    time
    airport {
      name
      id
    }
  }
  price {
    amount
    currency
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "search",
    "type": "FlightsSearchInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "search",
    "variableName": "search"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "time",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      (v2/*: any*/)
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AllFlightsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allFlights",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "FlightConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "FlightEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Flight",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "FragmentSpread",
                    "name": "KiwiPrice_flight",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AllFlightsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allFlights",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "FlightConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "FlightEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Flight",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "departure",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": (v3/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "arrival",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": (v3/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "price",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Price",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "amount",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "currency",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AllFlightsQuery",
    "id": null,
    "text": "query AllFlightsQuery(\n  $search: FlightsSearchInput!\n) {\n  allFlights(search: $search) {\n    edges {\n      node {\n        id\n        ...KiwiPrice_flight\n      }\n    }\n  }\n}\n\nfragment KiwiPrice_flight on Flight {\n  departure {\n    time\n    airport {\n      name\n      id\n    }\n  }\n  arrival {\n    time\n    airport {\n      name\n      id\n    }\n  }\n  price {\n    amount\n    currency\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '5d870c81bed59dc94e9078fd9223e5e2';
export default node;
