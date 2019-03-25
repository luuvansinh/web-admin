import React from 'react'
import { translate } from 'react-i18next'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { key } from '../../../configs/locale'
import './style.less'


class NotFoundView extends React.Component {
  render() {
    const { t } = this.props
    return (
      <Row>
        <Col>
          <div className="wrapper-error">
            <h1>{t(key.error404)}</h1>
            <h3>{t(key.titleError404)}</h3>
            <Link to="/" className="link-go-home">{t(key.goHome)}</Link>
          </div>
        </Col>
      </Row>

    )
  }
}

export default (translate([key.translations])(NotFoundView))
