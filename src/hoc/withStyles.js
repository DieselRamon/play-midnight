import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import noop from 'lodash/noop';

import { selectors } from 'modules/options';

const mapStateToProps = state => ({
  theme: selectors.theme(state),
});

const withStyles = (styleGenerator = noop) => Component => {
  @connect(mapStateToProps)
  class StyleComponent extends PureComponent {
    generateStylesheet = () => {
      const { theme } = this.props;
      return styleGenerator(theme);
    };

    render() {
      return <Component Stylesheet={this.generateStylesheet()} {...this.props} />;
    }
  }

  return StyleComponent;
};

export default withStyles;
