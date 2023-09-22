import { ThreeDots } from 'react-loader-spinner';
import { SpinnerContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <SpinnerContainer>
      <ThreeDots
        height="50"
        width="50"
        radius="9"
        color="rgb(63, 81, 181)"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </SpinnerContainer>
  );
};
