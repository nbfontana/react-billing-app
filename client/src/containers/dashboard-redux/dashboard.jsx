import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getSummary} from './dashboard.actions';
import ContentHeader from 'components/template/content-header';
import Content from 'components/template/content';
import ValueBox from 'components/widget/value-box';
import Row from 'components/layout/row';

class DashboardRedux extends Component {

  componentWillMount() {
    this.props.getSummary();
  }

  render() {
    const {credit, debt} = this.props.summary;
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0"/>
        <Content>
          <Row>
            <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credit}`}
                      text="Total de Créditos"/>
            <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debt}`}
                      text="Total de Débitos"/>
            <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${credit - debt}`}
                      text="Valor Consolidado"/>
          </Row>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = state => ({summary: state.dashboard.summary});
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardRedux);
