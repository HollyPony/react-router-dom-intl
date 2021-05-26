import React from 'react'
import { useIntl, } from 'react-intl'
import {
  Link as RRDLink,
  matchPath, useLocation,
} from 'react-router-dom'

export function Link ({ to, ...props }) {
  const intl = useIntl()

  return (
    <RRDLink to={intl.formatMessage({ id: to, defaultMessage: to })} {...props} />
    // <RRDLink to={intl.formatMessage({ id: to, defaultMessage: to })} {...props} />
  )
}

export function Switch ({ children, }) {
  const intl = useIntl()
  const location = useLocation()

  let element, match

  React.Children.forEach(children, child => {
    if (match == null && React.isValidElement(child)) {
      element = child

      const way = child.props.path || child.props.from

      const path = intl.formatMessage({ id: way, defaultMessage: way })

      match = path && matchPath(location.pathname, { ...child.props, path })
    }
  })

  return match
    ? React.cloneElement(element, { location, computedMatch: match })
    : null
}
