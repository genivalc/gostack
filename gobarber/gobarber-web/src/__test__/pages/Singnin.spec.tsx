import { render } from '@testing-library/react';
import React from 'react';
import SignIn from '../../pages/SignIn';

// criar uma informação
jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: {children: React.ReactNode}) => children,
  };
});

describe('SignIn Page', () => {
  it('should be able to sign in', () => {
    const { debug } = render(<SignIn />);

    debug();
  });
});
