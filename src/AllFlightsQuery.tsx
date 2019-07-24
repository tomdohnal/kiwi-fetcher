// App.js
import React from 'react'
import { QueryRenderer } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import 'styled-components/macro'
import * as types from 'styled-components/cssprop'
import environment from './relay-environment'
import KiwiPrice from './KiwiPrice'
import { AllFlightsQuery } from './__generated__/AllFlightsQuery.graphql'

const search = {
  from: [{ location: 'PRG' }],
  to: [{ location: 'BKK' }],
  date: { from: '2019-07-24', to: '2019-07-28' },
}

const AllFlights: React.FC = () => {
  return (
    <QueryRenderer<AllFlightsQuery>
      environment={environment}
      query={graphql`
        query AllFlightsQuery($search: FlightsSearchInput!) {
          allFlights(search: $search) {
            edges {
              node {
                id
                ...KiwiPrice_flight
              }
            }
          }
        }
      `}
      variables={{
        search,
      }}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>
        }
        if (!props) {
          return <div>Loading...</div>
        }

        return (
          props.allFlights &&
          props.allFlights.edges &&
          props.allFlights.edges.map((edge) => {
            return (
              edge &&
              edge.node && (
                <div css={{ display: 'flex', alignItems: 'center', margin: 128 }}>
                  <KiwiPrice flight={edge.node} />
                </div>
              )
            )
          })
        )
      }}
    />
  )
}

export default AllFlights
