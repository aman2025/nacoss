import React from 'react';
import PropTypes from 'prop-types';
import { ConfigProvider } from '@alifd/next';
import { request } from '../../globalLib';

import './index.scss';

@ConfigProvider.config
class Music extends React.Component {
  static displayName = 'Music';

  static propTypes = {
    locale: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
        dataSource: [],
    };
  }

  getNameSpaces() {
    const { locale = {} } = this.props;
    request({
      type: 'get',
      beforeSend() {},
      url: 'v1/console/namespaces',
      success: res => {
        if (res.code === 200) {
          const data = res.data || [];
          window.namespaceList = data;
          this.setState({
            dataSource: data,
          });
        } else {

        }
      }
    });
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>music</div>
    );
  }
}

export default Music;
