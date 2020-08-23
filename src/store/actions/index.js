const makeActionCreator = (type) => {
  return {
    type,
    start: (payload) => ({
      type,
      payload,
    }),
  };
};

const NAMESPACE = 'USERS';

export const getUsersInit = makeActionCreator(NAMESPACE + '/INIT');
export const getUsersSuccess = makeActionCreator(NAMESPACE + '/SUCCESS');
export const getUsersError = makeActionCreator(NAMESPACE + '/ERROR');
