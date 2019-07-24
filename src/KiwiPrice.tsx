import React from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import 'styled-components/macro'
import * as types from 'styled-components/cssprop'
import { KiwiPrice_flight } from './__generated__/KiwiPrice_flight.graphql'
import AnimatedCard from './AnimatedCard'

interface Props {
  flight: KiwiPrice_flight
}

const formatDateString = (dateString: string) => {
  const date = new Date(dateString)

  return `${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}`
}

const KiwiPrice: React.FC<Props> = ({ flight }) => {
  const fromLocation = flight.arrival && flight.arrival.airport && flight.arrival.airport.name
  const fromDate = flight.arrival && flight.arrival.time && formatDateString(flight.arrival.time)

  const toLocation = flight.departure && flight.departure.airport && flight.departure.airport.name
  const toDate =
    flight.departure && flight.departure.time && formatDateString(flight.departure.time)
  const price = flight.price && flight.price.amount
  const currency = flight.price && flight.price.currency

  return (
    <AnimatedCard>
      <a href="/lol">
        <div
          css={{
            padding: 16,
          }}
        >
          <div
            css={{
              background: '#00A991',
              transform: 'rotate(-45deg)',
              position: 'absolute',
              color: 'white',
              left: '-22px',
              top: '18px',
              padding: '2px 16px',
              fontSize: '12px',
              textTransform: 'uppercase',
            }}
          >
            Great deal
          </div>
          <h1 css={{ color: '#005C4E' }}>
            <em>Better</em> offer on Kiwi
          </h1>
          <div css={{ marginBottom: 8 }}>
            <div css={{ color: '#616161', marginBottom: 2 }}>From</div>
            <div css={{ color: '#252A31' }}>
              {fromLocation}, {fromDate}
            </div>
          </div>
          <div css={{ marginBottom: 8 }}>
            <div css={{ color: '#616161', marginBottom: 2 }}>To</div>
            <div css={{ color: '#252A31' }}>
              {toLocation}, {toDate}
            </div>
          </div>
          <div css={{ marginBottom: 8 }}>
            <div css={{ color: '#616161', marginBottom: 2 }}>Just for</div>
            <div css={{ color: '#252A31', fontSize: 18 }}>
              <span
                css={{
                  borderBottom: '1px solid #ECF8F7',
                  boxShadow: '0px -4px 0px #ECF8F7 inset',
                }}
              >
                {price}
                {currency}*
              </span>
            </div>
            <div css={{ fontSize: 6, color: '#616161', marginTop: 16 }}>
              * the price is subject to change
            </div>
          </div>
        </div>
      </a>
    </AnimatedCard>
  )
}

export default createFragmentContainer(KiwiPrice, {
  flight: graphql`
    fragment KiwiPrice_flight on Flight {
      departure {
        time
        airport {
          name
        }
      }
      arrival {
        time
        airport {
          name
        }
      }
      price {
        amount
        currency
      }
    }
  `,
})
