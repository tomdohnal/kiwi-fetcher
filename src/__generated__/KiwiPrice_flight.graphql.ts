/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type KiwiPrice_flight$ref = any;
export type KiwiPrice_flight = {
    readonly departure: {
        readonly time: any | null;
        readonly airport: {
            readonly name: string | null;
        } | null;
    } | null;
    readonly arrival: {
        readonly time: any | null;
        readonly airport: {
            readonly name: string | null;
        } | null;
    } | null;
    readonly price: {
        readonly amount: number | null;
        readonly currency: string | null;
    } | null;
    readonly " $refType": KiwiPrice_flight$ref;
};



const node: ReaderFragment = (function(){
var v0 = [
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
      }
    ]
  }
];
return {
  "kind": "Fragment",
  "name": "KiwiPrice_flight",
  "type": "Flight",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": (v0/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": (v0/*: any*/)
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
};
})();
(node as any).hash = '547864394ded7419483deb9ee8fcc54f';
export default node;
