import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const Test = ({ users: { loading, error, users }, dispatch }) => {
  useEffect(() => {
    dispatch.init();
  }, [dispatch]);

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <View>
      <Text>HOla mundo</Text>
      {error && <Text>Ups!, hubo un error!</Text>}
    </View>
  );
};

const mapStateToProps = (state, props) => ({
  ...props,
  users: state.users,
});

const mapDispatchToProps = (dispatch, props) => ({
  ...props,
  dispatch: {
    init: () =>
      dispatch({ type: actions.getUsersInit.type, payload: { loading: true } }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
