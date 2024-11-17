import * as authService from '../../services/authService';

export const login = (credentials) => async (dispatch) => {
    const data = await authService.login(credentials);
    dispatch({ type: 'LOGIN_SUCCESS', payload: data.user });
};

export const logout = () => (dispatch) => {
    authService.logout();
    dispatch({ type: 'LOGOUT' });
};
